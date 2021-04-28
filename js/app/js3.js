define(['jquery','js2'],function ($,js2) {
  function add31(x,y){

    let z = js2. add21(x,y);

    let divText = $('#btnSHow')[0].id;
    console.log(z);
    console.log(divText);
    return z;
  };

  return {
    add31:add31
  }
});
