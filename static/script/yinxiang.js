function  enter(obj)
{
                         
                          var p=obj.parentNode;
                           p.style.animation="bigin 0.2s linear  forwards"; 
                           p.style.webkitAnimation="bigin 0.2s linear forwards";
                           p.style.opacity="1.0";

                          //console.log(ns.children[1]);

}
function leave(obj)
{                         var p=obj.parentNode;
                           p.style.animation="smallout 0.2s linear  forwards"; 
                           p.style.webkitAnimation="smallout 0.2s linear forwards";
                           p.style.opacity="0.4";
}



 //$(".titlebox").bind("animationend", function() {
                      $(".photo-tag").each(function() {
                           
                            var image=this.children[0];
                            //console.log(image);
                           image.addEventListener("mouseenter", function(){enter(image);});
                           image.addEventListener("mouseleave",  function(){leave(image);});
                            
                        });
    //                  $(".titlebox").unbind("animationend");
   //                   });