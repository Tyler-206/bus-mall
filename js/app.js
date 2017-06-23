'use strict';

function Product (name, fileName, filePath) {
  this.name = name;
  this.fileName = fileName;
  this.filePath = filePath;
  this.shown = 0;
  this.timesClicked = 0;
};

var productArray = [];

function setup() {
  productArray.push( new Product ('Bag', 'bag.jpg', 'img/bag.jpg'));
  productArray.push( new Product ('Banana', 'banana.jpg', 'img/banana.jpg'));
  productArray.push( new Product ('Bathroom', 'bathroom.jpg', 'img/bathroom.jpg'));
  productArray.push( new Product ('Boots', 'boots.jpg', 'img/boots.jpg'));
  productArray.push( new Product ('Breakfast', 'breakfast.jpg', 'img/breakfast.jpg'));
  productArray.push( new Product ('Bubblegum', 'bubblegum.jpg', 'img/bubblegum.jpg'));
  productArray.push( new Product ('Chair', 'chair.jpg', 'img/chair.jpg'));
  productArray.push( new Product ('Cthulhu', 'cthulhu.jpg', 'img/cthulhu.jpg'));
  productArray.push( new Product ('Dog-duck', 'dog-duck.jpg', 'img/dog-duck.jpg'));
  productArray.push( new Product ('Dragon', 'dragon.jpg', 'img/dragon.jpg'));
  productArray.push( new Product ('Pen', 'pen.jpg', 'img/pen.jpg'));
  productArray.push( new Product ('Pet-sweep', 'pet-sweep.jpg', 'img/pet-sweep.jpg'));
  productArray.push( new Product ('Scissors', 'scissors.jpg', 'img/scissors.jpg'));
  productArray.push( new Product ('Shark', 'shark.jpg', 'img/shark.jpg'));
  productArray.push( new Product ('Tauntaun', 'tauntaun.jpg', 'img/tauntaun.jpg'));
  productArray.push( new Product ('Unicorn', 'unicorn.jpg', 'img/unicorn.jpg'));
  productArray.push( new Product ('USB', 'usb.gif', 'img/usb.gif'));
  productArray.push( new Product ('Water-can', 'water-can.jpg', 'img/water-can.jpg'));
  productArray.push( new Product ('Wine-glass', 'wine-glass.jpg', 'img/wine-glass.jpg'));
}

var currentImages = [];
var previousImages = [];
var img1 = '';
var img2 = '';
var img3 = '';
var totalClicks = 0;
var maxClicks = 25;
var productNames = [];
var clickData = [];
var shownData = [];
var productsParent = document.getElementById('products');
//initiate 3 images on the screen
function productSelector () {
  //populates 3 images on the screen that do not repeat from eachother or the previous 3
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
  for (i = 0; i < productArray.length; i++) {
    if (productArray[i].fileName == currentImages[2].fileName) {
      productArray[i].shown++;
    };
  };
}

// check for any previous session data
load();

//call the function initially
productSelector();

//when a picture is clicked
productsParent.addEventListener('click', function () {
  if (totalClicks === maxClicks) {
    productsParent.innerHTML = '';
    showChart();
    return;
  };
  var chosen = event.target.getAttribute('id');

  previousImages = currentImages.splice(0,3);
  totalClicks ++;

  productsParent.removeChild(productsParent.lastChild);
  productsParent.removeChild(productsParent.lastChild);
  productsParent.removeChild(productsParent.lastChild);

  productSelector();
// add to timesClicked++
  for (var j = 0; j < productArray.length; j++) {
    if (chosen == productArray[j].fileName) {
      productArray[j].timesClicked++;
    };
  };
  save();
  // createOrUpdateClickState ();
});

//used for generating a random picture choice
function generateRandomProduct () {
  var index = Math.floor(Math.random() * productArray.length);
  return productArray[index];
};

//used for rendering the images to the page
function renderProductImage (productArray) {
  var img = document.createElement('img');
  img.setAttribute('src', 'img/' + productArray.fileName);
  img.setAttribute('id', productArray.fileName);
  productsParent.append(img);
};

//for storage
//save data
function save() {
  var productString = JSON.stringify(productArray);
  var clickString = JSON.stringify(totalClicks);
  localStorage.setItem('products', productString);
  localStorage.setItem('clicks', clickString);
}
//load previous session
function load() {
  try {
    var productParse = JSON.parse(localStorage.getItem('products'));
    var clickParse = JSON.parse(localStorage.getItem('clicks'));
    if (productParse && clickParse) {
      productArray = productParse;
      totalClicks = clickParse;
    } else {
      setup();
    }
  } catch (error){
    setup();
  }
}

function showChart () {
  for (var i = 0; i < productArray.length; i++) {
    productNames.push(productArray[i].name);
    clickData.push(productArray[i].timesClicked);
    shownData.push(productArray[i].shown);
  }
  var ctx = document.getElementById('chart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of clicks',
        data: clickData,
        backgroundColor: ('#8DBDE6'),
        borderWidth: 1
      },{
        label: '# times Shown',
        data: shownData,
        backgroundColor: ('#A2E68D'),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
  console.log (chart);
}
