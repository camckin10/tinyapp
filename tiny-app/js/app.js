//still need link on line 2?
{/* <script src="https://www.gstatic.com/firebasejs/5.8.5/firebase.js"></script> */}

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
	var database = firebase.database();

	//capture button click
	//button will recognize click + increment the hit counts
	$('.create-hit-url').on("click", function(){

		//use event.preventDefault to stop form?
		//possibly would cause hit count to increment
	})

	//grab value from URL input
	var formInput = $('.form-input').val().trim();



	//code for handling push
	database.ref().push({
		formInput: formInput,
	
})
//checking in console for information
console.log(formInput);


//Firebase watcher + initial loader 
    //code that works the same as .on("value")
    database.ref().on("child_added", function(childSnapshot) {
			//console log everything from childSnapshot to double check
			

			//Change HTML to reflect information
			$(".round-tbl").append('<tr><td>' + variable + '</td><td>' + variable + '</td><td>' + variable + '</td><td>' + variable + '</td></tr>');

			//syntax--id.text(childsnapshot) value. variable name 
			$("#id-name").text(childSnapshot.val().variable);
		} 