var onBackClicked = () => {
  window.history.back(); // 뒤로 가기 기능
};

var onDiaryClicked = () => {
  window.location.href = "diary.html"; // diary 페이지로 이동
};

var onSustainableLifestyleClicked = () => {
  window.location.href = "sustainable_lifestyle.html"; // sustainable lifestyle 페이지로 이동
};

var onEcoFriendlyProductsClicked = () => {
  window.location.href = "eco_friendly_products.html"; // eco friendly products 페이지로 이동
};

var onMouseDown = (obj) => {
  obj.style.backgroundColor = "#4AB34A";
};

var onMouseOutOrUp = (obj) => {
  obj.style.backgroundColor = "#5ec75e";
};

window.onload = () => {
  var buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", function () {
      onMouseDown(this);
    });
    buttons[i].addEventListener("mouseout", function () {
      onMouseOutOrUp(this);
    });
    buttons[i].addEventListener("mouseup", function () {
      onMouseOutOrUp(this);
    });
  }
};

var images = document.getElementsByClassName(".image");

var moveImages = () => {
  const firstImage = images[0];

  const temp = images[0];
  for (let i = 0; i < images.length - 1; i++) {
    images[i] = images[i + 1];
  }
  images[images.length - 1] = temp;

  images.forEach((image, index) => {
    image.style.zIndex = index;
  });
};
