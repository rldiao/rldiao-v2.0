(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(e,a,t){"use strict";t.r(a);t(184);var n=t(7),r=t.n(n),l=t(0),o=t.n(l),m=t(165),c=t(195),i=t(196),s=t(197),u=t(198),d=t(199),f=t(185),g=t.n(f),E=function(e){function a(){var a;return(a=e.call(this)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a}return r()(a,e),a.prototype.render=function(){return o.a.createElement(m.a,null,o.a.createElement("div",{className:g.a.container},o.a.createElement(c.a,{className:g.a.form},o.a.createElement("div",{className:g.a.header},"Send me an email"),o.a.createElement(i.a,null,o.a.createElement(s.a,{for:"name",className:g.a.labelText},"Name"),o.a.createElement(u.a,{type:"text",name:"name",bsSize:"lg",onChange:this.handleChange})),o.a.createElement(i.a,null,o.a.createElement(s.a,{for:"email",className:g.a.labelText},"Email"),o.a.createElement(u.a,{type:"email",name:"email",bsSize:"lg",onChange:this.handleChange})),o.a.createElement(i.a,null,o.a.createElement(s.a,{for:"subject",className:g.a.labelText},"Subject"),o.a.createElement(u.a,{type:"text",name:"subject",bsSize:"lg",onChange:this.handleChange})),o.a.createElement(i.a,null,o.a.createElement(s.a,{for:"message",className:g.a.labelText},"Message"),o.a.createElement(u.a,{type:"textarea",name:"message",bsSize:"lg",rows:"5",onChange:this.handleChange})),o.a.createElement("div",{className:g.a.submitContainer},o.a.createElement(d.a,{color:"primary",size:"lg"},"Submit")))))},a}(l.Component);a.default=E},156:function(e,a,t){"use strict";a.a={home:"/",about:"/",blog:"/blog/",notfound:"/404/",comingsoon:"/comingSoon/"}},157:function(e,a,t){e.exports=t.p+"static/resume-c8c7157cd0f9f88d78e848365123bc03.pdf"},158:function(e,a,t){"use strict";a.a={github:"https://github.com/rldiao",instagram:"https://www.instagram.com/robertdiao/?hl=en",twitter:"/404/",linkedin:"https://www.linkedin.com/in/robertdiao/",email:"mailto:rdiao.work@gmail.com"}},159:function(e,a,t){e.exports={spacer:"navbar-module--spacer--33TaB",toolbar:"navbar-module--toolbar--3AehQ",toolbarNavigation:"navbar-module--toolbarNavigation--frybO",toolbarLogo:"navbar-module--toolbarLogo--2vSpa",toolbarNavigationItems:"navbar-module--toolbarNavigationItems--16E03",drawerToggleButton:"navbar-module--drawerToggleButton--1tHGC"}},160:function(e,a,t){e.exports={menuButton:"drawerToggleButton-module--menuButton--2EfrK",menuLine:"drawerToggleButton-module--menuLine--2Xsbx"}},161:function(e,a,t){},162:function(e,a,t){e.exports={backdrop:"backdrop-module--backdrop--11_qL"}},163:function(e,a,t){e.exports={footerBar:"footer-module--footerBar--3g2Nk",footerText:"footer-module--footerText--dvj7L",footerNavigation:"footer-module--footerNavigation--1kOaW",footerNavigationItem:"footer-module--footerNavigationItem--2F8Sr"}},164:function(e,a,t){e.exports={container:"layout-module--container--1eHYB",content:"layout-module--content--i0A67",navBar:"layout-module--navBar--6U6gW",toggle:"layout-module--toggle--U26TG",headerSpacer:"layout-module--headerSpacer--1fIxv"}},165:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(7),o=t.n(l),m=t(159),c=t.n(m),i=t(160),s=t.n(i),u=function(e){return r.a.createElement("button",{className:s.a.menuButton,onClick:e.click},r.a.createElement("div",{className:s.a.menuLine}),r.a.createElement("div",{className:s.a.menuLine}),r.a.createElement("div",{className:s.a.menuLine}))},d=t(156),f=t(157),g=t.n(f),E=function(e){return r.a.createElement("header",{className:c.a.toolbar},r.a.createElement("nav",{className:c.a.toolbarNavigation},r.a.createElement("div",{className:c.a.toolbarLogo},r.a.createElement("a",{href:d.a.about},"Robert Diao")),r.a.createElement("div",{className:c.a.spacer}),r.a.createElement("div",{className:c.a.toolbarNavigationItems},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:d.a.about},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:d.a.blog},"Blog")),r.a.createElement("li",null,r.a.createElement("a",{href:g.a,target:"_blank",rel:"noopener noreferrer"},"Resume")))),r.a.createElement("div",{className:c.a.drawerToggleButton},r.a.createElement(u,{click:e.drawerClickHandler}))))};t(161);function b(e){var a="drawer";return e.show&&(a="drawer open"),r.a.createElement("nav",{className:a},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:d.a.about},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:d.a.blog},"Blog")),r.a.createElement("li",null,r.a.createElement("a",{href:g.a,target:"_blank",rel:"noopener noreferrer"},"Resume"))))}var h=t(162),v=t.n(h);function p(e){return r.a.createElement("div",{className:v.a.backdrop,onClick:e.drawerClickHandler})}var N=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={sideDrawerOpen:!1},a.drawerToggleClickHander=function(){a.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},a}return o()(a,e),a.prototype.render=function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(p,{drawerClickHandler:this.drawerToggleClickHander})),r.a.createElement("div",null,r.a.createElement(E,{drawerClickHandler:this.drawerToggleClickHander}),r.a.createElement(b,{show:this.state.sideDrawerOpen}),e)},a}(n.Component),w=t(163),k=t.n(w),C=t(158);function x(){return r.a.createElement("footer",{className:k.a.footer},r.a.createElement("div",{className:k.a.footerBar},r.a.createElement("div",{className:k.a.footerText},"Stay in touch!"),r.a.createElement("div",{className:k.a.footerNavigation},r.a.createElement("ul",null,r.a.createElement("li",{className:k.a.footerNavigationItem},r.a.createElement("a",{href:C.a.github},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("li",{className:k.a.footerNavigationItem},r.a.createElement("a",{href:C.a.instagram},r.a.createElement("i",{className:"fab fa-instagram"}))),r.a.createElement("li",{className:k.a.footerNavigationItem},r.a.createElement("a",{href:C.a.twitter},r.a.createElement("i",{className:"fab fa-twitter"}))),r.a.createElement("li",{className:k.a.footerNavigationItem},r.a.createElement("a",{href:C.a.linkedin},r.a.createElement("i",{className:"fab fa-linkedin-in"}))),r.a.createElement("li",{className:k.a.footerNavigationItem},r.a.createElement("a",{href:C.a.email},r.a.createElement("i",{className:"far fa-envelope"})))))))}var y=t(166),T=t(164),S=t.n(T);a.a=function(e){var a=e.children;e.data;return r.a.createElement("div",{className:S.a.container},r.a.createElement(y.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.1/css/all.css",integrity:"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",crossorigin:"anonymous"})),r.a.createElement(N,null),r.a.createElement("div",{className:S.a.headerSpacer}),r.a.createElement("div",{className:S.a.content},a),r.a.createElement(x,null))}},185:function(e,a,t){e.exports={container:"email-page-module--container--2IhHW",form:"email-page-module--form--3QJo_",header:"email-page-module--header--3m-Xm",labelText:"email-page-module--labelText--1IBpc",textArea:"email-page-module--textArea--aGmjO",submitContainer:"email-page-module--submitContainer--K6-3O"}}}]);
//# sourceMappingURL=component---src-pages-email-js-b0ec77d8e33347721962.js.map