// Google Map js

// Location
var lock_loc = [12.968971, 77.636372];
var mark_loc = [12.968971, 77.636372];

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(lock_loc[0], lock_loc[1]),
    zoom: 17,
    disableDefaultUI: true,
    minZoom: 8,
    styles: [
      {
        stylers: [
          {
            hue: "#176cff"
          },
          {
            saturation: 89
          }
        ]
      },
      {
        featureType: "water",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      }
    ]
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  //   marker
  var myCenter = new google.maps.LatLng(mark_loc[0], mark_loc[1]);
  var marker = new google.maps.Marker({ position: myCenter });

  marker.setMap(map);
}
