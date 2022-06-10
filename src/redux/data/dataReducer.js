//free mint
//public mint
//pause
//publicSale
//TotalSupply
//totalPublicMint
//MAX_PUBLIC_MINT
//balanceOf

const initialState = {
  loading: false,
  totalSupply: 0,
  publicCost: 0,
  error: false,
  errorMsg: "",
  publicSale: false,
  salePaused: true,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        totalSupply: action.payload.totalSupply,
        publicCost: action.payload.publicCost,
        publicSale: action.payload.publicSale,
        salePaused: action.payload.salePaused,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
