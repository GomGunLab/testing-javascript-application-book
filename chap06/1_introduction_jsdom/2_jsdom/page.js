const fs = require("fs");
const { JSDOM } = require("jsdom");

// 노드에서 브라우저의 DOM 객체를 에뮬레이션하기 위한 JSDOM 라이브러리

const html = fs.readFileSync("index.html");
const page = new JSDOM(html);

module.exports = page;
