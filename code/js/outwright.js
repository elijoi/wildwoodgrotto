// JavaScript Document
var map;
$( document ).ready(function() {
	
	$(".section").hide();
	$("#about").show();
	
    $(".navbar-nav li").click( function() {
		$(".section").hide();
		$(".navbar-nav li").removeClass("active");
		$(this).addClass("active");
		var id="#" + $(this).attr("id").split("_")[1];
		$(id).show();
		if (id == "#location") {
			initialize_map();
		}
	});
	
	$(".event").click( function() {
		if ($(this).hasClass("partybox")) {
			window.open($(this).attr("rel"));
		} else {
			var href = "#" + $(this).attr("rel") + "_popup";
			$.colorbox({width:"650px", inline:true, href: href});			
		}
	});
	
	$(".work").hover( 
		function() {$(this).css("opacity", ".6");}, 
		function() {$(this).css("opacity", "1");}
	);
	
	$(".work").click( function() {
		var href = "#" + $(this).attr("rel") + "_popup";
		$.colorbox({width:"650px", inline:true, href: href});
	});

});

  function initialize_map() {
	var myLatlng = new google.maps.LatLng(45.505239, -122.654428);
	var mapCanvas = document.getElementById('map_canvas');
	var mapOptions = {
	  center: myLatlng,
	  zoom: 16,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(mapCanvas, mapOptions)
	  var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  title: 'Funhouse Lounge!'
	  });	
  }
  