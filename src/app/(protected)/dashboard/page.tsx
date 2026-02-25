import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { usersToClinicsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import { DataTable } from "@/components/ui/data-table";
import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageTitle,
  PageDescription,
  PageActions,
  PageContent,
} from "@/components/ui/page-container";
import AddPatientButton from "../patients/_components/add-patient-button";
import { PatiensTableColumns } from "../patients/_components/table-columns";
import { DatePicker } from "./components/date-picker";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  const clinics = await db.query.usersToClinicsTable.findMany({
    where: eq(usersToClinicsTable.userId, session.user.id),
  });
  if (clinics.length === 0) {
    redirect("/clinic-form");
  }
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Pacientes</PageTitle>
          <PageDescription>
            Acesse uma visão detalhada de todos os seus pacientes
          </PageDescription>
        </PageHeaderContent>
        <PageActions>
          {/* <AddPatientButton /> */}
          <DatePicker />
          <></>
        </PageActions>
      </PageHeader>
      <PageContent>
        <></>
      </PageContent>
    </PageContainer>
  );
};

export default DashboardPage;
