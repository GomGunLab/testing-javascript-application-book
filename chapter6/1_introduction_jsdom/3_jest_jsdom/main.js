const data = { cheesecakes: 0 };

const incrementCount = () => {
  data.cheesecakes++;
  window.document.getElementById("count").innerHTML = data.cheesecakes;
};

const incrementButton = window.document
  .getElementById("increment-button")
  .addEventListener("click", incrementCount);

// module.exports 모듈은 브라우저에서 사용 불가능함 따라서 번들러를 통해 브라우저에서 읽을 수 있는 코드로 트랜스파일링 해야 함

module.exports = { incrementCount, data };
