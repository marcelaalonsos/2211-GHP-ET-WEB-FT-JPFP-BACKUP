import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllCampuses = createAsyncThunk('campuses/fetchAll',
  async () => {
    try {
      const { data } = await axios.get('/api/campuses');
      return data;
    } catch (error) {
      return error.message;
    }
  });

export const addCampus = createAsyncThunk('campuses/addCampus',
  async ({name, address, description}) => {
    try {
      const { data } = await axios.post('/api/campuses', {
        name,
        address,
        description,
      });
      return data;
    } catch (error) {
      return error.message;
    }
});

export const deleteCampus = createAsyncThunk('campuses/delete',
  async (campusId) => {
    try {
      const { data } = await axios.delete(`/api/campuses/${campusId}`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const allCampusesSlice = createSlice({
    name: 'campuses',
    initialState: [],
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchAllCampuses.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(addCampus.fulfilled, (state, action) => {
        state.push(action.payload);
      });
      builder.addCase(deleteCampus.fulfilled, (state, action) => {
        return state.filter(campus => campus.id !== action.payload.id)
      });
    }
});

export const selectCampuses = (state) => {
  return state.campuses;
}

export default allCampusesSlice.reducer;
