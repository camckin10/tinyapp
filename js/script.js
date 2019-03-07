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
	var longurl = $("#urlnameinput").one().val() || ' ' ;
	var shorturl = 'http://tinyurl.com/api-create.php?url=' + longurl;


	//moment.js
	//putting time values in an object that gets pushed to databse
	//  var newData = {
	// 			longurl:longurl,
	// 			shorturl:shorturl
	// 
	//  }


	//code for handling the push
	//BUT this also gets pushed to database! what is going on???
	database.ref().push({
					longurl: longurl,
					shorturl:shorturl
			})
			//checking in console for information
	//console.log(longurl);



	//Firebase watcher + initial loader 
	//code that works the same as .on("value")
	database.ref().on("child_added", function(childSnapshot) {
			//console log everything from childSnapshot to double check
			var longurl = childSnapshot.val().longurl;
			var shorturl = childSnapshot.val().shorturl;
			


			//Change HTML to reflect information
			//$("#long-url").append('<a href=>' + longurl  + 'originalurl'+ '</a>');
			$('#long-url').append(longurl);
			$('#short-url').append('<a href=>' +  shorturl + '</a>');
			

			//$("#urlnameinput").text(childSnapshot.val().longurl);
			

	});




});