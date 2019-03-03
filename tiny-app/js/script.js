//posible resources
//https://stackoverflow.com/questions/47115748/append-a-row-to-a-table-and-increment-a-value-with-javascript


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBI7ldhUIltYYlG2yUYQIabAkQGWCxzCwE",
    authDomain: "small-app-33cef.firebaseapp.com",
    databaseURL: "https://small-app-33cef.firebaseio.com",
    projectId: "small-app-33cef",
    storageBucket: "small-app-33cef.appspot.com",
    messagingSenderId: "14412103389"
  };
	firebase.initializeApp(config);
	
	//reference database
	//read + write data from database 
	var database = firebase.database();

	//onclick function for sign up page

	var emailAdd = document.getElementById('email');
	var password = document.getElementById('password');
	
		//submit button
		var signUpBtn = document.getElementById('sign-up-btn');


	signUpBtn.addEventListener('click', function(){

		//grab values from input
		emailAdd = document.getElementById('email').value;
		password = document.getElementById('password').value;

	//push data to database
	database.ref().push({
		email:email,
		password:password
	})

		//create new acct
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = 'auth/invalid-action-code';
			if (errorCode == 'auth/invalid-action-code'){
				return("Your password is incorrect");
			} else {
				 return("Welcome Back");
			}
		
		});

	//add user to database
	function newUserData(email,password){
		firebase.database().ref().set({
			email:email,
			password:password
		})
	}

	})

	//console log the variables to test
	console.log(email);
	console.log(password);

	var signIn = document.getElementById('sign-in-btn');

	//onclick function for sign in
	signIn.addEventListener('click', function(){

		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = 'auth/invalid-email';
			if (errorCode == 'auth/invalid-email'){
				console.log('Incorrect email. Please try again');
			} else if (error == 'auth/invalid-password') {
					console.log('Incorrect password. Please try again');
			} else {
				console.log("Good to go!");
			}
		
		});
	})

	//user acct/profile
	

	