const fs = require("fs");

const writeFile = (Template) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", Template, (err) => {
      // To reject promise if error
      if (err) {
        reject(err);
        return;
      }
      // To resolve if everything went well!
      resolve({
        ok: true,
        message: `
 =================
 HTML Page Created
 =================
 ==============
 Generating CSS
 ==============
        `,
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: `
 ====================
 CSS Generated! Enjoy
 ====================
        `,
      });
    });
  });
};

module.exports = { writeFile, copyFile };