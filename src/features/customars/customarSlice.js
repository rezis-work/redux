const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customar/createCustomar":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customar/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

export function createCustomar(fullName, nationalId) {
  return {
    type: "customar/createCustomar",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "customar/updateName", payload: fullName };
}
