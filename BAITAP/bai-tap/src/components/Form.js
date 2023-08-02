import "../App.css";
import React, { Component } from 'react';
import Home from './Home';
 
 class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {email: "", password: "", remember: false},
            valid: false,
            login: false
        }
    }
    handleChange = (e) => {
        this.setState((state) => {
            const {form} = state
            form[e.target.name] = e.target.value
            return {form}
        }, () => this.checkValidForm())
      }
      handleChangeCheckbox = () => {
        this.setState((state) => {
            const {form} = state
            form.remember = !form.remember
            return {form}
        }, () => this.checkValidForm())
      }
      checkValidForm = () => {
        const {email,password} = this.state.form
        const value = email && password
        this.setState({valid: value})
      }
      handleSubmit = () => {
        if(this.state.valid){
            this.setState({login: true})
        }
      }
      handleLogOut = () => {
        this.setState({login: false})
      }

      render () {
        const { login, form } = this.state
        if (login) return (<Home onLogOut={this.handleLogOut} />)
        return (
          <div className="container d-flex align-items-center text-center">
            <div className="form-signin">
              <form>
                <img className="mb-4" src="https://taytou.com/wp-content/uploads/2022/05/avatar-sieu-nhan-gao-do-sieu-nhan-giai-cuu-the-gioi.jpg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                  <input className="form-control email" type="email" name="email" placeholder="name@example.com" value={form.email} onChange={this.handleChange} />
                  <label>Email address</label>
                </div>
                <div className="form-floating">
                  <input className="form-control password" type="password" name="password" placeholder="Password" value={form.password} onChange={this.handleChange} />
                  <label>Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value={form.remember} onChange={this.handleChangeCheckbox} /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.handleSubmit} >Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2023</p>
              </form>
            </div>
          </div>
        )
      }
 }
 
 export default Form;