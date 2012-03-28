---
layout: page
title: "Tools"
group: navigation
---
{% include JB/setup %}

{: .nav .nav-tabs #tabs}
* [前端](#tab_frontend)
* [程序](#tab_program)
* [移植](#tab_port)

{: .tab-content}
<div markdown="1">

{:#tab_frontend}
<div markdown="1">
* [JsFiddle](http://jsfiddle.net)
* [Browser Shots](http://browsershots.org/)
* [Be the bot](http://www.avivadirectory.com/bethebot/)
* [Jash](javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://www.billyreisinger.com/jash/source/latest/Jash.js';})(); "终端js调试器")
* [W3School](http://www.w3school.com.cn)
  {: .js-toggle-next .dropdown .show}

  * [js](http://www.w3school.com.cn/js/jsref_obj_string.asp)
  * [jQuery](http://www.w3school.com.cn/jquery/jquery_ref_manipulation.asp)
  * [php](http://www.w3school.com.cn/php/php_ref_string.asp)
  * [SQL](http://www.w3school.com.cn/sql/sql_quickref.asp)
  * [css](http://www.w3school.com.cn/css/css_classification.asp)
</div>

{:#tab_program}
<div markdown="1">
* [Codepad](http://codepad.org)
* [IDEOne](http://ideone.com)
</div>

{:#tab_port}
<div markdown="1">
### ONScripter
{: .js-toggle-next .dropdown .show}

* [ONScripter](http://onscripter.sourceforge.jp/onscripter.html)
* [ONScripter-Android](http://onscripter.sourceforge.jp/android/)
* [Uncle Mion](http://unclemion.com/onscripter/)
* [ACGF-ONScripter](http://code.google.com/p/onscripter/)

### References
{: .js-toggle-next .dropdown}

* [Ref-JP](http://nscripter.insani.org/reference/)
* [NScrAPI-JP](http://senzogawa.s90.xrea.com/reference/NScrAPI.html)
* [NScrAPI-EN](http://unclemion.com/onscripter/api/NScrAPI.html)

### Japanese Works
{: .js-toggle-next .dropdown}

* [Haru PSP Game](http://harupspgame.blog64.fc2.com/)
* [Haru Files](http://briefcase.yahoo.co.jp/bc/qmbqmbqm/lst?.dir=/)
* [Savaiv](http://savaiv.blog81.fc2.com/)

### Tools
{: .js-toggle-next .dropdown}

* [TLWiki](http://tlwiki.org)
* [Asmodean](http://asmodean.reverse.net/pages/tools_index.html)
* [Haibara](https://haibara4cgrip.wordpress.com/)
* [飞雪crass版](https://www.yukict.com/bbs/forumdisplay.php?fid=69)
* [VNTools](http://vn.i-forge.net/tools/)
</div>

</div>

<script type="text/javascript">
  $("#tabs>li>a").attr('data-toggle', 'tab');
  $('.tab-content>div').addClass('tab-pane');
  $("#tabs a:first").tab('show');
  $(".tab-content a").attr('target', '_blank').tooltip();
</script>

