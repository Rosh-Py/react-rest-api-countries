import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { apiEndpoint } from "../config";
import { useGlobalContext } from "../globalContext";

function CountryDetails() {
  const route = useLocation();
  const name = route.pathname.slice(1);
  const [details, setDetails] = useState({});
  const { filteredCountries } = useGlobalContext();

  const countryDetails = (url) => {
    let country;
    country = filteredCountries.find((c) => c.name === name);
    setDetails(country);
  };

  useEffect(countryDetails, [filteredCountries]);

  return <div>{JSON.stringify(details)}</div>;
}

const Wrapper = styled.div``;
export default CountryDetails;
