/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var match  = input.match(/[a-z]|[A-Z]/);
    console.log(match)
    var idx = match ? match.index : null;
    var result = input.slice(0, idx);
    if (result === '') {
      return 1;
    }
    if (result.indexOf('/') != -1) {
      result = result.split('/');
      result = (result[0]/result[1]).toPrecision(6);
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var match  = input.match(/[a-z]|[A-Z]/);
    var idx = match ? match.index : null;
    var result = input.slice(idx);
    
    // if (result === '') {
    //   return 'invalid unit';
    // }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    
    var units = {
      gal: 'L',
      lbs: 'kg',
      mi:  'km',
      L:   'gal',
      kg:  'lbs',
      km:  'mi'
    }
    
    if (!units.hasOwnProperty(initUnit)) {
        return 'invalid unit';
    }
    
    return units[initUnit];
  };

  this.spellOutUnit = function(unit) {
    var units = {
      gal: 'gallons',
      lbs: 'pounds',
      mi:  'miles',
      L:   'liters',
      kg:  'kilograms',
      km:  'kilometers'
    }
    
    return units[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    if (isNaN(initNum) | !isFinite(initNum)) {
      return 'invalid number';
    }
    
    var units = {
      'gal': galToL,
      'lbs': lbsToKg,  
      'mi':  miToKm,
      'L':   1/galToL,
      'kg':  1/lbsToKg,
      'km':  1/miToKm
    }
    
    return Number(initNum * units[initUnit]).toPrecision(6);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
