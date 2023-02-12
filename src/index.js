
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let resultArray = []
  if (typeof matrix === 'undefined') {
    return resultArray
  }
  matrix.forEach((arr, i) => {

    if (i % 2 == 0) {
      arr.forEach((number) => {
        resultArray.push(number)
      })
    } else {
      arr.reverse().forEach(number => resultArray.push(number))
    }
  })

  return resultArray;

}
