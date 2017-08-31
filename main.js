'use strict';
var request = require('request');
var cheerio = require('cheerio');


/**
 * Gives Flight information
 * @param {string} flight
 * @param {function} callback
 */


 function FlightTracking(flight, callback){
 	request("http://www.google.com/search?q=" + flight, function(err,  resp, html) {
        if (!err && resp.statusCode == 200){
        	var $ = cheerio.load(html);
        	var flight = $('h3', '#res').eq(0).text();
        	var status = $('._lMf').text();
        	var table = $('.g  table td');
        	var depcountry = table.eq(8).text();
                var depcode = table.eq(3).text();
        	var deptime = table.eq(4).text() + " " + table.eq(5).text();
        	var depterminal = table.eq(6).text() + " " + table.eq(11).text();
        	var arrcountry = table.eq(19).text();
                var arrcode = table.eq(14).text();
        	var arrtime = table.eq(15).text() + " " + table.eq(16).text();
        	var arrterminal = table.eq(17).text() + " " + table.eq(22).text();
        	var info = table.eq(1).text();

		if(arrcountry == ''){
						
			throw new Error("The submitted Flight  was not found or doesn't exist!")
		
		}
		
                else {

                	var flightinfo = {
                		Flight: flight, 
                		Status: status, 
                		DepartureCountry: depcountry, 
                                DepartureCode: depcode,
                		DepartureTime: deptime, 
                		DepartureTerminal: depterminal, 
                		ArrivalCountry: arrcountry,
                                ArrivalCode: arrcode,
                		ArrivalTime: arrtime,
                		ArrivalTerminal:arrterminal,
                		Information:info
                	}

                	callback(flightinfo)

	       }	

        }

        else {	


		throw new Error("There was a problem retriving the flight information. Probably caused by a captcha or there isn't an active internet connnection. Error Message: " + err.message)		


                }	


	 });

}

 module.exports = FlightTracking;

