// reducer for the App component
export const AppReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_SYMBOL':
      return {
        ...state,
        symbolList: [...state.symbolList, action.payload]
      }
    case 'REMOVE_SYMBOL':
      return {
        ...state,
        symbolList: state.symbolList.filter(symbol => symbol !== action.payload)
      }
    default:
      return state;
  }
}
