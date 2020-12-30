import {createSelector}  from 'reselect';
import { todos } from './reducers';

export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;

export const getIncompleteTodos = createSelector(
    getTodos,
    getTodosLoading,
    (todos, isLoading) => isLoading
     ? []
     : todos.filter(todo => !todo.isCompleted),
);

export const getCompletedTodos =  createSelector(
    getTodos,
    getTodosLoading,
    (todos,isLoading) => isLoading
    ? []
    : todos.filter(todo => todo.isCompleted),
);