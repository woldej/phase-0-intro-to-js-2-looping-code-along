// Code your solutions in this file
function writeCards(arrName,message){
    let msg=[];

for(let x=0;x<arrName.length;x++){
const h=`Thank you, ${arrName[x]}, for the wonderful ${message} gift!`
msg.push(h)}
return msg
}

function countDown(num){
let count=0;
while(count<=num)
console.log(num--)
}