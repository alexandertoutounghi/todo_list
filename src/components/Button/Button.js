import React from 'react';

const Button = (props) => {
    const {type,name,myClass} = props;
 return (
     <button type={type} className={myClass}>{name}</button>
 );
};


export default Button;