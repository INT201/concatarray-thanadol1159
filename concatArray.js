const { template } = require('@babel/core')

function concatArray(array1, array2) {
  
  // if (array1 === null  && array2 === null ) {
  //   return concatArr =undefined
  // }
  // if (array1 === undefined  && array2 === undefined ) {
  //   return concatArr =undefined
  // }
  // if (array1 === null && array2 === undefined) {
  //   return concatArr = undefined
  // }
  // if (array2 === null && array1 === undefined) {
  //   return concatArr = undefined
  // }
  // if (array2 === undefined) {
  //   return concatArr = array1
  // }
  // if (array2 === null) {
  //   return concatArr = array1
  // }
  // if (array1 === undefined) {
  //   return concatArr = array2
  // }
  // if (array1 === null) {
  //   return concatArr = array2
  // }

  // if (array1 === [] && array2 === []) {
  //   return []
  // }
  // if (array1 !== null ||  undefined && array2 !== null || undefined) {
  //   return concatArr = array1.concat(array2)
  // }

  if (array1==undefined && array1==null && array2==undefined && array2==null){
    return concatArr = undefined
}
else if(array1==undefined || array1==null  && array2==true){
    return concatArr = array2
}
else if(array2==undefined || array2==null  && array1==true){
        return concatArr = array1
}
else {
  let concatArr = array1.concat(array2)
  return concatArr
}
}
module.exports = concatArray
