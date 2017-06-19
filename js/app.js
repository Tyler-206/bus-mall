'use strict';

//Generate 3 random images
//Make the images clickable
//store info on which were clicked
//prevent duplicate images from showing
//track 25 clicks
var productNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

function Product (name, filepath, timeShown, timesClicked) {
  this.name = name;
  this.filepath = filepath;
  this.timeShown = timeShown;
  this.timesClicked = timesClicked;
};

var img1 = '';
var img2 = '';
var img3 = '';
var totalClicks = 0;
var productsParent = document.getElementById('products');

function productSelector () {
  for (var i = 0; i < 3; i++) {
    img1 = generateRandomProduct();
    renderProductImage(img1);
  //need to prevent the same image from popping up
  }
};

productSelector();

productsParent.addEventListener('click', function (event) {
  //what happens when clicked
  //add to clicked total;
  //push choice to array?
  //generate new images
  //stop when hit 25 clicks
  totalClicks ++;
});

function generateRandomProduct () {
  var index = Math.floor(Math.random() * productNames.length);
  return productNames[index];
}

function renderProductImage (productNames) {
  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + productNames);
  productsParent.append(img);
}
