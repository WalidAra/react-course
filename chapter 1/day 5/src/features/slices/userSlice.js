import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
  name: "",
  email: "",
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setProfile: (state, action) => {
      const { name, email, image } = action.payload;
      state.name = name;
      state.email = email;
      state.image = image;
    },

    reset: (state) => {
      state.name = "";
      state.email = "";
      state.image = "";
    },
  },
});

export const { setProfile, reset } = userSlice.actions;
export default userSlice.reducer;
