import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Reactjs", value: "reactjs" },
  { label: "Nodejs", value: "nodejs" },
  {
    label: "Javascipt",
    value: "javascipt",
    // disabled: true
  },
];

const Dropdown = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Select Subject</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <div style={{ backgroundColor: "#000" }}>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
      </div>
    </div>
  );
};

export default Dropdown;
