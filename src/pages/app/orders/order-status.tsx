export type OrderStatusType =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatusType;
}

const orderStatusMap: Record<OrderStatusType, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  processing: "Em preparo",
  delivering: "Em entrega",
  delivered: "Entregue",
};

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span
          data-test-id="badge"
          className="h-2 w-2 rounded-full bg-slate-400"
        ></span>
      )}
      {status === "canceled" && (
        <span
          data-test-id="badge"
          className="h-2 w-2 rounded-full bg-rose-500"
        ></span>
      )}
      {status === "delivered" && (
        <span
          data-test-id="badge"
          className="h-2 w-2 rounded-full bg-emerald-500"
        ></span>
      )}
      {["processing", "delivering"].includes(status) && (
        <span
          data-test-id="badge"
          className="h-2 w-2 rounded-full bg-amber-400"
        ></span>
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
}
