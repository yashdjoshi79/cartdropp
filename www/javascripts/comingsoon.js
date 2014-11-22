steroids.view.navigationBar.show('Coming soon');

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