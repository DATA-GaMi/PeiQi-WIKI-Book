(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{2786:function(t,v,_){"use strict";_.r(v);var s=_(64),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"文件结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件结构"}},[t._v("#")]),t._v(" 文件结构")]),t._v(" "),v("h2",{attrs:{id:"关于"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[t._v("#")]),t._v(" 关于")]),t._v(" "),v("p",[t._v("每一个类型的文件都有自己的结构和特性，通过附加式隐写中的原理我们可以得知 操作系统识别的过程中是，从文件头标志，到文件的结束标志位，当系统识别到图片的结束标志位后，则默认不再继续识别。所以，对于计算机来说文件的结构影响着对文件的属性判断，在CTF中也有针对文件结构的一些题目，例如PNG文件修改宽高，文件头缺失修复等。")]),t._v(" "),v("h2",{attrs:{id:"文件署名域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件署名域"}},[t._v("#")]),t._v(" 文件署名域")]),t._v(" "),v("p",[t._v("文件的前8字节为文件的署名域，例如PNG的十六进制值为:")]),t._v(" "),v("div",{staticClass:"language-java line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code",[v("span",{pre:!0,attrs:{class:"token number"}},[t._v("89")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("e "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("47")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0d")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("a "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("a "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("a \n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("我们使用工具打开任意一张PNG可以发现这个位置的结构")]),t._v(" "),v("p",[v("img",{attrs:{src:_(920),alt:"img"}})]),t._v(" "),v("h2",{attrs:{id:"数据块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据块"}},[t._v("#")]),t._v(" 数据块")]),t._v(" "),v("p",[t._v("数据块分为两种: 关键数据块与辅助数据块，每个数据块都由4个域组成")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("名称")])]),t._v(" "),v("th",[v("strong",[t._v("字节数")])]),t._v(" "),v("th",[v("strong",[t._v("说明")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Length(长度)")]),t._v(" "),v("td",[t._v("4字节")]),t._v(" "),v("td",[t._v("指定数据块中数据域的长度，其长度不超过(231−1)(231−1)字节")])]),t._v(" "),v("tr",[v("td",[t._v("Chunk Type Code(数据块类型码)")]),t._v(" "),v("td",[t._v("4字节")]),t._v(" "),v("td",[t._v("数据块类型码由ASCII字母(A-Z和a-z)组成")])]),t._v(" "),v("tr",[v("td",[t._v("Chunk Data(数据块实际内容")]),t._v(" "),v("td",[t._v("可变长度")]),t._v(" "),v("td",[t._v("存储按照Chunk Type Code指定的数据")])]),t._v(" "),v("tr",[v("td",[t._v("CRC(循环冗余检测")]),t._v(" "),v("td",[t._v("4字节")]),t._v(" "),v("td",[t._v("存储用来检测是否有错误的循环冗余码")])])])]),t._v(" "),v("p",[t._v("一个4字节的CRC（循环冗余校验）计算，在所述块的前面的字节，包括该块类型的代码和数据块的数据字段，但是不包括长度字段。 CRC始终存在，即使不包含数据块。 CRC的值为 Chunk Type Code域和Chunk Data域中的数据进行计算，有时会通过检验CRC来验证文件是否被修改过。")]),t._v(" "),v("h2",{attrs:{id:"关键数据块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关键数据块"}},[t._v("#")]),t._v(" 关键数据块")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("数据块符号")])]),t._v(" "),v("th",[v("strong",[t._v("数据块名称")])]),t._v(" "),v("th",[v("strong",[t._v("多数据块")])]),t._v(" "),v("th",[v("strong",[t._v("是否可选")])]),t._v(" "),v("th",[v("strong",[t._v("位置限制")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("IHDR")]),t._v(" "),v("td",[t._v("文件头数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("第一块")])]),t._v(" "),v("tr",[v("td",[t._v("PLTE")]),t._v(" "),v("td",[t._v("调色板数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("在IDAT之前")])]),t._v(" "),v("tr",[v("td",[t._v("IDAT")]),t._v(" "),v("td",[t._v("图像数据块")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("与其他IDAT连续")])]),t._v(" "),v("tr",[v("td",[t._v("IEND")]),t._v(" "),v("td",[t._v("图像结束数据")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("最后一个数据块")])])])]),t._v(" "),v("div",{staticClass:"language-java line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code",[v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IHDR")]),t._v("：文件头数据块"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("IHDR")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header chunk"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：它包含有"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PNG")]),t._v("文件中存储的图像数据的基本信息，并要作为第一个数据块出现在"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PNG")]),t._v("数据流中，而且一个"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PNG")]),t._v("数据流中只能有一个文件头数据块。\n"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PLTE")]),t._v("：调色板数据块"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("PLTE")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("palette chunk"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("包含有与索引彩色图像"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("indexed"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color image"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("相关的彩色变换数据，它仅与索引彩色图像有关，而且要放在图像数据块"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image data chunk"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("之前。"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PLTE")]),t._v("数据块是定义图像的调色板信息，"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PLTE")]),t._v("可以包含"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("个调色板信息，每一个调色板信息由"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("个字节组成。\n"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IDAT")]),t._v("：图像数据块"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("IDAT")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image data chunk"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：它存储实际的数据，在数据流中可包含多个连续顺序的图像数据块。"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IDAT")]),t._v("存放着图像真正的数据信息，因此，如果能够了解"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IDAT")]),t._v("的结构，我们就可以很方便的生成"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PNG")]),t._v("图像。\n"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IEND")]),t._v("：图像结束数据"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("IEND")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image trailer chunk"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：它用来标记"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PNG")]),t._v("文件或者数据流已经结束，并且必须要放在文件的尾部。如果我们仔细观察"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PNG")]),t._v("文件，我们会发现，文件的结尾"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("个字符看起来总应该是这样的："),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0000000049454E44")]),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AE426082")]),t._v("，不难明白，由于数据块结构的定义，"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IEND")]),t._v("数据块的长度总是"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("（"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v("，除非人为加入信息），数据标识总是"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IEND")]),t._v("（"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("E "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),t._v("），因此，"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CRC")]),t._v("码也总是"),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AE")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("82")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br")])]),v("h2",{attrs:{id:"综合图表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#综合图表"}},[t._v("#")]),t._v(" 综合图表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("数据块符号")])]),t._v(" "),v("th",[v("strong",[t._v("数据块名称")])]),t._v(" "),v("th",[v("strong",[t._v("多数据块")])]),t._v(" "),v("th",[v("strong",[t._v("可选否")])]),t._v(" "),v("th",[v("strong",[t._v("位置限制")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("IHDR")]),t._v(" "),v("td",[t._v("文件头数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("第一块")])]),t._v(" "),v("tr",[v("td",[t._v("cHRM")]),t._v(" "),v("td",[t._v("基色和白色点数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("在PLTE和IDAT之前")])]),t._v(" "),v("tr",[v("td",[t._v("gAMA")]),t._v(" "),v("td",[t._v("图像γ数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("在PLTE和IDAT之前")])]),t._v(" "),v("tr",[v("td",[t._v("sBIT")]),t._v(" "),v("td",[t._v("样本有效位数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("在PLTE和IDAT之前")])]),t._v(" "),v("tr",[v("td",[t._v("PLTE")]),t._v(" "),v("td",[t._v("调色板数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("在IDAT之前")])]),t._v(" "),v("tr",[v("td",[t._v("bKGD")]),t._v(" "),v("td",[t._v("背景颜色数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("在PLTE之后IDAT之前")])]),t._v(" "),v("tr",[v("td",[t._v("hIST")]),t._v(" "),v("td",[t._v("图像直方图数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("在PLTE之后IDAT之前")])]),t._v(" "),v("tr",[v("td",[t._v("tRNS")]),t._v(" "),v("td",[t._v("图像透明数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("在PLTE之后IDAT之前")])]),t._v(" "),v("tr",[v("td",[t._v("oFFs")]),t._v(" "),v("td",[t._v("(专用公共数据块)")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("在IDAT之前")])]),t._v(" "),v("tr",[v("td",[t._v("pHYs")]),t._v(" "),v("td",[t._v("物理像素尺寸数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("在IDAT之前")])]),t._v(" "),v("tr",[v("td",[t._v("sCAL")]),t._v(" "),v("td",[t._v("(专用公共数据块)")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("在IDAT之前")])]),t._v(" "),v("tr",[v("td",[t._v("IDAT")]),t._v(" "),v("td",[t._v("图像数据块")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("与其他IDAT连续")])]),t._v(" "),v("tr",[v("td",[t._v("tIME")]),t._v(" "),v("td",[t._v("图像最后修改时间数据块")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("无限制")])]),t._v(" "),v("tr",[v("td",[t._v("tEXt")]),t._v(" "),v("td",[t._v("文本信息数据块")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("无限制")])]),t._v(" "),v("tr",[v("td",[t._v("zTXt")]),t._v(" "),v("td",[t._v("压缩文本数据块")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("无限制")])]),t._v(" "),v("tr",[v("td",[t._v("fRAc")]),t._v(" "),v("td",[t._v("(专用公共数据块)")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("无限制")])]),t._v(" "),v("tr",[v("td",[t._v("gIFg")]),t._v(" "),v("td",[t._v("(专用公共数据块)")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("无限制")])]),t._v(" "),v("tr",[v("td",[t._v("gIFt")]),t._v(" "),v("td",[t._v("(专用公共数据块)")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("无限制")])]),t._v(" "),v("tr",[v("td",[t._v("gIFx")]),t._v(" "),v("td",[t._v("(专用公共数据块)")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("无限制")])]),t._v(" "),v("tr",[v("td",[t._v("IEND")]),t._v(" "),v("td",[t._v("图像结束数据")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("最后一个数据块")])])])])])}),[],!1,null,null,null);v.default=a.exports},920:function(t,v,_){t.exports=_.p+"assets/img/1667876895336-a4686af4-451b-448e-9636-c4ab223b23c6.a3d6cac3.png"}}]);