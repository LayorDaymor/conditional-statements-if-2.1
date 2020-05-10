function berechnen(){
event.preventDefault()
let ergibnisPlatz=document.getElementById("ergibnisPlatz");
let resul1=document.getElementById("resul1");
let resul2=document.getElementById("resul2");
let resul3=document.getElementById("resul3");
let resul4=document.getElementById("resul4");


/* Player1 */    
let player1=document.getElementById("player1").value;
let groß1=document.getElementById("groß1").value;
let alt1=document.getElementById("alt1").value;

/* Player2 */

let player2=document.getElementById("player2").value;
let groß2=document.getElementById("groß2").value;
let alt2=document.getElementById("alt2").value;

/* Player3 */

let player3=document.getElementById("player3").value;
let groß3=document.getElementById("groß3").value;
let alt3=document.getElementById("alt3").value;

/* player4 */

let player4=document.getElementById("player4").value;
let groß4=document.getElementById("groß4").value;
let alt4=document.getElementById("alt4").value;


let spieler1= (alt1*5)+groß1;
let spieler2= (alt2*5)+groß2;
let spieler3= (alt3*5)+groß3;
let spieler4= (alt4*5)+groß4;
resul1.innerHTML=(spieler1+ " Punkte")
resul2.innerHTML=(spieler2+ " Punkte")
resul3.innerHTML=(spieler3+ " Punkte")
resul4.innerHTML=(spieler4+ " Punkte")

if ((spieler1 > spieler2)&( spieler1 > spieler3)&(spieler1 > spieler4)){
    ergibnisPlatz.innerHTML=`Der Gewinner ist ${player1} ` 
    resul1.style.color="red";
}
else if ((spieler2 > spieler1)&( spieler2 > spieler3)&(spieler2 > spieler4)){
    ergibnisPlatz.innerHTML=`Der Gewinner ist ${player2} ` 
    resul2.style.color="red";
}
else if ((spieler3 > spieler1)&( spieler3 > spieler2)&(spieler3 > spieler4)){
    ergibnisPlatz.innerHTML=`Der Gewinner ist ${player3} ` 
    resul3.style.color="red";
}
else if ((spieler4 > spieler1)&( spieler4 > spieler2)&(spieler4 > spieler3)){
    ergibnisPlatz.innerHTML=`Der Gewinner ist ${player4} ` 
    resul4.style.color="red";
}
else{
    ergibnisPlatz.innerHTML=`kein wert ist eingetragen` 

}

}
