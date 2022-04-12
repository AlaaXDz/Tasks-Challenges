// My version of ROT13 Caesars Cipher, task by Freecodecamp
function rot13(str) {
  let arrStr= str.split(''); // Splitting the encoded text
  //console.log(arrStr); // loging to the console the splitted text into an array
  let newStr=['']; // the new array where we put our decoded alphabetic character 
  newStr=[];
  // The use of for loop and if conditions to loop over every character and check whether it's above N or under it
  for (let i=0; i < arrStr.length ; i++){
    if (arrStr[i].charCodeAt()>=65 && arrStr[i].charCodeAt() < 78){ // the charCodeAt methode to get the ASCI code of the character and compare it to the middle of our shift
     newStr.splice(i,0,String.fromCharCode(str.charCodeAt(i)+13));
     // newStr+=(String.fromCharCode(str.charCodeAt(i)+13));
    //console.log(newStr);
    }
    if ((",.?!").includes(arrStr[i])){
      newStr.splice(i,0,String.fromCharCode(str.charCodeAt(i)));
      continue;
      //newStr+=(String.fromCharCode(str.charCodeAt(i)-13));
     // console.log(newStr);
    }
    if (arrStr[i].charCodeAt()>77 && arrStr[i].charCodeAt() < 91){
      newStr.splice(i,0,String.fromCharCode(str.charCodeAt(i)-13));
      //newStr+=(String.fromCharCode(str.charCodeAt(i)-13));
     // console.log(newStr);
    }
    if(arrStr[i].charCodeAt() == 32){
      newStr.splice(i,0,' ');
    }
  }
  let arr=newStr.join('');
  console.log(arr)
  //console.log(newStr);
  return arr;
}