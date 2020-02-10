/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var idx = input.match(/[a-z]|[A-Z]/).index;
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
    var idx = input.match(/[a-z]|[A-Z]/).index;
    var result = input.slice(idx);
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
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    
    if (isNaN(initNum)) {
      return 'invalid number';
    }
    
    switch (initUnit) {
      case 'gal':
        return Number(galToL * initNum).toPrecision(6);
        break;
      case 'lbs':
        return Number(lbsToKg * initNum).toPrecision(6);
        break;
      case 'mi':
        return Number(miToKm * initNum).toPrecision(6);
        break;
      case 'L':
        return Number(1/galToL * initNum).toPrecision(6);
        break;
      case 'kg':
        return Number(1/lbsToKg * initNum).toPrecision(6);
        break;
      case 'km':
        return Number(1/miToKm * initNum).toPrecision(6);
        break;
      default:
        return 1;
    }
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + ' ' + initUnit + ' converts to ' + returnNum + ' ' + returnUnit;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
