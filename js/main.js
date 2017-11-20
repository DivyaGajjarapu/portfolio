$(document).ready(function() {
    $("header.page1 h4").fadeIn(3000);
    $("header.page1 h5").fadeIn(9000);
    $("div.displayNone").fadeIn(11000);
    loadSkills();
});

function relocate(el) {
    //	var currentHash = $(this).parent("div").attr('id');
    var locationHash = $(el).attr('class');
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#" + locationHash).offset().top - 65
    }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = "#" + locationHash;
    });
    if (locationHash == "about") {
        loadSkills();
    }

}
var currentHash = "";
$(document).scroll(function(e) {
    $("div.content").each(function() {
        var $this = $(this).parent("div");
        var hash = $this.attr('id');
        var scrollPosition = window.pageYOffset;
        var topDistance = $this.offset().top - window.pageYOffset;
        if (topDistance <= 400 && topDistance >= 50 && currentHash != hash) {
            currentHash = hash;
            history.pushState(null, hash, "#" + hash);

        } else if (scrollPosition <= 401) {
            history.pushState(null, null, "#");
            currentHash = "";
        }
        if (hash == "about") {
            loadSkills();
        }
    })
});

function loadSkills() {
    $("div.w3-green").each(function() {
        var $this = $(this);
        var width = $this.attr("id");
        var IntervalWidth = 1;
        var id = setInterval(frame, 20);

        function frame() {
            if (IntervalWidth >= width) {
                clearInterval(id);
            } else {
                IntervalWidth++;
                $this.css("width", IntervalWidth + '%');
            }
        }
    })
}