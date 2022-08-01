// useReducer + useContext
import { createContext, useReducer } from "react";
import { initialStore, actionReducer, actions } from "./store";

export const ProducerContext = createContext(null);

export const ProducerProvider = ({ children }) => {
  const [store, dispatch] = useReducer(actionReducer, initialStore);

  const handleData = (type, payload) => dispatch({ type, payload });

  return (
    <ProducerContext.Provider value={{ store, actions, handleData }}>
      {children}
    </ProducerContext.Provider>
  );
};
