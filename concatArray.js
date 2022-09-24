const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let concatArr 
  if (array1 === null  && array2 === null ) {
    return concatArr =undefined
  }
  if (array1 === undefined  && array2 === undefined ) {
    return concatArr =undefined
  }
  if (array1 === null && array2 === undefined) {
    return concatArr = undefined
  }
  if (array2 === null && array1 === undefined) {
    return concatArr = undefined
  }
  if (array2 === undefined) {
    return concatArr = array1
  }
  if (array2 === null) {
    return concatArr = array1
  }
  if (array1 === undefined) {
    return concatArr = array2
  }
  if (array1 === null) {
    return concatArr = array2
  }

  if (array1 === [] && array2 === []) {
    return []
  }
  if (array1 !== null ||  undefined && array2 !== null || undefined) {
    return concatArr = array1.concat(array2)
  }

//   switch (concatArr) {
//     case array1 !== null || undefined ||0  && array2 === null||undefined||0:
//          concatArr = array1
//       break;
//     case array1 === null || undefined ||0  && array2 !== null ||undefined ||0 :
//          concatArr = array2
//       break;
//     case array1 === null || undefined ||0  && array2 === null ||undefined ||0 :
//       concatArr = undefined
//       break;
//     case  array1 !== null || undefined ||0   && array2 !== null ||undefined ||0  :
//       concatArr = array1.concat(array2) 
//       break;
//   }


    return concatArr 
}
module.exports = concatArray
