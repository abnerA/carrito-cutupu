import { configureStore } from "@reduxjs/toolkit";
import  inicioReducer  from './features/IniciarSesion'

export const store = configureStore({
    reducer: {
        inicio: inicioReducer,
    },
});
