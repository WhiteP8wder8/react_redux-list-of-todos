import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodos: (todos: Todo[], action: PayloadAction<Todo[]>): Todo[] => {
      return [...todos, ...action.payload];
    },
  },
});

export const { addTodos } = todosSlice.actions;

export default todosSlice.reducer;
