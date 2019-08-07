const fs = require("fs");

module.exports = async function(context, req) {
  const detBlirIs = req.query.is == "ja" || false;
  const fileName = detBlirIs ? "ja.html" : "nei.html";

  const html = await fs.promises.readFile(fileName);

  context.res = {
    body: html
  };
};
