"use strict";
var expect = require('chai').expect;
var tracker = require('../main.js')

it('Check if flight works', function(done) {
  tracker("JU 500", function(flightinfo,error){

    var status = flightinfo["Status"]
    var country = flightinfo["DepartureCountry"]
    var countryCode = flightinfo["DepartureCode"]
    var arrivalCountry = flightinfo["ArrivalCountry"]
    var arrivalCode = flightinfo["ArrivalCode"]
    expect(status).to.equal('Scheduled');
    expect(countryCode).to.equal('BEG')
    expect(country).to.equal('Belgrade')
    expect(arrivalCountry).to.equal('New York City')
    expect(arrivalCode).to.equal('JFK')    
    done();
        
   });

});
