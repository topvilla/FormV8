import React from 'react';

import Context from  './Context';

const Connect = Component => {
    return props => (
      <Context.Consumer>
        {({store }) => {
          return <Component store = {store} {...props}/>;
        }}
      </Context.Consumer>
    );
  };
  
  export default Connect;