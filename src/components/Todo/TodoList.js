import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../../redux/todoSlice';
import {FormTodoUl} from "../../Style";

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

	return (
		<FormTodoUl>
			{todos.map((todo) => (
				<TodoItem key = {todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</FormTodoUl>
	);
};

export default TodoList;
