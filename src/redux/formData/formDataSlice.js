import { createSlice } from '@reduxjs/toolkit';

const FORM_DATA_NAME = 'formData';

const initialState = {
  phoneNumber: '',
  workType: '',
  schedule: {
    startDate: '',
    endDate: '',
    visitTime: '',
    hour: null,
  },
  address: {
    addressDetail: '',
    jibunAddress: '',
    liName: null,
    locationCode: '',
    roadCode: '',
    myundongName: '',
    roadAddress: '',
    sidoName: '',
    sigunguName: '',
  },
};

export const formDataSlice = createSlice({
  name: FORM_DATA_NAME,
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFormData: state => {
      return initialState;
    },
  },
});

export const { updateFormData, resetFormData } = formDataSlice.actions;

export default formDataSlice;
