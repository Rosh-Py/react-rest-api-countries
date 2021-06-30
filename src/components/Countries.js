import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { CountryCard, SearchFilter, RegionFilter } from ".";
import { apiEndpoint } from "../config";
import { useGlobalContext } from "../globalContext";

function Countries() {
  const {
    setAllCountries,
    allCountries,
    filteredCountries,
    updateFilteredCountries,
    searchValue,
    filterValue,
  } = useGlobalContext();

  useEffect(() => {
    let updatedResult = [...allCountries];
    if (searchValue) {
      updatedResult = updatedResult.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (filterValue !== "None") {
      updatedResult = updatedResult.filter((country) => {
        if (country.region === filterValue) {
          return true;
        }
        return false;
      });
    }

    updateFilteredCountries(updatedResult);
  }, [searchValue, filterValue, allCountries]);

  // const fetchAllCountries = async (endpoint) => {
  //   const response = await axios({ url: `${endpoint}/all` });
  //   countries = response.data;
  //   setAllCountries(countries);
  //   console.log("All countries fetched");
  // };

  // useEffect(() => {
  //   fetchAllCountries(apiEndpoint);
  // }, [apiEndpoint]);

  return (
    <>
      <Filters className="section-center">
        <SearchFilter />
        <RegionFilter />
      </Filters>
      <Wrapper className="section-center">
        {filteredCountries.map((country) => {
          const { name, flag, region, population, capital } = country;
          return (
            <CountryCard
              key={uuidv4()}
              name={name}
              region={region}
              flag={flag}
              population={population}
              capital={capital}
            />
          );
        })}
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  margin: 2rem auto;
  grid-template-columns: repeat(auto-fill, 270px);
  transition: var(--transition);
  gap: 3rem;
`;

const Filters = styled.div`
  display: grid;
  margin: 1rem auto;
  row-gap: 2rem;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-left: 6.8rem;
    padding-right: 6.8rem;
  }
`;
export default Countries;
