import dynamic from "next/dynamic";

import Breakline from "@/common/components/elements/Breakline";
import { GITHUB_ACCOUNTS } from "@/common/constants/github";
import { CODEWARS_ACCOUNT } from "@/common/constants/codewars";

const Contributions = dynamic(
  () => import("./Contributions"),
  { ssr: false }
);

const Codewars = dynamic(
  () => import("./Codewars"),
  { ssr: false }
);

const Monkeytype = dynamic(
  () => import("./Monkeytype"),
  { ssr: false }
);

const Dashboard = () => {
  return (
    <>
      <Contributions endpoint={GITHUB_ACCOUNTS.endpoint} />
      <Breakline className="my-8" />
      <Codewars endpoint={CODEWARS_ACCOUNT.endpoint} />
      <Breakline className="my-8" />
      <Monkeytype />
    </>
  );
};

export default Dashboard;
