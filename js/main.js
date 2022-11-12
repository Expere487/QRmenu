
var val=0;

$(".plusBig").click(function (e) {
    $(".plusBig").addClass("d-none");
    $(".muchCounterBig").removeClass("d-none");
    $(".muchCounterBig .much").html(val)
    
});

$(".plus").click(function (e) {
    val++
    $(".muchCounterBig .much").html(val)
    console.log(val)
    if(val > 0){
        $(".order-area").removeClass("d-none");
    }
    
    
});

$(".minus").click(function (e) {
    val--
    $(".muchCounterBig .much").html(val)
    if(val<0){
        val=0
        $(".muchCounterBig .much").html(val)
        
    }
    if(val == 0){
        $(".order-area").addClass("d-none");
        $(".muchCounterBig").addClass("d-none");
        $(".plusBig").removeClass("d-none");
    }
    
    
    console.log(val)
    
});

$(document).ready(function () {
    $(".muchCounterBig").addClass("d-none");
    $(".order-area").addClass("d-none");
    console.log(val)
    
   
});