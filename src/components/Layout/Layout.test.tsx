import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import Layout from "./Layout";

vi.mock("../Header/Header", () => ({
  default: () => <header data-testid="header">Header</header>,
}));

vi.mock("react-router-dom", () => ({
  Outlet: () => <div data-testid="outlet">Outlet</div>,
}));

describe("Layout", () => {
  it("renders Header and Outlet components", () => {
    const { getByTestId } = render(<Layout />);
    expect(getByTestId("header")).toBeInTheDocument();
    expect(getByTestId("outlet")).toBeInTheDocument();
  });
});