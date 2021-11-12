import React, {useState} from 'react';
import styles from "./Add.module.scss";
import Button from "../../Button/Button";
const Add = () => {
    const [Add, setAdd] = useState('');

    return (
        <div className={styles.add}>
            <label htmlFor="add-item">Enter Task:</label>
            <input id={'add-item'} type="text" value={Add} placeholder={"Add Task Here"}  onChange={(e)=> {setAdd(e.target.value)}} />
            <Button type="submit" />
            <button type="submit">Submit</button>
            <button>Clear</button>
        </div>
    );
};

export default Add;
