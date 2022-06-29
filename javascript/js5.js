function calcAverage(score1 , score2 , score3){
    let scoreMoyen = (score1 + score2 + score3)/3
    return scoreMoyen ;

}

function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins > 2*avgKoalas){
        console.log(` Les dauphins sont vainqueurs , score : ${avgDolphins} à ${avgKoalas}   `) ;
    }

    else if(avgKoalas > 2*avgDolphins){
        console.log(` Les koalas sont vainqueurs , score : ${avgKoalas} à ${avgDolphins}  `)
    }

    else{
        console.log(` Il n'y a pas de vainqueur , score Dauphins : ${avgDolphins}  , score koalas : ${avgKoalas}    `);
    }
    
}


let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(65,54,49);

checkWinner(avgDolphins,avgKoalas);

console.log(`\n`);


let avgDolphins2 = calcAverage(85,54,41);
let avgKoalas2 = calcAverage(23,34,27);

checkWinner(avgDolphins2,avgKoalas2);