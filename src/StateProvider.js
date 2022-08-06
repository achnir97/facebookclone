// import creatContext, and useContext from react, 
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); // preparing the data layer 


//Stateprovider component allow you to acess the current state of your components along with the search results. 


export const StateProvider = ({

    reducer, initialState, children
}) => (

    <StateContext.Provider

        value={useReducer(reducer, initialState)}>

        {children}

    </StateContext.Provider>);

export const useStateValue = () => useContext(StateContext) // for consume of the data to the children component.
