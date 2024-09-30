import { createSlice } from "@reduxjs/toolkit";
import initialState from "@/store/initialState/initialState";

/* Crea el tipo de acciones para el contador automáticamente, para que se actualicen en el estado
con los reductores (reducers) */
export const counterSlice = createSlice({
    //Identifica de forma única el slice
    name: "counter",
    //Inicializa el estado para el contador en 0.
    initialState,
    //Crea los reductores (reducers)
    reducers :{
        increment: (state) => ({counter: state.counter + 1}),
        decrement: (state) => ({counter: state.counter < 1 ? 0 : state.counter - 1})
    }
}
)

//Exportamos las actiones generadas de forma automática
export const { increment, decrement} = counterSlice.actions
