import { useState, useContext } from "react";
import ProjectContext from "../context/ProjectContext";

export const State = () => {
  const [isGreen, setIsGreen] = useState(false); 
  const [counter, setCounter] = useState(0);

  const handleColor = () => isGreen ? setIsGreen(false) : setIsGreen(true);
  const handleCounter = () => setCounter((prev) => prev + 1);

  const { isLogged, setIsLogged } = useContext(ProjectContext);

  const handleClickLogin = () => {
    setIsLogged(!isLogged);
  }

  return (
      <>
        <h2>Use State</h2>
        <p>Click to play with examples: </p>
        <h3 style={{ color: isGreen ? "#39A64C" : "#FF8F22", cursor: 'pointer'}} onClick={handleColor}>Hooks Example Text</h3>
        <h3 onClick={handleCounter} style={{cursor: 'pointer'}}>{counter}</h3>
        <h3>Session Status: { isLogged ? "Started" : "Closed"}</h3>
        <button type="button" onClick={handleClickLogin}>{ isLogged ? "Sign Out" : "Sign In" }</button>
      </>
  );
}