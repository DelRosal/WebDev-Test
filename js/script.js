$(document).click(function(){
    $("#sub1").click(function(){
        $("#subtitle").text("Welcome :)");
        showText('sub-text','sub-text-1.txt');
    });
    $("#sub2").click(function(){
        $("#subtitle").text("Benvenuto :)");
        showText('sub-text','sub-text-2.txt');
    });
    $("#sub3").click(function(){
        $("#subtitle").text("Bienvenid@ :)");
        showText('sub-text','sub-text-3.txt');
    });


    $("#updateName").click(function(){
        $("#userName").text($("#inputName").val());
    });
});

$(document).ready(function(){
    $("#buttonAnimation").click(function(){
        $("#dogAnimation").animate({left: "75%"});
    });
    $("#buttonReset").click(function(){
        $("#dogAnimation").animate({left: "15%"});
    });
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

