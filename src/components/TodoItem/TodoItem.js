import React, {useState} from 'react';
import styles from './TodoItem.module.scss';
import Button from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
library.add( faTrash, faPencilAlt);

const TodoItem = (props) => {
    const {id, name} = props.todo;
    const [selected,setSelected] = useState(false)
    const handleMultipleSelection = () => {
        props.onSelected(id);
        setSelected(prevState => {
            return !prevState;
        });
    }

    const handleEdit = () => {
        props.onEdit(id);
    }
    const handleDelete = () => {
        props.onDelete(id);
    }
    return (
        <React.Fragment>
            <div className={`${styles['todo-item']} ${selected?styles.selected:''}`} >
                <div className={styles['todo-item__name']}>{id}</div>
                <div className={styles['todo-item__name']}>{name}</div>
                <Button type={"button"} name={  <FontAwesomeIcon icon="pencil-alt"/>} classStyle={"clear"} event={handleEdit}/>
                <Button type={"button"} name={  <FontAwesomeIcon icon="trash"/>} classStyle={"close"} event={handleDelete}/>
            </div>
            <hr/>
        </React.Fragment>
    );
};

export default TodoItem;
