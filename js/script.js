$(document).ready(() => {

/*click to jump function*/

    $("#anther-button").click(function(){
        
        $(".scrollbar-a").scrollTo("#anther-bio",400)
        $(".scrollbar-b").scrollTo("#anther-button",400)
    })

    $("#emi-button").click(function(){
        
        $(".scrollbar-a").scrollTo("#emi-bio",400)
        $(".scrollbar-b").scrollTo("#emi-button",400)
    })

    $("#mich-button").click(function(){
        
        $(".scrollbar-a").scrollTo("#mich-bio",400)
        $(".scrollbar-b").scrollTo("#mich-button",400)
    })

    $("#roon-button").click(function(){
        
        $(".scrollbar-a").scrollTo("#roon-bio",400)
        $(".scrollbar-b").scrollTo("#roon-button",400)
    })

    $("#seb-button").click(function(){
        
        $(".scrollbar-a").scrollTo("#seb-bio",400)
        $(".scrollbar-b").scrollTo("#seb-button",400)
    })

   /* $(".scrollbar-a").css({"background-image": "url(tiles-01.png + tiles-02.png + tiles-03 + tiles-09.png + tiles-10.png)"}); */

/* move to image on hover */
   $("#anther-button").click(function(){
        $(".scrollbar-a").scrollTo("#anther-image",5000)
})
});