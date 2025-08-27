import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { RouterProvider } from "react-router-dom";
import { AlertProvider } from "./providers/Alert.provider.tsx";
import router from "./routes/router.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <AlertProvider>
        <RouterProvider router={router} />
      </AlertProvider>
    </PrimeReactProvider>
  </StrictMode>
);
