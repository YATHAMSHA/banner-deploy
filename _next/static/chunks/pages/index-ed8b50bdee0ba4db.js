(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9459)}])},9459:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return g},default:function(){return p}});var a=t(5893),i=t(7294),c=t(9008),o=t.n(c),s=t(7810),l=t.n(s),r=e=>{let{title:n,description:t,cta:i,image:c,background:o,onEdit:s}=e;return(0,a.jsxs)("div",{className:l().banner,style:{background:o},children:[(0,a.jsx)("img",{src:c,alt:n,width:600,height:300,className:l().image}),(0,a.jsxs)("div",{className:l().content,children:[(0,a.jsx)("h2",{className:l().title,children:n}),(0,a.jsx)("p",{className:l().description,children:t}),(0,a.jsx)("button",{className:l().cta,children:i})]}),(0,a.jsx)("button",{onClick:s,className:l().editButton,children:"✏️"})]})},d=t(3497),u=t.n(d),m=e=>{let{ad:n,onSave:t,onClose:c}=e,[o,s]=(0,i.useState)(n),l=e=>{let{name:n,value:t}=e.target;s({...o,[n]:t})};return(0,a.jsx)("div",{className:u().bottomSheet,children:(0,a.jsxs)("div",{className:u().content,children:[(0,a.jsx)("h2",{children:"Edit Ad Banner"}),(0,a.jsx)("input",{name:"title",value:o.title,onChange:l,placeholder:"Title"}),(0,a.jsx)("textarea",{name:"description",value:o.description,onChange:l,placeholder:"Description"}),(0,a.jsx)("input",{name:"cta",value:o.cta,onChange:l,placeholder:"CTA"}),(0,a.jsx)("input",{name:"image",value:o.image,onChange:l,placeholder:"Image URL"}),(0,a.jsx)("input",{name:"background",value:o.background,onChange:l,placeholder:"Background Color"}),(0,a.jsx)("button",{onClick:()=>{t(o),c()},children:"Save"}),(0,a.jsx)("button",{onClick:c,children:"Cancel"})]})})},_=t(2003),h=t.n(_),g=!0,p=e=>{let{ads:n}=e,[t,c]=(0,i.useState)(n),[s,l]=(0,i.useState)(null),d=e=>{l({...t[e],index:e})};return(0,a.jsxs)("div",{className:h().container,children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Ad-Banner"}),(0,a.jsx)("link",{rel:"icon",href:"/images/favicon.jpg"})]}),(0,a.jsx)("h1",{className:h().title,children:"Ad Banners"}),t.map((e,n)=>(0,a.jsx)(r,{title:e.title,description:e.description,cta:e.cta,image:e.image,background:e.background,imageWidth:e.imageWidth,imageHeight:e.imageHeight,onEdit:()=>d(n)},n)),s&&(0,a.jsx)(m,{ad:s,onSave:e=>{let n=[...t];n[s.index]=e,c(n),l(null)},onClose:()=>l(null)})]})}},7810:function(e){e.exports={banner:"BannerImageComp_banner__7ux7G",image:"BannerImageComp_image__6HVj1",content:"BannerImageComp_content__F9Ij1",title:"BannerImageComp_title__K_4AE",description:"BannerImageComp_description__PdcGx",cta:"BannerImageComp_cta__ZsdMP",editButton:"BannerImageComp_editButton__72iJW"}},3497:function(e){e.exports={bottomSheet:"EditBannerTemplateBs_bottomSheet__nUBgJ",content:"EditBannerTemplateBs_content__hIR3V"}},2003:function(e){e.exports={container:"Home_container__9OuOz",title:"Home_title__YEn0u"}},9008:function(e,n,t){e.exports=t(7828)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);