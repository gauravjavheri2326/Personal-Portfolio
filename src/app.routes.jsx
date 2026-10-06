import { createBrowserRouter } from "react-router"
import App from "./App.jsx"
import MainPage from "./features/sections/MainPage"
import ProjectInfo from "./features/pages/ProjectInfo"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "project-info/:projectName",
                element: <ProjectInfo/>
            }
        ]
    }
])