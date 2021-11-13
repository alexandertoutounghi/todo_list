import React, {useState} from 'react';
import styled from "./Update.scss";
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
        <div>
            <input type="text" value={add} onChange={handleEdit}/>
            <Button type="clear" name={"Reset"} classStyle="clear" event={handleReset}/>
            <Button type="button" name={"Add"} classStyle="submit" event={handleUpdate}/>
        </div>
    );
};

export default Update;
