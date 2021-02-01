import React from "react";
import { Button, FormControl } from "react-bootstrap";

const SearchBar = ({ setSearchQuery}) => {

    const handleSearchFilter = (event) => {
        setSearchQuery(event.target.value)
    }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "15px",
          justifyContent: "center",
        }}
      >
        <FormControl
            onChange={handleSearchFilter}
          type="text"
          placeholder="Search"
          style={{ width: "375px" }}
        />
      </div>
    </>
  );
};

export default SearchBar;
