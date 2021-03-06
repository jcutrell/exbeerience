var Chart=function(s){function v(a,c,b){a=B((a-c.graphMin)/(c.steps*c.stepValue),1,0);return b*c.steps*a}function x(a,c,b,d){function l(){f+=g;var m=a.animation?B(h(f),null,0):1;d.clearRect(0,0,q,u);a.scaleOverlay?(b(m),c()):(c(),b(m));if(1>=f)E(l);else if("function"==typeof a.onAnimationComplete)a.onAnimationComplete()}var g=a.animation?1/B(a.animationSteps,Number.MAX_VALUE,1):1,h=C[a.animationEasing],f=a.animation?0:1;"function"!==typeof c&&(c=function(){});E(l)}function D(a,c,b,d,l,g){var h;a=
Math.floor(Math.log(d-l)/Math.LN10);l=Math.floor(l/(1*Math.pow(10,a)))*Math.pow(10,a);h=Math.ceil(d/(1*Math.pow(10,a)))*Math.pow(10,a)-l;d=Math.pow(10,a);for(a=Math.round(h/d);a<b||a>c;)d=a<b?d/2:2*d,a=Math.round(h/d);c=[];if(g)for(b=1;b<a+1;b++)c.push(y(g,{value:(l+d*b).toFixed(A(d))}));return{steps:a,stepValue:d,graphMin:l,labels:c}}function B(a,c,b){return!isNaN(parseFloat(c))&&isFinite(c)&&a>c?c:!isNaN(parseFloat(b))&&isFinite(b)&&a<b?b:a}function A(a){return 0!=a%1?a.toString().split(".")[1].length:
0}function z(a,c){var b={},d;for(d in a)b[d]=a[d];for(d in c)b[d]=c[d];return b}function y(a,c){var b=!/\W/.test(a)?F[a]=F[a]||y(document.getElementById(a).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return c?b(c):b}var r=
this,C={linear:function(a){return a},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return-1*a*(a-2)},easeInOutQuad:function(a){return 1>(a/=0.5)?0.5*a*a:-0.5*(--a*(a-2)-1)},easeInCubic:function(a){return a*a*a},easeOutCubic:function(a){return 1*((a=a/1-1)*a*a+1)},easeInOutCubic:function(a){return 1>(a/=0.5)?0.5*a*a*a:0.5*((a-=2)*a*a+2)},easeInQuart:function(a){return a*a*a*a},easeOutQuart:function(a){return-1*((a=a/1-1)*a*a*a-1)},easeInOutQuart:function(a){return 1>(a/=0.5)?0.5*a*a*a*
a:-0.5*((a-=2)*a*a*a-2)},easeInQuint:function(a){return 1*(a/=1)*a*a*a*a},easeOutQuint:function(a){return 1*((a=a/1-1)*a*a*a*a+1)},easeInOutQuint:function(a){return 1>(a/=0.5)?0.5*a*a*a*a*a:0.5*((a-=2)*a*a*a*a+2)},easeInSine:function(a){return-1*Math.cos(a/1*(Math.PI/2))+1},easeOutSine:function(a){return 1*Math.sin(a/1*(Math.PI/2))},easeInOutSine:function(a){return-0.5*(Math.cos(Math.PI*a/1)-1)},easeInExpo:function(a){return 0==a?1:1*Math.pow(2,10*(a/1-1))},easeOutExpo:function(a){return 1==a?1:1*
(-Math.pow(2,-10*a/1)+1)},easeInOutExpo:function(a){return 0==a?0:1==a?1:1>(a/=0.5)?0.5*Math.pow(2,10*(a-1)):0.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return 1<=a?a:-1*(Math.sqrt(1-(a/=1)*a)-1)},easeOutCirc:function(a){return 1*Math.sqrt(1-(a=a/1-1)*a)},easeInOutCirc:function(a){return 1>(a/=0.5)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)},easeInElastic:function(a){var c=1.70158,b=0,d=1;if(0==a)return 0;if(1==(a/=1))return 1;b||(b=0.3);d<Math.abs(1)?(d=1,c=b/4):c=b/(2*Math.PI)*
Math.asin(1/d);return-(d*Math.pow(2,10*(a-=1))*Math.sin((1*a-c)*2*Math.PI/b))},easeOutElastic:function(a){var c=1.70158,b=0,d=1;if(0==a)return 0;if(1==(a/=1))return 1;b||(b=0.3);d<Math.abs(1)?(d=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/d);return d*Math.pow(2,-10*a)*Math.sin((1*a-c)*2*Math.PI/b)+1},easeInOutElastic:function(a){var c=1.70158,b=0,d=1;if(0==a)return 0;if(2==(a/=0.5))return 1;b||(b=1*0.3*1.5);d<Math.abs(1)?(d=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/d);return 1>a?-0.5*d*Math.pow(2,10*(a-=1))*
Math.sin((1*a-c)*2*Math.PI/b):0.5*d*Math.pow(2,-10*(a-=1))*Math.sin((1*a-c)*2*Math.PI/b)+1},easeInBack:function(a){return 1*(a/=1)*a*(2.70158*a-1.70158)},easeOutBack:function(a){return 1*((a=a/1-1)*a*(2.70158*a+1.70158)+1)},easeInOutBack:function(a){var c=1.70158;return 1>(a/=0.5)?0.5*a*a*(((c*=1.525)+1)*a-c):0.5*((a-=2)*a*(((c*=1.525)+1)*a+c)+2)},easeInBounce:function(a){return 1-C.easeOutBounce(1-a)},easeOutBounce:function(a){return(a/=1)<1/2.75?1*7.5625*a*a:a<2/2.75?1*(7.5625*(a-=1.5/2.75)*a+0.75):
a<2.5/2.75?1*(7.5625*(a-=2.25/2.75)*a+0.9375):1*(7.5625*(a-=2.625/2.75)*a+0.984375)},easeInOutBounce:function(a){return 0.5>a?0.5*C.easeInBounce(2*a):0.5*C.easeOutBounce(2*a-1)+0.5}},q=s.canvas.width,u=s.canvas.height;window.devicePixelRatio&&(s.canvas.style.width=q+"px",s.canvas.style.height=u+"px",s.canvas.height=u*window.devicePixelRatio,s.canvas.width=q*window.devicePixelRatio,s.scale(window.devicePixelRatio,window.devicePixelRatio));this.PolarArea=function(a,c){r.PolarArea.defaults={scaleOverlay:!0,
scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",
animateRotate:!0,animateScale:!1,onAnimationComplete:null};var b=c?z(r.PolarArea.defaults,c):r.PolarArea.defaults;return new G(a,b,s)};this.Radar=function(a,c){r.Radar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!1,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",
scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var b=c?z(r.Radar.defaults,c):r.Radar.defaults;return new H(a,b,s)};this.Pie=function(a,
c){r.Pie.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var b=c?z(r.Pie.defaults,c):r.Pie.defaults;return new I(a,b,s)};this.Doughnut=function(a,c){r.Doughnut.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,
onAnimationComplete:null};var b=c?z(r.Doughnut.defaults,c):r.Doughnut.defaults;return new J(a,b,s)};this.Line=function(a,c){r.Line.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,
pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var b=c?z(r.Line.defaults,c):r.Line.defaults;return new K(a,b,s)};this.Bar=function(a,c){r.Bar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",
scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var b=c?z(r.Bar.defaults,c):r.Bar.defaults;return new L(a,b,s)};var G=function(a,c,b){var d,l,g,h,f,m,j,e,k;f=Math.min.apply(Math,[q,u])/2;f-=Math.max.apply(Math,[0.5*c.scaleFontSize,0.5*c.scaleLineWidth]);
e=2*c.scaleFontSize;c.scaleShowLabelBackdrop&&(e+=2*c.scaleBackdropPaddingY,f-=1.5*c.scaleBackdropPaddingY);k=f;e=e?e:5;d=Number.MIN_VALUE;l=Number.MAX_VALUE;for(g=0;g<a.length;g++)a[g].value>d&&(d=a[g].value),a[g].value<l&&(l=a[g].value);g=Math.floor(k/(0.66*e));h=Math.floor(0.5*(k/e));e=c.scaleShowLabels?c.scaleLabel:null;if(c.scaleOverride){j={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]};for(k=0;k<j.steps;k++)e&&j.labels.push(y(e,{value:(c.scaleStartValue+
c.scaleStepWidth*k).toFixed(A(c.scaleStepWidth))}))}else j=D(k,g,h,d,l,e);m=f/j.steps;x(c,function(){for(var a=0;a<j.steps;a++)if(c.scaleShowLine&&(b.beginPath(),b.arc(q/2,u/2,m*(a+1),0,2*Math.PI,!0),b.strokeStyle=c.scaleLineColor,b.lineWidth=c.scaleLineWidth,b.stroke()),c.scaleShowLabels){b.textAlign="center";b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;var d=j.labels[a];if(c.scaleShowLabelBackdrop){var e=b.measureText(d).width;b.fillStyle=c.scaleBackdropColor;b.beginPath();
b.rect(Math.round(q/2-e/2-c.scaleBackdropPaddingX),Math.round(u/2-m*(a+1)-0.5*c.scaleFontSize-c.scaleBackdropPaddingY),Math.round(e+2*c.scaleBackdropPaddingX),Math.round(c.scaleFontSize+2*c.scaleBackdropPaddingY));b.fill()}b.textBaseline="middle";b.fillStyle=c.scaleFontColor;b.fillText(d,q/2,u/2-m*(a+1))}},function(d){var e=-Math.PI/2,f=2*Math.PI/a.length,g=1,h=1;c.animation&&(c.animateScale&&(g=d),c.animateRotate&&(h=d));for(d=0;d<a.length;d++)b.beginPath(),b.arc(q/2,u/2,g*v(a[d].value,j,m),e,e+
h*f,!1),b.lineTo(q/2,u/2),b.closePath(),b.fillStyle=a[d].color,b.fill(),c.segmentShowStroke&&(b.strokeStyle=c.segmentStrokeColor,b.lineWidth=c.segmentStrokeWidth,b.stroke()),e+=h*f},b)},H=function(a,c,b){var d,l,g,h,f,m,j,e,k;a.labels||(a.labels=[]);f=Math.min.apply(Math,[q,u])/2;e=2*c.scaleFontSize;for(d=k=0;d<a.labels.length;d++)b.font=c.pointLabelFontStyle+" "+c.pointLabelFontSize+"px "+c.pointLabelFontFamily,l=b.measureText(a.labels[d]).width,l>k&&(k=l);f-=Math.max.apply(Math,[k,1.5*(c.pointLabelFontSize/
2)]);f-=c.pointLabelFontSize;k=f=B(f,null,0);e=e?e:5;d=Number.MIN_VALUE;l=Number.MAX_VALUE;for(g=0;g<a.datasets.length;g++)for(h=0;h<a.datasets[g].data.length;h++)a.datasets[g].data[h]>d&&(d=a.datasets[g].data[h]),a.datasets[g].data[h]<l&&(l=a.datasets[g].data[h]);g=Math.floor(k/(0.66*e));h=Math.floor(0.5*(k/e));e=c.scaleShowLabels?c.scaleLabel:null;if(c.scaleOverride){j={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]};for(k=0;k<j.steps;k++)e&&j.labels.push(y(e,
{value:(c.scaleStartValue+c.scaleStepWidth*k).toFixed(A(c.scaleStepWidth))}))}else j=D(k,g,h,d,l,e);m=f/j.steps;x(c,function(){var d=2*Math.PI/a.datasets[0].data.length;b.save();b.translate(q/2,u/2);if(c.angleShowLineOut){b.strokeStyle=c.angleLineColor;b.lineWidth=c.angleLineWidth;for(var e=0;e<a.datasets[0].data.length;e++)b.rotate(d),b.beginPath(),b.moveTo(0,0),b.lineTo(0,-f),b.stroke()}for(e=0;e<j.steps;e++){b.beginPath();if(c.scaleShowLine){b.strokeStyle=c.scaleLineColor;b.lineWidth=c.scaleLineWidth;
b.moveTo(0,-m*(e+1));for(var g=0;g<a.datasets[0].data.length;g++)b.rotate(d),b.lineTo(0,-m*(e+1));b.closePath();b.stroke()}c.scaleShowLabels&&(b.textAlign="center",b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily,b.textBaseline="middle",c.scaleShowLabelBackdrop&&(g=b.measureText(j.labels[e]).width,b.fillStyle=c.scaleBackdropColor,b.beginPath(),b.rect(Math.round(-g/2-c.scaleBackdropPaddingX),Math.round(-m*(e+1)-0.5*c.scaleFontSize-c.scaleBackdropPaddingY),Math.round(g+2*c.scaleBackdropPaddingX),
Math.round(c.scaleFontSize+2*c.scaleBackdropPaddingY)),b.fill()),b.fillStyle=c.scaleFontColor,b.fillText(j.labels[e],0,-m*(e+1)))}for(e=0;e<a.labels.length;e++){b.font=c.pointLabelFontStyle+" "+c.pointLabelFontSize+"px "+c.pointLabelFontFamily;b.fillStyle=c.pointLabelFontColor;var g=Math.sin(d*e)*(f+c.pointLabelFontSize),h=Math.cos(d*e)*(f+c.pointLabelFontSize);b.textAlign=d*e==Math.PI||0==d*e?"center":d*e>Math.PI?"right":"left";b.textBaseline="middle";b.fillText(a.labels[e],g,-h)}b.restore()},function(d){var e=
2*Math.PI/a.datasets[0].data.length;b.save();b.translate(q/2,u/2);for(var f=0;f<a.datasets.length;f++){b.beginPath();b.moveTo(0,d*-1*v(a.datasets[f].data[0],j,m));for(var g=1;g<a.datasets[f].data.length;g++)b.rotate(e),b.lineTo(0,d*-1*v(a.datasets[f].data[g],j,m));b.closePath();b.fillStyle=a.datasets[f].fillColor;b.strokeStyle=a.datasets[f].strokeColor;b.lineWidth=c.datasetStrokeWidth;b.fill();b.stroke();if(c.pointDot){b.fillStyle=a.datasets[f].pointColor;b.strokeStyle=a.datasets[f].pointStrokeColor;
b.lineWidth=c.pointDotStrokeWidth;for(g=0;g<a.datasets[f].data.length;g++)b.rotate(e),b.beginPath(),b.arc(0,d*-1*v(a.datasets[f].data[g],j,m),c.pointDotRadius,2*Math.PI,!1),b.fill(),b.stroke()}b.rotate(e)}b.restore()},b)},I=function(a,c,b){for(var d=0,l=Math.min.apply(Math,[u/2,q/2])-5,g=0;g<a.length;g++)d+=a[g].value;x(c,null,function(g){var f=-Math.PI/2,m=1,j=1;c.animation&&(c.animateScale&&(m=g),c.animateRotate&&(j=g));for(g=0;g<a.length;g++){var e=j*a[g].value/d*2*Math.PI;b.beginPath();b.arc(q/
2,u/2,m*l,f,f+e);b.lineTo(q/2,u/2);b.closePath();b.fillStyle=a[g].color;b.fill();c.segmentShowStroke&&(b.lineWidth=c.segmentStrokeWidth,b.strokeStyle=c.segmentStrokeColor,b.stroke());f+=e}},b)},J=function(a,c,b){for(var d=0,l=Math.min.apply(Math,[u/2,q/2])-5,g=l*(c.percentageInnerCutout/100),h=0;h<a.length;h++)d+=a[h].value;x(c,null,function(f){var h=-Math.PI/2,j=1,e=1;c.animation&&(c.animateScale&&(j=f),c.animateRotate&&(e=f));for(f=0;f<a.length;f++){var k=e*a[f].value/d*2*Math.PI;b.beginPath();
b.arc(q/2,u/2,j*l,h,h+k,!1);b.arc(q/2,u/2,j*g,h+k,h,!0);b.closePath();b.fillStyle=a[f].color;b.fill();c.segmentShowStroke&&(b.lineWidth=c.segmentStrokeWidth,b.strokeStyle=c.segmentStrokeColor,b.stroke());h+=k}},b)},K=function(a,c,b){var d,l,g,h,f,m,j,e,k,t,r,n,p,s=0;f=u;b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;t=1;for(e=0;e<a.labels.length;e++)d=b.measureText(a.labels[e]).width,t=d>t?d:t;q/a.labels.length<t?(s=45,q/a.labels.length<Math.cos(s)*t?(s=90,f-=t):f-=Math.sin(s)*
t):f-=c.scaleFontSize;e=c.scaleFontSize;f=f-5-e;d=Number.MIN_VALUE;l=Number.MAX_VALUE;for(g=0;g<a.datasets.length;g++)for(h=0;h<a.datasets[g].data.length;h++)a.datasets[g].data[h]>d&&(d=a.datasets[g].data[h]),a.datasets[g].data[h]<l&&(l=a.datasets[g].data[h]);g=Math.floor(f/(0.66*e));h=Math.floor(0.5*(f/e));e=c.scaleShowLabels?c.scaleLabel:"";if(c.scaleOverride){j={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]};for(d=0;d<j.steps;d++)e&&j.labels.push(y(e,{value:(c.scaleStartValue+
c.scaleStepWidth*d).toFixed(A(c.scaleStepWidth))}))}else j=D(f,g,h,d,l,e);m=Math.floor(f/j.steps);e=1;if(c.scaleShowLabels){b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;for(d=0;d<j.labels.length;d++)l=b.measureText(j.labels[d]).width,e=l>e?l:e;e+=10}r=q-e-t;k=Math.floor(r/(a.labels.length-1));n=q-t/2-r;p=f+c.scaleFontSize/2;x(c,function(){b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(q-t/2+5,p);b.lineTo(q-t/2-r-5,p);b.stroke();0<s?(b.save(),
b.textAlign="right"):b.textAlign="center";b.fillStyle=c.scaleFontColor;for(var d=0;d<a.labels.length;d++)b.save(),0<s?(b.translate(n+d*k,p+c.scaleFontSize),b.rotate(-(s*(Math.PI/180))),b.fillText(a.labels[d],0,0),b.restore()):b.fillText(a.labels[d],n+d*k,p+c.scaleFontSize+3),b.beginPath(),b.moveTo(n+d*k,p+3),c.scaleShowGridLines&&0<d?(b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(n+d*k,5)):b.lineTo(n+d*k,p+3),b.stroke();b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;
b.beginPath();b.moveTo(n,p+5);b.lineTo(n,5);b.stroke();b.textAlign="right";b.textBaseline="middle";for(d=0;d<j.steps;d++)b.beginPath(),b.moveTo(n-3,p-(d+1)*m),c.scaleShowGridLines?(b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(n+r+5,p-(d+1)*m)):b.lineTo(n-0.5,p-(d+1)*m),b.stroke(),c.scaleShowLabels&&b.fillText(j.labels[d],n-8,p-(d+1)*m)},function(d){function e(b,c){return p-d*v(a.datasets[b].data[c],j,m)}for(var f=0;f<a.datasets.length;f++){b.strokeStyle=a.datasets[f].strokeColor;
b.lineWidth=c.datasetStrokeWidth;b.beginPath();b.moveTo(n,p-d*v(a.datasets[f].data[0],j,m));for(var g=1;g<a.datasets[f].data.length;g++)c.bezierCurve?b.bezierCurveTo(n+k*(g-0.5),e(f,g-1),n+k*(g-0.5),e(f,g),n+k*g,e(f,g)):b.lineTo(n+k*g,e(f,g));b.stroke();c.datasetFill?(b.lineTo(n+k*(a.datasets[f].data.length-1),p),b.lineTo(n,p),b.closePath(),b.fillStyle=a.datasets[f].fillColor,b.fill()):b.closePath();if(c.pointDot){b.fillStyle=a.datasets[f].pointColor;b.strokeStyle=a.datasets[f].pointStrokeColor;b.lineWidth=
c.pointDotStrokeWidth;for(g=0;g<a.datasets[f].data.length;g++)b.beginPath(),b.arc(n+k*g,p-d*v(a.datasets[f].data[g],j,m),c.pointDotRadius,0,2*Math.PI,!0),b.fill(),b.stroke()}}},b)},L=function(a,c,b){var d,l,g,h,f,m,j,e,k,t,r,n,p,s,w=0;f=u;b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;t=1;for(e=0;e<a.labels.length;e++)d=b.measureText(a.labels[e]).width,t=d>t?d:t;q/a.labels.length<t?(w=45,q/a.labels.length<Math.cos(w)*t?(w=90,f-=t):f-=Math.sin(w)*t):f-=c.scaleFontSize;e=c.scaleFontSize;
f=f-5-e;d=Number.MIN_VALUE;l=Number.MAX_VALUE;for(g=0;g<a.datasets.length;g++)for(h=0;h<a.datasets[g].data.length;h++)a.datasets[g].data[h]>d&&(d=a.datasets[g].data[h]),a.datasets[g].data[h]<l&&(l=a.datasets[g].data[h]);g=Math.floor(f/(0.66*e));h=Math.floor(0.5*(f/e));e=c.scaleShowLabels?c.scaleLabel:"";if(c.scaleOverride){j={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]};for(d=0;d<j.steps;d++)e&&j.labels.push(y(e,{value:(c.scaleStartValue+c.scaleStepWidth*d).toFixed(A(c.scaleStepWidth))}))}else j=
D(f,g,h,d,l,e);m=Math.floor(f/j.steps);e=1;if(c.scaleShowLabels){b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;for(d=0;d<j.labels.length;d++)l=b.measureText(j.labels[d]).width,e=l>e?l:e;e+=10}r=q-e-t;k=Math.floor(r/a.labels.length);s=(k-2*c.scaleGridLineWidth-2*c.barValueSpacing-(c.barDatasetSpacing*a.datasets.length-1)-(c.barStrokeWidth/2*a.datasets.length-1))/a.datasets.length;n=q-t/2-r;p=f+c.scaleFontSize/2;x(c,function(){b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;
b.beginPath();b.moveTo(q-t/2+5,p);b.lineTo(q-t/2-r-5,p);b.stroke();0<w?(b.save(),b.textAlign="right"):b.textAlign="center";b.fillStyle=c.scaleFontColor;for(var d=0;d<a.labels.length;d++)b.save(),0<w?(b.translate(n+d*k,p+c.scaleFontSize),b.rotate(-(w*(Math.PI/180))),b.fillText(a.labels[d],0,0),b.restore()):b.fillText(a.labels[d],n+d*k+k/2,p+c.scaleFontSize+3),b.beginPath(),b.moveTo(n+(d+1)*k,p+3),b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(n+(d+1)*k,5),b.stroke();b.lineWidth=
c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(n,p+5);b.lineTo(n,5);b.stroke();b.textAlign="right";b.textBaseline="middle";for(d=0;d<j.steps;d++)b.beginPath(),b.moveTo(n-3,p-(d+1)*m),c.scaleShowGridLines?(b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(n+r+5,p-(d+1)*m)):b.lineTo(n-0.5,p-(d+1)*m),b.stroke(),c.scaleShowLabels&&b.fillText(j.labels[d],n-8,p-(d+1)*m)},function(d){b.lineWidth=c.barStrokeWidth;for(var e=0;e<a.datasets.length;e++){b.fillStyle=
a.datasets[e].fillColor;b.strokeStyle=a.datasets[e].strokeColor;for(var f=0;f<a.datasets[e].data.length;f++){var g=n+c.barValueSpacing+k*f+s*e+c.barDatasetSpacing*e+c.barStrokeWidth*e;b.beginPath();b.moveTo(g,p);b.lineTo(g,p-d*v(a.datasets[e].data[f],j,m)+c.barStrokeWidth/2);b.lineTo(g+s,p-d*v(a.datasets[e].data[f],j,m)+c.barStrokeWidth/2);b.lineTo(g+s,p);c.barShowStroke&&b.stroke();b.closePath();b.fill()}}},b)},E=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||
window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)},F={}};











