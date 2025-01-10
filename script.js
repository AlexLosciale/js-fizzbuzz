/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

/*
1-creare un ciclo che vada da 1 a 100
2-suddividere i rislutati del ciclo in 3 categorie 
  2.1-assegnare ad ogni risultato la propria parola
  2.2-unire le parole se il rislutato comprende entrambi le variabili
3-stampare i vari rislutati 
*/

for (let i = 0; i < 100; i++) {
    if (i % 15 == 0) {
        console.log("fizzbuzz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}
