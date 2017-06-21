'use strict';

//store info on which were clicked

//persistence of data
//when we persist date, we need to be able to do four things with it:
// create the data -
// retrieve it it
// update it
// delete it
// CRUD = create, retrieve, update, delete
function Product (name, fileName, filePath) {
  this.name = name;
  this.fileName = fileName;
  this.filePath = filePath;
  this.shown = 0;
  this.timesClicked = 0;
};

var productArray = [];
productArray.push( new Product ('Bag', 'bag.jpg', 'images/bag.jpg'));
productArray.push( new Product ('Banana', 'banana.jpg', 'images/banana.jpg'));
productArray.push( new Product ('Bathroom', 'bathroom.jpg', 'images/bathroom.jpg'));
productArray.push( new Product ('Boots', 'boots.jpg', 'images/boots.jpg'));
productArray.push( new Product ('Breakfast', 'breakfast.jpg', 'images/breakfast.jpg'));
productArray.push( new Product ('Bubblegum', 'bubblegum.jpg', 'images/bubblegum.jpg'));
productArray.push( new Product ('Chair', 'chair.jpg', 'images/chair.jpg'));
productArray.push( new Product ('Cthulhu', 'cthulhu.jpg', 'images/cthulhu.jpg'));
productArray.push( new Product ('Dog-duck', 'dog-duck.jpg', 'images/dog-duck.jpg'));
productArray.push( new Product ('Dragon', 'dragon.jpg', 'images/dragon.jpg'));
productArray.push( new Product ('Pen', 'pen.jpg', 'images/pen.jpg'));
productArray.push( new Product ('Pet-sweep', 'pet-sweep.jpg', 'images/pet-sweep.jpg'));
productArray.push( new Product ('Scissors', 'scissors.jpg', 'images/scissors.jpg'));
productArray.push( new Product ('Shark', 'shark.jpg', 'images/shark.jpg'));
productArray.push( new Product ('Sweep', 'sweep.png', 'images/sweep.png'));
productArray.push( new Product ('Tauntaun', 'tauntaun.jpg', 'images/tauntaun.jpg'));
productArray.push( new Product ('Unicorn', 'unicorn.jpg', 'images/unicorn.jpg'));
productArray.push( new Product ('USB', 'usb.gif', 'images/usb.gif'));
productArray.push( new Product ('Water-can', 'water-can.jpg', 'images/water-can.jpg'));
productArray.push( new Product ('Wine-glass', 'wine-glass.jpg', 'images/wine-glass.jpg'));

var currentImages = [];
var previousImages = [];
var img1 = '';
var img2 = '';
var img3 = '';
var totalClicks = 0;
var maxClicks = 25;
var productsParent = document.getElementById('products');
//initiate 3 images on the screen
function productSelector () {
  //populates 3 images on the screen that do not repeat from eachother or the previous 3
  if (totalClicks) {
    productsParent.removeChild(productsParent.lastChild);
    productsParent.removeChild(productsParent.lastChild);
    productsParent.removeChild(productsParent.lastChild);
  };
  // verifiy that 3 images do not repeat from eachother or previous round
  while (img1 == img2 || img1 == img3 || img2 == img3 || img1 == previousImages[0] || img1 == previousImages[1] || img1 == previousImages[2] || img2 == previousImages[0] || img2 == previousImages[1] || img2 == previousImages[2] || img3 == previousImages[0] || img3 == previousImages[1] || img3 == previousImages[2]) {
    img1 = generateRandomProduct();
    img2 = generateRandomProduct();
    img3 = generateRandomProduct();
  }
  renderProductImage(img1);
  currentImages.push(img1);
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].fileName == currentImages[0].fileName) {
      productArray[i].shown++;
    };
  };
  renderProductImage(img2);
  currentImages.push(img2);
  for (i = 0; i < productArray.length; i++) {
    if (productArray[i].fileName == currentImages[1].fileName) {
      productArray[i].shown++;
    };
  };
  renderProductImage(img3);
  currentImages.push(img3);
  //push images to array to prevent from using in next 3
  // console.log(currentImages);
//trying to get it to add to shown
  for (i = 0; i < productArray.length; i++) {
    if (productArray[i].fileName == currentImages[2].fileName) {
      productArray[i].shown++;
    };
  };
}
//call the function initially
productSelector();

//make something happen when a picture is clicked
productsParent.addEventListener('click', function () {
  if (totalClicks === maxClicks) {
    return;
  };
  previousImages = currentImages.splice(0,3);
  totalClicks ++;
//trying to get it to add to timesClicked
  productSelector();
  for (var j = 0; j < productArray.length; j++) {
    if (productArray[j].fileName == currentImages[0 || 1 || 2].fileName) {
      productArray[j].timesClicked++;
      console.log(productArray[j].fileName);
    };
  };
  console.log (totalClicks);
});

//used for generating a random picture choice
function generateRandomProduct () {
  var index = Math.floor(Math.random() * productArray.length);
  return productArray[index];
};

//used for rendering the images to the page
function renderProductImage (productArray) {
  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + productArray.fileName);
  productsParent.append(img);
};
