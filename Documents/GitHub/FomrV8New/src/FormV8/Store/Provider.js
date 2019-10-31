import React,{useReducer} from 'react';
import counterReducer,{counterStore} from './Count/index';
import Context from './Context';


const Provider = props=>{

    return(
        <Context.Provider value = {{
            store:{
                
            }
        }}>
            {props.children}
        </Context.Provider>
    );
}
export default Provider;