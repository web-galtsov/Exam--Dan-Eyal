import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../../redux/todoSlice';
import {RiDeleteBinLine} from "react-icons/ri"
import {IoCloseOutline} from "react-icons/io5"
import {
	FormTodoLi,
	FormTodoLiCon} from "../../Style";

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleCompleteAsync({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};

	return (
		<FormTodoLi className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<FormTodoLiCon data-aos="zoom-in">
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onClick={handleCheckboxClick}
					/>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>
					<IoCloseOutline/>
				</button>
			</FormTodoLiCon>
		</FormTodoLi>
	);
};

export default TodoItem;
