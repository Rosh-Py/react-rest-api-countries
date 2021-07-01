import React, { useState } from "react";
import styled from "styled-components";
import { FaMoon } from "react-icons/fa";

function Header() {
  const isLocalThemeDark =
    localStorage.getItem("darkTheme") === "true" ? true : false;
  const [isDark, setIsDark] = useState(isLocalThemeDark);

  const toggleDarkTheme = () => {
    if (isDark) {
      document.documentElement.className = "light-theme";
      localStorage.setItem("darkTheme", false);
      setIsDark(false);
    } else {
      document.documentElement.className = "dark-theme";
      localStorage.setItem("darkTheme", true);
      setIsDark(true);
    }
  };
  return (
    <Wrapper>
      <div className="section-center">
        <h3 className="heading">Where in the world?</h3>
        <span className="dark-mode" onClick={toggleDarkTheme}>
          <FaMoon className="moon-icon" /> <p>Dark Mode</p>
        </span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  background: var(--bgc-2);
  box-shadow: var(--dark-shadow);
  .section-center {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0.5rem;
  }
  .heading {
    font-size: 1rem;
    color: var(--clr-text-1);
  }
  .dark-mode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: var(--clr-text-1);
  }
  .moon-icon {
    margin-right: 0.75rem;
    font-size: 0.875rem;
  }
  @media screen and (min-width: 990px) {
    .section-center {
      padding: 1.5rem 6.8rem;
    }
    .heading {
      font-size: 1.3rem;
    }
  }
`;

export default Header;
