const data = { cheesecakes: 0 };

const incrementCount = () => {
  data.cheesecakes++;
  window.document.getElementById("count").innerHTML = data.cheesecakes;
};

const incrementButton = window.document
  .getElementById("increment-button")
  .addEventListener("click", incrementCount);

module.exports = { incrementCount, data };
