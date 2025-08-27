import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("renders the Menubar component", () => {
    render(<Header />);
    expect(screen.getByRole("menubar")).toBeInTheDocument();
  });

  it("renders the Home menu item", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});