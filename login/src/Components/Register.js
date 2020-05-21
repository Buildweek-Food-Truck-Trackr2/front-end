import React from "react";

export default class Register extends React.Component{
  state={
    username: '',
    email: '',
    password: '',
  }

  onChange= (e) =>{
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }

  render(){
    return(
      <div>
      <form>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onChange}
        />
         <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.onChange}

        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}

        />
        <button>Sign Up</button>
      </form>
    </div>
    )
  }
}