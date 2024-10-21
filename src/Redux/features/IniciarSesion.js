import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogin: '',
    dayWords: '',
    daySelect: 0,
    dayWeekNumber: 0,
    monthCurrent: '',
    year: 2024,
    dayArray: '',
    fullMonthArray: [''] // Aquí recibimos el array completo de todo un mes
};

export const iniciarSesion = createSlice({
    name: 'inicio',
    initialState,
    reducers: {
        participants: (state, action) => {
            state.dayWords = action.payload[0];
            state.daySelect = action.payload[1];
            state.monthCurrent = action.payload[2];
            state.dayWeekNumber = action.payload[3];
            state.year = action.payload[4];
        },
        fullArray: (state, action) => {
            state.fullMonthArray = action.payload;
        },
        userName: (state, action) => {
            state.userLogin = action.payload;
        },
        fullDayArray: (state, action) => {
            state.dayArray = action.payload;
        }
    }
});

export const { participants, fullArray, fullDayArray, userName } = iniciarSesion.actions;
export default iniciarSesion.reducer;