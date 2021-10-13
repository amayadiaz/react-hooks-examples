import { useState, useEffect, useContext } from "react";
import ProjectContext from "../context/ProjectContext";

export const Effect = () => {
  const [data, setData] = useState({});
  const [time, setTime] = useState('');

  const { isLogged, setIsLogged } = useContext(ProjectContext);

  const handleClickLogin = () => {
    setIsLogged(!isLogged);
  }
  
  const getData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const { results } = await response.json();
    setData(results);
  };

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString('en-US'))
    }, 1000);
  }, [time])
  
  return (
    <>
      <h2>Use Effect</h2>
      <p>Rick and Morty API First Name: <b>{data[0]?.name}</b></p>
      <p>{time}</p>
      <h3>Session Status: { isLogged ? "Started" : "Closed"}</h3>
      <button type="button" onClick={handleClickLogin}>{ isLogged ? "Sign Out" : "Sign In" }</button>
    </>
  );
}