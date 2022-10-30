function iniciarMap(){
    var coord = {lat:-34.5991057 ,lng: -58.402205};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}