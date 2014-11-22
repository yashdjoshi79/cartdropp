steroids.view.setBackgroundColor("#1aacc3");
var anim = new steroids.Animation("fade");
var driver = new steroids.views.WebView("Driver.html");
driver.preload();
var car = new steroids.views.WebView("cart.html");
car.preload();
var payment = new steroids.views.WebView("payments.html");
payment.preload();
var rewardCard = new steroids.views.WebView("rewardCards.html");
rewardCard.preload();
var setting = new steroids.views.WebView("settings.html");
setting.preload();

function cross(){
steroids.modal.hide();
};

function logOut(){
steroids.view.navigationBar.hide();
steroids.modal.hideAll();
};

function loc(){
  steroids.layers.push( {
    view: driver,
	animation: anim
  } );
  };

function cart(){
  steroids.layers.push( {
    view: car,
	animation: anim
  } );
  };
  
function payments(){

  steroids.layers.push( {
    view: payment,
	animation: anim
  } );
  };
  
function rewardCards(){
  steroids.layers.push( {
    view: rewardCard,
	animation: anim
  } );
  };
  
function settings(){
  steroids.layers.push( {
    view: setting,
	animation: anim
  } );
  };
