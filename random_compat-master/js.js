var IsActive;
var anchorsAviable = true;
var backs = ["white","black","white","white","black"];
$( document ).ready(function() {
  $("#scrollify-nav").css("top", $("#bl_container").height() / 2 - $("#scrollify-nav").height()/2 + "px");
});


      $(function(){
       $.scrollify({
         section:".sections",
         setHeights: false,
         scrollSpeed: 800,
         before:function(){
          $(".scrollify-rounds").removeClass("white");
          $(".scrollify-rounds").removeClass("white-active");
          $(".scrollify-rounds").removeClass("black");
          $(".scrollify-rounds").removeClass("black-active");
          $(".menulist-labels").removeClass("whitespan");
          $(".menulist-labels").removeClass("blackspan");
          $(".scrollify-rounds").addClass($.scrollify.current().attr("anchor-back") + "");
          $(".menulist-labels").addClass($.scrollify.current().attr("anchor-back") + "span");
          $(".menulist-labels").css("opacity", "0");
        },
        after:function(){
          $("[anchor-name=" + $.scrollify.current().attr('data-section-name') + "]").addClass($.scrollify.current().attr("anchor-back") + "-active");
           $("[anchor-name=" + $.scrollify.current().attr('data-section-name') + "]").parent().children(".menulist-labels").css("opacity", 1);
        }
    });
       $(".menulist-item").click(function(e){
        $.scrollify.move("#" + $(e.target).attr("anchor-name"));
      });
       $(".scrollify-rounds").hover(function(e){
        //$(e.target).parent().children("span").css("display", "block");
        $(e.target).parent().children("span").css("opacity", "1");
      })
       $(".scrollify-rounds").mouseout(function(e){
        if($(e.target).attr('anchor-name') == $.scrollify.current().attr('data-section-name')){
        $(e.target).parent().children("span").css("opacity", "1");
      }else{
        $(e.target).parent().children("span").css("opacity", "0");
      }})

     });



