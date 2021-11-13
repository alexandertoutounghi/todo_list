import React, {useState} from 'react';
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import Add from "../Modal/Add/Add";

const Container = (props) => {
    const [todoList, setTodoList] = useState([{id: 0, name: "do laundry gfsgdfgfgdfgdf fdgffsgfgdf"},
        {id: 1, name: "eat oranges"},
        {id: 2, name: "buy tomatoes"},
        {id: 3, name: "buy tomatoes"},
        {id: 4, name: "buy tomatoes"},
        {id: 5, name: "buy tomatoes"},
        {id: 6, name: "buy tomatoes"},
        {id: 7, name: "buy tomatoes"}]);
    const [modal, setModal] = useState(false);
    const [mode, setMode] = useState('');
    const [task, setTask] = useState();

    // useEffect(() => {
    //     setTodoItems(prevState => [
    //         prevState,
    //
    //     )
    //     return () => {
    //         effect
    //     };
    // }, [TodoItems]);
    const handleMultipleDelete = (itemsToDelete) => {
        console.log('hello')
        // setState({})
        // console.log(itemsToDelete)
        // setTodoList(todoList.filter((item,index)=> {
        //     if (itemsToDelete[index])
        //         return item;
        // }))
        // for (var i = 0; i < itemsToDelete.length; i++) {
        //     if (itemsToDelete[i]) {
        //
        //
        //     }
        // }


    }
    const handleDelete = (id) => {
        console.log("hello")
        setModal(true);
        setMode('delete');
        setTask(todoList[id]);
    }
    const handleEdit = (id) => {
        console.log("hello")
        setModal(true);
        setMode('delete');
        setTask(todoList[id]);
    }
    const handleConfirmDelete = (todo) => {
        setTodoList(todoList.filter((item) => {
                if (item.id !== todo.id) {
                    return item;
                }
            }
        ));
        setModal(false);

    }
    return (
        <div>

            {modal && <Modal mode={mode} task={task} onConfirmDelete={handleConfirmDelete}/>}

            <TodoList todoList={todoList} onMultipleDelete={handleMultipleDelete} onDelete={handleDelete} onEdit={handleEdit}/>

        </div>
    );
};

export default Container;
