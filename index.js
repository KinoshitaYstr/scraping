const {JSDOM} = require("jsdom");

const url = "http://abehiroshi.la.coocan.jp/";

const main = async () => {
    // jsdom飲みのテスト
    const dom = await JSDOM.fromURL(url);
    console.log(dom.window.document.title);
    console.log(dom.window.document.body.textContent);
    
}

main();