 var chocolateBars = ["snickers", "hungred grand", "kitkat", "skittles"]
 
 


 function destructivelyAddElementToBeginningOfArray(array, element)
 {
    array.unshift(element)
    return array 
 }
 
   function addElementToBeginningOfArray(chocolateBars, addBar) {
    return [addBar,...chocolateBars]}