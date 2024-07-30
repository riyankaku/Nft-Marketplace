let stickynavbar=$(".navbar").offset().top;
function stickynav(){
    let scrollTop=$(window).scrollTop();
    if(scrollTop> stickynavbar){
        $(".navbar").addClass("sticky");

    }
    else{
        $(".navbar").removeClass("sticky");
  
    }
}
stickynav();

$(window).scroll(function(){
    stickynav();
})