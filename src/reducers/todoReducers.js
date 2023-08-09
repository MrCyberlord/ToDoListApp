// const initialData = {
//   list: [],
// };

// const todoReducers = (state = initialData, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       const { id, data } = action.payload;

//       return {
//         ...state,
//         list: [...state.list, { id: id, data: data }],
//       };

//     case "DELETE_TODO":
//       const newList = state.list.filter((elem) => elem.id !== action.id);

//       return {
//         ...state,
//         list: newList,
//       };

//     case "REMOVE_TODO":
//       return {
//         ...state,
//         list: [],
//       };

//     default:
//       return state;
//   }
// };

// export default todoReducers;

const initialData = {
  list: JSON.parse(localStorage.getItem("todos")) || [], // Initialize from local storage
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      const addedList = [...state.list, { id: id, data: data }];
      localStorage.setItem("todos", JSON.stringify(addedList)); // Save to local storage
      return {
        ...state,
        list: addedList,
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      localStorage.setItem("todos", JSON.stringify(newList)); // Save to local storage
      return {
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
      localStorage.removeItem("todos"); // Remove from local storage
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducers;
