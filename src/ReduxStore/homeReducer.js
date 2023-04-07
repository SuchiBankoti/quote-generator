const initialBookmarks = {
  bookmarks: {},
  selectedTag: "",
};
const bookmarksReducer = (state = initialBookmarks, action) => {
  switch (action.type) {
    case "UPDATE_BOOKMARK":
      return {
        ...state,
        bookmarks: { ...state.bookmarks, ...action.payload },
      };
    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: { ...action.payload },
      };
    case "UPDATE_TAG":
      return {
        ...state,
        selectedTag: action.payload,
      };
    default:
      return state;
  }
};
export default bookmarksReducer;
