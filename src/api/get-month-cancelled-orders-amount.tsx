import { api } from "@/lib/axios";

export interface GetMonthCancelledAmountResponse {
  amount: number;
  diffFromLastMonth: number;
}

export async function getMonthCancelledAmount() {
  const response = await api.get<GetMonthCancelledAmountResponse>(
    "/metrics/month-canceled-orders-amount",
  );

  return response.data;
}
