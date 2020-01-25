'use strict';

const uuid = require('uuid/v4');

class Model {
  constructor(){
    this.database = [];
  }
  get(id){
    let response = id ? this.database.filter( record => record.id === id) : this.database;
    return Promise.resolve(response);
  }

  create(record){
    record.id = uuid();
    this.database.push(record);
    return Promise.resolve(record);
  }
}

