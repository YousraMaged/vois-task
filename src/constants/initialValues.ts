import { InputTypes, InputValue } from "../interfaces/inputConfig.interface";

export const initialInputValues: Record<InputTypes, InputValue> = {
  [InputTypes.TEXT]: '',
  [InputTypes.NUMBER]: '',
  [InputTypes.MULTI_CHOICE]: [],
  [InputTypes.RADIO_BUTTONS]: '',
  [InputTypes.DROP_DOWN]: '',
  [InputTypes.DATE]: '',
};