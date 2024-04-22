import React, { useState, ChangeEvent } from "react";
import { colors } from "../../utils/colors";

function CustomSelect() {
  const [selectedOption, setSelectedOption] = useState<string>("week");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        id="mySelect"
        value={selectedOption}
        onChange={handleChange}
        style={{
          height: 40,
          width: 100,
          border: "none",
          outline: "none",
          backgroundColor: colors.lightGray,
          fontSize: 14,
        }}
      >
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
}

export default CustomSelect;
