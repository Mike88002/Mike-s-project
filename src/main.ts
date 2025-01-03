import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { from, map, Observable, startWith, timer, tap, of, concatMap, take, interval, scan, filter, mergeMap, delay, fromEvent, switchMap, forkJoin, share, shareReplay, exhaustMap, throwError, catchError } from 'rxjs';
import { format } from 'path';
import { combineLatest } from 'rxjs';
import { output } from '@angular/core';
import { ConstructorProvider } from '@angular/core';
// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

// console.log('just before subscribe');
// observable.subscribe({
//   next(x) {
//     console.log('got value ' + x);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });
// console.log('just after subscribe');

// const foo = new Observable((subscriber) => {
//   console.log('Hello');
//   subscriber.next(42);
//   setTimeout(()=>{
//     subscriber.next(1000000000)
//   }, 1000)
// });
 
// foo.subscribe((x) => {
//   console.log(x);
// });
// foo.subscribe((y) => {
//   console.log(y);
// });

// const belo = new Observable(function subscribe(subscriber) {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.complete() ;{console.log('completato');};
// });

// belo.subscribe((x)=>{
//   console.log(x)
// })
// const num = from([10,20,30])
// const subscription = num.subscribe((x) => console.log(x));

// subscription.unsubscribe()

// const observer = {
//   next: (x: string) => console.log('Observer got a next value: ' + x),
//   error: (err: string) => console.error('Observer got an error: ' + err),
// }; 

// timer(5000)
//   .pipe(
//     map(() => 'timer emit'),
//     startWith('timer start')
//   )
//   .subscribe(x => console.log(x));
 

//   of(Math.random()).pipe(
//     tap(console.log),
//     map(n => n > 0.5 ? 'big' : 'small')
//   ).subscribe(console.log);



//   const source = of(1, 2, 3, 4, 5);
 
// source.pipe(
//   tap(n => {
//     if (n > 3) {
//       throw new TypeError(`Value ${ n } is greater than 3`);
//     }
//   })
// )
// .subscribe({ next: console.log, error: err => console.log(err.message) })

// of(1, 2, 3).pipe(
//   concatMap(n => interval(1000).pipe(
//     take(Math.round(Math.random() * 10)),
//     map(() => 'X'),
//     tap({ complete: () => console.log(`Done with ${ n }`) })
//   ))
// )
// .subscribe(console.log);

// const source$ = interval(1000).pipe(
//   take(10),
//   map(value => value+1)
// );

// const result$ = source$.pipe(
//   scan((acc,value) => acc+value,0),
//   filter (total => total % 2 == 0)
// );

// result$.subscribe(total => console.log(total))



// const source1$ = interval(1000).pipe(
//   take(5),
//   map(value => value + 1)
// );

// const source2$ = interval(1500).pipe(
//   take(3),
//   map(value => (value + 1) * 10)
// );

// const source = of(1, 2, 3).pipe(
//     tap(val => console.log(`Source emitted ${val}`)),
//     share()
//   ); 
  
//   source.subscribe(val => console.log(`Subscriber 1 received ${val}`));
//   source.subscribe(val => console.log(`Subscriber 2 received ${val}`));




//   const sauce = of(1, 2, 3).pipe(
//     tap(val => console.log(`Source emitted ${val}----------------`)),
//     shareReplay(1)
//   );
  
//   sauce.subscribe(val => console.log(`Subscriber 1 received ${val}`));
  
//   // We delay second observable
//   setTimeout(() => {
//     sauce.subscribe(val => console.log(`Subscriber 2 received ${val}`));
//   }, 1000);
  


// of(1,2,3).pipe(
//     map(value => value *2)
//   ).subscribe(result => console.log(result))
//   //map prende ogni valore della stream e lo trasforma secondo la funzione passata( in questo paso raddoppiandolo)

// const saveData = (data: string) => of (`saved ${data}`).pipe(delay(1000));
// of('data1', 'data2', 'data3').pipe(
//     concatMap(data => saveData(data))
// ).subscribe(result => console.log(result));

// //quindi concatMap assicura che ogni osservabile derivato sia completato prima di iniziare il successivo, mantenendo l'oerdine delle emissioni.


// const loadimage = (url: string) => of(`loaded ${url}`).pipe(delay(1000));

// of('image1.png','image2.png','image3.png').pipe(
//     mergeMap(url => loadimage(url))
// ).subscribe(result => console.log(result));
// //mergeMap invece avvia ogni osservabile contemporaneamente e raccoglie i risultati appena dispononibili, al contrario di concatmap


// const Saveclick =() => of('sono di main.ts!').pipe(delay(100));

// fromEvent(document,'click').pipe(
//     exhaustMap(() => Saveclick())
// ).subscribe(result => console.log(result));
//exhaustMap invece serve ad ignorare nuove immissioni di dati per via magari di un click ad un bottone, almeno finchè il primo osservabile non viene completato.

//per riassumere: map trasforma ogni alore emesso, switchMap annulla il precedente osservabile e ne avvia uno nuovo(sostituisce), concatMap invece esegue osservabili uno dopo l'altro, l'osservabile ceh segue veine eseguito solo dopo che l'osservabile precedente viene comlpletato. mergeMap invece esegue tutti gli osservabili contemporanemente, infine exhausMap ignora nuove immissioni di dati di osservabili finchè quello attuale non viene completato.

// of(100,200,300).pipe(
//     map(price => price *0.8)
// ).subscribe(discountedprice => console.log(`i prezzi scontati sono ${discountedprice} euro`));
// // i dati vengono modiicati

// const launchmission = (mission: string) => of(`runnando ${mission}...`).pipe(delay(1000));
// of('apollo','kratos','atreus').pipe(
//     concatMap(mission => launchmission(mission))
// ).subscribe(status => console.log(status))
// //una missione alla volta

// const sendmessage = (friend : string) => of (`risposta di ${friend}`).pipe(delay(2000));
// of('mario', 'giggino', 'cesarino').pipe(
//     mergeMap(friend => sendmessage(friend))
// ).subscribe(response  => console.log(response));
// //i messaggi non vengono caricati necessariamente in ordine, ma vengono caricati contemporaneamente

// // const reserveTable = () => of('prenotazione riservata, la ringraziamo').pipe(delay(500));
// // fromEvent(document.getElementById('reserve'), 'click').pipe(
// //     exhaustMap(() => reserveTable())
// // ).subscribe(result => console.log(result))
// //exhaustMap ignora tutte i click successivi finchè la prima richiesta non viene completata, evitando doppie prenotazioni.

// from ([1,1,1]).pipe(
//     scan((total, current) => total + current, 0)
// ).subscribe(total=> console.log(`accensioni schermo : ${total}`))
// //scan invece accumula il totale degli sblocchi, emettendo il conteggio ad ogni sblocco


// //catchError  permette di intercettare diversi errori e di fornire messaggi alternativi.

// const shared$ = interval(2000).pipe(
//     take(6),
//     shareReplay(3)
//   );
   
//   shared$.subscribe(x => console.log('sub A: ', x));
//   shared$.subscribe(y => console.log('sub B: ', y));
   
//   setTimeout(() => {
//     shared$.subscribe(y => console.log('sub C: ', y));
//   }, 11000);
// // questo esercizio fa capire come funziona sharereplay, nella parte finale abbiamo appositamente messo un timeout di 11 secondi per il sub c, in questo modo è ancora piu chiarto che quest'ultimo observer prende gli ultimi tre valori grazie a shareReplay(3)