import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'CUBE',
  subtitle: 'RegNews',
};

export const MetaReducer = createSlice({
  name: 'meta',
  initialState,
  reducers: {},
});

export const MetaReducerActions = MetaReducer.actions;

export default MetaReducer.reducer;