(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m}),a.d(t,"pageQuery",function(){return g});var i=a(7),r=a.n(i),s=a(0),n=a.n(s),l=a(151),o=a(157),d=a(169),c=a.n(d),u=a(152),f=a(154),p=a(155),h=Object(o.b)("ul").withConfig({displayName:"post__StyledUl",componentId:"lhj9zv-0"})(["list-style-type:none;li::before{content:'' !important;padding-right:0 !important;}"]),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,i=a.previous,r=a.next;return n.a.createElement(f.a,{title:t},n.a.createElement(p.a,{title:e.frontmatter.title,description:e.excerpt}),n.a.createElement("article",null,n.a.createElement("header",null,n.a.createElement("h1",null,e.frontmatter.title),n.a.createElement("h2",null,e.frontmatter.date),n.a.createElement("small",null,n.a.createElement(u.a,null)),e.frontmatter.featured&&n.a.createElement(c.a,{sizes:e.frontmatter.featured.childImageSharp.sizes})),n.a.createElement("div",{className:"page-content"},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),n.a.createElement(h,null,i&&n.a.createElement("li",null,n.a.createElement(l.a,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),r&&n.a.createElement("li",null,n.a.createElement(l.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))))},t}(n.a.Component),g="1558243772"},152:function(e,t,a){"use strict";var i=a(153),r=a(0),s=a.n(r),n=a(151);t.a=function(){return s.a.createElement(n.b,{query:"3599211134",render:function(e){var t=e.site.siteMetadata,a=t.description,i=t.social;return s.a.createElement("div",null,s.a.createElement("p",null,a,s.a.createElement("br",null),s.a.createElement("a",{href:i.twitter},"Twitter")))},data:i})}},153:function(e){e.exports={data:{site:{siteMetadata:{description:"A collective of engineers, designers, entrepreneurs, students and creative hackers in Redlands, California",social:{twitter:"https://twitter.com/redlandstech"}}}}}},169:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(7)),n=i(a(34)),l=i(a(74)),o=i(a(75)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+"<img "+l+o+a+r+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:r},u,{onLoad:n,onError:c,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:s,hasNoScript:o,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,l=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,S=e.Tag,v=e.itemProp,w="boolean"==typeof b?"lightgray":b,E=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),L=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),I={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var R=h;return d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&d.default.createElement(y,(0,o.default)({src:R.base64},I)),R.tracedSVG&&d.default.createElement(y,(0,o.default)({src:R.tracedSVG},I)),w&&d.default.createElement(S,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:R.sizes,src:R.src,srcSet:R.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},R))}}))}if(m){var z=m,N=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},s);return"inherit"===s.display&&delete N.display,d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},z.base64&&d.default.createElement(y,(0,o.default)({src:z.base64},I)),z.tracedSVG&&d.default.createElement(y,(0,o.default)({src:z.tracedSVG},I)),w&&d.default.createElement(S,{title:t,style:{backgroundColor:w,width:z.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:z.height}}),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(y,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:z.width,height:z.height},z))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:S,sizes:v,fixed:S,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-templates-post-tsx-cb0147d37dd63d98c35b.js.map