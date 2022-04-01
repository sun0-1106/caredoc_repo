import { configureStore } from '@reduxjs/toolkit';
import formDataSlice from './formData/formDataSlice';
import { dataQuery } from './query/dataQuery';
import { addrQuery } from './query/addrQuery';

export const store = configureStore({
  reducer: {
    [formDataSlice.name]: formDataSlice.reducer,
    [addrQuery.reducerPath]: addrQuery.reducer,
    [dataQuery.reducerPath]: dataQuery.reducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(dataQuery.middleware)
      .concat(addrQuery.middleware),
});
