import { useState, useEffect } from "react";

export const Effect = () => {
  const [data, setData] = useState({});
  const [time, setTime] = useState('');
  
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
    </>
  );
}