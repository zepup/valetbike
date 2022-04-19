// Initializing map (set View contains coordinates of map)
var map = L.map('map').setView([42.33, -72.64], 13);

// Sets the map tile to the Open Street Map tile
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// $.ajax({
//   type:"GET",
//   url:"books/test",
//   dataType:"json",
//   data: {some_parameter: 'hello'},
//   success:function(result){
//     alert(result);
//   }
//

var marker = L.marker([42.33, -72.64]).addTo(map);

// // GET request
// $.ajax({
//     url: '/users',
//     type: "GET",
//     dataType: "json",
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (error) {
//         console.log(`Error ${error}`);
//     }
// });
//
// // POST request
// $.ajax({
//     url: '/map',
//     type: "POST",
//     data: {
//         name: "Ipseeta",
//         id: 1
//     },
//     dataType: "json",
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (error) {
//         console.log(`Error ${error}`);
//     }
// });
//
//
//
// for (station in stations) {
//   var marker = L.marker([s.lat, s.long]).addTo(map);
// }



// $.ajax({
//   type:"GET",
//   url:"books/test",
//   dataType:"json",
//   data: {some_parameter: 'hello'},
//   success:function(result){
//     alert(result);
//   }
//

// var marker = L.marker([42.33, -72.64]).addTo(map);
//
// // // GET request
// // $.ajax({
//     url: '/users',
//     type: "GET",
//     dataType: "json",
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (error) {
//         console.log(`Error ${error}`);
//     }
// });
//
// // POST request
// $.ajax({
//     url: '/map',
//     type: "POST",
//     data: {
//         name: "Ipseeta",
//         id: 1
//     },
//     dataType: "json",
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (error) {
//         console.log(`Error ${error}`);
//     }
// });
//
//
//
// for (station in stations) {
//   var marker = L.marker([s.lat, s.long]).addTo(map);
// }
