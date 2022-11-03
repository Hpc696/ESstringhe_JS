const prompt = require('prompt-sync')();

let str1 = prompt("Inserisci stringa 1: ");
let str2 = "pale#";
//stampa le due stringhe
console.log(str1);
console.log(str2);
//comparo se le due stringhe sono uguali
if(str1===str2){
    console.log("Stringhe uguali");
} else { console.log("Sono diverse"); }
//rimpiazzo @ con 'chiocciola'
let result = str1.replace("@", "chiocciola");
console.log("Risultato: "+result);
//stampa di singole lettere della stringa
console.log("Stampo 1^ e 3^ carattere di result: "+result.charAt(0)+" "+result.charAt(2));