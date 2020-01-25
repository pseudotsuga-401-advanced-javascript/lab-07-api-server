'use strict';

const auth = (boolean = true) => {
  return (req, res, next) => {
    if(boolean){next()}
    else{next('error');}
  }
}

module.exports = auth;