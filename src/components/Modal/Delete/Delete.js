import React, {useState} from 'react';
import styles from './Delete.module.scss'

const Delete = (props) => {
    const [checked, setChecked] = new Array(props.todoItems.length).fill(false);
    /**
     *
     * @param e Event
     */
    const val = true;
    const handleDelete = (e) => {
        console.log(e.target.value);
        // const values = [...e.target.options].filter(o => o.selected).map(o => o.value);
        // props.onDelete(values)
    }

    const handleSelection = (e) => {
        console.log(e.currentTarget.dataset.index);

    }
    return (
        <React.Fragment>
            <div className={styles.delete}>

                {/*<label htmlFor="delete-task">Select One or Multiple Tasks</label>*/}
                {props.todoItems.map((todo, index) => {
                    return (
                            <div className={styles['delete-task']} key={index} data-index={index}
                                 onClick={handleSelection}>
                                <input onClick={handleDelete} type="checkbox" key={todo.id} name={todo.name}
                                       value={todo.name}/>
                                <label htmlFor="">{todo.name}</label>
                            </div>
                          )
                })}

                {/*<select id="delete-task" onChange={handleDelete} multiple>*/}
                {/*    {props.todoItems.map(todo => {*/}
                {/*        return <option value={todo.name} key={todo.id}>{todo.name}</option>*/}
                {/*    })*/}
                {/*    }*/}
                {/*</select>*/}
            </div>
            <button>Clear</button>
        </React.Fragment>
    );
};

export default Delete;
