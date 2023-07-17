(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
