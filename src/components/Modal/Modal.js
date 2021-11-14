import React, {useState} from 'react';
import Add from "./Add/Add";
import Delete from "./Delete/Delete";
import Update from "./Update/Update";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import ReactDOM, {createPortal} from 'react-dom';


const Modal = (props) => {
    const [option, setOption] = useState();
    const [data, setData] = useState('');

    const Window = (props) => {
        return (
            <div className={styles["modal-container"]}>
                <div className={styles.modal}>
                    {props.mode === "delete" && <Delete task={props.task} onConfirmDelete={() => {
                        props.onConfirmDelete(props.task)
                    }}/>}
                    {props.mode === "add" && <Add task={props.task} onConfirmAdd={props.onConfirmAdd}/>}
                    {props.mode === "edit" && <Update task={props.task} onConfirmEdit={props.onConfirmEdit}/>}
                </div>
            </div>);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleOperation = (myData) => {
        setData(myData);
    }

    return ReactDOM.createPortal( <Window {...props}/>,document.getElementById('backdrop-root'))

};

export default Modal;
