import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { OrderStatus } from "./order-status";

describe("Order Status", () => {
  it("should display the right text based on order status", () => {
    const wrapper = render(<OrderStatus status="pending" />);

    const statusText = wrapper.getByText("Pendente");
    const basgeElement = wrapper.getByText("Pendente");

    expect(statusText).toBeInTheDocument();
  });
});
