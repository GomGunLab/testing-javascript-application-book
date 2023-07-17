const data = { cheesecakes: 0 };

// node main.js 실행은 오류 발생, 노드와 브라우저의 환경이 다르기 때문에 노드에서 dom에 접근할 수 없음

const incrementCount = () => {
  data.cheesecakes++;
  window.document.getElementById("count").innerHTML = data.cheesecakes;
};

const incrementButton = window.document
  .getElementById("increment-button")
  .addEventListener("click", incrementCount);

module.exports = { incrementCount, data };
