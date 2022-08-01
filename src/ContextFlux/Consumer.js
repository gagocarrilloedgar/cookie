import { useContext } from "react";
import { ProducerContext } from "./Producer";

export const Consumer = () => {
  const { store, actions, handleData } = useContext(ProducerContext);

  const changeTitle = () => handleData(actions.CHANGE_TITLE);

  return (
    <>
      <h1>{store.title}</h1>
      <button onClick={changeTitle}></button>
    </>
  );
};
