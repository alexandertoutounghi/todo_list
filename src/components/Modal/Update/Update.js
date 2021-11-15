import React, {useState} from 'react';
import styles from "./Update.module.scss";
import Button from "../../Button/Button";
const Update = (props) => {
    const [add,setAdd] = useState(props.task.name);
    const handleEdit = (e) => {
        setAdd(e.target.value);
        console.log(add)
    }
    const handleReset = () => {
        setAdd(props.task.name);
    }
    const handleUpdate = () => {
        props.onConfirmEdit({
            id:props.task.id,
            name:add
        });
    }
    return (
        <div className={styles.update}>
            <Button type="button" name={"X"} classStyle="close" modalStyle={"modal"} event={props.onClose}/>
            <label htmlFor="edit-input">Update the Task:</label>
            <input id="edit-input" type="text" value={add} onChange={handleEdit} required/>
            <Button type="button" name={"Reset"} classStyle="clear" modalStyle={"modal"} event={handleReset}/>
            <Button type="button" name={"Add"} classStyle="submit" modalStyle={"modal"} event={handleUpdate}/>
        </div>
    );
};

export default Update;
