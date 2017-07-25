var form = document.getElementById('form')
var fn = document.getElementById('fn')
var ln = document.getElementById('ln')
var g = document.getElementsByName('gender')
var s = document.getElementById('state')
var c = document.getElementById('city')
var stateData = JSON.parse('[{"name": "Alabama","abbreviation": "AL"},{"name": "Alaska","abbreviation": "AK"},{"name": "American Samoa","abbreviation": "AS"},{"name": "Arizona","abbreviation": "AZ"},{"name": "Arkansas","abbreviation": "AR"},{"name": "California","abbreviation": "CA"},{"name": "Colorado","abbreviation": "CO"},{"name": "Connecticut","abbreviation": "CT"},{"name": "Delaware","abbreviation": "DE"},{"name": "District Of Columbia","abbreviation": "DC"},{"name": "Federated States Of Micronesia","abbreviation": "FM"},{"name": "Florida","abbreviation": "FL"},{"name": "Georgia","abbreviation": "GA"},{"name": "Guam","abbreviation": "GU"},{"name": "Hawaii","abbreviation": "HI"},{"name": "Idaho","abbreviation": "ID"},{"name": "Illinois","abbreviation": "IL"},{"name": "Indiana","abbreviation": "IN"},{"name": "Iowa","abbreviation": "IA"},{"name": "Kansas","abbreviation": "KS"},{"name": "Kentucky","abbreviation": "KY"},{"name": "Louisiana","abbreviation": "LA"},{"name": "Maine","abbreviation": "ME"},{"name": "Marshall Islands","abbreviation": "MH"},{"name": "Maryland","abbreviation": "MD"},{"name": "Massachusetts","abbreviation": "MA"},{"name": "Michigan","abbreviation": "MI"},{"name": "Minnesota","abbreviation": "MN"},{"name": "Mississippi","abbreviation": "MS"},{"name": "Missouri","abbreviation": "MO"},{"name": "Montana","abbreviation": "MT"},{"name": "Nebraska","abbreviation": "NE"},{"name": "Nevada","abbreviation": "NV"},{"name": "New Hampshire","abbreviation": "NH"},{"name": "New Jersey","abbreviation": "NJ"},{"name": "New Mexico","abbreviation": "NM"},{"name": "New York","abbreviation": "NY"},{"name": "North Carolina","abbreviation": "NC"},{"name": "North Dakota","abbreviation": "ND"},{"name": "Northern Mariana Islands","abbreviation": "MP"},{"name": "Ohio","abbreviation": "OH"},{"name": "Oklahoma","abbreviation": "OK"},{"name": "Oregon","abbreviation": "OR"},{"name": "Palau","abbreviation": "PW"},{"name": "Pennsylvania","abbreviation": "PA"},{"name": "Puerto Rico","abbreviation": "PR"},{"name": "Rhode Island","abbreviation": "RI"},{"name": "South Carolina","abbreviation": "SC"},{"name": "South Dakota","abbreviation": "SD"},{"name": "Tennessee","abbreviation": "TN"},{"name": "Texas","abbreviation": "TX"},{"name": "Utah","abbreviation": "UT"},{"name": "Vermont","abbreviation": "VT"},{"name": "Virgin Islands","abbreviation": "VI"},{"name": "Virginia","abbreviation": "VA"},{"name": "Washington","abbreviation": "WA"},{"name": "West Virginia","abbreviation": "WV"},{"name": "Wisconsin","abbreviation": "WI"},{"name": "Wyoming","abbreviation": "WY"}]')
var cityData

form.addEventListener('submit', function (e) {
  g = g[0].checked ? g[0] : g[1]
  document.getElementById('dialog').style.opacity = 1
  document.getElementById('p-name').innerHTML = '<b>User:  </b>' + fn.value + ' ' + ln.value
  document.getElementById('p-gender').innerHTML = '<b>Gender:  </b>' + g.value
  document.getElementById('p-city').innerHTML = '<b>From: </b>' + c.options[c.selectedIndex].value + ', ' + s.options[s.selectedIndex].value
  e.preventDefault()
})

function fill () {
  stateData.forEach(function (o) {
    var x = document.createElement('option')
    x.text = o.name
    x.value = o.abbreviation
    s.add(x, null)
  }, this)
}

function getCity () {
  if (s.options[s.selectedIndex].value === '0') {
    c.options.length = 0
    var x = document.createElement('option')
    x.text = 'City'
    x.value = 0
    c.add(x, null)
  } else {
    var addr = 'http://ohmyszu.com/states/' + s.options[s.selectedIndex].value + '/cities'
    var cityRequest = new XMLHttpRequest()
    cityRequest.open('GET', addr)
    cityRequest.responseType = 'text'
    cityRequest.onload = function () {
      if (cityRequest.status === 200) {
        cityData = cityRequest.responseText
        cityData = JSON.parse('[' + cityData + ']')
        c.options.length = 0
        cityData[0].forEach(function (o) {
          var x = document.createElement('option')
          x.text = o
          x.value = o
          c.add(x, null)
        }, this)
      }
    }
    cityRequest.send()
  }
}
