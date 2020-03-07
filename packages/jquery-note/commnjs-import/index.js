const $ = require("jquery");

$('.this-class').on('click', (evt) => {
  evt.preventDefault();

  console.log(evt);
});
