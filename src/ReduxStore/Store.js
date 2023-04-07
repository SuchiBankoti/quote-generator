import { legacy_createStore as createStore } from "redux";
import bookmarksReducer from "./homeReducer";

const store = createStore(bookmarksReducer);

export default store;
