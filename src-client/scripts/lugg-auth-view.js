import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import ACTIONS from './ACTIONS.js'

const LuggAuthView = React.createClass({
   _submitTruckLogin:function(evt){
      evt.preventDefault()


      let existingUserData = {
         usertruck: this.refs.user_name.value,
         password: this.refs.pass_word.value

      }
      console.log(existingUserData);
      ACTIONS._loginTruck(existingUserData)

   },

   _submitNewTrucker: function(evt){
   evt.preventDefault()

   let newUserData = {
      usertruck: this.refs.user_name1.value,
      password: this.refs.pass_word1.value,
      first_name: this.refs.first_name1.value,
      last_name: this.refs.last_name1.value,
      email: this.refs.email1.value,
      phone_number: parseInt(this.refs.phone_number1.value),
      bedSize: this.refs.bedSize.value

   }
   console.log(newUserData);
   ACTIONS._createTruck(newUserData)
},

   render: function(){
      return(
            <div className = "row">
               <div className ="lugg-auth-form">
                 <form className = "col-xs-12 col-sm-6 text-center" id="truck-login-form" onSubmit = {this._submitTruckLogin}>
                          <a href = "#"><i className="fa fa-home fa-2x " aria-hidden="true"></i></a>
                          <h2 className = "exisiting-lugger">Existing Lugger Login </h2>
                     <div>
                       <div className = "form-group">
                          <label htmlFor = "name">Username</label>
                          <input type = "text" className="form-control" name = "username" ref = "user_name" placeholder = "Enter Username" />
                       </div>
                       <div className="form-group">
                          <label htmlFor = "password">Password</label>
                          <input type = "password" className="form-control" name = "password" ref = "pass_word" placeholder="Enter Password"/>
                       </div>
                          <input type = "submit" className="btn btn-default" />
                     </div>
                     </form>
                 <div className = "row">
                     <form className = "col-xs-12 col-sm-6 text-center" id="truck-create-form" onSubmit = {this._submitNewTrucker}>
                       <div>
                            <h2 className = "">Create New Lugger </h2>
                         <div className = "form-group">
                            <label htmlFor = "name"> Username</label>
                            <input type = "text" className="form-control" id="username" ref = "user_name1" placeholder = "Username" />
                         </div>
                         <div className = "form-group">
                            <label htmlFor = "password">Password </label>
                            <input type = "password" className="form-control" id="password" ref = "pass_word1" placeholder = "Password" />
                         </div>
                         <div className = "form-group">
                            <label htmlFor = "name">First Naame </label>
                            <input type = "text" className="form-control" id="firstName" ref = "first_name1" placeholder = "First Name" />
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name">Last Name</label>
                            <input type = "text" className="form-control" id="lastName" ref = "last_name1" placeholder="Last Name"/>
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name">Email</label>
                            <input type = "text" className="form-control" id="email" ref = "email1" placeholder="Email"/>
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name">Phone Number</label>
                            <input type = "text" className="form-control" id="phone" ref ="phone_number1" placeholder="Phone Number"/>
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name">Bed Size</label>
                            <input type = "text" className="form-control" id="bed" ref ="bedSize" placeholder="Truck Bed Size"/>
                         </div>
                            <input type = "submit" className="btn btn-default" />
                       </div>
                   </form>
                  </div>
              </div>
            </div>
      )
   }
})

module.exports = LuggAuthView
