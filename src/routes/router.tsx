import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { ROUTES } from "./paths";
import Layout from "../components/Layout/Layout";

const KYCForm = lazy(() => import("../pages/KYCForm/KYCForm"));

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <KYCForm />,
      },
       {
        path: ROUTES.NOT_FOUND,
        element: <div>404 Not Found</div>
      }
    ],
  },
]);

export default router;
