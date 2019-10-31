import React from 'react';
import Connect from '../../Store/Connect';
const Input = (props)=>{

    const {label,type,name,store,message} = props;
    const inputV8 = store[name];

    const handlerEvent = (event)=>{
        if(event.type === "focus"){
            inputV8.setTouch(event.target.value);
        }
        inputV8.setValue(event.target.value);
    }
    const handlerMessageError = ()=>{
       if(inputV8.touch === true && inputV8.valid === false){
            return <span>{message}</span>
       }
    }
    return(
        <div>
            <label>{label}</label>
            <input  type = {type} name = {name} value = {inputV8.value} 
             onChange = {handlerEvent}
             onFocus = {handlerEvent}
             onBlur  = {handlerEvent}
            />
            {
                handlerMessageError()
            }
        </div>
    );
}

export default Connect(Input);