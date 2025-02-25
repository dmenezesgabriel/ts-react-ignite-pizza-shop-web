import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

import { getMonthCancelledAmount } from "@/api/get-month-cancelled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthCanceledOrdersAmountCard() {
  const { data: monthCancelledAmount } = useQuery({
    queryFn: getMonthCancelledAmount,
    queryKey: ["metrics", "month-canceled-orders-amount"],
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCancelledAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCancelledAmount?.amount.toLocaleString("pt-BR")}
            </span>

            <p className="text-sm text-muted-foreground">
              {monthCancelledAmount.diffFromLastMonth <= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthCancelledAmount.diffFromLastMonth}%
                  </span>{" "}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthCancelledAmount?.diffFromLastMonth}%
                  </span>{" "}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
