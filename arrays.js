 var chocolateBars = ["snickers", "hungred grand", "kitkat", "skittles"]
 
 
 function addElementToBeginningOfArray(array, element)
 {
   return [array,...element]
 }


 function destructivelyAddElementToBeginningOfArray(array, element)
 {
    array.unshift(element)
    return array 
 }