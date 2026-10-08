import { useState, createContext, useEffect } from "react"

export const ProjectContext = createContext()

export const ProjectContextProvider = ({children}) => {
    const [showBack, setShowBack] = useState(() => {
        const saved = localStorage.getItem("showBack")
        return saved === "true"
    })

    useEffect(() => {
        localStorage.setItem("showBack", showBack)
    }, [showBack])

    return(
        <ProjectContext.Provider value={{ showBack, setShowBack }} >
            {children}
        </ProjectContext.Provider >
    )
}