import React, { useEffect } from "react";
import { Countries, CountryDetails, Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useGlobalContext } from "./globalContext";
import { apiEndpoint } from "./config";
import axios from "axios";

function App() {
  // Fetching all countries on load starts
  const { setAllCountries } = useGlobalContext();

  const savedDarkTheme =
    localStorage.getItem("darkTheme") === "true" ? true : false;
  if (savedDarkTheme) {
    document.documentElement.className = "dark-theme";
  } else {
    document.documentElement.className = "light-theme";
  }

  let countries;
  const fetchAllCountries = async (url) => {
    const response = await axios({ url });
    countries = response.data;
    setAllCountries(countries);
    console.log("All countries fetched");
  };

  useEffect(() => {
    fetchAllCountries(`${apiEndpoint}/all`);
  }, [apiEndpoint]);
  // Fetching all countries on load ends

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Countries />
          </Route>
          <Route exact path="/:country">
            <CountryDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
