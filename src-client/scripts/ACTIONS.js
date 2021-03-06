import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'

import {UserModel, UserCollection, LoginModel, CreateUserModel, TruckModel, CreateTruckModel, CreateLuggModel, ReviewCollection, AuthenticateUser, LogOut} from './lugg-model.js'
import STORE from './STORE.js'
const ACTIONS = {

   _loginUser: function(newLogin){
      let loginMod = new LoginModel()
      loginMod.set(newLogin)
      loginMod.save().then(function(serverRes){
      // console.log('are we changing the route?', window.location);
         window.location.hash = '/create-lugg';
    })
  },

   _createUser: function(newCreate){
      let createMod = new CreateUserModel()
      createMod.set(newCreate)
      createMod.save().then(function(serverRes){
         window.location.hash = '/create-lugg';
    })
  },

  _loginTruck: function(loginTruck){
     let truckLoginMod = new TruckModel()
     truckLoginMod.set(loginTruck)

     truckLoginMod.save().then(function(serverRes){
      //   console.log('am i even here?')

        window.location.hash = '/lugg-list';
    })
  },

  _createTruck: function(createTruck){
     let truckCreateMod = new CreateTruckModel()
     truckCreateMod.set(createTruck)
     truckCreateMod.save().then(function(serverRes){
      //   console.log('are we changing the route?', window.location);
        window.location.hash = '/lugg-list';
    })
  },

  createLugg: function(newLugg){
     console.log(newLugg)
     let createLuggMod = new CreateLuggModel()
     createLuggMod.set(newLugg)
     createLuggMod.save().then(function(){
        window.location.hash ='#'
    })
  },

  fetchLuggData: function(){
      let luggCollInstance = new UserCollection();
         luggCollInstance.fetch().then(function(){
            STORE.setStore('newLuggData', luggCollInstance.models);
            // console.log('fetch ', luggCollInstance);
      })
      // return luggCollInstance
   },

   fetchReview: function(){
      let reviewCollInstance = new ReviewCollection();
         reviewCollInstance.fetch().then(function(){
            STORE.setStore('newReviewData', reviewCollInstance.models);
            // console.log('review fetch', reviewCollInstance);
         })
      return reviewCollInstance
   },

   _acceptLugg: function(id){
      let acceptlugg = new CreateLuggModel()
      acceptlugg.url = `/accept-lugg/${id}`
      // console.log('saving teh lugg')
      acceptlugg.save().then(function(serverRes){
         // console.log("okay this should route somewhere else now")
         window.location.hash = '/lugg-list';
     }).fail(function(error){
      //   console.log("did i fail??", error)
     })
  },

  _logOut: function(){
     $.ajax({
        method: 'POST',
        url: '/logout'
     }).then(function(){
        window.location.hash = ''
     })
  },

  setModal:function(showingStatus, modalData){
     console.log(modalData)
     STORE.setStore('modalWindowSettings', {
        isShowing:showingStatus,
        payload: modalData,
     })
 }

   // _authenticateUser: function(){
   //    let currentUser = new AuthenticateUser()
   //    currentUser.set(currentUser)
   //    currentUser.save().then(function(){
   //       STORE.setStore('currentUser', currentUser)
   //       window.location.hash = '';
   //
   //
   //    })
   // }
}


module.exports = ACTIONS
