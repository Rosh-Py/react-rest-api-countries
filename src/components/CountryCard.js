import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CountryCard({ name, flag, region, capital, population }) {
  return (
    <Wrapper>
      <Link to={`/${name}`}>
        <div className="flag-img">
          <img src={flag} alt={`${name} flag`} />
        </div>
        <div className="heading">
          <strong>{name}</strong>
        </div>
        <div className="details">
          <div>
            <span className="title">Population: </span>
            <span className="text">{population}</span>
          </div>
          <div>
            <span className="title">Region: </span>
            <span className="text">{region}</span>
          </div>
          <div>
            <span className="title">Capital: </span>
            <span className="text">{capital}</span>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background: var(--bgc-2);
  box-shadow: var(--dark-shadow);
  border-radius: var(--radius);
  overflow: hidden;
  transition: var(--transition);
  :hover {
    transform: scale(1.05);
  }
  .flag-img {
    height: 160px;
    width: 100%;
  }
  .flag-img img {
    object-fit: cover;
  }
  .heading {
    padding: 1.5rem;
    font-size: 1rem;
    color: var(--clr-text-1);
  }
  .details {
    padding: 0rem 1.5rem;
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
  }
  .text {
    font-size: 0.85rem;
  }
`;
export default CountryCard;
