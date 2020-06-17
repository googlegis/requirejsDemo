requirejs.config({

  urlArgs: "bust=" +  (new Date()).getTime(),

  baseUrl: 'js',

  paths: {
    app: 'app',
    cssFolder:'../css',
    jquery:'vendor/jquery-3.4.1.min',
    js1:'app/js1',
    js2:'app/js2',
    js3: 'app/js3',
  },
  map:{
    '*':{
      css:'css.min',
    }
  },
  shim: {
    'js1':{
      deps:[],
      exports: 'js1'
    },
    'js2':{
      deps:['js1'],
      exports:'js2'
    },
    'js3':{
      deps:['js2'],
      exports:'js3'
    }
  }
});

require(['js3','css!cssFolder/main'],function(js3){
  js3.add();
})
