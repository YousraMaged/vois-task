import { useContext } from "react";
import { AlertContext } from "../providers/Alert.provider";

export const useAlert = () => {
  const context = useContext(AlertContext);
  return context;
};
