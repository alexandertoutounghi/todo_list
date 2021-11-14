import React from 'react';
import styles from './Button.module.scss'
const Button = (props) => {
    const {type,name,classStyle,event,modalStyle} = props;
 return (
     <button onClick={event} type={type} className={`${styles[classStyle]} ${styles.button} ${styles[modalStyle]}`}>{name}</button>
 );
};


export default Button;