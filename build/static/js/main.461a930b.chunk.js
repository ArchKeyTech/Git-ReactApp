(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,s,t){},18:function(e,s,t){},19:function(e,s,t){},20:function(e,s,t){},22:function(e,s,t){},23:function(e,s,t){"use strict";t.r(s);var c=t(2),n=t.n(c),i=t(11),a=t.n(i),r=(t(18),t(5)),l=t(6),o=t(3),j=t(8),d=t(7),h=t(4),u=(t(19),t.p+"static/media/load.04c24afa.gif"),b=t.p+"static/media/github.896c50f9.jpg",m=t.p+"static/media/gitlab.d6a1aea1.jpg",p=(t(20),t(1));var O=function(e){var s=e.userDetails,t=e.setVcs,c=e.chosenVcs,n=["GitHub","GitLab"],i=0,a=s.map((function(e,s){var a;return"GitHub"===n[i]?a=Object(p.jsxs)("div",{className:i===c?"user-block display":"user-block",children:[Object(p.jsx)("h3",{className:"vcs-title",children:"GitHub"}),"error"in e?Object(p.jsx)("p",{children:e.error}):Object(p.jsxs)("p",{className:"user-name",id:i,onClick:function(e){return t(e)},children:["Account: ",e.login]})]},s):"GitLab"===n[i]&&(a=Object(p.jsxs)("div",{className:i===c?"user-block display":"user-block",children:[Object(p.jsx)("h3",{className:"vcs-title",children:"GitLab"}),"error"in e?Object(p.jsx)("p",{children:e.error}):Object(p.jsxs)("p",{className:"user-name",id:i,onClick:function(e){return t(e)},children:["Account: ",e.username]})]},s)),i++,a}));function r(e){var s=document.getElementsByClassName("display");s.length>0&&(s[0].className="user-block",e.parentNode.className+=" display")}for(var l=document.getElementsByClassName("user-name"),o=0;o<l.length;o++)l[o].addEventListener("click",r(l[o]));return Object(p.jsx)("div",{className:"users-row",children:a})};t(22);var x=function(e){var s=e.repoContent;return"error"in s[0]?Object(p.jsx)("div",{children:s[0].error}):s.map((function(e,s){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"repo-div",children:[Object(p.jsxs)("div",{className:"repo-title",children:[Object(p.jsx)("p",{className:"repo-name",children:e.repoName}),Object(p.jsxs)("p",{children:[" ",Object(p.jsxs)("span",{className:"repo-description",children:[" ",e.repoDesc," "]})]}),Object(p.jsx)("div",{className:"repo-date",children:Object(p.jsxs)("p",{children:["Created on: ",e.repoBirth]})})]}),Object(p.jsx)("div",{className:"repo-commit-title",children:Object(p.jsx)("p",{children:"Commit Feed"})}),Object(p.jsx)("div",{className:"commit-msg-div",children:Object(p.jsx)("ul",{children:e.commitMsg.map((function(e,s){return Object(p.jsx)("li",{className:"commit-msg",children:e},s)}))})})]})},s)}))},g=(t(10),t(13)),v=t(12),f=function(e){var s=e.userDetails,t=e.chosenVcs;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"top-container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("span",{children:Object(p.jsx)("a",{href:"html_url"in s[t]?s[t].html_url:s[t].web_url,children:Object(p.jsx)("button",{className:"profile-btn",children:"Visit Profile"})})}),Object(p.jsx)("div",{className:"profile-pic-div",children:Object(p.jsx)("img",{alt:"profile pic",className:"profile-pic",src:s[t].avatar_url})}),Object(p.jsx)("div",{className:"user-details",children:Object(p.jsxs)("ul",{className:"user-detail-list",children:[Object(p.jsx)("li",{children:Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{className:"icons",children:[" ",Object(p.jsx)(h.c,{})," "]}),"\u2003","login"in s[t]?s[t].login:s[t].username]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{className:"icons",children:Object(p.jsx)(v.a,{})}),"\u2003 ",s[t].bio]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{className:"icons",children:Object(p.jsx)(g.a,{})}),"\u2003 ",s[t].location]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{className:"icons",children:Object(p.jsx)(h.b,{})}),"\u2003","twitter"in s[t]?s[t].twitter:s[t].twitter_username]})})]})})]})}),Object(p.jsxs)("div",{className:"lower-container",children:[Object(p.jsxs)("p",{className:"follower",children:["Followers: ",s[t].followers]}),Object(p.jsxs)("p",{className:"following",children:["Following: ",s[t].following]})]})]})},N=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=s.call(this,e)).state={isLoaded:!1,repoContent:null},c}return Object(l.a)(t,[{key:"getRepos",value:function(e,s){var t=this;0===this.props.chosenVcs?fetch("/github/repo/".concat(e)).then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,repoContent:e})})).catch((function(e){console.log(e)})):1===this.props.chosenVcs&&fetch("/gitlab/repo/".concat(s)).then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,repoContent:e})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this.props.userDetails[0].login,s=this.props.userDetails[1].username;this.getRepos(e,s)}},{key:"componentDidUpdate",value:function(e){var s=this.props.userDetails[0].login,t=this.props.userDetails[1].username;this.props.chosenVcs!==e.chosenVcs&&(this.setState({isLoaded:!1}),this.getRepos(s,t))}},{key:"render",value:function(){var e=this.state,s=e.isLoaded,t=e.repoContent,c=this.props,n=c.userDetails,i=c.chosenVcs;return s?Object(p.jsxs)("div",{className:"profile-div",children:[Object(p.jsx)(f,{userDetails:n,chosenVcs:i}),Object(p.jsx)("div",{className:"repos-main-title",children:Object(p.jsx)("h2",{children:"Repositories"})}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{repoContent:t})})]}):Object(p.jsxs)("div",{className:"profile-div",children:[Object(p.jsx)(f,{userDetails:n,chosenVcs:i}),Object(p.jsxs)("div",{className:"loading-block",children:[Object(p.jsx)("h2",{children:"Repos on the way..."}),Object(p.jsx)("img",{className:"loading-img",src:u,alt:"loading gif"})]})]})}}]),t}(n.a.Component),k=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){var e;return Object(r.a)(this,t),(e=s.call(this)).handleInputChange=e.handleInputChange.bind(Object(o.a)(e)),e.handleOnSubmit=e.handleOnSubmit.bind(Object(o.a)(e)),e.getUser=e.getUser.bind(Object(o.a)(e)),e.setVcs=e.setVcs.bind(Object(o.a)(e)),e.state={inputName:"",busyLoading:!1,isLoaded:!1,userDetails:null,chosenVcs:null},e}return Object(l.a)(t,[{key:"handleInputChange",value:function(e){this.setState({inputName:e.target.value})}},{key:"getUser",value:function(){var e=this;fetch("/user/"+this.state.inputName).then((function(e){return e.json()})).then((function(s){e.setState({busyLoading:!1,isLoaded:!0,userDetails:s})})).catch((function(e){console.log(e)}))}},{key:"handleOnSubmit",value:function(e){e.preventDefault(),this.setState({busyLoading:!0,isLoaded:!1,userDetails:null,chosenVcs:null}),this.getUser()}},{key:"setVcs",value:function(e){this.setState({chosenVcs:parseInt(e.target.id)})}},{key:"render",value:function(){var e=this,s=this.state,t=s.isLoaded,c=s.busyLoading,n=s.chosenVcs,i=s.userDetails;return t?Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"heading",children:Object(p.jsx)("h1",{children:"Search Engine"})}),Object(p.jsxs)("div",{className:"main-page",children:[Object(p.jsx)("div",{className:"search-block",children:Object(p.jsxs)("form",{className:"search",onSubmit:function(s){return e.handleOnSubmit(s)},children:[Object(p.jsx)("input",{type:"text",required:!0,onChange:function(s){return e.handleInputChange(s)},name:"input"}),Object(p.jsx)("button",{type:"submit",className:"search-btn",children:Object(p.jsx)(h.a,{})})]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("span",{children:[Object(p.jsx)("img",{className:"background-img",src:b,alt:"github-logo"}),Object(p.jsx)("img",{className:"background-img",src:m,alt:"gitlab-logo"})]})}),Object(p.jsx)(O,{userDetails:i,setVcs:this.setVcs,chosenVcs:n}),null===n?null:Object(p.jsx)(N,{userDetails:i,chosenVcs:n})]})]}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"heading",children:Object(p.jsx)("h1",{children:"Search Engine"})}),Object(p.jsxs)("div",{className:"main-page",children:[Object(p.jsx)("div",{className:"search-block",children:Object(p.jsxs)("form",{className:"search",onSubmit:function(s){return e.handleOnSubmit(s)},children:[Object(p.jsx)("input",{type:"text",required:!0,onChange:function(s){return e.handleInputChange(s)},name:"input"}),Object(p.jsx)("button",{type:"submit",className:"search-btn",children:Object(p.jsx)(h.a,{})})]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("span",{children:[Object(p.jsx)("img",{className:"background-img",src:b,alt:"github-logo"}),Object(p.jsx)("img",{className:"background-img",src:m,alt:"gitlab-logo"})]})}),Object(p.jsx)("div",{children:c?Object(p.jsx)("img",{className:"loading-img",src:u,alt:"loading gif"}):null})]})]})}}]),t}(n.a.Component),y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(s){var t=s.getCLS,c=s.getFID,n=s.getFCP,i=s.getLCP,a=s.getTTFB;t(e),c(e),n(e),i(e),a(e)}))};a.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),y()}},[[23,1,2]]]);
//# sourceMappingURL=main.461a930b.chunk.js.map