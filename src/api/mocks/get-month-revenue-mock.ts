import { http, HttpResponse } from "msw";

import { GetMonthOrdersRevenueResponse } from "../get-month-revenue";

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthOrdersRevenueResponse
>("/metrics/month-receipt", () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: 10,
  });
});
