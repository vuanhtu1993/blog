(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{155:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),r=a(0),o=a.n(r),i=a(157),c=a.n(i),l=a(158),p=a(159),m=(a(76),a(161)),d=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.tag;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(o.a.createElement(m.a,{data:t,key:t.node.fields.slug}))}),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},o.a.createElement("div",{className:"page"},o.a.createElement("h1",{className:"page__title"},'All Posts tagged as "',t,'"'),o.a.createElement("div",{className:"page__body"},e))))},t}(o.a.Component);a.d(t,"pageQuery",function(){return _});var u=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.tag;return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(c.a,{title:'All Posts tagged as "'+t+'" - '+e}),o.a.createElement(p.a,this.props),o.a.createElement(d,this.props)))},t}(o.a.Component),_=(t.default=u,"1253915135")},161:function(e,t,a){"use strict";var n=a(7),s=a.n(n),r=a(0),o=a.n(r),i=a(36),c=a(163),l=a.n(c),p=(a(162),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,s=e.description,r=this.props.data.node.fields,c=r.slug,p=r.categorySlug;return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post__meta"},o.a.createElement("time",{className:"post__meta-time",dateTime:l()(a).format("MMMM D, YYYY")},l()(a).format("MMMM YYYY")),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("span",{className:"post__meta-category",key:p},o.a.createElement(i.Link,{to:p,className:"post__meta-category-link"},n))),o.a.createElement("h2",{className:"post__title"},o.a.createElement(i.Link,{className:"post__title-link",to:c},t)),o.a.createElement("p",{className:"post__description"},s),o.a.createElement(i.Link,{className:"post__readmore",to:c},"Read"))},t}(o.a.Component));t.a=p},162:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-2637fc9543d0a84926b7.js.map