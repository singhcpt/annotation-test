new DroneDeploy({version: 1}).then(function(dronedeploy){
  console.log(dronedeploy);
});

new DroneDeploy({version: 1}).then(function(dronedeployApi){
  dronedeployApi.Class.method(exampleParameter)
    .then(function(response){
      console.log(response);
    }, function(error){
      console.log(error);
    });
});

var button = document.getElementById('button');

button.addEventListener('click', function() {
  const planId = 'Sample Mapping Test';
  const location = {
    lat: 41,
    lng: -77 
  };
  
  const displayOptions = {    
    description: 'My Marker Annotation',
    color: '#888888'
  }
  
  dronedeployApi.Annotations.createMarker('Sample Mapping Test', location, displayOptions);
  alert('past api');
});
