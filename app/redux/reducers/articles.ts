import { createSlice } from '@reduxjs/toolkit';

type ArticleStateType = {
  selectedArticle: any;
  bookmarkedArticles: any;
};

const initialState: ArticleStateType = {
  selectedArticle: {},
  bookmarkedArticles: {},
};

export const ArticlesReducer = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    updateSelectedArticle(state, action) {
      state.selectedArticle = action.payload;
    },
    activeBookmarkArticle(state, action) {
      state.bookmarkedArticles[`${action.payload.id}`] = action.payload as any;
    },
    clearBookmarkArticle(state, action) {
      delete state.bookmarkedArticles[action.payload.id];
    }
  },
});

export const ArticlesReducerActions = ArticlesReducer.actions;

export default ArticlesReducer.reducer;