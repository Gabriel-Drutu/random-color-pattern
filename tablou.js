$(document).ready(function(){
  color_control();
  genereaza();
});

var genereaza = function(){
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


var random = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//panoul de control al culorilor

var addremove_color = function(color){
  var exists = false;
  for (i in colors) {
    if (colors[i] == color){
      exists = true;
    }
  }
  
  if (exists == false) {
    colors.push(color);
  }
  else if (exists == true){
    for (i in colors) {
      //console.log(colors[i]);
      if (colors[i] == color){
        colors.splice(i, 1);
      }
    }
  }

}



var check_color = function(select_box){
  for (var i=0; i<all_colors.length; i++){
    if (select_box.hasClass(all_colors[i])) {
      var color = all_colors[i];
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

var color_control = function(){
    
  jQuery(".select-box").click(function(){
    jQuery(this).toggleClass("selectat");
    check_color(jQuery(this));

  });  
}

var nici_una = function(){
  colors = [];
  jQuery(".select-box").each(function(){
    jQuery(this).removeClass("selectat");
    })
}

var toate = function(){
  colors = [];
  colors = colors.concat(all_colors);
  jQuery(".select-box").each(function(){
    jQuery(this).addClass("selectat");
    })
}
