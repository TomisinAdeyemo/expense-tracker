import React, {useState} from 'react';

export const AddTransaction = () => {

    const [Text, setText] = useState(''); 
    const [Amount, setAmount] = useState(0);
    return(
        <>
        <h3>Add New transacton</h3>
        <form id='form'>
            <div className='form-control'>
                <label htmlFor='Text'>Text</label>
                <input type='text' value={Text} onChange={(e) => setText(e.target.value)} 
                placeholder='Enter text...'/>
            </div>
            <div className='form-control'>
                <label htmlFor='Amount'>Amount<br />(negative - expense, positive - income)</label>
                <input type='amount' value={Amount} onChange={(e) => setAmount(e.target.value)} 
                 placeholder='Enter amount...'/>
            </div>
            <button className='btn'>Add transacton</button>
        </form>
        </>

    );
} 