//获取元素
var btn = document.getElementById('btn');
var get = document.getElementById('get');
var txt = document.getElementById('txt');

//监听评论按钮事件
btn.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  var url = '/comment?comment='+ txt.value;
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () { 
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        console.log(xhr);
      }else{
        console.log('error');
      }
    }
  }
  xhr.send();
});

//监听获取评论按钮事件
get.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  var url = '/getComment';
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var com = parse(JSON.parse(xhr.response).comment);
          var txt = document.createElement('span');
          txt.innerHTML = com;
          document.body.appendChild(txt);
      }else{
        console.log('error');
      }
    }
  }
  xhr.send();
});