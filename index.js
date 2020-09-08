const poppeteer = require("puppeteer");
const url = "http://abehiroshi.la.coocan.jp/";

const main = async () => {
    // ブラウザ設定？？
    const browser = await poppeteer.launch({
        headless: false,
        slowMo: 250,
        defaultViewport: null,
    });
    // ブラウザ開くための新しいページの作成？
    const page = await browser.newPage();
    // ひらく
    await page.goto(url);
}

main();