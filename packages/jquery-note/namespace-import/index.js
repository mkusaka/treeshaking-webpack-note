import * as $ from 'jquery';

$('.this-class').on('click', (evt) => {
  evt.preventDefault();

  console.log(evt);
});
