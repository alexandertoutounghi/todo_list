import React, {useState} from 'react';
import styles from "./Add.module.scss";
import Button from "../../Button/Button";
const Add = (props) => {
    // const [Add, setAdd] = useState('');
    const handleAdd = (e) => {
        // setAdd(e.target.value);
        props.onAdd(e.target.value);
    }
    return (
        <div className={styles.add}>
            <label htmlFor="add-item">Enter Task:</label>
            <input id={'add-item'} type="text" value={props.data} placeholder={"Add Task Here"}  onChange={handleAdd} />
            <Button type="clear" name={"Clear"} classStyle="clear"/>
        </div>
    );
};

export default Add;
