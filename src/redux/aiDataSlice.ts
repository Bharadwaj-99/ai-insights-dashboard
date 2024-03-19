import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AIData } from '../types';

interface AIDataState {
  data: AIData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AIDataState = {
  data: null,
  loading: false,
  error: null,
};

const aiDataSlice = createSlice({
  name: 'aiData',
  initialState,
  reducers: {
    fetchAIDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAIDataSuccess(state, action: PayloadAction<AIData>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchAIDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchAIDataStart, fetchAIDataSuccess, fetchAIDataFailure } =
  aiDataSlice.actions;
export default aiDataSlice.reducer;
