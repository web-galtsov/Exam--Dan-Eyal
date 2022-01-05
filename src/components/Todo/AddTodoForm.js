import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../../redux/todoSlice";
import {HiPlus} from "react-icons/hi"
import {
	ButtonTodo,
	FormInput,
	FormTodo,
} from "../../Style";

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodoAsync({
					title: value,
				})
			);
		}
	};
	return (
		<FormTodo onSubmit={onSubmit}>
			<label className='sr-only'>Name</label>
			<FormInput
				type="text"
				placeholder="הוסף מטלה..."
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<ButtonTodo type="submit">
				<HiPlus/>
			</ButtonTodo>
		</FormTodo>
	);
};
export default AddTodoForm;
