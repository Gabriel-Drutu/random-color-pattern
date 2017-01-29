$(document).ready(function(){
    jQuery(".select-box").click(function(){
        jQuery(this).toggleClass("selectat");
        check_color(jQuery(this));
    });
    
    $('#genereaza').on('click', function(){
        genereaza();    
    });
    $('#nici-una').on('click', function(){
        nici_una();    
    });
    $('#toate').on('click', function(){
        toate();    
    });

    genereaza();
});

function genereaza(){
 var max = colors.length;
 if (max <1) {
  jQuery(".control-culori .mesaj").html("You need to select at least one color").fadeIn();
  return;
 }
 else {
  jQuery(".control-culori .mesaj").fadeOut();
 }
 
 jQuery(".interior").empty();
 for(var i=0; i<=335; i++){
   var r_i = random(0, max);
   jQuery(".interior").append("<div class='box "+ colors[r_i] +"'></div>");
   }
}

var all_colors = ["verde", "albastru", "rosu", "roz", "asfalt", "gri", "portocaliu", "galben"];
var colors = ["verde", "albastru", "rosu", "roz", "asfalt", "gri", "portocaliu", "galben"];


function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//Color control panel

function addremove_color(color){
    var i;
    var exists = false;
    
    for (i in colors) {
      if (colors[i] == color){
        exists = true;
      }
    }
    
    if (exists === false) {
      colors.push(color);
    }
    else if (exists === true){
      for (i in colors) {
        //console.log(colors[i]);
        if (colors[i] == color){
          colors.splice(i, 1);
        }
      }
    }
}



function check_color(select_box){
  for (var i=0; i<all_colors.length; i++){
    if (select_box.hasClass(all_colors[i])) {
       color = all_colors[i];
      break;
    }
  }
  
  if (select_box.hasClass(color) && select_box.hasClass("selectat")) {
      //console.log("Yippy " + color);
      addremove_color(color);
  }
  else if (select_box.hasClass(color) && !select_box.hasClass("selectat")) {
    //console.log(color + " a fost deselectat");
    addremove_color(color);
  }
}

function nici_una(){
    colors = [];
    jQuery(".select-box").each(function(){
        jQuery(this).removeClass("selectat");
    });
}

function toate(){
    colors = [];
    colors = colors.concat(all_colors);
    jQuery(".select-box").each(function(){
        jQuery(this).addClass("selectat");
    });
}