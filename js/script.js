// 1 Chiedere all'utente il nome
var nome = prompt('Come ti chiami');
console.log('ciao ' + nome);
// 2 Chiedere all'utente il sesso
var sesso = prompt('Sei femmina o maschio?');
console.log('il tuo sesso è ' + sesso);

// 3 Sulla pagina deve apparire ciao e nome
// il colore del nome deve essere rosa se è femmina e azzurro se è maschio
//

if (sesso == femmina) {
   document.getElementById("femmina").style.color = '#B44188';
} else(sesso == maschio)
{
  document.getElementById("maschio").style.color = '#090c9b';
}
document.getElementById('prova').innerHTML = 'Ciao ' + nome;
