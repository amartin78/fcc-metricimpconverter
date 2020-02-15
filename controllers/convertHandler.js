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
    var idx = match ? match.index : null;
    var result = input.slice(0, idx);
    
    if (result === '') {
      return '1';
    }
    
    if ((/^\d*\.?\d*\/\d*\.?\d*$/).test(result)) {
      result = result.split('/');
      result = parseFloat((result[0]/result[1]).toPrecision(6));
    }
    
    if (isNaN(result)) {
      return undefined;
    }

    return result;
  };
  
  this.getUnit = function(input) {
    var match  = input.match(/[a-z]|[A-Z]/);
    var idx = match ? match.index : null;
    var result = input.slice(idx).toLowerCase();
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    
    var units = {
      gal: 'l',
      lbs: 'kg',
      mi:  'km',
      l:   'gal',
      kg:  'lbs',
      km:  'mi'
    }
    
    if (!units.hasOwnProperty(initUnit)) {
        return 'e';
    }
    
    return units[initUnit];
  };

  this.spellOutUnit = function(unit) {
    var units = {
      gal: 'gallons',
      lbs: 'pounds',
      mi:  'miles',
      l:   'liters',
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
      return 'e';
    }
    
    var units = {
      'gal': galToL,
      'lbs': lbsToKg,  
      'mi':  miToKm,
      'l':   1/galToL,
      'kg':  1/lbsToKg,
      'km':  1/miToKm
    }
    
    var result = parseFloat((initNum * units[initUnit]).toPrecision(6));

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
