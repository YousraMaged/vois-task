import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import KYCForm from "./KYCForm";

describe("KYCForm", () => {
  it("renders the KYCForm container", async () => {
    render(<KYCForm />);

    waitFor(() => {
      expect(screen.getByRole("form")).toBeInTheDocument();
    });
  });
});