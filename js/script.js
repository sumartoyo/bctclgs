(function() {
  var data = [{
    urlLogo: 'img/Borussia_Monchengladbach_logo.svg.png',
    color: '#eeeeee',
    border: '#000000',
    x: 207, y: 277,
    trips: [
      {x: 133, y: 413},
      {x: 130, y: 219},
      {x: 127, y: 182},
    ]
  }, {
    urlLogo: 'img/Logo_FC_Bayern_Munchen.svg.png',
    color: '#ed1248',
    border: '#dddddd',
    x: 256, y: 313,
    trips: [
      {x: 77, y: 415},
      {x: 195, y: 255},
      {x: 428, y: 155},
    ]
  }, {
    urlLogo: 'img/Bayer_04_Leverkusen_logo.svg.png',
    color: '#111111',
    border: '#ff0000',
    x: 216, y: 277,
    trips: [
      {x: 189, y: 387},
      {x: 408, y: 158},
      {x: 143, y: 251},
    ]
  }, {
    urlLogo: 'img/120px-Borussia_Dortmund_logo.svg.png',
    color: '#fde100',
    border: '#000000',
    x: 218, y: 260,
    trips: [
      {x: 77, y: 415},
      {x: 14, y: 424},
      {x: 351, y: 242},
    ]
  }]

  // container
  var svg = d3.select('svg')

  // set background map
  svg.append('svg:image')
     .attr('xlink:href', 'img/blank_europe_map_germany_cities.jpg')
     .attr('width', 640)
     .attr('height', 512)
     .attr('x', 0)
     .attr('y', 0)

  // draw line path
  data.forEach(function(club) {
    club.paths = []
    club.trips.forEach(function(city) {
      club.paths.push(
        svg.append('line')
          .attr('x1', club.x)
          .attr('y1', club.y)
          .attr('x2', city.x)
          .attr('y2', city.y)
          .attr('stroke', club.border)
          .attr('stroke-width', 3)
          .attr('stroke-linecap', 'round')
      )
      club.paths.push(
        svg.append('line')
          .attr('x1', club.x)
          .attr('y1', club.y)
          .attr('x2', city.x)
          .attr('y2', city.y)
          .attr('stroke', club.color)
          .attr('stroke-width', 2)
          .attr('stroke-linecap', 'round')
        )
    })
  })

  // render on/off club selector
  var clubs = document.getElementById('clubs')
  data.forEach(function(club, i) {
    var checkbox = document.createElement('input')
    checkbox.id = 'checkbox-club-'+i
    checkbox.type = 'checkbox'
    checkbox.checked = true
    checkbox.addEventListener('click', function() {
      var isChecked = this.checked
      data[i].paths.forEach(function(path) {
        path.attr('display', isChecked ? 'inline' : 'none')
      })
    })

    var label = document.createElement('label')
    label.setAttribute('for', checkbox.id)

    var img = document.createElement('img')
    img.src = club.urlLogo

    label.appendChild(img)
    clubs.appendChild(checkbox)
    clubs.appendChild(label)
    clubs.appendChild(document.createTextNode('\u00A0\u00A0\u00A0'))
  })
})();
