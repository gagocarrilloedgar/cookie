import { useState, useEffect } from "react";

export const StarWars = () => {
  const [state, setState] = useState(null);

  // useEffect --> this is going to udpate the componet (the first time) or (whenever we tell it to do so)
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/4")
      .then((response) => response.json())
      .then((result) => setState(result.result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!state) return <div>Loading...</div>;

  return (
    <div>
      <h1>{`It was born in: ${state.properties.birth_year}`}</h1>
    </div>
  );
};
