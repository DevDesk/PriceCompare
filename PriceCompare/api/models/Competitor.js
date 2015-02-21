/**
* Competitor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    compName:{
      type:'string',
      required:true
    },
    compAddress1: 'string',
    compAddress2: 'string',
    compCity: 'string',
    compState: 'string',
    compZip: 'string',
    compPhone: 'string',
    compWebsite: 'string',


    ////associations

    ////belongs to
    store: {
      model: 'store'
    }

    // ////has many
    // products:{
    //   collection: 'product',
    //   via: 'store'
    // }

  }
};

