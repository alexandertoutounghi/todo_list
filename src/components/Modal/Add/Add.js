import React, {useState} from 'react';

const Add = () => {
    const [Add, setAdd] = useState('');
    return (
        <React.Fragment>
            <input type="text" value={Add} onChange={(e)=> {setAdd(e.target.value)}} />
        </React.Fragment>
    );
};

export default Add;
