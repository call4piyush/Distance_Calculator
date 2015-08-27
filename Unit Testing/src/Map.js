
	var directionDisplay;
	var latitude=0,longitude=0,latitude1=0,longitude1=0;
	var map;

	//Function to display Intial map of india 
	function initialize() {
		directionsDisplay = new google.maps.DirectionsRenderer();
		var newdelhi = new google.maps.LatLng(28.6454415,77.0907573);
		var myOptions = {
		  zoom:5,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		  center: newdelhi
		}    
		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
		directionsDisplay.setMap(map);
	}

	//function that is called onclick of calculate Distance button 
	function calcRoute() {
		var start = document.getElementById("start").value;
		var end = document.getElementById("end").value;
		
		document.getElementById("dis").innerHTML=distance(start, end);
	}

	//function to update the map with driving assistance and prints value of distance by road
	function drivingRoute(start, end){
		var Dista;
		var directionsService = new google.maps.DirectionsService();
		var request = {
				origin:start,
				destination:end,
				travelMode: google.maps.DirectionsTravelMode.DRIVING
			};
		// calculating distace from google maps (Driving directions)
				directionsService.route(request, function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				 Dista = response.routes[0].legs[0].distance.value / 1000;
				}
		});
		return Dista;
	}

	// function for calculating distance from latitudes and longitudes
	function getLat(address,end){
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({ 'address': address }, function(results, status) {
		 if (status == google.maps.GeocoderStatus.OK) {
			  latitude = results[0].geometry.location.lat();
			  longitude = results[0].geometry.location.lng();
			  }
		 else {
			  alert('Geocode error(Starting Address): ' + status);
		 }
		});

		var geocoder1 = new google.maps.Geocoder();
		geocoder1.geocode({ 'address': end }, function(results, status) {
		 if (status == google.maps.GeocoderStatus.OK) {
			  latitude1 = results[0].geometry.location.lat();
			  longitude1 = results[0].geometry.location.lng();
			  }
		 else {
			  alert('Geocode error(Ending Address): ' + status);
		 }
		});
	}
		
	//function to calculate distance by the latitude and longitude of the 2 different locations
	function distance(start, end) {
		var lat1,lon1,lat2,lon2;
		getLat(start,end);
		if(latitude==0||longitude==0||latitude1==0||longitude1==0||latitude==lat1||longitude==lon1||latitude1==lat2||longitude1==lon2){
		getLat(start,end)
		}
		else{
		document.getElementById("dista").innerHTML=drivingRoute(start, end);
		
		lat1=latitude;
		lon1=longitude;
		lat2=latitude1;
		lon2=longitude1;
			
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var radlon1 = Math.PI * lon1/180;
		var radlon2 = Math.PI * lon2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515 * 1.609344;
		return dist;
		}
	}
  