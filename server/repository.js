const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./test.json";

class Repository {
  async saveQustionData(data) {
    const stringifyData = JSON.stringify(data);
    await writeFile(jsonFileName, stringifyData);
  }

  async getQestionData() {
    const data = JSON.parse(await readFile(jsonFileName));
    return data;
  }
}
module.exports = new Repository();
