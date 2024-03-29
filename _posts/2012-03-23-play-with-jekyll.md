---
layout: post
title: "Play with Jekyll"
category: programming
excerpt: "对使用 Jekyll 搭建这个 blog 的一些总结"
tags: [ruby, git, programming]
---
{% include JB/setup %}

* work
{: toc .nav .nav-list}

<script type="text/javascript">
$('#markdown-toc').children('li')
  .children('a').css('font-weight', 'bold').end()
  .children('ul').addClass('nav nav-pills');
</script>

---

## 动机

[原先的blog](http://appblog.skydark.info)是使用[micolog](http://micolog.xuming.net)搭建在 GAE 上的。
但是随着 GAE 免费配额方案的改变，加上徐明对 micolog 的维护逐渐停滞，感觉有转移出去的必要了。

感谢 V2EXer [阳志平](http://www.yangzhiping.com)的博文：[告别wordpress，拥抱jekyll](http://www.yangzhiping.com/tech/wordpress-to-jekyll.html)，
和[理想的写作环境：git\+github\+markdown\+jekyll](http://www.yangzhiping.com/tech/writing-space.html)，
最终促使我做出了使用 Jekyll 将 blog 迁移到 github 上的决定。

Jekyll 有很多吸引我的地方，比如：

1. 基于 git，天然的版本控制能力;
2. 基于 markdown，干净利落，方便处理，配合 git，写文章只需要 vim 足矣;
3. 直接可放在 github 上，无需担心空间和维护问题;
4. 轻量纯静态，方便迁移，无需担心安全问题;
4. 可定制性强，只要是静态的就可以。如果在 github 以外的空间存放生成好的站点，添加后端代码也是可行的。

最终迁移是在妇女节进行的(……)。总的来说很顺利。

P.S.: 阳志平是位心理学工作者，也是位 Ruby 爱好者。他的文章写的干净利落，思路清晰，思考深刻。我很欣赏他的文章。

## 搭建

应该强调的是，这篇文章只是想留下做私人笔记，不能算是教程。
如果需要教程，可以参考阳志平先生的那几篇文章。

那么开始，首先当然需要一个 github 帐号，自然还有 git.

### git

git 是一个*版本控制软件*，作用是记录你对一个项目的所有*修改历史*。
我以前也只是将它用来备份自己写的一些垃圾而已，所以并不算熟悉。
关于学习 git，个人推荐[这本书](http://progit.org/book/zh/)。
当然，更关键的还是**先用起来**。

### github

有关[github](http://github.com)，
阳志平先生的[这篇博文](http://www.yangzhiping.com/tech/github.html)让我觉得已经不必介绍的更多了。

关于 github 的影响力，简单地看看本文里多少软件的链接出自 github 就知道了，其中有些还是有 github 但我贴了其他地址的。

关于 github 的配置如果还有不明白的地方，看它官网的 help 足矣。

### jekyll bootstrap

[Jekyll Bootstrap](http://jekyllbootstrap.com/)
是一个对生成*静态 blog 类站点*的工具 Jekyll 的一个包装。
对于快速上手而言，它能减少很多麻烦。
如果只是想快速在 github 上搭建一个 blog，照着它主页说的走一遍非常容易。  
另外就像它的名字一样， Jekyll Bootstrap 默认是基于[bootstrap](http://twitter.github.com/bootstrap/)的主题，twitter一贯的清新风格。

### ruby

当然，为了在本地生成和预览结果，需要安装 jekyll，也就是说需要首先安装 ruby.

Ruby 据说在 Mac 下工作最好，Linux 也不错，Windows 不敢恭维。

总而言之，还是推荐使用 [rvm](http://beginrescueend.com/) 安装 ruby.

淘宝提供了 rubygems 的[镜像源](http://ruby.taobao.org/)，
可有效加速 gem 的安装，强力推荐。

### jekyll

> Jekyll is a simple, blog aware, static site generator.

[Jekyll](https://github.com/mojombo/jekyll/wiki)
由两个部分协同工作，
一边是将标记语言(Textile, Markdown)转换为 html 语言的转换器，
另一边是模板引擎 [Liquid](https://github.com/shopify/liquid/wiki) 。

本地安装 Jekyll 只需要运行:

    gem install jekyll

即可。

## 配置

Jekyll Bootstrap 的首页已经将主要需要配置的部分说明的很清楚了，像评论申请一个 [disqus](http://disqus.com) 帐号就行。
这里说一些可能需要额外提醒的部分。

### github 支持

如果需要将页面放在 github 上，那么需要注意 github 上：

1. 不支持自定义插件，因此需要特殊处理的页面最好自己写进 Rakefile 里;
2. 有些微妙的地方与本地不同。在我这里，如果使用中文的 markdown 文件名，最后生成的站点路径将找不到，而 github 上可以; 如果在 liquid 中使用 split filter，本地可以正常应用，而 github 上不可以。也可能是因为两边使用的 jekyll 版本有别？

### markdown 引擎

Jekyll 可以使用的 markdown 引擎至少有
[maruku](http://maruku.rubyforge.org/index.html),
[rdiscount](https://github.com/rtomayko/rdiscount),
[kramdown](http://kramdown.rubyforge.org).
我列举的顺序就是我尝试的顺序。

* maruku 是默认的 markdown 引擎。优点是语法灵活，支持很多扩展特性。缺点一个是慢(据说，我并没有太深刻的体会)，一个是*含中文的列表经常会解析出错*，比如[这篇空轨OVA2的感想](/ACG/2012/03/03/sora-no-kiseki-ova2)，如果使用 markdown 的标准语法写，被 maruku 解析后开头的12345就会乱掉，变成12125之类的东西……
* rdiscount 是 C 实现的 markdown 引擎，优点不用说也知道就是快。缺点就是完全以实现标准 markdown 句法为目标，完全不支持扩充句法。
* kramdown 是我目前在用的 markdown 引擎，速度按照其首页的说法是 maruku 的4倍。支持一些扩充句法，我认为足够了。

安装不同的引擎很容易，`gem install <引擎名>`，然后对照着编辑`_config.yml`即可。

### 语法高亮

就说一句，需要安装 pygment，并找一个高亮用的 css 文件。
我是从阳志平先生的站点上 fork 过来的。

## 其他功能

kramdown 支持的 markdown 语法可以在其网站上[找到](http://kramdown.rubyforge.org/syntax.html)，
虽然我没在里头看到`{: toc}`这种用法——这就是本文开头的目录生成的方法。

[stackoverflow](http://stackoverflow.com/questions/tagged/jekyll)
自然也是个去提高经验值的好去处。

最近评论在 disqus 网站上有提供代码，Google Plus 按钮亦同。

主页的分页可以查 jekyll 的 paginate 支持。
主页和侧栏的编排一看源码便知，也没有花太多精力，因此不再赘述。

### 友情链接

一开始不清楚 yaml 的表示方法，
然后忘记了 jekyll 只是一个模板语言，因此*就算看起来再怎么像 ruby，也没有 ruby 的完整功能*。
因此用 ruby 的语法各种试各种报错，最初版本里循环也写的超难看。
后来用 yaml 在 page 的开头表示成：

{% highlight yaml %}
links:
  - url: "https://plus.google.com/117704226616638577311"
    name: "My Google Plus"
  - url: "http://icemaple.info"
    name: "远凌风"
  - url: "http://ori0n.co.de"
    name: "暗夜北辰"
{% endhighlight %}

就可以遍历生成了。

### github 仓库

显示 github 仓库状态的 javascript 文件 fork 自[这里](https://github.com/dementrock/dementrock.github.com/blob/master/javascripts/github.js)。
稍作修改，改为使用v3的API.

### 加密

注意 jekyll 是一个*静态站点生成器*，因此至少也会把密文暴露出来。
这一点上的确很遗憾。
如果不是发布在 github 上，自己写后端代码会更安全些。

现在的实现方式是 post 前手动执行 rake，将文章用 ruby 加密。
然后在网页端用 javascript 解密。

解密使用了[Gibberish-AES](https://github.com/mdp/gibberish-aes)
这个 javascript 写的 AES 库。
为什么选择了这个库？
[因为](http://stackoverflow.com/questions/8080525/js-ruby-aes-256-symmetry)：

> In the end I used Gibberish AES which has both a Ruby and JavaScript implementation written by the same author

原先实现它自己写了一个 jekyll 的 filter 插件，它在本地工作的很好，但是扔到 github 上的时候就发生了杯具——
github 不支持自定义插件(安全原因)。
所以最终实现为了一个 rake 的 task.
原理很简单，就是把原先使用插件渲染的过程手动执行一遍。
之前看过 ruby 的书，但是基本没有实战过(没需求的缘故，平时都用 python)。
这次也算是有点小收获。

关于这类问题的解决方案，
网上还有说不 push 原始仓库而去 push 本地生成的站点的。
只能说这种方法不符合我的哲学，不然我就去选择用 [octopress](https://github.com/imathis/octopress) 了。

最后顺便吐槽一句，也许是我还不熟悉的缘故，但我目前感觉
irb 和 ipython 真的不在一个档次上……

### slide

上学期英语口语课以及高级逻辑学课上用基于 python 的 [landslide](https://github.com/adamzap/landslide) 做了两个 slide.
基于 html5 的效果确实不错——老实说，除了要自己带一个浏览器外真的很理想——学校里那堆反人类的 IE6 大家都懂的，还不如自己随手用 pyqt 写的一个临时 webkit 浏览器靠谱。

给 blog 添加 slide 功能的动机之一是看到了[这个项目](http://bmcmurray.github.com/hekyll/)。
出于好玩，本想直接拿来用。
不过实际操作时才发现这个项目写 slide 要分成好几个文件，让我觉得很疼，所以最后思量了一下，打算根据 landslide 来自己做一个。

当时用 landslide 的时候并没怎么在意它是怎么工作的，基本上拿来用就是(虽然为了处理一些公式也手动写了个 python 程序来预处理，其中还包括一个方便写 div 的 markdown 扩充预处理)。
这次其实也没有仔细研究。
它的核心其实在 javascript 部分。
用于生成页面的 base.html 其实也是个模板文件，格式和 liquid 很像，所以移植从思路上没大有难度。

结果最纠结的地方还是在 liquid 的表现力上，反复的用 capture ……
可能是因为之前用过的 web 框架是 Karrigell 和 bottle，
感觉写法被受限的这么严重的感觉好微妙(Karrigell 支持的模板方式略多……)，
有点让我想起以前用 ONS 写 Fate 的时候……

其间也发现了 `split` filter 只在本地有效，在 github 上无效的现象。
最终靠 javascript 在载入时重新编排页面内容，完成了 Table of Contents 和页码显示部分。
这么想来，其实我一开始在生成端就干脆不对页面处理，全交给 javascript 来做也可以啊……突然感到 bgm38 了……

当然顺便加了 MathJax 支持，在页面的 head 里加几句就可以，和当时给 landslide 加的方法差不多，MathJax 还是很好用的。

### 有关 git

想学习一个东西，就应该[进入学习区学习它](http://www.yangzhiping.com/tech/learn-program-psychology.html)。

前两天系里发来通知，说是可以申请系里的主页空间。因此当时就想可以用同一份仓库来做这个事情。

原来的分支只有 master(除了加 feature 的时候会分出临时分支)，
在此之上新建了一个 is 分支，用来放系里的主页；
新建了一个 dev 分支，用来保存这个 blog 和系里的主页共同的部分。

dev 分支是从原 master 分支分叉后删掉多余部分改出来的。
原 master 分支被我直接备份出去，然后从 dev 分支重新分出来新 master 分支，
然后再将备份重新复制回来提交……
虽然很不科学，但在这个场合应该是合适的。因为之前没有考虑过分支问题，和 dev 有关的提交与只与 master 有关的提交的历史混在一起，分离太繁琐。

is 分支很容易，直接从 dev 分支分出来即可。

将来 dev 分支进展的话，master 分支可以 merge dev 分支，is 那边要上传 `_site` 生成目录，直接 rebase 就可以了。

merge 和 rebase 的最大区别在于，前者是**在不改变过去的前提下从两个分支创造共同的未来**, 而后者是**改变过去后重新来过以改变现在**。
因为 rebase 会改变历史，因此不应该在公开仓库上使用(嘛，虽然不会有人 clone 并提交这个页面吧，所以其实也可以 rebase，只是每次要加 force 参数不舒服……);
但也因为 rebase 不会产生新分支，因此适合给其他人的项目提交补丁或新特性，提交后维护者只需要直接采纳前进就可以，就不必合并并留下分支记录了。

## 总结

使用 Jekyll 搭建博客拥有非常多的优点，
譬如版本控制、markdown、轻量、静态、可定制、geek。
只要安心看说明，使用门槛其实并不太高。
我觉得是一种很适合喜欢生活里充满乐趣和安逸的人的选择。
