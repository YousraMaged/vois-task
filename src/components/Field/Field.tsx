import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import {
  InputTypes,
  InputConfig,
  InputValue,
} from "../../interfaces/inputConfig.interface";
import "./Field.css";
import { Fragment } from "react/jsx-runtime";

const Field = ({
  field,
  value,
  touched,
  error,
  onChange,
  ...rest
}: {
  field: InputConfig;
  value: InputValue;
  error: string | undefined;
  touched: boolean | undefined;
  onChange: (value: InputValue) => void;
  onBlur: () => void;
}) => {
  const renderField = () => {
    switch (field.type) {
      case InputTypes.TEXT:
        return (
          <InputText
            id={field.id}
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            invalid={touched && !!error}
            {...rest}
          />
        );
      case InputTypes.NUMBER:
        return (
          <InputText
            id={field.id}
            type="number"
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            invalid={touched && !!error}
            {...rest}
          />
        );

      case InputTypes.MULTI_CHOICE:
        return (
          <MultiSelect
            id={field.id}
            value={value as string[]}
            onChange={(e) => onChange(e.value)}
            options={field.options}
            placeholder="Select"
            selectAllLabel="Select All"
            maxSelectedLabels={3}
            invalid={touched && !!error}
            {...rest}
          />
        );
      case InputTypes.RADIO_BUTTONS:
        return (
          <Fragment key={field.id}>
            {field.options?.map((option, index) => (
              <div className="radio-button" key={index}>
                <RadioButton
                  key={index}
                  id={option}
                  checked={value === option}
                  onChange={() => onChange(option)}
                  invalid={touched && !!error}
                  {...rest}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </Fragment>
        );
      case InputTypes.DROP_DOWN:
        return (
          <Dropdown
            id={field.id}
            value={value as string}
            options={field.options}
            placeholder="Select"
            checkmark={true}
            highlightOnSelect={false}
            onChange={(e) => onChange(e.value)}
            invalid={touched && !!error}
            {...rest}
          />
        );
      case InputTypes.DATE:
        return (
          <Calendar
            inputId={field.id}
            value={value as Date}
            invalid={touched && !!error}
            onChange={(e) => onChange(e.value ?? null)}
            {...rest}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="field-wrapper">
      <label htmlFor={field.id}>{field.label}</label>
      {renderField()}
      {touched && error && <p className="error">{error}</p>}
    </div>
  );
};

export default Field;