var clickevt = (Modernizr.touch) ? "touchstart" : "click";
var BASE = "http://ebh.herokuapp.com";

Handlebars.registerHelper('ifBoth', function(v1, v2, options) {
  if(v1 && v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('bitterness', function(ibu){
	return 100 * (ibu/110);
});
Handlebars.registerHelper('bitternessText', function(ibu){
	var perc = 100 * (ibu/110);
	if (ibu <= 10){
		return "very low";
	} else if (ibu > 10 && ibu <= 30){
		return "low";
	} else if (ibu > 30 && ibu <= 40){
		return "medium";
	} else if (ibu > 40 && ibu <= 60){
		return "high medium";
	} else if (ibu > 60 && ibu <= 80){
		return "high";
	} else {
		return "very high";
	}

});

$.ajaxSetup({
	cache : false,
	data : {
		"withBreweries" : "Y"
	}
});
var theRequest;

var listhtml = "";
function getBeerList(h,p,page,query){
	var data;
	$("#index").fadeIn(); $("#single").fadeOut(); $("#taste-profile-container").fadeOut();
	if (!h) h = "";
	if (!p) p = 1;
	if (!page) page = "recommended";
	if (!query) query = "";

	$.getJSON("/me", function(data){
		if (page=="recommended"){
			data = {method : "beers", "order" : "status", "abv":"7,12", "ibu":"20,50", "p":p};
		// } else if (page=="recommended"){
			// data = {method : "beers", "order": "availableId", "sort" :"DESC", "p":p};
		} else if (page=="atoz"){
			data = {method : "beers", "order": "name", "sort" :"ASC", "p":p};
		} else if (page=="popular"){
			// These are the most recently updated... So they must be popular, right?
			var ts = Math.round((new Date()).getTime() / 1000) - (86400*4);
			data = {method : "beers", "since": ts, "sort" :"ASC", "p":p};
		} else if (page=="seasonal"){
			// grab those spring beers, dog
			data = {method : "beers", "availableId": 5, "order" : "abv", "sort" :"DESC", "p":p};
		} else if (page=="cellar"){
			var ids = "";
			$(data.drinks).each(function(i,el){
				ids += el.api_id + ",";
			});
			data = {method : "beers", "ids": ids, "sort" :"ASC", "p":p};
		} else if (page=="purchases"){
			data = {method : "beers", "ids": "Qx1hbt,R0MvCF,iLlMCb,FYS1Qj,y3lFdg,CfJ0cK,AXqmST,NoNhan,f9WbNU,x6bRxw,", "sort" :"ASC", "p":p};
		} else if (page=="search"){
			data = {method : "search", "q": query, "p":p};
		} else if (page=="profile"){
			$("#single, #index").fadeOut();
			var ctx = data;
			var source = $("#taste-profile").html();
			var tpl = Handlebars.compile(source);
			var h = tpl(ctx);
			var d = {
				labels : ["Bitterness","Darkness","Strength","Spicyness","Fruityness"],
				datasets : [
					{
						fillColor : "rgba(151,187,205,0.5)",
						strokeColor : "rgba(151,187,205,1)",
						pointColor : "rgba(151,187,205,1)",
						pointStrokeColor : "#fff",
						data : [
							data.taste_bitter,
							data.taste_dark,
							data.taste_strong,
							data.taste_spicy,
							data.taste_fruity
						]
					}
				]
			}
			$("#taste-profile-details").html(h).parent().fadeIn();
			var context = document.getElementById("profile-spider").getContext("2d");
			new Chart(context).Radar(d);
			if (theRequest){
				theRequest.abort();
			}
			return;
		}

		theRequest = $.getJSON(BASE, data, function(data){
			var ctx = {
				beers : data.data
			}
			var source = $("#beer-list").html();
			var tpl = Handlebars.compile(source);
			h += tpl(ctx);
			var fragment = document.createDocumentFragment();
			var d = document.createElement("div");
			d.innerHTML=h;
			if ($(d).find("li").length < 60 && data.currentPage < data.numberOfPages){
				$("#beerlist").append(h);
				$(".loading-text").remove();
				return getBeerList(h,p+1,page,query);
			} else {
				$("#beerlist").append(h);
			}
		});
	})
}
getBeerList(listhtml, 1, "recommended");


$("nav").on(clickevt, "a", function(e){
	if (!$(this).is(".logout")){
		e.preventDefault();
	} else { return true; }
	if (theRequest){
		theRequest.abort();
	}
	var el = this;
	if (!$(this).is(".current")){
		$(el).addClass("current").siblings().removeClass("current");
		var sec = $(el).attr("href").replace("#", "");
		$("#logo small").html(sec[0].toUpperCase() + sec.slice(1));
		$("#beerlist").empty().html("<h3 class='loading-text'>Loading...</h3>");
		getBeerList("", 1, sec);
		$("#contain").removeClass("nav-open");
		$(".nav-switch").removeClass("open");
	} else {
		// do nothing.
	}
});
$(".nav-switch").on(clickevt, function(e){

	if ($(this).hasClass("open")){
		$(this).removeClass("open");
		$("#contain").removeClass("nav-open");
	} else {
		$(this).addClass("open");
		$("#contain").addClass("nav-open");
	}
})
$(".search-switch i").on(clickevt, function(e){
	$(e.target).parent().toggleClass("on");
});

var tout;
$("input[name=search-input]").on("keyup", function(){
	clearTimeout(tout);
	if (theRequest){
		theRequest.abort();
	}
	$("#logo small").html("Search")
	$("#beerlist").empty().html("<h3 class='loading-text'>Loading...</h3>");
	tout = setTimeout(function(){
		getBeerList("", 1, "search", $("input[name=search-input]").val());
	}, 300);
});

function goToSingle(ev){
	if (!ev){
		var hash = document.location.hash;
	} else {
		if (!$(ev.target).is("a")){
			var t = $(ev.target).parents("a");
		} else {
			var t = $(ev.target);
		}
		var hash = $(t).attr("href");
	}

	$("#index, #taste-profile-container").fadeOut();
	var id = hash.split("/")[hash.split("/").length-1];
	var data = { method : "beer/"+id }
	if (theRequest){
		theRequest.abort();
	}
	theRequest = $.getJSON(BASE, data, function(data){
		var ctx = data.data;
		var source = $("#single-beer").html();
		var tpl = Handlebars.compile(source);
		var h = tpl(ctx);
		$("#single").html(h).fadeIn();

		$.getJSON("/me", function(d){

			var d = {
				labels : ["Bitterness","Darkness","Strength","Spicyness","Fruityness"],
				datasets : [{
						fillColor : "rgba(16,125,255,0.3)",
						strokeColor : "rgba(16,125,255,0.8)",
						pointColor : "rgba(16,125,255,1)",
						pointStrokeColor : "#fff",
						data : [
							(data.data.ibu/130) * 100 || Math.round(Math.random()*100),
							Math.round(Math.random()*100),
							(data.data.abv/15)*100 || Math.round(Math.random()*100),
							Math.round(Math.random()*100),
							Math.round(Math.random()*100)
						]
					},
					{
						fillColor : "rgba(255,179,57,0.5)",
						strokeColor : "rgba(255,179,57,1)",
						pointColor : "rgba(255,179,57,1)",
						pointStrokeColor : "#fff",
						data : [
							d.taste_bitter,
							d.taste_dark,
							d.taste_strong,
							d.taste_spicy,
							d.taste_fruity
						]
					}
				]
			}
			var context = document.getElementById("beer-profile-spider").getContext("2d");
			new Chart(context).Radar(d);
			if (theRequest.abort){
				theRequest.abort();
			}

		});


		var rating = Math.round(Math.random() * 5);
		var i = 0;
		var h = "";
		for (i = i; i < rating; i++){
			h += "<i class='icon-star'></i>";
		}
		for (i = i; i < 5; i++){
			h += "<i class='icon-star-empty'></i>";
		}
		$(".review p").first().prepend("<div>"+h+"</div>");

			rating = Math.round(Math.random() * 5);
			i = 0;
			h = "";
		for (i = i; i < rating; i++){
			h += "<i class='icon-star'></i>";
		}
		for (i = i; i < 5; i++){
			h += "<i class='icon-star-empty'></i>";
		}
		$(".review p").last().prepend("<div>"+h+"</div>");
	});
}

$("body").on("click", ".single-link", goToSingle);
$(document).ready(function(){
	if (document.location.hash.split("/")[1] == "beer"){
		goToSingle();
	}
});
$("body").on(clickevt, ".back", function(e){
	e.preventDefault();
	$("#single").fadeOut(function(){$("#single").empty();});
	$("#taste-profile-container").fadeOut();
	$("#index").fadeIn();
});
$("body").on(clickevt, ".styleinfo a", function(e){
	e.preventDefault();
	$(e.target).toggleClass("open");
	$(e.target).parent().next("p").slideToggle();
});
$("body").on("submit", "#add-a-review", function(e){
	e.preventDefault();
	var username = $("input[name='username']").val();
	var comments = $("textarea[name='comments']").val();
	var comment = "<div class='review clearfix'>"
                            +"<div class='review-text'>"
                                +"<h5>"+username+"</h5>"
                                +"<img src='http://placekitten.com/g/120/120' class='floatleft avatar'>"
                                +"<p>"+comments+"</p>"
                            +"</div>"
                        +"</div>"
                        +"<hr>";
    $(".reviews").append(comment);
});

$("body").on(clickevt, ".add-beer", function(e){
	var id = $(this).data("api_id");
	var button = $(this);
	$.post("/cellar/add", {"api_id" : id}, function(data){
		var json = $.parseJSON(data);
		console.log(json);
		if (json.message == "Successfully added drink."){
			button.html("<i class='icon-beer icon'></i> Added to cellar!").removeClass("add-beer");
		}
	});
})
$("body").on("change", "input[type=file]", function(e){
	document.location.hash = "#/beer/5nEJRc";
	goToSingle();
});