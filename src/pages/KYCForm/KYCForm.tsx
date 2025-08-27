import Form from "../../components/Form/Form";
import KYCFormConfig from "../../constants/KYCFormConfig";
import "./KYCForm.css";

const KYCForm = () => {
  return (
    <div className="kyc-form-container">
      <Form config={KYCFormConfig} />;
    </div>
  );
};

export default KYCForm;
