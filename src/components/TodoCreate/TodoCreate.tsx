import React from 'react';
import {useForm, Resolver} from "react-hook-form";
import {TodoStoreImpl} from "../../stores/todo";

type Option = {
    label: string;
    todo: string;
};

interface TodoListProps {
 todoStore: TodoStoreImpl
}

const resolver: Resolver<Option> = async (values) => {
    return {
        values: values.todo ? values : {},
        errors: !values.todo ? {
            todo: {
               type: 'required',
               message: 'This is required'
            }
        } : {}
    }
}

export const TodoCreate: React.FC<TodoListProps> = ({todoStore}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Option>({ resolver });

    const onSubmit = handleSubmit((data) => todoStore.addTodo(data.todo));

    return (
        <form onSubmit={onSubmit}>
            <label>
                Todo title
                <input {...register('todo')}  name="todo" placeholder='todo'/>
            </label>
            <input type="submit" />
        </form>
    );
};
