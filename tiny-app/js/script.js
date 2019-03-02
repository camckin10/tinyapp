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

//onclick function for both sign in pages
//user signs up, user can sign in, user can sign out
$('sign-btn').on("click", function(){
	//user signs up
//onclick function for this action?
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

//user signs in app 
//onclick function for this action?
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

//user signs out of app
//on click function
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});

}) //closing brackets for sign up pages html

//create url btn will have an onclick function--to create urls 






//option 3
	// $('.create-hit-url').on("click", function(){

	// 	//use event.preventDefault to stop form?
	// 	//possibly would cause hit count to not increment

	// 		//grab value from URL input
	// 		var formInput = $('.form-input').val().trim();



	// 		//code for handling push
	// 		database.ref().push({
	// 		formInput: formInput,
	
	// 	})
	// 		//checking in console for information
	// 		console.log(formInput);


	// 	//Firebase watcher + initial loader 
  //   //code that works the same as .on("value")
  //   database.ref().on("child_added", function(childSnapshot) {
	// 		//console log everything from childSnapshot to double check
			
//variable should hold html value
//var tiny-url = document.getElementById('tiny-url).value;
	// 		//Change HTML to reflect information
	// 		$(".round-tbl").append('<tr><td>' + variable + '</td><td>' + variable + '</td><td>' + variable + '</td><td>' + variable + '</td></tr>');

	//$(".round-tbl").append('<tr><td>' + tiny-url )

	// 		//syntax--id.text(childsnapshot) value. variable name 
	// 		$("#id-name").text(childSnapshot.val().variable);
	// 	})
		
	// });

