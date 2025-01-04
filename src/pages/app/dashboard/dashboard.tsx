import { Helmet } from "react-helmet-async";

import { MonthRevenueCard } from "./month-revenue-card";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-bold tracking-tight">Dashboard</div>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
        </div>
      </div>
    </>
  );
}
