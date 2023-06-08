import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { rewardsApi } from '../api';

export const store = configureStore({
  reducer: {
    [rewardsApi.reducerPath]: rewardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rewardsApi.middleware),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;

export const Actions = {};