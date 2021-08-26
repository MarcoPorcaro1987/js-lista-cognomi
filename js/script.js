// 1. Crea Array di cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’ 
var elenco = ["bianchi", "neri", "rossi", "verdi", "gialli"];
// 2. Chiedi all’utente il cognome e inseriscilo nell'elenco
var cognome =  prompt("Inserisci il tuo cognome").toLowerCase();
elenco.push(cognome);
// 3. Elenco ordinato alfabeticamente
console.log(elenco.sort());
// 4. Posizione cognome nella lista partendo da 1
console.log(elenco.indexOf(cognome)+1);    
