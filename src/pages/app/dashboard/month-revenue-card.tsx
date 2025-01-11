import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

import { getMonthOrdersRevenue } from "@/api/get-month-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MonthRevenueCard() {
  const { data: monthOrdersRevenue } = useQuery({
    queryFn: getMonthOrdersRevenue,
    queryKey: ["metrics", "month-orders-revenue"],
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersRevenue?.receipt.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>

            <p className="text-sm text-muted-foreground">
              {monthOrdersRevenue.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthOrdersRevenue?.diffFromLastMonth}
                  </span>{" "}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthOrdersRevenue?.diffFromLastMonth}
                  </span>{" "}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
