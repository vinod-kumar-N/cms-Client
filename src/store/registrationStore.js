export const initialState = {
  email: null,
  name: "",
  userName: "",
  password: "",
  confirmpwd: "",
  designation: "",
};

export const registrationReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_PSD":
      return {
        ...state,
        password: action.payload,
      };
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_USERNAME":
      return {
        ...state,
        userName: action.payload,
      };
    case "SET_CONFIRMPSD":
      return {
        ...state,
        confirmpwd: action.payload,
      };
    case "SET_DESIGNATION":
      return {
        ...state,
        designation: action.payload,
      };
    default:
      return state;
  }
};
