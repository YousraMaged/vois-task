import { describe, it, expect } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { InputTypes, InputConfig } from "../../interfaces/inputConfig.interface";
import Form from "./Form";

const config: InputConfig[] = [
  {
    id: "name",
    label: "Name",
    type: InputTypes.TEXT,
  },
  {
    id: "age",
    label: "Age",
    type: InputTypes.NUMBER,
  },
];

describe("Form", () => {
  it("renders all fields from config", () => {
    const { getByLabelText } = render(<Form config={config} />);
    expect(getByLabelText("Name")).toBeInTheDocument();
    expect(getByLabelText("Age")).toBeInTheDocument();
  });

  it("resets form when reset button is clicked", () => {
    const { getByLabelText, getByText } = render(<Form config={config} />);
    const nameInput = getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Jane" } });

    const resetButton = getByText("Reset");
    fireEvent.click(resetButton);

    expect((nameInput as HTMLInputElement).value).toBe("");
  });

  it("shows error message when validation fails", async () => {
    const requiredConfig: InputConfig[] = [
      {
        id: "email",
        label: "Email",
        type: InputTypes.TEXT,
        required: true,
      },
    ];
    const { getByText, getByLabelText } = render(<Form config={requiredConfig} />);
    const emailInput = getByLabelText("Email");
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(getByText(/required/i)).toBeInTheDocument();
    });
  });

  it("disables submit button when form is invalid", async () => {
    const requiredConfig: InputConfig[] = [
      {
        id: "email",
        label: "Email",
        type: InputTypes.TEXT,
        required: true,
      },
    ];

    const { getByText } = render(<Form config={requiredConfig} />);

    waitFor(() => {
      const submitButton = getByText("Submit");
      expect(submitButton).toBeDisabled();
    })
  });
});