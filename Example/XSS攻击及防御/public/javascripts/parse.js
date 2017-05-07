var parse = function(str){
  var results = '';
  try {
    HTMLParser(he.unescape(str, { strict: true }), {
      start: function(tag, attrs, unary) {

        // 防御措施，过滤掉不安全的标签
        if(tag == 'script' || tag == 'style' || tag == 'link' || tag == 'iframe' || tag == 'frame')
          return;

        results += '<' + tag;

        // 模拟过滤掉onerror、onclick属性
        // for(var i = 0, len = attrs.length; i < len; i++) {
        //   results += " " + attrs[i].name + '="' + attrs[i].escaped + '"';
        // }

        results += (unary ? "/" : "") + ">";
      },
      end: function(tag){
          results += "</" + tag + ">";
      },
      chars: function(text){
          results += text;
      },
      comment: function(text){
          results += "<!--" + text + "-->";
      }
    });

    console.log('results---->', results)

    return results;
  }catch(e){
    console.log(e);
  }finally{}
}