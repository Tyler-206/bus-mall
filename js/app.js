'use strict';

//Generate 3 random images
var productNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots,jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.png', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.png', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg']

var img1 = '';
var img2 = '';
var img3 = '';


function generateRandomProduct () {
  var index = Math.floor(Math.random() * productNames.length);
  return productNames[index];
}

//Make the images clickable
//store info on which were clicked
//prevent duplicate images from showing
//track 25 clicks



}
