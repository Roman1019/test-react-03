import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./tasksOps";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = false;
        // console.log("Pending");
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        // console.log("fulfielled", state, action);
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })

      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        // console.log("fulfielled", state, action);
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export default slice.reducer;
