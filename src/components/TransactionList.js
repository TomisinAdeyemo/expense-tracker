import React from 'react';

export const TransactionList = () => {
    return(
        <div className='transacton-list'>
            <h3>History</h3>
            <ul id='list' className='list'>
                <li className='minus'>Cash
                 <span>-400$</span> 
                 <button className='delete-btn'>X</button>
                 </li>
            </ul>
        </div>
    );
}