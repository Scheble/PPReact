import { combineReducers } from "redux";

export default combineReducers({
  textSize: (size = 20, action) => {
    if (action.type === "INCRESE_SIZE") {
      return size + 100;
    }
    return size;
  },
});
