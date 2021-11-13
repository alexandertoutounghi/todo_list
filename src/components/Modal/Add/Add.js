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
        <div className={styles.add}>
            <label htmlFor="add-item">Enter Task:</label>
            <input id={'add-item'} type="text" value={props.data} placeholder={"Add Task Here"}  onChange={handleInput} />
            <Button type="clear" name={"Clear"} classStyle="clear" event={handleClear}/>
            <Button type="button" name={"Add"} classStyle="submit" event={handleAdd}/>
        </div>
    );
};

export default Add;
