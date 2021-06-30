import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useGlobalContext } from "../globalContext";

function RegionFilter() {
  const { allCountries, updateFilterValue, filterValue } = useGlobalContext();
  const [isActive, setIsActive] = useState(false);
  const [filter, setIsFilter] = useState(filterValue);
  const countries = Array.from(
    new Set(allCountries.map((country) => country.region))
  );

  // Updating the filteredCountries
  useEffect(() => {
    updateFilterValue(filter);
  }, [filter]);

  return (
    <>
      <Wrapper className="filter">
        <div
          className="select"
          onClick={() => {
            setIsActive((state) => !state);
          }}
        >
          <p>{filter === "None" || !filter ? "Filter by Region" : filter}</p>
          <FaAngleDown className="arrow-icon" />
        </div>
        {isActive && (
          <div
            className="options"
            onClick={(e) => {
              setIsFilter(e.target.textContent);
              setIsActive((state) => !state);
            }}
          >
            <div className="option" style={{ paddingTop: "0.75rem" }}>
              None
            </div>
            {countries.map((c) => {
              return (
                <div key={uuidv4()} className="option">
                  {c}
                </div>
              );
            })}
          </div>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 170px;
  position: relative;
  .select {
    background: var(--bgc-2);
    padding: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
  .select:active {
    opacity: 0.8;
    box-shadow: var(--dark-shadow);
  }
  .select p {
    color: var(--clr-text-2);
    opacity: 0.6;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
  }
  .arrow-icon {
    margin-left: 0.5rem;
  }
  .options {
    margin-top: 0.5rem;
    /* padding: 1rem; */
    background: var(--bgc-2);
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    position: absolute;
    height: 180px;
    width: 180px;
    overflow: auto;
    box-shadow: var(--light-shadow);
    border: none;
  }
  .option {
    padding: 0.25rem 0 0.25rem 1rem;
    transition: var(--transition);
    font-size: 0.8rem;
    border: none;
  }
  .option:hover {
    font-weight: 600;
    transform: translateX(-3%);
  }
  .option:active {
    opacity: 0.7;
  }
`;

export default RegionFilter;
