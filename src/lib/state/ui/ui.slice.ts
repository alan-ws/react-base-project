import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiStore {
  show: boolean;
}

export const uiSliceInitialState: UiStore = {
  show: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiSliceInitialState,
  reducers: {
    setBasicUiChange(state, action: PayloadAction<boolean>) {
      state.show = action.payload;
    },
  },
});
