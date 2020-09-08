const axios = require("axios");

const url = "http://abehiroshi.la.coocan.jp/";

const main = async () => {

    const data = await axios.get(url);
    console.log(data.data);
}

main();