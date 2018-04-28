function modal_open(name){
    $("#context").after("<div id='modal'></div>");
    $("#modal").load("static/page/"+name+".html",
        function() {  var e1 = document.getElementById(name);
                                console.log(e1);
                                e1.style.visibility = (e1.style.visibility == "visible")? "hidden" : "visible";}
        );
    
   
}

function modal_close()

{   $(".mask-fadein").css("animation","mask-fadeout 0.2s ease 1  forwards ");
    $(".modal-dropin").css("animation","modal-dropout 0.2s ease 1  forwards ");
    $(".mask-fadein").bind("animationend", function() {
    $("#modal").remove();});
}