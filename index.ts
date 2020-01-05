var str = 'This is a string for testing the result ';
var lst=str.length;
var i=str.indexOf('is');
var cropText=str.substring(i,lst);
var privousText=str.substring(0,i);
var index = 0;
var res = [];

res.push(index);
while ((index = str.indexOf(' ', index + 1)) <i) {
    res.push(index);
}
console.log(res);
var checkLenght= res.length;
var previousIndex;
var newIndex;
if(checkLenght >= 5 && checkLenght <= lst){
 previousIndex= (res.length)-5;
 newIndex=res[previousIndex];
console.log(str.substring(newIndex,lst));
}
else if(checkLenght == 4){
 previousIndex= (res.length)-4;
 newIndex=res[previousIndex];
console.log(str.substring(newIndex,lst));
}
else if(checkLenght== 3){
 previousIndex= (res.length)-3;
 newIndex=res[previousIndex];
console.log(str.substring(newIndex,lst));
}
else if(checkLenght == 2 ){
 previousIndex= (res.length)-2;
 newIndex=res[previousIndex];
console.log(str.substring(newIndex,lst));
}
else {
console.log(str.substring(i,lst));
}

