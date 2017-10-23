"use strict";
var expect = require('chai').expect;
var tracker = require('../main.js')

it('Check if flight works', function(done) {
  tracker("JU 500", function(flightinfo,error){
    
    var status = flightinfo["Status"]
    expect(status).to.equal('Scheduled');
    done();
        
   });

});
