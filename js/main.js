$(document).ready(function(){
    $("#proj4").css("left", random(100,500));
    $("#proj4").css("top", random(100,300));
    
    $("#proj4").hover(function(){
        $("#proj4").css("filter", "opacity(15%)"); 
    },
    function(){
        $("#proj4").css("filter", "opacity(50%)");
    });
    
    $("#proj1").hover(function(){
        $("#proj1").css("filter", "opacity(30%)"); 
    },
    function(){
        $("#proj1").css("filter", "opacity(100%)");
    });
    
    $("#proj2").hover(function(){
        $("#proj2").css("filter", "opacity(30%)"); 
    },
    function(){
        $("#proj2").css("filter", "opacity(100%)");
    });
    
    $("#proj3").hover(function(){
        $("#proj3").css("filter", "opacity(30%)"); 
    },
    function(){
        $("#proj3").css("filter", "opacity(100%)");
    });
    
    $("#contact").hover(function(){
        $("#contact").css("transform", "rotate(7deg)"); 
    },
    function(){
        $("#contact").css("transform", "rotate(-7deg)");
    });
    
    $("#contact").hover(function(){
        $("#home").fadeIn();
    },
    function(){
        $("#home").fadeOut();
    });
});


