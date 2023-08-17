import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
var fs = require('fs');

@Injectable()
export class AppService {
  create(params, query) {
    console.log("🚀 ~ file: app.service.ts:8 ~ AppService ~ create ~ query:", query)
    fs.writeFile(query.name + ".json", JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('complete');
    }
    );
    return "complete";
  }
  async getHello(query) {
    let data = JSON.parse(await readFile(query.name + ".json", "utf8"));
    return data;
  }
}
