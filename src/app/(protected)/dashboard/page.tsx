import { and, count, eq, gte, lte, sum } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "@/db";
import {
  appointmentsTable,
  doctorsTable,
  patientsTable,
  usersToClinicsTable,
} from "@/db/schema";
import { auth } from "@/lib/auth";

import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageTitle,
  PageDescription,
  PageActions,
  PageContent,
} from "@/components/ui/page-container";

import { DatePicker } from "./components/date-picker";
import StatsCards from "./components/stats-cards";
import dayjs from "dayjs";
import { getDashboard } from "@/data/get-dashboard";
import AppointmentsChart from "./components/revenue-charts";

interface DashboardPageProps {
  searchParams: Promise<{
    from: string;
    to: string;
  }>;
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
  const { from, to } = await searchParams;
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }

  if (!session.user.clinic) {
    redirect("/clinic-form");
  }
  //AQUI NESSSA PARTE VAI TER QUE SER FEITO UMA VERIFICAÇÃO
  // SE EXISTE O FROM E O TO, SE NÃO EXISTIR VAI REDIRECIONAR
  // PARA MESMA ROTA PASSANDO O FROM COMO DATA ATUAL E O TO COMO
  // DATA ATUAL + 1 MES, ISSO VAI GARANTIR QUE SEMPRE TENHA UM INTERVALO
  // DE DATA PARA SER FEITO AS CONSULTAS NO BANCO DE DADOS, POIS O DASHBOARD
  // DEPENDE DISSO PARA FUNCIONAR
  if (!from || !to) {
    redirect(
      `/dashboard?from=${dayjs().format("YYYY-MM-DD")}&to=${dayjs().add(1, "month").format("YYYY-MM-DD")}`,
    );
  }
  const {
    totalRevenue,
    totalAppointments,
    totalPatients,
    totalDoctors,
    topDoctors,
    topSpecialties,
    todayAppointments,
    dailyAppointmentsData,
  } = await getDashboard({
    from,
    to,
    session: {
      user: {
        clinic: {
          id: session.user.clinic.id,
        },
      },
    },
  });
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Dashboard</PageTitle>
          <PageDescription>
            Access a detailed overview of key metrics and patient outcomes
          </PageDescription>
        </PageHeaderContent>
        <PageActions>
          {/* <AddPatientButton /> */}
          <DatePicker />
          <></>
        </PageActions>
      </PageHeader>
      <PageContent>
        <StatsCards
          totalRevenue={totalRevenue.total ? Number(totalRevenue.total) : null}
          totalAppointments={totalAppointments.total}
          totalPatients={totalPatients.total}
          totalDoctors={totalDoctors.total}
        />
        <div className="grid grid-cols-[2.25fr_1fr]">
          <AppointmentsChart dailyAppointmentsData={dailyAppointmentsData} />
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default DashboardPage;
