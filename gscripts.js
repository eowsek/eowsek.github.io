$(document).ready(function(){
   $("#onoffdo, #workoneoff, #plugged, #pluggeddo, #workplugged, #update, #updatedo, #workupdate, #extrahelp, #success").hide();
  //reset to beginning
   $("#reset").click(function(){
     $("#onoff").show();
     $("#onoffdo, #workoneoff, #plugged, #pluggeddo, #workplugged, #update, #updatedo, #workupdate, #extrahelp, #success").hide();
   });
  //turning it off and then on
    $("#onoffyes").click(function(){
        $("#onoff").hide();
        $("#workoneoff").show();
    });
    $("#onoffno").click(function(){
        $("#onoff").hide();
        $("#onoffdo").show();
    });
    $("#onoffdook").click(function(){
        $("#onoffdo").hide();
        $("#workoneoff").show();
    });
      $("#workoneoffyes").click(function(){
        $("#workoneoff").hide();
        $("#success").show();
    });
      $("#workoneoffno").click(function(){
        $("#workoneoff").hide();
        $("#plugged").show();
    });  
  
  //plugged in?
    $("#pluggedyes").click(function(){
        $("#plugged").hide();
        $("#workplugged").show();
    });
    $("#pluggedno").click(function(){
        $("#plugged").hide();
        $("#pluggeddo").show();
    });
    $("#pluggedok").click(function(){
        $("#pluggeddo").hide();
        $("#workplugged").show();
    });
      $("#workpluggedyes").click(function(){
        $("#workplugged").hide();
        $("#success").show();
    });
      $("#workpluggedno").click(function(){
        $("#workplugged").hide();
        $("#update").show();
    });  
// update  
  
    $("#updateyes").click(function(){
        $("#update").hide();
        $("#workupdate").show();
    });
    $("#updateno").click(function(){
        $("#update").hide();
        $("#updatedo").show();
    });
    $("#updateok").click(function(){
        $("#updatedo").hide();
        $("#workupdate").show();
    });
      $("#workupdateyes").click(function(){
        $("#workupdate").hide();
        $("#success").show();
    });
      $("#workupdateno").click(function(){
        $("#workupdate").hide();
        $("#extrahelp").show();
    });    
  
  //extrahelp
       $("#finalsub").click(function(){
        $("#extrahelp").hide();
        $("#success").show();
    });    
   
//Grammable
  
});