document.addEventListener("deviceready", onDeviceReady, false);
        
    function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError); //call to get user's current position
        }
        
    var onSuccess = function(position) {
            var myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); //instantiate a new Google Map location with the parameters being the Crodva position coordinates
            map = new google.maps.Map(document.getElementById('map_canvas'), {
                mapTypeId: google.maps.MapTypeId.ROADMAP,
				center: myLocation,
                zoom: 12,
				disableDefaultUI:true 
            });
 
            var viewport_height = $(window).height();
            var viewport_width = $(window).width();
 
            $("#map_canvas").css("height", viewport_height);
            $("#map_canvas").css("width", viewport_width);
}
    
    function onError(error) {
            navigator.notification.alert(
                'Please check your wireless network or allow us to access your location in the privacy settings.', // message
                alertDismissed, // callback
                'Connectivity Issue', // title
                'Ok' // buttonName
            );
        }