(this["webpackJsonp@uiw/react-heat-map"]=this["webpackJsonp@uiw/react-heat-map"]||[]).push([[0],{13:function(e,t,n){e.exports={header:"App_header__1IfIL",logo:"App_logo__2Y_9-",info:"App_info__36tSF",app:"App_app__11pSh",content:"App_content__1lYrA",example:"App_example__sn1e2",tools:"App_tools__3cxCY"}},544:function(e,t,n){},546:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(131),r=n.n(o),i=(n(144),n(138)),s=n(132),u=n(77),d=n(139),l=n(20),p=n(17),h=n.n(p),m=n(23),b=n.n(m),j=n(75),f=n.n(j),g=n(32),v=n.n(g),w=n(76),O=n.n(w),x=function(e){var t=e.weekLables,n=void 0===t?[]:t,o=e.rectSize,r=void 0===o?0:o,i=e.space,s=void 0===i?0:i;return Object(a.useMemo)((function(){return c.a.createElement(a.Fragment,null,v()(Array(7)).map((function(e,t){if(n&&n[t])return c.a.createElement("text",{key:t,x:15,y:15,dy:(t+1)*(r+s)},n[t])})))}),[r,s,n])},k=function(e){return c.a.createElement("rect",h()({},e,{rx:"2",ry:"2"}))},y=["rectSize","space","date","row","column"],S=function(e){var t=e.rectSize,n=void 0===t?0:t,o=e.space,r=void 0===o?0:o,i=e.date,s=e.row,u=void 0===s?0:s,d=e.column,l=void 0===d?0:d,p=b()(e,y);return Object(a.useMemo)((function(){return c.a.createElement(k,h()({key:u},p,{width:n,height:n,x:l*(n+r),y:(n+r)*u,"data-index":7*l+u,"data-row":u,"data-column":l,"data-date":i}))}),[l,i,p,n,u,r])};function D(e){return e instanceof Date&&!isNaN(e.getTime())}function C(e){return"".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate())}var E=["rectSize","space","startDate","endDate","rectProps","renderRect","value","weekLables","monthLables","panelColors"];function z(e){var t=e||{},n=t.rectSize,o=void 0===n?11:n,r=t.space,i=void 0===r?2:r,s=t.startDate,u=void 0===s?new Date:s,d=t.endDate,l=t.rectProps,p=t.renderRect,m=t.value,j=void 0===m?[]:m,g=t.weekLables,w=void 0===g?["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]:g,k=(t.monthLables,t.panelColors),y=void 0===k?{0:"#EBEDF0",8:"#7BC96F",4:"#C6E48B",12:"#239A3B",32:"#196127"}:k,z=b()(t,E),_=Object(a.useState)(0),L=O()(_,2),A=L[0],B=L[1],R=Object(a.useState)(w?28:5),M=O()(R,2),N=M[0],F=M[1],T=c.a.createRef(),I=Object(a.useMemo)((function(){return function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).sort((function(e,t){return e<t?-1:e>t?1:0}))}(Object.keys(y).map((function(e){return parseInt(e,10)})))}),[y]),P=Object(a.useMemo)((function(){return function(){var e={};return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(t){t.date&&D(new Date(t.date))&&(t.date=C(new Date(t.date)),e[t.date]=t)})),e}(j)}),[j]);return Object(a.useEffect)((function(){return F(w?28:5)}),[w]),Object(a.useEffect)((function(){if(T.current){var e=T.current.clientWidth-N||0;B(Math.floor(e/(o+i))||0)}}),[o,T,i,N]),c.a.createElement("svg",h()({ref:T},z),c.a.createElement(x,{weekLables:w,rectSize:o,space:i}),c.a.createElement("g",{transform:"translate(".concat(N,", 20)")},v()(Array(A)).map((function(e,t){return c.a.createElement("g",{key:t,"data-column":t},v()(Array(7)).map((function(e,n){var a=f()(f()({},l),{},{rectSize:o,space:i,key:n,row:n,column:t,fill:"#EBEDF0"});if(u instanceof Date){var r=new Date(u.getTime()+864e5*(7*t+n));if(a.date=C(r),d instanceof Date&&r.getTime()>d.getTime())return null}if(a.date&&P[a.date]&&y&&Object.keys(y).length>0?a.fill=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a="",c=0;c<t.length;c+=1){if(t[c]>e){a=n[t[c]];break}a=n[t[c]]}return a}(P[a.date].count||0,I,y):y&&y[0]&&(a.fill=y[0]),p&&"function"===typeof p){var s=p(a);if(s&&c.a.isValidElement(s))return s}return c.a.createElement(S,a)})))}))))}n(544);var _=["prefixCls","className"];function L(e){var t=e.prefixCls,n=void 0===t?"w-heatmap":t,a=e.className,o=b()(e,_),r=[a,n].filter(Boolean).join(" ");return c.a.createElement(z,h()({className:r},o))}var A=n(13),B=n.n(A),R=n(1),M=["rectSize","column","space","row","fill","date","rx"],N=[{date:"2016/01/11",count:2,content:["\u4e00\u6761\u6d88\u606f\u6765\u4e86\uff01","\u4e00\u6761\u6d88\u606f\u6765\u4e86\uff01"]},{date:"2016/03/02",count:5,content:["\u7a7a\u7684\u6ca1\u6709\u6d88\u606f"]},{date:"2016/03/04",count:11,content:["\u4e9b\u653e\u5f03\u7684\u4eba\u4f1a\u8fd9\u6837\u60f3"]},{date:"2016/03/14",count:31,content:["\u9700\u8981\u663e\u793a\u7684\u6570\u636e2"]},{date:"2016/03/16",count:2,content:["\u4e9b\u653e\u5f03\u7684\u4eba\u4f1a\u8fd9\u6837\u60f33"]},{date:"2016/04/11",count:2,content:["\u4e00\u6761\u6d88\u606f\u6765\u4e86\uff01"]},{date:"2016/05/01",count:5,content:["\u9700\u8981\u663e\u793a\u7684\u6570\u636e"]},{date:"2016/05/02",count:5,content:["\u7a7a\u7684\u6ca1\u6709\u6d88\u606f"]},{date:"2016/05/04",count:11,content:["\u4e9b\u653e\u5f03\u7684\u4eba\u4f1a\u8fd9\u6837\u60f3"]},{date:"2016/05/14",count:31,content:["\u9700\u8981\u663e\u793a\u7684\u6570\u636e2"]},{date:"2016/05/16",count:2,content:["\u4e9b\u653e\u5f03\u7684\u4eba\u4f1a\u8fd9\u6837\u60f33"]},{date:"2016/05/17",count:2,content:["\u751f\u6d3b\u4e2d\u6839\u672c\u5c31\u7528\u4e0d\u5230\u5427\uff1f"]},{date:"2016/05/18",count:2,content:["\u4e5f\u8bb8\u5dee\u522b\u4e0d\u662f\u90a3\u4e48\u5927\u5427\uff1f"]},{date:"2016/05/19",count:8,content:["\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728"]},{date:"2016/05/20",count:6,content:["\u6211\u6709\u4e00\u4e2a\u5927\u80c6\u7684\u60f3\u6cd5"]},{date:"2016/05/21",count:41,content:["\u6bd5\u7adf\u65f6\u95f4\u7cbe\u529b\u6709\u9650"]},{date:"2016/05/22",count:6,content:["\u53cb\u8c0a\u8d5b\u4e8b\u3002"]},{date:"2016/06/11",count:2,content:["\u4e00\u6761\u6d88\u606f\u6765\u4e86\uff01"]},{date:"2016/07/01",count:5,content:["\u9700\u8981\u663e\u793a\u7684\u6570\u636e"]},{date:"2016/07/02",count:5,content:["\u7a7a\u7684\u6ca1\u6709\u6d88\u606f"]},{date:"2016/07/04",count:11,content:["\u4e9b\u653e\u5f03\u7684\u4eba\u4f1a\u8fd9\u6837\u60f3"]},{date:"2016/07/14",count:31,content:["\u9700\u8981\u663e\u793a\u7684\u6570\u636e2"]},{date:"2016/07/16",count:2,content:["\u4e9b\u653e\u5f03\u7684\u4eba\u4f1a\u8fd9\u6837\u60f33"]},{date:"2016/07/17",count:2,content:["\u751f\u6d3b\u4e2d\u6839\u672c\u5c31\u7528\u4e0d\u5230\u5427\uff1f"]},{date:"2016/07/18",count:2,content:["\u4e5f\u8bb8\u5dee\u522b\u4e0d\u662f\u90a3\u4e48\u5927\u5427\uff1f"]},{date:"2016/07/19",count:8,content:["\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728"]},{date:"2016/07/20",count:6,content:["\u6211\u6709\u4e00\u4e2a\u5927\u80c6\u7684\u60f3\u6cd5"]},{date:"2016/07/21",count:41,content:["\u6bd5\u7adf\u65f6\u95f4\u7cbe\u529b\u6709\u9650"]},{date:"2016/07/22",count:6,content:["\u53cb\u8c0a\u8d5b\u4e8b\u3002"]}],F=[{date:"2016/04/02",count:5,content:["\u7a7a\u7684\u6ca1\u6709\u6d88\u606f"]},{date:"2016/04/04",count:11,content:["\u4e9b\u653e\u5f03\u7684\u4eba\u4f1a\u8fd9\u6837\u60f3"]},{date:"2016/04/14",count:31,content:["\u9700\u8981\u663e\u793a\u7684\u6570\u636e2"]},{date:"2016/04/16",count:2,content:["\u4e9b\u653e\u5f03\u7684\u4eba\u4f1a\u8fd9\u6837\u60f33"]},{date:"2016/04/17",count:2,content:["\u751f\u6d3b\u4e2d\u6839\u672c\u5c31\u7528\u4e0d\u5230\u5427\uff1f"]},{date:"2016/04/18",count:2,content:["\u4e5f\u8bb8\u5dee\u522b\u4e0d\u662f\u90a3\u4e48\u5927\u5427\uff1f"]},{date:"2016/04/19",count:8,content:["\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728"]},{date:"2016/04/11",count:2,content:["\u4e00\u6761\u6d88\u606f\u6765\u4e86\uff01"]},{date:"2016/04/01",count:5,content:["\u9700\u8981\u663e\u793a\u7684\u6570\u636e"]},{date:"2016/04/02",count:5,content:["\u7a7a\u7684\u6ca1\u6709\u6d88\u606f"]},{date:"2016/04/04",count:11,content:["\u4e9b\u653e\u5f03\u7684\u4eba\u4f1a\u8fd9\u6837\u60f3"]},{date:"2016/04/14",count:31,content:["\u9700\u8981\u663e\u793a\u7684\u6570\u636e2"]},{date:"2016/04/16",count:2,content:["\u4e9b\u653e\u5f03\u7684\u4eba\u4f1a\u8fd9\u6837\u60f33"]},{date:"2016/04/17",count:2,content:["\u751f\u6d3b\u4e2d\u6839\u672c\u5c31\u7528\u4e0d\u5230\u5427\uff1f"]},{date:"2016/04/18",count:2,content:["\u4e5f\u8bb8\u5dee\u522b\u4e0d\u662f\u90a3\u4e48\u5927\u5427\uff1f"]},{date:"2016/04/19",count:8,content:["\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728"]},{date:"2016/04/20",count:6,content:["\u6211\u6709\u4e00\u4e2a\u5927\u80c6\u7684\u60f3\u6cd5"]},{date:"2016/04/21",count:41,content:["\u6bd5\u7adf\u65f6\u95f4\u7cbe\u529b\u6709\u9650"]},{date:"2016/04/22",count:6,content:["\u53cb\u8c0a\u8d5b\u4e8b\u3002"]}],T={0:"rgb(255 255 255 / 25%)",8:"#7BC96F",4:"#C6E48B",12:"#239A3B",32:"#196127"};function I(){var e=Object(a.useState)(F),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),r=Object(l.a)(o,2),i=r[0],s=r[1],p=Object(a.useState)(!1),h=Object(l.a)(p,2),m=h[0],b=h[1],j=Object(a.useState)(!1),f=Object(l.a)(j,2),g=f[0],v=f[1],w=Object(a.useState)(11),O=Object(l.a)(w,2),x=O[0],k=O[1],y=Object(a.useState)(void 0),S=Object(l.a)(y,2),D=S[0],C=S[1];return Object(R.jsxs)(a.Fragment,{children:[Object(R.jsx)("div",{className:B.a.example,style:{width:663},children:Object(R.jsx)(L,{style:{backgroundColor:m?"#000":"#fff",color:m?"#888":"#000"},panelColors:m?T:void 0,width:663,rectSize:x,weekLables:D,startDate:new Date("2016/01/01"),endDate:i?new Date("2016/6/01"):void 0,value:n,rectProps:{onClick:function(){console.log("wwww")}},renderRect:function(e){var t=e.rectSize,n=e.column,a=e.space,c=e.row,o=e.fill,r=(e.date,e.rx,Object(d.a)(e,M));if(g)return Object(R.jsx)("circle",Object(u.a)(Object(u.a)({},r),{},{fill:o,r:t/2,cx:n*(t+a)+4,cy:(t+a)*c+5,width:t,height:t}))}})}),Object(R.jsxs)("div",{style:{width:663,margin:"0 auto"},className:B.a.tools,children:[Object(R.jsxs)("div",{style:{paddingLeft:10},children:[Object(R.jsx)("button",{onClick:function(){return c(N)},children:"Value 1"}),Object(R.jsx)("button",{onClick:function(){return c(F)},children:"Value 2"})]}),Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"checkbox",checked:i,onChange:function(e){return s(e.target.checked)}}),"endDate = ",i?"2016/6/01":"undefined"]}),Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"checkbox",checked:m,onChange:function(e){return b(e.target.checked)}}),m?"dark":"light"]}),Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"checkbox",checked:g,onChange:function(e){return v(e.target.checked)}}),g?"Circle":"Rect"]}),Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"radio",name:"weekLables",checked:void 0===D,onChange:function(e){return C(void 0)}}),"weekLables = undefined"]}),Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"radio",name:"weekLables",checked:!1===D,onChange:function(e){return C(!1)}}),"weekLables = false"]}),Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"radio",name:"weekLables",checked:Array.isArray(D),onChange:function(e){return C(["\u65e5","\u4e00","","\u4e09","","\u4e94","\u516d"])}}),"weekLables = ",JSON.stringify(["\u65e5","\u4e00","","\u4e09","","\u4e94","\u516d"])]}),Object(R.jsxs)("div",{style:{display:"flex"},children:[Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"radio",name:"rectSize",checked:11===x,onChange:function(e){return k(11)}}),"rectSize = 11"]}),Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"radio",name:"rectSize",checked:12===x,onChange:function(e){return k(12)}}),"rectSize = 12"]}),Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"radio",name:"rectSize",checked:14===x,onChange:function(e){return k(14)}}),"rectSize = 14"]})]})]})]})}var P=n.p+"static/media/logo.3931a054.svg",J=function(){return Object(R.jsxs)("div",{className:B.a.app,children:[Object(R.jsx)(i.a,{zIndex:9999,fixed:!0,href:"https://github.com/uiwjs/react-heat-map"}),Object(R.jsxs)("header",{className:B.a.header,children:[Object(R.jsx)("img",{src:P,className:B.a.logo,alt:"react logo"}),Object(R.jsx)("p",{className:B.a.info,children:"React component create calendar heatmap to visualize time series data, a la github contribution graph."})]}),Object(R.jsx)(I,{}),Object(R.jsx)(s.a,{source:"HeatMap \u65e5\u5386\u70ed\u56fe\n===\n\n[![Build & Deploy](https://github.com/uiwjs/react-heat-map/workflows/Build%20&%20Deploy/badge.svg)](https://github.com/uiwjs/react-heat-map/actions)\n[![Issues](https://img.shields.io/github/issues/uiwjs/react-heat-map.svg)](https://github.com/uiwjs/react-heat-map/issues)\n[![Forks](https://img.shields.io/github/forks/uiwjs/react-heat-map.svg)](https://github.com/uiwjs/react-heat-map/network)\n[![Stars](https://img.shields.io/github/stars/uiwjs/react-heat-map.svg)](https://github.com/uiwjs/react-heat-map/stargazers)\n[![Release](https://img.shields.io/github/release/uiwjs/react-heat-map)](https://github.com/uiwjs/react-heat-map/releases)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-heat-map.svg)](https://www.npmjs.com/package/@uiw/react-heat-map)\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-heat-map)](https://bundlephobia.com/result?p=@uiw/react-heat-map)\n\nReact component create calendar heatmap to visualize time series data, a la github contribution graph.\n\n## Install\n\n```bash\n# Not dependent on uiw.\nnpm install @uiw/react-heat-map --save\n```\n\n## Basic Usage\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport HeatMap from '@uiw/react-heat-map';\n\nconst Demo = () => {\n  const value = [\n    { date: '2016/01/11', count:2, content:['\u4e00\u6761\u6d88\u606f\u6765\u4e86\uff01','\u4e00\u6761\u6d88\u606f\u6765\u4e86\uff01'] },\n    { date: '2016/04/11', count:2, content:['\u4e00\u6761\u6d88\u606f\u6765\u4e86\uff01'] },\n    { date: '2016/05/01', count:5, content:['\u9700\u8981\u663e\u793a\u7684\u6570\u636e'] },\n    { date: '2016/05/02', count:5, content:['\u7a7a\u7684\u6ca1\u6709\u6d88\u606f'] },\n    { date: '2016/05/04', count:11, content:['\u4e9b\u653e\u5f03\u7684\u4eba\u4f1a\u8fd9\u6837\u60f3'] },\n  ];\n  return (\n    <div>\n      <HeatMap value={value} startDate={new Date('2016/01/01')} />\n    </div>\n  )\n};\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| value | Data to be displayed, **required** | Array | `[]` |\n| rectSize | Grid size | number | `11` |\n| startDate | Start date | Date | `new Date()` |\n| endDate | End date | Date | - |\n| space | Interval between grid sizes | number | `2` |\xa0\n| rectProps | Grid node attribute settings | `React.SVGProps<SVGRectElement>` | `2` |\n| weekLables | Week display | string[] | `['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']` |\xa0\n| monthLables | Month display | string[] | `['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']` |\xa0\n| panelColors | Backgroud color of active colors | `Record<number, string>` | `{ 0: '#EBEDF0', 8: '#7BC96F', 4: '#C6E48B', 12: '#239A3B', 32: '#196127' }` |\xa0\n| renderRect | Single block re-render | `(SVGRectElement & RectDayDefaultProps & { fill?: string }) => React.ReactNode` | - |\n\n## Development\n\n**`development`**\n\nRuns the project in development mode.  \n\n```bash\n# Step 1, run first, listen to the component compile and output the .js file\n# listen for compilation output type .d.ts file\nnpm run watch\n# Step 2, development mode, listen to compile preview website instance\nnpm run start\n```\n\n**`production`**\n\nBuilds the app for production to the build folder.\n\n```bash\nnpm run build\n```\n\nThe build is minified and the filenames include the hashes.\nYour app is ready to be deployed!\n\n\n## License\n\nLicensed under the MIT License.\n",className:B.a.content})]})};r.a.render(Object(R.jsx)(J,{}),document.getElementById("root"))}},[[546,1,2]]]);
//# sourceMappingURL=main.9b0a0426.chunk.js.map