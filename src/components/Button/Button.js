import React from 'react';
import styles from './Button.module.scss'
const Button = (props) => {
    const {type,name,classStyle,event} = props;
 return (
     <button onClick={event} type={type} className={`${styles[classStyle]} ${styles.button}`}>{name}</button>
 );
};


export default Button;