import { createSlice } from "@reduxjs/toolkit";

/**
 * Establish initial values
 */
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

/**
 * Execute `createClice` function, and pass it an object
 */
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

/**
 * Destructuring: exporting navigation actions, or exporting each action available so the rest of the app can tap into these from the data layer.
 */

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

/**
 * When we push information to the data layer, we must also pull it back.
 * Grabbing informatin from the data layer using `selectors`.
 */

// Call origin information
export const selectOrigin = (state) => state.nav.origin;

// Call destination information
export const selectDestination = (state) => state.nav.destination;

// Call travel time information
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

/**
 * Establish primary export default
 */
export default navSlice.reducer;
