var x = 20;
onEvent("text_input1", "input", function( ) {
  setProperty("text_area1", "text-color", getText("text_input1"));
});
onEvent("slider1", "input", function( ) {
  setProperty("text_area1", "background-color", rgb(getNumber("slider1"), getNumber("slider2"), getNumber("slider3")));
});
onEvent("slider2", "input", function( ) {
  setProperty("text_area1", "background-color", rgb(getNumber("slider1"), getNumber("slider2"), getNumber("slider3")));
});
onEvent("slider3", "input", function( ) {
  setProperty("text_area1", "background-color", rgb(getNumber("slider1"), getNumber("slider2"), getNumber("slider3")));
});
onEvent("label7", "click", function( ) {
  x = x-2;
  setProperty("text_area1", "font-size", x);
});
onEvent("label8", "click", function( ) {
  x = x+2;
  setProperty("text_area1", "font-size", x);
});
onEvent("dropdown1", "input", function( ) {
  setProperty("text_area1", "font-family", getText("dropdown1"));
});
