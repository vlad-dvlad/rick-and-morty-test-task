import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../entities/character.types";
import { getSingleCharacter } from "./actions";

interface SingleCharacterState {
    data: ICharacter;
    isLoading: boolean;
    error: string;
}

const initialState: SingleCharacterState = {
    data: {} as ICharacter,
    isLoading: false,
    error: ''
}

const singleCharacterSlice = createSlice({
    name: 'single-character',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSingleCharacter.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(getSingleCharacter.fulfilled.type, (state, action: PayloadAction<ICharacter>) => {
                state.isLoading = false;
                state.error = '';
                state.data = action.payload;
            })
            .addCase(getSingleCharacter.rejected.type, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
                state.data = {} as ICharacter;
            })
    }
})

export default singleCharacterSlice.reducer;