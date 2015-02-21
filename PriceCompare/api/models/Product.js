/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    itemName: 'string',
    itemNumber: 'string',
    shortDescription: 'text',
    longDescription: 'text',
    sku: 'string',
    upc: 'string',
    altLookup: 'string',
    model: 'string',
    type: 'string',
    manufacturer: 'string',
    brand: 'string',
    series: 'string',
    type: 'string',
    category: 'string',
    subCategory: 'string',
    vendor: 'string',
    vendorOrderCost: 'string',
    vendorUpc: 'string',
    vendorCode: 'string',
    vendorAltLookup: 'string',
    price: 'string',
    shippingPrice: 'string',
    msrp: 'string',
    averageUnitCost: 'string',
    data: 'json',

    ////associations

    ////belongs to
    store:{
      model: 'store'
    }


  }
};

