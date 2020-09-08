const {JSDOM} = require("jsdom");

const url = "http://abehiroshi.la.coocan.jp/top.htm";

const main = async () => {
    // jsdom飲みのテスト
    const dom = await JSDOM.fromURL(url, {
        resources: "usable",
    });
    console.log(dom.window.document.title);
    console.log(dom.window.document.body.textContent);

    console.log(dom.window.document.body.getElementsByTagName("img"));
    console.log("jsdomだと中身取りやすいけども画像の取得とかが難しいね???うまくいってるかわからぬ");

}

main();