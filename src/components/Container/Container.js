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
    // const completed
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
    return (
        <div>
            {modal &&
            <Modal mode={mode} task={task} onConfirmDelete={handleConfirmDelete} onConfirmAdd={handleConfirmAdd} onConfirmEdit={handleConfirmEdit}/>}

            <TodoList todoList={todoList} onMultipleDelete={handleMultipleDelete} onDelete={handleDelete}
                      onEdit={handleEdit} onAdd={handleAdd}/>
        </div>
    );
};

export default Container;
