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
//button on click function for submit button
$("#create-hit-url").on("click", function() {
	//event.preventDefault() will stop page refreshing
	event.preventDefault();


	//grabbed values from text boxes
	//train name input variable
	var longurl = $("#urlnameinput").val() || ' ';
	//destination input variable
	//var destination = $("#destination-input").val().trim();
	//first train time input variable 
	//var trainTime = $("#traintime-input").val().trim();
	//frequency(minutes) input variable
	//var minutes = $("#frequency-input").val().trim();

	//moment.js
	//putting time values in an object that gets pushed to databse
	var newData = {
			longurl: longurl,
			//destination: destination,
			//trainTime: trainTime,
			//minutes: minutes
	}


	//code for handling the push
	//BUT this also gets pushed to database! what is going on???
	database.ref().push({
					longurl: longurl,
					//destination: destination,
					//trainTime: trainTime,
					//minutes: minutes

			})
			//checking in console for information
	console.log(longurl);
	//console.log(destination);
	//console.log(trainTime);
	//console.log(minutes);


	//Firebase watcher + initial loader 
	//code that works the same as .on("value")
	database.ref().on("child_added", function(childSnapshot) {
			//console log everything from childSnapshot to double check
			var longurl = childSnapshot.val().longurl;
			//var destination = childSnapshot.val().destination;
			//var trainTime = childSnapshot.val().trainTime;
			//var minutes = childSnapshot.val().minutes;



			//Change HTML to reflect information
			$("#url-table").append('<a href=>' + longurl + '</a>');
			//+ shorturl + '</td><td>' + hitcount  + '</td><td>' + '</td></tr>');
			

			$("#urlnameinput").text(childSnapshot.val().longurl);
			//$("#destination-input").text(childSnapshot.val().destination);
			//$("#traintime-input").text(childSnapshot.val().trainTime);
			//$("#frequency-input").text(childSnapshot.val().minutes);


	});




});

