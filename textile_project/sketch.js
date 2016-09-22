var square_length= 100;
var square_placement= 0;
var x_value_lm= square_placement-square_length;
var x_value_lt= square_placement+20;
var x_value_rm= square_placement+square_length*2;
var x_value_rt= square_placement+square_length-20;
var y_value_m= square_placement-70;
var y_value_t= square_placement-square_length-50;
// var green= color(30,250,48,100);

function setup() {
  createCanvas(2000,2000);
  translate(width/2, height/2);
  push();

  // strokeWeight(3);
  // stroke(30,250,48);
  // rect(square_placement,square_placement,square_length,square_length);
  // //left
  // strokeWeight(1.5);
  // stroke("red");
  // line(square_placement,square_placement,x_value_lm, y_value_m);
  // line(x_value_lm,y_value_m,x_value_lt,y_value_t);

  // //right
  // line(square_placement+square_length,square_placement,x_value_rm, y_value_m);
  // line(x_value_rm, y_value_m, x_value_rt, y_value_t);


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
function draw_block(){
  push();
    strokeWeight(3);
    stroke(30,250,48);
    rect(square_placement,square_placement,square_length,square_length);
    //left
    strokeWeight(1.5);
    stroke("red");
    line(square_placement,square_placement,x_value_lm, y_value_m);
    line(x_value_lm,y_value_m,x_value_lt,y_value_t);

    //right
    line(square_placement+square_length,square_placement,x_value_rm, y_value_m);
    line(x_value_rm, y_value_m, x_value_rt, y_value_t);
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


draw_block();
rotate(TWO_PI);
translate(400, 0);
draw_block();

// // pop();
// rotate(-TWO_PI);
// draw_block();
// translate(-300,0);
// draw_block();
}

function lines_left(x_value){
  self.x_value=x_value;
  line(square_placement,square_placement, x_value_lm+self.x_value, y_value_m);
  line(x_value_lm+self.x_value, y_value_m, x_value_lt+self.x_value, y_value_t);
}

function lines_right(x_value){
  self.x_value=x_value;
  line(square_placement+square_length,square_placement, x_value_rm-self.x_value, y_value_m);
  line(x_value_rm-self.x_value, y_value_m, x_value_rt-self.x_value, y_value_t);
}

function square_lines_left(){
  for (i=1; i<10; i++){
    var x_point= i*10;
    strokeWeight(1);
    stroke("blue");
    line(100,100,square_length-x_point ,0);

  }
}

function square_lines_right(){
  for (i=1; i<10; i++){
    var x_point= i*5;
    var green= color(30,250,48);
    strokeWeight(1);
    stroke(green);
    line(0,0, square_length-x_point, 100);
  }
}




function draw() {
  
  }