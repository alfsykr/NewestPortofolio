import { Metadata } from "next";
import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Dashboard from "@/modules/dashboard/components/Dashboard";
import { METADATA, baseUrl } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Dashboard ${METADATA.exTitle}`,
  description: "Personal dashboard with Next.js API routes",
  keywords: "dashboard, analytics",
  alternates: {
    canonical: `${baseUrl}/dashboard`,
  },
};

const DashboardPage = () => {
  const t = useTranslations("DashboardPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Dashboard />
    </Container>
  );
};

export default DashboardPage;
