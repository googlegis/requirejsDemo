define(['jquery'],function ($) {
  function add(){

    let z = add21(2,3);

    let divText = $('#btnSHow')[0].id;
    console.log(z);
    console.log(divText);
  };

  return {
    add:add
  }

})
