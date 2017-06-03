$( document ).ready(function() {
    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.5;

    var spaceship_parallax = document.querySelector("#spaceship"),
        spaceship_speed = 1.2;


    window.onscroll = function(){
        [].slice.call(parallax).forEach(function(el,i){
            el.style.backgroundPosition = "50% " + (window.pageYOffset * speed) + "px";
        });

        var height = Math.max(-3000, (window.pageYOffset - spaceship_parallax.offsetTop) * spaceship_speed - 2710);
        spaceship_parallax.style.backgroundPosition = "5% " + height.toString() + "px";
    };
});