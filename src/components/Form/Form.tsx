import { Fragment } from "react/jsx-runtime";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import {
  InputConfig,
  InputValue,
} from "../../interfaces/inputConfig.interface";
import { generateValidationSchema } from "../../helper/generateValidationSchema";
import { initialInputValues } from "../../constants/initialValues";
import { useAlert } from "../../hooks/useAlert";
import Field from "../Field/Field";
import "./Form.css";

const Form = ({ config }: { config: InputConfig[] }) => {
  const { showSuccess } = useAlert();
  const schema = generateValidationSchema(config);
  const formik = useFormik({
    initialValues: config.reduce((acc, field) => {
      acc[field.id] = initialInputValues[field.type];
      return acc;
    }, {} as Record<string, InputValue>),
    onSubmit: (values) => {
      console.log(values);
      showSuccess?.("Answers submitted successfully!", "Success");
      formik.resetForm();
    },
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
  });
  
  return (

    <form onSubmit={formik.handleSubmit}>
      {config.map((item) => (
        <Fragment key={item.id}>
          <Field
            value={formik.values[item.id]}
            onChange={(value) => formik.setFieldValue(item.id, value)}
            onBlur={() => formik.setFieldTouched(item.id, true)}
            field={item}
            error={formik.errors[item.id]}
            touched={formik.touched[item.id]}
          />
        </Fragment>
      ))}
      <div className="form-actions">
        <Button
          className="reset-button"
          disabled={!formik.touched}
          outlined
          label="Reset"
          type="button"
          onClick={() => formik.resetForm()}
        />

        <Button
          className="submit-button"
          disabled={!formik.isValid || formik.isSubmitting}
          label="Submit"
          type="submit"
        />
      </div>
    </form>
  );
};

export default Form;
