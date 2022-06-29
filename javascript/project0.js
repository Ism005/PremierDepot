'use strict';

const again = document.querySelector('.again');
let score = 20;
let highscore = 0;

let number = Math.trunc(Math.random()*20);
console.log(number);


	 document.querySelector('.check').addEventListener('click' ,function(){
	 	let selectedNumber = document.querySelector('.guess').value;
	 	console.log(selectedNumber);


	 	if(selectedNumber>number){
	 		console.log('trop haut');
	 		document.querySelector('.message').textContent = "Trop haut :p";
	 		score--;
	 		highscore++;
	 		document.querySelector('.score').textContent = score ;
	 		
 	}
 		else  if(selectedNumber<number) {
	 		console.log('trop bas');
	 		document.querySelector('.message').textContent = "Trop bas :p";
	 		score--;
	 		highscore++;
	 		document.querySelector('.score').textContent = score ;
	 		
 	
	 	}

	 	else {
	 		console.log('Gagné !');
	 		document.querySelector('.message').textContent = "Gagné !";
	 		document.querySelector('.highscore').textContent = highscore ;
	 		document.querySelector('body').style.backgroundColor ='#60b347';
	 		
	 	}


	 

	 });
