import React, {useState} from 'react';
import styles from "./Add.module.scss";
import Button from "../../Button/Button";

const Add = (props) => {
    const [add, setAdd] = useState('');
    const handleInput = (e) => {
        setAdd(e.target.value);
    }
    const handleClear = () => {
        setAdd('');
    }

    const handleAdd = () => {
        props.onConfirmAdd(add);
    }

    return (
        <div className={styles["add-container"]}>
            <div className={styles.add}>
                <Button type="button" name={"X"} classStyle="close" modalStyle={"modal"} event={handleAdd}/>
                <label htmlFor="add-item">Enter Task:</label>
                <input id={'add-item'} type="text" value={add} placeholder={"Add Task Here"}
                       onChange={handleInput}/>
                <Button type="clear" name={"Clear"} classStyle="clear" modalStyle={"modal"} event={handleClear}/>
                <Button type="button" name={"Add"} classStyle="submit" modalStyle={"modal"} event={handleAdd}/>
            </div>
        </div>
    );
};

export default Add;
