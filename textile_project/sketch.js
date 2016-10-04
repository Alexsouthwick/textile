/* Psychedelic Textile
Designed and Programmed by: Alex Southwick
10/4/16

My textile is inspired by the psychedelic art of the 60's and the counterculture movement. I was inspired mostly by David Rubin's book Psychedelic: Optical and Visionary Art Since the 1960s. All code used to make my textile was programmed by me.
*/

var square_length= 100;
var square_placement= 0;
var x_value_lm= square_placement-square_length;
var x_value_lt= square_placement+20;
var x_value_rm= square_placement+square_length*2;
var x_value_rt= square_placement+square_length-20;
var y_value_m= square_placement-70;
var y_value_t= square_placement-square_length-50;

//creates canvas, addsbackground color, moves to center of canvas
function setup() {
  createCanvas(1000,1000);
  background(186,252,5);
  translate(width/2, height/2);
  frameRate(8);
}

//function to draw the one side of lines on square
function line_pattern() {
  for (i=1; i<13; i++){
   var x_placement= i*20;
   var colors= ["orange", "red"]
   var color= random(colors);

   stroke(color);
   strokeWeight(random(.3, 2));
   lines_left(x_placement);
   lines_right(x_placement);
}
}
//function to draw whole block including rectangle and lines
function draw_block(){
    push();
    strokeWeight(3);
    stroke(30,250,48);
    fill(255);
    rect(square_placement,square_placement,square_length,square_length);
    //left lines on one side
    strokeWeight(1.5);
    stroke("red");
    line(square_placement,square_placement,x_value_lm, y_value_m);
    line(x_value_lm,y_value_m,x_value_lt,y_value_t);

    //right lines on one side
    line(square_placement+square_length,squaer_placement,x_value_rm, y_value_m);
    line(x_value_rm, y_value_m, x_value_rt, y_value_t);

    //rotating lines around square to all sides
    line_pattern();
    translate(0,100);
    rotate(-HALF_PI);
    line_pattern();
    pop();
    translate(100, 0);
    rotate(HALF_PI);
    line_pattern();
    rotate(HALF_PI);
    translate(0,-100);
    line_pattern();
    pop();
    square_lines_left();
    square_lines_right();
}

//function to draw left side of lines
function lines_left(x_value){
  self.x_value=x_value;
  line(square_placement,square_placement, x_value_lm+self.x_value, y_value_m);
  line(x_value_lm+self.x_value, y_value_m, x_value_lt+self.x_value, y_value_t);
}

//function to draw right side of lines
function lines_right(x_value){
  self.x_value=x_value;
  line(square_placement+square_length,square_placement, x_value_rm-self.x_value, y_value_m);
  line(x_value_rm-self.x_value, y_value_m, x_value_rt-self.x_value, y_value_t);
}

//function to draw blue lines in center square
function square_lines_left(){
  for (i=1; i<10; i++){
    var x_point= i*10;
    strokeWeight(1);
    stroke("blue");
    line(100,100,square_length-x_point ,0);

  }
}

//function to draw green lines in center square
function square_lines_right(){
  for (i=1; i<10; i++){
    var x_point= i*5;150
    var green= color(30,250,48);
    strokeWeight(1);
    stroke(green);
    line(0,0, square_length-x_point, 100);
  }
}
//function to draw entire block with white background rectangle
function draw_full(){
  translate(width/2, height/2);
  stroke("blue");
  strokeWeight(3);
  fill(255);
  rect(-600,-200,900,900);
  draw_block();
  rotate(TWO_PI);
  translate(400, 0);
  draw_block();
  translate(0,400);
  draw_block();
  translate(-400,0);
  draw_block();
  pop();
  fill("blue");
  ellipse(-150, -150, 5,5);
}

//draws original block at 8 frames per second (look at setup function)
function draw() {
  translate(150,-250);
  draw_full();
    }