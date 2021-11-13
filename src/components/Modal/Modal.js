import React, {useState} from 'react';
import Add from "./Add/Add";
import Delete from "./Delete/Delete";
import Update from "./Update/Update";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";

const Modal = (props) => {
    const [option, setOption] = useState();
    const [data,setData] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleOperation = (myData) => {
        setData(myData);
        console.log(data)
    }

    // const handleConfirmDelete = (id) => {
    //     props.onConfirmDelete(1)
    // }
    return (
        <form onSubmit={handleSubmit} className={styles.modal}>

            {props.mode==="delete"&& <Delete task={props.task} onConfirmDelete={() => { props.onConfirmDelete(props.task)}}/>}
            {/*{props.mode==="edit"&& <Update task={props.task} onConfirmDelete={() => { props.onConfirmEdit(props.task.id)}}/>}*/}
            {/*{props.mode==="delete"&& <Delete task={props.task} onConfirmDelete={() => { props.onConfirmDelete(props.task.id)}}/>}*/}
            {/*{option==="add"&& <Add onAdd={handleOperation} data={data}/>}*/}
            {/*{option==="remove"&& <Delete onDelete={handleOperation} todoItems={todoItems}/>}*/}
            {/*{option==="edit"&& <Update onUpdate={handleOperation}/>}*/}


        </form>
    );
};

export default Modal;
