//...........NavBar.................
var left = new steroids.views.WebView({
    location: "left.html",
    id: "leftDrawer"
});
var driver = new steroids.views.WebView("Driver.html");

/*var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
};
if (isMobile.Android()) {
    steroids.view.navigationBar.show("CartDroppp");
    document.write('<div class="button-bar"><a onclick="steroids.modal.show(left)" class="button button-calm"><i class="ion-person"></i>Profile</a><a onclick="steroids.modal.show(left)" class="button button-calm"><i class="ion-person"></i>Profile</a><a onclick="steroids.layers.push({view: driver})" class="button button-calm"><i class="ion-model-s"></i> Delivery</a></div>');
} else {*/
    steroids.view.navigationBar.show("CartDropp");
	
	// three Lines Button
    var threeLines = new steroids.buttons.NavigationBarButton();
    threeLines.imagePath = "/icons/lines.png";
    var anim = new steroids.Animation("slideFromRight");
    //var animone = new steroids.Animation("curlUp");
    threeLines.onTap = function() {
        steroids.modal.show(left);
    };

    // Car button
    var deliveryMode = new steroids.buttons.NavigationBarButton();
    deliveryMode.imagePath = "/icons/pill@2x.png";
    deliveryMode.onTap = function() {
        steroids.layers.push({
            view: driver,
            animation: anim
        });
    };

    // Initially display the login button
    steroids.view.navigationBar.update({
	  overrideBackButton: true,
        buttons: {
            right: [deliveryMode],
            left: [threeLines]
        }
    });

//preloading Sub Menus
var clothes = new steroids.views.WebView({
    location: "Clothes.html",
    id: "clothes"
});
var Alcohol = new steroids.views.WebView({
    location: "Alcohol.html",
    id: "alcohol"
});
var Toiletries = new steroids.views.WebView({
    location: "Toiletries.html",
    id: "toiletries"
});
var Stationary = new steroids.views.WebView({
    location: "Stationary.html",
    id: "stationary"
});
var Gaming = new steroids.views.WebView({
    location: "Gaming.html",
    id: "gaming"
});
var Groceries = new steroids.views.WebView({
    location: "Groceries.html",
    id: "groceries"
});
var Flowers = new steroids.views.WebView({
    location: "Flowers.html",
    id: "flowers"
});
var Electronics = new steroids.views.WebView({
    location: "Electronics.html",
    id: "electronics"
});
var Sports = new steroids.views.WebView({
    location: "Sports.html",
    id: "sports"
});

function mainMenuClick(elem) {
    if (elem.id == "Clothes") {
        steroids.layers.push({
            view: clothes,

        });
    } else if (elem.id == "Toiletries") {
        steroids.layers.push({
            view: Toiletries,

        });
    } else if (elem.id == "Stationary") {
        steroids.layers.push({
            view: Stationary,

        });
    } else if (elem.id == "Gaming") {
        steroids.layers.push({
            view: Gaming,

        });
    } else if (elem.id == "Groceries") {
        steroids.layers.push({
            view: Groceries,

        });
    } else if (elem.id == "Flowers") {
        steroids.layers.push({
            view: Flowers,

        });
    } else if (elem.id == "Electronics") {
        steroids.layers.push({
            view: Electronics,

        });
    } else if (elem.id == "Sports") {
        steroids.layers.push({
            view: Sports,

        });
    } else if (elem.id == "Alcohol") {
        steroids.layers.push({
            view: Alcohol,

        });
    }
}
    steroids.view.removeLoading();