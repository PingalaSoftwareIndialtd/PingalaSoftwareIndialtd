// parallax instance creation

var scene = $("#scene").get(0);
$("#scene").addClass("animated fadeIn");
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

//movement friction
parallaxInstance.friction(0.75, 0.75);
