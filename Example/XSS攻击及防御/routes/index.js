var express = require('express');
var router = express.Router();

var comments = {
  text: ''
};

function html_encode(str) {  // 编码
  var s = '';

  if (str.length == 0) return "";
  s = str.replace(/&/g, "&gt;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/\s/g, "&nbsp;");
  s = s.replace(/\'/g, "&#39;");
  s = s.replace(/\"/g, "&quot;");
  s = s.replace(/\n/g, "<br>");
  return s;
} 

/* GET home page. */
router.get('/', function(req, res, next) {
  //禁止浏览器拦截
  //res.set('X-XSS-Protection',0);
  res.render('index', { title: 'Express', xss: req.query.xss });
});

router.get('/comment', function(req, res, next) {  // 添加评论接口
  comments.text = html_encode(req.query.comment)
});

router.get('/getComment', function(req, res, next) {  // 获取评论接口
  res.json({
    comment: comments.text
  })
});

module.exports = router;
