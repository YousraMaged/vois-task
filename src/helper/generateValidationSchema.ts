import * as Yup from 'yup';
import { InputTypes, InputConfig } from '../interfaces/inputConfig.interface';

export const generateValidationSchema = (config: InputConfig[]) => {
  const shape: Yup.ObjectShape = {};

  config.forEach((item) => {
    if (item.type === InputTypes.MULTI_CHOICE) {
      let validator = Yup.array();
      validator = validator.required(`${item.label} is required`);
     
      if (item.min) {
        validator = validator.min(item.min, `Select at least ${item.min} options`);
      }
      if (item.max) {
        validator = validator.max(item.max, `Select at most ${item.max} options`);
      }
      shape[item.id] = validator;
    } else {
      let validator = Yup.mixed();
      if (item.required) {
        validator = validator.required(`${item.label} is required`);
      }
      shape[item.id] = validator;
    }
  });

  return Yup.object().shape(shape);
};
