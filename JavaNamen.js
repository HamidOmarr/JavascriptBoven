var Normaal = [];                              

for (var i = 0; i < 3; i++) {              
  Normaal.push(prompt('Hoeveel namen wilt u in de array stoppen? (minimaal 3)' + (i+1))); 
}

document.getElementById("Normaal").innerHTML = Normaal;
document.getElementById("Reverse").innerHTML = Normaal.reverse();
