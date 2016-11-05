$(document).ready(function() {
  var servicesHeaders = $(".services-title");
  $(".btn1").click(function(event) {
      var btns = $(".btn1");
      var parents = btns.parent(".ofr"),
      $this = $(this);

      $(".outside, .btn1, .ofr h1").fadeOut(400, function() {
          $(this).parent(".ofr").children('h1').delay(600).fadeIn(800);
      });
      setTimeout(function(){
        $this.parent(".ofr").addClass("expand");
        parents.not($this.parent(".ofr")).each(function() {
            $(this).addClass("shrink");
        });
        $this.siblings(".inside").delay(600).fadeIn(1000);
        $this.siblings(".btn2").delay(600).fadeIn(1000);
      }, 400);

  });
  $(".btn2").click(function(event) {
      var btns = $(".btn1");
      var parents = btns.parent(".ofr"),
      $this = $(this);
      $this.fadeOut(500);

      $(".ofr h1, .inside").fadeOut(500);
      setTimeout(function(){
        $this.parent(".ofr").removeClass("expand");
        parents.not($this.parent(".ofr")).each(function() {
            $(this).removeClass("shrink");
        });
        servicesHeaders.delay(300).fadeIn(500);
        $(".outside").delay(600).fadeIn(500);
        $(".btn1").delay(600).fadeIn(500);

        $(this).siblings("h1").fadeOut(500, function() {
            $(this).delay(10).fadeIn(500);
        });
        $(this).siblings(".inside").fadeOut("fast");
        $(this).fadeOut(500);
      }, 500)

  });

  $(".ofr").on("click",function() {
      var $this = $(this);
      if($this.hasClass("shrink")){
        var offers = $(".ofr");
        console.log("clciked");
        servicesHeaders.removeAttr('style');
        servicesHeaders.delay(10).fadeOut(500);
        $this. siblings(".expand").children().fadeOut(500);

        setTimeout(function(){
          $this.siblings(".expand").removeClass("expand");

          offers.removeClass("shrink");

          $this.addClass("expand");

          offers.not($this).addClass("shrink");
          servicesHeaders.removeAttr('style');
          servicesHeaders.delay(600).fadeIn(500);

          $this.children(".inside, .btn2").delay(600).fadeIn(500);

        },500)
      }

  });

});

$(window).on("load", function(){
  var cover = $(".cover"),
  squares =$(".square")
  setTimeout
  squares.one('animationiteration webkitAnimationIteration', function() {
    setTimeout(function(){
      $(this).addClass("stop");
          cover.fadeOut(600, function() {
              // body.removeClass("no-scroll")
          });
    },500 )
    });
});
