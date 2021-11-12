import React, {useState} from 'react';
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import Add from "../Modal/Add/Add";

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
            <button onClick={()=>{setModal(true)}}>Edit Todo List</button>
            {modal&& <Modal/>}

            <TodoList/>

        </div>
    );
};

export default Container;
