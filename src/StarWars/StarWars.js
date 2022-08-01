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

// Prop drilling --> pass props from a component to another component too many times

// ComponentCard --> NewComponent2
// ComponentCard --> NewComponent
// ComponentCard --> NewComponent3
// ComponentCard --> NewComponent4
// ComponentCard --> NewComponent5

// store --> NewComponent2 --> action --> dispatch
// store --> NewComponent --> action --> dispatch

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
      <NewComponent personData={personData} setPersonData={setPersonData} />
      <NewComponent2 personData={personData} setPersonData={setPersonData} />
    </div>
  );
};

const NewComponent = ({ personData, setPersonData }) => {
  const changeSomeData = () => setPersonData("");
  return (
    <>
      <h1>{personData?.properties?.name}</h1>
      <button onClick={changeSomeData}></button>
    </>
  );
};

const NewComponent2 = ({ personData, setPersonData }) => {
  const changeSomeData = () => setPersonData("2");
  return (
    <>
      <h1>{personData?.properties?.name}</h1>
      <button onClick={changeSomeData}></button>
    </>
  );
};
