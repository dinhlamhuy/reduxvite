import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: string;
  name: string;
}

interface State {
  items: Item[];
}

const initialState: State = {
  items: [],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
    },
    editItem(state, action: PayloadAction<Item>) {
      const { id, name } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.name = name;
      }
    },
    deleteItem(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

export const { addItem, editItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;