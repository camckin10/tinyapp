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
	var database = firebase.database();

	//capture button click
	//button will recognize click + increment the hit counts

	//option 1 
	//create variable to hold numerical value of button
	//var a = 1
	//function incrementLink(){
		//var hitCount = document.getElementById("hit-count");
		//a++
	//}

	//option2
	//function incrementValue(){
// 		var linkValue = parseInt(document.getElementById('hit-count').value, 10);
// 		//will return if variable has value of NaN
// 		linkValue = isNaN(value) ? 0 : value;
// 		//if not Nan, then value will increment by 1
// 		value++;
		
//     //document.getElementById('number').value = value;
// }

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

