/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      // if (initUnit === 'no unit') {
      //   res.send('no unit');
      // }
    console.log(initUnit, returnNum)
      if ((returnUnit === 'invalid unit' | initUnit === 'invalid unit') & (returnNum === 'invalid number' | returnNum === 1)) {
        res.send('invalid number and unit');
      } else if (returnUnit === 'invalid unit') {
        res.send('invalid unit');
      } else if (returnNum === 'invalid number') {
        res.send('invalid number');
      } else {
        res.json({
          'initNum': initNum,
          'initUnit':initUnit,
          'returnNum': returnNum,
          'returnUnit': returnUnit,
          'string': toString
        });
      }
    });
};
