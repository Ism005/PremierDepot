const output = document.querySelector('.output');
const result = document.querySelector('.result');
const keys = document.querySelectorAll('button');

console.log(output);
console.log(result);
 
keys.forEach(key => {
    key.addEventListener('click', calculer);
   
});

function calculer () {
     let buttonText = this.textContent;
     console.log(buttonText);
     switch (buttonText) {
        case "AC":
            output.textContent = '';
            result.textContent= '0';
            break;
        case "DEL" :
            let tailleTab = output.textContent.length;
            output.textContent = output.textContent.substring(0, tailleTab-1);
            break;
        case "=":
            result.textContent = eval(output.textContent);
            result.style.animation = 'big 0.5s ease-in-out';
            output.style.animation = 'small 0.5s ease-in-out';
            output.style.animationFillMode = 'forwards';
            result.style.fontSize = '25px';
            output.style.animationFillMode = 'forwards';
            break;
        default:
            output.textContent += buttonText;
            break;    
     }
 }

