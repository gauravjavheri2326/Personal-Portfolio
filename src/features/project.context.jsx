import { useState, createContext } from "react"
import { useLocation } from "react-router"

export const ProjectContext = createContext()

export const ProjectContextProvider = ({children}) => {

    const [navigate, setNavigate] = useState(false)

    const location = useLocation()
    const showBack = location.pathname.startsWith("/project-info")

    return(
        <ProjectContext.Provider value={{ showBack, navigate, setNavigate }} >
            {children}
        </ProjectContext.Provider >
    )
}