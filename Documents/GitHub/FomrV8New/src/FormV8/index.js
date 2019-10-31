import React,{useState,useEffect} from 'react';

import Context from './Store/Context';

const FormV8 = (props)=>{
    const {children} = props;

    const [state,setState] = useState(setUpInputs());
    
    useEffect(()=>{
        observerFormValue();
    },[state])
    function observerFormValue(){
        props.observer(state);
    }
    function setUpInputs(){
        const formThis = {};
        React.Children.forEach(children,(child)=>{
            formThis[child.props.name] = {
                value:child.props.value,
                valid:child.props.validators.every((validator)=>{
                    return validator(child.props.value);
                }),
                touch:false,
                setValue:(value)=>{
                    setState({
                        ...state,[child.props.name]:{
                            ...state[child.props.name],
                            value:value,
                            valid:child.props.validators.every((validator)=>{
                                    return validator(value);
                            })
                        }
                    });
                },
                setTouch:()=>{
                    state[child.props.name].touch = true;
                    setState(state);
                }
            }
        })
        return formThis;
    }
    return(
        <form>
            <Context.Provider value = {{
                store:state
            }}>
                {children}
            </Context.Provider>
        </form>
    );
}
export default FormV8;