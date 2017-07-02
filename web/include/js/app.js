var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.5;
    window.onscroll = function(){
        [].slice.call(parallax).forEach(function(el,i){
            el.style.backgroundPosition = "50% " + (window.pageYOffset * speed) + "px";
        });
    };
});