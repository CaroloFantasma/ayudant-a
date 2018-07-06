const names = ['MARCIA', 'NADIA', 'FABIÁN', 'JUAN', 'ALE'];

const namesLowerCase = (names) => {
  let newArr =[];
  //recorro mi arreglo
  for (let i = 0; i < names.length; i++) {
  
    newArr.push(names[i].toLowerCase());
    //newArr.push('MARCIA'.toLowerCase())

  }
  return newArr;
}

//Dado dos strings (firstWord y secondWord), escribir una función para determinar si secondWord es anagrama de firstWord. Si es anagrama devolver true.
//Ejemplo:
//firstWord = "ANAGRAMA"
//secondWord = "NMGRAAAA"
//Devolverá true

//firstWord = "cat"
//secondWord = "car"
//Devolverá false

const anagrama = (firstWord, secondWord) => {
  //Divido la palabra con split('') y la ordeno alfabéticamente con sort()
  const firstStr = firstWord.split('').sort();
  const secondStr = secondStr.split('').sort();
  let result;
  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 0; j < secondStr.length; j++) {
      if (firstStr[i] === secondStr[j]) {
        result = true;
        }else {
          result = false;
        }
      }
    }
    return result;
  }

  //Comprobando => anagrama(firstWord,secondWord)

  //Otra forma de hacer el ejercicio de arriba
  const anagrama = (firstWord, secondWord) => {
    //Divido la palabra con split('') y la ordeno alfabéticamente con sort()
    const firstStr = firstWord.split('').sort();
    const secondStr = secondStr.split('').sort();
    if (firstStr === secondStr){
      return true;
    }
    return false;
  }
