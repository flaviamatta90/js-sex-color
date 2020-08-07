// 1 Chiedere all'utente il nome
var nome = prompt('Come ti chiami');
console.log('ciao ' + nome);
// 2 Chiedere all'utente il sesso
var sesso = prompt('Sei femmina o maschio?');
console.log('il tuo sesso è ' + sesso);

if (sesso != 'maschio' || sesso != 'femmina') {
  sesso = prompt('Ri inserisci il sesso');
}

var nomeUtente = document.getElementById('nome-utente');

nomeUtente.innerHTML = nome;

// 3 Sulla pagina deve apparire ciao e nome
// il colore del nome deve essere rosa se è femmina e azzurro se è maschio
//

if (sesso == 'maschio')
{
  nomeUtente.style.color = '#090c9b';
} else if (sesso == 'femmina'){
  nomeUtente.style.color = '#e43f6f';
} else{
  alert('Hai sbagliato qualcosa!')
}
