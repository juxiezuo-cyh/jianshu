const defaultState = {
  inputValue: '123',
  list: [],
}

let a = (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  return state
}
export default a;