import React from 'react';
import './App.css';

import FormV8 from './FormV8/index';
import Input from './FormV8/Components/Input';

function App() {
  return (
    <div className="App">
      <FormV8 observer = {(data)=>{
          console.log(data);
      }}>
        <Input label  = "Name" type = "text" name = "name" value = "pedro" message = "Error"
            validators = {[
              (value)=>{
                return value !== "";
              }
            ]}
        /> 
        <Input label  = "LastName" type = "text" name = "lastName" value = "" message = "Error"
          validators = {[
            (value)=>{
              return value !== "";
            }
          ]}
        /> 
        <Input label  = "Birth date" type = "date" name = "birthDate" value = "" message = "Error"
           validators = {[
            (value)=>{
              return value !== "";
            }
          ]}
        /> 
      </FormV8>
    </div>
  );
}

export default App;
