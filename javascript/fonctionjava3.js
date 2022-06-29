'use strict';

function age(age_param,genre_param){
	if(age_param<18)
		console.log('Trop jeune');
	if(age_param>30)
		console.log('Trop vieux');
	if(genre_param)
		console.log('Femme');
	else
		console.log('Homme');
	
}
age(35,true);