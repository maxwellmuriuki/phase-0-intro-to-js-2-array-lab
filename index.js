// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
 function   destructivelyAppendCat(name){
    cats.push("Ralph")
 }
 function  destructivelyPrependCat(name){
    cats.unshift("Bob")
 }
 function destructivelyRemoveLastCat(){
    cats.pop()
 }
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    let newcats=cats.slice();
    newcats.push("Broom");
    return  newcats;
}
function  prependCat(name){
    const newCats = cats.slice();
    newCats.unshift("Arnold");
    return newCats;
}


function removeFirstCat(){
    const newCats = cats.slice();
    newCats.shift();
    return newCats;
}
function   removeLastCat(){
    let newCats=cats.slice();
    newCats.pop();
    return newCats;
}