$(document).ready(function () {
  "use strict";
  $.modal.defaults = {
    closeExisting: false,
    showSpinner: false
  };

  var images = [];

  function add_image (title, url) {
    let image = {};
    image.title = title;
    image.url = url;
    let index = images.push(image);
    let html = '';
    html += `<div class="image-container" data-image-number="${index}">`;
    html += '<div class="image-block">';
    html += '<div class="image-block-heading">';
    html += `<div class="image-title">${image.title}</div>`;
    html += `<div class="link link-delete image-link-delete" data-delete-image="${index}">Delete</div>`;
    html += '</div>';
    html += `<div class="image-picture" style="background-image:url(${image.url}); height:100px"></div>`;
    html += '</div>';
    html += '</div>';
    $('.image-list').append(html);
    $('.form-input-title').val("");
    $('.form-input-url').val("");
  }

  function delete_image (number) {
    images[number -1] = {};
    $(`[data-image-number="${number}"]`).hide();
  }

  $('.js-add-image').click(function () {
    add_image($('.form-input-title').val(), $('.form-input-url').val());
    $.modal.close();
  });  

  $(document).on("click", '.image-link-delete', function () {
    let index = $(this).attr('data-delete-image');
    delete_image(index);
  });

  add_image("Flowers", "https://pp.userapi.com/c7002/v7002629/45aba/VbIFThSetis.jpg");  

});
