console.log('Calculer le pourboire')
const amontFacure = prompt('Entrez la valeur de Facture')
let tips, total;
let calcTips;

(amountFacture >= 50 && amountFacture <= 300) ?
	(tips=0.15,calcTips = amountFacture*tips) : (tips=0.20 calcTips, calcTips = amontFacure);

total = Number(amountFacture)+Number(calcTips)
console.log(`la facture était de ${amountFacture}, le pourboire était de ${calcTips}`)

