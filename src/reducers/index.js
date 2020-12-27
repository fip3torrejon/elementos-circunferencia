const reducer = (state, action) => {
  
  switch (action.type) {

    case 'SET_RADIO':
      return {
        ...state,
        radio: action.payload
      }

    case 'SET_ANGULO':
      return {
        ...state,
        angulo: action.payload
      }

    default:
      return state
  }
}

export default reducer;
