(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=a(156),c=a(171),s=a.n(c),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleFocus=function(){a.setState(function(e){return{isFocused:!e.isFocused}})},a.state={isFocused:!0},a}return i()(t,e),t.prototype.render=function(){var e=this,t=this.state.isFocused?"black":"rgba(231, 90, 124, 1)";return r.a.createElement("div",{className:s.a.container,onClick:function(){return Object(l.navigate)(e.props.newPage)},onMouseOver:this.toggleFocus,onMouseOut:this.toggleFocus},r.a.createElement("span",{className:s.a.textContainer,style:{color:t}},this.props.text))},t}(n.Component),d=a(153);function m(){return r.a.createElement(d.a,null,r.a.createElement(u,{text:"Hello"}))}a.d(t,"default",function(){return m})},144:function(e,t,a){e.exports=a.p+"static/resume-c493a75523308734c967d5e588042662.pdf"},145:function(e,t,a){"use strict";t.a={github:"https://github.com/rldiao",instagram:"https://www.instagram.com/robertdiao/?hl=en",twitter:"/404/",linkedin:"https://www.linkedin.com/in/robertdiao/",email:"mailto:rdiao.work@gmail.com"}},146:function(e,t,a){e.exports={container:"layout-module--container--1eHYB",navBar:"layout-module--navBar--6U6gW",toggle:"layout-module--toggle--U26TG",headerSpacer:"layout-module--headerSpacer--1fIxv"}},147:function(e,t,a){e.exports={spacer:"navbar-module--spacer--33TaB",toolbar:"navbar-module--toolbar--3AehQ",toolbarNavigation:"navbar-module--toolbarNavigation--frybO",toolbarLogo:"navbar-module--toolbarLogo--2vSpa",toolbarNavigationItems:"navbar-module--toolbarNavigationItems--16E03",drawerToggleButton:"navbar-module--drawerToggleButton--1tHGC"}},148:function(e,t,a){e.exports={menuButton:"drawerToggleButton-module--menuButton--2EfrK",menuLine:"drawerToggleButton-module--menuLine--2Xsbx"}},149:function(e,t,a){},150:function(e,t,a){e.exports={backdrop:"backdrop-module--backdrop--11_qL"}},151:function(e,t,a){e.exports={footerBar:"footer-module--footerBar--3g2Nk",footerText:"footer-module--footerText--dvj7L",footerNavigation:"footer-module--footerNavigation--1kOaW",footerNavigationItem:"footer-module--footerNavigationItem--2F8Sr"}},152:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(168)),o=n(a(169)),i=n(a(7)),l=n(a(52)),c=n(a(53)),s=n(a(4)),u=n(a(0)),d=a(22),m=a(156);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var p={activeClassName:s.default.string,activeStyle:s.default.object},v=function(e){function t(t){var a;a=e.call(this)||this,(0,c.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,m.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,l=t.onClick,c=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),p=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),h=f(a);return u.default.createElement(d.Link,(0,o.default)({to:h,state:s,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,m.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:s,replace:p})),!0}},v))},t}(u.default.Component);v.propTypes=(0,o.default)({},p,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var h=v;t.default=h;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(146),i=a.n(o),l=a(7),c=a.n(l),s=a(147),u=a.n(s),d=a(148),m=a.n(d),f=function(e){return r.a.createElement("button",{className:m.a.menuButton,onClick:e.click},r.a.createElement("div",{className:m.a.menuLine}),r.a.createElement("div",{className:m.a.menuLine}),r.a.createElement("div",{className:m.a.menuLine}))},p={home:"/",about:"/",blog:"/blog/",notfound:"/404/",comingsoon:"/comingSoon/"},v=a(144),h=a.n(v),g=function(e){return r.a.createElement("header",{className:u.a.toolbar},r.a.createElement("nav",{className:u.a.toolbarNavigation},r.a.createElement("div",{className:u.a.toolbarLogo},r.a.createElement("a",{href:p.about},"Robert Diao")),r.a.createElement("div",{className:u.a.spacer}),r.a.createElement("div",{className:u.a.toolbarNavigationItems},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:p.about},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:p.comingsoon},"Blog")),r.a.createElement("li",null,r.a.createElement("a",{href:h.a,target:"_blank",rel:"noopener noreferrer"},"Resume")))),r.a.createElement("div",{className:u.a.drawerToggleButton},r.a.createElement(f,{click:e.drawerClickHandler}))))};a(149);function b(e){var t="drawer";return e.show&&(t="drawer open"),r.a.createElement("nav",{className:t},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:p.about},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:p.comingsoon},"Blog")),r.a.createElement("li",null,r.a.createElement("a",{href:h.a,target:"_blank",rel:"noopener noreferrer"},"Resume"))))}var E=a(150),w=a.n(E);function y(e){return r.a.createElement("div",{className:w.a.backdrop,onClick:e.drawerClickHandler})}var N=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={sideDrawerOpen:!1},t.drawerToggleClickHander=function(){t.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},t}return c()(t,e),t.prototype.render=function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(y,{drawerClickHandler:this.drawerToggleClickHander})),r.a.createElement("div",null,r.a.createElement(g,{drawerClickHandler:this.drawerToggleClickHander}),r.a.createElement(b,{show:this.state.sideDrawerOpen}),e)},t}(n.Component),k=a(151),C=a.n(k),x=a(145);function T(){return r.a.createElement("footer",null,r.a.createElement("div",{className:C.a.footerBar},r.a.createElement("div",{className:C.a.footerText},"Stay in touch!"),r.a.createElement("div",{className:C.a.footerNavigation},r.a.createElement("ul",null,r.a.createElement("li",{className:C.a.footerNavigationItem},r.a.createElement("a",{href:x.a.github},r.a.createElement("i",{class:"fab fa-github"}))),r.a.createElement("li",{className:C.a.footerNavigationItem},r.a.createElement("a",{href:x.a.instagram},r.a.createElement("i",{class:"fab fa-instagram"}))),r.a.createElement("li",{className:C.a.footerNavigationItem},r.a.createElement("a",{href:x.a.twitter},r.a.createElement("i",{class:"fab fa-twitter"}))),r.a.createElement("li",{className:C.a.footerNavigationItem},r.a.createElement("a",{href:x.a.linkedin},r.a.createElement("i",{class:"fab fa-linkedin-in"}))),r.a.createElement("li",{className:C.a.footerNavigationItem},r.a.createElement("a",{href:x.a.email},r.a.createElement("i",{class:"far fa-envelope"})))))))}var _=a(154);t.a=function(e){var t=e.children;e.data;return r.a.createElement("div",{className:i.a.container},r.a.createElement(_.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.1/css/all.css",integrity:"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",crossorigin:"anonymous"})),r.a.createElement(N,null),r.a.createElement("div",{className:i.a.headerSpacer}),t,r.a.createElement(T,null))}},156:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(152),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(157),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(48);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,a){var n;e.exports=(n=a(170))&&n.default||n},168:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},169:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},170:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(68),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},171:function(e,t,a){e.exports={container:"menuButton-module--container--1DIdD",textContainer:"menuButton-module--textContainer--NkkzH"}}}]);
//# sourceMappingURL=component---src-pages-test-js-066074e718eaf2370319.js.map