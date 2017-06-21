'use strict';

//Generate 3 random images
//Make the images clickable
//store info on which were clicked
//prevent duplicate images from showing
//track 25 clicks

var bag = new Product ('Bag', 'bag.jpg', 'images/bag.jpg');
var banana = new Product ('Banana', 'banana.jpg', 'images/banana.jpg');
var bathroom = new Product ('Bathroom', 'images/bathroom.jpg');
var boots = new Product ('Boots', 'images/boots.jpg');
var breakfast = new Product ('Breakfast', 'images/breakfast.jpg');
var bubblegum = new Product ('Bubblegum', 'images/bubblegum.jpg');
var chair = new Product ('Chair', 'images/chair.jpg');
var cthulhu = new Product ('Cthulhu', 'images/cthulhu.jpg');
var dogDuck = new Product ('Dog-duck', 'images/dog-duck.jpg');
var dragon = new Product ('Dragon', 'images/dragon.jpg');
var pen = new Product ('Pen', 'images/pen.jpg');
var petSweep = new Product ('Pet-sweep', 'images/pet-sweep.jpg');
var scissors = new Product ('Scissors', 'images/scissors.jpg');
var shark = new Product ('Shark', 'images/shark.jpg');
var sweep = new Product ('Sweep', 'images/sweep.png');
var tauntaun = new Product ('Tauntaun', 'images/tauntaun.jpg');
var unicorn = new Product ('Unicorn', 'images/unicorn.jpg');
var usb = new Product ('USB', 'images/usb.gif');
var waterCan = new Product ('Water-can', 'images/water-can.jpg');
var wineGlass = new Product ('Wine-glass', 'images/wine-glass.jpg');

function Product (name, fileName, filePath, shown, timesClicked) {
  this.name = name;
  this.fileName = fileName;
  this.filePath = filePath;
  this.shown = 0;
  this.timesClicked = 0;
};
//list of all the products
var productNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var currentImages = [];
var previousImages = [];
var img1 = '';
var img2 = '';
var img3 = '';
var totalClicks = 0;
var maxClicks = 25;
var productsParent = document.getElementById('products');

//populates 3 images on the screen that do not repeat from eachother or the previous 3
function productSelector () {
  if (totalClicks) {
    productsParent.removeChild(productsParent.lastChild);
    productsParent.removeChild(productsParent.lastChild);
    productsParent.removeChild(productsParent.lastChild);
  };
  while (img1 == img2 || img1 == img3 || img2 == img3 || img1 == previousImages[0] || img1 == previousImages[1] || img1 == previousImages[2] || img2 == previousImages[0] || img2 == previousImages[1] || img2 == previousImages[2] || img3 == previousImages[0] || img3 == previousImages[1] || img3 == previousImages[2]) {
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

  for (var i = 0; i < productNames.length; i++) {
    if (currentImages[i] == Product.fileName[i]) {
      Product[i].shown++;
      console.log(Product[i]);
      // for (var j = 0; j < objectList.length; j++) {
      //       if (objectList[j].fileName == currentlyShowing[i]) {
      //         objectList[j].timesShown++;
      //         console.log(objectList[j]);
      //       }
    };
  };
}
//call the function
productSelector();

//make something happen when a picture is clicked
productsParent.addEventListener('click', function () {
  if (totalClicks === maxClicks) {
    return;
  };

  previousImages = currentImages.splice(0,3);
  totalClicks ++;
  productSelector();
  console.log (totalClicks);
  //what happens when clicked
  //add to clicked total;
  //push choice to array?
  //generate new images
  //stop when hit 25 clicks
});

//used for generating a random picture choice
function generateRandomProduct () {
  var index = Math.floor(Math.random() * productNames.length);
  return productNames[index];
}

//used for rendering the images to the page
function renderProductImage (productNames) {
  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + productNames);
  productsParent.append(img);
};
