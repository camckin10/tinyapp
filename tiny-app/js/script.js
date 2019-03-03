//posible resources
//https://stackoverflow.com/questions/47115748/append-a-row-to-a-table-and-increment-a-value-with-javascript

//copied link inside a variable
var endpoint = "https://www.jsonstore.io/f8e77fd774459fe7fa534efc99356e24f69f815f07752ed71d9124adb8cdc61c";

//function that will tell computer to shorten URL
function getrandom(){
    var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return random_string();
}

//function will take the value from input box, verify it, and return the value
function geturl(){
    var url = document.getElementById("form-input").value;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if(!protocol_ok){
        newurl = "http://"+url;
        return newurl;
        }else{
            return url;
        }
}

//function to change hash in location bar
function genhash(){
    if (window.location.hash == ""){
        window.location.hash = getrandom();
    }
}

//function for JSON request
function sendRequest(url) {
    this.url = url;
    $.ajax({
        'url': jsonEndpoint + "/" + window.location.hash.substr(1),
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}

//main function
function shorturl(){
    var longurl = geturl();
    genhash();
    send_request(longurl);
}

var hashh = window.location.hash.substr(1)

if (window.location.hash != "") {
    $.getJSON(endpoint + "/" + hashh, function (data) {
        data = data["result"];

        if (data != null) {
            window.location.href = data;
        }

    });
}





  // // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBI7ldhUIltYYlG2yUYQIabAkQGWCxzCwE",
  //   authDomain: "small-app-33cef.firebaseapp.com",
  //   databaseURL: "https://small-app-33cef.firebaseio.com",
  //   projectId: "small-app-33cef",
  //   storageBucket: "small-app-33cef.appspot.com",
  //   messagingSenderId: "14412103389"
  // };
	// firebase.initializeApp(config);
	
	// //reference database
	// //read + write data from database 
	// var database = firebase.database();

	// //onclick function for sign up page

	// var emailAdd = document.getElementById('email');
	// var password = document.getElementById('password');
	
	// 	//submit button
	// 	var signUpBtn = document.getElementById('sign-up-btn');


	// signUpBtn.addEventListener('click', function(){

	// 	//grab values from input
	// 	emailAdd = document.getElementById('email').value;
	// 	password = document.getElementById('password').value;

	// //push data to database
	// database.ref().push({
	// 	email:email,
	// 	password:password
	// })

	// 	//create new acct
	// 	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	// 		// Handle Errors here.
	// 		var errorCode = 'auth/invalid-action-code';
	// 		if (errorCode == 'auth/invalid-action-code'){
	// 			return("Your password is incorrect");
	// 		} else {
	// 			 return("Welcome Back");
	// 		}
		
	// 	});

	// //add user to database
	// function newUserData(email,password){
	// 	firebase.database().ref().set({
	// 		email:email,
	// 		password:password
	// 	})
	// }

	// })

	// //console log the variables to test
	// console.log(email);
	// console.log(password);

	// var signIn = document.getElementById('sign-in-btn');

	// //onclick function for sign in
	// signIn.addEventListener('click', function(){

	// 	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	// 		// Handle Errors here.
	// 		var errorCode = 'auth/invalid-email';
	// 		if (errorCode == 'auth/invalid-email'){
	// 			console.log('Incorrect email. Please try again');
	// 		} else if (error == 'auth/invalid-password') {
	// 				console.log('Incorrect password. Please try again');
	// 		} else {
	// 			console.log("Good to go!");
	// 		}
		
	// 	});
	// })

	// //user acct/profile


	