import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import ACTIONS from './ACTIONS.js'

const PackAuthView = React.createClass({
   _submitLogin: function(evt){
      console.log('evt', evt);
         evt.preventDefault()

         let newLogin = {
            useruser: this.refs.user_name2.value,
            password: this.refs.pass_word2.value
         }
         console.log(newLogin)

         ACTIONS._loginUser(newLogin)
      },
      _submitCreate: function(evt){
            evt.preventDefault()

            let newCreate = {
               first_name: this.refs.first_name2.value,
               last_name: this.refs.last_name2.value,
               email: this.refs.email2.value,
               phone_number: parseInt(this.refs.phone_number2.value),
               useruser: this.refs.new_username.value,
               password: this.refs.new_password.value

            }
            console.log(newCreate)

            ACTIONS._createUser(newCreate)
         },

   render: function(){
      return(
         <div>
            <div className="container-fluid home-container">
               <nav className="navbar navbar-default">
                  <a className="navbar-brand " href="#"><img className ="navbar-logo" src="../images/logo1.png" alt = "" /></a>
                  <ul className="nav navbar-nav navbar-right">
                     <li><a href="#">Home</a></li>
                     <li><a href="#">Logout</a></li>

                  </ul>
               </nav>
         <div className="container-fluid pack-auth-container ">
               <img className = "pack-auth-logo" src= "../images/logo1.png" alt="" />
               <h3 className = "pack-auth-lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
            <div className = "row">
                  <div className="pack-auth-form">
                     <form className = "col-xs-12 col-sm-6 text-center" id="login-form" onSubmit = {this._submitLogin}>
                           <h2 className = "existing-packer-form">Existing Packer Login </h2>
                        <div className = "form-group">
                           <label htmlFor = "new-username">Username</label>
                           <input type = "text" className="form-control" name = "useruser" ref = "user_name2" placeholder = "Enter Username" />
                        </div>
                        <div className="form-group">
                           <label htmlFor = "new-password">Password</label>
                           <input type = "password" className="form-control" name = "password" ref = "pass_word2" placeholder="Enter Password"/>
                        </div>
                           <input type = "submit" className="btn btn-default" />
                     </form>
                  <div className = "row ">
                     <form className = "col-xs-12 col-sm-6 text-center" id="create-form" onSubmit = {this._submitCreate}>
                           <h2 className = "create-packer-form">Create New Packer </h2>
                        <div className = "form-group">
                           <label htmlFor = "firstname">First Name </label>
                           <input type = "text" className="form-control" name = "firstname" ref = "first_name2" placeholder = "Enter First Name" />
                        </div>
                        <div className="form-group">
                           <label htmlFor = "lastname">Last Name</label>
                           <input type = "text" className="form-control" name ="lastname" ref = "last_name2" placeholder="Enter Last Name"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor = "new-email">Email</label>
                           <input type = "text" className="form-control" name = "email" ref = "email2" placeholder="Enter Email"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor = "new-phone">Phone Number</label>
                           <input type = "text" className="form-control" name = "phone_number" ref = "phone_number2" placeholder="Enter Phone Number"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor = "new-username">Username</label>
                           <input type = "text" className="form-control" name = "new-username" ref = "new_username" placeholder="Enter Username"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor = "new-password">Password</label>
                           <input type = "password" className="form-control" name ="new-password" ref = "new_password" placeholder="Enter Password"/>
                        </div>
                           <input type = "submit" className="btn btn-default" />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
      )
   }
})

module.exports = PackAuthView
