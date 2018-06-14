$(document).ready(()=>{

    $("#button").hover(function(){
        $(this).addClass("button-effect")
    },
function(){
    $(this).removeClass("button-effect")
})

$(".modal-content").hover(function(){
    $(this).addClass("modal-content-effect")
},
function(){
$(this).removeClass("modal-content-effect")
})

$(".close").hover(function(){
    $(this).addClass("close-effect")
},
function(){
$(this).removeClass("close-effect")
})


$("#button").click(function(){
    $(".modal").css("display","block")
})

$(".close").click(function(){
    $(".modal").css("display","none")
})





});