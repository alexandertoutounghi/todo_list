import React, {useState} from 'react';
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";

const Container = (props) => {
    const [todoItems, setTodoItems] = useState();
    const [modal,setModal] = useState(false);
    // useEffect(() => {
    //     setTodoItems(prevState => [
    //         prevState,
    //
    //     )
    //     return () => {
    //         effect
    //     };
    // }, [TodoItems]);


    return (
        <div>
            <TodoList/>
            <Modal/>
            <button onClick={()=>{setModal(true)}}>Add Item</button>
            <button onClick={()=>{setModal(true)}}>Delete Item</button>
            <button onClick={()=>{setModal(true)}}>Update Item</button>
        </div>
    );
};

export default Container;
