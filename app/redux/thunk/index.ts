import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllArticles = createAsyncThunk(
    'articles/fetchAll',
    async () => {
        try {
            //   const response = await API();
            //   return response?.json();
            return {

            };
        } catch (ex) {
            return null;
        }
    },
);