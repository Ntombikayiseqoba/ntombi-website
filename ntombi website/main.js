// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpP62ITTDcy0YOkXGUwhInIZQ65X2iSfY",
    authDomain: "ntombi9308-88362.firebaseapp.com",
    databaseURL: "https://ntombi9308-88362.firebaseio.com",
    projectId: "ntombi9308-88362",
    storageBucket: "ntombi9308-88362.appspot.com",
    messagingSenderId: "823519229567",
    appId: "1:823519229567:web:f3ef8798413c83b1bff14a",
    measurementId: "G-80LFQBWJQ4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
  // Initialize Firebase
  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  
  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}
