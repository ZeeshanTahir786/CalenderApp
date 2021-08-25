import { GET_COUNTRIES } from "../actions/action";

const initialState = {
  country: "",
  year: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES: {
      const { country } = action.payload;
      return {
        ...state,
        country: [...country],
      };
    }

    default:
      return state;
  }
};
export default reducer;
