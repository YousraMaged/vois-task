import React, { createContext, useRef } from "react";
import { Toast } from "primereact/toast";
import { ToastMessage } from "primereact/toast";

type AlertContextType = {
  showSuccess?: (message: string, title?: string) => void;
  showError?: (message: string, title?: string) => void;
  showInfo?: (message: string, title?: string) => void;
};

const AlertContext = createContext<AlertContextType>({});

const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const toastRef = useRef<Toast>(null);

  const showToast = (
    message: string,
    severity: "success" | "error" | "info",
    title?: string
  ) => {
    toastRef.current?.show({
      severity,
      summary: title,
      detail: message,
      life: 3000,
    } as ToastMessage);
  };

  const showSuccess = (message: string, title: string = "Success") => {
    showToast(message, "success", title);
  };

  const showError = (message: string, title: string = "Error") => {
    showToast(message, "error", title);
  };

  const showInfo = (message: string, title: string = "Info") => {
    showToast(message, "info", title);
  };

  return (
    <AlertContext.Provider value={{ showSuccess, showError, showInfo }}>
      <Toast ref={toastRef} />
      {children}
    </AlertContext.Provider>
  );
};

export { AlertContext, AlertProvider };
