let colisionpos;
let posleft = 0;
let posright = 0;

function colision(elementone, elementtwo, value) {
  const elleft = elementone.offsetLeft;
  const eltop = elementone.offsetTop;
  const el1left = elementtwo.offsetLeft;
  const el1top = elementtwo.offsetTop;
  const eloneleft = Math.ceil(elleft/ 44);
  const elonetop = Math.ceil(eltop/ 44);
  const eltwoleft = Math.ceil(el1left/ 44);
  const eltwotop = Math.ceil(el1top/ 44);
     //console.log("div", (eloneleft-1) * 44);
     const ifoneleft = (eloneleft-1) ;
     const ifonetop = (elonetop-1) ;
     const iftwoleft = (eltwoleft-1) ;
     const iftwotop = (eltwotop-1) ;

     if (ifoneleft == iftwoleft  && ifonetop + 1 == iftwotop || ifonetop == iftwotop && ifoneleft == iftwoleft) {
       posleft ++;
console.log(y);
  if (value == "pravo") {
    y --;
  }
               else if (value == "levo") {
                 y ++;
               }
       console.log(y);
       document.getElementById('play').style.left = y*44 + "px";
             console.log(document.getElementById('play').offsetLeft);
       stop = false;
       //console.log(colision());
     }
     else
     {
       document.getElementById('play').style.left = y*44 + "px";


       stop = true;
       document.getElementById('play').style.left = y*44 + "px";
       document.getElementById('play').style.top = 2*44 + "px";
}}
