/*let b = '5.23';
console.log(b);
console.log(typeof(b));
console.log(parseFloat(b));
console.log(typeof(parseFloat(b)));
console.log(parseInt(b));
console.log(typeof(parseInt(b)));
b='5.123456E5';
console.log(b.slice(1,5));
console.log(b.split('.'));
b='mala slova';
console.log(b.toUpperCase());
console.log(parseFloat(b));
*/


/*let b=3;

switch(b>5){
    case 0:console.log('FALSE');
    case 2: console.log('A');
    case 3:console.log('B');
    //break;
    case 1:console.log('D');
    break;
    default: console.log('C');
    break;
    case 3:console.log('F');

}
*/
/*
let b=6;
switch(b>5){
    case true:console.log('A');
    case false:console.log('B');
    break;
    default:console.log('HOW');
}
*/


/*
let a=5;
let b=6;
console.log(a,b);// 5 6
//?
let pom= a;
a=b;
b=pom;

console.log(a,b);// 6 5
*/

/*let a=7;
if(a>2 && a<6){
    console.log('A je u opsegu od 2 do 6');
}else{
    console.log('A je van opsega');
}
*/
/*let b=9;
if(b%3==0 || b%5==0){
    console.log('B je deljivo sa 3 ili sa 5');
}*/
/*
let b=30;
if((b%3==0 || b%5==0) && b%2!=0){
    console.log('B je deljivo sa 3 ili sa 5 ali nije deljivo sa 2');
}
*/
/*
let b=6;
if(b>5)
console.log('Ovo je vezano za if');
else
console.log('Ovo je vezano za else');
console.log('Ovo nije vezano za if/else');
*/
/*let b = 8;
if (b > 4)
    if (b < 7) console.log('A');
    else console.log('B');//Else je vezan za prvi najdublji if

*/
/*let b = 1;
if (b > 1) {
    if (b > 2) {

    }
    else {

    }
}
else {
    console.log('Spoljasnji else');
    if (b < -2) {

    }
    else{

    }

}*/
/*
let b=9;
if((b>2 || b<-2) && b<=9){
    console.log('A');
}else{
    console.log('B');
}
*/

let b=6;
let tekst=b>5?'B vece od 5':'B je manje ili jednako 5';
//console.log(tekst);

tekst=b>5?
    b>8?
        'B je vece od 8'
        :
        'B je 8 ili manje, a vece od 5'
:'B je 5 ili manje';
console.log(tekst);


//------------------------------------------------------------------------

//For petlja cetvrtak 31.10.19
//1. 2. zadatak
let down=10
let up=20
let sum=0;

for(let counter=down; counter<=up; counter++) {
    if (counter % 3 ==0) {
        console.log (`${counter}`); //prvi zad
        sum+=counter;//drugi zad
    }
}
console.log(`suma od ${down} do ${up} deljivih sa 3 je ${sum}`);

//zad 3.
for(let counter=up; counter >= down; counter--){
    if(counter % 3 == 0) {
        console.log(counter); //treci zad
    }
}

//----------------------------------

// zadatak s+1/1 + 1+2/1*2 + 1+2+3/1*2*3 + 1+2...N/1*2...N

let s=0;
let zbir=0;
let pro=1;
let limit=4;
for(let counter=1; counter<=limit;counter++){
    pro*=counter;
    zbir+=counter;
    s+=zbir/pro;
}
console.log(s);

//zavrsen zadatak

//---------------------------------------------

//Zadatak S=(1/1)/(1/1)+...


//--------------------

//Zadatak 1.


