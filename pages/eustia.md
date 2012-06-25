---
layout: page
title: "秽翼的尤斯蒂娅 ONS移植版"
---
{% include JB/setup %}

首发：
[澄空](http://bbs.sumisora.org/read.php?tid=11004749)

机锋首发贴在发布一年后被路过的实习纠察警告并删除233

防止被HX，在自己这里留个备份……

---

ONS指ONScripter，以模拟NScripter为初衷的开源GALGame引擎，虽然功能上比较简单，但其跨平台性比较好。

制作这个版本的目的是为了能在更多的移动设备上体验秽翼的魅力。(我承认每次看到各种平台上跑gal都先介绍月姬和水仙比较眼馋……)

已经实际测试可运行的平台：Android, S60V5, Linux, iOS

---

## 运行截图

![Title](http://pic.yupoo.com/skydark/Bfa9COQg/RKNAT.jpg)

![开头](http://pic.yupoo.com/skydark/Bfa9D6ke/SgnTK.jpg)

![序章Eris](http://pic.yupoo.com/skydark/Bfa9DdNS/HRXLD.jpg)

![选项](http://pic.yupoo.com/skydark/BfaaEsSS/UgNtm.jpg)

![Appendix](http://pic.yupoo.com/skydark/Bfa9E1zz/p57XP.jpg)

![CGMode](http://pic.yupoo.com/skydark/Bfa9E9NV/3mT7L.jpg)

![Music](http://pic.yupoo.com/skydark/Bfa9DvNE/tgEaD.jpg)

![Scene](http://pic.yupoo.com/skydark/Bfa9DnT4/7t3Z2.jpg)

---

## Bug 修复

若CG鉴赏模式缺少最后一张图片、BG显示不正常，请参考[这个贴吧回复](http://tieba.baidu.com/p/1294493256?pid=15559399869&cid=0#15559399869)。

---

## 游戏文件

解压(如果是压缩文件)/复制下载好的游戏文件到你硬盘上的某个目录下，我们假设其名字为eustia。游戏文件包括：

* 脚本文件: [eustia-test0.04.rar](http://u.115.com/file/dn6tae7z)

* 字体文件，或重命名任意你喜欢的ttf字体亦可: [default.ttf](http://u.115.com/file/bh59vk8p)

* 图像文件: [arc.nsa](http://u.115.com/file/e6y9lwnm)

* 声音文件: [arc1.nsa](http://u.115.com/file/bh59o9fv)

* 语音文件, 可选: [arc2.nsa](http://u.115.com/file/aq3wleuk)

* 视频文件, 可选: [video.rar](http://u.115.com/file/bh59vbg3)

如果你是Android平台,请安装
[ONScripter-GBK.apk](http://u.115.com/file/aqk05wat) (此为0619版，可自行搜索新版本使用)，并在SD卡建立ONS的文件夹，将游戏目录复制到这里。

如果你是S60平台，请参考[这里](http://www.opda.net.cn/thread-587174-1-1.html)和[这里](http://kdays.cn/days/read.php?tid=67001)。

如果你需要在win下运行，可以使用[win版的ons-gbk](http://u.115.com/file/aq3wrxy5) ，解压到游戏目录，运行其中run.bat即可使用宽屏模式运行。
如果使用其它版本的onscripter，请注意在20110416版之前它是不支持宽屏模式的。

[这里](http://u.115.com/file/aqzlfp6r)是源代码。感谢最早给onscripter添加gbk支持的John_HE大，以及将其添加进20110416版的kid组的natdon君。

如果你是其它平台的使用者，欢迎反馈使用效果XD

注意：如果你的ONS支持宽屏模式，请打开此模式以获得理想效果，实际显示分辨率将为800x450，推荐设备分辨率为800x480。

Enjoy~~

---

## 致谢

感谢澄空汉化了体验版，让我能提前触摸到这部优秀的作品，也让我不禁产生了移植的想法。

同样的理由感谢七濑Kaede几个月前在贴吧用的秽翼的签名图XD

感谢枫笛汉化组汉化了正式版，感谢你们(用让几乎所有人都吃了一惊的速度)让更多人能够了解这部美妙的作品，也感谢你们[对移植的慷慨支持](http://bbs.sumisora.org/read.php?tid=11002048)，期待在大家的支持建议和批评中，你们最终能让秽翼的汉化完满地还原作品本身的魅力。(P.S.私人吐槽:个人感觉最大的bug其实是版本号XD)

感谢TLWiki的Kingshriek大提供的[python版bgi反汇编工具](http://tlwiki.tsukuru.info/index.php?title=File:Bgi_asdis.zip)，我是基于此工具进行改造完成的移植，如果没有这么清晰的源码，我一定会绕上很大的弯路，十分感谢您。

感谢Android Galgame研究组的各位的支持，感谢H大的沟通联络，感谢H和Gungnir、飞肉、HY等等的测试，还有其他各位组员，非常感谢。

感谢米炮白翅膀和壕三的支持和关注，并特别感谢辉神的爱的力量，我也爱你嗷嗷！

---

## 其它说明

1. 如果你从其它地方下载了之前移植版本的秽翼，请注意这次发生变化的文件是脚本文件和图像文件两部分。如果你不想下载900M+的图像文件，可以用[这个压缩包](http://u.115.com/file/bhzowdpa)代替，解压进原游戏目录即可，当然不要忘记脚本。

2. 系统方面，截图演示的即为全部已实现部分了，考虑到秽翼的系统确实nice，我承认这是一件憾事，这也是我命名版本号为0.04的原因。另外标题画面中的continue目前临时对应的是quick load功能。

3. 缺部分效果。之前移植时虚拟机/wine跑不了脏翅膀本体，我是在实体机录像后对照的(动力之二)；现在wine可以有概率地启动成功……另外有些触发条件是个人猜测的(指appendix和omake出现的触发条件，不是指攻略路线)——无论如何，欢迎发表对比意见。

4. 原作也提供了普屏模式，效果个人不太欣赏但可接受。如果你非常需要(比如你的ONS不支持宽屏模式)，请将90.txt开头的`numalias WIDESCREEN_MODE`后头的1改成0并重新开始游戏。

5. 字体大小是根据原作处理的。如果随意更改字体可能会出现文字溢出等无法预料的情况。如果你非常需要(比如你的机型尺寸比较小)，请在22.txt中查找`*b_Size`，后头接着的`mov %1002, XX`就是对应的字体大小设置。其中`if %1001 = 5 mov %1002, 28`对应的是默认大小。另外，字体大小的设置在每个脚本文件的开始处，因此修改后读取存档不会立刻生效。

6. 如需开启跳章节功能请将90.txt中的`numalias DEBUG_MODE_EX`后头的0改成1。另外请注意开启跳章节时会跳过章节中的选择项(如果有的话)，故请小心。

7. 如果你对脚本文件中10.txt的生成感兴趣，可以参考[这里](http://u.115.com/file/aqzc6rwb)。当然实际上改的很糟糕，边用边改，理解完全是错误的，只是恰好work了而已，所以也算不上“可以参考”了……基于python2.6,执行格式是`python bgidis.py aiy*`，然后会生成`aiy*.bss`，合并即得10.txt. 注意aiy40300反编译会出错，是因为用来确定脚本结束位置的1B000000定位错误，未修正，直接修改/删除掉脚本最末尾出现的1B000000可以解决。

8. 我的水平非常有限，挨骂在所难免，有bug欢迎汇报，直接回复本帖或mailto:skydarkever at gmail.com均可。

9. 附[日文脚本下载](http://115.com/file/clop7cb0)，解压替换掉游戏中的10.txt即可。但你仍需要GBK版的模拟器运行。如果需要在日文原版引擎上运行，请自行转码为Shift-JIS.

感谢大家的支持，祝各位无论何地都能感受到八月充满诚意的新作的魅力。

---

{% include JB/comments %}



