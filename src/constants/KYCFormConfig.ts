import { InputTypes } from "../interfaces/inputConfig.interface";

const KYCFormConfig = [
  {
    id: "full_name",
    label: "Full Name",
    type: InputTypes.TEXT,
    required: true,
  },
  {
    id: "age",
    label: "Age",
    type: InputTypes.NUMBER,
    required: true,
  },
  {
    id: "gender",
    label: "Gender",
    type: InputTypes.RADIO_BUTTONS,
    options: ["Male", "Female", "Other"],
  },
  {
    id: "hobbies",
    label: "Hobbies",
    type: InputTypes.MULTI_CHOICE,
    options: ["Reading", "Traveling", "Sports", "Gaming"],
    min: 1,
    max: 3,
  },
  {
    id: "country",
    label: "Country of Residence",
    type: InputTypes.DROP_DOWN,
    options: ["Egypt", "USA", "Germany", "Other"],
  },
];

export default KYCFormConfig;