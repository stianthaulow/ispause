const fs = require("fs");

const yrUrl = process.env.Yr_URL;

module.exports = async function(context, req) {
  context.log(yrUrl);

  const detBlirIs = req.query.is == "ja" || false;
  const fileName = detBlirIs ? "ja.html" : "nei.html";

  const html = await fs.promises.readFile(fileName);

  context.res = {
    body: html
  };
};
