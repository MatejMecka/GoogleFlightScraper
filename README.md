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
