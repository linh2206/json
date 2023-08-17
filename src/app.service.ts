import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
var fs = require('fs');

@Injectable()
export class AppService {
  create(params, query) {
    let name = '';
    Object.keys(query).forEach(key => {
      name = query[key] + ".json";
    })
    fs.writeFile(name, JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('complete');
    }
    );
    return "complete";
  }
  async getHello(query) {
    let name = '';
    Object.keys(query).forEach(key => {
      name = query[key] + ".json";


    })
    let data = JSON.parse(await readFile(name, "utf8"));
    return data;
  }
}
