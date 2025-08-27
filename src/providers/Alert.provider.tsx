import React, { createContext, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { ToastMessage } from 'primereact/toast';

type AlertContextType = {
  showSuccess?: (message: string, title?: string) => void;
  showError?: (message: string, title?: string) => void;
  showInfo?: (message: string, title?: string) => void;
};

const AlertContext = createContext<AlertContextType>({});

const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const toastRef = useRef<Toast>(null);

  const showSuccess = (message: string, title: string = 'Success') => {
    toastRef.current?.show({
      severity: 'success',
      summary: title,
      detail: message,
      life: 3000,
    } as ToastMessage);
  };

  const showError = (message: string, title: string = 'Error') => {
    toastRef.current?.show({
      severity: 'error',
      summary: title,
      detail: message,
      life: 3000,
    } as ToastMessage);
  };

  const showInfo = (message: string, title: string = 'Info') => {
    toastRef.current?.show({
      severity: 'info',
      summary: title,
      detail: message,
      life: 3000,
    } as ToastMessage);
  };

  return (
    <AlertContext.Provider value={{ showSuccess, showError, showInfo }}>
      <Toast ref={toastRef} />
      {children}
    </AlertContext.Provider>
  );
};

export { AlertContext, AlertProvider };