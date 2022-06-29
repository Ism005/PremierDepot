function calcTip(x){
    if(x>= 50 && x<=300){
        return x*0.15 ;
    }
    else {
        return x*0.20 ;
    }

}


let factures =[125,555,44];

let tips = [calcTip(factures[0]) , calcTip(factures[1]) , calcTip(factures[2]) ] ;

let total = [ factures[0] + tips[0] , factures[1] + tips[1] ,factures[2] + tips[2]  ];

console.log(factures);
console.log(tips);
console.log(total);


function ajoute5(position,tableau){
 
  tableau[position] +=  5 ;

}

ajoute5(2,total);
console.log(total);

ajoute5(2,factures);
console.log(factures);