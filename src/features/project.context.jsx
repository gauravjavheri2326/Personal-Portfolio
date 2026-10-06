import { useState, createContext } from "react"

export const ProjectContext = createContext()

export const ProjectContextProvider = ({children}) => {
    const [showBack, setShowBack] = useState(false)

    return(
        <ProjectContext.Provider value={{ showBack, setShowBack }} >
            {children}
        </ProjectContext.Provider >
    )
}