import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const themes = {
    winter: 'winter',
    dracula: 'dracula'
};

const getUserFromLocalStorage = () => {

    return JSON.parse(localStorage.getItem('user')) || null;
}

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme') || themes.winter;
    // Set the initial theme based on the user's preference or default to winter
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
}

const initialState = {
    user: getUserFromLocalStorage(),
    theme: getThemeFromLocalStorage()
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const user = { ...action.payload, token: action.payload.jwt };
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            console.log(action.payload)
        },
        logOut: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            toast.success('Logout Successfully !')
        },
        toggleTheme: (state) => {
            const { dracula, winter } = themes;
            state.theme = state.theme === dracula ? winter : dracula;
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme);
        }
    }
});
export const { loginUser, logOut, toggleTheme } = userSlice.actions;
export default userSlice.reducer;