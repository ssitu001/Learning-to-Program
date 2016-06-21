function getImageHeight(image) {
  return image.height;
}

function getImageWidth(image) {
  return image.width;
}

function replaceImages(images, location) {
  var baseImageUrl, height, width, image;
  switch (location) {
    case 'somewhere':
      baseImageUrl = 'http://placepuppy.it/';
      break;
    default:
      baseImageUrl = 'http://placekitten.com/g/';
      break;
  }
  for (var i=0; i < images.length; i++) {
    image = images[i];
    height = getImageHeight(image);
    width = getImageWidth(image);
    image.src = baseImageUrl + width + '/' + height;
  }
}
