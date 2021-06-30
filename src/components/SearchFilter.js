import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useGlobalContext } from "../globalContext";

function SearchFilter() {
  const {
    updateFilteredCountries,
    allCountries,
    updateSearchValue,
    searchValue,
  } = useGlobalContext();

  const [search, setSearch] = useState(searchValue);

  // Update filteredCountries
  // useEffect(() => {
  //   updateSearchValue(search);
  // }, [search]);

  return (
    <Wrapper>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for a country..."
          value={search || searchValue}
          onChange={(e) => {
            setSearch(e.target.value);
            updateSearchValue(e.target.value);
          }}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .search-bar {
    background: var(--bgc-2);
    color: var(--clr-text-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
    margin: auto;
    max-width: 380px;
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
  }
  .search-icon {
    font-size: 1.1rem;
  }
  .search-bar input {
    outline: none;
    background: var(--bgc-2);
    border-style: none;
    color: var(--clr-text-2);
    width: 90%;
  }
  .search-bar input::placeholder {
    color: var(--clr-text-2);
    opacity: 0.7;
  }
`;

export default SearchFilter;
