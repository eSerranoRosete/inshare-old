import { type NextPage } from "next";

import * as App from "@/components/AppShell";

const Dashboard: NextPage = () => {
  return (
    <App.AppShell>
      <App.AppContent>
        <App.AppHeader heading="Dashboard" />
      </App.AppContent>
    </App.AppShell>
  );
};

export default Dashboard;
