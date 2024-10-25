const initialState = {
    items: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      case 'EDIT_ITEM':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, ...action.payload } : item
          )
        };
      case 'UPDATE_ITEM':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, ...action.payload } : item
          )
        };
      default:
        return state;
    }
  };
  
  export default reducer;