import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Field from "./Field";
import { InputTypes, InputConfig } from "../../interfaces/inputConfig.interface";

const baseField: InputConfig = {
  id: "test",
  label: "Test Label",
  type: InputTypes.TEXT,
};

describe("Field", () => {
  it("renders text input", () => {
    const onChange = vi.fn();
    const { getByLabelText } = render(
      <Field
        field={{ ...baseField, type: InputTypes.TEXT }}
        value="abc"
        touched={false}
        error={undefined}
        onChange={onChange}
        onBlur={() => {}}
      />
    );
    const input = getByLabelText("Test Label");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "def" } });
    expect(onChange).toHaveBeenCalledWith("def");
  });

  it("renders number input", () => {
    const onChange = vi.fn();
    const { getByLabelText } = render(
      <Field
        field={{ ...baseField, type: InputTypes.NUMBER }}
        value="123"
        touched={false}
        error={undefined}
        onChange={onChange}
        onBlur={() => {}}
      />
    );
    const input = getByLabelText("Test Label");
    expect(input).toHaveAttribute("type", "number");
    fireEvent.change(input, { target: { value: "456" } });
    expect(onChange).toHaveBeenCalledWith("456");
  });

  it("renders multi select", async () => {
    const onChange = vi.fn();
    const options = ["A", "B", "C"];
    const { getByPlaceholderText } = render(
      <Field
        field={{
          ...baseField,
          type: InputTypes.MULTI_CHOICE,
          options,
        }}
        value={["A"]}
        touched={false}
        error={undefined}
        onChange={onChange}
        onBlur={() => {}}
      />
    );

    waitFor(() => {
      expect(getByPlaceholderText("Select")).toBeInTheDocument();
    });
  });

  it("renders radio buttons", async () => {
    const onChange = vi.fn();
    const options = ["Yes", "No"];
    const { getByLabelText } = render(
      <Field
        field={{
          ...baseField,
          type: InputTypes.RADIO_BUTTONS,
          options,
        }}
        value="Yes"
        touched={false}
        error={undefined}
        onChange={onChange}
        onBlur={() => {}}
      />
    );

    waitFor(() => {

      const yesRadio = getByLabelText("Yes");
      expect(yesRadio).toBeInTheDocument();
      fireEvent.click(yesRadio);
      expect(onChange).toHaveBeenCalledWith("Yes");
    })
  });

  it("renders dropdown", async () => {
    const onChange = vi.fn();
    const options = ["One", "Two"];
    const { getByPlaceholderText } = render(
      <Field
        field={{
          ...baseField,
          type: InputTypes.DROP_DOWN,
          options,
        }}
        value="One"
        touched={false}
        error={undefined}
        onChange={onChange}
        onBlur={() => {}}
      />
    );
  
    waitFor(() => {
      expect(getByPlaceholderText("Select")).toBeInTheDocument();
    });
  });

  it("renders calendar", () => {
    const onChange = vi.fn();
    const date = new Date();
    const { container } = render(
      <Field
        field={{
          ...baseField,
          type: InputTypes.DATE,
        }}
        value={date}
        touched={false}
        error={undefined}
        onChange={onChange}
        onBlur={() => {}}
      />
    );
    expect(container.querySelector(".p-calendar")).toBeTruthy();
  });

  it("shows error message when touched and error", () => {
    const { getByText } = render(
      <Field
        field={baseField}
        value=""
        touched={true}
        error="Required"
        onChange={() => {}}
        onBlur={() => {}}
      />
    );
    expect(getByText("Required")).toBeInTheDocument();
  });
});