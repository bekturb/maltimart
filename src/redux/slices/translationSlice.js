import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    language: "en"
}

const translationSlice = createSlice ({
    name: "translation",
    initialState,
    reducers:{
        changeLang: (state, action) => {
            const newLang = action.payload;
            state.language = newLang;
        }
    }
});

export const translateAction = translationSlice.actions;
export default translationSlice.reducer;

