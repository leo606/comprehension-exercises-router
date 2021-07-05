import React from 'react';
import { Redirect } from 'react-router';

class StrictAccess extends React.Component{
  constructor(){
    super();
    this.welcome = this.welcome.bind(this);
    this.denied = this.denied.bind(this);
  }

  welcome() {
    return <p>Welcome Joao</p>
  }

  denied() {
    console.log('deni');
    alert('Access denied');
    return <Redirect to='/'/>
  }

  render(){
    const { username, password } = this.props.user;
    return (
      <div>
        {(username === 'joao' && password === '1234') ? this.welcome() : this.denied()}
      </div>
    );
  }
}

export default StrictAccess;