
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA6uVNrT20MAettMT_oicemAF3fUDTVVzo",
    authDomain: "train-schedule-808fb.firebaseapp.com",
    databaseURL: "https://train-schedule-808fb.firebaseio.com",
    projectId: "train-schedule-808fb",
    storageBucket: "",
    messagingSenderId: "1059319356598"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#add-train-btn").on("click", function(event){
  event.preventDefault();
});

var trainName = $("#name-input").val().trim();
var trainDestination = $("#dest-input").val().trim();
var trainTime = $("#time-input").val().trim();
var trainFrequency = $("#freq-input").val().trim();

var newTrain = {
  name: trainName,
  dest: trainDestination,
  time: trainTime,
  frequency: trainFrequency
};

database.ref().push(newTrain);

$("#name-input").val("");
$("#dest-input").val("");
$("#time-input").val("");
$("#freq-input").val("");

database.ref().on("child_added", function(childSnapshot, prevChildKey){

  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().dest;
  var trainTime = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;

  $("#train-table > tbody").append("<tr><td>" + name + "</td><td>" + dest + "</td><td>" +
  time + "</td><td>" + frequency +  "</td></tr>");

});
