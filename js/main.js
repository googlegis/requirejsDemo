requirejs.config({

  urlArgs: "bust=" +  (new Date()).getTime(),

  baseUrl: 'js',

  paths: {
    cssFolder:'../css',
    jquery:'vendor/jquery-3.4.1.min',
    js1:'app/js1',
    js2:'app/js2'
  },
  map:{
    '*':{
      css:'css.min',
    }
  },
  shim: {
    'js2':{
      deps:['js1'],
      exports:'js2'
    }
  }
});

require(['app/js3','app/js4','css!cssFolder/main'],function(js3,js4){
  js3.add31(3,2);
  js4.add41(3,4);
});
