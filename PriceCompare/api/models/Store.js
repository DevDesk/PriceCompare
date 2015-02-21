/**
* Store.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    storeName:{
      type:'string',
      required:true
    },
    storeAddress1: 'string',
    storeAddress2: 'string',
    storeCity: 'string',
    storeState: 'string',
    storeZip: 'string',
    storePhone: 'string',
    storeWebsite: 'string',


    ////associations

    ////belongs to
    owner: {
      model: 'user'
    }

  }
};

