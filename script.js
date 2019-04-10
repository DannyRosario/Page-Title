$("button").click(function() {
    var size = $(".size").val();
    var color = $(".color").val();
if(size <= 72 && color=== "Red" ){
$(".message").text("Flash");
}
else if(size <= 72 && color=== "Blue" ){
$(".message").text("Hawkeye");
}
else if(size > 72 && color==="Red" ){
$(".message").text("IronMan");
}
else if(size > 72 && color==="Blue" ){
$(".message").text("Thor");
}

    
    
    
    
    
    
});