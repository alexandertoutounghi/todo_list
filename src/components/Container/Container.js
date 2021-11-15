import React, {useState} from 'react';
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import Add from "../Modal/Add/Add";
import Palindrome from "../Palindrome/Palindrome";

const Container = (props) => {
    const [todoList, setTodoList] = useState([{id: 0, name: "do laundry gfsgdfgfgdfgdf fdgffsgfgdf"},
        {id: 1, name: "eat oranges",selected:false},
        {id: 2, name: "buy tomatoes",selected:false},
        {id: 3, name: "buy tomatoes",selected:false},
        {id: 4, name: "buy tomatoes",selected:false},
        {id: 5, name: "buy tomatoes",selected:false},
        {id: 6, name: "buy tomatoes",selected:false},
        {id: 7, name: "buy tomatoes",selected:false}]);
    // const completed
    const [modal, setModal] = useState(false);
    const [mode, setMode] = useState('');
    const [task, setTask] = useState();

    const handleMultipleDelete = (itemsToDelete) => {
        setTodoList(todoList.filter((item)=> item.selected));
    }
    const handleDelete = (id) => {
        console.log(id);

        setModal(true);
        setMode('delete');
        setTask(todoList.filter(todo => todo.id === id)[0]);
        console.log(task)
    }
    const handleEdit = (id) => {
        setModal(true);
        setMode('edit');
        setTask(todoList.filter(todo => todo.id === id)[0]);
    }
    const handleConfirmDelete = (todo) => {
        setTodoList(todoList.filter((item) => {
                if (item.id !== todo.id)
                    return item;
            }
        ));
        setModal(false);
        setMode('')
    }
    const handleAdd = () => {
        setModal(true);
        setMode('add');
    }

    const handleConfirmAdd = (data) => {
        const id = Math.floor(Math.random()*100);
        setTodoList(prevState => [
            {id: id, name: data},
            ...prevState,
        ])
        setModal(false);
        setMode('')
    }
    const handleConfirmEdit = (data) => {
        // const task = setTask(todoList.filter(todo => todo.id === data.id)[0]);
        const index = todoList.findIndex(todo => todo.id === data.id);
        const copyList = todoList;
        copyList[index] = data;
        setTodoList(prevState => {return copyList});
        setModal(false);
        setMode('')
    }
    const handleClose = () => {
        setModal(false);
        setMode('');
    }
    return (
        <div>
            <Palindrome/>
            {modal &&
            <Modal mode={mode} task={task} onConfirmDelete={handleConfirmDelete} onConfirmAdd={handleConfirmAdd} onConfirmEdit={handleConfirmEdit}
            onClose={handleClose}/>}

            <TodoList todoList={todoList} onMultipleDelete={handleMultipleDelete} onDelete={handleDelete}
                      onEdit={handleEdit} onAdd={handleAdd}/>
        </div>
    );
};

export default Container;
