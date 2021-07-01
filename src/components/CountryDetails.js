import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { apiEndpoint } from "../config";
import { useGlobalContext } from "../globalContext";

function CountryDetails() {
  const route = useLocation();
  const pathName = route.pathname.slice(1);
  const [details, setDetails] = useState(false);
  const { filteredCountries } = useGlobalContext();

  const countryDetails = () => {
    let country;
    country = filteredCountries.find((c) => c.name === pathName);
    if (country) {
      let {
        name,
        nativeName,
        flag,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
      } = country;

      // extract border country names starts
      const borderCountries = borders.map((alpha3) => {
        const countryName = filteredCountries.find(
          (country) => country.alpha3Code === alpha3
        );
        return countryName.name;
      });

      borders = borderCountries;
      // extract border country names ends

      // Population to locale string
      population = population.toLocaleString();

      //Top level domain is an array, convert to string
      topLevelDomain = topLevelDomain.toString();

      //  Currencies is array of objects, convert to string
      currencies = currencies.map((curr) => curr.name).join(", ");

      //languages is array of objects, convert to string
      languages = languages.map((lang) => lang.name).join(", ");

      setDetails({
        name,
        nativeName,
        flag,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
      });
    }
    // console.log("country", country);
  };

  useEffect(countryDetails, [filteredCountries, pathName]);
  const history = useHistory();
  return (
    <div className="section-center">
      <TopWrapper>
        <span className="back-btn btn" onClick={history.goBack}>
          <FaLongArrowAltLeft className="back-icon" />
          <span>Back</span>
        </span>
      </TopWrapper>
      {details && (
        <Wrapper>
          <div className="flag">
            <img src={details.flag} alt={`${details.name} flag`} />
          </div>
          <div className="details">
            <h4 className="heading">{details.name}</h4>
            <div className="main">
              <div className="main-1">
                <div>
                  <span className="title">Native name: </span>
                  <span className="text">{details.nativeName}</span>
                </div>
                <div>
                  <span className="title">Population: </span>
                  <span className="text">{details.population}</span>
                </div>
                <div>
                  <span className="title">Region: </span>
                  <span className="text">{details.region}</span>
                </div>
                <div>
                  <span className="title">Sub Region: </span>
                  <span className="text">{details.subregion}</span>
                </div>
                <div>
                  <span className="title">Capital: </span>
                  <span className="text">{details.capital}</span>
                </div>
              </div>
              <div className="main-2">
                <div>
                  <span className="title">Top Level Domain: </span>
                  <span className="text">{details.topLevelDomain}</span>
                </div>
                <div>
                  <span className="title">Currencies: </span>
                  <span className="text">{details.currencies}</span>
                </div>
                <div>
                  <span className="title">Languages: </span>
                  <span className="text">{details.languages}</span>
                </div>
              </div>
            </div>
            <div className="borders">
              <span className="title">Border Countries: </span>
              <div className="border-countries">
                {details.borders.map((b) => (
                  <Link to={`/${b}`} className="btn" key={uuidv4()}>
                    {b}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  row-gap: 2rem;
  .flag {
    width: 90%;
    margin: 0 auto;
  }
  .text {
    font-size: 0.85rem;
  }
  .btn {
    padding: 0.5rem 1rem;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    background: var(--bgc-2);
    transition: var(--transition);
    :active {
      opacity: 0.6;
    }
    :hover {
      transform: scale(1.1);
    }
  }
  .main {
    display: grid;
    row-gap: 2rem;
    margin-top: 2rem;
  }
  .borders {
    display: grid;
    margin-top: 2rem;
    row-gap: 1rem;
  }
  .border-countries {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .border-countries .btn {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  .flag img {
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    align-items: center;
    .flag {
      height: 30rem;
    }
    .heading {
      font-size: 1.75rem;
    }
    .main {
      display: flex;
      justify-content: space-between;
    }
    .borders {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
    }
    .text {
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }
`;

const TopWrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  cursor: pointer;

  .btn {
    padding: 0.5rem 1rem;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    background: var(--bgc-2);
  }
  .back-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7.5rem;
    padding: 0.5rem 2rem;
    transition: var(--transition);
    :active {
      opacity: 0.6;
    }
    :hover {
      transform: scale(1.1);
    }
  }
  @media screen and (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
export default CountryDetails;
