const Base = require('./base.js');
const request = require('request-promise');
const querystring = require('querystring');
module.exports = class extends Base {
  async indexAction() {
    if(this.isGet){
      return this.display();
    }else if(this.isPost){
      let latlng = this.post('latlng');
      let data = {
        location:latlng,
        coord_type:'gcj02',
        output:'json',
        key:'w5OUBpQZFnKRgkY3DPsGjWOkHcOW8IAG'
      };
      const url = 'http://api.map.baidu.com/geocoder?'+querystring.stringify(data);
      let res = await request.get(url);
      return this.json(JSON.parse(res));
    }
  }
};
