webpackJsonp([1],{0:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var n=o(49),a=r(n),i=o(176),l=r(i),u=o(203),s=r(u),c=document.getElementById("app");l["default"].render(a["default"].createElement(s["default"],null),c)},203:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),o(144);var n=o(49),a=r(n),i=o(204),l=r(i),u=function(){function e(e){console.log(e.value)}var t={margin:"0 auto",padding:"20px",maxWidth:"480px"},o={backgroundColor:"#fff",height:"14px",width:"14px",border:"1px solid rgba(0, 0, 0, 0.45)",marginTop:"-3px",marginLeft:"-2px",transform:"rotate(45deg)"};return a["default"].createElement("div",{style:t},a["default"].createElement("h1",null,a["default"].createElement("a",{href:"https://github.com/tjallen/react-simple-range"},"react-simple-range")," examples"),a["default"].createElement("p",null,'Note: All component instances barring the first are provided with the "label" prop to display their value for the purpose of these examples.'),a["default"].createElement(l["default"],{title:"No props"}),a["default"].createElement(l["default"],{title:"Set defaultValue, step in 10s, onChange callback provided (logs to console)",label:!0,step:10,defaultValue:50,onChange:e}),a["default"].createElement(l["default"],{title:"1 - 10 slider",label:!0,min:1,max:10}),a["default"].createElement(l["default"],{title:"Disabled thumb",label:!0,disableThumb:!0,value:50}),a["default"].createElement(l["default"],{title:"Disabled track",label:!0,disableTrack:!0,value:50}),a["default"].createElement(l["default"],{title:"Custom slider and thumb size",label:!0,step:1,value:50,sliderSize:12,thumbSize:18}),a["default"].createElement(l["default"],{title:"Extra small slider, custom large event wrapper to compensate",sliderSize:1,eventWrapperPadding:14,label:!0,disableThumb:!0,value:50}),a["default"].createElement(l["default"],{title:"Custom colors",label:!0,sliderColor:"#FFCDD2",trackColor:"#E57373",thumbColor:"#B71C1C",defaultValue:50}),a["default"].createElement(l["default"],{title:"Custom min, max, sliderSize, disabled thumb",label:!0,disableThumb:!0,min:15,max:75,step:5,value:50,sliderSize:24}),a["default"].createElement(l["default"],{title:"Custom thumb element passed down as props.children",label:!0,defaultValue:50},a["default"].createElement("div",{style:o})),a["default"].createElement(l["default"],{title:"Vertical slider",label:!0,vertical:!0}),a["default"].createElement(l["default"],{title:"Vertical slider with custom sizes, step",label:!0,vertical:!0,sliderSize:14,thumbSize:24,step:25}),a["default"].createElement(l["default"],{title:"Taller vertical slider with custom min, max, size, disabled thumb",label:!0,vertical:!0,verticalSliderHeight:"150px",min:1,max:99,sliderSize:14,disableThumb:!0,defaultValue:66}))};t["default"]=u},204:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),s=o(49),c=r(s),p=o(209),d=r(p),f=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e={marginTop:"0px"},t={marginBottom:"5px",color:"rgb(80, 80, 80)"},o={backgroundColor:"#fff",padding:"10px 10px 20px 10px",marginBottom:"25px"},r=Object.keys(this.props).length-1,n=[],a=r>0?"<ReactSimpleRange\n":"<ReactSimpleRange />",i=r>0?"/>":"",u=void 0,s=void 0;for(var p in this.props){var f=l(this.props[p]),b=p,m=this.props[p],h="{",v="}",y="=";switch(f){case"string":h='"',v='"';break;case"object":u=">",i="</ReactSimpleRange>",s="\n  <div style={myCustomThumbStyle}></div>\n";break;case"boolean":y="",h="",v="",m="";break;case"function":m=this.props[p].name}"object"!==f&&"title"!==b&&n.push("  "+b+y+h+m+v+"\n")}var g=function(){var e={border:"1px solid f5f5f5",borderRadius:"4px",color:"#fff",backgroundColor:"#242424",padding:"15px",marginTop:"0px"};return c["default"].createElement("div",null,c["default"].createElement("h4",{style:t},"Code:"),c["default"].createElement("pre",{style:e},a,n,u,s,i),c["default"].createElement("h4",{style:t},"Output:"))};return c["default"].createElement("div",{style:o},c["default"].createElement("h2",{style:e},this.props.title),c["default"].createElement(g,null),c["default"].createElement(d["default"],this.props))}}]),t}(s.Component);t["default"]=f},205:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(){}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),s=o(49),c=r(s),p=o(207),d=r(p),f=o(206),b=r(f),m=o(208),h=r(m),v=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={drag:!1},o.onInteractionStart=o.onInteractionStart.bind(o),o.onMouseOrTouchMove=o.onMouseOrTouchMove.bind(o),o.onInteractionEnd=o.onInteractionEnd.bind(o),o}return i(t,e),u(t,[{key:"componentWillMount",value:function(){this.updateStateFromProps(this.props)}},{key:"componentDidMount",value:function(){"noOp"===this.props.onChange.name&&console.warn("A react-simple-range component was not provided an onChange prop.\n        \nRecommend passing down a function as onChange else this component is purely cosmetic")}},{key:"componentWillReceiveProps",value:function(e){this.updateStateFromProps(e)}},{key:"onInteractionStart",value:function(e){var t=void 0!==e.touches?"touch":"mouse",o=0;"mouse"===t&&e.button!==o||(this.updateSliderValue(e,t),this.setState({drag:!0,displayLabel:!0}),this.addEvents(t),e.preventDefault())}},{key:"onInteractionEnd",value:function(){this.setState({drag:!1,displayLabel:!1}),this.removeEvents()}},{key:"onMouseOrTouchMove",value:function(e){var t=void 0!==e.touches?"touch":"mouse";this.state.drag&&(this.updateSliderValue(e,t),e.stopPropagation())}},{key:"getSliderInfo",value:function(){var e=this.refs.slider,t={bounds:e.getBoundingClientRect(),length:e.clientWidth,height:e.clientHeight};return t}},{key:"addEvents",value:function(e){switch(e){case"mouse":document.addEventListener("mousemove",this.onMouseOrTouchMove),document.addEventListener("mouseup",this.onInteractionEnd);break;case"touch":document.addEventListener("touchmove",this.onMouseOrTouchMove),document.addEventListener("touchend",this.onInteractionEnd)}}},{key:"removeEvents",value:function(){document.removeEventListener("mousemove",this.onMouseOrTouchMove),document.removeEventListener("mouseup",this.onInteractionEnd),document.removeEventListener("touchmove",this.onMouseOrTouchMove),document.removeEventListener("touchend",this.onInteractionEnd)}},{key:"updateSliderValue",value:function(e,t){var o=this.state,r=o.max,n=o.min,a=this.props.vertical,i=this.state.value,l=("touch"!==t?e.pageX:e.touches[0].pageX)-window.pageXOffset,u=("touch"!==t?e.pageY:e.touches[0].pageY)-window.pageYOffset,s=void 0,c=void 0;a?(c=this.getSliderInfo().height,s=c-(u-this.getSliderInfo().bounds.top)):(s=l-this.getSliderInfo().bounds.left,c=this.getSliderInfo().length);var p=this.clampValue(+(s/c).toFixed(2),0,1),d=this.valueFromPercent(p);if(i=this.calculateMatchingNotch(d),i!==this.state.value){var f=100*(i-n)/(r-n);this.setState({percent:p,value:i,ratio:f},this.handleChange)}}},{key:"handleChange",value:function(){this.props.onChange(this.state)}},{key:"valueFromPercent",value:function(e){var t=this.state,o=t.range,r=t.min,n=o*e+r;return n}},{key:"calculateMatchingNotch",value:function(e){for(var t=this.state,o=t.step,r=t.max,n=t.min,a=[],i=n;i<=r;i++)a.push(i);var l=[],u=!0,s=!1,c=void 0;try{for(var p,d=a[Symbol.iterator]();!(u=(p=d.next()).done);u=!0){var f=p.value;f!==n&&f!==r&&f%o!==0||l.push(f)}}catch(b){s=!0,c=b}finally{try{!u&&d["return"]&&d["return"]()}finally{if(s)throw c}}var m=l.reduce(function(t,o){return Math.abs(o-e)<Math.abs(t-e)?o:t});return m}},{key:"clampValue",value:function(e,t,o){return Math.max(t,Math.min(e,o))}},{key:"updateStateFromProps",value:function(e){var t=this.props,o=t.value,r=t.thumbSize;void 0===o&&(o=void 0!==e.defaultValue?e.defaultValue:0),void 0===e.thumbSize&&(r=this.props.disableThumb?0:2*e.sliderSize);var n=e.min,a=e.max,i=e.step,l=a-n,u=100*Math.max(o-n,0)/(a-n);this.setState({value:o,min:n,max:a,range:l,step:i,ratio:u,thumbSize:r})}},{key:"render",value:function(){var e=this.props,t=e.vertical,o=e.sliderSize,r=e.disableThumb,n=e.disableTrack,a=e.children,i=e.label,l=e.trackColor,u=e.thumbColor,s=e.verticalSliderHeight,p=e.eventWrapperPadding,f={height:"100%",position:"relative",cursor:"pointer",margin:"0 auto",get padding(){return t?"0 "+p+"px":p+"px 0"},get width(){return t?o+"px":"auto"}},m={backgroundColor:this.props.sliderColor,position:"relative",overflow:"visible",get height(){return t?s:o+"px"},get width(){return t?o+"px":"100%"}};return c["default"].createElement("div",{style:f,onMouseDown:this.onInteractionStart,onTouchStart:this.onInteractionStart},c["default"].createElement("div",{ref:"slider",style:m},n?null:c["default"].createElement(h["default"],{trackLength:this.state.ratio,color:l,vertical:t}),i&&this.state.displayLabel?c["default"].createElement(b["default"],{position:this.state.ratio,vertical:t,color:l,value:this.state.value,sliderSize:o,thumbSize:this.state.thumbSize}):null,c["default"].createElement(d["default"],{position:this.state.ratio,vertical:t,customThumb:a,thumbSize:this.state.thumbSize,sliderSize:o,color:u,disableThumb:r,value:this.state.value})))}}]),t}(s.Component);v.propTypes={children:s.PropTypes.element,min:s.PropTypes.number,max:s.PropTypes.number,step:s.PropTypes.number,value:s.PropTypes.number,defaultValue:s.PropTypes.number,onChange:s.PropTypes.func,vertical:s.PropTypes.bool,verticalSliderHeight:s.PropTypes.string,eventWrapperPadding:s.PropTypes.number,label:s.PropTypes.bool,disableTrack:s.PropTypes.bool,disableThumb:s.PropTypes.bool,sliderColor:s.PropTypes.string,trackColor:s.PropTypes.string,thumbColor:s.PropTypes.string,sliderSize:s.PropTypes.number,thumbSize:s.PropTypes.number},v.defaultProps={min:0,max:100,step:1,onChange:l,vertical:!1,verticalSliderHeight:"100px",eventWrapperPadding:8,label:!1,disableTrack:!1,disableThumb:!1,sliderColor:"#B9B9B9",trackColor:"#009688",thumbColor:"#009688",sliderSize:4},t["default"]=v},206:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(49),a=r(n),i=function(e){var t=e.position,o=e.color,r=e.vertical,n=e.value,i=e.thumbSize,l=e.sliderSize,u=-10+.5*l,s=6+.6*i,c={position:"absolute",backgroundColor:o,color:"#fff",fontSize:"12px",textAlign:"center",margin:"0",zIndex:"5",width:"20px",height:"20px",borderRadius:"2px",get bottom(){return r?t+"%":void 0},get left(){return r?void 0:t+"%"},get top(){return r?void 0:"-35px"},get marginLeft(){return r?u+"px":"-10px"},get marginBottom(){return r?s+"px":void 0}},p={position:"absolute",left:"50%",marginLeft:"-4px",bottom:"-4px",borderColor:"transparent",borderStyle:"solid",width:"0",height:"0",borderWidth:"4px 4px 0 4px",borderTopColor:o,zIndex:"4"};return a["default"].createElement("div",{style:c},a["default"].createElement("span",null,n),a["default"].createElement("div",{style:p}))};i.propTypes={position:n.PropTypes.number,color:n.PropTypes.string,vertical:n.PropTypes.bool,value:n.PropTypes.number,thumbSize:n.PropTypes.number,sliderSize:n.PropTypes.number},t["default"]=i},207:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(49),a=r(n),i=function(e){var t=e.customThumb,o=e.disableThumb,r=e.position,n=e.thumbSize,i=e.sliderSize,l=e.color,u=e.vertical,s=void 0,c=.5*(i-n),p={position:"absolute",get left(){return u?void 0:r+"%"},get top(){return u?void 0:"0px"},get bottom(){return u?r+"%":void 0},get marginTop(){return u?void 0:c+"px"},get marginLeft(){return u?c+"px":"-"+.5*n+"px"},get marginBottom(){return u?"-"+.5*n+"px":void 0}};if(!t){var d={backgroundColor:""+l,opacity:o?"0":"1",borderRadius:"100%",height:n+"px",width:n+"px"};s=a["default"].createElement("div",{style:d})}return a["default"].createElement("div",{style:p},t,s&&s)};i.propTypes={position:n.PropTypes.number,offsetTop:n.PropTypes.number,offsetLeft:n.PropTypes.number,sliderSize:n.PropTypes.number,thumbSize:n.PropTypes.number,color:n.PropTypes.string,vertical:n.PropTypes.bool,disableThumb:n.PropTypes.bool,customThumb:n.PropTypes.node},t["default"]=i},208:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(49),a=r(n),i=function(e){var t=e.trackLength,o=e.color,r=e.vertical,n={backgroundColor:o,get width(){return r?"100%":t+"%"},get height(){return r?t+"%":"100%"},get position(){return r?"absolute":void 0},get bottom(){return r?"0":void 0}};return a["default"].createElement("div",{style:n})};i.propTypes={trackLength:n.PropTypes.number,color:n.PropTypes.string,vertical:n.PropTypes.bool},t["default"]=i},209:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(205),a=r(n);t["default"]=a["default"]}});