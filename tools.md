---
layout: page
title: "工具"
group: navigation
---
{% include JB/setup %}

<div markdown="1">

## 前端

* [JsFiddle](http://jsfiddle.net)

* [Browser Shots](http://browsershots.org/)

* [Be the bot](http://www.avivadirectory.com/bethebot/)

* [Jash](javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://www.billyreisinger.com/jash/source/latest/Jash.js';})(); "终端js调试器")

* [HasLayout](http://haslayout.net/css/ "IE快来战个痛")

### [W3School](http://www.w3school.com.cn)
{: .show}

* [js](http://www.w3school.com.cn/js/jsref_obj_string.asp)
* [jQuery](http://www.w3school.com.cn/jquery/jquery_ref_manipulation.asp)
* [php](http://www.w3school.com.cn/php/php_ref_string.asp)
* [SQL](http://www.w3school.com.cn/sql/sql_quickref.asp)
* [css](http://www.w3school.com.cn/css/css_classification.asp)

-----------------------

## 程序

* [Codepad](http://codepad.org)
* [IDEOne](http://ideone.com)

-----------------------

## 移植

### ONScripter
{: .show}

* [ONScripter](http://onscripter.sourceforge.jp/onscripter.html)
* [ONScripter-Android](http://onscripter.sourceforge.jp/android/)
* [Uncle Mion](http://unclemion.com/onscripter/)
* [ACGF-ONScripter](http://code.google.com/p/onscripter/)

### References

* [Ref-JP](http://nscripter.insani.org/reference/)
* [NScrAPI-JP](http://senzogawa.s90.xrea.com/reference/NScrAPI.html)
* [NScrAPI-EN](http://unclemion.com/onscripter/api/NScrAPI.html)

### Japanese Works

* [Haru PSP Game](http://harupspgame.blog64.fc2.com/)
* [Haru Files](http://briefcase.yahoo.co.jp/bc/qmbqmbqm/lst?.dir=/)
* [Savaiv](http://savaiv.blog81.fc2.com/)

### Tools

* [TLWiki](http://tlwiki.org)
* [Asmodean](http://asmodean.reverse.net/pages/tools_index.html)
* [Haibara](https://haibara4cgrip.wordpress.com/)
* [飞雪crass版](https://www.yukict.com/bbs/forumdisplay.php?fid=69)
* [VNTools](http://vn.i-forge.net/tools/)

-----------------------

## 书.教程

* [ProGit](http://progit.org/book/zh/)
* [Kramdown Syntax](http://kramdown.rubyforge.org/syntax.html)
* [Learn Code The Hard Way](http://learncodethehardway.org/)

</div>
{: #tabcontent-wrapper}

<script type="text/javascript">
var navtab = $('<ul class="nav nav-tabs" id="tabs"></ul>');
var navcontainer = $('<div class="tab-content"></div>');
$('#tabcontent-wrapper>h2').each(function(index){
  var tabid = 'tab-'+index;
  $(this).nextUntil('h2').last().filter('hr').remove();
  $(this).nextUntil('h2')
    .wrapAll('<div class="tab-pane"></div>')
    .parent()
    .attr('id', tabid)
    .appendTo(navcontainer).html();
  $(this).wrapInner('<a>').children().unwrap()
      .attr('data-toggle', 'tab')
      .attr('href', '#'+tabid)
    .wrap('<li>').parent()
    .appendTo(navtab).html();
});
navcontainer.find('.tab-pane>h3').addClass('js-toggle-next dropdown');
$('#tabcontent-wrapper').empty().append(navtab).append(navcontainer);
$("#tabs a:first").tab('show');
$(".tab-content a").attr('target', '_blank').tooltip();
</script>

