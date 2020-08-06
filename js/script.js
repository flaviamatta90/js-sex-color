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
  document.getElementById('femmina').innerHTML = 'Ciao ' + nome;
   document.getElementById('femmina').style.color = '#e43f6f';
} else(sesso == maschio)
{
  document.getElementById('maschio').innerHTML = 'Ciao ' + nome;
  document.getElementById('maschio').style.color = '#090c9b';
}
