/*
  Highcharts JS v6.1.0-modified (2018-06-15)
 Tilemap module

 (c) 2010-2017 Highsoft AS

 License: www.highcharts.com/license
*/
(function(g){"object"===typeof module&&module.exports?module.exports=g:g(Highcharts)})(function(g){(function(d){var g=d.defined,r=d.each,x=d.noop,u=d.seriesTypes;d.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setVisible:function(d){var f=this,a=d?"show":"hide";r(["graphic","dataLabel"],function(b){if(f[b])f[b][a]()})},setState:function(f){d.Point.prototype.setState.call(this,f);this.graphic&&this.graphic.attr({zIndex:"hover"===f?1:0})}};
d.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:x,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:u.column.prototype.pointAttribs,translateColors:function(){var d=this,v=this.options.nullColor,a=this.colorAxis,b=this.colorKey;r(this.data,function(c){var e=c[b];if(e=c.options.color||(c.isNull?v:a&&void 0!==e?a.toColor(e,c):c.color||d.color))c.color=e})},colorAttribs:function(d){var f=
{};g(d.color)&&(f[this.colorProp||"fill"]=d.color);return f}}})(g);(function(d){var g=d.colorPointMixin,r=d.each,x=d.merge,u=d.noop,f=d.pick,v=d.Series,a=d.seriesType,b=d.seriesTypes;a("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},
x(d.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var c;b.scatter.prototype.init.apply(this,arguments);c=this.options;c.pointRange=f(c.pointRange,c.colsize||1);this.yAxis.axisPointRange=c.rowsize||1},translate:function(){var b=this.options,a=this.xAxis,d=this.yAxis,w=b.pointPadding||0,k=function(b,a,c){return Math.min(Math.max(a,b),c)};this.generatePoints();r(this.points,function(c){var h=(b.colsize||1)/2,e=(b.rowsize||
1)/2,l=k(Math.round(a.len-a.translate(c.x-h,0,1,0,1)),-a.len,2*a.len),h=k(Math.round(a.len-a.translate(c.x+h,0,1,0,1)),-a.len,2*a.len),t=k(Math.round(d.translate(c.y-e,0,1,0,1)),-d.len,2*d.len),e=k(Math.round(d.translate(c.y+e,0,1,0,1)),-d.len,2*d.len),m=f(c.pointPadding,w);c.plotX=c.clientX=(l+h)/2;c.plotY=(t+e)/2;c.shapeType="rect";c.shapeArgs={x:Math.min(l,h)+m,y:Math.min(t,e)+m,width:Math.abs(h-l)-2*m,height:Math.abs(e-t)-2*m}});this.translateColors()},drawPoints:function(){b.column.prototype.drawPoints.call(this);
r(this.points,function(b){b.graphic.attr(this.colorAttribs(b))},this)},animate:u,getBox:u,drawLegendSymbol:d.LegendSymbolMixin.drawRectangle,alignDataLabel:b.column.prototype.alignDataLabel,getExtremes:function(){v.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;v.prototype.getExtremes.call(this)}}),d.extend({haloPath:function(b){if(!b)return[];var a=this.shapeArgs;return["M",a.x-b,a.y-b,"L",a.x-b,a.y+a.height+b,a.x+a.width+b,a.y+a.height+b,a.x+
a.width+b,a.y-b,"Z"]}},g))})(g);(function(d){var g=d.seriesType,r=d.each,x=d.reduce,u=d.pick,f=function(a,b,c){return Math.min(Math.max(b,a),c)},v=function(a,b,c){a=a.options;return{xPad:(a.colsize||1)/-b,yPad:(a.rowsize||1)/-c}};d.tileShapeTypes={hexagon:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return v(a,3,2)},haloPath:function(a){if(!a)return[];var b=this.tileEdges;return["M",b.x2-a,b.y1+a,"L",b.x3+a,b.y1+a,b.x4+1.5*a,b.y2,b.x3+a,b.y3-a,b.x2-a,
b.y3-a,b.x1-1.5*a,b.y2,"Z"]},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,y=(a.colsize||1)/3,w=(a.rowsize||1)/2,k;this.generatePoints();r(this.points,function(a){var h=f(Math.floor(b.len-b.translate(a.x-2*y,0,1,0,1)),-b.len,2*b.len),e=f(Math.floor(b.len-b.translate(a.x-y,0,1,0,1)),-b.len,2*b.len),l=f(Math.floor(b.len-b.translate(a.x+y,0,1,0,1)),-b.len,2*b.len),t=f(Math.floor(b.len-b.translate(a.x+2*y,0,1,0,1)),-b.len,2*b.len),m=f(Math.floor(c.translate(a.y-
w,0,1,0,1)),-c.len,2*c.len),n=f(Math.floor(c.translate(a.y,0,1,0,1)),-c.len,2*c.len),p=f(Math.floor(c.translate(a.y+w,0,1,0,1)),-c.len,2*c.len),q=u(a.pointPadding,d),g=q*Math.abs(e-h)/Math.abs(p-n),g=b.reversed?-g:g,r=b.reversed?-q:q,q=c.reversed?-q:q;a.x%2&&(k=k||Math.round(Math.abs(p-m)/2)*(c.reversed?-1:1),m+=k,n+=k,p+=k);a.plotX=a.clientX=(e+l)/2;a.plotY=n;h+=g+r;e+=r;l-=r;t-=g+r;m-=q;p+=q;a.tileEdges={x1:h,x2:e,x3:l,x4:t,y1:m,y2:n,y3:p};a.shapeType="path";a.shapeArgs={d:["M",e,m,"L",l,m,t,n,
l,p,e,p,h,n,"Z"]}});this.translateColors()}},diamond:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return v(a,2,2)},haloPath:function(a){if(!a)return[];var b=this.tileEdges;return["M",b.x2,b.y1+a,"L",b.x3+a,b.y2,b.x2,b.y3-a,b.x1-a,b.y2,"Z"]},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,g=a.colsize||1,w=(a.rowsize||1)/2,k;this.generatePoints();r(this.points,function(a){var e=f(Math.round(b.len-b.translate(a.x-g,
0,1,0,0)),-b.len,2*b.len),h=f(Math.round(b.len-b.translate(a.x,0,1,0,0)),-b.len,2*b.len),l=f(Math.round(b.len-b.translate(a.x+g,0,1,0,0)),-b.len,2*b.len),t=f(Math.round(c.translate(a.y-w,0,1,0,0)),-c.len,2*c.len),m=f(Math.round(c.translate(a.y,0,1,0,0)),-c.len,2*c.len),n=f(Math.round(c.translate(a.y+w,0,1,0,0)),-c.len,2*c.len),p=u(a.pointPadding,d),q=p*Math.abs(h-e)/Math.abs(n-m),q=b.reversed?-q:q,p=c.reversed?-p:p;a.x%2&&(k=Math.abs(n-t)/2*(c.reversed?-1:1),t+=k,m+=k,n+=k);a.plotX=a.clientX=h;a.plotY=
m;e+=q;l-=q;t-=p;n+=p;a.tileEdges={x1:e,x2:h,x3:l,y1:t,y2:m,y3:n};a.shapeType="path";a.shapeArgs={d:["M",h,t,"L",l,m,h,n,e,m,"Z"]}});this.translateColors()}},circle:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return v(a,2,2)},haloPath:function(a){return d.seriesTypes.scatter.prototype.pointClass.prototype.haloPath.call(this,a+(a&&this.radius))},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,g=(a.rowsize||1)/2,w=
a.colsize||1,k,h,v,u,l=!1;this.generatePoints();r(this.points,function(a){var e=f(Math.round(b.len-b.translate(a.x,0,1,0,0)),-b.len,2*b.len),n=f(Math.round(c.translate(a.y,0,1,0,0)),-c.len,2*c.len),p=d,q=!1;void 0!==a.pointPadding&&(p=a.pointPadding,l=q=!0);if(!u||l)k=Math.abs(f(Math.floor(b.len-b.translate(a.x+w,0,1,0,0)),-b.len,2*b.len)-e),h=Math.abs(f(Math.floor(c.translate(a.y+g,0,1,0,0)),-c.len,2*c.len)-n),v=Math.floor(Math.sqrt(k*k+h*h)/2),u=Math.min(k,v,h)-p,l&&!q&&(l=!1);a.x%2&&(n+=h*(c.reversed?
-1:1));a.plotX=a.clientX=e;a.plotY=n;a.radius=u;a.shapeType="circle";a.shapeArgs={x:e,y:n,r:u}});this.translateColors()}},square:{alignDataLabel:d.seriesTypes.heatmap.prototype.alignDataLabel,translate:d.seriesTypes.heatmap.prototype.translate,getSeriesPadding:function(){},haloPath:d.seriesTypes.heatmap.prototype.pointClass.prototype.haloPath}};d.wrap(d.Axis.prototype,"setAxisTranslation",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));var b=this,c=x(d.map(b.series,function(a){return a.getSeriesPixelPadding&&
a.getSeriesPixelPadding(b)}),function(a,b){return(a&&a.padding)>(b&&b.padding)?a:b})||{padding:0,axisLengthFactor:1},e=Math.round(c.padding*c.axisLengthFactor);c.padding&&(b.len-=e,a.apply(b,Array.prototype.slice.call(arguments,1)),b.minPixelPadding+=c.padding,b.len+=e)});g("tilemap","heatmap",{states:{hover:{halo:{enabled:!0,size:2,opacity:.5,attributes:{zIndex:3}}}},pointPadding:2,tileShape:"hexagon"},{setOptions:function(){var a=d.seriesTypes.heatmap.prototype.setOptions.apply(this,Array.prototype.slice.call(arguments));
this.tileShape=d.tileShapeTypes[a.tileShape];return a},alignDataLabel:function(){return this.tileShape.alignDataLabel.apply(this,Array.prototype.slice.call(arguments))},getSeriesPixelPadding:function(a){var b=a.isXAxis,c=this.tileShape.getSeriesPadding(this),d;if(!c)return{padding:0,axisLengthFactor:1};d=Math.round(a.translate(b?2*c.xPad:c.yPad,0,1,0,1));a=Math.round(a.translate(b?c.xPad:0,0,1,0,1));return{padding:Math.abs(d-a)||0,axisLengthFactor:b?2:1.1}},translate:function(){return this.tileShape.translate.apply(this,
Array.prototype.slice.call(arguments))}},d.extend({haloPath:function(){return this.series.tileShape.haloPath.apply(this,Array.prototype.slice.call(arguments))}},d.colorPointMixin))})(g)});
