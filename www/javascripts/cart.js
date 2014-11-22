steroids.view.navigationBar.show('Cart');

var button = new steroids.buttons.NavigationBarButton();
button.title = " < Back";
button.onTap = function() {
    steroids.layers.pop();
};

steroids.view.navigationBar.update({
  buttons: {
    left: [button]
  },
    overrideBackButton: true
}, {});

function place(){
  navigator.notification.alert("Thanks for ordering. Your order is on the way.", null,"Order Placed", "Got it");
  steroids.layers.popAll();
  /*var tutorial = new steroids.views.WebView("tutorial.html");
	tutorial.preload({},{
	onSuccess: function() {
    steroids.layers.replace(tutorial);
  }
});*/
};