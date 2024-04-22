import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { SearchOutlinedIcon, FilterListOutlinedIcon } from "../../utils/icons";

const Search: React.FC = () => {
  const [searchText, setSearchText] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <TextField
      value={searchText}
      onChange={handleChange}
      placeholder="Search ..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton disabled>
              <SearchOutlinedIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClear} size="small">
              <FilterListOutlinedIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
