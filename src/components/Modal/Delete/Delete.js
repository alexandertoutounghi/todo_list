import React, {useState} from 'react';

const Delete = (props) => {
    /**
     *
     * @param e Event
     */
    const handleDelete = (e) => {
        const values = [...e.target.options].filter(o => o.selected).map(o => o.value);
        props.onDelete(values)
    }
    return (
        <React.Fragment>
            <select id="" onChange={handleDelete} multiple>
                {props.todoItems.map(todo => {
                    return <option value={todo.name} key={todo.id}>{todo.name}</option>
                })
                }
            </select>
        </React.Fragment>
    );
};

export default Delete;
