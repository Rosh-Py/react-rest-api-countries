const global_reducer = (state, action) => {
  if (action.type === "SET_ALL_COUNTRIES") {
    return {
      ...state,
      allCountries: action.payload,
      filteredCountries: action.payload,
    };
  }

  if (action.type === "UPDATE_FILTERED_COUNTRIES") {
    return {
      ...state,
      filteredCountries: action.payload,
    };
  }

  if (action.type === "UPDATE_SEARCH_VALUE") {
    return { ...state, searchValue: action.payload };
  }

  if (action.type === "UPDATE_FILTER_VALUE") {
    return { ...state, filterValue: action.payload };
  }
  throw new Error(`${action.type} action not found in global reducer`);
};

export default global_reducer;
