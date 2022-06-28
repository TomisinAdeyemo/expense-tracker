import React, {createContext, useReducer} from 'react';

const initialState = {
    transactions: [
        {id: 1, text: 'yello', amount: 34},
        {id: 2, text: 'yello', amount: 25},
        {id: 3, text: 'yello', amount: 92},
        {id: 4, text: 'yello', amount: 74},
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider