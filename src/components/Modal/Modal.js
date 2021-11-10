import React, {useState} from 'react';
import Add from "./Add/Add";
import Delete from "./Delete/Delete";
import Update from "./Update/Update";

const Modal = (props) => {
    const [option, setOption] = useState();
    const [data,setData] = useState();

    const todoItems = [
        {id:1,name:"do laundry"},
        {id:2,name:"eat oranges"},
        {id:3,name:"buy tomatoes"}
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }
    const handleOption = (e) => {
        setOption(e.target.value);
    }
    const handleOperation = (myData) => {
        setData(myData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <select onChange={handleOption}>
                <option value={"add"}>Add a Todo Item</option>
                <option value={"remove"}>Remove a Todo Item</option>
                <option value={"edit"}>Edit a Todo Item</option>
            </select>
            {option==="add"&& <Add onAdd={handleOperation}/>}
            {option==="remove"&& <Delete onDelete={handleOperation} todoItems={todoItems}/>}
            {option==="edit"&& <Update onUpdate={handleOperation}/>}
            <button type="submit">Submit</button>
            <button onClick={()=>{props.close}}>Close</button>
        </form>
    );
};

export default Modal;
