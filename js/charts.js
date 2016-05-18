var data = {
  
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
 
  series: [
    [50, 20, null, 20, 10, 20, 50]
  ]
};

var options = {
	lineSmooth: Chartist.Interpolation.cardinal({
    	fillHoles: true,
  	}),
  	showArea: true
}

new Chartist.Line('.ct-chart', data, options);