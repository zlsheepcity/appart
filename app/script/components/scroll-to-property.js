/** -------------------------------------------
    Scroll to Property (wayway)
    CSS variable values depending on the scroll position.
    2019.9.23
------------------------------------------- */


// ------------------------------------------- app integration


const queenWayway  = function Ribosome (dna) {
    const instance = basicScroll.create(dna)
    instance.start()
    return instance
}
if (app) app.attach('wayway')


/* ------------------------------------------- usage example

    // change property

    app.wayway({
        elem: document.querySelector('.wayway-trigga'),
        from: 'top-middle',
        to:   'top-top',
        direct:  true,
        props: {
            '--font': { from: '10px', to: '36px' }
        }
    })

    // fire event

        app.wayway({
            elem: document.querySelector('.wayway-trigga'),
            from: 'top-middle',
            to:   'top-top',
            inside:  (instance, percentage, props) => {
                app.log('wayway-trigga Inside!'+percentage)
                instance.destroy()
            },
            outside: (instance, percentage, props) => {
                app.log('Outside!'+percentage)
            }
        })

*/


// ------------------------------------------- function core
// source:
// https://github.com/electerious/basicScroll

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicScroll=t()}}(function(){return function u(i,c,f){function a(n,t){if(!c[n]){if(!i[n]){var o="function"==typeof require&&require;if(!t&&o)return o(n,!0);if(s)return s(n,!0);var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}var r=c[n]={exports:{}};i[n][0].call(r.exports,function(t){return a(i[n][1][t]||t)},r,r.exports,u,i,c,f)}return c[n].exports}for(var s="function"==typeof require&&require,t=0;t<f.length;t++)a(f[t]);return a}({1:[function(t,n,o){n.exports=function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}},{}],2:[function(t,n,o){n.exports=function(t){var n=1.70158;return t*t*((n+1)*t-n)}},{}],3:[function(t,n,o){n.exports=function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1}},{}],4:[function(t,n,o){var e=t("./bounce-out");n.exports=function(t){return t<.5?.5*(1-e(1-2*t)):.5*e(2*t-1)+.5}},{"./bounce-out":6}],5:[function(t,n,o){var e=t("./bounce-out");n.exports=function(t){return 1-e(1-t)}},{"./bounce-out":6}],6:[function(t,n,o){n.exports=function(t){var n=t*t;return t<4/11?7.5625*n:t<8/11?9.075*n-9.9*t+3.4:t<.9?4356/361*n-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}},{}],7:[function(t,n,o){n.exports=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},{}],8:[function(t,n,o){n.exports=function(t){return 1-Math.sqrt(1-t*t)}},{}],9:[function(t,n,o){n.exports=function(t){return Math.sqrt(1- --t*t)}},{}],10:[function(t,n,o){n.exports=function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}},{}],11:[function(t,n,o){n.exports=function(t){return t*t*t}},{}],12:[function(t,n,o){n.exports=function(t){var n=t-1;return n*n*n+1}},{}],13:[function(t,n,o){n.exports=function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}},{}],14:[function(t,n,o){n.exports=function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}},{}],15:[function(t,n,o){n.exports=function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}},{}],16:[function(t,n,o){n.exports=function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1}},{}],17:[function(t,n,o){n.exports=function(t){return 0===t?t:Math.pow(2,10*(t-1))}},{}],18:[function(t,n,o){n.exports=function(t){return 1===t?t:1-Math.pow(2,-10*t)}},{}],19:[function(t,n,o){n.exports={backInOut:t("./back-in-out"),backIn:t("./back-in"),backOut:t("./back-out"),bounceInOut:t("./bounce-in-out"),bounceIn:t("./bounce-in"),bounceOut:t("./bounce-out"),circInOut:t("./circ-in-out"),circIn:t("./circ-in"),circOut:t("./circ-out"),cubicInOut:t("./cubic-in-out"),cubicIn:t("./cubic-in"),cubicOut:t("./cubic-out"),elasticInOut:t("./elastic-in-out"),elasticIn:t("./elastic-in"),elasticOut:t("./elastic-out"),expoInOut:t("./expo-in-out"),expoIn:t("./expo-in"),expoOut:t("./expo-out"),linear:t("./linear"),quadInOut:t("./quad-in-out"),quadIn:t("./quad-in"),quadOut:t("./quad-out"),quartInOut:t("./quart-in-out"),quartIn:t("./quart-in"),quartOut:t("./quart-out"),quintInOut:t("./quint-in-out"),quintIn:t("./quint-in"),quintOut:t("./quint-out"),sineInOut:t("./sine-in-out"),sineIn:t("./sine-in"),sineOut:t("./sine-out")}},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(t,n,o){n.exports=function(t){return t}},{}],21:[function(t,n,o){n.exports=function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)}},{}],22:[function(t,n,o){n.exports=function(t){return t*t}},{}],23:[function(t,n,o){n.exports=function(t){return-t*(t-2)}},{}],24:[function(t,n,o){n.exports=function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}},{}],25:[function(t,n,o){n.exports=function(t){return Math.pow(t,4)}},{}],26:[function(t,n,o){n.exports=function(t){return Math.pow(t-1,3)*(1-t)+1}},{}],27:[function(t,n,o){n.exports=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},{}],28:[function(t,n,o){n.exports=function(t){return t*t*t*t*t}},{}],29:[function(t,n,o){n.exports=function(t){return--t*t*t*t*t+1}},{}],30:[function(t,n,o){n.exports=function(t){return-.5*(Math.cos(Math.PI*t)-1)}},{}],31:[function(t,n,o){n.exports=function(t){var n=Math.cos(t*Math.PI*.5);return Math.abs(n)<1e-14?1:1-n}},{}],32:[function(t,n,o){n.exports=function(t){return Math.sin(t*Math.PI/2)}},{}],33:[function(t,n,o){n.exports=function(t,n){n||(n=[0,""]),t=String(t);var o=parseFloat(t,10);return n[0]=o,n[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",n}},{}],34:[function(t,n,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.create=void 0;var e=r(t("parse-unit")),u=r(t("eases"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c,f,a,s=[],p="undefined"!=typeof window,l=function(){return(document.scrollingElement||document.documentElement).scrollTop},d=function(t){return!1===isNaN((0,e.default)(t)[0])},m=function(t){var n=(0,e.default)(t);return{value:n[0],unit:n[1]}},b=function(t){return null!==String(t).match(/^[a-z]+-[a-z]+$/)},h=function(t,n){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:l(),e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:window.innerHeight||window.outerHeight,r=n.getBoundingClientRect(),u=t.match(/^[a-z]+/)[0],i=t.match(/[a-z]+$/)[0],c=0;return"top"===i&&(c-=0),"middle"===i&&(c-=e/2),"bottom"===i&&(c-=e),"top"===u&&(c+=r.top+o),"middle"===u&&(c+=r.top+o+r.height/2),"bottom"===u&&(c+=r.top+o+r.height),"".concat(c,"px")},w=function(t){var n,o,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:l(),f=t.getData(),r=f.to.value-f.from.value,u=(e-f.from.value)/(r/100),a=Math.min(Math.max(u,0),100),i=(n=f.direct,o={global:document.documentElement,elem:f.elem,direct:f.direct},!0===n?o.elem:n instanceof HTMLElement==1?o.direct:o.global),c=Object.keys(f.props).reduce(function(t,n){var o=f.props[n],e=o.from.unit||o.to.unit,r=o.from.value-o.to.value,u=o.timing(a/100),i=o.from.value-r*u,c=Math.round(1e4*i)/1e4;return t[n]=c+e,t},{}),s=u<0||100<u;return!0===(0<=u&&u<=100)&&f.inside(t,u,c),!0===s&&f.outside(t,u,c),{elem:i,props:c}},v=function(e,r){Object.keys(r).forEach(function(t){return n=e,o={key:t,value:r[t]},void n.style.setProperty(o.key,o.value);var n,o})};o.create=function(t){var n=null,o=!1,e={isActive:function(){return o},getData:function(){return n},calculate:function(){n=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).inside&&(e.inside=function(){}),null==e.outside&&(e.outside=function(){}),null==e.direct&&(e.direct=!1),null==e.track&&(e.track=!0),null==e.props&&(e.props={}),null==e.from)throw new Error("Missing property `from`");if(null==e.to)throw new Error("Missing property `to`");if("function"!=typeof e.inside)throw new Error("Property `inside` must be undefined or a function");if("function"!=typeof e.outside)throw new Error("Property `outside` must be undefined or a function");if("boolean"!=typeof e.direct&&e.direct instanceof HTMLElement==0)throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");if(!0===e.direct&&null==e.elem)throw new Error("Property `elem` is required when `direct` is true");if("boolean"!=typeof e.track)throw new Error("Property `track` must be undefined or a boolean");if("object"!==i(e.props))throw new Error("Property `props` must be undefined or an object");if(null==e.elem){if(!1===d(e.from))throw new Error("Property `from` must be a absolute value when no `elem` has been provided");if(!1===d(e.to))throw new Error("Property `to` must be a absolute value when no `elem` has been provided")}else!0===b(e.from)&&(e.from=h(e.from,e.elem)),!0===b(e.to)&&(e.to=h(e.to,e.elem));return e.from=m(e.from),e.to=m(e.to),e.props=Object.keys(e.props).reduce(function(t,n){var o=Object.assign({},e.props[n]);if(!1===d(o.from))throw new Error("Property `from` of prop must be a absolute value");if(!1===d(o.to))throw new Error("Property `from` of prop must be a absolute value");if(o.from=m(o.from),o.to=m(o.to),null==o.timing&&(o.timing=u.default.linear),"string"!=typeof o.timing&&"function"!=typeof o.timing)throw new Error("Property `timing` of prop must be undefined, a string or a function");if("string"==typeof o.timing&&null==u.default[o.timing])throw new Error("Unknown timing for property `timing` of prop");return"string"==typeof o.timing&&(o.timing=u.default[o.timing]),t[n]=o,t},{}),e}(t)},update:function(){var t=w(e),n=t.elem,o=t.props;return v(n,o),o},start:function(){o=!0},stop:function(){o=!1},destroy:function(){s[r]=void 0}},r=s.push(e)-1;return e.calculate(),e},!0===p?(!function t(n,o){var e=function(){requestAnimationFrame(function(){return t(n,o)})},r=s.filter(function(t){return null!=t&&t.isActive()});if(0===r.length)return e();var u=l();if(o===u)return e();o=u,r.map(function(t){return w(t,u)}).forEach(function(t){var n=t.elem,o=t.props;return v(n,o)}),e()}(),window.addEventListener("resize",(c=function(){s.filter(function(t){return null!=t&&t.getData().track}).forEach(function(t){t.calculate(),t.update()})},f=50,a=null,function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];clearTimeout(a),a=setTimeout(function(){return c.apply(void 0,n)},f)}))):console.warn("basicScroll is not executing because you are using it in an environment without a `window` object")},{eases:19,"parse-unit":33}]},{},[34])(34)});


/** EOF scroll to property */
