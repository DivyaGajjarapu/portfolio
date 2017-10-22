var visible = 0;

function explore() {
    visible = !visible;
    if (visible) {
        $("div.child_buttons").children("button").each(function(index) {
            var button = $(this);
            setTimeout(function() {
                $(button).removeClass("hidden");
            }, 200 * index);
            button.css({
                'transform': 'translate(' + (10) * (-1) + 'em,' + (1) * 10 + 'em)'
            });
        })
    } else {
        $("div.child_buttons").children("button").each(function(index) {
            var button = $(this);
            setTimeout(function() {
                $(button).addClass("hidden");
            }, 100 * index);

        });
    }
}

function styling(el) {
    var locationHash = $(el).attr('class').split(' ')[0];
    $('html, body').animate({
        'scrollTop': ($("#" + locationHash).position().top) - 55
    }, 800, function() {})
    if (currentHash != locationHash) {
        window.location.hash = locationHash;
    }
}

$(document).ready(function() {
    $("button.navigate").css("right", "1000px");
    $("div.child_buttons").css("right", "1100px");
})

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
    })
})