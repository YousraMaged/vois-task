export interface InputConfig {
  id: string;
  label: string;
  type: InputTypes;
  required?: boolean;
  options?: string[];
  min?: number;
  max?: number;
}

export enum InputTypes {
  TEXT = 'text',
  NUMBER = 'number',
  MULTI_CHOICE = 'multi_choice',
  RADIO_BUTTONS = 'radio_buttons',
  DROP_DOWN = 'drop_down',
  DATE = 'date'
}

export type InputValue = string | number | string[] | Date | null;
