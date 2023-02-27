$(document).click(function(){
    $("#sub1").click(function(){
        $("#subtitle").text("Dachshund :)");
        showText('sub-text','sub-text-1.txt');
    });
    $("#sub2").click(function(){
        $("#subtitle").text("Bassotto :)");
        showText('sub-text','sub-text-2.txt');
    });
    $("#sub3").click(function(){
        $("#subtitle").text("Perro Salchicha :)");
        showText('sub-text','sub-text-3.txt');
    });


    $("#updateName").click(function(){
        $("#userName").text($("#inputName").val());
        $("#cardText").text($("#comment").val());
    });
});

$(document).ready(function(){
    $("#buttonAnimation").click(function(){
        $("#dogAnimation").animate({left: "75%"});
    });
    $("#buttonReset").click(function(){
        $("#dogAnimation").animate({left: "10%"});
    });
})

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

$('.carousel').carousel({
    interval: 2000
  })

function showText(id,file){
    var xhttp;
    xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        document.getElementById(id).innerText=this.responseText;
    }
    xhttp.open("GET",file);
    xhttp.send()
}

