
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return []
  return matrix.reduce((acc, cur, idx) => {
    return acc.concat(idx % 2 ? cur.reverse() : cur);
  }, [])

}
