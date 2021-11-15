import React, {useState} from 'react';
import Add from "./Add/Add";
import Delete from "./Delete/Delete";
import Update from "./Update/Update";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import ReactDOM, {createPortal} from 'react-dom';


const Modal = (props) => {

    const Window = (props) => {
        return (
            <div className={styles["modal-container"]}>
                <div className={styles.modal}>
                    {props.mode === "delete" && <Delete task={props.task} onConfirmDelete={() => {
                        props.onConfirmDelete(props.task)
                    }} onClose={props.onClose}/>}
                    {props.mode === "add" &&
                    <Add task={props.task} onConfirmAdd={props.onConfirmAdd} onClose={props.onClose}/>}
                    {props.mode === "edit" &&
                    <Update task={props.task} onConfirmEdit={props.onConfirmEdit} onClose={props.onClose}
                    />}
                    {props.mode === "palindrome" &&
                    <div className={'palindrome'}>
                        <div>{props.word} is {props.result?"":'not'} a Palindrome!</div>
                        <Button name={'Close'} classStyle={'close'}  event={props.onClose}/>
                    </div>
                    }
                </div>
            </div>);

    }

    return ReactDOM.createPortal(<Window {...props}/>, document.getElementById('backdrop-root'))

};

export default Modal;
