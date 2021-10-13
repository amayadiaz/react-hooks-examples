import React, { useState } from 'react'; 

const ProjectContext = React.createContext({});

export const ProjectContextProvider = ({ children } ) => {
  const [isLogged, setIsLogged] = useState(false); 

  return (
    <ProjectContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext;