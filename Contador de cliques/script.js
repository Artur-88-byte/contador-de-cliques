function changeCount(current, amount) {
  return current + amount;
}
function resetCount() {
  return 0;
}
if (typeof document !== "undefined") {
  const output = document.getElementById("count");
  let count = 0;
  document.getElementById("increase").addEventListener("click", () => {
    count = changeCount(count, 1); output.textContent = count;
  });
  document.getElementById("decrease").addEventListener("click", () => {
    count = changeCount(count, -1); output.textContent = count;
  });
  document.getElementById("reset").addEventListener("click", () => {
    count = resetCount(); output.textContent = count;
  });
}
if (typeof module !== "undefined") {
  module.exports = { changeCount, resetCount };
}
