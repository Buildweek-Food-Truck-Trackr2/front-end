import React from "react";

export default class Login extends React.Component{
  state={
    credentials: {
      username: "",
      password: ""
    }
  }

  onChange= (e) =>{
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  }

  render(){
    return(
      <div>
      <form>
        <input
          type="text"
          name="username"
          value={this.state.credentials.username}
          onChange={this.onChange}
        />
        
        <input
          type="password"
          name="password"
          value={this.state.credentials.password}
          onChange={this.onChange}

        />
        <button>Login</button>
      </form>
    </div>
    )
  }
}