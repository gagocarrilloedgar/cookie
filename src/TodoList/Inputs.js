import { useState } from "react";
export const Inputs = () => {
  const [value, setValue] = useState("This is the initial value");

  const handleChange = (e) => setValue(e.target.value);

  return <input value={value} onChange={handleChange} />;
};
