steroids.view.setBackgroundColor("#ecf0f1");
function signup(){
var firstName=document.getElementById("firstName").value;
var lastName=document.getElementById("lastName").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var cpassword=document.getElementById("cpassword").value;
if(firstName === null ||firstName === ''){
navigator.notification.alert("Please enter your first name",null,"First Name Required", "Got it!");
}
else if(lastName=== null ||lastName===''){
navigator.notification.alert("Please enter your last name", null,"Last Name Required", "Got it!");
}
else if(email=== null ||email===''){
navigator.notification.alert("Please enter your email address", null,"Email Required", "Got it!");
}
else if(email.substring(email.length-7,email.length)!=="osu.edu"){
navigator.notification.alert("Enter @osu.edu email", null,"OSU email Required", "Got it!");
}
else if(password=== null ||password==='' || password.length< 8){
navigator.notification.alert("Please chose a password which is at least 8 characters long", null,"Invalid Password", "Got it!");
} 
else if(password!==cpassword){
navigator.notification.alert("Password and Confirm password fields do not match",null,"Invalid password confirm","Got it!");
}
else{
var hah = CryptoJS.SHA3(cpassword);
var fin=hah.toString(CryptoJS.enc.Hex);
$.getJSON( "https://api.mongolab.com/api/1/databases/stash/collections/users?q={'email':'"+email+"'}&c=true&apiKey=CY25QoECLES-gOosRdd-E071aH5rcLQz", function( data ) {
	var emaill=JSON.stringify(data);
	if(emaill==0){
		$.ajax({ url: "https://api.mongolab.com/api/1/databases/stash/collections/users?apiKey=CY25QoECLES-gOosRdd-E071aH5rcLQz",
		  data: JSON.stringify( { "name" : { "first" : firstName, "last" : lastName}, "email" :email,"password" :fin}),
		  type: "POST",
		  contentType: "application/json",
});
navigator.notification.alert("Congratulations! You are now one step closer to get the things you want, On your doorstep - The same day. Please confirm your email address and login",closeSignUp(),"Welcome to CartDropp","Got it!");
  }else{
  navigator.notification.alert("Enter a valid email", null,"Invalid Email", "Got it!");
}  });
}
  };

function closeSignUp(){
document.getElementById("firstName").value='';
document.getElementById("lastName").value='';
document.getElementById("email").value='';
document.getElementById("password").value='';
document.getElementById("cpassword").value='';
steroids.modal.hide();
}