import React, {useState} from 'react';
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";
import Button from "../Button/Button";
const ListTitle = () => {
    return (
        <div className={styles["list-title"]}>
            <div>#</div>
            <div>Task Name</div>
            <div>Edit</div>
            <div>Remove</div>
        </div>
    );
}

const TodoList = (props) => {
    const [isMultiple, setIsMultiple] = useState(false);
    const [multiple, setMultiple] = useState(new Array(props.todoList.length).fill(false));

    const handleMutlipleSelection = (id) => {
        setIsMultiple(true);
        const newMultiple = [...multiple];
        newMultiple[id] = !newMultiple[id];
        setMultiple(newMultiple);
    }
    const handleDelete = (id) => {
        props.onDelete(id);

    }

    const handleEdit = (id) => {
        console.log(id);
    }
    return (
        <div className={styles['todo-list__container']}>
            <h2>Todo List</h2>
            <Button name={"Add Task"}/>

            <ListTitle/>
            <hr/>
            <div>
                {props.todoList.map((todo, index) => {
                    return (<TodoItem key={index} todo={todo} index={index} onSelected={handleMutlipleSelection} onDelete={handleDelete} onEdit={handleEdit}/>)
                })}
            </div>
            {/*{isMultiple && <Button type={"button"} classStyle={'close'} name={"Delete Selection"} event={props.onMultipleDelete(multiple)}/>}*/}

        </div>
    );
};

export default TodoList;
