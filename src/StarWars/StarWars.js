import { useState, useEffect } from "react";

export const StarWars = () => {
  const [state, setState] = useState(null);

  // useEffect --> this is going to udpate the componet (the first time) or (whenever we tell it to do so)
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people?page=1&limit=10")
      .then((response) => response.json())
      .then((result) => setState(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  if (!state) return <div>Loading...</div>;

  return (
    <div>
      {state.map((person) => (
        <div key={person.name}>
          <ComponentCard person={person} />
        </div>
      ))}
    </div>
  );
};

const ComponentCard = ({ person }) => {
  const [personData, setPersonData] = useState("");

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${person.uid}`)
      .then((response) => response.json())
      .then((result) => setPersonData(result.result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!personData) return null;

  return (
    <div>
      <h1>{personData?.properties?.name}</h1>
      <p>{personData?.properties?.birth_year}</p>
      <p>{personData?.properties?.height}</p>
    </div>
  );
};
