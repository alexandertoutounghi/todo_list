import React, {useState} from 'react';
import styles from './Delete.module.scss'
import Button from "../../Button/Button";

const Delete = (props) => {
    /**
     *
     * @param e Event
     */
    const val = true;
    const handleDelete = (e) => {
        console.log(e.target.value);
        // const values = [...e.target.options].filter(o => o.selected).map(o => o.value);
        // props.onDelete(values)
    }

    const handleSelection = (e) => {
        console.log(e.currentTarget.dataset.index);

    }
    return (
        <React.Fragment>
            <div className={styles.delete}>
                <p>Are you sure you want to delete task: <br/>
                    <strong>"{props.task.name}" </strong>?</p>
            <Button name={"Confirm"} type={"button"} classStyle={"submit"} event={props.onConfirmDelete}/>
            {/*<Button name={"Cancel"} type={"button"} classStyle={"close"}/>*/}
            </div>
        </React.Fragment>
    );
};

export default Delete;
