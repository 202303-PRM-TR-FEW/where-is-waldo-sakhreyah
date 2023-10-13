const example = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]];

const whereIsWaldo = (matrix) => {
  let arr = []
  let notWaldo
  if ((matrix[0][0] === matrix[0][1]) || (matrix[0][0] === matrix[1][0])) {
    notWaldo = matrix[0][0]
  } else { notWaldo = matrix[0][1] }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      switch (notWaldo) {
        case matrix[i][j]:
          break
        default:
          arr.push(i + 1)
          arr.push(j + 1)
      }
    }
  }
  return arr
}
console.log(whereIsWaldo(example))