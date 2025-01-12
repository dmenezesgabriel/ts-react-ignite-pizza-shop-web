import { http, HttpResponse } from "msw";

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "../get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>(`/orders/:orderId`, ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "12345678901",
    },
    status: "pending",
    createdAt: new Date().toLocaleDateString(),
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 1000,
        product: { name: "Pizza Pepperoni" },
        quantity: 1,
      },
      {
        id: "order-item-1",
        priceInCents: 2000,
        product: { name: "Pizza Margherita" },
        quantity: 2,
      },
    ],
    totalInCents: 5000,
  });
});
