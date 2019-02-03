import React from 'react'
// import App from './App'

Class ResetButton extends React.Component  {
  constructor(props) 
     super(props);
     this.state = this.getInitialState();
  }

  getInitialState = () => {
    const initialState = {
       /* state props */
    };
    return <button onClick={initialState}>RESET</button>;
}

 resetState = () => {
    this.setState(this.getInitialState());
 }
}

export default ResetButton