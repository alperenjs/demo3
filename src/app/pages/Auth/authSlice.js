import { createSlice } from "@reduxjs/toolkit";
import { https } from "util";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

const initialState = {
  isLoading: false,
  auth: { user: { name: "alperen", roles: [1, 2, 3] }, token: "3123" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state, { payload }) {
      return {
        ...state,
        loading: payload,
      };
    },
    setAuth(state, { payload }) {
      state.trailerVideos = payload;
    },
  },
});

export const { setLoading, setAuth } = authSlice.actions;

export function fetchExample() {
  return async (dispatch, getState) => {
    await dispatch(setLoading(true));

    try {
      const { status, data } = await https.get("/api/test");

      let result = { ...data };

      if (status === 200) {
        await dispatch(setAuth(result.auth));
      }
    } catch (error) {
      console.log(error);
    }

    await dispatch(setLoading(false));
  };
}

export const getAuth = (state) => state.auth.auth;

export default authSlice.reducer;
