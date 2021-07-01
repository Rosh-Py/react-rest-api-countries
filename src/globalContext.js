import React, { useContext, useReducer } from "react";
import reducer from "./globalReducer";

const GlobalContext = React.createContext();

const initialState = {
  allCountries: [],
  filteredCountries: [],
  filterValue: "None",
  searchValue: "",
  isLoading: false,
};
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAllCountries = (countries) => {
    dispatch({ type: "SET_ALL_COUNTRIES", payload: countries });
  };

  const updateFilteredCountries = (result) => {
    dispatch({ type: "UPDATE_FILTERED_COUNTRIES", payload: result });
  };

  const updateSearchValue = (value) => {
    dispatch({ type: "UPDATE_SEARCH_VALUE", payload: value });
  };
  const updateFilterValue = (value) => {
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: value });
  };

  const setIsLoading = (value) => {
    dispatch({ type: "SET_IS_LOADING", payload: value });
  };
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setAllCountries,
        updateFilteredCountries,
        updateSearchValue,
        updateFilterValue,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
