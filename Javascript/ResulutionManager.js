var ctx = canvas.getContext("2d");

// Internal rendering of canvas an graphics
var xres = getSavedResX();
var Yres = getSavedResY();

// changeing internal resolution to match aspect ratios.
function gcd (a, b) {
    return (b == 0) ? a : gcd (b, a%b);
}
  var w = screen.width;
  var h = screen.height;
  var r = gcd (w, h);

function aspektRatioDefaultResSet(){
  // changing dependen on 16:10 / 8:5 aspekt ratio
  if(w/r == 8 && h/r == 5){
    xres = 900;
    Yres = 465;
    console.log("8:5 apsect ratio");
  }

  if(w/r == 10 && h/r == 16){
    xres = 465;
    Yres = 900;
    console.log("10:16 apsect ratio");
  }

  // changing dependen on 4:3 aspekt ratio
  if(w/r == 4 && h/r == 3){
    xres = 400;
    Yres = 465;
    console.log("4:3 apsect ratio");
  }

  if(w/r == 16 && h/r == 9){
    xres = 900;
    Yres = 430;
    console.log("16:9 apsect ratio");
  }

  if(w/r == 9 && h/r == 16){
    xres = 430;
    Yres = 900;
    console.log("9:16 apsect ratio");
  }
}

aspektRatioDefaultResSet();
ctx.canvas.width  = xres;
ctx.canvas.height = Yres;

function getres(){
  return [xres,Yres];
}

function getresy(){
  return Yres;
}

function getresx(){
  return xres;
}

function setRes(x,y){
  Xres = x;
  Yres = y;

  ctx.canvas.width  = xres;
  ctx.canvas.height = Yres;

  setGraphicsRes();
}