import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home.tsx";
import SubjectPages from "./pages/Subject/Subject.tsx";
import GradePages from "./pages/Grade/Grade.tsx";
import MaterialPages from "./pages/Material/Material.tsx";
import PDFViewPages from "./pages/PDFView/PDFView.tsx";
import DownloadPages from "./pages/Download/Download.tsx";
import AboutPages from "./pages/About/About.tsx";
import Pages404 from "./pages/404/404.tsx";
import Loading from "./components/Loading/Loading.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/subject/:subjectId?",
        element: <SubjectPages />,
    },
    {
        path: "/:subject",
        element: <GradePages />,
    },
    {
        path: "/:subject/:grade",
        element: <MaterialPages />,
    },
    {
        path: "/:subject/:grade/:materialId",
        element: <PDFViewPages />,
    },
    {
        path: "/download",
        element: <DownloadPages />,
    },
    {
        path: "/about",
        element: <AboutPages />,
    },
    {
        path: "/404",
        element: <Pages404 />,
    },
    {
        path: "*",
        element: <Pages404 />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>
);
