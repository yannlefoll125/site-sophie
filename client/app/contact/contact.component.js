'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './contact.routes';

export class ContactComponent {
  /*@ngInject*/
  constructor($http) {
    this.submitted = false;
    this.values = {
      name: "testname",
      firstname: "firstname",
      email: "email@email.com",
      message: "message"
    };
    this.$http = $http;

  }

  onFormSubmit(form) {

    this.submitted = true;



    console.log("onFormSubmit");
    console.log(this);

    if(form.$valid) {
      console.log("Form is valid");
      this.sendEmail(this.values).then((res) => {
        console.log("email sent, reset form");
        this.values = {};
        form.$setPristine();
        form.$setUntouched();
        this.submitted = false;
        alert("Votre message a bien été envoyé !");
      }, (error) => {
        console.log('server Error');
        alert('Le message n\'a pas pu être envoyé');
      });

      

      

    } else {
      console.log("Form is invalid");
    }
  }

  sendEmail(values) {
    var config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    return this.$http.post("http://localhost:9000/contact", JSON.stringify(values), config);


    /*.then(function(res) {
      console.log("post success");
      
    }, function(res) {
      console.log("post error");
      this.serverError = res;

    })*/
  }
}

//ContactComponent.$inject = ['$http', '$cookie'];

export default angular.module('siteSophieApp.contact', [ngRoute])
.config(routes)
.component('contact', {
  template: require('./contact.html'),
  controller: ContactComponent
})
.name;
