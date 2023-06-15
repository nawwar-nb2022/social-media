import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    theme : "light",
    lang: "en"
}
const ModeSlice = createSlice({
    name : "Mode",
    initialState,
    reducers :{
        ChangeTheme : (state, action)=>{
            state.theme = action.payload
        },
        ChangeLang : (state , action)=>{
            state.lang = action.payload
        }
    }
})

export default ModeSlice.reducer

export const {ChangeTheme , ChangeLang} = ModeSlice.actions
