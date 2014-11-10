steroids.view.setBackgroundColor("#ecf0f1");
var tutorial = new steroids.views.WebView("tutorial.html");
var sign = new steroids.views.WebView({
    location: "signup.html",
    id: "sign"
});
function signup(){
steroids.modal.show( {
  view: sign,
  keepLoading: false,
  navigationBar: false,
  disableAnimation: false,
  waitTransitionEnd: true
  });
  };
function login(){
document.getElementById("index").style.padding="5% 0% 0% 0%";
document.getElementById("log").innerHTML='<div class="list"><label class="item item-input item-floating-label"><span class="input-label">Email</span><input id="email" type="text" placeholder="Email"></label><label class="item item-input item-floating-label"><span class="input-label">Password</span><input id="password" type="password" placeholder="Password"></label></div>';
document.getElementById("loginbtn").innerHTML='<button onclick="loginbutton()" class="button button-block button-outline button-calm">Log In</button>';
}
function loginbutton(){
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var s="https://api.mongolab.com/api/1/databases/stash/collections/users?q={%27email%27:%27"+email+"%27}&apiKey=CY25QoECLES-gOosRdd-E071aH5rcLQz";
var hah = CryptoJS.SHA3(password);
var fin=hah.toString(CryptoJS.enc.Hex);
$.getJSON( s, function( data ) {
	if(data.length ==0){
	navigator.notification.alert("Invalid email/Password, please enter a valid email or password",null,"Invalid Credentials","Got it!");
	}else if(fin.localeCompare(data[0].password)!=0){
	navigator.notification.alert("Invalid email/Password, please enter a valid email or password",null,"Invalid Credentials","Got it!");
	} else {
	steroids.modal.show( {
	view: tutorial,
	keepLoading: true,
	navigationBar: true,
	disableAnimation: false,
	waitTransitionEnd: true});
	}});
}