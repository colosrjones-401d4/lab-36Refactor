const initialState = { todoList: [], showDetails: null, details: {} };

export function reducer(state=initialState, action = {}) {
  switch (action.type) {
    case 'addItem':
      // return state;
      return { ...state, todoList: [...state.todoList, action.payload] };
    case 'deleteItem':
        // return state;
      return {...state, todoList: state.todoList.filter( item => item._id !== action.payload )};
    case 'toggleComplete':
        // return state;
      return { ...state, todoList: state.todoList.map( (item) => item._id === action.payload ? {...item, complete: !item.complete} : item ) };
    case 'toggleDetails':
        // return state;
      let item = state.todoList.filter( item => item._id === action.payload )[0] || {}
      return { ...state, showDetails: !state.showDetails, details: item };
    default:
      return state;
  }
};
export function addItem(item) {
  return { 
    type: 'addItem', 
    payload: item,
  };
}

export function deleteItem(id) {
  return {
    type: 'deleteItem',
    payload: id,
  };
}

export function toggleComplete(id) {
  return {
    type: 'toggleComplete',
    payload: id,
  };
}
  export function toggleDetails(id) { 
  return {
    type: 'toggleDetails',
    payload: id,
  };
}

