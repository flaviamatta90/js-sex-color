// 1 Chiedere all'utente il nome
var nome = prompt('Come ti chiami');
console.log('ciao ' + nome);
// 2 Chiedere all'utente il sesso
var sesso = prompt('Sei femmina o maschio?');
console.log('il tuo sesso è ' + sesso);

// 3 Sulla pagina deve apparire ciao e nome
// il colore del nome deve essere rosa se è femmina e azzurro se è maschio
//

var femmina = 'femmina';
var maschio = 'maschio';


if (sesso == 'maschio')
{
  document.getElementById('azzurro').innerHTML = 'Ciao ' + nome;
   document.getElementById('azzurro').style.color = '#090c9b';
} else(sesso == 'femmina')
{
  document.getElementById('rosa').innerHTML = 'Ciao ' + nome;
  document.getElementById('rosa').style.color = '#e43f6f';
}
