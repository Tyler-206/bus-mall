'use strict';

//Generate 3 random images
//Make the images clickable
//store info on which were clicked
//prevent duplicate images from showing
//track 25 clicks
function Product (name, filepath, timeShown, timesClicked) {
  this.name = name;
  this.filepath = filepath;
  this.timeShown = timeShown;
  this.timesClicked = timesClicked;
};

var productNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var currentImages = [];
var previousImages = [];
var img1 = '';
var img2 = '';
var img3 = '';
var totalClicks = 0;
var productsParent = document.getElementById('products');

//populates 3 images on the screen
function productSelector () {
  while (img1 == img2 || img1 == img3 || img2 == img3) {
    img1 = generateRandomProduct();
    img2 = generateRandomProduct();
    img3 = generateRandomProduct();
  }
  renderProductImage(img1);
  renderProductImage(img2);
  renderProductImage(img3);
  //push images to array to prevent from using in next 3
  currentImages.push(img1);
  currentImages.push(img2);
  currentImages.push(img3);
  console.log(currentImages);
}


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
};
