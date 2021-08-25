export const GET_COUNTRIES = "GET_COUNTRIES";
export const getCountries = (country) => {
  return {
    type: GET_COUNTRIES,
    payload: {
      ...country,
    },
  };
};
