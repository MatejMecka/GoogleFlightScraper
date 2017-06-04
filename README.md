# GoogleFlightScraper
A Module that Scrapes the Google Page when a flight is given

### Dependencies:
- Cheerio
- Request

### Installation:

`npm install googleflightscraper`

### Usage:
```js
var tracker = require('googleflightscraper')

tracker("JU 500", function(flightinfo){

var status = flightinfo["Status"]
console.log(status)


})

```

### Options:

* Flight: Returns the Flight
* Status: Tells you the Status of the flight: Scheduled, Delayed, Cancel
* DepartureCountry: Country the Flight is Departing
* DepartureTime: Time the Flight is departing
* DepartureTerminal: Terminal + Gate for the flight
* ArrivalCountry: Country the Flight is Departing
* ArrivalTime: What Time the Flight is arriving.
* ArrivalTerminal: Terminal + Gate for the flight arriving
* Information: Additional information like: departs in 22 hours 25 mins
