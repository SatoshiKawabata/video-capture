webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, process) {function za(){return function(c){function qb(a){eval.call(null,a)}function x(a,b){a||G("Assertion failed: "+b)}function sc(a){var b="i32";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return D[a>>0];case "i8":return D[a>>0];case "i16":return U[a>>1];case "i32":return n[a>>2];case "i64":return n[a>>2];case "float":return ia[a>>2];case "double":return ja[a>>3];default:G("invalid type for getValue: "+b)}return null}function N(a,b,d){if("number"===typeof a){var c=!0;var f=a}else c=!1,f=a.length;
var g="string"===typeof b?b:null,l;4==d?l=h:l=["function"===typeof O?O:m.fa,m.ea,m.fa,m.na][void 0===d?2:d](Math.max(f,g?1:b.length));if(c){var h=l;x(0==(l&3));for(a=l+(f&-4);h<a;h+=4)n[h>>2]=0;for(a=l+f;h<a;)D[h++>>0]=0;return l}if("i8"===g)return a.subarray||a.slice?u.set(a,l):u.set(new Uint8Array(a),l),l;h=0;for(var B,t;h<f;){var p=a[h];"function"===typeof p&&(p=m.Ra(p));d=g||b[h];if(0===d)h++;else{"i64"==d&&(d="i32");c=l+h;var k=d;k=k||"i8";"*"===k.charAt(k.length-1)&&(k="i32");switch(k){case "i1":D[c>>
0]=p;break;case "i8":D[c>>0]=p;break;case "i16":U[c>>1]=p;break;case "i32":n[c>>2]=p;break;case "i64":tempI64=[p>>>0,(tempDouble=p,1<=+tc(tempDouble)?0<tempDouble?(uc(+vc(tempDouble/4294967296),4294967295)|0)>>>0:~~+wc((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)];n[c>>2]=tempI64[0];n[c+4>>2]=tempI64[1];break;case "float":ia[c>>2]=p;break;case "double":ja[c>>3]=p;break;default:G("invalid type for setValue: "+k)}t!==d&&(B=m.aa(d),t=d);h+=B}}return l}function Sa(a){var b;if(0===b||!a)return"";
for(var d=0,e,f=0;;){e=u[a+f>>0];d|=e;if(0==e&&!b)break;f++;if(b&&f==b)break}b||(b=f);e="";if(128>d){for(;0<b;)d=String.fromCharCode.apply(String,u.subarray(a,a+Math.min(b,1024))),e=e?e+d:d,a+=1024,b-=1024;return e}return c.UTF8ToString(a)}function rb(a,b){for(var d=b;a[d];)++d;if(16<d-b&&a.subarray&&sb)return sb.decode(a.subarray(b,d));for(d="";;){var c=a[b++];if(!c)return d;if(c&128){var f=a[b++]&63;if(192==(c&224))d+=String.fromCharCode((c&31)<<6|f);else{var g=a[b++]&63;if(224==(c&240))c=(c&15)<<
12|f<<6|g;else{var l=a[b++]&63;if(240==(c&248))c=(c&7)<<18|f<<12|g<<6|l;else{var h=a[b++]&63;if(248==(c&252))c=(c&3)<<24|f<<18|g<<12|l<<6|h;else{var B=a[b++]&63;c=(c&1)<<30|f<<24|g<<18|l<<12|h<<6|B}}}65536>c?d+=String.fromCharCode(c):(c-=65536,d+=String.fromCharCode(55296|c>>10,56320|c&1023))}}else d+=String.fromCharCode(c)}}function tb(a,b,d,c){if(0<c){c=d+c-1;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);55296<=g&&57343>=g&&(g=65536+((g&1023)<<10)|a.charCodeAt(++e)&1023);if(127>=g){if(d>=c)break;
b[d++]=g}else{if(2047>=g){if(d+1>=c)break;b[d++]=192|g>>6}else{if(65535>=g){if(d+2>=c)break;b[d++]=224|g>>12}else{if(2097151>=g){if(d+3>=c)break;b[d++]=240|g>>18}else{if(67108863>=g){if(d+4>=c)break;b[d++]=248|g>>24}else{if(d+5>=c)break;b[d++]=252|g>>30;b[d++]=128|g>>24&63}b[d++]=128|g>>18&63}b[d++]=128|g>>12&63}b[d++]=128|g>>6&63}b[d++]=128|g&63}}b[d]=0}}function ub(a){for(var b=0,d=0;d<a.length;++d){var c=a.charCodeAt(d);55296<=c&&57343>=c&&(c=65536+((c&1023)<<10)|a.charCodeAt(++d)&1023);127>=c?
++b:b=2047>=c?b+2:65535>=c?b+3:2097151>=c?b+4:67108863>=c?b+5:b+6}return b}function xc(a){return a.replace(/__Z[\w\d_]+/g,function(a){a:{var b=c.___cxa_demangle||c.__cxa_demangle;if(b)try{var e=a.substr(1),f=ub(e)+1,g=O(f);tb(e,u,g,f);var l=O(4),h=b(g,0,0,l);if(0===sc(l)&&h){var B=Sa(h);break a}}catch(t){}finally{g&&z(g),l&&z(l),h&&z(h)}else m.H("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");B=a}return a===B?a:a+" ["+B+"]"})}function yc(){a:{var a=Error();if(!a.stack){try{throw Error(0);
}catch(b){a=b}if(!a.stack){a="(no stack trace available)";break a}}a=a.stack.toString()}c.extraStackTrace&&(a+="\n"+c.extraStackTrace());return xc(a)}function Ta(){G("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+ba+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}
function ca(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var d=b.L;"number"===typeof d?void 0===b.U?c.dynCall_v(d):c.dynCall_vi(d,b.U):d(void 0===b.U?null:b.U)}}}function vb(){for(var a=Array(256),b=0;256>b;++b)a[b]=String.fromCharCode(b);wb=a}function w(a){for(var b="";u[a];)b+=wb[u[a++]];return b}function ka(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Aa(a,b){a=ka(a);return(new Function("body",
"return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Ba(a,b){var d=Aa(b,function(a){this.name=b;this.message=a;a=Error(a).stack;void 0!==a&&(this.stack=this.toString()+"\n"+a.replace(/^Error(:[^\n]*)?\n/,""))});d.prototype=Object.create(a.prototype);d.prototype.constructor=d;d.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return d}function q(a){throw new da(a);}function la(a){throw new xb(a);}
function V(a,b,d){function c(b){b=d(b);b.length!==a.length&&la("Mismatched type converter count");for(var c=0;c<a.length;++c)H(a[c],b[c])}a.forEach(function(a){Ca[a]=b});var f=Array(b.length),g=[],l=0;b.forEach(function(a,b){W.hasOwnProperty(a)?f[b]=W[a]:(g.push(a),ea.hasOwnProperty(a)||(ea[a]=[]),ea[a].push(function(){f[b]=W[a];++l;l===g.length&&c(f)}))});0===g.length&&c(f)}function H(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");
var d=b.name;a||q('type "'+d+'" must have a positive integer typeid pointer');if(W.hasOwnProperty(a)){if(c.ua)return;q("Cannot register type '"+d+"' twice")}W[a]=b;delete Ca[a];ea.hasOwnProperty(a)&&(b=ea[a],delete ea[a],b.forEach(function(a){a()}))}function yb(a){var b=Ua.length;Ua.push(a);return b}function Va(a){a=zc(a);var b=w(a);z(a);return b}function Da(a,b){var c=W[a];void 0===c&&q(b+" has unknown type "+Va(a));return c}function zb(a,b){for(var c=Array(a),e=0;e<a;++e)c[e]=Da(n[(b>>2)+e],"parameter "+
e);return c}function Wa(a,b){if(!(a instanceof Function))throw new TypeError("new_ called with constructor type "+typeof a+" which is not a function");var c=Aa(a.name||"unknownFunctionName",function(){});c.prototype=a.prototype;c=new c;a=a.apply(c,b);return a instanceof Object?a:c}function fa(){return!!fa.f}function ma(){var a=v.P;if(!a)return(m.F(0),0)|0;var b=v.m[a],d=b.type;if(!d)return(m.F(0),a)|0;var e=Array.prototype.slice.call(arguments);c.___cxa_is_pointer_type(d);ma.buffer||(ma.buffer=O(4));
n[ma.buffer>>2]=a;a=ma.buffer;for(var f=0;f<e.length;f++)if(e[f]&&c.___cxa_can_catch(e[f],d,a))return a=n[a>>2],b.Z=a,(m.F(e[f]),a)|0;a=n[a>>2];return(m.F(d),a)|0}function Ea(a){var b=Ac[a];return void 0===b?w(a):b}function Ab(){for(var a=0,b=5;b<y.length;++b)void 0!==y[b]&&++a;return a}function Bb(){for(var a=5;a<y.length;++a)if(void 0!==y[a])return y[a];return null}function Cb(){c.count_emval_handles=Ab;c.get_first_emval=Bb}function I(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;
case !1:return 4;default:var b=Xa.length?Xa.pop():y.length;y[b]={s:1,value:a};return b}}function na(a){a||q("Cannot use deleted val. handle = "+a);return y[a].value}function Db(a){var b=[];n[a>>2]=I(b);return b}function X(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Fa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}function Eb(a,b,c){switch(b){case 0:return c?
function(a){return D[a]}:function(a){return u[a]};case 1:return c?function(a){return U[a>>1]}:function(a){return Ga[a>>1]};case 2:return c?function(a){return n[a>>2]}:function(a){return J[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function oa(a,b){oa.f||(oa.f={});a in oa.f||(c.dynCall_v(b),oa.f[a]=1)}function Fb(a){if(!(this instanceof M&&a instanceof M))return!1;var b=this.a.g.b,c=this.a.c,e=a.a.g.b;for(a=a.a.c;b.l;)c=b.G(c),b=b.l;for(;e.l;)a=e.G(a),e=e.l;return b===e&&c===
a}function Gb(a){return{count:a.count,A:a.A,D:a.D,c:a.c,g:a.g,i:a.i,j:a.j}}function Ha(a){q(a.a.g.b.name+" instance already deleted")}function Hb(){this.a.c||Ha(this);if(this.a.D)return this.a.count.value+=1,this;var a=Object.create(Object.getPrototypeOf(this),{a:{value:Gb(this.a)}});a.a.count.value+=1;a.a.A=!1;return a}function Ib(a){a=a.a;a.i?a.j.v(a.i):a.g.b.v(a.c)}function Jb(){this.a.c||Ha(this);this.a.A&&!this.a.D&&q("Object already scheduled for deletion");--this.a.count.value;0===this.a.count.value&&
Ib(this);this.a.D||(this.a.i=void 0,this.a.c=void 0)}function Kb(){return!this.a.c}function Ia(){for(;pa.length;){var a=pa.pop();a.a.A=!1;a["delete"]()}}function Lb(){this.a.c||Ha(this);this.a.A&&!this.a.D&&q("Object already scheduled for deletion");pa.push(this);1===pa.length&&qa&&qa(Ia);this.a.A=!0;return this}function Mb(){M.prototype.isAliasOf=Fb;M.prototype.clone=Hb;M.prototype["delete"]=Jb;M.prototype.isDeleted=Kb;M.prototype.deleteLater=Lb}function M(){}function Ya(a,b,c){if(void 0===a[b].h){var d=
a[b];a[b]=function(){a[b].h.hasOwnProperty(arguments.length)||q("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].h+")!");return a[b].h[arguments.length].apply(this,arguments)};a[b].h=[];a[b].h[d.I]=d}}function Za(a,b,d){c.hasOwnProperty(a)?((void 0===d||void 0!==c[a].h&&void 0!==c[a].h[d])&&q("Cannot register public name '"+a+"' twice"),Ya(c,a,a),c.hasOwnProperty(d)&&q("Cannot register multiple overloads of a function with the same number of arguments ("+
d+")!"),c[a].h[d]=b):(c[a]=b,void 0!==d&&(c[a].$a=d))}function Nb(a,b,c,e,f,g,l,h){this.name=a;this.constructor=b;this.B=c;this.v=e;this.l=f;this.oa=g;this.G=l;this.ma=h;this.ya=[]}function Ja(a,b,c){for(;b!==c;)b.G||q("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.G(a),b=b.l;return a}function Ob(a,b){if(null===b)return this.Y&&q("null is not a valid "+this.name),0;b.a||q('Cannot pass "'+X(b)+'" as a '+this.name);b.a.c||q("Cannot pass deleted object as a pointer of type "+
this.name);return Ja(b.a.c,b.a.g.b,this.b)}function Pb(a,b){if(null===b){this.Y&&q("null is not a valid "+this.name);if(this.O){var c=this.za();null!==a&&a.push(this.v,c);return c}return 0}b.a||q('Cannot pass "'+X(b)+'" as a '+this.name);b.a.c||q("Cannot pass deleted object as a pointer of type "+this.name);!this.N&&b.a.g.N&&q("Cannot convert argument of type "+(b.a.j?b.a.j.name:b.a.g.name)+" to parameter type "+this.name);c=Ja(b.a.c,b.a.g.b,this.b);if(this.O)switch(void 0===b.a.i&&q("Passing raw pointer to smart pointer is illegal"),
this.Ca){case 0:b.a.j===this?c=b.a.i:q("Cannot convert argument of type "+(b.a.j?b.a.j.name:b.a.g.name)+" to parameter type "+this.name);break;case 1:c=b.a.i;break;case 2:if(b.a.j===this)c=b.a.i;else{var e=b.clone();c=this.Aa(c,I(function(){e["delete"]()}));null!==a&&a.push(this.v,c)}break;default:q("Unsupporting sharing policy")}return c}function Qb(a,b){if(null===b)return this.Y&&q("null is not a valid "+this.name),0;b.a||q('Cannot pass "'+X(b)+'" as a '+this.name);b.a.c||q("Cannot pass deleted object as a pointer of type "+
this.name);b.a.g.N&&q("Cannot convert argument of type "+b.a.g.name+" to parameter type "+this.name);return Ja(b.a.c,b.a.g.b,this.b)}function ra(a){return this.fromWireType(J[a>>2])}function Rb(a){this.ba&&(a=this.ba(a));return a}function Sb(a){this.v&&this.v(a)}function Tb(a){if(null!==a)a["delete"]()}function $a(a,b,c){if(b===c)return a;if(void 0===c.l)return null;a=$a(a,b,c.l);return null===a?null:c.ma(a)}function Ub(){return Object.keys(sa).length}function Vb(){var a=[],b;for(b in sa)sa.hasOwnProperty(b)&&
a.push(sa[b]);return a}function Wb(a){qa=a;pa.length&&qa&&qa(Ia)}function Xb(){c.getInheritedInstanceCount=Ub;c.getLiveInheritedInstances=Vb;c.flushPendingDeletes=Ia;c.setDelayFunction=Wb}function Yb(a,b){for(void 0===b&&q("ptr should not be undefined");a.l;)b=a.G(b),a=a.l;return b}function Zb(a,b){b=Yb(a,b);return sa[b]}function ta(a,b){b.g&&b.c||la("makeClassHandle requires ptr and ptrType");!!b.j!==!!b.i&&la("Both smartPtrType and smartPtr must be specified");b.count={value:1};return Object.create(a,
{a:{value:b}})}function $b(a){function b(){return this.O?ta(this.b.B,{g:this.xa,c:c,j:this,i:a}):ta(this.b.B,{g:this,c:a})}var c=this.qa(a);if(!c)return this.C(a),null;var e=Zb(this.b,c);if(void 0!==e){if(0===e.a.count.value)return e.a.c=c,e.a.i=a,e.clone();e=e.clone();this.C(a);return e}e=this.b.oa(c);e=ac[e];if(!e)return b.call(this);e=this.N?e.ka:e.pointerType;var f=$a(c,this.b,e.b);return null===f?b.call(this):this.O?ta(e.b.B,{g:e,c:f,j:this,i:a}):ta(e.b.B,{g:e,c:f})}function bc(){K.prototype.qa=
Rb;K.prototype.C=Sb;K.prototype.argPackAdvance=8;K.prototype.readValueFromPointer=ra;K.prototype.deleteObject=Tb;K.prototype.fromWireType=$b}function K(a,b,c,e,f,g,l,h,k,t,p){this.name=a;this.b=b;this.Y=c;this.N=e;this.O=f;this.xa=g;this.Ca=l;this.ba=h;this.za=k;this.Aa=t;this.v=p;f||void 0!==b.l?this.toWireType=Pb:(this.toWireType=e?Ob:Qb,this.o=null)}function ab(a,b,d){c.hasOwnProperty(a)||la("Replacing nonexistant public symbol");void 0!==c[a].h&&void 0!==d?c[a].h[d]=b:(c[a]=b,c[a].I=d)}function P(a,
b){a=w(a);if(void 0!==c["FUNCTION_TABLE_"+a])var d=c["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)d=FUNCTION_TABLE[b];else{d=c.asm["dynCall_"+a];void 0===d&&(d=c.asm["dynCall_"+a.replace(/f/g,"d")],void 0===d&&q("No dynCall invoker for signature: "+a));for(var e=[],f=1;f<a.length;++f)e.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+e.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";d=(new Function("dynCall","rawFunction",
f+"};\n"))(d,b)}"function"!==typeof d&&q("unknown function pointer with signature "+a+": "+b);return d}function ua(a,b){function c(a){f[a]||W[a]||(Ca[a]?Ca[a].forEach(c):(e.push(a),f[a]=!0))}var e=[],f={};b.forEach(c);throw new cc(a+": "+e.map(Va).join([", "]));}function bb(a){4<a&&0===--y[a].s&&(y[a]=void 0,Xa.push(a))}function Ka(a,b){for(var c=[],e=0;e<a;e++)c.push(n[(b>>2)+e]);return c}function La(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function dc(a,b){switch(b){case 2:return function(a){return this.fromWireType(ia[a>>
2])};case 3:return function(a){return this.fromWireType(ja[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Ma(a){if(Ma.J){var b=n[ec>>2];var d=n[b>>2]}else Ma.J=!0,L.USER=L.LOGNAME="web_user",L.PATH="/",L.PWD="/",L.HOME="/home/web_user",L.LANG="C",L._=c.thisProgram,d=N(1024,"i8",2),b=N(256,"i8*",2),n[b>>2]=d,n[ec>>2]=b;var e=[],f=0;for(l in a)if("string"===typeof a[l]){var g=l+"="+a[l];e.push(g);f+=g.length}if(1024<f)throw Error("Environment size exceeded TOTAL_ENV_SIZE!");
for(a=0;a<e.length;a++){f=g=e[a];var l=d;for(var h=0;h<f.length;++h)D[l++>>0]=f.charCodeAt(h);D[l>>0]=0;n[b+4*a>>2]=d;d+=g.length+1}n[b+4*e.length>>2]=0}function va(a){if(0===a)return 0;a=Sa(a);if(!L.hasOwnProperty(a))return 0;va.f&&z(va.f);va.f=N(cb(L[a]),"i8",0);return va.f}function db(a,b,c,e,f){var d=b.length;2>d&&q("argTypes array size mismatch! Must at least get return value and 'this' types!");var l=null!==b[1]&&null!==c,h=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].o){h=!0;break}var k=
"void"!==b[0].name,t="",p="";for(c=0;c<d-2;++c)t+=(0!==c?", ":"")+"arg"+c,p+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+ka(a)+"("+t+") {\nif (arguments.length !== "+(d-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+(d-2)+" args!');\n}\n";h&&(a+="var destructors = [];\n");var m=h?"destructors":"null";t="throwBindingError invoker fn runDestructors retType classParam".split(" ");e=[q,e,f,La,b[0],b[1]];l&&(a+="var thisWired = classParam.toWireType("+
m+", this);\n");for(c=0;c<d-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+m+", arg"+c+"); // "+b[c+2].name+"\n",t.push("argType"+c),e.push(b[c+2]);l&&(p="thisWired"+(0<p.length?", ":"")+p);a+=(k?"var rv = ":"")+"invoker(fn"+(0<p.length?", ":"")+p+");\n";if(h)a+="runDestructors(destructors);\n";else for(c=l?1:2;c<b.length;++c)d=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].o&&(a+=d+"_dtor("+d+"); // "+b[c].name+"\n",t.push(d+"_dtor"),e.push(b[c].o));k&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");
t.push(a+"}\n");return Wa(Function,t).apply(null,e)}function fc(a){c.___errno_location&&(n[c.___errno_location()>>2]=a);return a}function eb(){return Function("return this")()}function Q(a,b){r.w=b;try{var d=r.get(),e=r.get(),f=r.get();a=0;Q.buffer||(Q.f=[null,[],[]],Q.J=function(a,b){var d=Q.f[a];x(d);0===b||10===b?((1===a?c.print:c.printErr)(rb(d,0)),d.length=0):d.push(b)});for(b=0;b<f;b++){for(var g=n[e+8*b>>2],l=n[e+(8*b+4)>>2],h=0;h<l;h++)Q.J(d,u[g+h]);a+=l}return a}catch(B){return"undefined"!==
typeof FS&&B instanceof FS.R||G(B),-B.W}}function cb(a){var b=Array(ub(a)+1);tb(a,b,0,b.length);return b}function gc(a){for(var b=[],c=0;c<a.length;c++){var e=a[c];255<e&&(Bc&&x(!1,"Character code "+e+" ("+String.fromCharCode(e)+")  at offset "+c+" not in 0x00-0xFF."),e&=255);b.push(String.fromCharCode(e))}return b.join("")}function R(a){if(String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")){a=a.slice(37);if("boolean"===
typeof S&&S){try{var b=Buffer.from(a,"base64")}catch(g){b=new Buffer(a,"base64")}var c=new Uint8Array(b.buffer,b.byteOffset,b.byteLength)}else try{var e=Cc(a),f=new Uint8Array(e.length);for(b=0;b<e.length;++b)f[b]=e.charCodeAt(b);c=f}catch(g){throw Error("Converting base64 string to bytes failed.");}return c}}function ha(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}function fb(a){function b(){if(!c.calledRun&&(c.calledRun=!0,!Na)){Oa||(Oa=!0,ca(gb));ca(Dc);
if(c.onRuntimeInitialized)c.onRuntimeInitialized();c._main&&hc&&c.callMain(a);if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;)ic.unshift(c.postRun.shift());ca(ic)}}a=a||c.arguments;null===jc&&(jc=Date.now());if(!(0<Y)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)kc.unshift(c.preRun.shift());ca(kc);0<Y||c.calledRun||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1);
b()},1)):b())}}function lc(a,b){if(!b||!c.noExitRuntime){if(!c.noExitRuntime&&(Na=!0,E=Ec,ca(mc),c.onExit))c.onExit(a);S&&process.exit(a);c.quit(a,new ha(a))}}function G(a){if(c.onAbort)c.onAbort(a);void 0!==a?(c.print(a),c.printErr(a),a=JSON.stringify(a)):a="";Na=!0;var b="abort("+a+") at "+yc()+"\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";nc&&nc.forEach(function(c){b=c(b,a)});throw b;}c||(c=eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));
var wa={},T;for(T in c)c.hasOwnProperty(T)&&(wa[T]=c[T]);var xa=!1,Z=!1,S=!1,Pa=!1;if(c.ENVIRONMENT)if("WEB"===c.ENVIRONMENT)xa=!0;else if("WORKER"===c.ENVIRONMENT)Z=!0;else if("NODE"===c.ENVIRONMENT)S=!0;else if("SHELL"===c.ENVIRONMENT)Pa=!0;else throw Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");else xa="object"===typeof window,Z="function"===typeof importScripts,S="object"===typeof process&&"function"==="function"&&!xa&&!Z,Pa=!xa&&
!S&&!Z;if(S){c.print||(c.print=console.log);c.printErr||(c.printErr=console.warn);var hb,ib;c.read=function(a,b){var c=R(a);c||(hb||(hb=__webpack_require__(17)),ib||(ib=__webpack_require__(18)),a=ib.normalize(a),c=hb.readFileSync(a));return b?c:c.toString()};c.readBinary=function(a){a=c.read(a,!0);a.buffer||(a=new Uint8Array(a));x(a.buffer);return a};c.load=function(a){qb(read(a))};c.thisProgram||(c.thisProgram=1<process.argv.length?process.argv[1].replace(/\\/g,"/"):"unknown-program");c.arguments=process.argv.slice(2);
"undefined"!==typeof module&&(module.exports=c);process.on("uncaughtException",function(a){if(!(a instanceof ha))throw a;});c.inspect=function(){return"[Emscripten Module object]"}}else if(Pa)c.print||(c.print=print),"undefined"!=typeof printErr&&(c.printErr=printErr),c.read="undefined"!=typeof read?function(a){var b=R(a);return b?gc(b):read(a)}:function(){throw"no read() available";},c.readBinary=function(a){var b;if(b=R(a))return b;if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));
b=read(a,"binary");x("object"===typeof b);return b},"undefined"!=typeof scriptArgs?c.arguments=scriptArgs:"undefined"!=typeof arguments&&(c.arguments=arguments),"function"===typeof quit&&(c.quit=function(a){quit(a)}),eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined");else if(xa||Z)c.read=function(a){try{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText}catch(d){if(a=R(a))return gc(a);throw d;}},Z&&(c.readBinary=function(a){try{var b=
new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}catch(d){if(a=R(a))return a;throw d;}}),c.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){if(200==d.status||0==d.status&&d.response)b(d.response);else{var e=R(a);e?b(e.buffer):c()}};d.onerror=c;d.send(null)},"undefined"!=typeof arguments&&(c.arguments=arguments),"undefined"!==typeof console?(c.print||(c.print=function(a){console.log(a)}),
c.printErr||(c.printErr=function(a){console.warn(a)})):c.print||(c.print=function(){}),Z&&(c.load=importScripts),"undefined"===typeof c.setWindowTitle&&(c.setWindowTitle=function(a){document.title=a});else throw Error("Unknown runtime environment. Where are we?");!c.load&&c.read&&(c.load=function(a){qb(c.read(a))});c.print||(c.print=function(){});c.printErr||(c.printErr=c.print);c.arguments||(c.arguments=[]);c.thisProgram||(c.thisProgram="./this.program");c.quit||(c.quit=function(a,b){throw b;});
c.print=c.print;c.printErr=c.printErr;c.preRun=[];c.postRun=[];for(T in wa)wa.hasOwnProperty(T)&&(c[T]=wa[T]);wa=void 0;var m={F:function(a){return tempRet0=a},sa:function(){return tempRet0},Ea:function(){return E},Da:function(a){E=a},aa:function(a){switch(a){case "i1":case "i8":return 1;case "i16":return 2;case "i32":return 4;case "i64":return 8;case "float":return 4;case "double":return 8;default:return"*"===a[a.length-1]?m.T:"i"===a[0]?(a=parseInt(a.substr(1)),x(0===a%8),a/8):0}},pa:function(a){return Math.max(m.aa(a),
m.T)},Fa:16,ab:function(a,b){"double"===b||"i64"===b?a&7&&(x(4===(a&7)),a+=4):x(0===(a&3));return a},Oa:function(a,b,c){return c||"i64"!=a&&"double"!=a?a?Math.min(b||(a?m.pa(a):0),m.T):Math.min(b,8):8},V:function(a,b,d){return d&&d.length?c["dynCall_"+a].apply(null,[b].concat(d)):c["dynCall_"+a].call(null,b)},M:[],ga:function(a){for(var b=0;b<m.M.length;b++)if(!m.M[b])return m.M[b]=a,2*(1+b);throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";},Ba:function(a){m.M[(a-
2)/2]=null},H:function(a){m.H.f||(m.H.f={});m.H.f[a]||(m.H.f[a]=1,c.printErr(a))},X:{},Qa:function(a,b){if(a){x(b);m.X[b]||(m.X[b]={});var c=m.X[b];c[a]||(c[a]=1===b.length?function(){return m.V(b,a)}:2===b.length?function(c){return m.V(b,a,[c])}:function(){return m.V(b,a,Array.prototype.slice.call(arguments))});return c[a]}},Pa:function(){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";},ea:function(a){var b=E;E=E+
a|0;E=E+15&-16;return b},fa:function(a){var b=C;C=C+a|0;C=C+15&-16;return b},na:function(a){var b=n[aa>>2];a=(b+a+15|0)&-16;n[aa>>2]=a;if(a=a>=ba)Ta(),a=!0;return a?(n[aa>>2]=b,0):b},$:function(a,b){return Math.ceil(a/(b?b:16))*(b?b:16)},Xa:function(a,b,c){return c?+(a>>>0)+4294967296*+(b>>>0):+(a>>>0)+4294967296*+(b|0)},S:8,T:4,Ga:0};m.addFunction=m.ga;m.removeFunction=m.Ba;var Na=0,sb="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;c.UTF8ToString=function(a){return rb(u,a)};"undefined"!==
typeof TextDecoder&&new TextDecoder("utf-16le");var A,D,u,U,Ga,n,J,ia,ja,C,jb,E,Qa,kb,aa;var oc=C=jb=E=Qa=kb=aa=0;var lb=c.TOTAL_STACK||5242880,ba=c.TOTAL_MEMORY||16777216;ba<lb&&c.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+ba+"! (TOTAL_STACK="+lb+")");c.buffer?A=c.buffer:A=new ArrayBuffer(ba);c.HEAP8=D=new Int8Array(A);c.HEAP16=U=new Int16Array(A);c.HEAP32=n=new Int32Array(A);c.HEAPU8=u=new Uint8Array(A);c.HEAPU16=Ga=new Uint16Array(A);c.HEAPU32=J=new Uint32Array(A);c.HEAPF32=
ia=new Float32Array(A);c.HEAPF64=ja=new Float64Array(A);n[0]=1668509029;U[1]=25459;if(115!==u[2]||99!==u[3])throw"Runtime error: expected the system to be little-endian!";c.HEAP=void 0;c.buffer=A;c.HEAP8=D;c.HEAP16=U;c.HEAP32=n;c.HEAPU8=u;c.HEAPU16=Ga;c.HEAPU32=J;c.HEAPF32=ia;c.HEAPF64=ja;var kc=[],gb=[],Dc=[],mc=[],ic=[],Oa=!1;Math.imul&&-5===Math.imul(4294967295,5)||(Math.imul=function(a,b){var c=a&65535,e=b&65535;return c*e+((a>>>16)*e+c*(b>>>16)<<16)|0});Math.imul=Math.imul;Math.clz32||(Math.clz32=
function(a){a>>>=0;for(var b=0;32>b;b++)if(a&1<<31-b)return b;return 32});Math.clz32=Math.clz32;Math.trunc||(Math.trunc=function(a){return 0>a?Math.ceil(a):Math.floor(a)});Math.trunc=Math.trunc;var tc=Math.abs,wc=Math.ceil,vc=Math.floor,uc=Math.min,Y=0,mb=null,ya=null;c.preloadedImages={};c.preloadedAudios={};var F=null,nb=[function(a,b){window.asmDomHelpers.domApi.removeAttribute(a,c.UTF8ToString(b))},function(a,b,d){window.asmDomHelpers.domApi.setAttribute(a,c.UTF8ToString(b),c.UTF8ToString(d))},
function(a){return window.asmDomHelpers.domApi.createTextNode(c.UTF8ToString(a))},function(a){return window.asmDomHelpers.domApi.createComment(c.UTF8ToString(a))},function(a,b){return window.asmDomHelpers.domApi.createElementNS(c.UTF8ToString(a),c.UTF8ToString(b))},function(a){return window.asmDomHelpers.domApi.createElement(c.UTF8ToString(a))},function(a,b,c){window.asmDomHelpers.diff(a,b,c)},function(a,b){window.asmDomHelpers.domApi.appendChild(a,b)},function(a,b){window.asmDomHelpers.domApi.appendChild(a,
window.asmDomHelpers.domApi.createTextNode(c.UTF8ToString(b)))},function(a,b,c){window.asmDomHelpers.domApi.insertBefore(a,b,window.asmDomHelpers.domApi.nextSibling(c))},function(a,b,c){window.asmDomHelpers.domApi.insertBefore(a,b,c)},function(a,b,c){window.asmDomHelpers.domApi.insertBefore(a,b,c)},function(a){window.asmDomHelpers.domApi.removeChild(a)},function(a){window.asmDomHelpers.domApi.setTextContent(a,"")},function(a,b){window.asmDomHelpers.domApi.setTextContent(a,c.UTF8ToString(b))},function(a,
b){var c=window.asmDomHelpers.domApi.parentNode(b);0!==c&&(window.asmDomHelpers.domApi.insertBefore(c,a,window.asmDomHelpers.domApi.nextSibling(b)),window.asmDomHelpers.domApi.removeChild(b))}];oc=m.S;C=oc+10272;gb.push({L:function(){Fc()}},{L:function(){Gc()}},{L:function(){Hc()}},{L:function(){Ic()}});F="data:application/octet-stream;base64,CAYAAIYHAAD0BgAAmQcAAAAAAAABAAAAKAAAAAAAAAAIBgAA2AcAADAGAADKDgAAiAEAAAAAAAD0BgAAcA8AAAAAAAABAAAAKAAAAAAAAAAIBgAAnBAAAPQGAAAPEQAAAAAAAAEAAAB4AAAAAAAAAPQGAAAzEQAAAAAAAAEAAACQAAAAAAAAAAgGAABfEQAA2AYAABoSAAAAAAAAYAAAANgGAAD0EQAAAQAAAGAAAADYBgAAtBIAAAAAAABYAAAA2AYAAD8SAAABAAAAWAAAAPQGAAA+FwAAAAAAAAEAAAAoAAAAAAAAAAgGAAAfFwAACAYAAAAXAAAIBgAA4RYAAAgGAADCFgAACAYAAKMWAAAIBgAAhBYAAAgGAABlFgAACAYAAEYWAAAIBgAAJxYAAAgGAAAIFgAACAYAAOkVAAAIBgAAyhUAADAGAABkIQAAmAEAAAAAAAAIBgAAfCEAAPQGAACTIQAAAAAAAAIAAABQAQAAAgAAAGABAAACAAAAMAYAALUhAABoAQAAAAAAAAgGAADRIQAACAYAAHsiAAAwBgAA2yIAALgBAAAAAAAAMAYAAIgiAADIAQAAAAAAAAgGAACpIgAAMAYAALYiAACoAQAAAAAAADAGAAC9IwAAoAEAAAAAAAAwBgAAzSMAAKABAAAAAAAAMAYAAN8jAADgAQAAAAAAADAGAADwIwAA4AEAAAAAAAAwBgAAASQAAPABAAAAAAAAMAYAADUkAAC4AQAAAAAAADAGAAARJAAAMAIAAAAAAAAwBgAAVyQAALgBAAAAAAAAvAYAAH8kAAC8BgAAgSQAALwGAACEJAAAvAYAAIYkAAC8BgAAiCQAALwGAACKJAAAvAYAAIwkAAC8BgAAjiQAALwGAACQJAAAvAYAAJIkAAC8BgAAlCQAALwGAACWJAAAvAYAAJgkAAC8BgAAmiQAADAGAACcJAAAqAEAAAAAAACgAgAACAAAAAAAAAAwAAAAAQAAAAIAAAADAAAAAQAAAAIAAAABAAAAAQAAAAIAAAACAAAAAwAAAEAAAACoAgAAYAIAAKgCAACoAgAACAAAAEAAAACoAgAAoAIAAKgCAABgAgAAqAIAAKgCAACoAgAAQAAAAKgCAABAAAAAcAIAAKgCAABAAAAAqAIAAKgCAABAAAAAQAAAAKgCAABAAAAAWAAAAKgCAABAAAAAYAAAAKgCAABAAAAAWAAAAKgCAACoAgAAQAAAAFgAAABAAAAAqAIAAEAAAABYAAAAYAAAAKgCAABAAAAAWAAAAKACAACYAAAAYAIAAJgAAACoAgAAYAIAAJgAAACoAgAAqAIAAKgCAACoAAAACAAAAGAAAACoAgAAcAIAAGAAAACoAgAAqAIAALgAAACoAgAAyAAAAAgAAABYAAAAQAAAAGACAABYAAAAQAAAAEAAAABYBAAAFAAAAEMuVVRGLTgAAAAAAAAAAAAAAAAA3hIElQAAAAD///////////////88BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAADAAwAAwAQAAMAFAADABgAAwAcAAMAIAADACQAAwAoAAMALAADADAAAwA0AAMAOAADADwAAwBAAAMARAADAEgAAwBMAAMAUAADAFQAAwBYAAMAXAADAGAAAwBkAAMAaAADAGwAAwBwAAMAdAADAHgAAwB8AAMAAAACzAQAAwwIAAMMDAADDBAAAwwUAAMMGAADDBwAAwwgAAMMJAADDCgAAwwsAAMMMAADDDQAA0w4AAMMPAADDAAAMuwEADMMCAAzDAwAMwwQADNMFAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAgAAABAoAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgBAAABAAAABAAAAAMAAAADAAAABAAAAAMAAAAFAAAABgAAAAQAAAAHAAAAAQAAAAAAAACoAQAABQAAAAYAAAAHAAAACAAAAAMAAAABAAAAAQAAAAEAAAAAAAAA0AEAAAUAAAAJAAAABwAAAAgAAAADAAAAAgAAAAIAAAACAAAAAAAAAOABAAAKAAAACwAAAAgAAAAAAAAA8AEAAAwAAAANAAAACQAAAAAAAAAAAgAACgAAAA4AAAAIAAAAAAAAABACAAAKAAAADwAAAAgAAAAAAAAAIAIAAAwAAAAQAAAACQAAAAAAAABQAgAABQAAABEAAAAHAAAACAAAAAQAAAAAAAAAQAIAAAUAAAASAAAABwAAAAgAAAAFAAAAAAAAANACAAAFAAAAEwAAAAcAAAAIAAAAAwAAAAMAAAADAAAAAwAAALAnAABmb3JlaWduT2JqZWN0AGtleQBub2RlVHlwZQB0YWdOYW1lAGF0dHJpYnV0ZXMAbGVuZ3RoAG5vZGVOYW1lAG5vZGVWYWx1ZQBjaGlsZE5vZGVzAHRleHRDb250ZW50AGRvbUFwaQBhZGROb2RlAE4xMGVtc2NyaXB0ZW4zdmFsRQBOU3QzX18yMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQBOU3QzX18yMjFfX2Jhc2ljX3N0cmluZ19jb21tb25JTGIxRUVFAHsgd2luZG93Wydhc21Eb21IZWxwZXJzJ11bJ2RvbUFwaSddWydyZW1vdmVBdHRyaWJ1dGUnXSggJDAsIE1vZHVsZVsnVVRGOFRvU3RyaW5nJ10oJDEpICk7IH0AeyB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZG9tQXBpJ11bJ3NldEF0dHJpYnV0ZSddKCAkMCwgTW9kdWxlWydVVEY4VG9TdHJpbmcnXSgkMSksIE1vZHVsZVsnVVRGOFRvU3RyaW5nJ10oJDIpICk7IH0AeyB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZGlmZiddKCQwLCAkMSwgJDIpOyB9AHsgcmV0dXJuIHdpbmRvd1snYXNtRG9tSGVscGVycyddWydkb21BcGknXVsnY3JlYXRlVGV4dE5vZGUnXSggTW9kdWxlWydVVEY4VG9TdHJpbmcnXSgkMCkgKTsgfQB7IHJldHVybiB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZG9tQXBpJ11bJ2NyZWF0ZUNvbW1lbnQnXSggTW9kdWxlWydVVEY4VG9TdHJpbmcnXSgkMCkgKTsgfQB7IHJldHVybiB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZG9tQXBpJ11bJ2NyZWF0ZUVsZW1lbnROUyddKCBNb2R1bGVbJ1VURjhUb1N0cmluZyddKCQwKSwgTW9kdWxlWydVVEY4VG9TdHJpbmcnXSgkMSkgKTsgfQB7IHJldHVybiB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZG9tQXBpJ11bJ2NyZWF0ZUVsZW1lbnQnXSggTW9kdWxlWydVVEY4VG9TdHJpbmcnXSgkMCkgKTsgfQB7IHdpbmRvd1snYXNtRG9tSGVscGVycyddWydkb21BcGknXVsnYXBwZW5kQ2hpbGQnXSgkMCwgJDEpOyB9AHsgd2luZG93Wydhc21Eb21IZWxwZXJzJ11bJ2RvbUFwaSddWydhcHBlbmRDaGlsZCddKCAkMCwgd2luZG93Wydhc21Eb21IZWxwZXJzJ11bJ2RvbUFwaSddWydjcmVhdGVUZXh0Tm9kZSddKCBNb2R1bGVbJ1VURjhUb1N0cmluZyddKCQxKSApICk7IH0AeyB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZG9tQXBpJ11bJ2luc2VydEJlZm9yZSddKCQwLCAkMSwgJDIpIH0AeyB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZG9tQXBpJ11bJ3JlbW92ZUNoaWxkJ10oJDApOyB9AHsgd2luZG93Wydhc21Eb21IZWxwZXJzJ11bJ2RvbUFwaSddWydpbnNlcnRCZWZvcmUnXSggJDAsICQxLCB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZG9tQXBpJ11bJ25leHRTaWJsaW5nJ10oJDIpICk7IH0AeyB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZG9tQXBpJ11bJ2luc2VydEJlZm9yZSddKCQwLCAkMSwgJDIpOyB9AHsgd2luZG93Wydhc21Eb21IZWxwZXJzJ11bJ2RvbUFwaSddWydzZXRUZXh0Q29udGVudCddKCQwLCAiIik7IH0AeyB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZG9tQXBpJ11bJ3NldFRleHRDb250ZW50J10oICQwLCBNb2R1bGVbJ1VURjhUb1N0cmluZyddKCQxKSApOyB9AHsgdmFyIHBhcmVudCA9IHdpbmRvd1snYXNtRG9tSGVscGVycyddWydkb21BcGknXVsncGFyZW50Tm9kZSddKCQxKTsgaWYgKHBhcmVudCAhPT0gMCkgeyB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZG9tQXBpJ11bJ2luc2VydEJlZm9yZSddKCBwYXJlbnQsICQwLCB3aW5kb3dbJ2FzbURvbUhlbHBlcnMnXVsnZG9tQXBpJ11bJ25leHRTaWJsaW5nJ10oJDEpICk7IHdpbmRvd1snYXNtRG9tSGVscGVycyddWydkb21BcGknXVsncmVtb3ZlQ2hpbGQnXSgkMSk7IH0gfQBnbHlwaABtYXJrZXIAbWlzc2luZy1nbHlwaABwYXR0ZXJuAHN2ZwBzd2l0Y2gAc3ltYm9sAHRpdGxlAGNvbABlbWJlZABpbWcAaW5wdXQAa2V5Z2VuAHBhcmFtAHNvdXJjZQB0cmFjawB3YnIAd3N0cmluZ19jb252ZXJ0OiBmcm9tX2J5dGVzIGVycm9yAE5TdDNfXzIxMmNvZGVjdnRfdXRmOEl3TG0xMTE0MTExRUxOU18xMmNvZGVjdnRfbW9kZUUwRUVFAHdzdHJpbmdfY29udmVydDogdG9fYnl0ZXMgZXJyb3IAJmFtcDsAJnF1b3Q7ACZhcG9zOwAmbHQ7ACZndDsAJiM5NjsAd2luZG93AGFzbURvbUhlbHBlcnMAbnMAPSIAIgBhcHBlbmRQcm9wcwBOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQAtLT4AbWFwOjphdDogIGtleSBub3QgZm91bmQAaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcAIC8AaW5zZXJ0SW5uZXJIVE1MAE1hcFN0cmluZ1N0cmluZwBWTm9kZVB0clZlY3RvcgBfZGVsZXRlVk5vZGUAdmlpAHRvVk5vZGUAaWlpAF90b0hUTUwAX2dldE5vZGUAX3BhdGNoAHZpaWkAX2hfcwBfaF90aQBpaWlpAF9oX3NuAF9oX3N0AF9oX3NkAF9oX3NjAF9oX3NkbgBpaWlpaQBfaF9zZHQAX2hfc2RjAF9oX2VsbQBOU3QzX18yM21hcElOU18xMmJhc2ljX3N0cmluZ0l3TlNfMTFjaGFyX3RyYWl0c0l3RUVOU185YWxsb2NhdG9ySXdFRUVFUzZfTlNfNGxlc3NJUzZfRUVOUzRfSU5TXzRwYWlySUtTNl9TNl9FRUVFRUUATlN0M19fMjZ2ZWN0b3JJak5TXzlhbGxvY2F0b3JJakVFRUUATlN0M19fMjEzX192ZWN0b3JfYmFzZUlqTlNfOWFsbG9jYXRvcklqRUVFRQBOU3QzX18yMjBfX3ZlY3Rvcl9iYXNlX2NvbW1vbklMYjFFRUUAaWkAdgB2aQBwdXNoX2JhY2sAcmVzaXplAHZpaWlpAHNpemUAZ2V0AHNldABhbGxvY2F0b3I8VD46OmFsbG9jYXRlKHNpemVfdCBuKSAnbicgZXhjZWVkcyBtYXhpbXVtIHN1cHBvcnRlZCBzaXplAFBLTlN0M19fMjZ2ZWN0b3JJak5TXzlhbGxvY2F0b3JJakVFRUUAUE5TdDNfXzI2dmVjdG9ySWpOU185YWxsb2NhdG9ySWpFRUVFAFBLTlN0M19fMjNtYXBJTlNfMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRVM2X05TXzRsZXNzSVM2X0VFTlM0X0lOU180cGFpcklLUzZfUzZfRUVFRUVFAFBOU3QzX18yM21hcElOU18xMmJhc2ljX3N0cmluZ0l3TlNfMTFjaGFyX3RyYWl0c0l3RUVOU185YWxsb2NhdG9ySXdFRUVFUzZfTlNfNGxlc3NJUzZfRUVOUzRfSU5TXzRwYWlySUtTNl9TNl9FRUVFRUUAc3RkOjpiYXNpY19zdHJpbmc8dW5zaWduZWQgY2hhcj4Ac3RkOjp3c3RyaW5nAGVtc2NyaXB0ZW46OnZhbABlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxkb3VibGU+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGxvbmcgZG91YmxlPgBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0llRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZEVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWZFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0ltRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbEVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWpFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lpRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJdEVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXNFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0loRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJYUVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWNFRQBOU3QzX18yMTJiYXNpY19zdHJpbmdJaE5TXzExY2hhcl90cmFpdHNJaEVFTlNfOWFsbG9jYXRvckloRUVFRQARAAoAERERAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABEADwoREREDCgcAARMJCwsAAAkGCwAACwAGEQAAABEREQAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAARAAoKERERAAoAAAIACQsAAAAJAAsAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAA0AAAAEDQAAAAAJDgAAAAAADgAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAPAAAAAA8AAAAACRAAAAAAABAAABAAABIAAAASEhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAABISEgAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAoAAAAACgAAAAAJCwAAAAAACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAAC0rICAgMFgweAAtMFgrMFggMFgtMHgrMHggMHgAaW5mAElORgBOQU4AMDEyMzQ1Njc4OUFCQ0RFRlQhIhkNAQIDEUscDBAECx0SHidobm9wcWIgBQYPExQVGggWBygkFxgJCg4bHyUjg4J9JiorPD0+P0NHSk1YWVpbXF1eX2BhY2RlZmdpamtscnN0eXp7fABJbGxlZ2FsIGJ5dGUgc2VxdWVuY2UARG9tYWluIGVycm9yAFJlc3VsdCBub3QgcmVwcmVzZW50YWJsZQBOb3QgYSB0dHkAUGVybWlzc2lvbiBkZW5pZWQAT3BlcmF0aW9uIG5vdCBwZXJtaXR0ZWQATm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeQBObyBzdWNoIHByb2Nlc3MARmlsZSBleGlzdHMAVmFsdWUgdG9vIGxhcmdlIGZvciBkYXRhIHR5cGUATm8gc3BhY2UgbGVmdCBvbiBkZXZpY2UAT3V0IG9mIG1lbW9yeQBSZXNvdXJjZSBidXN5AEludGVycnVwdGVkIHN5c3RlbSBjYWxsAFJlc291cmNlIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlAEludmFsaWQgc2VlawBDcm9zcy1kZXZpY2UgbGluawBSZWFkLW9ubHkgZmlsZSBzeXN0ZW0ARGlyZWN0b3J5IG5vdCBlbXB0eQBDb25uZWN0aW9uIHJlc2V0IGJ5IHBlZXIAT3BlcmF0aW9uIHRpbWVkIG91dABDb25uZWN0aW9uIHJlZnVzZWQASG9zdCBpcyBkb3duAEhvc3QgaXMgdW5yZWFjaGFibGUAQWRkcmVzcyBpbiB1c2UAQnJva2VuIHBpcGUASS9PIGVycm9yAE5vIHN1Y2ggZGV2aWNlIG9yIGFkZHJlc3MAQmxvY2sgZGV2aWNlIHJlcXVpcmVkAE5vIHN1Y2ggZGV2aWNlAE5vdCBhIGRpcmVjdG9yeQBJcyBhIGRpcmVjdG9yeQBUZXh0IGZpbGUgYnVzeQBFeGVjIGZvcm1hdCBlcnJvcgBJbnZhbGlkIGFyZ3VtZW50AEFyZ3VtZW50IGxpc3QgdG9vIGxvbmcAU3ltYm9saWMgbGluayBsb29wAEZpbGVuYW1lIHRvbyBsb25nAFRvbyBtYW55IG9wZW4gZmlsZXMgaW4gc3lzdGVtAE5vIGZpbGUgZGVzY3JpcHRvcnMgYXZhaWxhYmxlAEJhZCBmaWxlIGRlc2NyaXB0b3IATm8gY2hpbGQgcHJvY2VzcwBCYWQgYWRkcmVzcwBGaWxlIHRvbyBsYXJnZQBUb28gbWFueSBsaW5rcwBObyBsb2NrcyBhdmFpbGFibGUAUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIAU3RhdGUgbm90IHJlY292ZXJhYmxlAFByZXZpb3VzIG93bmVyIGRpZWQAT3BlcmF0aW9uIGNhbmNlbGVkAEZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZABObyBtZXNzYWdlIG9mIGRlc2lyZWQgdHlwZQBJZGVudGlmaWVyIHJlbW92ZWQARGV2aWNlIG5vdCBhIHN0cmVhbQBObyBkYXRhIGF2YWlsYWJsZQBEZXZpY2UgdGltZW91dABPdXQgb2Ygc3RyZWFtcyByZXNvdXJjZXMATGluayBoYXMgYmVlbiBzZXZlcmVkAFByb3RvY29sIGVycm9yAEJhZCBtZXNzYWdlAEZpbGUgZGVzY3JpcHRvciBpbiBiYWQgc3RhdGUATm90IGEgc29ja2V0AERlc3RpbmF0aW9uIGFkZHJlc3MgcmVxdWlyZWQATWVzc2FnZSB0b28gbGFyZ2UAUHJvdG9jb2wgd3JvbmcgdHlwZSBmb3Igc29ja2V0AFByb3RvY29sIG5vdCBhdmFpbGFibGUAUHJvdG9jb2wgbm90IHN1cHBvcnRlZABTb2NrZXQgdHlwZSBub3Qgc3VwcG9ydGVkAE5vdCBzdXBwb3J0ZWQAUHJvdG9jb2wgZmFtaWx5IG5vdCBzdXBwb3J0ZWQAQWRkcmVzcyBmYW1pbHkgbm90IHN1cHBvcnRlZCBieSBwcm90b2NvbABBZGRyZXNzIG5vdCBhdmFpbGFibGUATmV0d29yayBpcyBkb3duAE5ldHdvcmsgdW5yZWFjaGFibGUAQ29ubmVjdGlvbiByZXNldCBieSBuZXR3b3JrAENvbm5lY3Rpb24gYWJvcnRlZABObyBidWZmZXIgc3BhY2UgYXZhaWxhYmxlAFNvY2tldCBpcyBjb25uZWN0ZWQAU29ja2V0IG5vdCBjb25uZWN0ZWQAQ2Fubm90IHNlbmQgYWZ0ZXIgc29ja2V0IHNodXRkb3duAE9wZXJhdGlvbiBhbHJlYWR5IGluIHByb2dyZXNzAE9wZXJhdGlvbiBpbiBwcm9ncmVzcwBTdGFsZSBmaWxlIGhhbmRsZQBSZW1vdGUgSS9PIGVycm9yAFF1b3RhIGV4Y2VlZGVkAE5vIG1lZGl1bSBmb3VuZABXcm9uZyBtZWRpdW0gdHlwZQBObyBlcnJvciBpbmZvcm1hdGlvbgAAbmFuAExDX0NUWVBFAAAAAExDX05VTUVSSUMAAExDX1RJTUUAAAAAAExDX0NPTExBVEUAAExDX01PTkVUQVJZAExDX01FU1NBR0VTAExDX0FMTABMQU5HAEMuVVRGLTgAUE9TSVgATVVTTF9MT0NQQVRIAChudWxsKQBOU3QzX18yNmxvY2FsZTVmYWNldEUAQwBOU3QzX18yMTJjb2RlY3Z0X2Jhc2VFAE5TdDNfXzI3Y29kZWN2dEl3YzExX19tYnN0YXRlX3RFRQBOU3QzX18yMTRfX2NvZGVjdnRfdXRmOEl3RUUATlN0M19fMjE0X19zaGFyZWRfY291bnRFAHRlcm1pbmF0aW5nIHdpdGggJXMgZXhjZXB0aW9uIG9mIHR5cGUgJXM6ICVzAHRlcm1pbmF0aW5nIHdpdGggJXMgZXhjZXB0aW9uIG9mIHR5cGUgJXMAdGVybWluYXRpbmcgd2l0aCAlcyBmb3JlaWduIGV4Y2VwdGlvbgB0ZXJtaW5hdGluZwB1bmNhdWdodABTdDlleGNlcHRpb24ATjEwX19jeHhhYml2MTE2X19zaGltX3R5cGVfaW5mb0UAU3Q5dHlwZV9pbmZvAE4xMF9fY3h4YWJpdjEyMF9fc2lfY2xhc3NfdHlwZV9pbmZvRQBOMTBfX2N4eGFiaXYxMTdfX2NsYXNzX3R5cGVfaW5mb0UAcHRocmVhZF9vbmNlIGZhaWx1cmUgaW4gX19jeGFfZ2V0X2dsb2JhbHNfZmFzdCgpAGNhbm5vdCBjcmVhdGUgcHRocmVhZCBrZXkgZm9yIF9fY3hhX2dldF9nbG9iYWxzKCkAY2Fubm90IHplcm8gb3V0IHRocmVhZCB2YWx1ZSBmb3IgX19jeGFfZ2V0X2dsb2JhbHMoKQB0ZXJtaW5hdGVfaGFuZGxlciB1bmV4cGVjdGVkbHkgcmV0dXJuZWQAU3QxMWxvZ2ljX2Vycm9yAFN0MTNydW50aW1lX2Vycm9yAFN0MTJsZW5ndGhfZXJyb3IAU3QxMm91dF9vZl9yYW5nZQBTdDExcmFuZ2VfZXJyb3IATjEwX19jeHhhYml2MTE5X19wb2ludGVyX3R5cGVfaW5mb0UATjEwX19jeHhhYml2MTE3X19wYmFzZV90eXBlX2luZm9FAE4xMF9fY3h4YWJpdjEyM19fZnVuZGFtZW50YWxfdHlwZV9pbmZvRQB2AERuAGIAYwBoAGEAcwB0AGkAagBsAG0AZgBkAE4xMF9fY3h4YWJpdjEyMV9fdm1pX2NsYXNzX3R5cGVfaW5mb0UAPgAhAC4Ac3RkOjpzdHJpbmcAZmFsc2UAdHJ1ZQBjaGFyAHNpZ25lZCBjaGFyAHVuc2lnbmVkIGNoYXIAc2hvcnQAdW5zaWduZWQgc2hvcnQAdm9pZABib29sAGludAB1bnNpZ25lZCBpbnQAbG9uZwB1bnNpZ25lZCBsb25nAGZsb2F0AGRvdWJsZQ==";
var Jc=C;C+=16;var wb=void 0,ea={},W={},Ca={},da=void 0,xb=void 0,Ua=[],v={P:0,K:[],m:{},la:function(a){if(!a||v.m[a])return a;for(var b in v.m)if(v.m[b].Z===a)return b;return a},ha:function(a){a&&v.m[a].s++},Ka:function(a){if(a){var b=v.m[a];x(0<b.s);b.s--;0!==b.s||b.da||(b.C&&c.dynCall_vi(b.C,a),delete v.m[a],___cxa_free_exception(a))}},Ja:function(a){a&&(v.m[a].s=0)}},Ac={},Xa=[],y=[{},{value:void 0},{value:null},{value:!0},{value:!1}],qa=void 0,pa=[],ac={},sa={},cc=void 0,Ra={},ob=1,r={w:0,get:function(){r.w+=
4;return n[r.w-4>>2]},Sa:function(){return Sa(r.get())},Na:function(){var a=r.get(),b=r.get();0<=a?x(0===b):x(-1===b);return a},Ua:function(){x(0===r.get())}},ec=C;C+=16;var L={},Kc=N([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,
1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",2);vb();da=c.BindingError=Ba(Error,"BindingError");xb=c.InternalError=Ba(Error,"InternalError");Cb();Mb();bc();Xb();cc=c.UnboundTypeError=Ba(Error,"UnboundTypeError");Ma(L);mc.push(function(){var a=c._fflush;a&&a(0);if(a=Q.J){var b=Q.f;b[1].length&&a(1,10);b[2].length&&a(2,10)}});aa=N(1,"i32",2);jb=
E=m.$(C);Qa=jb+lb;kb=m.$(Qa);n[aa>>2]=kb;var Bc=!1,Cc="function"===typeof atob?atob:function(a){var b="",c=0;a=a.replace(/[^A-Za-z0-9\+\/=]/g,"");do{var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));
e=e<<2|f>>4;f=(f&15)<<4|g>>2;var h=(g&3)<<6|l;b+=String.fromCharCode(e);64!==g&&(b+=String.fromCharCode(f));64!==l&&(b+=String.fromCharCode(h))}while(c<a.length);return b};c.ia={Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,NaN:NaN,Infinity:Infinity};c.ja={abort:G,assert:x,enlargeMemory:function(){Ta()},getTotalMemory:function(){return ba},abortOnCannotGrowMemory:Ta,
invoke_iiii:function(a,b,d,e){try{return c.dynCall_iiii(a,b,d,e)}catch(f){if("number"!==typeof f&&"longjmp"!==f)throw f;c.setThrew(1,0)}},invoke_viiiii:function(a,b,d,e,f,g){try{c.dynCall_viiiii(a,b,d,e,f,g)}catch(l){if("number"!==typeof l&&"longjmp"!==l)throw l;c.setThrew(1,0)}},invoke_i:function(a){try{return c.dynCall_i(a)}catch(b){if("number"!==typeof b&&"longjmp"!==b)throw b;c.setThrew(1,0)}},invoke_vi:function(a,b){try{c.dynCall_vi(a,b)}catch(d){if("number"!==typeof d&&"longjmp"!==d)throw d;
c.setThrew(1,0)}},invoke_vii:function(a,b,d){try{c.dynCall_vii(a,b,d)}catch(e){if("number"!==typeof e&&"longjmp"!==e)throw e;c.setThrew(1,0)}},invoke_ii:function(a,b){try{return c.dynCall_ii(a,b)}catch(d){if("number"!==typeof d&&"longjmp"!==d)throw d;c.setThrew(1,0)}},invoke_viii:function(a,b,d,e){try{c.dynCall_viii(a,b,d,e)}catch(f){if("number"!==typeof f&&"longjmp"!==f)throw f;c.setThrew(1,0)}},invoke_v:function(a){try{c.dynCall_v(a)}catch(b){if("number"!==typeof b&&"longjmp"!==b)throw b;c.setThrew(1,
0)}},invoke_iiiiiiiii:function(a,b,d,e,f,g,l,h,k){try{return c.dynCall_iiiiiiiii(a,b,d,e,f,g,l,h,k)}catch(t){if("number"!==typeof t&&"longjmp"!==t)throw t;c.setThrew(1,0)}},invoke_iiiii:function(a,b,d,e,f){try{return c.dynCall_iiiii(a,b,d,e,f)}catch(g){if("number"!==typeof g&&"longjmp"!==g)throw g;c.setThrew(1,0)}},invoke_viiiiii:function(a,b,d,e,f,g,l){try{c.dynCall_viiiiii(a,b,d,e,f,g,l)}catch(h){if("number"!==typeof h&&"longjmp"!==h)throw h;c.setThrew(1,0)}},invoke_iii:function(a,b,d){try{return c.dynCall_iii(a,
b,d)}catch(e){if("number"!==typeof e&&"longjmp"!==e)throw e;c.setThrew(1,0)}},invoke_iiiiii:function(a,b,d,e,f,g){try{return c.dynCall_iiiiii(a,b,d,e,f,g)}catch(l){if("number"!==typeof l&&"longjmp"!==l)throw l;c.setThrew(1,0)}},invoke_viiii:function(a,b,d,e,f){try{c.dynCall_viiii(a,b,d,e,f)}catch(g){if("number"!==typeof g&&"longjmp"!==g)throw g;c.setThrew(1,0)}},floatReadValueFromPointer:dc,simpleReadValueFromPointer:ra,throwInternalError:la,get_first_emval:Bb,getLiveInheritedInstances:Vb,__ZSt18uncaught_exceptionv:fa,
ClassHandle:M,_emscripten_asm_const_ii:function(a,b){return nb[a](b)},getShiftFromSize:Fa,__emval_get_property:function(a,b){a=na(a);b=na(b);return I(a[b])},___cxa_begin_catch:function(a){var b=v.m[a];b&&!b.K&&(b.K=!0,fa.f--);b&&(b.da=!1);v.K.push(a);v.ha(v.la(a));return a},_emscripten_memcpy_big:function(a,b,c){u.set(u.subarray(b,b+c),a);return a},runDestructor:Ib,throwInstanceAlreadyDeleted:Ha,RegisteredPointer_fromWireType:$b,__emval_get_global:function(a){if(0===a)return I(eb());a=Ea(a);return I(eb()[a])},
init_RegisteredPointer:bc,ClassHandle_isAliasOf:Fb,flushPendingDeletes:Ia,makeClassHandle:ta,whenDependentTypesAreResolved:V,__embind_register_class_constructor:function(a,b,c,e,f,g){var d=Ka(b,c);f=P(e,f);V([],[a],function(a){a=a[0];var c="constructor "+a.name;void 0===a.b.u&&(a.b.u=[]);if(void 0!==a.b.u[b-1])throw new da("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+a.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");
a.b.u[b-1]=function(){ua("Cannot construct "+a.name+" due to unbound types",d)};V([],d,function(d){a.b.u[b-1]=function(){arguments.length!==b-1&&q(c+" called with "+arguments.length+" arguments, expected "+(b-1));var a=[],e=Array(b);e[0]=g;for(var h=1;h<b;++h)e[h]=d[h].toWireType(a,arguments[h-1]);e=f.apply(null,e);La(a);return d[0].fromWireType(e)};return[]});return[]})},__emval_allocateDestructors:Db,init_ClassHandle:Mb,___syscall140:function(a,b){r.w=b;try{var c=r.ra();r.get();var e=r.get(),f=
r.get(),g=r.get();FS.Wa(c,e,g);n[f>>2]=c.position;c.ta&&0===e&&0===g&&(c.ta=null);return 0}catch(l){return"undefined"!==typeof FS&&l instanceof FS.R||G(l),-l.W}},ClassHandle_clone:Hb,___syscall146:Q,throwBindingError:q,RegisteredClass:Nb,___cxa_find_matching_catch:ma,embind_init_charCodes:vb,__emval_as:function(a,b,c){a=na(a);b=Da(b,"emval::as");var d=[],f=I(d);n[c>>2]=f;return b.toWireType(d,a)},___setErrNo:fc,__embind_register_bool:function(a,b,c,e,f){var d=Fa(c);b=w(b);H(a,{name:b,fromWireType:function(a){return!!a},
toWireType:function(a,b){return b?e:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===c)var e=D;else if(2===c)e=U;else if(4===c)e=n;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(e[a>>d])},o:null})},___resumeException:function(a){v.P||(v.P=a);throw a;},createNamedFunction:Aa,___syscall91:function(a,b){r.w=b;try{var c=r.get(),e=r.get(),f=r.wa[c];if(!f)return 0;if(e===f.Va){var g=FS.Ta(f.fd);r.La(c,g,e,f.flags);FS.Za(g);r.wa[c]=null;f.Ha&&z(f.Ya)}return 0}catch(l){return"undefined"!==
typeof FS&&l instanceof FS.R||G(l),-l.W}},__emval_take_value:function(a,b){a=Da(a,"_emval_take_value");a=a.readValueFromPointer(b);return I(a)},__emval_decref:bb,_pthread_once:oa,init_embind:Xb,constNoSmartPtrRawPointerToWireType:Ob,__emval_addMethodCaller:yb,heap32VectorToArray:Ka,__emval_lookupTypes:zb,__emval_call_method:function(a,b,c,e,f){a=Ua[a];b=na(b);c=Ea(c);return a(b,c,Db(e),f)},__emval_run_destructors:function(a){La(y[a].value);bb(a)},ClassHandle_delete:Jb,getStringOrSymbol:Ea,RegisteredPointer_destructor:Sb,
___syscall6:function(a,b){r.w=b;try{var c=r.ra();FS.close(c);return 0}catch(e){return"undefined"!==typeof FS&&e instanceof FS.R||G(e),-e.W}},ensureOverloadTable:Ya,__embind_register_emval:function(a,b){b=w(b);H(a,{name:b,fromWireType:function(a){var b=y[a].value;bb(a);return b},toWireType:function(a,b){return I(b)},argPackAdvance:8,readValueFromPointer:ra,o:null})},new_:Wa,downcastPointer:$a,replacePublicSymbol:ab,__embind_register_class:function(a,b,c,e,f,g,l,h,k,t,p,m,n){p=w(p);g=P(f,g);h&&(h=P(l,
h));t&&(t=P(k,t));n=P(m,n);var d=ka(p);Za(d,function(){ua("Cannot construct "+p+" due to unbound types",[e])});V([a,b,c],e?[e]:[],function(b){b=b[0];if(e){var c=b.b;var f=c.B}else f=M.prototype;b=Aa(d,function(){if(Object.getPrototypeOf(this)!==l)throw new da("Use 'new' to construct "+p);if(void 0===k.u)throw new da(p+" has no accessible constructor");var a=k.u[arguments.length];if(void 0===a)throw new da("Tried to invoke ctor of "+p+" with invalid number of parameters ("+arguments.length+") - expected ("+
Object.keys(k.u).toString()+") parameters instead!");return a.apply(this,arguments)});var l=Object.create(f,{constructor:{value:b}});b.prototype=l;var k=new Nb(p,b,l,n,c,g,h,t);c=new K(p,k,!0,!1,!1);f=new K(p+"*",k,!1,!1,!1);var m=new K(p+" const*",k,!1,!0,!1);ac[a]={pointerType:f,ka:m};ab(d,b);return[c,f,m]})},ClassHandle_deleteLater:Lb,RegisteredPointer_deleteObject:Tb,ClassHandle_isDeleted:Kb,__embind_register_integer:function(a,b,c,e,f){function d(a){return a}b=w(b);-1===f&&(f=4294967295);var l=
Fa(c);if(0===e){var h=32-8*c;d=function(a){return a<<h>>>h}}var k=-1!=b.indexOf("unsigned");H(a,{name:b,fromWireType:d,toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+X(c)+'" to '+this.name);if(c<e||c>f)throw new TypeError('Passing a number "'+X(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+e+", "+f+"]!");return k?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:Eb(b,l,0!==e),o:null})},
___cxa_allocate_exception:function(a){return O(a)},___buildEnvironment:Ma,_embind_repr:X,_pthread_getspecific:function(a){return Ra[a]||0},RegisteredPointer:K,craftInvokerFunction:db,_getenv:va,runDestructors:La,requireRegisteredType:Da,makeLegalFunctionName:ka,_pthread_key_create:function(a){if(0==a)return 22;n[a>>2]=ob;Ra[ob]=0;ob++;return 0},upcastPointer:Ja,_pthread_setspecific:function(a,b){if(!(a in Ra))return 22;Ra[a]=b;return 0},init_emval:Cb,shallowCopyInternalPointer:Gb,_emscripten_asm_const_iii:function(a,
b,c){return nb[a](b,c)},nonConstNoSmartPtrRawPointerToWireType:Qb,genericPointerToWireType:Pb,_abort:function(){c.abort()},requireHandle:na,getTypeName:Va,exposePublicSymbol:Za,__embind_register_std_string:function(a,b){b=w(b);H(a,{name:b,fromWireType:function(a){for(var b=J[a>>2],c=Array(b),d=0;d<b;++d)c[d]=String.fromCharCode(u[a+4+d]);z(a);return c.join("")},toWireType:function(a,b){function c(a,b){return a[b]}function d(a,b){return a.charCodeAt(b)}b instanceof ArrayBuffer&&(b=new Uint8Array(b));
var e;b instanceof Uint8Array?e=c:b instanceof Uint8ClampedArray?e=c:b instanceof Int8Array?e=c:"string"===typeof b?e=d:q("Cannot pass non-string to std::string");var h=b.length,k=O(4+h);J[k>>2]=h;for(var m=0;m<h;++m){var p=e(b,m);255<p&&(z(k),q("String has UTF-16 code units that do not fit in 8 bits"));u[k+4+m]=p}null!==a&&a.push(z,k);return k},argPackAdvance:8,readValueFromPointer:ra,o:function(a){z(a)}})},__emval_get_method_caller:function(a,b){b=zb(a,b);for(var c=b[0],e=c.name+"_$"+b.slice(1).map(function(a){return a.name}).join("_")+
"$",f=["retType"],g=[c],l="",h=0;h<a-1;++h)l+=(0!==h?", ":"")+"arg"+h,f.push("argType"+h),g.push(b[1+h]);e="return function "+ka("methodCaller_"+e)+"(handle, name, destructors, args) {\n";var k=0;for(h=0;h<a-1;++h)e+="    var arg"+h+" = argType"+h+".readValueFromPointer(args"+(k?"+"+k:"")+");\n",k+=b[h+1].argPackAdvance;e+="    var rv = handle[name]("+l+");\n";for(h=0;h<a-1;++h)b[h+1].deleteObject&&(e+="    argType"+h+".deleteObject(arg"+h+");\n");c.va||(e+="    return retType.toWireType(destructors, rv);\n");
f.push(e+"};\n");a=Wa(Function,f).apply(null,g);return yb(a)},___lock:function(){},__embind_register_memory_view:function(a,b,c){function d(a){a>>=2;var b=J;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=w(c);H(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ua:!0})},getInheritedInstance:Zb,setDelayFunction:Wb,___gxx_personality_v0:function(){},extendError:Ba,__embind_register_void:function(a,
b){b=w(b);H(a,{va:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},__embind_register_function:function(a,b,c,e,f,g){var d=Ka(b,c);a=w(a);f=P(e,f);Za(a,function(){ua("Cannot call "+a+" due to unbound types",d)},b-1);V([],d,function(c){c=[c[0],null].concat(c.slice(1));ab(a,db(a,c,null,f,g),b-1);return[]})},RegisteredPointer_getPointee:Rb,__emval_register:I,__embind_register_std_wstring:function(a,b,c){c=w(c);if(2===b){var d=function(){return Ga};var f=1}else 4===b&&(d=
function(){return J},f=2);H(a,{name:c,fromWireType:function(a){for(var b=d(),c=J[a>>2],e=Array(c),g=a+4>>f,k=0;k<c;++k)e[k]=String.fromCharCode(b[g+k]);z(a);return e.join("")},toWireType:function(a,c){var e=d(),g=c.length,k=O(4+g*b);J[k>>2]=g;for(var l=k+4>>f,m=0;m<g;++m)e[l+m]=c.charCodeAt(m);null!==a&&a.push(z,k);return k},argPackAdvance:8,readValueFromPointer:ra,o:function(a){z(a)}})},__embind_register_class_function:function(a,b,c,e,f,g,k,h){var d=Ka(c,e);b=w(b);g=P(f,g);V([],[a],function(a){function e(){ua("Cannot call "+
f+" due to unbound types",d)}a=a[0];var f=a.name+"."+b;h&&a.b.ya.push(b);var l=a.b.B,m=l[b];void 0===m||void 0===m.h&&m.className!==a.name&&m.I===c-2?(e.I=c-2,e.className=a.name,l[b]=e):(Ya(l,b,f),l[b].h[c-2]=e);V([],d,function(d){d=db(f,d,a,g,k);void 0===l[b].h?(d.I=c-2,l[b]=d):l[b].h[c-2]=d;return[]});return[]})},__emval_incref:function(a){4<a&&(y[a].s+=1)},throwUnboundTypeError:ua,readLatin1String:w,getBasestPointer:Yb,getInheritedInstanceCount:Ub,__embind_register_float:function(a,b,c){c=Fa(c);
b=w(b);H(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+X(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:dc(b,c),o:null})},integerReadValueFromPointer:Eb,___unlock:function(){},emval_get_global:eb,_emscripten_asm_const_iiii:function(a,b,c,e){return nb[a](b,c,e)},registerType:H,___cxa_throw:function(a,b,c){v.m[a]={c:a,Z:a,type:b,C:c,s:0,K:!1,da:!1};v.P=a;"uncaught_exception"in
fa?fa.f++:fa.f=1;throw a;},__emval_new_cstring:function(a){return I(Ea(a))},count_emval_handles:Ab,requireFunction:P,___map_file:function(){fc(1);return-1},DYNAMICTOP_PTR:aa,tempDoublePtr:Jc,ABORT:Na,STACKTOP:E,STACK_MAX:Qa,cttz_i8:Kc};// EMSCRIPTEN_START_ASM
var k=(/** @suppress {uselessCode} */ function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.DYNAMICTOP_PTR|0;var j=env.tempDoublePtr|0;var k=env.ABORT|0;var l=env.STACKTOP|0;var m=env.STACK_MAX|0;var n=env.cttz_i8|0;var o=0;var p=0;var q=0;var r=0;var s=global.NaN,t=global.Infinity;var u=0,v=0,w=0,x=0,y=0.0;var z=0;var A=global.Math.floor;var B=global.Math.abs;var C=global.Math.sqrt;var D=global.Math.pow;var E=global.Math.cos;var F=global.Math.sin;var G=global.Math.tan;var H=global.Math.acos;var I=global.Math.asin;var J=global.Math.atan;var K=global.Math.atan2;var L=global.Math.exp;var M=global.Math.log;var N=global.Math.ceil;var O=global.Math.imul;var P=global.Math.min;var Q=global.Math.max;var R=global.Math.clz32;var S=env.abort;var T=env.assert;var U=env.enlargeMemory;var V=env.getTotalMemory;var W=env.abortOnCannotGrowMemory;var X=env.invoke_iiii;var Y=env.invoke_viiiii;var Z=env.invoke_i;var _=env.invoke_vi;var $=env.invoke_vii;var aa=env.invoke_ii;var ba=env.invoke_viii;var ca=env.invoke_v;var da=env.invoke_iiiiiiiii;var ea=env.invoke_iiiii;var fa=env.invoke_viiiiii;var ga=env.invoke_iii;var ha=env.invoke_iiiiii;var ia=env.invoke_viiii;var ja=env.floatReadValueFromPointer;var ka=env.simpleReadValueFromPointer;var la=env.throwInternalError;var ma=env.get_first_emval;var na=env.getLiveInheritedInstances;var oa=env.__ZSt18uncaught_exceptionv;var pa=env.ClassHandle;var qa=env._emscripten_asm_const_ii;var ra=env.getShiftFromSize;var sa=env.__emval_get_property;var ta=env.___cxa_begin_catch;var ua=env._emscripten_memcpy_big;var va=env.runDestructor;var wa=env.throwInstanceAlreadyDeleted;var xa=env.RegisteredPointer_fromWireType;var ya=env.__emval_get_global;var za=env.init_RegisteredPointer;var Aa=env.ClassHandle_isAliasOf;var Ba=env.flushPendingDeletes;var Ca=env.makeClassHandle;var Da=env.whenDependentTypesAreResolved;var Ea=env.__embind_register_class_constructor;var Fa=env.__emval_allocateDestructors;var Ga=env.init_ClassHandle;var Ha=env.___syscall140;var Ia=env.ClassHandle_clone;var Ja=env.___syscall146;var Ka=env.throwBindingError;var La=env.RegisteredClass;var Ma=env.___cxa_find_matching_catch;var Na=env.embind_init_charCodes;var Oa=env.__emval_as;var Pa=env.___setErrNo;var Qa=env.__embind_register_bool;var Ra=env.___resumeException;var Sa=env.createNamedFunction;var Ta=env.___syscall91;var Ua=env.__emval_take_value;var Va=env.__emval_decref;var Wa=env._pthread_once;var Xa=env.init_embind;var Ya=env.constNoSmartPtrRawPointerToWireType;var Za=env.__emval_addMethodCaller;var _a=env.heap32VectorToArray;var $a=env.__emval_lookupTypes;var ab=env.__emval_call_method;var bb=env.__emval_run_destructors;var cb=env.ClassHandle_delete;var db=env.getStringOrSymbol;var eb=env.RegisteredPointer_destructor;var fb=env.___syscall6;var gb=env.ensureOverloadTable;var hb=env.__embind_register_emval;var ib=env.new_;var jb=env.downcastPointer;var kb=env.replacePublicSymbol;var lb=env.__embind_register_class;var mb=env.ClassHandle_deleteLater;var nb=env.RegisteredPointer_deleteObject;var ob=env.ClassHandle_isDeleted;var pb=env.__embind_register_integer;var qb=env.___cxa_allocate_exception;var rb=env.___buildEnvironment;var sb=env._embind_repr;var tb=env._pthread_getspecific;var ub=env.RegisteredPointer;var vb=env.craftInvokerFunction;var wb=env._getenv;var xb=env.runDestructors;var yb=env.requireRegisteredType;var zb=env.makeLegalFunctionName;var Ab=env._pthread_key_create;var Bb=env.upcastPointer;var Cb=env._pthread_setspecific;var Db=env.init_emval;var Eb=env.shallowCopyInternalPointer;var Fb=env._emscripten_asm_const_iii;var Gb=env.nonConstNoSmartPtrRawPointerToWireType;var Hb=env.genericPointerToWireType;var Ib=env._abort;var Jb=env.requireHandle;var Kb=env.getTypeName;var Lb=env.exposePublicSymbol;var Mb=env.__embind_register_std_string;var Nb=env.__emval_get_method_caller;var Ob=env.___lock;var Pb=env.__embind_register_memory_view;var Qb=env.getInheritedInstance;var Rb=env.setDelayFunction;var Sb=env.___gxx_personality_v0;var Tb=env.extendError;var Ub=env.__embind_register_void;var Vb=env.__embind_register_function;var Wb=env.RegisteredPointer_getPointee;var Xb=env.__emval_register;var Yb=env.__embind_register_std_wstring;var Zb=env.__embind_register_class_function;var _b=env.__emval_incref;var $b=env.throwUnboundTypeError;var ac=env.readLatin1String;var bc=env.getBasestPointer;var cc=env.getInheritedInstanceCount;var dc=env.__embind_register_float;var ec=env.integerReadValueFromPointer;var fc=env.___unlock;var gc=env.emval_get_global;var hc=env._emscripten_asm_const_iiii;var ic=env.registerType;var jc=env.___cxa_throw;var kc=env.__emval_new_cstring;var lc=env.count_emval_handles;var mc=env.requireFunction;var nc=env.___map_file;var oc=0.0;
// EMSCRIPTEN_START_FUNCS
function Dc(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;w=l;l=l+16|0;do if(a>>>0<245){o=a>>>0<11?16:a+11&-8;m=c[2406]|0;if(m>>>(o>>>3)&3|0){a=9664+((m>>>(o>>>3)&1^1)+(o>>>3)<<1<<2)|0;b=c[a+8>>2]|0;d=c[b+8>>2]|0;if((a|0)==(d|0))c[2406]=m&~(1<<(m>>>(o>>>3)&1^1)+(o>>>3));else{c[d+12>>2]=a;c[a+8>>2]=d}v=(m>>>(o>>>3)&1^1)+(o>>>3)<<3;c[b+4>>2]=v|3;c[b+v+4>>2]=c[b+v+4>>2]|1;v=b+8|0;l=w;return v|0}n=c[2408]|0;if(o>>>0>n>>>0){if(m>>>(o>>>3)|0){a=m>>>(o>>>3)<<(o>>>3)&(2<<(o>>>3)|0-(2<<(o>>>3)));f=((a&0-a)+-1|0)>>>(((a&0-a)+-1|0)>>>12&16);e=f>>>(f>>>5&8)>>>(f>>>(f>>>5&8)>>>2&4);e=(f>>>5&8|((a&0-a)+-1|0)>>>12&16|f>>>(f>>>5&8)>>>2&4|e>>>1&2|e>>>(e>>>1&2)>>>1&1)+(e>>>(e>>>1&2)>>>(e>>>(e>>>1&2)>>>1&1))|0;f=c[9664+(e<<1<<2)+8>>2]|0;a=c[f+8>>2]|0;if((9664+(e<<1<<2)|0)==(a|0)){c[2406]=m&~(1<<e);a=m&~(1<<e)}else{c[a+12>>2]=9664+(e<<1<<2);c[9664+(e<<1<<2)+8>>2]=a;a=m}c[f+4>>2]=o|3;c[f+o+4>>2]=(e<<3)-o|1;c[f+o+((e<<3)-o)>>2]=(e<<3)-o;if(n|0){d=c[2411]|0;if(!(a&1<<(n>>>3))){c[2406]=a|1<<(n>>>3);a=9664+(n>>>3<<1<<2)|0;b=9664+(n>>>3<<1<<2)+8|0}else{a=c[9664+(n>>>3<<1<<2)+8>>2]|0;b=9664+(n>>>3<<1<<2)+8|0}c[b>>2]=d;c[a+12>>2]=d;c[d+8>>2]=a;c[d+12>>2]=9664+(n>>>3<<1<<2)}c[2408]=(e<<3)-o;c[2411]=f+o;v=f+8|0;l=w;return v|0}k=c[2407]|0;if(k){b=((k&0-k)+-1|0)>>>(((k&0-k)+-1|0)>>>12&16);a=b>>>(b>>>5&8)>>>(b>>>(b>>>5&8)>>>2&4);a=c[9928+((b>>>5&8|((k&0-k)+-1|0)>>>12&16|b>>>(b>>>5&8)>>>2&4|a>>>1&2|a>>>(a>>>1&2)>>>1&1)+(a>>>(a>>>1&2)>>>(a>>>(a>>>1&2)>>>1&1))<<2)>>2]|0;b=(c[a+4>>2]&-8)-o|0;d=c[a+16+(((c[a+16>>2]|0)==0&1)<<2)>>2]|0;if(!d){j=a;h=b}else{do{i=(c[d+4>>2]&-8)-o|0;j=i>>>0<b>>>0;b=j?i:b;a=j?d:a;d=c[d+16+(((c[d+16>>2]|0)==0&1)<<2)>>2]|0}while((d|0)!=0);j=a;h=b}i=j+o|0;if(j>>>0<i>>>0){f=c[j+24>>2]|0;a=c[j+12>>2]|0;do if((a|0)==(j|0)){b=j+20|0;a=c[b>>2]|0;if(!a){b=j+16|0;a=c[b>>2]|0;if(!a){d=0;break}}while(1){d=a+20|0;e=c[d>>2]|0;if(e|0){a=e;b=d;continue}d=a+16|0;e=c[d>>2]|0;if(!e)break;else{a=e;b=d}}c[b>>2]=0;d=a}else{d=c[j+8>>2]|0;c[d+12>>2]=a;c[a+8>>2]=d;d=a}while(0);do if(f|0){a=c[j+28>>2]|0;b=(d|0)==0;if((j|0)==(c[9928+(a<<2)>>2]|0)){c[9928+(a<<2)>>2]=d;if(b){c[2407]=k&~(1<<a);break}}else{c[f+16+(((c[f+16>>2]|0)!=(j|0)&1)<<2)>>2]=d;if(b)break}c[d+24>>2]=f;a=c[j+16>>2]|0;if(a|0){c[d+16>>2]=a;c[a+24>>2]=d}a=c[j+20>>2]|0;if(a|0){c[d+20>>2]=a;c[a+24>>2]=d}}while(0);if(h>>>0<16){v=h+o|0;c[j+4>>2]=v|3;v=j+v+4|0;c[v>>2]=c[v>>2]|1}else{c[j+4>>2]=o|3;c[i+4>>2]=h|1;c[i+h>>2]=h;if(n|0){d=c[2411]|0;if(!(1<<(n>>>3)&m)){c[2406]=1<<(n>>>3)|m;a=9664+(n>>>3<<1<<2)|0;b=9664+(n>>>3<<1<<2)+8|0}else{a=c[9664+(n>>>3<<1<<2)+8>>2]|0;b=9664+(n>>>3<<1<<2)+8|0}c[b>>2]=d;c[a+12>>2]=d;c[d+8>>2]=a;c[d+12>>2]=9664+(n>>>3<<1<<2)}c[2408]=h;c[2411]=i}v=j+8|0;l=w;return v|0}}}}else if(a>>>0<=4294967231){o=a+11&-8;j=c[2407]|0;if(j){if((a+11|0)>>>8)if(o>>>0>16777215)i=31;else{i=(a+11|0)>>>8<<((((a+11|0)>>>8)+1048320|0)>>>16&8);i=14-((i+520192|0)>>>16&4|(((a+11|0)>>>8)+1048320|0)>>>16&8|((i<<((i+520192|0)>>>16&4))+245760|0)>>>16&2)+(i<<((i+520192|0)>>>16&4)<<(((i<<((i+520192|0)>>>16&4))+245760|0)>>>16&2)>>>15)|0;i=o>>>(i+7|0)&1|i<<1}else i=0;b=c[9928+(i<<2)>>2]|0;a:do if(!b){b=0;a=0;d=0-o|0;u=57}else{a=0;d=0-o|0;h=o<<((i|0)==31?0:25-(i>>>1)|0);f=0;while(1){e=(c[b+4>>2]&-8)-o|0;if(e>>>0<d>>>0)if(!e){a=b;d=0;e=b;u=61;break a}else{a=b;d=e}e=c[b+20>>2]|0;b=c[b+16+(h>>>31<<2)>>2]|0;f=(e|0)==0|(e|0)==(b|0)?f:e;e=(b|0)==0;if(e){b=f;u=57;break}else h=h<<((e^1)&1)}}while(0);if((u|0)==57){if((b|0)==0&(a|0)==0){a=2<<i;if(!((a|0-a)&j))break;m=((a|0-a)&j&0-((a|0-a)&j))+-1|0;n=m>>>(m>>>12&16)>>>(m>>>(m>>>12&16)>>>5&8);b=n>>>(n>>>2&4)>>>(n>>>(n>>>2&4)>>>1&2);a=0;b=c[9928+((m>>>(m>>>12&16)>>>5&8|m>>>12&16|n>>>2&4|n>>>(n>>>2&4)>>>1&2|b>>>1&1)+(b>>>(b>>>1&1))<<2)>>2]|0}if(!b){i=a;h=d}else{e=b;u=61}}if((u|0)==61)while(1){u=0;b=(c[e+4>>2]&-8)-o|0;n=b>>>0<d>>>0;b=n?b:d;a=n?e:a;e=c[e+16+(((c[e+16>>2]|0)==0&1)<<2)>>2]|0;if(!e){i=a;h=b;break}else{d=b;u=61}}if((i|0)!=0?h>>>0<((c[2408]|0)-o|0)>>>0:0){g=i+o|0;if(i>>>0>=g>>>0){v=0;l=w;return v|0}f=c[i+24>>2]|0;a=c[i+12>>2]|0;do if((a|0)==(i|0)){b=i+20|0;a=c[b>>2]|0;if(!a){b=i+16|0;a=c[b>>2]|0;if(!a){a=0;break}}while(1){d=a+20|0;e=c[d>>2]|0;if(e|0){a=e;b=d;continue}d=a+16|0;e=c[d>>2]|0;if(!e)break;else{a=e;b=d}}c[b>>2]=0}else{v=c[i+8>>2]|0;c[v+12>>2]=a;c[a+8>>2]=v}while(0);do if(f){b=c[i+28>>2]|0;d=(a|0)==0;if((i|0)==(c[9928+(b<<2)>>2]|0)){c[9928+(b<<2)>>2]=a;if(d){c[2407]=j&~(1<<b);e=j&~(1<<b);break}}else{c[f+16+(((c[f+16>>2]|0)!=(i|0)&1)<<2)>>2]=a;if(d){e=j;break}}c[a+24>>2]=f;b=c[i+16>>2]|0;if(b|0){c[a+16>>2]=b;c[b+24>>2]=a}b=c[i+20>>2]|0;if(b){c[a+20>>2]=b;c[b+24>>2]=a;e=j}else e=j}else e=j;while(0);do if(h>>>0>=16){c[i+4>>2]=o|3;c[g+4>>2]=h|1;c[g+h>>2]=h;d=h>>>3;if(h>>>0<256){a=c[2406]|0;if(!(a&1<<d)){c[2406]=a|1<<d;a=9664+(d<<1<<2)|0;b=9664+(d<<1<<2)+8|0}else{a=c[9664+(d<<1<<2)+8>>2]|0;b=9664+(d<<1<<2)+8|0}c[b>>2]=g;c[a+12>>2]=g;c[g+8>>2]=a;c[g+12>>2]=9664+(d<<1<<2);break}a=h>>>8;if(a)if(h>>>0>16777215)a=31;else{v=a<<((a+1048320|0)>>>16&8)<<(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4);a=14-(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4|(a+1048320|0)>>>16&8|(v+245760|0)>>>16&2)+(v<<((v+245760|0)>>>16&2)>>>15)|0;a=h>>>(a+7|0)&1|a<<1}else a=0;d=9928+(a<<2)|0;c[g+28>>2]=a;c[g+16+4>>2]=0;c[g+16>>2]=0;b=1<<a;if(!(b&e)){c[2407]=b|e;c[d>>2]=g;c[g+24>>2]=d;c[g+12>>2]=g;c[g+8>>2]=g;break}b=h<<((a|0)==31?0:25-(a>>>1)|0);d=c[d>>2]|0;while(1){if((c[d+4>>2]&-8|0)==(h|0)){u=97;break}e=d+16+(b>>>31<<2)|0;a=c[e>>2]|0;if(!a){u=96;break}else{b=b<<1;d=a}}if((u|0)==96){c[e>>2]=g;c[g+24>>2]=d;c[g+12>>2]=g;c[g+8>>2]=g;break}else if((u|0)==97){u=d+8|0;v=c[u>>2]|0;c[v+12>>2]=g;c[u>>2]=g;c[g+8>>2]=v;c[g+12>>2]=d;c[g+24>>2]=0;break}}else{v=h+o|0;c[i+4>>2]=v|3;v=i+v+4|0;c[v>>2]=c[v>>2]|1}while(0);v=i+8|0;l=w;return v|0}}}else o=-1;while(0);d=c[2408]|0;if(d>>>0>=o>>>0){a=d-o|0;b=c[2411]|0;if(a>>>0>15){v=b+o|0;c[2411]=v;c[2408]=a;c[v+4>>2]=a|1;c[v+a>>2]=a;c[b+4>>2]=o|3}else{c[2408]=0;c[2411]=0;c[b+4>>2]=d|3;c[b+d+4>>2]=c[b+d+4>>2]|1}v=b+8|0;l=w;return v|0}f=c[2409]|0;if(f>>>0>o>>>0){t=f-o|0;c[2409]=t;v=c[2412]|0;u=v+o|0;c[2412]=u;c[u+4>>2]=t|1;c[v+4>>2]=o|3;v=v+8|0;l=w;return v|0}if(!(c[2524]|0)){c[2526]=4096;c[2525]=4096;c[2527]=-1;c[2528]=-1;c[2529]=0;c[2517]=0;c[w>>2]=w&-16^1431655768;c[2524]=w&-16^1431655768;a=4096}else a=c[2526]|0;h=o+48|0;i=o+47|0;k=a+i|0;j=0-a|0;if((k&j)>>>0<=o>>>0){v=0;l=w;return v|0}a=c[2516]|0;if(a|0?(n=c[2514]|0,(n+(k&j)|0)>>>0<=n>>>0?1:(n+(k&j)|0)>>>0>a>>>0):0){v=0;l=w;return v|0}b:do if(!(c[2517]&4)){d=c[2412]|0;c:do if(d){b=10072;while(1){a=c[b>>2]|0;if(a>>>0<=d>>>0?(p=b+4|0,(a+(c[p>>2]|0)|0)>>>0>d>>>0):0)break;a=c[b+8>>2]|0;if(!a){u=118;break c}else b=a}if((k-f&j)>>>0<2147483647){a=df(k-f&j|0)|0;if((a|0)==((c[b>>2]|0)+(c[p>>2]|0)|0))if((a|0)==(-1|0))a=k-f&j;else{h=k-f&j;g=a;u=135;break b}else{e=a;d=k-f&j;u=126}}else a=0}else u=118;while(0);do if((u|0)==118){b=df(0)|0;if((b|0)!=(-1|0)?(r=c[2525]|0,r=((r+-1&b|0)==0?0:(r+-1+b&0-r)-b|0)+(k&j)|0,q=c[2514]|0,r>>>0>o>>>0&r>>>0<2147483647):0){p=c[2516]|0;if(p|0?(r+q|0)>>>0<=q>>>0|(r+q|0)>>>0>p>>>0:0){a=0;break}a=df(r|0)|0;if((a|0)==(b|0)){h=r;g=b;u=135;break b}else{e=a;d=r;u=126}}else a=0}while(0);do if((u|0)==126){b=0-d|0;if(!(h>>>0>d>>>0&(d>>>0<2147483647&(e|0)!=(-1|0))))if((e|0)==(-1|0)){a=0;break}else{h=d;g=e;u=135;break b}a=c[2526]|0;a=i-d+a&0-a;if(a>>>0>=2147483647){h=d;g=e;u=135;break b}if((df(a|0)|0)==(-1|0)){df(b|0)|0;a=0;break}else{h=a+d|0;g=e;u=135;break b}}while(0);c[2517]=c[2517]|4;u=133}else{a=0;u=133}while(0);if(((u|0)==133?(k&j)>>>0<2147483647:0)?(g=df(k&j|0)|0,s=df(0)|0,t=(s-g|0)>>>0>(o+40|0)>>>0,!((g|0)==(-1|0)|t^1|g>>>0<s>>>0&((g|0)!=(-1|0)&(s|0)!=(-1|0))^1)):0){h=t?s-g|0:a;u=135}if((u|0)==135){a=(c[2514]|0)+h|0;c[2514]=a;if(a>>>0>(c[2515]|0)>>>0)c[2515]=a;j=c[2412]|0;do if(j){a=10072;while(1){b=c[a>>2]|0;d=a+4|0;e=c[d>>2]|0;if((g|0)==(b+e|0)){u=145;break}f=c[a+8>>2]|0;if(!f)break;else a=f}if(((u|0)==145?(c[a+12>>2]&8|0)==0:0)?j>>>0<g>>>0&j>>>0>=b>>>0:0){c[d>>2]=e+h;u=(j+8&7|0)==0?0:0-(j+8)&7;v=(c[2409]|0)+(h-u)|0;c[2412]=j+u;c[2409]=v;c[j+u+4>>2]=v|1;c[j+u+v+4>>2]=40;c[2413]=c[2528];break}if(g>>>0<(c[2410]|0)>>>0)c[2410]=g;d=g+h|0;a=10072;while(1){if((c[a>>2]|0)==(d|0)){u=153;break}b=c[a+8>>2]|0;if(!b)break;else a=b}if((u|0)==153?(c[a+12>>2]&8|0)==0:0){c[a>>2]=g;m=a+4|0;c[m>>2]=(c[m>>2]|0)+h;m=g+8|0;m=g+((m&7|0)==0?0:0-m&7)|0;a=d+((d+8&7|0)==0?0:0-(d+8)&7)|0;k=m+o|0;i=a-m-o|0;c[m+4>>2]=o|3;do if((a|0)!=(j|0)){if((a|0)==(c[2411]|0)){v=(c[2408]|0)+i|0;c[2408]=v;c[2411]=k;c[k+4>>2]=v|1;c[k+v>>2]=v;break}h=c[a+4>>2]|0;if((h&3|0)==1){d:do if(h>>>0<256){b=c[a+8>>2]|0;d=c[a+12>>2]|0;if((d|0)==(b|0)){c[2406]=c[2406]&~(1<<(h>>>3));break}else{c[b+12>>2]=d;c[d+8>>2]=b;break}}else{g=c[a+24>>2]|0;b=c[a+12>>2]|0;do if((b|0)==(a|0)){b=c[a+16+4>>2]|0;if(!b){b=c[a+16>>2]|0;if(!b){b=0;break}else f=a+16|0}else f=a+16+4|0;while(1){d=b+20|0;e=c[d>>2]|0;if(e|0){b=e;f=d;continue}d=b+16|0;e=c[d>>2]|0;if(!e)break;else{b=e;f=d}}c[f>>2]=0}else{v=c[a+8>>2]|0;c[v+12>>2]=b;c[b+8>>2]=v}while(0);if(!g)break;d=c[a+28>>2]|0;e=(b|0)==0;do if((a|0)!=(c[9928+(d<<2)>>2]|0)){c[g+16+(((c[g+16>>2]|0)!=(a|0)&1)<<2)>>2]=b;if(e)break d}else{c[9928+(d<<2)>>2]=b;if(!e)break;c[2407]=c[2407]&~(1<<d);break d}while(0);c[b+24>>2]=g;d=c[a+16>>2]|0;if(d|0){c[b+16>>2]=d;c[d+24>>2]=b}d=c[a+16+4>>2]|0;if(!d)break;c[b+20>>2]=d;c[d+24>>2]=b}while(0);a=a+(h&-8)|0;f=(h&-8)+i|0}else f=i;d=a+4|0;c[d>>2]=c[d>>2]&-2;c[k+4>>2]=f|1;c[k+f>>2]=f;d=f>>>3;if(f>>>0<256){a=c[2406]|0;if(!(a&1<<d)){c[2406]=a|1<<d;a=9664+(d<<1<<2)|0;b=9664+(d<<1<<2)+8|0}else{a=c[9664+(d<<1<<2)+8>>2]|0;b=9664+(d<<1<<2)+8|0}c[b>>2]=k;c[a+12>>2]=k;c[k+8>>2]=a;c[k+12>>2]=9664+(d<<1<<2);break}a=f>>>8;do if(!a)a=0;else{if(f>>>0>16777215){a=31;break}v=a<<((a+1048320|0)>>>16&8)<<(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4);a=14-(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4|(a+1048320|0)>>>16&8|(v+245760|0)>>>16&2)+(v<<((v+245760|0)>>>16&2)>>>15)|0;a=f>>>(a+7|0)&1|a<<1}while(0);e=9928+(a<<2)|0;c[k+28>>2]=a;c[k+16+4>>2]=0;c[k+16>>2]=0;b=c[2407]|0;d=1<<a;if(!(b&d)){c[2407]=b|d;c[e>>2]=k;c[k+24>>2]=e;c[k+12>>2]=k;c[k+8>>2]=k;break}b=f<<((a|0)==31?0:25-(a>>>1)|0);d=c[e>>2]|0;while(1){if((c[d+4>>2]&-8|0)==(f|0)){u=194;break}e=d+16+(b>>>31<<2)|0;a=c[e>>2]|0;if(!a){u=193;break}else{b=b<<1;d=a}}if((u|0)==193){c[e>>2]=k;c[k+24>>2]=d;c[k+12>>2]=k;c[k+8>>2]=k;break}else if((u|0)==194){u=d+8|0;v=c[u>>2]|0;c[v+12>>2]=k;c[u>>2]=k;c[k+8>>2]=v;c[k+12>>2]=d;c[k+24>>2]=0;break}}else{v=(c[2409]|0)+i|0;c[2409]=v;c[2412]=k;c[k+4>>2]=v|1}while(0);v=m+8|0;l=w;return v|0}a=10072;while(1){b=c[a>>2]|0;if(b>>>0<=j>>>0?(v=b+(c[a+4>>2]|0)|0,v>>>0>j>>>0):0)break;a=c[a+8>>2]|0}f=v+-47+((v+-47+8&7|0)==0?0:0-(v+-47+8)&7)|0;f=f>>>0<(j+16|0)>>>0?j:f;a=g+8|0;a=(a&7|0)==0?0:0-a&7;u=g+a|0;a=h+-40-a|0;c[2412]=u;c[2409]=a;c[u+4>>2]=a|1;c[u+a+4>>2]=40;c[2413]=c[2528];c[f+4>>2]=27;c[f+8>>2]=c[2518];c[f+8+4>>2]=c[2519];c[f+8+8>>2]=c[2520];c[f+8+12>>2]=c[2521];c[2518]=g;c[2519]=h;c[2521]=0;c[2520]=f+8;a=f+24|0;do{u=a;a=a+4|0;c[a>>2]=7}while((u+8|0)>>>0<v>>>0);if((f|0)!=(j|0)){c[f+4>>2]=c[f+4>>2]&-2;c[j+4>>2]=f-j|1;c[f>>2]=f-j;if((f-j|0)>>>0<256){d=9664+((f-j|0)>>>3<<1<<2)|0;a=c[2406]|0;if(!(a&1<<((f-j|0)>>>3))){c[2406]=a|1<<((f-j|0)>>>3);a=d;b=d+8|0}else{a=c[d+8>>2]|0;b=d+8|0}c[b>>2]=j;c[a+12>>2]=j;c[j+8>>2]=a;c[j+12>>2]=d;break}if((f-j|0)>>>8)if((f-j|0)>>>0>16777215)a=31;else{a=(f-j|0)>>>8<<((((f-j|0)>>>8)+1048320|0)>>>16&8);a=14-((a+520192|0)>>>16&4|(((f-j|0)>>>8)+1048320|0)>>>16&8|((a<<((a+520192|0)>>>16&4))+245760|0)>>>16&2)+(a<<((a+520192|0)>>>16&4)<<(((a<<((a+520192|0)>>>16&4))+245760|0)>>>16&2)>>>15)|0;a=(f-j|0)>>>(a+7|0)&1|a<<1}else a=0;e=9928+(a<<2)|0;c[j+28>>2]=a;c[j+20>>2]=0;c[j+16>>2]=0;b=c[2407]|0;d=1<<a;if(!(b&d)){c[2407]=b|d;c[e>>2]=j;c[j+24>>2]=e;c[j+12>>2]=j;c[j+8>>2]=j;break}b=f-j<<((a|0)==31?0:25-(a>>>1)|0);d=c[e>>2]|0;while(1){if((c[d+4>>2]&-8|0)==(f-j|0)){u=216;break}e=d+16+(b>>>31<<2)|0;a=c[e>>2]|0;if(!a){u=215;break}else{b=b<<1;d=a}}if((u|0)==215){c[e>>2]=j;c[j+24>>2]=d;c[j+12>>2]=j;c[j+8>>2]=j;break}else if((u|0)==216){u=d+8|0;v=c[u>>2]|0;c[v+12>>2]=j;c[u>>2]=j;c[j+8>>2]=v;c[j+12>>2]=d;c[j+24>>2]=0;break}}}else{v=c[2410]|0;if((v|0)==0|g>>>0<v>>>0)c[2410]=g;c[2518]=g;c[2519]=h;c[2521]=0;c[2415]=c[2524];c[2414]=-1;a=0;do{v=9664+(a<<1<<2)|0;c[v+12>>2]=v;c[v+8>>2]=v;a=a+1|0}while((a|0)!=32);v=g+8|0;v=(v&7|0)==0?0:0-v&7;u=g+v|0;v=h+-40-v|0;c[2412]=u;c[2409]=v;c[u+4>>2]=v|1;c[u+v+4>>2]=40;c[2413]=c[2528]}while(0);a=c[2409]|0;if(a>>>0>o>>>0){t=a-o|0;c[2409]=t;v=c[2412]|0;u=v+o|0;c[2412]=u;c[u+4>>2]=t|1;c[v+4>>2]=o|3;v=v+8|0;l=w;return v|0}}c[2561]=12;v=0;l=w;return v|0}function Ec(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0;q=l;l=l+48|0;if(!d){l=q;return}g=a[d+11>>0]|0;if(g<<24>>24<0)f=c[d+4>>2]|0;else f=g&255;if(!f){f=a[d+24+11>>0]|0;if(f<<24>>24<0)f=c[d+28>>2]|0;else f=f&255;if(f|0){Ad(q+24|0,d+24|0);d=a[q+24+11>>0]|0;ie(e,d<<24>>24<0?c[q+24>>2]|0:q+24|0,d<<24>>24<0?c[q+24+4>>2]|0:d&255)|0;if((a[q+24+11>>0]|0)<0)Nh(c[q+24>>2]|0);l=q;return}}if(((g<<24>>24<0?c[d+4>>2]|0:g&255)|0)==1?(Ie(d,9412,1)|0)==0:0){c[q+12>>2]=0;c[q+12+4>>2]=0;c[q+12+8>>2]=0;g=a[d+24+11>>0]|0;h=g<<24>>24<0?c[d+28>>2]|0:g&255;if((h+4|0)>>>0>4294967279)Bh();if((h+4|0)>>>0<11){a[q+12+11>>0]=4;f=q+12|0}else{f=tf(h+20&-16)|0;c[q+12>>2]=f;c[q+12+8>>2]=h+20&-16|-2147483648;c[q+12+4>>2]=4}a[f>>0]=60;a[f+1>>0]=33;a[f+2>>0]=45;a[f+3>>0]=45;a[f+4>>0]=0;ie(q+12|0,g<<24>>24<0?c[d+24>>2]|0:d+24|0,h)|0;Nf(q+12|0,4015)|0;c[q+24>>2]=c[q+12>>2];c[q+24+4>>2]=c[q+12+4>>2];c[q+24+8>>2]=c[q+12+8>>2];c[q+12>>2]=0;c[q+12+4>>2]=0;c[q+12+8>>2]=0;d=a[q+24+11>>0]|0;f=c[q+24>>2]|0;ie(e,d<<24>>24<0?f:q+24|0,d<<24>>24<0?c[q+24+4>>2]|0:d&255)|0;if(d<<24>>24<0)Nh(f);if((a[q+12+11>>0]|0)<0)Nh(c[q+12>>2]|0);l=q;return}c[q+12>>2]=0;c[q+12+4>>2]=0;c[q+12+8>>2]=0;a[q+12+11>>0]=2;b[q+12>>1]=29550;a[q+12+2>>0]=0;do if(Ed(d+36|0,q+12|0)|0){c[q>>2]=0;c[q+4>>2]=0;c[q+8>>2]=0;a[q+11>>0]=2;b[q>>1]=29550;a[q+2>>0]=0;f=c[(rd(d+36|0,q+24|0,q)|0)>>2]|0;if(!f){q=qb(8)|0;Ag(q,4019);c[q>>2]=1684;jc(q|0,528,10)}o=a[f+28+11>>0]|0;if(((o<<24>>24<0?c[f+28+4>>2]|0:o&255)|0)!=26){o=0;n=0;break}m=(Ie(f+28|0,4043,26)|0)==0;if(m){f=c[2399]|0;n=c[2400]|0;a:do if((f|0)!=(n|0)){o=a[d+11>>0]|0;k=o<<24>>24<0?c[d+4>>2]|0:o&255;if(o<<24>>24<0){if(!k)while(1){o=a[f+11>>0]|0;if(!((o<<24>>24<0?c[f+4>>2]|0:o&255)|0))break a;f=f+12|0;if((f|0)==(n|0)){f=n;break a}}while(1){i=a[f+11>>0]|0;do if(((i<<24>>24<0?c[f+4>>2]|0:i&255)|0)==(k|0)){h=c[f>>2]|0;g=c[d>>2]|0;if(i<<24>>24<0)if(!(Ye(h,g,k)|0))break a;else break;if((h&255)<<24>>24==(a[g>>0]|0)){j=f;h=i&255;do{h=h+-1|0;j=j+1|0;if(!h)break a;g=g+1|0}while((a[j>>0]|0)==(a[g>>0]|0))}}while(0);f=f+12|0;if((f|0)==(n|0)){f=n;break}}}else{if(!k)while(1){o=a[f+11>>0]|0;if(!((o<<24>>24<0?c[f+4>>2]|0:o&255)|0))break a;f=f+12|0;if((f|0)==(n|0)){f=n;break a}}while(1){h=a[f+11>>0]|0;do if(((h<<24>>24<0?c[f+4>>2]|0:h&255)|0)==(k|0)){g=c[f>>2]|0;if(h<<24>>24<0)if(!(Ye(g,d,k)|0))break a;else break;if((g&255)<<24>>24==(a[d>>0]|0)){i=f;g=h&255;h=d;do{g=g+-1|0;i=i+1|0;if(!g)break a;h=h+1|0}while((a[i>>0]|0)==(a[h>>0]|0))}}while(0);f=f+12|0;if((f|0)==(n|0)){f=n;break}}}}while(0);o=m;n=(f|0)!=(n|0)}else{o=m;n=0}}else{o=0;n=0}while(0);c[q+24>>2]=0;c[q+24+4>>2]=0;c[q+24+8>>2]=0;j=a[d+11>>0]|0;k=j<<24>>24<0?c[d+4>>2]|0:j&255;if((k+1|0)>>>0>4294967279)Bh();if((k+1|0)>>>0<11){a[q+24+11>>0]=1;f=q+24|0;g=q+24+11|0;h=q+24|0;i=q+24+4|0}else{f=tf(k+17&-16)|0;c[q+24>>2]=f;c[q+24+8>>2]=k+17&-16|-2147483648;c[q+24+4>>2]=1;g=q+24+11|0;h=q+24|0;i=q+24+4|0}a[f>>0]=60;a[f+1>>0]=0;ie(q+24|0,j<<24>>24<0?c[d>>2]|0:d,k)|0;m=a[g>>0]|0;ie(e,m<<24>>24<0?c[h>>2]|0:q+24|0,m<<24>>24<0?c[i>>2]|0:m&255)|0;if((a[g>>0]|0)<0)Nh(c[h>>2]|0);f=c[d+36>>2]|0;b:do if((f|0)!=(d+40|0)){m=f;c:while(1){h=m+16|0;k=a[h+11>>0]|0;f=m+20|0;if(!(((k<<24>>24<0?c[f>>2]|0:k&255)|0)==2?!(Ie(h,3932,2)|0):0))p=69;do if((p|0)==69){p=0;j=m+28|0;i=a[j+11>>0]|0;k=m+32|0;if(((i<<24>>24<0?c[k>>2]|0:i&255)|0)==5?(Ie(j,9428,5)|0)==0:0)break;c[q+12>>2]=0;c[q+12+4>>2]=0;c[q+12+8>>2]=0;i=a[h+11>>0]|0;g=i<<24>>24<0?c[f>>2]|0:i&255;if((g+1|0)>>>0>4294967279)break c;if((g+1|0)>>>0<11){a[q+12+11>>0]=1;f=q+12|0}else{f=tf(g+17&-16)|0;c[q+12>>2]=f;c[q+12+8>>2]=g+17&-16|-2147483648;c[q+12+4>>2]=1}a[f>>0]=32;a[f+1>>0]=0;ie(q+12|0,i<<24>>24<0?c[h>>2]|0:h,g)|0;Nf(q+12|0,3935)|0;c[q+24>>2]=c[q+12>>2];c[q+24+4>>2]=c[q+12+4>>2];c[q+24+8>>2]=c[q+12+8>>2];c[q+12>>2]=0;c[q+12+4>>2]=0;c[q+12+8>>2]=0;i=a[q+24+11>>0]|0;f=c[q+24>>2]|0;ie(e,i<<24>>24<0?f:q+24|0,i<<24>>24<0?c[q+24+4>>2]|0:i&255)|0;if(i<<24>>24<0)Nh(f);if((a[q+12+11>>0]|0)<0)Nh(c[q+12>>2]|0);i=a[j+11>>0]|0;if(!(((i<<24>>24<0?c[k>>2]|0:i&255)|0)==4?!(Ie(j,9434,4)|0):0))p=82;if((p|0)==82?(p=0,Ad(q+24|0,j),k=a[q+24+11>>0]|0,ie(e,k<<24>>24<0?c[q+24>>2]|0:q+24|0,k<<24>>24<0?c[q+24+4>>2]|0:k&255)|0,(a[q+24+11>>0]|0)<0):0)Nh(c[q+24>>2]|0);Nf(e,3938)|0}while(0);f=c[m+4>>2]|0;if(!f){g=m+8|0;f=c[g>>2]|0;if((c[f>>2]|0)!=(m|0))do{m=c[g>>2]|0;g=m+8|0;f=c[g>>2]|0}while((c[f>>2]|0)!=(m|0))}else while(1){g=c[f>>2]|0;if(!g)break;else f=g}if((f|0)==(d+40|0))break b;else m=f}Bh()}while(0);f=ya(3911)|0;p=kc(3918)|0;g=sa(f|0,p|0)|0;Va(p|0);c[q>>2]=d;xe(q+12|0,g,3940,q);Kc(q+24|0,q+12|0);p=a[q+24+11>>0]|0;ie(e,p<<24>>24<0?c[q+24>>2]|0:q+24|0,p<<24>>24<0?c[q+24+4>>2]|0:p&255)|0;if((a[q+24+11>>0]|0)<0)Nh(c[q+24>>2]|0);if((a[q+12+8+3>>0]|0)<0)Nh(c[q+12>>2]|0);Va(g|0);Va(f|0);if(!(n|o^1))Nf(e,4070)|0;Nf(e,9410)|0;d:do if(o|n){if(!n){l=q;return}}else{f=c[2402]|0;m=c[2403]|0;e:do if((f|0)!=(m|0)){p=a[d+11>>0]|0;k=p<<24>>24<0?c[d+4>>2]|0:p&255;if(p<<24>>24<0){if(!k)while(1){p=a[f+11>>0]|0;if(!((p<<24>>24<0?c[f+4>>2]|0:p&255)|0))break e;f=f+12|0;if((f|0)==(m|0))break d}while(1){i=a[f+11>>0]|0;do if(((i<<24>>24<0?c[f+4>>2]|0:i&255)|0)==(k|0)){h=c[f>>2]|0;g=c[d>>2]|0;if(i<<24>>24<0)if(!(Ye(h,g,k)|0))break e;else break;if((h&255)<<24>>24!=(a[g>>0]|0))break;j=f;h=i&255;do{h=h+-1|0;j=j+1|0;if(!h)break e;g=g+1|0}while((a[j>>0]|0)==(a[g>>0]|0))}while(0);f=f+12|0;if((f|0)==(m|0))break d}}else{if(!k)while(1){p=a[f+11>>0]|0;if(!((p<<24>>24<0?c[f+4>>2]|0:p&255)|0))break e;f=f+12|0;if((f|0)==(m|0))break d}while(1){h=a[f+11>>0]|0;do if(((h<<24>>24<0?c[f+4>>2]|0:h&255)|0)==(k|0)){g=c[f>>2]|0;if(h<<24>>24<0)if(!(Ye(g,d,k)|0))break e;else break;if((g&255)<<24>>24!=(a[d>>0]|0))break;i=f;g=h&255;h=d;do{g=g+-1|0;i=i+1|0;if(!g)break e;h=h+1|0}while((a[i>>0]|0)==(a[h>>0]|0))}while(0);f=f+12|0;if((f|0)==(m|0))break d}}}while(0);if((f|0)!=(m|0)){l=q;return}}while(0);f=ya(3911)|0;p=kc(3918)|0;g=sa(f|0,p|0)|0;Va(p|0);c[q>>2]=d;xe(q+12|0,g,4073,q);Kc(q+24|0,q+12|0);p=a[q+24+11>>0]|0;ie(e,p<<24>>24<0?c[q+24>>2]|0:q+24|0,p<<24>>24<0?c[q+24+4>>2]|0:p&255)|0;if((a[q+24+11>>0]|0)<0)Nh(c[q+24>>2]|0);if((a[q+12+8+3>>0]|0)<0)Nh(c[q+12>>2]|0);Va(g|0);Va(f|0);f=a[d+24+11>>0]|0;if(f<<24>>24<0)f=c[d+28>>2]|0;else f=f&255;if(!f){f=c[d+52>>2]|0;if((f|0)!=(c[d+56>>2]|0)){g=0;do{Ec(c[f+(g<<2)>>2]|0,e);g=g+1|0;f=c[d+52>>2]|0}while((g|0)!=((c[d+56>>2]|0)-f>>2|0))}}else{Ad(q+24|0,d+24|0);p=a[q+24+11>>0]|0;ie(e,p<<24>>24<0?c[q+24>>2]|0:q+24|0,p<<24>>24<0?c[q+24+4>>2]|0:p&255)|0;if((a[q+24+11>>0]|0)<0)Nh(c[q+24>>2]|0)}c[q+12>>2]=0;c[q+12+4>>2]=0;c[q+12+8>>2]=0;g=a[d+11>>0]|0;h=g<<24>>24<0?c[d+4>>2]|0:g&255;if((h+2|0)>>>0>4294967279)Bh();if((h+2|0)>>>0<11){a[q+12+11>>0]=2;f=q+12|0}else{f=tf(h+18&-16)|0;c[q+12>>2]=f;c[q+12+8>>2]=h+18&-16|-2147483648;c[q+12+4>>2]=2}a[f>>0]=60;a[f+1>>0]=47;a[f+2>>0]=0;ie(q+12|0,g<<24>>24<0?c[d>>2]|0:d,h)|0;Nf(q+12|0,9410)|0;c[q+24>>2]=c[q+12>>2];c[q+24+4>>2]=c[q+12+4>>2];c[q+24+8>>2]=c[q+12+8>>2];c[q+12>>2]=0;c[q+12+4>>2]=0;c[q+12+8>>2]=0;d=a[q+24+11>>0]|0;f=c[q+24>>2]|0;ie(e,d<<24>>24<0?f:q+24|0,d<<24>>24<0?c[q+24+4>>2]|0:d&255)|0;if(d<<24>>24<0)Nh(f);if((a[q+12+11>>0]|0)<0)Nh(c[q+12>>2]|0);l=q;return}function Fc(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0;C=l;l=l+32|0;i=c[b+48>>2]|0;c[d+48>>2]=i;hc(6,b|0,d|0,i|0)|0;Tc(b,d);i=a[d+24+11>>0]|0;if(i<<24>>24<0)e=c[d+28>>2]|0;else e=i&255;if(e|0){g=i<<24>>24<0?c[d+28>>2]|0:i&255;e=a[b+24+11>>0]|0;a:do if((g|0)==((e<<24>>24<0?c[b+28>>2]|0:e&255)|0)){f=c[d+24>>2]|0;h=i<<24>>24<0?f:d+24|0;e=e<<24>>24<0?c[b+24>>2]|0:b+24|0;if(i<<24>>24<0){if(!g){l=C;return}if(!(Ye(h,e,g)|0)){l=C;return}else{e=c[d+48>>2]|0;break}}if(!g){l=C;return}if((f&255)<<24>>24==(a[e>>0]|0)){f=d+24|0;g=i&255}else{e=c[d+48>>2]|0;f=d+24|0;break}while(1){g=g+-1|0;f=f+1|0;if(!g)break;e=e+1|0;if((a[f>>0]|0)!=(a[e>>0]|0)){u=114;break a}}l=C;return}else u=114;while(0);do if((u|0)==114){e=c[d+48>>2]|0;if(i<<24>>24<0){f=c[d+24>>2]|0;break}else{f=d+24|0;break}}while(0);Fb(14,e|0,f|0)|0;l=C;return}i=c[d+52>>2]|0;f=c[d+56>>2]|0;g=c[b+56>>2]|0;h=c[b+52>>2]|0;if((i|0)==(f|0)){if((h|0)!=(g|0)){qa(12,c[(c[h>>2]|0)+48>>2]|0)|0;if(!((g-h>>2)+-1|0)){l=C;return}else e=1;do{qa(12,c[(c[(c[b+52>>2]|0)+(e<<2)>>2]|0)+48>>2]|0)|0;e=e+1|0}while(e>>>0<=((g-h>>2)+-1|0)>>>0);l=C;return}e=a[b+24+11>>0]|0;if(e<<24>>24<0)e=c[b+28>>2]|0;else e=e&255;if(!e){l=C;return}qa(13,c[d+48>>2]|0)|0;l=C;return}if((h|0)==(g|0)){e=a[b+24+11>>0]|0;if(e<<24>>24<0)e=c[b+28>>2]|0;else e=e&255;if(!e){e=f;f=i;g=i}else{qa(13,c[d+48>>2]|0)|0;g=c[d+52>>2]|0;e=c[d+56>>2]|0;f=g}h=c[d+48>>2]|0;f=(e-f>>2)+-1|0;hc(11,h|0,Uc(c[g>>2]|0)|0,0)|0;if(!f){l=C;return}else e=1;do{hc(11,h|0,Uc(c[(c[d+52>>2]|0)+(e<<2)>>2]|0)|0,0)|0;e=e+1|0}while(e>>>0<=f>>>0);l=C;return}B=c[d+48>>2]|0;if(g-h>>2){if(g-h>>2>>>0>1073741823)Bh();g=tf(g-h|0)|0;e=c[b+52>>2]|0;f=(c[b+56>>2]|0)-e|0;if((f|0)>0){wd(g|0,e|0,f|0)|0;z=g;A=g;e=g+(f>>>2<<2)|0;f=g}else{z=g;A=g;e=g;f=g}}else{z=0;A=0;e=0;f=0}h=e-f|0;p=c[d+52>>2]|0;i=(c[d+56>>2]|0)-p|0;b:do if(!((h|0)<4|(i|0)<4)){o=c[p>>2]|0;t=0;y=c[p+((i>>2)+-1<<2)>>2]|0;q=o;r=c[f+((h>>2)+-1<<2)>>2]|0;g=0;m=(h>>2)+-1|0;s=c[f>>2]|0;w=(i>>2)+-1|0;e=0;f=p;b=p;j=p;k=p;n=0;i=p;h=p;c:while(1){d:do if(!s){s=e+1|0;e=s;p=y;s=c[z+(s<<2)>>2]|0;v=i;u=h}else{if(!r){m=m+-1|0;p=y;r=c[z+(m<<2)>>2]|0;v=i;u=h;break}if(!q){g=g+1|0;o=c[i+(g<<2)>>2]|0;p=y;q=o;v=i;u=i;break}if(!y){w=w+-1|0;p=c[h+(w<<2)>>2]|0;v=i;u=h;break}if(pd(s,q)|0){Fc(s,q);s=e+1|0;g=g+1|0;u=c[d+52>>2]|0;o=c[u+(g<<2)>>2]|0;e=s;p=y;q=o;s=c[z+(s<<2)>>2]|0;f=u;b=u;j=u;k=u;v=u;break}if(pd(r,y)|0){Fc(r,y);m=m+-1|0;w=w+-1|0;u=c[d+52>>2]|0;p=c[u+(w<<2)>>2]|0;r=c[z+(m<<2)>>2]|0;f=u;b=u;j=u;k=u;v=u;break}if(pd(s,y)|0){Fc(s,y);hc(9,B|0,c[s+48>>2]|0,c[r+48>>2]|0)|0;s=e+1|0;w=w+-1|0;u=c[d+52>>2]|0;e=s;p=c[u+(w<<2)>>2]|0;s=c[z+(s<<2)>>2]|0;f=u;b=u;j=u;k=u;v=u;break}if(pd(r,q)|0){Fc(r,q);hc(10,B|0,c[r+48>>2]|0,c[s+48>>2]|0)|0;m=m+-1|0;g=g+1|0;u=c[d+52>>2]|0;o=c[u+(g<<2)>>2]|0;p=y;q=o;r=c[z+(m<<2)>>2]|0;f=u;b=u;j=u;k=u;v=u;break}if(!t){j=tf(12)|0;c[j+4>>2]=0;c[j+8>>2]=0;c[j>>2]=j+4;if((e|0)>(m|0)){t=j;x=j}else{b=e;while(1){h=c[z+(b<<2)>>2]|0;f=a[h+12+11>>0]|0;if(f<<24>>24<0)f=c[h+16>>2]|0;else f=f&255;if(f|0){oe(C,h+12|0);c[C+12>>2]=b;h=rd(j,C+16|0,C)|0;if(!(c[h>>2]|0)){f=tf(32)|0;c[f+16>>2]=c[C>>2];c[f+16+4>>2]=c[C+4>>2];c[f+16+8>>2]=c[C+8>>2];c[C>>2]=0;c[C+4>>2]=0;c[C+8>>2]=0;c[f+28>>2]=c[C+12>>2];i=c[C+16>>2]|0;c[f>>2]=0;c[f+4>>2]=0;c[f+8>>2]=i;c[h>>2]=f;i=c[c[j>>2]>>2]|0;if(i){c[j>>2]=i;f=c[h>>2]|0}fd(c[j+4>>2]|0,f);c[j+8>>2]=(c[j+8>>2]|0)+1}if((a[C+11>>0]|0)<0)Nh(c[C>>2]|0)}if((b|0)<(m|0))b=b+1|0;else{t=j;x=j;break}}}}else x=n;p=q+12|0;f=c[t+4>>2]|0;e:do if(f|0){n=a[p+11>>0]|0;k=n<<24>>24<0?c[q+16>>2]|0:n&255;n=n<<24>>24<0?c[p>>2]|0:p;f:while(1){i=f+16|0;b=a[i+11>>0]|0;j=b<<24>>24<0?c[f+20>>2]|0:b&255;h=j>>>0<k>>>0?j:k;do if(h){h=Ye(n,b<<24>>24<0?c[i>>2]|0:i,h)|0;if(!h){u=50;break}if((h|0)<0)u=52;else u=53}else u=50;while(0);if((u|0)==50)if(k>>>0<j>>>0)u=52;else u=53;if((u|0)!=52)if((u|0)==53){u=0;h=k>>>0<j>>>0?k:j;do if(h){h=Ye(b<<24>>24<0?c[i>>2]|0:i,n,h)|0;if(!h){u=55;break}if((h|0)>=0)break f}else u=55;while(0);if((u|0)==55?(u=0,j>>>0>=k>>>0):0)break;f=f+4|0}f=c[f>>2]|0;if(!f)break e}f=c[(rd(t,C+16|0,p)|0)>>2]|0;if(!f){u=61;break c}k=c[z+(c[f+28>>2]<<2)>>2]|0;j=a[k+11>>0]|0;b=j<<24>>24<0?c[k+4>>2]|0:j&255;f=a[o+11>>0]|0;g:do if((b|0)==((f<<24>>24<0?c[q+4>>2]|0:f&255)|0)){h=c[k>>2]|0;i=j<<24>>24<0?h:k;f=f<<24>>24<0?c[q>>2]|0:q;h:do if(j<<24>>24<0){if(!b)break;if(Ye(i,f,b)|0){u=70;break g}}else{if(!b)break;if((h&255)<<24>>24==(a[f>>0]|0)){i=k;h=j&255}else{u=70;break g}while(1){h=h+-1|0;i=i+1|0;if(!h)break h;f=f+1|0;if((a[i>>0]|0)!=(a[f>>0]|0)){u=70;break g}}}while(0);Fc(k,q);f=c[(rd(t,C+16|0,p)|0)>>2]|0;if(!f){u=72;break c}c[z+(c[f+28>>2]<<2)>>2]=0;hc(10,B|0,c[k+48>>2]|0,c[s+48>>2]|0)|0}else u=70;while(0);if((u|0)==70){v=Uc(q)|0;hc(10,B|0,v|0,c[s+48>>2]|0)|0}g=g+1|0;u=c[d+52>>2]|0;o=c[u+(g<<2)>>2]|0;p=y;q=o;f=u;b=u;j=u;k=u;v=u;n=x;break d}while(0);u=Uc(q)|0;hc(10,B|0,u|0,c[s+48>>2]|0)|0;g=g+1|0;u=c[d+52>>2]|0;o=c[u+(g<<2)>>2]|0;p=y;q=o;f=u;b=u;j=u;k=u;v=u;n=x}while(0);h=(e|0)>(m|0);i=(g|0)>(w|0);if(i|h){o=w;break b}else{y=p;i=v;h=u}}if((u|0)==61){C=qb(8)|0;Ag(C,4019);c[C>>2]=1684;jc(C|0,528,10)}else if((u|0)==72){C=qb(8)|0;Ag(C,4019);c[C>>2]=1684;jc(C|0,528,10)}}else{e=0;t=0;g=0;m=(h>>2)+-1|0;o=(i>>2)+-1|0;i=(i|0)<4;h=(h|0)<4;k=p;j=p;n=0;f=p;b=p}while(0);i:do if(h){e=o+1|0;i=g>>>0>o>>>0;if(e>>>0>(((c[d+56>>2]|0)-k>>2)+-1|0)>>>0){if(i)break;while(1){e=g+1|0;hc(11,B|0,Uc(c[f+(g<<2)>>2]|0)|0,0)|0;if(e>>>0>o>>>0)break i;g=e;f=c[d+52>>2]|0}}else{h=c[(c[j+(e<<2)>>2]|0)+48>>2]|0;if(i)break;else f=b;while(1){e=g+1|0;hc(11,B|0,Uc(c[f+(g<<2)>>2]|0)|0,h|0)|0;if(e>>>0>o>>>0)break i;g=e;f=c[d+52>>2]|0}}}else if(!(e>>>0>m>>>0|i^1))do{qa(12,c[(c[z+(e<<2)>>2]|0)+48>>2]|0)|0;e=e+1|0}while(e>>>0<=m>>>0);while(0);if(t|0){ve(c[t+4>>2]|0);Nh(n)}if(!z){l=C;return}Nh(A);l=C;return}function Gc(){var d=0,e=0,f=0,g=0,h=0;f=l;l=l+192|0;c[f>>2]=0;c[f+4>>2]=0;c[f+8>>2]=0;a[f+11>>0]=1;a[f>>0]=97;a[f+1>>0]=0;c[f+12>>2]=0;c[f+12+4>>2]=0;c[f+12+8>>2]=0;a[f+12+11>>0]=4;c[f+12>>2]=1936090468;a[f+16>>0]=0;c[f+24>>2]=0;c[f+24+4>>2]=0;c[f+24+8>>2]=0;a[f+24+11>>0]=5;a[f+24>>0]=a[3643]|0;a[f+24+1>>0]=a[3644]|0;a[f+24+2>>0]=a[3645]|0;a[f+24+3>>0]=a[3646]|0;a[f+24+4>>0]=a[3647]|0;a[f+24+5>>0]=0;c[f+36>>2]=0;c[f+36+4>>2]=0;c[f+36+8>>2]=0;a[f+36+11>>0]=1;a[f+36>>0]=103;a[f+36+1>>0]=0;c[f+48>>2]=0;c[f+48+4>>2]=0;c[f+48+8>>2]=0;a[f+48+11>>0]=6;a[f+48>>0]=a[3649]|0;a[f+48+1>>0]=a[3650]|0;a[f+48+2>>0]=a[3651]|0;a[f+48+3>>0]=a[3652]|0;a[f+48+4>>0]=a[3653]|0;a[f+48+5>>0]=a[3654]|0;a[f+48+6>>0]=0;c[f+60>>2]=0;c[f+60+4>>2]=0;c[f+60+8>>2]=0;a[f+60+11>>0]=4;c[f+60>>2]=1802723693;a[f+64>>0]=0;d=tf(16)|0;c[f+72>>2]=d;c[f+80>>2]=-2147483632;c[f+76>>2]=13;e=d;g=3656;h=e+13|0;do{a[e>>0]=a[g>>0]|0;e=e+1|0;g=g+1|0}while((e|0)<(h|0));a[d+13>>0]=0;c[f+92>>2]=0;a[f+84+11>>0]=7;a[f+84>>0]=a[3670]|0;a[f+84+1>>0]=a[3671]|0;a[f+84+2>>0]=a[3672]|0;a[f+84+3>>0]=a[3673]|0;a[f+84+4>>0]=a[3674]|0;a[f+84+5>>0]=a[3675]|0;a[f+84+6>>0]=a[3676]|0;a[f+84+7>>0]=0;c[f+100>>2]=0;c[f+100+4>>2]=0;a[f+96+11>>0]=3;a[f+96>>0]=a[3678]|0;a[f+96+1>>0]=a[3679]|0;a[f+96+2>>0]=a[3680]|0;a[f+96+3>>0]=0;c[f+108>>2]=0;c[f+108+4>>2]=0;c[f+108+8>>2]=0;a[f+108+11>>0]=6;a[f+108>>0]=a[3682]|0;a[f+108+1>>0]=a[3683]|0;a[f+108+2>>0]=a[3684]|0;a[f+108+3>>0]=a[3685]|0;a[f+108+4>>0]=a[3686]|0;a[f+108+5>>0]=a[3687]|0;a[f+108+6>>0]=0;c[f+120>>2]=0;c[f+120+4>>2]=0;c[f+120+8>>2]=0;a[f+120+11>>0]=6;a[f+120>>0]=a[3689]|0;a[f+120+1>>0]=a[3690]|0;a[f+120+2>>0]=a[3691]|0;a[f+120+3>>0]=a[3692]|0;a[f+120+4>>0]=a[3693]|0;a[f+120+5>>0]=a[3694]|0;a[f+120+6>>0]=0;c[f+132>>2]=0;c[f+132+4>>2]=0;c[f+132+8>>2]=0;a[f+132+11>>0]=4;c[f+132>>2]=1954047348;a[f+136>>0]=0;c[f+144>>2]=0;c[f+144+4>>2]=0;c[f+144+8>>2]=0;a[f+144+11>>0]=4;c[f+144>>2]=1668506980;a[f+148>>0]=0;c[f+156>>2]=0;c[f+156+4>>2]=0;c[f+156+8>>2]=0;a[f+156+11>>0]=8;c[f+156>>2]=1635018093;c[f+156+4>>2]=1635017060;a[f+164>>0]=0;c[f+168>>2]=0;c[f+168+4>>2]=0;c[f+168+8>>2]=0;a[f+168+11>>0]=5;a[f+168>>0]=a[3696]|0;a[f+168+1>>0]=a[3697]|0;a[f+168+2>>0]=a[3698]|0;a[f+168+3>>0]=a[3699]|0;a[f+168+4>>0]=a[3700]|0;a[f+168+5>>0]=0;c[2399]=0;c[2400]=0;c[2401]=0;h=tf(180)|0;c[2400]=h;c[2399]=h;c[2401]=h+180;oe(h,f);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+12|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+24|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+36|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+48|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+60|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+72|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+84|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+96|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+108|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+120|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+132|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+144|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+156|0);h=(c[2400]|0)+12|0;c[2400]=h;oe(h,f+168|0);c[2400]=(c[2400]|0)+12;if((a[f+168+11>>0]|0)<0)Nh(c[f+168>>2]|0);if((a[f+156+11>>0]|0)<0)Nh(c[f+156>>2]|0);if((a[f+144+11>>0]|0)<0)Nh(c[f+144>>2]|0);if((a[f+132+11>>0]|0)<0)Nh(c[f+132>>2]|0);if((a[f+120+11>>0]|0)<0)Nh(c[f+120>>2]|0);if((a[f+108+11>>0]|0)<0)Nh(c[f+108>>2]|0);if((a[f+96+11>>0]|0)<0)Nh(c[f+96>>2]|0);if((a[f+84+11>>0]|0)<0)Nh(c[f+84>>2]|0);if((a[f+72+11>>0]|0)<0)Nh(c[f+72>>2]|0);if((a[f+60+11>>0]|0)<0)Nh(c[f+60>>2]|0);if((a[f+48+11>>0]|0)<0)Nh(c[f+48>>2]|0);if((a[f+36+11>>0]|0)<0)Nh(c[f+36>>2]|0);if((a[f+24+11>>0]|0)<0)Nh(c[f+24>>2]|0);if((a[f+12+11>>0]|0)<0)Nh(c[f+12>>2]|0);if((a[f+11>>0]|0)<0)Nh(c[f>>2]|0);c[f>>2]=0;c[f+4>>2]=0;c[f+8>>2]=0;a[f+11>>0]=4;c[f>>2]=1634038369;a[f+4>>0]=0;c[f+12>>2]=0;c[f+12+4>>2]=0;c[f+12+8>>2]=0;a[f+12+11>>0]=4;c[f+12>>2]=1702060386;a[f+16>>0]=0;c[f+24>>2]=0;c[f+24+4>>2]=0;c[f+24+8>>2]=0;a[f+24+11>>0]=2;b[f+24>>1]=29282;a[f+24+2>>0]=0;c[f+40>>2]=0;c[f+40+4>>2]=0;a[f+36+11>>0]=3;a[f+36>>0]=a[3702]|0;a[f+36+1>>0]=a[3703]|0;a[f+36+2>>0]=a[3704]|0;a[f+36+3>>0]=0;c[f+48>>2]=0;c[f+48+4>>2]=0;c[f+48+8>>2]=0;a[f+48+11>>0]=5;a[f+48>>0]=a[3706]|0;a[f+48+1>>0]=a[3707]|0;a[f+48+2>>0]=a[3708]|0;a[f+48+3>>0]=a[3709]|0;a[f+48+4>>0]=a[3710]|0;a[f+48+5>>0]=0;c[f+60>>2]=0;c[f+60+4>>2]=0;c[f+60+8>>2]=0;a[f+60+11>>0]=2;b[f+60>>1]=29288;a[f+60+2>>0]=0;c[f+76>>2]=0;c[f+76+4>>2]=0;a[f+72+11>>0]=3;a[f+72>>0]=a[3712]|0;a[f+72+1>>0]=a[3713]|0;a[f+72+2>>0]=a[3714]|0;a[f+72+3>>0]=0;c[f+84>>2]=0;c[f+84+4>>2]=0;c[f+84+8>>2]=0;a[f+84+11>>0]=5;a[f+84>>0]=a[3716]|0;a[f+84+1>>0]=a[3717]|0;a[f+84+2>>0]=a[3718]|0;a[f+84+3>>0]=a[3719]|0;a[f+84+4>>0]=a[3720]|0;a[f+84+5>>0]=0;c[f+96>>2]=0;c[f+96+4>>2]=0;c[f+96+8>>2]=0;a[f+96+11>>0]=6;a[f+96>>0]=a[3722]|0;a[f+96+1>>0]=a[3723]|0;a[f+96+2>>0]=a[3724]|0;a[f+96+3>>0]=a[3725]|0;a[f+96+4>>0]=a[3726]|0;a[f+96+5>>0]=a[3727]|0;a[f+96+6>>0]=0;c[f+108>>2]=0;c[f+108+4>>2]=0;c[f+108+8>>2]=0;a[f+108+11>>0]=4;c[f+108>>2]=1802398060;a[f+112>>0]=0;c[f+120>>2]=0;c[f+120+4>>2]=0;c[f+120+8>>2]=0;a[f+120+11>>0]=4;c[f+120>>2]=1635018093;a[f+124>>0]=0;c[f+132>>2]=0;c[f+132+4>>2]=0;c[f+132+8>>2]=0;a[f+132+11>>0]=5;a[f+132>>0]=a[3729]|0;a[f+132+1>>0]=a[3730]|0;a[f+132+2>>0]=a[3731]|0;a[f+132+3>>0]=a[3732]|0;a[f+132+4>>0]=a[3733]|0;a[f+132+5>>0]=0;c[f+144>>2]=0;c[f+144+4>>2]=0;c[f+144+8>>2]=0;a[f+144+11>>0]=6;a[f+144>>0]=a[3735]|0;a[f+144+1>>0]=a[3736]|0;a[f+144+2>>0]=a[3737]|0;a[f+144+3>>0]=a[3738]|0;a[f+144+4>>0]=a[3739]|0;a[f+144+5>>0]=a[3740]|0;a[f+144+6>>0]=0;c[f+156>>2]=0;c[f+156+4>>2]=0;c[f+156+8>>2]=0;a[f+156+11>>0]=5;a[f+156>>0]=a[3742]|0;a[f+156+1>>0]=a[3743]|0;a[f+156+2>>0]=a[3744]|0;a[f+156+3>>0]=a[3745]|0;a[f+156+4>>0]=a[3746]|0;a[f+156+5>>0]=0;c[f+172>>2]=0;c[f+172+4>>2]=0;a[f+168+11>>0]=3;a[f+168>>0]=a[3748]|0;a[f+168+1>>0]=a[3749]|0;a[f+168+2>>0]=a[3750]|0;a[f+168+3>>0]=0;c[2402]=0;c[2403]=0;c[2404]=0;h=tf(180)|0;c[2403]=h;c[2402]=h;c[2404]=h+180;oe(h,f);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+12|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+24|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+36|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+48|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+60|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+72|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+84|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+96|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+108|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+120|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+132|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+144|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+156|0);h=(c[2403]|0)+12|0;c[2403]=h;oe(h,f+168|0);c[2403]=(c[2403]|0)+12;if((a[f+168+11>>0]|0)<0)Nh(c[f+168>>2]|0);if((a[f+156+11>>0]|0)<0)Nh(c[f+156>>2]|0);if((a[f+144+11>>0]|0)<0)Nh(c[f+144>>2]|0);if((a[f+132+11>>0]|0)<0)Nh(c[f+132>>2]|0);if((a[f+120+11>>0]|0)<0)Nh(c[f+120>>2]|0);if((a[f+108+11>>0]|0)<0)Nh(c[f+108>>2]|0);if((a[f+96+11>>0]|0)<0)Nh(c[f+96>>2]|0);if((a[f+84+11>>0]|0)<0)Nh(c[f+84>>2]|0);if((a[f+72+11>>0]|0)<0)Nh(c[f+72>>2]|0);if((a[f+60+11>>0]|0)<0)Nh(c[f+60>>2]|0);if((a[f+48+11>>0]|0)<0)Nh(c[f+48>>2]|0);if((a[f+36+11>>0]|0)<0)Nh(c[f+36>>2]|0);if((a[f+24+11>>0]|0)<0)Nh(c[f+24>>2]|0);if((a[f+12+11>>0]|0)<0)Nh(c[f+12>>2]|0);if((a[f+11>>0]|0)>=0){l=f;return}Nh(c[f>>2]|0);l=f;return}function Hc(b){b=b|0;var d=0,e=0,f=0.0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0;q=l;l=l+96|0;p=c[b>>2]|0;o=kc(1834)|0;p=sa(p|0,o|0)|0;Va(o|0);f=+Oa(p|0,672,q|0);bb(c[q>>2]|0);Va(p|0);do if((~~f|0)==1){g=c[b>>2]|0;e=kc(1843)|0;g=sa(g|0,e|0)|0;Va(e|0);Zd(q+76|0,g);Va(g|0);g=a[q+76+11>>0]|0;e=g<<24>>24<0?c[q+76>>2]|0:q+76|0;g=g<<24>>24<0?c[q+76+4>>2]|0:g&255;if(g|0){d=e;do{a[d>>0]=hh(a[d>>0]|0)|0;d=d+1|0}while((d|0)!=(e+g|0))}c[q+64+4>>2]=0;c[q+64+8>>2]=0;c[q+64>>2]=q+64+4;p=c[b>>2]|0;n=kc(1851)|0;p=sa(p|0,n|0)|0;Va(n|0);n=kc(1862)|0;o=sa(p|0,n|0)|0;Va(n|0);f=+Oa(o|0,672,q|0);bb(c[q>>2]|0);Va(o|0);Va(p|0);if(~~f|0){p=q+40+12|0;h=~~f;do{h=h+-1|0;i=c[b>>2]|0;m=kc(1851)|0;i=sa(i|0,m|0)|0;Va(m|0);c[q>>2]=h;m=Ua(672,q|0)|0;j=sa(i|0,m|0)|0;Va(m|0);m=kc(1869)|0;k=sa(j|0,m|0)|0;Va(m|0);Zd(q+24|0,k);m=c[b>>2]|0;e=kc(1851)|0;m=sa(m|0,e|0)|0;Va(e|0);c[q>>2]=h;e=Ua(672,q|0)|0;n=sa(m|0,e|0)|0;Va(e|0);e=kc(1878)|0;o=sa(n|0,e|0)|0;Va(e|0);Zd(q+12|0,o);c[q+40>>2]=c[q+24>>2];c[q+40+4>>2]=c[q+24+4>>2];c[q+40+8>>2]=c[q+24+8>>2];c[q+24>>2]=0;c[q+24+4>>2]=0;c[q+24+8>>2]=0;c[p>>2]=c[q+12>>2];c[p+4>>2]=c[q+12+4>>2];c[p+8>>2]=c[q+12+8>>2];c[q+12>>2]=0;c[q+12+4>>2]=0;c[q+12+8>>2]=0;e=rd(q+64|0,q,q+40|0)|0;if(c[e>>2]|0){if((a[p+11>>0]|0)<0)Nh(c[p>>2]|0)}else{d=tf(40)|0;c[d+16>>2]=c[q+40>>2];c[d+16+4>>2]=c[q+40+4>>2];c[d+16+8>>2]=c[q+40+8>>2];c[q+40>>2]=0;c[q+40+4>>2]=0;c[q+40+8>>2]=0;c[d+28>>2]=c[p>>2];c[d+28+4>>2]=c[p+4>>2];c[d+28+8>>2]=c[p+8>>2];c[p>>2]=0;c[p+4>>2]=0;c[p+8>>2]=0;g=c[q>>2]|0;c[d>>2]=0;c[d+4>>2]=0;c[d+8>>2]=g;c[e>>2]=d;g=c[c[q+64>>2]>>2]|0;if(g){c[q+64>>2]=g;d=c[e>>2]|0}fd(c[q+64+4>>2]|0,d);c[q+64+8>>2]=(c[q+64+8>>2]|0)+1}if((a[q+40+11>>0]|0)<0)Nh(c[q+40>>2]|0);Va(o|0);Va(n|0);Va(m|0);Va(k|0);Va(j|0);Va(i|0)}while((h|0)!=0)}c[q+40>>2]=0;j=q+40+4|0;c[j>>2]=0;c[q+40+8>>2]=0;p=c[b>>2]|0;n=kc(1888)|0;p=sa(p|0,n|0)|0;Va(n|0);n=kc(1862)|0;o=sa(p|0,n|0)|0;Va(n|0);f=+Oa(o|0,672,q|0);bb(c[q>>2]|0);Va(o|0);Va(p|0);if((~~f|0)>0){d=0;do{e=c[b>>2]|0;h=kc(1888)|0;e=sa(e|0,h|0)|0;Va(h|0);c[q>>2]=d;h=Ua(672,q|0)|0;g=sa(e|0,h|0)|0;c[q+12>>2]=g;Va(h|0);h=Hc(q+12|0)|0;c[q+24>>2]=h;i=c[j>>2]|0;if(i>>>0<(c[q+40+8>>2]|0)>>>0){c[i>>2]=h;c[j>>2]=i+4}else Nd(q+40|0,q+24|0);Va(g|0);Va(e|0);d=d+1|0}while((d|0)<(~~f|0))}e=tf(64)|0;jd(e,q+76|0,q+64|0,q+40|0);d=c[q+40>>2]|0;if(d|0){g=c[j>>2]|0;if((g|0)!=(d|0))c[j>>2]=g+(~((g+-4-d|0)>>>2)<<2);Nh(d)}qe(c[q+64+4>>2]|0);if((a[q+76+11>>0]|0)<0)Nh(c[q+76>>2]|0)}else{p=c[b>>2]|0;o=kc(1834)|0;p=sa(p|0,o|0)|0;Va(o|0);f=+Oa(p|0,672,q|0);bb(c[q>>2]|0);Va(p|0);if((~~f|0)==3){d=c[b>>2]|0;e=kc(1899)|0;d=sa(d|0,e|0)|0;Va(e|0);Zd(q,d);e=tf(64)|0;c[e+40>>2]=0;c[e+44>>2]=0;g=e;h=g+36|0;do{c[g>>2]=0;g=g+4|0}while((g|0)<(h|0));c[e+36>>2]=e+40;c[e+52>>2]=0;c[e+56>>2]=0;c[e+60>>2]=0;mf(e+24|0,q)|0;if((a[q+11>>0]|0)<0)Nh(c[q>>2]|0);Va(d|0);break}p=c[b>>2]|0;o=kc(1834)|0;p=sa(p|0,o|0)|0;Va(o|0);f=+Oa(p|0,672,q|0);bb(c[q>>2]|0);Va(p|0);if((~~f|0)!=8){c[q>>2]=0;c[q+4>>2]=0;c[q+8>>2]=0;e=tf(64)|0;oe(e,q);c[e+40>>2]=0;c[e+44>>2]=0;c[e+12>>2]=0;c[e+12+4>>2]=0;c[e+12+8>>2]=0;c[e+12+12>>2]=0;c[e+12+16>>2]=0;c[e+12+20>>2]=0;c[e+36>>2]=e+40;c[e+52>>2]=0;c[e+56>>2]=0;c[e+60>>2]=0;break}c[q>>2]=0;c[q+4>>2]=0;c[q+8>>2]=0;a[q+11>>0]=1;a[q>>0]=33;a[q+1>>0]=0;d=c[b>>2]|0;e=kc(1899)|0;d=sa(d|0,e|0)|0;Va(e|0);Zd(q+76|0,d);e=tf(64)|0;oe(e,q);c[e+12>>2]=0;c[e+12+4>>2]=0;c[e+12+8>>2]=0;oe(e+24|0,q+76|0);c[e+40>>2]=0;c[e+44>>2]=0;c[e+36>>2]=e+40;c[e+52>>2]=0;c[e+56>>2]=0;c[e+60>>2]=0;if((a[q+76+11>>0]|0)<0)Nh(c[q+76>>2]|0);Va(d|0)}while(0);d=ya(3911)|0;p=kc(3918)|0;g=sa(d|0,p|0)|0;Va(p|0);p=kc(1911)|0;h=sa(g|0,p|0)|0;Va(p|0);if(a[9552]|0){p=c[2398]|0;o=c[b>>2]|0;_b(o|0);b=c[b>>2]|0;c[q>>2]=b;f=+ab(p|0,h|0,1918,q+76|0,q|0);p=c[q+76>>2]|0;bb(p|0);p=~~f;b=e+48|0;c[b>>2]=p;Va(h|0);Va(g|0);Va(d|0);l=q;return e|0}if(!(Eg(9552)|0)){p=c[2398]|0;o=c[b>>2]|0;_b(o|0);b=c[b>>2]|0;c[q>>2]=b;f=+ab(p|0,h|0,1918,q+76|0,q|0);p=c[q+76>>2]|0;bb(p|0);p=~~f;b=e+48|0;c[b>>2]=p;Va(h|0);Va(g|0);Va(d|0);l=q;return e|0}c[2398]=Nb(2,736)|0;p=c[2398]|0;o=c[b>>2]|0;_b(o|0);b=c[b>>2]|0;c[q>>2]=b;f=+ab(p|0,h|0,1918,q+76|0,q|0);p=c[q+76>>2]|0;bb(p|0);p=~~f;b=e+48|0;c[b>>2]=p;Va(h|0);Va(g|0);Va(d|0);l=q;return e|0}function Ic(b,e,f,g,h,i){b=b|0;e=+e;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,m=0,n=0,o=0,p=0.0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,A=0,B=0,C=0,D=0;D=l;l=l+560|0;C=D+524|0;c[D>>2]=0;B=D+512+12|0;jg(e)|0;if((z|0)<0){e=-e;y=1;x=6487}else{y=(h&2049|0)!=0&1;x=(h&2048|0)==0?((h&1|0)==0?6488:6493):6490}jg(e)|0;A=z&2146435072;do if(A>>>0<2146435072|(A|0)==2146435072&0<0){p=+Eh(e,D)*2.0;if(p!=0.0)c[D>>2]=(c[D>>2]|0)+-1;if((i|32|0)==97){o=(i&32|0)==0?x:x+9|0;n=y|2;do if(!(g>>>0>11|(12-g|0)==0)){e=8.0;j=12-g|0;do{j=j+-1|0;e=e*16.0}while((j|0)!=0);if((a[o>>0]|0)==45){e=-(e+(-p-e));break}else{e=p+e-e;break}}else e=p;while(0);k=c[D>>2]|0;j=(k|0)<0?0-k|0:k;j=Ge(j,((j|0)<0)<<31>>31,B)|0;if((j|0)==(B|0)){a[D+512+11>>0]=48;j=D+512+11|0}a[j+-1>>0]=(k>>31&2)+43;m=j+-2|0;a[m>>0]=i+15;j=D+524|0;do{A=~~e;k=j+1|0;a[j>>0]=d[6518+A>>0]|i&32;e=(e-+(A|0))*16.0;if((k-C|0)==1?!((h&8|0)==0&((g|0)<1&e==0.0)):0){a[k>>0]=46;j=j+2|0}else j=k}while(e!=0.0);C=j-C|0;j=(g|0)!=0&(C+-2|0)<(g|0)?g+2|0:C;Oe(b,32,f,B-m+n+j|0,h);Ig(b,o,n);Oe(b,48,f,B-m+n+j|0,h^65536);Ig(b,D+524|0,C);Oe(b,48,j-C|0,0,0);Ig(b,m,B-m|0);Oe(b,32,f,B-m+n+j|0,h^8192);j=B-m+n+j|0;break}k=(g|0)<0?6:g;if(p!=0.0){n=(c[D>>2]|0)+-28|0;c[D>>2]=n;e=p*268435456.0}else{e=p;n=c[D>>2]|0}A=(n|0)<0?D+8|0:D+8+288|0;j=A;do{v=~~e>>>0;c[j>>2]=v;j=j+4|0;e=(e-+(v>>>0))*1.0e9}while(e!=0.0);if((n|0)>0){m=A;do{g=(n|0)<29?n:29;n=j+-4|0;if(n>>>0>=m>>>0){o=0;do{u=Yf(c[n>>2]|0,0,g|0)|0;u=mg(u|0,z|0,o|0,0)|0;v=z;t=Kf(u|0,v|0,1e9,0)|0;c[n>>2]=t;o=Mg(u|0,v|0,1e9,0)|0;n=n+-4|0}while(n>>>0>=m>>>0);if(o){m=m+-4|0;c[m>>2]=o}}while(1){if(j>>>0<=m>>>0)break;n=j+-4|0;if(!(c[n>>2]|0))j=n;else break}n=(c[D>>2]|0)-g|0;c[D>>2]=n}while((n|0)>0)}else m=A;if((n|0)<0)do{g=0-n|0;g=(g|0)<9?g:9;if(m>>>0<j>>>0){o=0;n=m;do{v=c[n>>2]|0;c[n>>2]=(v>>>g)+o;o=O(v&(1<<g)+-1,1e9>>>g)|0;n=n+4|0}while(n>>>0<j>>>0);m=(c[m>>2]|0)==0?m+4|0:m;if(o){c[j>>2]=o;j=j+4|0}}else m=(c[m>>2]|0)==0?m+4|0:m;n=(i|32|0)==102?A:m;j=(j-n>>2|0)>(((k+25|0)/9|0)+1|0)?n+(((k+25|0)/9|0)+1<<2)|0:j;n=(c[D>>2]|0)+g|0;c[D>>2]=n}while((n|0)<0);if(m>>>0<j>>>0){n=(A-m>>2)*9|0;g=c[m>>2]|0;if(g>>>0<10)s=n;else{o=10;do{o=o*10|0;n=n+1|0}while(g>>>0>=o>>>0);s=n}}else s=0;o=k-((i|32|0)!=102?s:0)+(((k|0)!=0&(i|32|0)==103)<<31>>31)|0;if((o|0)<(((j-A>>2)*9|0)+-9|0)){n=A+4+(((o+9216|0)/9|0)+-1024<<2)|0;if((((o+9216|0)%9|0)+1|0)<9){g=((o+9216|0)%9|0)+1|0;o=10;do{o=o*10|0;g=g+1|0}while((g|0)!=9)}else o=10;q=c[n>>2]|0;r=(q>>>0)%(o>>>0)|0;g=(n+4|0)==(j|0);if(!(g&(r|0)==0)){p=(((q>>>0)/(o>>>0)|0)&1|0)==0?9007199254740992.0:9007199254740994.0;v=(o|0)/2|0;e=r>>>0<v>>>0?.5:g&(r|0)==(v|0)?1.0:1.5;if(y){v=(a[x>>0]|0)==45;e=v?-e:e;p=v?-p:p}c[n>>2]=q-r;if(p+e!=p){v=q-r+o|0;c[n>>2]=v;if(v>>>0>999999999)while(1){o=n+-4|0;c[n>>2]=0;if(o>>>0<m>>>0){m=m+-4|0;c[m>>2]=0}v=(c[o>>2]|0)+1|0;c[o>>2]=v;if(v>>>0>999999999)n=o;else{n=o;break}}o=(A-m>>2)*9|0;q=c[m>>2]|0;if(q>>>0>=10){g=10;do{g=g*10|0;o=o+1|0}while(q>>>0>=g>>>0)}}else o=s}else o=s;u=n+4|0;j=j>>>0>u>>>0?u:j;u=m}else{o=s;u=m}v=j;while(1){if(v>>>0<=u>>>0){t=0;break}j=v+-4|0;if(!(c[j>>2]|0))v=j;else{t=1;break}}q=0-o|0;do if((i|32|0)==103){s=(o|0)>-5?((((k|0)!=0^1)&1)+k|0)>(o|0):0;n=(s?-1:-2)+i|0;k=(((k|0)!=0^1)&1)+k+-1+(s?q:0)|0;if(!(h&8)){if(t?(w=c[v+-4>>2]|0,(w|0)!=0):0)if(!((w>>>0)%10|0)){j=0;m=10;do{m=m*10|0;j=j+1|0}while(!((w>>>0)%(m>>>0)|0|0))}else j=0;else j=9;m=((v-A>>2)*9|0)+-9|0;if((n|32|0)==102){g=m-j|0;g=(g|0)>0?g:0;k=(k|0)<(g|0)?k:g;g=0;break}else{g=m+o-j|0;g=(g|0)>0?g:0;k=(k|0)<(g|0)?k:g;g=0;break}}else g=h&8}else{n=i;g=h&8}while(0);s=k|g;m=(n|32|0)==102;if(m){r=0;j=(o|0)>0?o:0}else{j=(o|0)<0?q:o;j=Ge(j,((j|0)<0)<<31>>31,B)|0;if((B-j|0)<2)do{j=j+-1|0;a[j>>0]=48}while((B-j|0)<2);a[j+-1>>0]=(o>>31&2)+43;j=j+-2|0;a[j>>0]=n;r=j;j=B-j|0}j=y+1+k+((s|0)!=0&1)+j|0;Oe(b,32,f,j,h);Ig(b,x,y);Oe(b,48,f,j,h^65536);if(m){o=u>>>0>A>>>0?A:u;n=o;do{m=Ge(c[n>>2]|0,0,D+524+9|0)|0;if((n|0)==(o|0)){if((m|0)==(D+524+9|0)){a[D+524+8>>0]=48;m=D+524+8|0}}else if(m>>>0>(D+524|0)>>>0){$d(D+524|0,48,m-C|0)|0;do m=m+-1|0;while(m>>>0>(D+524|0)>>>0)}Ig(b,m,D+524+9-m|0);n=n+4|0}while(n>>>0<=A>>>0);if(s|0)Ig(b,9414,1);if((k|0)>0&n>>>0<v>>>0)while(1){m=Ge(c[n>>2]|0,0,D+524+9|0)|0;if(m>>>0>(D+524|0)>>>0){$d(D+524|0,48,m-C|0)|0;do m=m+-1|0;while(m>>>0>(D+524|0)>>>0)}Ig(b,m,(k|0)<9?k:9);n=n+4|0;m=k+-9|0;if(!((k|0)>9&n>>>0<v>>>0)){k=m;break}else k=m}Oe(b,48,k+9|0,9,0)}else{q=t?v:u+4|0;if((k|0)>-1){g=(g|0)==0;o=u;do{m=Ge(c[o>>2]|0,0,D+524+9|0)|0;if((m|0)==(D+524+9|0)){a[D+524+8>>0]=48;m=D+524+8|0}do if((o|0)==(u|0)){n=m+1|0;Ig(b,m,1);if(g&(k|0)<1){m=n;break}Ig(b,9414,1);m=n}else{if(m>>>0<=(D+524|0)>>>0)break;$d(D+524|0,48,m+(0-C)|0)|0;do m=m+-1|0;while(m>>>0>(D+524|0)>>>0)}while(0);A=D+524+9-m|0;Ig(b,m,(k|0)>(A|0)?A:k);k=k-A|0;o=o+4|0}while(o>>>0<q>>>0&(k|0)>-1)}Oe(b,48,k+18|0,18,0);Ig(b,r,B-r|0)}Oe(b,32,f,j,h^8192)}else{j=y+3|0;Oe(b,32,f,j,h&-65537);Ig(b,x,y);Ig(b,e!=e|0.0!=0.0?(i&32|0?8426:6514):i&32|0?6506:6510,3);Oe(b,32,f,j,h^8192)}while(0);l=D;return ((j|0)<(f|0)?f:j)|0}function Jc(d,e,f,g,i){d=d|0;e=e|0;f=f|0;g=g|0;i=i|0;var j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0;x=l;l=l+64|0;c[x+16>>2]=e;w=x+24+40|0;k=0;j=0;p=0;a:while(1){do if((j|0)>-1)if((k|0)>(2147483647-j|0)){c[2561]=75;j=-1;break}else{j=k+j|0;break}while(0);k=a[e>>0]|0;if(!(k<<24>>24)){v=87;break}else m=e;b:while(1){switch(k<<24>>24){case 37:{k=m;v=9;break b}case 0:{k=m;break b}default:{}}u=m+1|0;c[x+16>>2]=u;k=a[u>>0]|0;m=u}c:do if((v|0)==9)while(1){v=0;if((a[m+1>>0]|0)!=37)break c;k=k+1|0;m=m+2|0;c[x+16>>2]=m;if((a[m>>0]|0)==37)v=9;else break}while(0);k=k-e|0;if(d|0)Ig(d,e,k);if(k|0){e=m;continue}n=m+1|0;k=(a[n>>0]|0)+-48|0;if(k>>>0<10){u=(a[m+2>>0]|0)==36;s=u?k:-1;p=u?1:p;n=u?m+3|0:n}else s=-1;c[x+16>>2]=n;k=a[n>>0]|0;d:do if(((k<<24>>24)+-32|0)>>>0<32){m=0;q=k;o=(k<<24>>24)+-32|0;while(1){k=1<<o;if(!(k&75913)){k=q;break d}m=m|k;n=n+1|0;c[x+16>>2]=n;k=a[n>>0]|0;o=(k<<24>>24)+-32|0;if(o>>>0>=32)break;else q=k}}else m=0;while(0);if(k<<24>>24==42){o=n+1|0;k=(a[o>>0]|0)+-48|0;if(k>>>0<10?(a[n+2>>0]|0)==36:0){c[i+(k<<2)>>2]=10;k=c[g+((a[o>>0]|0)+-48<<3)>>2]|0;p=1;n=n+3|0}else{if(p|0){j=-1;break}if(d|0){p=(c[f>>2]|0)+(4-1)&~(4-1);k=c[p>>2]|0;c[f>>2]=p+4;p=0;n=o}else{k=0;p=0;n=o}}c[x+16>>2]=n;t=(k|0)<0;k=t?0-k|0:k;t=t?m|8192:m}else{k=uf(x+16|0)|0;if((k|0)<0){j=-1;break}t=m;n=c[x+16>>2]|0}do if((a[n>>0]|0)==46){m=n+1|0;if((a[m>>0]|0)!=42){c[x+16>>2]=m;m=uf(x+16|0)|0;n=c[x+16>>2]|0;break}o=n+2|0;m=(a[o>>0]|0)+-48|0;if(m>>>0<10?(a[n+3>>0]|0)==36:0){c[i+(m<<2)>>2]=10;m=c[g+((a[o>>0]|0)+-48<<3)>>2]|0;n=n+4|0;c[x+16>>2]=n;break}if(p|0){j=-1;break a}if(d|0){u=(c[f>>2]|0)+(4-1)&~(4-1);m=c[u>>2]|0;c[f>>2]=u+4}else m=0;c[x+16>>2]=o;n=o}else m=-1;while(0);r=0;while(1){if(((a[n>>0]|0)+-65|0)>>>0>57){j=-1;break a}u=n+1|0;c[x+16>>2]=u;o=a[(a[n>>0]|0)+-65+(6013+(r*58|0))>>0]|0;if(((o&255)+-1|0)>>>0<8){r=o&255;n=u}else break}if(!(o<<24>>24)){j=-1;break}q=(s|0)>-1;do if(o<<24>>24==19)if(q){j=-1;break a}else v=49;else{if(q){c[i+(s<<2)>>2]=o&255;s=g+(s<<3)|0;v=c[s+4>>2]|0;c[x>>2]=c[s>>2];c[x+4>>2]=v;v=49;break}if(!d){j=0;break a}hd(x,o&255,f)}while(0);if((v|0)==49?(v=0,(d|0)==0):0){k=0;e=u;continue}n=a[n>>0]|0;n=(r|0)!=0&(n&15|0)==3?n&-33:n;s=t&-65537;t=(t&8192|0)==0?t:s;e:do switch(n|0){case 110:switch((r&255)<<24>>24){case 0:{c[c[x>>2]>>2]=j;k=0;e=u;continue a}case 1:{c[c[x>>2]>>2]=j;k=0;e=u;continue a}case 2:{k=c[x>>2]|0;c[k>>2]=j;c[k+4>>2]=((j|0)<0)<<31>>31;k=0;e=u;continue a}case 3:{b[c[x>>2]>>1]=j;k=0;e=u;continue a}case 4:{a[c[x>>2]>>0]=j;k=0;e=u;continue a}case 6:{c[c[x>>2]>>2]=j;k=0;e=u;continue a}case 7:{k=c[x>>2]|0;c[k>>2]=j;c[k+4>>2]=((j|0)<0)<<31>>31;k=0;e=u;continue a}default:{k=0;e=u;continue a}}case 112:{n=120;m=m>>>0>8?m:8;e=t|8;v=61;break}case 88:case 120:{e=t;v=61;break}case 111:{e=c[x>>2]|0;n=c[x+4>>2]|0;s=zf(e,n,w)|0;r=s;o=0;q=6477;m=(t&8|0)==0|(m|0)>(w-s|0)?m:w-s+1|0;s=t;v=67;break}case 105:case 100:{e=c[x>>2]|0;n=c[x+4>>2]|0;if((n|0)<0){e=ag(0,0,e|0,n|0)|0;n=z;c[x>>2]=e;c[x+4>>2]=n;o=1;q=6477;v=66;break e}else{o=(t&2049|0)!=0&1;q=(t&2048|0)==0?((t&1|0)==0?6477:6479):6478;v=66;break e}}case 117:{o=0;q=6477;e=c[x>>2]|0;n=c[x+4>>2]|0;v=66;break}case 99:{a[x+24+39>>0]=c[x>>2];e=x+24+39|0;o=0;q=6477;r=w;n=1;m=s;break}case 109:{n=Ch(c[2561]|0)|0;v=71;break}case 115:{n=c[x>>2]|0;n=n|0?n:8541;v=71;break}case 67:{c[x+8>>2]=c[x>>2];c[x+8+4>>2]=0;c[x>>2]=x+8;r=-1;n=x+8|0;v=75;break}case 83:{e=c[x>>2]|0;if(!m){Oe(d,32,k,0,t);e=0;v=84}else{r=m;n=e;v=75}break}case 65:case 71:case 70:case 69:case 97:case 103:case 102:case 101:{k=Ic(d,+h[x>>3],k,m,t,n)|0;e=u;continue a}default:{o=0;q=6477;r=w;n=m;m=t}}while(0);f:do if((v|0)==61){y=c[x>>2]|0;t=c[x+4>>2]|0;r=vf(y,t,w,n&32)|0;q=(e&8|0)==0|(y|0)==0&(t|0)==0;o=q?0:2;q=q?6477:6477+(n>>4)|0;s=e;e=y;n=t;v=67}else if((v|0)==66){r=Ge(e,n,w)|0;s=t;v=67}else if((v|0)==71){v=0;y=Jd(n,m)|0;e=n;o=0;q=6477;r=(y|0)==0?n+m|0:y;n=(y|0)==0?m:y-n|0;m=s}else if((v|0)==75){v=0;q=n;e=0;m=0;while(1){o=c[q>>2]|0;if(!o)break;m=Jg(x+20|0,o)|0;if((m|0)<0|m>>>0>(r-e|0)>>>0)break;e=m+e|0;if(r>>>0>e>>>0)q=q+4|0;else break}if((m|0)<0){j=-1;break a}Oe(d,32,k,e,t);if(!e){e=0;v=84}else{o=0;while(1){m=c[n>>2]|0;if(!m){v=84;break f}m=Jg(x+20|0,m)|0;o=m+o|0;if((o|0)>(e|0)){v=84;break f}Ig(d,x+20|0,m);if(o>>>0>=e>>>0){v=84;break}else n=n+4|0}}}while(0);if((v|0)==67){v=0;n=(e|0)!=0|(n|0)!=0;y=n|(m|0)!=0;n=w-r+((n^1)&1)|0;e=y?r:w;r=w;n=y?((m|0)>(n|0)?m:n):m;m=(m|0)>-1?s&-65537:s}else if((v|0)==84){v=0;Oe(d,32,k,e,t^8192);k=(k|0)>(e|0)?k:e;e=u;continue}t=r-e|0;s=(n|0)<(t|0)?t:n;y=s+o|0;k=(k|0)<(y|0)?y:k;Oe(d,32,k,y,m);Ig(d,q,o);Oe(d,48,k,y,m^65536);Oe(d,48,s,t,0);Ig(d,e,t);Oe(d,32,k,y,m^8192);e=u}g:do if((v|0)==87)if(!d)if(!p)j=0;else{j=1;while(1){e=c[i+(j<<2)>>2]|0;if(!e)break;hd(g+(j<<3)|0,e,f);j=j+1|0;if((j|0)>=10){j=1;break g}}while(1){j=j+1|0;if((j|0)>=10){j=1;break g}if(c[i+(j<<2)>>2]|0){j=-1;break}}}while(0);l=x;return j|0}function Kc(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0;p=l;l=l+80|0;k=tf(20)|0;rg(k);c[k+12>>2]=1114111;c[k+16>>2]=0;c[k>>2]=752;c[p+8>>2]=0;c[p+8+4>>2]=0;c[p+8+8>>2]=0;c[p+8+12>>2]=0;c[p+8+16>>2]=0;c[p+8+20>>2]=0;c[p+8+24>>2]=k;c[p+8+28>>2]=0;c[p+8+28+4>>2]=0;m=p+8+36|0;n=a[d+8+3>>0]|0;o=n<<24>>24<0?c[d>>2]|0:d;n=n<<24>>24<0?c[d+4>>2]|0:n&255;c[m>>2]=0;a:do if(k){c[b>>2]=0;c[b+4>>2]=0;c[b+8>>2]=0;if(n<<2>>1>>>0>4294967279)Bh();if(n<<2>>1>>>0<11){a[b+11>>0]=n<<2>>1;if(!(n<<2>>1))d=b;else{d=b;g=7}}else{d=tf((n<<2>>1)+16&-16)|0;c[b>>2]=d;c[b+8>>2]=(n<<2>>1)+16&-16|-2147483648;c[b+4>>2]=n<<2>>1;g=7}if((g|0)==7)$d(d|0,0,n<<2>>1|0)|0;a[d+(n<<2>>1)>>0]=0;do if(n){if((a[b+11>>0]|0)<0)d=(c[b+8>>2]&2147483647)+-1|0;else d=10;Ce(b,d);d=c[p+8+28+4>>2]|0;c[p>>2]=c[p+8+28>>2];c[p+4>>2]=d;d=a[b+11>>0]|0;if(d<<24>>24<0){j=b+4|0;f=c[b>>2]|0;d=c[b+4>>2]|0}else{j=b+4|0;f=b;d=d&255}i=c[p+8+24>>2]|0;e=o;d=f+d|0;h=c[m>>2]|0;b:while(1){d=xc[c[(c[i>>2]|0)+12>>2]&7](i,p,e,o+(n<<2)|0,p+52|0,f,d,p+48|0)|0;g=c[p+52>>2]|0;k=e;h=(g-k>>2)+h|0;if((g|0)==(e|0)){g=61;break}switch(d|0){case 3:{g=18;break b}case 0:{g=50;break b}case 1:break;default:{g=61;break b}}if((a[b+11>>0]|0)<0)d=c[b>>2]|0;else d=b;f=(c[p+48>>2]|0)-d|0;Ce(b,f<<1);d=a[b+11>>0]|0;if(d<<24>>24<0){g=c[b>>2]|0;d=c[j>>2]|0}else{g=b;d=d&255}e=c[p+52>>2]|0;if(e>>>0>=(o+(n<<2)|0)>>>0){g=59;break}else{d=g+d|0;f=g+f|0}}if((g|0)==18){c[m>>2]=h;if((a[b+11>>0]|0)<0)d=c[b>>2]|0;else d=b;Ce(b,f-d|0);d=a[b+11>>0]|0;if(d<<24>>24<0){h=(c[b+8>>2]&2147483647)+-1|0;i=c[b+4>>2]|0}else{h=10;i=d&255}j=o+(n<<2)-k|0;do if(j|0){if(d<<24>>24<0){f=c[b>>2]|0;g=c[b+4>>2]|0}else{f=b;g=d&255}if(!(f>>>0<=e>>>0&(f+g|0)>>>0>e>>>0)){if((h-i|0)>>>0<j>>>0){pe(b,h,i+j-h|0,i,i);d=a[b+11>>0]|0}if(d<<24>>24<0)g=c[b>>2]|0;else g=b;d=g+i|0;if((e|0)!=(o+(n<<2)|0)){f=i-k|0;while(1){a[d>>0]=a[e>>0]|0;e=e+1|0;if((e|0)==(o+(n<<2)|0))break;else d=d+1|0}d=g+(o+(n<<2)+f)|0}a[d>>0]=0;d=i+j|0;if((a[b+11>>0]|0)<0){c[b+4>>2]=d;break}else{a[b+11>>0]=d;break}}else{c[p+56>>2]=0;c[p+56+4>>2]=0;c[p+56+8>>2]=0;if(j>>>0>4294967279)Bh();if(j>>>0<11){a[p+56+11>>0]=j;d=p+56|0}else{d=tf(j+16&-16)|0;c[p+56>>2]=d;c[p+56+8>>2]=j+16&-16|-2147483648;c[p+56+4>>2]=j}if((e|0)!=(o+(n<<2)|0)){f=d;while(1){a[f>>0]=a[e>>0]|0;e=e+1|0;if((e|0)==(o+(n<<2)|0))break;else f=f+1|0}d=d+j|0}a[d>>0]=0;o=a[p+56+11>>0]|0;d=c[p+56>>2]|0;ie(b,o<<24>>24<0?d:p+56|0,o<<24>>24<0?c[p+56+4>>2]|0:o&255)|0;if(o<<24>>24<0)Nh(d);break}}while(0);i=b+11|0;j=p;g=62;break}else if((g|0)==50){c[m>>2]=h;if((a[b+11>>0]|0)<0)d=c[b>>2]|0;else d=b;Ce(b,(c[p+48>>2]|0)-d|0);i=b+11|0;j=p;g=62;break}else if((g|0)==59){c[m>>2]=h;d=b+11|0;break}else if((g|0)==61){c[m>>2]=h;d=b+11|0;break}}else{i=c[p+8+28+4>>2]|0;c[p>>2]=c[p+8+28>>2];c[p+4>>2]=i;i=b+11|0;j=p;g=62}while(0);do if((g|0)==62){d=a[i>>0]|0;if(d<<24>>24<0){e=(c[b+8>>2]&2147483647)+-1|0;g=c[b+4>>2]|0}else{e=10;g=d&255}Ce(b,e);d=a[i>>0]|0;if(d<<24>>24<0){e=c[b>>2]|0;h=b+4|0;f=c[b+4>>2]|0}else{e=b;h=b+4|0;f=d&255}o=e+g|0;d=c[p+8+24>>2]|0;e=o+f|0;f=o;c:while(1){switch(Bc[c[(c[d>>2]|0)+20>>2]&7](d,p,f,e,p+56|0)|0){case 3:{g=70;break c}case 0:{g=73;break c}case 1:break;default:{g=82;break c}}if((a[i>>0]|0)<0)e=c[b>>2]|0;else e=b;f=(c[p+56>>2]|0)-e|0;Ce(b,f<<1);e=a[i>>0]|0;if(e<<24>>24<0){g=c[b>>2]|0;e=c[h>>2]|0}else{g=b;e=e&255}e=g+e|0;f=g+f|0}if((g|0)==70){if((a[i>>0]|0)<0)e=c[b>>2]|0;else e=b;Ce(b,f-e|0)}else if((g|0)==73){if((a[i>>0]|0)<0)e=c[b>>2]|0;else e=b;Ce(b,(c[p+56>>2]|0)-e|0)}else if((g|0)==82){d=i;break}break a}while(0);if((a[d>>0]|0)<0){Nh(c[b>>2]|0);g=86}else g=86}else g=86;while(0);do if((g|0)==86){o=a[p+8+11>>0]|0;if(!((o<<24>>24<0?c[p+8+4>>2]|0:o&255)|0)){p=qb(8)|0;yg(p,3843);c[p>>2]=1704;jc(p|0,544,12)}else{oe(b,p+8|0);d=c[p+8+24>>2]|0;break}}while(0);if(d|0)sc[c[(c[d>>2]|0)+4>>2]&31](d);if((a[p+8+20+3>>0]|0)<0)Nh(c[p+8+12>>2]|0);if((a[p+8+11>>0]|0)>=0){l=p;return}Nh(c[p+8>>2]|0);l=p;return}function Lc(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0;r=l;l=l+48|0;q=c[d>>2]|0;c[r+8>>2]=0;c[r+8+4>>2]=0;c[r+8+8>>2]=0;Ec(q,r+8|0);q=tf(20)|0;rg(q);c[q+12>>2]=1114111;c[q+16>>2]=0;c[q>>2]=752;o=a[r+8+11>>0]|0;n=o<<24>>24<0?c[r+8>>2]|0:r+8|0;o=o<<24>>24<0?c[r+8+4>>2]|0:o&255;if(!q){b=qb(8)|0;yg(b,3752);c[b>>2]=1704;jc(b|0,544,12)}c[b>>2]=0;c[b+4>>2]=0;c[b+8>>2]=0;if(o<<1>>>0>1073741807)Bh();do if(o<<1>>>0<2){a[b+8+3>>0]=o<<1;if(!o){c[b+(o<<1<<2)>>2]=0;g=71}else{d=b;g=10}}else if(((o<<1)+4&-4)>>>0>1073741823){b=qb(8)|0;Ag(b,4528);c[b>>2]=1664;jc(b|0,512,10)}else{d=tf(((o<<1)+4&-4)<<2)|0;c[b>>2]=d;c[b+8>>2]=(o<<1)+4&-4|-2147483648;c[b+4>>2]=o<<1;g=10;break}while(0);a:do if((g|0)==10){Rf(d,o<<1)|0;c[d+(o<<1<<2)>>2]=0;if(!o)g=71;else{p=b+8+3|0;if((a[p>>0]|0)<0)d=(c[b+8>>2]&2147483647)+-1|0;else d=1;ze(b,d);c[r>>2]=0;c[r+4>>2]=0;d=a[p>>0]|0;if(d<<24>>24<0){i=b+4|0;j=b;k=b;f=c[b>>2]|0;d=c[b+4>>2]|0}else{i=b+4|0;j=b;k=b;f=b;d=d&255}e=n;d=f+(d<<2)|0;b:while(1){d=xc[c[(c[q>>2]|0)+16>>2]&7](q,r,e,n+o|0,r+24|0,f,d,r+20|0)|0;m=e;if((c[r+24>>2]|0)==(e|0)){d=2;g=65;break}switch(d|0){case 3:{g=19;break b}case 0:{g=55;break b}case 1:break;default:{g=65;break b}}if((a[p>>0]|0)<0)d=c[j>>2]|0;else d=k;g=(c[r+20>>2]|0)-d|0;ze(b,g>>1);d=a[p>>0]|0;if(d<<24>>24<0){h=c[j>>2]|0;f=c[i>>2]|0}else{h=k;f=d&255}e=c[r+24>>2]|0;if(e>>>0<(n+o|0)>>>0){d=h+(f<<2)|0;f=h+(g>>2<<2)|0}else{g=64;break}}do if((g|0)==19){if((a[p>>0]|0)<0)d=c[j>>2]|0;else d=k;ze(b,f-d>>2);d=a[p>>0]|0;if(d<<24>>24<0){f=(c[b+8>>2]&2147483647)+-1|0;i=c[b+4>>2]|0}else{f=1;i=d&255}j=n+o-m>>2;if(!j){d=0;g=65}else{if(d<<24>>24<0){g=c[b>>2]|0;h=c[b+4>>2]|0}else{g=b;h=d&255}if(!(g>>>0<=e>>>0&(g+(h<<2)|0)>>>0>e>>>0)){if((f-i|0)>>>0<j>>>0){ae(b,f,i+j-f|0,i,i);d=a[p>>0]|0}g=d<<24>>24<0;if(g)f=c[b>>2]|0;else f=b;d=f+(i<<2)|0;if((e|0)!=(n+o|0)){while(1){c[d>>2]=c[e>>2];e=e+4|0;if((e|0)==(n+o|0))break;else d=d+4|0}d=f+(((n+o+-4-m|0)>>>2)+1+i<<2)|0}c[d>>2]=0;d=i+j|0;if(g){c[b+4>>2]=d;d=0;g=65;break}else{a[p>>0]=d;d=0;g=65;break}}c[r+28>>2]=0;c[r+28+4>>2]=0;c[r+28+8>>2]=0;if(j>>>0>1073741807)Bh();do if(j>>>0>=2)if((j+4&-4)>>>0>1073741823){b=qb(8)|0;Ag(b,4528);c[b>>2]=1664;jc(b|0,512,10)}else{d=tf((j+4&-4)<<2)|0;c[r+28>>2]=d;c[r+28+8>>2]=j+4&-4|-2147483648;c[r+28+4>>2]=j;h=(j+4&-4|-2147483648)>>>24&255;g=(j+4&-4|-2147483648)>>>24&255;break}else{a[r+28+8+3>>0]=j;d=r+28|0;h=1;g=j&255}while(0);if((e|0)!=(n+o|0)){f=d;while(1){c[f>>2]=c[e>>2];e=e+4|0;if((e|0)==(n+o|0))break;else f=f+4|0}d=d+(((n+o+-4-m|0)>>>2)+1<<2)|0}c[d>>2]=0;o=h<<24>>24<0;d=c[r+28>>2]|0;fe(b,o?d:r+28|0,o?c[r+28+4>>2]|0:h&255)|0;if(g<<24>>24<0)Nh(d);d=0;g=65}}else if((g|0)==55){if((a[p>>0]|0)<0)d=c[j>>2]|0;else d=k;ze(b,(c[r+20>>2]|0)-d>>2);d=0;g=65}while(0);do if((g|0)==65)if(!d)if(!q)break a;else{g=71;break a}else{d=a[p>>0]|0;break}while(0);if(d<<24>>24>=0){b=qb(8)|0;yg(b,3752);c[b>>2]=1704;jc(b|0,544,12)}Nh(c[b>>2]|0);b=qb(8)|0;yg(b,3752);c[b>>2]=1704;jc(b|0,544,12)}}while(0);if((g|0)==71)sc[c[(c[q>>2]|0)+4>>2]&31](q);if((a[r+8+11>>0]|0)>=0){l=r;return}Nh(c[r+8>>2]|0);l=r;return}function Mc(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;if(!a)return;b=c[2410]|0;d=c[a+-4>>2]|0;j=a+-8+(d&-8)|0;do if(!(d&1)){e=c[a+-8>>2]|0;if(!(d&3))return;h=a+-8+(0-e)|0;g=e+(d&-8)|0;if(h>>>0<b>>>0)return;if((h|0)==(c[2411]|0)){a=c[j+4>>2]|0;if((a&3|0)!=3){i=h;b=g;break}c[2408]=g;c[j+4>>2]=a&-2;c[h+4>>2]=g|1;c[h+g>>2]=g;return}if(e>>>0<256){a=c[h+8>>2]|0;b=c[h+12>>2]|0;if((b|0)==(a|0)){c[2406]=c[2406]&~(1<<(e>>>3));i=h;b=g;break}else{c[a+12>>2]=b;c[b+8>>2]=a;i=h;b=g;break}}f=c[h+24>>2]|0;a=c[h+12>>2]|0;do if((a|0)==(h|0)){a=c[h+16+4>>2]|0;if(!a){a=c[h+16>>2]|0;if(!a){a=0;break}else e=h+16|0}else e=h+16+4|0;while(1){b=a+20|0;d=c[b>>2]|0;if(d|0){a=d;e=b;continue}b=a+16|0;d=c[b>>2]|0;if(!d)break;else{a=d;e=b}}c[e>>2]=0}else{i=c[h+8>>2]|0;c[i+12>>2]=a;c[a+8>>2]=i}while(0);if(f){b=c[h+28>>2]|0;d=(a|0)==0;if((h|0)==(c[9928+(b<<2)>>2]|0)){c[9928+(b<<2)>>2]=a;if(d){c[2407]=c[2407]&~(1<<b);i=h;b=g;break}}else{c[f+16+(((c[f+16>>2]|0)!=(h|0)&1)<<2)>>2]=a;if(d){i=h;b=g;break}}c[a+24>>2]=f;b=c[h+16>>2]|0;if(b|0){c[a+16>>2]=b;c[b+24>>2]=a}b=c[h+16+4>>2]|0;if(b){c[a+20>>2]=b;c[b+24>>2]=a;i=h;b=g}else{i=h;b=g}}else{i=h;b=g}}else{i=a+-8|0;b=d&-8;h=a+-8|0}while(0);if(h>>>0>=j>>>0)return;d=c[j+4>>2]|0;if(!(d&1))return;if(!(d&2)){a=c[2411]|0;if((j|0)==(c[2412]|0)){j=(c[2409]|0)+b|0;c[2409]=j;c[2412]=i;c[i+4>>2]=j|1;if((i|0)!=(a|0))return;c[2411]=0;c[2408]=0;return}if((j|0)==(a|0)){j=(c[2408]|0)+b|0;c[2408]=j;c[2411]=h;c[i+4>>2]=j|1;c[h+j>>2]=j;return}f=(d&-8)+b|0;do if(d>>>0<256){b=c[j+8>>2]|0;a=c[j+12>>2]|0;if((a|0)==(b|0)){c[2406]=c[2406]&~(1<<(d>>>3));break}else{c[b+12>>2]=a;c[a+8>>2]=b;break}}else{g=c[j+24>>2]|0;a=c[j+12>>2]|0;do if((a|0)==(j|0)){a=c[j+16+4>>2]|0;if(!a){a=c[j+16>>2]|0;if(!a){d=0;break}else e=j+16|0}else e=j+16+4|0;while(1){b=a+20|0;d=c[b>>2]|0;if(d|0){a=d;e=b;continue}b=a+16|0;d=c[b>>2]|0;if(!d)break;else{a=d;e=b}}c[e>>2]=0;d=a}else{d=c[j+8>>2]|0;c[d+12>>2]=a;c[a+8>>2]=d;d=a}while(0);if(g|0){a=c[j+28>>2]|0;b=(d|0)==0;if((j|0)==(c[9928+(a<<2)>>2]|0)){c[9928+(a<<2)>>2]=d;if(b){c[2407]=c[2407]&~(1<<a);break}}else{c[g+16+(((c[g+16>>2]|0)!=(j|0)&1)<<2)>>2]=d;if(b)break}c[d+24>>2]=g;a=c[j+16>>2]|0;if(a|0){c[d+16>>2]=a;c[a+24>>2]=d}a=c[j+16+4>>2]|0;if(a|0){c[d+20>>2]=a;c[a+24>>2]=d}}}while(0);c[i+4>>2]=f|1;c[h+f>>2]=f;if((i|0)==(c[2411]|0)){c[2408]=f;return}}else{c[j+4>>2]=d&-2;c[i+4>>2]=b|1;c[h+b>>2]=b;f=b}d=f>>>3;if(f>>>0<256){a=c[2406]|0;if(!(a&1<<d)){c[2406]=a|1<<d;a=9664+(d<<1<<2)|0;b=9664+(d<<1<<2)+8|0}else{a=c[9664+(d<<1<<2)+8>>2]|0;b=9664+(d<<1<<2)+8|0}c[b>>2]=i;c[a+12>>2]=i;c[i+8>>2]=a;c[i+12>>2]=9664+(d<<1<<2);return}a=f>>>8;if(a)if(f>>>0>16777215)a=31;else{j=a<<((a+1048320|0)>>>16&8)<<(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4);a=14-(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4|(a+1048320|0)>>>16&8|(j+245760|0)>>>16&2)+(j<<((j+245760|0)>>>16&2)>>>15)|0;a=f>>>(a+7|0)&1|a<<1}else a=0;e=9928+(a<<2)|0;c[i+28>>2]=a;c[i+20>>2]=0;c[i+16>>2]=0;b=c[2407]|0;d=1<<a;do if(b&d){b=f<<((a|0)==31?0:25-(a>>>1)|0);d=c[e>>2]|0;while(1){if((c[d+4>>2]&-8|0)==(f|0)){a=73;break}e=d+16+(b>>>31<<2)|0;a=c[e>>2]|0;if(!a){a=72;break}else{b=b<<1;d=a}}if((a|0)==72){c[e>>2]=i;c[i+24>>2]=d;c[i+12>>2]=i;c[i+8>>2]=i;break}else if((a|0)==73){h=d+8|0;j=c[h>>2]|0;c[j+12>>2]=i;c[h>>2]=i;c[i+8>>2]=j;c[i+12>>2]=d;c[i+24>>2]=0;break}}else{c[2407]=b|d;c[e>>2]=i;c[i+24>>2]=e;c[i+12>>2]=i;c[i+8>>2]=i}while(0);j=(c[2414]|0)+-1|0;c[2414]=j;if(!j)a=10080;else return;while(1){a=c[a>>2]|0;if(!a)break;else a=a+8|0}c[2414]=-1;return}function Nc(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;e=c[d+4>>2]|0;if(!e){e=c[d+8>>2]|0;if((c[e>>2]|0)!=(d|0)){f=d+8|0;do{l=c[f>>2]|0;f=l+8|0;e=c[f>>2]|0}while((c[e>>2]|0)!=(l|0))}}else while(1){f=c[e>>2]|0;if(!f)break;else e=f}if((c[b>>2]|0)==(d|0))c[b>>2]=e;c[b+8>>2]=(c[b+8>>2]|0)+-1;e=c[b+4>>2]|0;f=c[d>>2]|0;if(f){b=c[d+4>>2]|0;if(!b)b=d;else while(1){f=c[b>>2]|0;if(!f){f=0;break}else b=f}}else{f=0;b=d}k=b+4|0;l=c[(f|0?b:k)>>2]|0;j=b+8|0;if(l|0)c[l+8>>2]=c[j>>2];f=c[j>>2]|0;g=c[f>>2]|0;if((g|0)==(b|0)){c[f>>2]=l;if((b|0)==(e|0)){e=l;g=0}else g=c[f+4>>2]|0}else c[f+4>>2]=l;h=b+12|0;i=(a[h>>0]|0)!=0;if((b|0)!=(d|0)){f=c[d+8>>2]|0;c[j>>2]=f;c[((c[c[d+8>>2]>>2]|0)==(d|0)?f:f+4|0)>>2]=b;f=c[d>>2]|0;c[b>>2]=f;c[f+8>>2]=b;f=c[d+4>>2]|0;c[k>>2]=f;if(f|0)c[f+8>>2]=b;a[h>>0]=a[d+12>>0]|0;e=(e|0)==(d|0)?b:e}a:do if(i&(e|0)!=0){if(l|0){a[l+12>>0]=1;break}while(1){h=g+8|0;i=c[h>>2]|0;f=g+12|0;b=(a[f>>0]|0)!=0;if((c[i>>2]|0)==(g|0)){if(b)h=g;else{a[f>>0]=1;a[i+12>>0]=0;f=g+4|0;b=c[f>>2]|0;c[i>>2]=b;if(b|0)c[b+8>>2]=i;c[h>>2]=c[i+8>>2];h=c[i+8>>2]|0;c[((c[h>>2]|0)==(i|0)?h:h+4|0)>>2]=g;c[f>>2]=i;c[i+8>>2]=g;h=c[i>>2]|0;e=(e|0)==(i|0)?g:e}b=c[h>>2]|0;if(b|0?(a[b+12>>0]|0)==0:0){f=h;e=b;i=60;break}g=h+4|0;f=c[g>>2]|0;if(f|0?(a[f+12>>0]|0)==0:0){i=55;break}a[h+12>>0]=0;f=c[h+8>>2]|0;if((f|0)==(e|0)|(a[f+12>>0]|0)==0){i=54;break}}else{if(b)h=g;else{a[f>>0]=1;a[i+12>>0]=0;f=c[i+4>>2]|0;b=c[f>>2]|0;c[i+4>>2]=b;if(b|0)c[b+8>>2]=i;c[f+8>>2]=c[i+8>>2];l=c[i+8>>2]|0;c[((c[l>>2]|0)==(i|0)?l:l+4|0)>>2]=f;c[f>>2]=i;c[i+8>>2]=f;l=c[g>>2]|0;h=c[l+4>>2]|0;e=(e|0)==(l|0)?g:e}f=c[h>>2]|0;b=c[h+4>>2]|0;if(f|0?(a[f+12>>0]|0)==0:0){i=37;break}if(b|0?(a[b+12>>0]|0)==0:0){f=h;e=b;i=42;break}a[h+12>>0]=0;f=c[h+8>>2]|0;if((f|0)==(e|0)){i=36;break}if(!(a[f+12>>0]|0)){e=f;i=36;break}}g=c[f+8>>2]|0;g=c[((c[g>>2]|0)==(f|0)?g+4|0:g)>>2]|0}do if((i|0)==36){a[e+12>>0]=1;break a}else if((i|0)==37){if(b|0?(a[b+12>>0]|0)==0:0){f=h;e=b;i=42;break}a[f+12>>0]=1;a[h+12>>0]=0;e=c[f+4>>2]|0;c[h>>2]=e;if(e|0)c[e+8>>2]=h;e=h+8|0;c[f+8>>2]=c[e>>2];i=c[e>>2]|0;c[((c[i>>2]|0)==(h|0)?i:i+4|0)>>2]=f;c[f+4>>2]=h;c[e>>2]=f;e=h;i=42}else if((i|0)==54){a[f+12>>0]=1;break a}else if((i|0)==55){if(b|0?(a[b+12>>0]|0)==0:0){f=h;e=b;i=60;break}a[f+12>>0]=1;a[h+12>>0]=0;e=c[f>>2]|0;c[g>>2]=e;if(e|0)c[e+8>>2]=h;e=h+8|0;c[f+8>>2]=c[e>>2];i=c[e>>2]|0;c[((c[i>>2]|0)==(h|0)?i:i+4|0)>>2]=f;c[f>>2]=h;c[e>>2]=f;e=h;i=60}while(0);if((i|0)==42){b=c[f+8>>2]|0;a[f+12>>0]=a[b+12>>0]|0;a[b+12>>0]=1;a[e+12>>0]=1;e=c[b+4>>2]|0;f=c[e>>2]|0;c[b+4>>2]=f;if(f|0)c[f+8>>2]=b;c[e+8>>2]=c[b+8>>2];l=c[b+8>>2]|0;c[((c[l>>2]|0)==(b|0)?l:l+4|0)>>2]=e;c[e>>2]=b;c[b+8>>2]=e;break}else if((i|0)==60){b=c[f+8>>2]|0;a[f+12>>0]=a[b+12>>0]|0;a[b+12>>0]=1;a[e+12>>0]=1;e=c[b>>2]|0;f=c[e+4>>2]|0;c[b>>2]=f;if(f|0)c[f+8>>2]=b;c[e+8>>2]=c[b+8>>2];l=c[b+8>>2]|0;c[((c[l>>2]|0)==(b|0)?l:l+4|0)>>2]=e;c[e+4>>2]=b;c[b+8>>2]=e;break}}while(0);if((a[d+28+11>>0]|0)<0)Nh(c[d+28>>2]|0);if((a[d+16+11>>0]|0)>=0){Nh(d);return}Nh(c[d+16>>2]|0);Nh(d);return}function Oc(b,e,f,g){b=b|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0;h=c[e>>2]|0;if((g|0)!=0?(i=c[g>>2]|0,(i|0)!=0):0)if(!b){j=h;g=f;m=25}else{c[g>>2]=0;l=f;k=h;m=43}else m=5;a:do if((m|0)==5){if(c[c[453]>>2]|0)if(b|0){i=b;g=f;m=15;break}else{g=f;m=14;break}if(!b){f=Ae(h)|0;m=60;break}b:do if(f){j=b;g=f;while(1){i=a[h>>0]|0;if(!(i<<24>>24))break;h=h+1|0;c[j>>2]=i<<24>>24&57343;g=g+-1|0;if(!g)break b;else j=j+4|0}c[j>>2]=0;c[e>>2]=0;f=f-g|0;m=60;break a}while(0);c[e>>2]=h;m=60}while(0);c:while(1){d:do if((m|0)==14){while(1){i=a[h>>0]|0;if(((i&255)+-1|0)>>>0<127?(h&3|0)==0:0){i=c[h>>2]|0;if(!((i+-16843009|i)&-2139062144)){do{h=h+4|0;g=g+-4|0;i=c[h>>2]|0}while(!((i+-16843009|i)&-2139062144|0));i=i&255}else i=i&255}j=i&255;if((j+-1|0)>>>0>=127)break;h=h+1|0;g=g+-1|0}if((j+-194|0)>>>0>50)m=54;else{i=c[1156+(j+-194<<2)>>2]|0;j=h+1|0;m=25;continue c}}else if((m|0)==15){e:do if(g){j=i;while(1){i=a[h>>0]|0;do if(((i&255)+-1|0)>>>0<127?g>>>0>4&(h&3|0)==0:0){while(1){i=c[h>>2]|0;if((i+-16843009|i)&-2139062144|0){m=38;break}c[j>>2]=i&255;c[j+4>>2]=d[h+1>>0];c[j+8>>2]=d[h+2>>0];b=h+4|0;i=j+16|0;c[j+12>>2]=d[h+3>>0];g=g+-4|0;if(g>>>0>4){j=i;h=b}else{m=37;break}}if((m|0)==37){k=i;h=b;i=a[b>>0]|0;break}else if((m|0)==38){k=j;i=i&255;break}}else k=j;while(0);j=i&255;if((j+-1|0)>>>0>=127)break;h=h+1|0;c[k>>2]=j;g=g+-1|0;if(!g)break e;else j=k+4|0}if((j+-194|0)>>>0>50){b=k;m=54;break d}i=c[1156+(j+-194<<2)>>2]|0;b=k;l=g;k=h+1|0;m=43;continue c}while(0);c[e>>2]=h;m=60;continue c}else if((m|0)==25){m=(d[j>>0]|0)>>>3;if((m+-16|m+(i>>26))>>>0>7){h=j;m=52}else{h=j+1|0;if(i&33554432){if((a[h>>0]&-64)<<24>>24!=-128){h=j;m=52;break}h=j+2|0;if(i&524288){if((a[h>>0]&-64)<<24>>24!=-128){h=j;m=52;break}h=j+3|0}}g=g+-1|0;m=14;continue c}}else if((m|0)==43){m=0;g=d[k>>0]|0;if(((g>>>3)+-16|(g>>>3)+(i>>26))>>>0>7){h=k;g=l;m=52}else{h=k+1|0;g=g+-128|i<<6;do if((g|0)<0){j=(d[h>>0]|0)+-128|0;if(j>>>0>63){h=k+-1|0;f=b;break d}h=k+2|0;if((j|g<<6|0)<0){i=(d[h>>0]|0)+-128|0;if(i>>>0>63){h=k+-1|0;f=b;break d}else{h=k+3|0;g=i|(j|g<<6)<<6;break}}else g=j|g<<6}while(0);c[b>>2]=g;i=b+4|0;g=l+-1|0;m=15;continue c}}else if((m|0)==60)return f|0;while(0);if((m|0)==52){m=0;j=h+-1|0;if(!i){h=j;i=a[j>>0]|0;m=54}else{h=j;f=b}}if((m|0)==54)if(!(i<<24>>24)){if(b|0){c[b>>2]=0;c[e>>2]=0}f=f-g|0;m=60;continue}else f=b;c[2561]=84;if(!f){f=-1;m=60;continue}c[e>>2]=h;f=-1;m=60}return 0}function Pc(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;s=l;l=l+16|0;a:do if((b+4|0)!=(d|0)){i=a[d+24+3>>0]|0;j=i<<24>>24<0?c[d+20>>2]|0:i&255;o=a[e+8+3>>0]|0;p=o<<24>>24<0?c[e+4>>2]|0:o&255;g=j>>>0<p>>>0?j:p;if((g|0)!=0?(h=bf(o<<24>>24<0?c[e>>2]|0:e,i<<24>>24<0?c[d+16>>2]|0:d+16|0,g)|0,(h|0)!=0):0){if((h|0)<0){r=6;break}}else r=4;if((r|0)==4?p>>>0<j>>>0:0){r=6;break}g=p>>>0<j>>>0?p:j;if((g|0)!=0?(k=bf(i<<24>>24<0?c[d+16>>2]|0:d+16|0,o<<24>>24<0?c[e>>2]|0:e,g)|0,(k|0)!=0):0){if((k|0)>=0)r=36}else r=20;if((r|0)==20?j>>>0>=p>>>0:0)r=36;if((r|0)==36){c[s+4>>2]=d;c[s>>2]=d;d=s;break}m=c[d+4>>2]|0;if(!m){g=c[d+8>>2]|0;if((c[g>>2]|0)!=(d|0)){h=d+8|0;do{q=c[h>>2]|0;h=q+8|0;g=c[h>>2]|0}while((c[g>>2]|0)!=(q|0))}}else{g=m;while(1){h=c[g>>2]|0;if(!h)break;else g=h}}do if((g|0)!=(b+4|0)){i=g+16|0;j=a[g+24+3>>0]|0;k=j<<24>>24<0?c[g+20>>2]|0:j&255;h=k>>>0<p>>>0?k:p;if((h|0)!=0?(n=bf(o<<24>>24<0?c[e>>2]|0:e,j<<24>>24<0?c[i>>2]|0:i,h)|0,(n|0)!=0):0){if((n|0)<0)break}else r=30;if((r|0)==30?p>>>0<k>>>0:0)break;d=qd(b,s+4|0,e)|0;break a}while(0);if(!m){c[s+4>>2]=d;d=d+4|0;break}else{c[s+4>>2]=g;d=g;break}}else r=6;while(0);b:do if((r|0)==6){o=c[d>>2]|0;do if((c[b>>2]|0)==(d|0))g=d;else{if(!o){g=d;while(1){h=c[g+8>>2]|0;if((c[h>>2]|0)==(g|0))g=h;else break}}else{g=o;while(1){h=c[g+4>>2]|0;if(!h){h=g;break}else g=h}}g=h;j=h+16|0;k=a[e+8+3>>0]|0;m=k<<24>>24<0?c[e+4>>2]|0:k&255;n=a[h+24+3>>0]|0;i=n<<24>>24<0?c[h+20>>2]|0:n&255;h=m>>>0<i>>>0?m:i;if((h|0)!=0?(q=bf(n<<24>>24<0?c[j>>2]|0:j,k<<24>>24<0?c[e>>2]|0:e,h)|0,(q|0)!=0):0){if((q|0)<0)break}else r=12;if((r|0)==12?i>>>0<m>>>0:0)break;d=qd(b,s+4|0,e)|0;break b}while(0);if(!o){c[s+4>>2]=d;break}else{d=g;c[s+4>>2]=d;d=d+4|0;break}}while(0);if(c[d>>2]|0){l=s;return}g=tf(40)|0;Xd(g+16|0,f);Xd(g+28|0,f+12|0);h=c[s+4>>2]|0;c[g>>2]=0;c[g+4>>2]=0;c[g+8>>2]=h;c[d>>2]=g;h=c[c[b>>2]>>2]|0;if(h){c[b>>2]=h;g=c[d>>2]|0}fd(c[b+4>>2]|0,g);c[b+8>>2]=(c[b+8>>2]|0)+1;l=s;return}function Qc(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;s=l;l=l+16|0;a:do if((b+4|0)!=(d|0)){k=a[d+16+11>>0]|0;i=k<<24>>24<0?c[d+20>>2]|0:k&255;o=a[e+11>>0]|0;p=o<<24>>24<0?c[e+4>>2]|0:o&255;g=i>>>0<p>>>0?i:p;if((g|0)!=0?(h=Ye(o<<24>>24<0?c[e>>2]|0:e,k<<24>>24<0?c[d+16>>2]|0:d+16|0,g)|0,(h|0)!=0):0){if((h|0)<0){r=6;break}}else r=4;if((r|0)==4?p>>>0<i>>>0:0){r=6;break}g=p>>>0<i>>>0?p:i;if((g|0)!=0?(j=Ye(k<<24>>24<0?c[d+16>>2]|0:d+16|0,o<<24>>24<0?c[e>>2]|0:e,g)|0,(j|0)!=0):0){if((j|0)>=0)r=36}else r=20;if((r|0)==20?i>>>0>=p>>>0:0)r=36;if((r|0)==36){c[s+4>>2]=d;c[s>>2]=d;d=s;break}m=c[d+4>>2]|0;if(!m){g=c[d+8>>2]|0;if((c[g>>2]|0)!=(d|0)){h=d+8|0;do{q=c[h>>2]|0;h=q+8|0;g=c[h>>2]|0}while((c[g>>2]|0)!=(q|0))}}else{g=m;while(1){h=c[g>>2]|0;if(!h)break;else g=h}}do if((g|0)!=(b+4|0)){j=g+16|0;k=a[j+11>>0]|0;i=k<<24>>24<0?c[g+20>>2]|0:k&255;h=i>>>0<p>>>0?i:p;if((h|0)!=0?(n=Ye(o<<24>>24<0?c[e>>2]|0:e,k<<24>>24<0?c[j>>2]|0:j,h)|0,(n|0)!=0):0){if((n|0)<0)break}else r=30;if((r|0)==30?p>>>0<i>>>0:0)break;d=rd(b,s+4|0,e)|0;break a}while(0);if(!m){c[s+4>>2]=d;d=d+4|0;break}else{c[s+4>>2]=g;d=g;break}}else r=6;while(0);b:do if((r|0)==6){o=c[d>>2]|0;do if((c[b>>2]|0)==(d|0))g=d;else{if(!o){g=d;while(1){h=c[g+8>>2]|0;if((c[h>>2]|0)==(g|0))g=h;else break}}else{g=o;while(1){h=c[g+4>>2]|0;if(!h){h=g;break}else g=h}}g=h;j=h+16|0;k=a[e+11>>0]|0;m=k<<24>>24<0?c[e+4>>2]|0:k&255;n=a[j+11>>0]|0;i=n<<24>>24<0?c[h+20>>2]|0:n&255;h=m>>>0<i>>>0?m:i;if((h|0)!=0?(q=Ye(n<<24>>24<0?c[j>>2]|0:j,k<<24>>24<0?c[e>>2]|0:e,h)|0,(q|0)!=0):0){if((q|0)<0)break}else r=12;if((r|0)==12?i>>>0<m>>>0:0)break;d=rd(b,s+4|0,e)|0;break b}while(0);if(!o){c[s+4>>2]=d;break}else{d=g;c[s+4>>2]=d;d=d+4|0;break}}while(0);if(c[d>>2]|0){l=s;return}g=tf(40)|0;oe(g+16|0,f);oe(g+28|0,f+12|0);h=c[s+4>>2]|0;c[g>>2]=0;c[g+4>>2]=0;c[g+8>>2]=h;c[d>>2]=g;h=c[c[b>>2]>>2]|0;if(h){c[b>>2]=h;g=c[d>>2]|0}fd(c[b+4>>2]|0,g);c[b+8>>2]=(c[b+8>>2]|0)+1;l=s;return}function Rc(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;i=l;l=l+64|0;Kc(i+48|0,b);c[i+4>>2]=0;c[i+8>>2]=0;c[i>>2]=i+4;b=c[d>>2]|0;if((b|0)!=(d+4|0)){g=b;while(1){b=g+16|0;Pc(i,i+4|0,b,b);b=c[g+4>>2]|0;if(!b){f=g+8|0;b=c[f>>2]|0;if((c[b>>2]|0)!=(g|0))do{h=c[f>>2]|0;f=h+8|0;b=c[f>>2]|0}while((c[b>>2]|0)!=(h|0))}else while(1){f=c[b>>2]|0;if(!f)break;else b=f}if((b|0)==(d+4|0))break;else g=b}}dd(i+24|0,i);c[i+36+4>>2]=0;c[i+36+8>>2]=0;h=i+36+4|0;c[i+36>>2]=h;b=c[i+24>>2]|0;if((b|0)!=(i+24+4|0)){g=b;while(1){b=g+16|0;Qc(i+36|0,h,b,b);b=c[g+4>>2]|0;if(!b){f=g+8|0;b=c[f>>2]|0;if((c[b>>2]|0)!=(g|0))do{d=c[f>>2]|0;f=d+8|0;b=c[f>>2]|0}while((c[b>>2]|0)!=(d|0))}else while(1){f=c[b>>2]|0;if(!f)break;else b=f}if((b|0)==(i+24+4|0))break;else g=b}}Kc(i+12|0,e);d=tf(64)|0;oe(d,i+48|0);c[d+12>>2]=0;c[d+12+4>>2]=0;c[d+12+8>>2]=0;oe(d+24|0,i+12|0);c[d+40>>2]=0;c[d+44>>2]=0;c[d+36>>2]=d+40;b=c[i+36>>2]|0;if((b|0)!=(h|0)){g=b;while(1){b=g+16|0;Qc(d+36|0,d+40|0,b,b);b=c[g+4>>2]|0;if(!b){f=g+8|0;b=c[f>>2]|0;if((c[b>>2]|0)!=(g|0))do{e=c[f>>2]|0;f=e+8|0;b=c[f>>2]|0}while((c[b>>2]|0)!=(e|0))}else while(1){f=c[b>>2]|0;if(!f)break;else b=f}if((b|0)==(h|0))break;else g=b}}c[d+52>>2]=0;c[d+56>>2]=0;c[d+60>>2]=0;Wc(d);if((a[i+12+11>>0]|0)<0)Nh(c[i+12>>2]|0);qe(c[h>>2]|0);qe(c[i+24+4>>2]|0);re(c[i+4>>2]|0);if((a[i+48+11>>0]|0)>=0){l=i;return d|0}Nh(c[i+48>>2]|0);l=i;return d|0}function Sc(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;i=l;l=l+48|0;Kc(i+36|0,b);c[i+4>>2]=0;c[i+8>>2]=0;c[i>>2]=i+4;b=c[d>>2]|0;if((b|0)!=(d+4|0)){g=b;while(1){b=g+16|0;Pc(i,i+4|0,b,b);b=c[g+4>>2]|0;if(!b){f=g+8|0;b=c[f>>2]|0;if((c[b>>2]|0)!=(g|0))do{h=c[f>>2]|0;f=h+8|0;b=c[f>>2]|0}while((c[b>>2]|0)!=(h|0))}else while(1){f=c[b>>2]|0;if(!f)break;else b=f}if((b|0)==(d+4|0))break;else g=b}}dd(i+12|0,i);c[i+24+4>>2]=0;c[i+24+8>>2]=0;h=i+24+4|0;c[i+24>>2]=h;b=c[i+12>>2]|0;if((b|0)!=(i+12+4|0)){g=b;while(1){b=g+16|0;Qc(i+24|0,h,b,b);b=c[g+4>>2]|0;if(!b){f=g+8|0;b=c[f>>2]|0;if((c[b>>2]|0)!=(g|0))do{d=c[f>>2]|0;f=d+8|0;b=c[f>>2]|0}while((c[b>>2]|0)!=(d|0))}else while(1){f=c[b>>2]|0;if(!f)break;else b=f}if((b|0)==(i+12+4|0))break;else g=b}}d=c[e>>2]|0;e=tf(64)|0;oe(e,i+36|0);c[e+40>>2]=0;c[e+44>>2]=0;c[e+12>>2]=0;c[e+12+4>>2]=0;c[e+12+8>>2]=0;c[e+12+12>>2]=0;c[e+12+16>>2]=0;c[e+12+20>>2]=0;c[e+36>>2]=e+40;b=c[i+24>>2]|0;if((b|0)!=(h|0)){g=b;while(1){b=g+16|0;Qc(e+36|0,e+40|0,b,b);b=c[g+4>>2]|0;if(!b){f=g+8|0;b=c[f>>2]|0;if((c[b>>2]|0)!=(g|0))do{g=c[f>>2]|0;f=g+8|0;b=c[f>>2]|0}while((c[b>>2]|0)!=(g|0))}else while(1){f=c[b>>2]|0;if(!f)break;else b=f}if((b|0)==(h|0))break;else g=b}}c[e+52>>2]=0;c[e+56>>2]=0;c[e+60>>2]=0;g=tf(4)|0;c[e+52>>2]=g;c[e+60>>2]=g+4;c[g>>2]=d;c[e+56>>2]=g+4;Wc(e);qe(c[h>>2]|0);qe(c[i+12+4>>2]|0);re(c[i+4>>2]|0);if((a[i+36+11>>0]|0)>=0){l=i;return e|0}Nh(c[i+36>>2]|0);l=i;return e|0}function Tc(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0;p=l;l=l+16|0;if((c[b+44>>2]|0)==0?(c[d+44>>2]|0)==0:0){l=p;return}e=c[b+36>>2]|0;if((e|0)!=(b+40|0)){g=e;while(1){e=g+16|0;if(!(Ed(d+36|0,e)|0)){if((a[e+11>>0]|0)<0)e=c[e>>2]|0;Fb(0,c[d+48>>2]|0,e|0)|0}e=c[g+4>>2]|0;if(!e){f=g+8|0;e=c[f>>2]|0;if((c[e>>2]|0)!=(g|0))do{n=c[f>>2]|0;f=n+8|0;e=c[f>>2]|0}while((c[e>>2]|0)!=(n|0))}else while(1){f=c[e>>2]|0;if(!f)break;else e=f}if((e|0)==(b+40|0))break;else g=e}}e=c[d+36>>2]|0;if((e|0)==(d+40|0)){l=p;return}n=e;while(1){m=n+16|0;a:do if(Ed(b+36|0,m)|0){g=rd(b+36|0,p,m)|0;e=c[g>>2]|0;if(!e){e=tf(40)|0;oe(e+16|0,m);c[e+28>>2]=0;c[e+28+4>>2]=0;c[e+28+8>>2]=0;f=c[p>>2]|0;c[e>>2]=0;c[e+4>>2]=0;c[e+8>>2]=f;c[g>>2]=e;f=c[c[b+36>>2]>>2]|0;if(!f)f=e;else{c[b+36>>2]=f;f=c[g>>2]|0}fd(c[b+40>>2]|0,f);c[b+44>>2]=(c[b+44>>2]|0)+1}g=e+28|0;f=n+28|0;k=a[g+11>>0]|0;h=k<<24>>24<0?c[e+32>>2]|0:k&255;e=a[f+11>>0]|0;if((h|0)==((e<<24>>24<0?c[n+32>>2]|0:e&255)|0)){i=c[g>>2]|0;j=k<<24>>24<0?i:g;e=e<<24>>24<0?c[f>>2]|0:f;if(k<<24>>24<0){if(!h)break;if(!(Ye(j,e,h)|0))break;else{o=31;break}}if(h|0)if((i&255)<<24>>24==(a[e>>0]|0)){f=k&255;while(1){f=f+-1|0;g=g+1|0;if(!f)break a;e=e+1|0;if((a[g>>0]|0)!=(a[e>>0]|0)){o=31;break}}}else o=31}else o=31}else o=31;while(0);if((o|0)==31){o=0;g=c[d+48>>2]|0;if((a[m+11>>0]|0)<0)f=c[m>>2]|0;else f=m;e=n+28|0;m=a[e+11>>0]|0;if(((m<<24>>24<0?c[n+32>>2]|0:m&255)|0)==4){m=(Ie(e,9434,4)|0)==0;e=m?9576:e}if((a[e+11>>0]|0)<0)e=c[e>>2]|0;hc(1,g|0,f|0,e|0)|0}e=c[n+4>>2]|0;if(!e){f=n+8|0;e=c[f>>2]|0;if((c[e>>2]|0)!=(n|0))do{n=c[f>>2]|0;f=n+8|0;e=c[f>>2]|0}while((c[e>>2]|0)!=(n|0))}else while(1){f=c[e>>2]|0;if(!f)break;else e=f}if((e|0)==(d+40|0))break;else n=e}l=p;return}function Uc(d){d=d|0;var e=0,f=0,g=0,h=0,i=0;h=l;l=l+32|0;f=a[d+11>>0]|0;if(f<<24>>24<0)e=c[d+4>>2]|0;else e=f&255;if(!e){if((a[d+24+11>>0]|0)<0)e=c[d+24>>2]|0;else e=d+24|0;c[d+48>>2]=qa(2,e|0)|0;d=d+48|0;d=c[d>>2]|0;l=h;return d|0}if(((f<<24>>24<0?c[d+4>>2]|0:f&255)|0)==1?(Ie(d,9412,1)|0)==0:0){if((a[d+24+11>>0]|0)<0)e=c[d+24>>2]|0;else e=d+24|0;c[d+48>>2]=qa(3,e|0)|0;d=d+48|0;d=c[d>>2]|0;l=h;return d|0}c[h+12>>2]=0;c[h+12+4>>2]=0;c[h+12+8>>2]=0;a[h+12+11>>0]=2;b[h+12>>1]=29550;a[h+12+2>>0]=0;if(!(Ed(d+36|0,h+12|0)|0)){if((a[d+11>>0]|0)<0)e=c[d>>2]|0;else e=d;f=qa(5,e|0)|0;c[d+48>>2]=f;e=d+48|0}else{c[h>>2]=0;c[h+4>>2]=0;c[h+8>>2]=0;a[h+11>>0]=2;b[h>>1]=29550;a[h+2>>0]=0;g=rd(d+36|0,h+12|0,h)|0;e=c[g>>2]|0;if(!e){e=tf(40)|0;c[e+16>>2]=c[h>>2];c[e+16+4>>2]=c[h+4>>2];c[e+16+8>>2]=c[h+8>>2];c[h>>2]=0;c[h+4>>2]=0;c[h+8>>2]=0;c[e+28>>2]=0;c[e+28+4>>2]=0;c[e+28+8>>2]=0;f=c[h+12>>2]|0;c[e>>2]=0;c[e+4>>2]=0;c[e+8>>2]=f;c[g>>2]=e;f=c[c[d+36>>2]>>2]|0;if(!f)f=e;else{c[d+36>>2]=f;f=c[g>>2]|0}fd(c[d+40>>2]|0,f);c[d+44>>2]=(c[d+44>>2]|0)+1}e=e+28|0;if((a[e+11>>0]|0)<0)e=c[e>>2]|0;if((a[d+11>>0]|0)<0)f=c[d>>2]|0;else f=d;c[d+48>>2]=Fb(4,e|0,f|0)|0;c[h+12>>2]=0;c[h+12+4>>2]=0;c[h+12+8>>2]=0;a[h+12+11>>0]=2;b[h+12>>1]=29550;a[h+12+2>>0]=0;e=vd(d+36|0,h+12|0)|0;if((e|0)!=(d+40|0))Nc(d+36|0,e);e=d+48|0;f=c[d+48>>2]|0}g=c[2397]|0;hc(6,g|0,d|0,f|0)|0;Tc(g,d);f=c[d+52>>2]|0;if((f|0)!=(c[d+56>>2]|0)){g=0;do{i=c[e>>2]|0;Fb(7,i|0,Uc(c[f+(g<<2)>>2]|0)|0)|0;g=g+1|0;f=c[d+52>>2]|0}while((g|0)!=((c[d+56>>2]|0)-f>>2|0));i=c[e>>2]|0;l=h;return i|0}f=a[d+24+11>>0]|0;if(f<<24>>24<0)g=c[d+28>>2]|0;else g=f&255;if(!g){i=e;i=c[i>>2]|0;l=h;return i|0}if(f<<24>>24<0)f=c[d+24>>2]|0;else f=d+24|0;Fb(8,c[e>>2]|0,f|0)|0;i=e;i=c[i>>2]|0;l=h;return i|0}function Vc(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0;k=l;l=l+64|0;c[k+48>>2]=0;j=k+48+4|0;c[j>>2]=0;c[k+48+8>>2]=0;f=c[e>>2]|0;a:do if((c[e+4>>2]|0)!=(f|0)){g=0;h=0;i=0;while(1){f=c[f+(g<<2)>>2]|0;c[k+36>>2]=f;if(h>>>0<i>>>0){c[h>>2]=f;c[j>>2]=h+4}else Nd(k+48|0,k+36|0);g=g+1|0;f=c[e>>2]|0;if(g>>>0>=(c[e+4>>2]|0)-f>>2>>>0)break a;h=c[j>>2]|0;i=c[k+48+8>>2]|0}}while(0);Kc(k+36|0,b);c[k+12+4>>2]=0;c[k+12+8>>2]=0;c[k+12>>2]=k+12+4;f=c[d>>2]|0;if((f|0)!=(d+4|0)){h=f;while(1){f=h+16|0;Pc(k+12|0,k+12+4|0,f,f);f=c[h+4>>2]|0;if(!f){g=h+8|0;f=c[g>>2]|0;if((c[f>>2]|0)!=(h|0))do{e=c[g>>2]|0;g=e+8|0;f=c[g>>2]|0}while((c[f>>2]|0)!=(e|0))}else while(1){g=c[f>>2]|0;if(!g)break;else f=g}if((f|0)==(d+4|0))break;else h=f}}dd(k,k+12|0);c[k+24+4>>2]=0;c[k+24+8>>2]=0;c[k+24>>2]=k+24+4;f=c[k>>2]|0;if((f|0)!=(k+4|0)){h=f;while(1){f=h+16|0;Qc(k+24|0,k+24+4|0,f,f);f=c[h+4>>2]|0;if(!f){g=h+8|0;f=c[g>>2]|0;if((c[f>>2]|0)!=(h|0))do{d=c[g>>2]|0;g=d+8|0;f=c[g>>2]|0}while((c[f>>2]|0)!=(d|0))}else while(1){g=c[f>>2]|0;if(!g)break;else f=g}if((f|0)==(k+4|0))break;else h=f}}f=tf(64)|0;jd(f,k+36|0,k+24|0,k+48|0);qe(c[k+24+4>>2]|0);qe(c[k+4>>2]|0);re(c[k+12+4>>2]|0);if((a[k+36+11>>0]|0)<0)Nh(c[k+36>>2]|0);g=c[k+48>>2]|0;if(!g){l=k;return f|0}h=c[j>>2]|0;if((h|0)!=(g|0))c[j>>2]=h+(~((h+-4-g|0)>>>2)<<2);Nh(g);l=k;return f|0}function Wc(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;i=l;l=l+32|0;c[i+12+4>>2]=0;c[i+12+4+4>>2]=0;a[i+12+11>>0]=3;a[i+12>>0]=a[1830]|0;a[i+12+1>>0]=a[1831]|0;a[i+12+2>>0]=a[1832]|0;a[i+12+3>>0]=0;if(Ed(b+36|0,i+12|0)|0){c[i+4>>2]=0;c[i+4+4>>2]=0;a[i+11>>0]=3;a[i>>0]=a[1830]|0;a[i+1>>0]=a[1831]|0;a[i+2>>0]=a[1832]|0;a[i+3>>0]=0;f=rd(b+36|0,i+12|0,i)|0;d=c[f>>2]|0;if(!d){d=tf(40)|0;c[d+16>>2]=c[i>>2];c[d+16+4>>2]=c[i+4>>2];c[d+16+8>>2]=c[i+8>>2];c[i>>2]=0;c[i+4>>2]=0;c[i+8>>2]=0;c[d+28>>2]=0;c[d+28+4>>2]=0;c[d+28+8>>2]=0;e=c[i+12>>2]|0;c[d>>2]=0;c[d+4>>2]=0;c[d+8>>2]=e;c[f>>2]=d;e=c[c[b+36>>2]>>2]|0;if(!e)e=d;else{c[b+36>>2]=e;e=c[f>>2]|0}fd(c[b+40>>2]|0,e);c[b+44>>2]=(c[b+44>>2]|0)+1}mf(b+12|0,d+28|0)|0;c[i+12+4>>2]=0;c[i+12+4+4>>2]=0;a[i+12+11>>0]=3;a[i+12>>0]=a[1830]|0;a[i+12+1>>0]=a[1831]|0;a[i+12+2>>0]=a[1832]|0;a[i+12+3>>0]=0;d=vd(b+36|0,i+12|0)|0;if((d|0)!=(b+40|0))Nc(b+36|0,d)}e=(a[b+11>>0]|0)<0;if(e)d=c[b>>2]|0;else d=b;if((a[d>>0]|0)==115){if(e)d=c[b>>2]|0;else d=b;if((a[d+1>>0]|0)==118){if(e)d=c[b>>2]|0;else d=b;if((a[d+2>>0]|0)==103)nd(b)}}d=c[b+52>>2]|0;e=c[b+56>>2]|0;a:do if((d|0)==(e|0))f=d;else{do{if(!(c[d>>2]|0)){f=d;break a}d=d+4|0}while((d|0)!=(e|0));l=i;return}while(0);if((f|0)==(e|0)){l=i;return}d=f+4|0;if((d|0)==(e|0))d=f;else{h=d;d=f;g=f;while(1){f=c[h>>2]|0;if(!f)f=g;else{c[g>>2]=f;f=g+4|0;d=f}h=h+4|0;if((h|0)==(e|0))break;else g=f}e=c[b+56>>2]|0}if((d|0)==(e|0)){l=i;return}c[b+56>>2]=e+(~((e+-4-d|0)>>>2)<<2);l=i;return}function Xc(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;if(!b)if(!e){if(f|0){c[f>>2]=(a>>>0)%(d>>>0);c[f+4>>2]=0}e=0;f=(a>>>0)/(d>>>0)>>>0;return (z=e,f)|0}else{if(!f){e=0;f=0;return (z=e,f)|0}c[f>>2]=a|0;c[f+4>>2]=b&0;e=0;f=0;return (z=e,f)|0}do if(d){if(e|0){h=(R(e|0)|0)-(R(b|0)|0)|0;if(h>>>0<=31){n=h+1|0;i=a>>>((h+1|0)>>>0)&h-31>>31|b<<31-h;m=b>>>((h+1|0)>>>0)&h-31>>31;g=0;h=a<<31-h;break}if(!f){e=0;f=0;return (z=e,f)|0}c[f>>2]=a|0;c[f+4>>2]=b|b&0;e=0;f=0;return (z=e,f)|0}if(d-1&d|0){h=(R(d|0)|0)+33-(R(b|0)|0)|0;n=h;i=32-h-1>>31&b>>>((h-32|0)>>>0)|(b<<32-h|a>>>(h>>>0))&h-32>>31;m=h-32>>31&b>>>(h>>>0);g=a<<64-h&32-h>>31;h=(b<<64-h|a>>>((h-32|0)>>>0))&32-h>>31|a<<32-h&h-33>>31;break}if(f|0){c[f>>2]=d-1&a;c[f+4>>2]=0}if((d|0)==1){e=b|b&0;f=a|0|0;return (z=e,f)|0}else{f=wf(d|0)|0;e=b>>>(f>>>0)|0;f=b<<32-f|a>>>(f>>>0)|0;return (z=e,f)|0}}else{if(!e){if(f|0){c[f>>2]=(b>>>0)%(d>>>0);c[f+4>>2]=0}e=0;f=(b>>>0)/(d>>>0)>>>0;return (z=e,f)|0}if(!a){if(f|0){c[f>>2]=0;c[f+4>>2]=(b>>>0)%(e>>>0)}d=0;f=(b>>>0)/(e>>>0)>>>0;return (z=d,f)|0}if(!(e-1&e)){if(f|0){c[f>>2]=a|0;c[f+4>>2]=e-1&b|b&0}d=0;f=b>>>((wf(e|0)|0)>>>0);return (z=d,f)|0}h=(R(e|0)|0)-(R(b|0)|0)|0;if(h>>>0<=30){n=h+1|0;i=b<<31-h|a>>>((h+1|0)>>>0);m=b>>>((h+1|0)>>>0);g=0;h=a<<31-h;break}if(!f){e=0;f=0;return (z=e,f)|0}c[f>>2]=a|0;c[f+4>>2]=b|b&0;e=0;f=0;return (z=e,f)|0}while(0);if(!n){j=h;b=m;a=0;h=0}else{k=mg(d|0|0,e|e&0|0,-1,-1)|0;l=z;j=h;b=m;a=n;h=0;do{p=j;j=g>>>31|j<<1;g=h|g<<1;p=i<<1|p>>>31|0;o=i>>>31|b<<1|0;ag(k|0,l|0,p|0,o|0)|0;n=z;m=n>>31|((n|0)<0?-1:0)<<1;h=m&1;i=ag(p|0,o|0,m&(d|0)|0,(((n|0)<0?-1:0)>>31|((n|0)<0?-1:0)<<1)&(e|e&0)|0)|0;b=z;a=a-1|0}while((a|0)!=0);a=0}if(f|0){c[f>>2]=i;c[f+4>>2]=b}o=(g|0)>>>31|j<<1|(0<<1|g>>>31)&0|a;p=(g<<1|0>>>31)&-2|h;return (z=o,p)|0}function Yc(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0;a:do if(!(Zg(b,c[d+8>>2]|0)|0)){if(!(Zg(b,c[d>>2]|0)|0)){i=c[b+12>>2]|0;Xe(b+16|0,d,e,f,g);if((i|0)<=1)break;h=c[b+8>>2]|0;if((h&2|0)==0?(c[d+36>>2]|0)!=1:0){if(!(h&1)){h=b+24|0;while(1){if(a[d+54>>0]|0)break a;if((c[d+36>>2]|0)==1)break a;Xe(h,d,e,f,g);h=h+8|0;if(h>>>0>=(b+16+(i<<3)|0)>>>0)break a}}else h=b+24|0;while(1){if(a[d+54>>0]|0)break a;if((c[d+36>>2]|0)==1?(c[d+24>>2]|0)==1:0)break a;Xe(h,d,e,f,g);h=h+8|0;if(h>>>0>=(b+16+(i<<3)|0)>>>0)break a}}else h=b+24|0;while(1){if(a[d+54>>0]|0)break a;Xe(h,d,e,f,g);h=h+8|0;if(h>>>0>=(b+16+(i<<3)|0)>>>0)break a}}if((c[d+16>>2]|0)!=(e|0)?(c[d+20>>2]|0)!=(e|0):0){c[d+32>>2]=f;if((c[d+44>>2]|0)==4)break;j=c[b+12>>2]|0;b:do if((j|0)>0){h=0;i=b+16|0;f=0;c:do{a[d+52>>0]=0;a[d+53>>0]=0;Se(i,d,e,e,1,g);if(a[d+54>>0]|0)break;do if(a[d+53>>0]|0){if(!(a[d+52>>0]|0))if(!(c[b+8>>2]&1)){h=1;break c}else{h=1;break}if((c[d+24>>2]|0)==1){f=22;break b}if(!(c[b+8>>2]&2)){f=22;break b}else{h=1;f=1}}while(0);i=i+8|0}while(i>>>0<(b+16+(j<<3)|0)>>>0);if(f)f=21;else f=18}else{h=0;f=18}while(0);if((f|0)==18){c[d+20>>2]=e;c[d+40>>2]=(c[d+40>>2]|0)+1;if((c[d+36>>2]|0)==1?(c[d+24>>2]|0)==2:0){a[d+54>>0]=1;if(h)f=22;else h=4}else f=21}if((f|0)==21)if(h)f=22;else h=4;if((f|0)==22)h=3;c[d+44>>2]=h;break}if((f|0)==1)c[d+32>>2]=1}else Jf(d,e,f);while(0);return}function Zc(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;h=l;l=l+48|0;Kc(h+36|0,b);c[h+4>>2]=0;c[h+8>>2]=0;c[h>>2]=h+4;b=c[d>>2]|0;if((b|0)!=(d+4|0)){g=b;while(1){b=g+16|0;Pc(h,h+4|0,b,b);b=c[g+4>>2]|0;if(!b){f=g+8|0;b=c[f>>2]|0;if((c[b>>2]|0)!=(g|0))do{g=c[f>>2]|0;f=g+8|0;b=c[f>>2]|0}while((c[b>>2]|0)!=(g|0))}else while(1){f=c[b>>2]|0;if(!f)break;else b=f}if((b|0)==(d+4|0))break;else g=b}}dd(h+12|0,h);c[h+24+4>>2]=0;c[h+24+8>>2]=0;c[h+24>>2]=h+24+4;b=c[h+12>>2]|0;if((b|0)!=(h+12+4|0)){g=b;while(1){b=g+16|0;Qc(h+24|0,h+24+4|0,b,b);b=c[g+4>>2]|0;if(!b){f=g+8|0;b=c[f>>2]|0;if((c[b>>2]|0)!=(g|0))do{d=c[f>>2]|0;f=d+8|0;b=c[f>>2]|0}while((c[b>>2]|0)!=(d|0))}else while(1){f=c[b>>2]|0;if(!f)break;else b=f}if((b|0)==(h+12+4|0))break;else g=b}}b=tf(64)|0;sd(b,h+36|0,h+24|0);qe(c[h+24+4>>2]|0);qe(c[h+12+4>>2]|0);re(c[h+4>>2]|0);if((a[h+36+11>>0]|0)>=0){d=b+48|0;c[d>>2]=e;e=b;l=h;return e|0}Nh(c[h+36>>2]|0);d=b+48|0;c[d>>2]=e;e=b;l=h;return e|0}function _c(b,e,f,g,h,i,j,k){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;var l=0,m=0,n=0,o=0,p=0;c[f>>2]=b;c[i>>2]=g;b=c[f>>2]|0;if(((((k&4|0)!=0?(e-b|0)>2:0)?(a[b>>0]|0)==-17:0)?(a[b+1>>0]|0)==-69:0)?(a[b+2>>0]|0)==-65:0){c[f>>2]=b+3;b=b+3|0}a:do if(b>>>0<e>>>0){p=c[i>>2]|0;m=b;while(1){if(p>>>0>=h>>>0){b=1;break a}o=a[m>>0]|0;b=m+1|0;do if(o<<24>>24>-1){if((o&255)>>>0>j>>>0){b=2;break a}c[p>>2]=o&255}else{if((o&255)<194){b=2;break a}l=m+2|0;g=e-m|0;if((o&255)<224){if((g|0)<2){b=1;break a}b=d[b>>0]|0;if((b&192|0)!=128){b=2;break a}if((b&63|(o&255)<<6&1984)>>>0>j>>>0){b=2;break a}c[p>>2]=b&63|(o&255)<<6&1984;b=l;break}n=m+3|0;if((o&255)<240){if((g|0)<3){b=1;break a}g=a[l>>0]|0;b=d[b>>0]|0;switch(o<<24>>24){case -32:{if((b&224|0)!=160){b=2;break a}break}case -19:{if((b&224|0)!=128){b=2;break a}break}default:if((b&192|0)!=128){b=2;break a}}if((g&192|0)!=128){b=2;break a}if((b<<6&4032|(o&255)<<12&61440|g&63)>>>0>j>>>0){b=2;break a}c[p>>2]=b<<6&4032|(o&255)<<12&61440|g&63;b=n;break}if((o&255)>=245){b=2;break a}if((g|0)<4){b=1;break a}k=a[b>>0]|0;g=a[l>>0]|0;b=a[n>>0]|0;switch(o<<24>>24){case -16:{if((k+112&255)>=48){b=2;break a}break}case -12:{if((k&240|0)!=128){b=2;break a}break}default:if((k&192|0)!=128){b=2;break a}}if((g&192|0)!=128){b=2;break a}if((b&192|0)!=128){b=2;break a}if(((k&255)<<12&258048|(o&255)<<18&1835008|(g&255)<<6&4032|b&63)>>>0>j>>>0){b=2;break a}c[p>>2]=(k&255)<<12&258048|(o&255)<<18&1835008|(g&255)<<6&4032|b&63;b=m+4|0}while(0);c[f>>2]=b;p=(c[i>>2]|0)+4|0;c[i>>2]=p;m=c[f>>2]|0;if(m>>>0>=e>>>0){b=0;break}}}else b=0;while(0);return b|0}function $c(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+48|0;Kc(g+36|0,b);c[g+4>>2]=0;c[g+8>>2]=0;c[g>>2]=g+4;b=c[d>>2]|0;if((b|0)!=(d+4|0)){f=b;while(1){b=f+16|0;Pc(g,g+4|0,b,b);b=c[f+4>>2]|0;if(!b){e=f+8|0;b=c[e>>2]|0;if((c[b>>2]|0)!=(f|0))do{f=c[e>>2]|0;e=f+8|0;b=c[e>>2]|0}while((c[b>>2]|0)!=(f|0))}else while(1){e=c[b>>2]|0;if(!e)break;else b=e}if((b|0)==(d+4|0))break;else f=b}}dd(g+12|0,g);c[g+24+4>>2]=0;c[g+24+8>>2]=0;c[g+24>>2]=g+24+4;b=c[g+12>>2]|0;if((b|0)!=(g+12+4|0)){f=b;while(1){b=f+16|0;Qc(g+24|0,g+24+4|0,b,b);b=c[f+4>>2]|0;if(!b){e=f+8|0;b=c[e>>2]|0;if((c[b>>2]|0)!=(f|0))do{d=c[e>>2]|0;e=d+8|0;b=c[e>>2]|0}while((c[b>>2]|0)!=(d|0))}else while(1){e=c[b>>2]|0;if(!e)break;else b=e}if((b|0)==(g+12+4|0))break;else f=b}}b=tf(64)|0;sd(b,g+36|0,g+24|0);qe(c[g+24+4>>2]|0);qe(c[g+12+4>>2]|0);re(c[g+4>>2]|0);if((a[g+36+11>>0]|0)>=0){l=g;return b|0}Nh(c[g+36>>2]|0);l=g;return b|0}function ad(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0;n=l;l=l+272|0;do if(!(a[d>>0]|0)){d=wb(8502)|0;if(d|0?a[d>>0]|0:0)break;d=wb(8430+(b*12|0)|0)|0;if(d|0?a[d>>0]|0:0)break;d=wb(8509)|0;if(d|0?a[d>>0]|0:0)break;d=8514}while(0);e=0;a:do{switch(a[d+e>>0]|0){case 47:case 0:break a;default:{}}e=e+1|0}while(e>>>0<15);f=a[d>>0]|0;if(f<<24>>24!=46?(a[d+e>>0]|0)==0:0)if(f<<24>>24==67)m=15;else{k=d;m=16}else{d=8514;m=15}if((m|0)==15)if(!(a[d+1>>0]|0))m=18;else{k=d;m=16}b:do if((m|0)==16)if((cf(k,8514)|0)!=0?(cf(k,8522)|0)!=0:0){d=c[2553]|0;if(d|0)do{if(!(cf(k,d+8|0)|0))break b;d=c[d+24>>2]|0}while((d|0)!=0);Ob(10216);d=c[2553]|0;c:do if(d|0){while(1){if(!(cf(k,d+8|0)|0))break;d=c[d+24>>2]|0;if(!d)break c}fc(10216);break b}while(0);d:do if(((c[2532]|0)==0?(g=wb(8528)|0,(g|0)!=0):0)?(a[g>>0]|0)!=0:0){i=254-e|0;j=e+1|0;f=g;while(1){h=_d(f)|0;d=a[h>>0]|0;g=((d<<24>>24!=0)<<31>>31)+(h-f)|0;if(g>>>0<i>>>0){wd(n+8|0,f|0,g|0)|0;a[n+8+g>>0]=47;wd(n+8+g+1|0,k|0,e|0)|0;a[n+8+(j+g)>>0]=0;g=nc(n+8|0,n|0)|0;if(g|0)break;d=a[h>>0]|0}f=h+(d<<24>>24!=0&1)|0;if(!(a[f>>0]|0)){m=41;break d}}d=Dc(28)|0;f=c[n>>2]|0;if(!d){Tf(g,f);m=41;break}else{c[d>>2]=g;c[d+4>>2]=f;wd(d+8|0,k|0,e|0)|0;a[d+8+e>>0]=0;c[d+24>>2]=c[2553];c[2553]=d;break}}else m=41;while(0);if((m|0)==41){d=Dc(28)|0;if(d){c[d>>2]=1112;c[d+4>>2]=20;wd(d+8|0,k|0,e|0)|0;a[d+8+e>>0]=0;c[d+24>>2]=c[2553];c[2553]=d}}fc(10216);d=(b|0)==0&(d|0)==0?1084:d}else{d=k;m=18}while(0);do if((m|0)==18){if((b|0)==0?(a[d+1>>0]|0)==46:0){d=1084;break}d=0}while(0);l=n;return d|0}function bd(b,d,e,f,g,h,i,j){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;var k=0,m=0,n=0,o=0,p=0,q=0;q=l;l=l+16|0;a:do if((e|0)!=(f|0)){k=e;while(1){if(!(a[k>>0]|0))break;k=k+1|0;if((k|0)==(f|0)){k=f;break}}c[j>>2]=h;c[g>>2]=e;if((h|0)==(i|0))p=30;else{while(1){o=c[d+4>>2]|0;c[q>>2]=c[d>>2];c[q+4>>2]=o;o=k;m=kg(c[b+8>>2]|0)|0;n=od(h,g,o-e|0,i-h>>2,d)|0;if(m|0)kg(m)|0;if((n|0)==-1){p=9;break}h=(c[j>>2]|0)+(n<<2)|0;c[j>>2]=h;e=c[g>>2]|0;if((h|0)==(i|0)){p=27;break}if((k|0)==(f|0))k=f;else{k=kg(c[b+8>>2]|0)|0;e=td(h,e,1,d)|0;if(k|0)kg(k)|0;if(e|0){e=2;break}c[j>>2]=(c[j>>2]|0)+4;e=(c[g>>2]|0)+1|0;c[g>>2]=e;b:do if((e|0)==(f|0))k=f;else{k=e;while(1){if(!(a[k>>0]|0))break b;k=k+1|0;if((k|0)==(f|0)){k=f;break}}}while(0);h=c[j>>2]|0}if((h|0)==(i|0)|(e|0)==(f|0)){p=30;break a}}if((p|0)==27){p=30;break}c:do if((p|0)==9){c[j>>2]=h;d:do if((e|0)!=(c[g>>2]|0)){k=h;e:while(1){h=kg(c[b+8>>2]|0)|0;k=td(k,e,o-e|0,q)|0;if(h|0)kg(h)|0;switch(k|0){case -1:{p=14;break e}case -2:{p=15;break e}case 0:{k=1;break}default:{}}e=e+k|0;k=(c[j>>2]|0)+4|0;c[j>>2]=k;if((e|0)==(c[g>>2]|0))break d}if((p|0)==14){c[g>>2]=e;e=2;break c}else if((p|0)==15){c[g>>2]=e;e=1;break c}}while(0);c[g>>2]=e;e=(e|0)!=(f|0)&1}while(0)}}else{c[j>>2]=h;c[g>>2]=e;p=30}while(0);if((p|0)==30)e=(e|0)!=(f|0)&1;l=q;return e|0}function cd(b,d,e,f,g,h,i,j){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;var k=0,m=0,n=0,o=0;n=l;l=l+16|0;a:do if((e|0)==(f|0))d=e;else{d=e;while(1){if(!(c[d>>2]|0))break a;d=d+4|0;if((d|0)==(f|0)){d=f;break}}}while(0);c[j>>2]=h;c[g>>2]=e;b:do if(!((h|0)==(i|0)|(e|0)==(f|0))){c:while(1){k=kg(c[b+8>>2]|0)|0;m=ud(h,g,d-e>>2,i-h|0)|0;if(k|0)kg(k)|0;switch(m|0){case 0:{e=1;break b}case -1:{o=8;break c}default:{}}h=(c[j>>2]|0)+m|0;c[j>>2]=h;if((h|0)==(i|0)){o=30;break}if((d|0)==(f|0)){e=c[g>>2]|0;d=f}else{e=kg(c[b+8>>2]|0)|0;h=Td(n,0)|0;if(e|0)kg(e)|0;if((h|0)==-1){e=2;o=29;break}e=c[j>>2]|0;if(h>>>0>(i-e|0)>>>0){e=1;o=29;break}if(h|0?(m=a[n>>0]|0,c[j>>2]=e+1,a[e>>0]=m,h+-1|0):0){d=n;e=h+-1|0;do{d=d+1|0;m=c[j>>2]|0;k=a[d>>0]|0;c[j>>2]=m+1;a[m>>0]=k;e=e+-1|0}while((e|0)!=0)}e=(c[g>>2]|0)+4|0;c[g>>2]=e;d:do if((e|0)==(f|0))d=f;else{d=e;while(1){if(!(c[d>>2]|0))break d;d=d+4|0;if((d|0)==(f|0)){d=f;break}}}while(0);h=c[j>>2]|0}if((h|0)==(i|0)|(e|0)==(f|0)){o=31;break b}}if((o|0)==8){c[j>>2]=h;e:do if((e|0)!=(c[g>>2]|0)){d=h;do{f=c[e>>2]|0;h=kg(c[b+8>>2]|0)|0;d=Td(d,f)|0;if(h|0)kg(h)|0;if((d|0)==-1)break e;d=(c[j>>2]|0)+d|0;c[j>>2]=d;e=e+4|0}while((e|0)!=(c[g>>2]|0))}while(0);c[g>>2]=e;e=2;break}else if((o|0)==29)break;else if((o|0)==30){e=c[g>>2]|0;o=31;break}}else o=31;while(0);if((o|0)==31)e=(e|0)!=(f|0)&1;l=n;return e|0}function dd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;i=l;l=l+32|0;c[b+4>>2]=0;c[b+8>>2]=0;c[b>>2]=b+4;e=c[d>>2]|0;if((e|0)==(d+4|0)){l=i;return}h=e;while(1){Kc(i+12|0,h+28|0);Kc(i,h+16|0);g=rd(b,i+24|0,i)|0;e=c[g>>2]|0;if(!e){e=tf(40)|0;c[e+16>>2]=c[i>>2];c[e+16+4>>2]=c[i+4>>2];c[e+16+8>>2]=c[i+8>>2];c[i>>2]=0;c[i+4>>2]=0;c[i+8>>2]=0;c[e+28>>2]=0;c[e+28+4>>2]=0;c[e+28+8>>2]=0;f=c[i+24>>2]|0;c[e>>2]=0;c[e+4>>2]=0;c[e+8>>2]=f;c[g>>2]=e;f=c[c[b>>2]>>2]|0;if(!f)f=e;else{c[b>>2]=f;f=c[g>>2]|0}fd(c[b+4>>2]|0,f);c[b+8>>2]=(c[b+8>>2]|0)+1}f=e+28|0;if((a[f+11>>0]|0)<0){a[c[f>>2]>>0]=0;c[e+32>>2]=0;e=f}else{a[f>>0]=0;a[f+11>>0]=0;e=f}Bd(f,0);c[e>>2]=c[i+12>>2];c[e+4>>2]=c[i+12+4>>2];c[e+8>>2]=c[i+12+8>>2];c[i+12>>2]=0;c[i+12+4>>2]=0;c[i+12+8>>2]=0;if((a[i+11>>0]|0)<0){Nh(c[i>>2]|0);if((a[i+12+11>>0]|0)<0)Nh(c[i+12>>2]|0)}e=c[h+4>>2]|0;if(!e){f=h+8|0;e=c[f>>2]|0;if((c[e>>2]|0)!=(h|0))do{h=c[f>>2]|0;f=h+8|0;e=c[f>>2]|0}while((c[e>>2]|0)!=(h|0))}else while(1){f=c[e>>2]|0;if(!f)break;else e=f}if((e|0)==(d+4|0))break;else h=e}l=i;return}function ed(b,c,e,f,g){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;if(((c-b|0)>2&(g&4|0)!=0?(a[b>>0]|0)==-17:0)?(a[b+1>>0]|0)==-69:0)h=(a[b+2>>0]|0)==-65?b+3|0:b;else h=b;g=h;a:do if((e|0)!=0&h>>>0<c>>>0){o=0;do{n=a[h>>0]|0;j=h+1|0;do if(n<<24>>24>-1)if((n&255)>>>0>f>>>0)break a;else h=j;else{if((n&255)<194)break a;l=h+2|0;i=c-g|0;if((n&255)<224){if((i|0)<2)break a;h=d[j>>0]|0;if((h&192|0)!=128)break a;if((h&63|(n&255)<<6&1984)>>>0>f>>>0)break a;else{h=l;break}}m=h+3|0;if((n&255)<240){if((i|0)<3)break a;i=a[l>>0]|0;h=d[j>>0]|0;switch(n<<24>>24){case -32:{if((h&224|0)!=160)break a;break}case -19:{if((h&224|0)!=128)break a;break}default:if((h&192|0)!=128)break a}if((i&192|0)!=128)break a;if((h<<6&4032|(n&255)<<12&61440|i&63)>>>0>f>>>0)break a;else{h=m;break}}if((i|0)<4|(n&255)>244)break a;k=a[j>>0]|0;j=a[l>>0]|0;i=a[m>>0]|0;switch(n<<24>>24){case -16:{if((k+112&255)>=48)break a;break}case -12:{if((k&240|0)!=128)break a;break}default:if((k&192|0)!=128)break a}if((j&192|0)!=128)break a;if((i&192|0)!=128)break a;if(((k&255)<<12&258048|(n&255)<<18&1835008|(j&255)<<6&4032|i&63)>>>0>f>>>0)break a;else h=h+4|0}while(0);o=o+1|0;g=h}while(o>>>0<e>>>0&h>>>0<c>>>0)}while(0);return g-b|0}function fd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;a[d+12>>0]=(d|0)==(b|0)&1;if((d|0)==(b|0))return;while(1){g=d+8|0;h=c[g>>2]|0;if(a[h+12>>0]|0){e=23;break}f=c[h+8>>2]|0;e=c[f>>2]|0;if((e|0)==(h|0)){e=c[f+4>>2]|0;if(!e){e=7;break}if(!(a[e+12>>0]|0))d=e+12|0;else{e=7;break}}else{if(!e){e=16;break}if(!(a[e+12>>0]|0))d=e+12|0;else{e=16;break}}a[h+12>>0]=1;a[f+12>>0]=(f|0)==(b|0)&1;a[d>>0]=1;if((f|0)==(b|0)){e=23;break}else d=f}if((e|0)==7){if((c[h>>2]|0)==(d|0))d=h;else{e=c[h+4>>2]|0;d=c[e>>2]|0;c[h+4>>2]=d;if(!d)d=f;else{c[d+8>>2]=h;d=c[h+8>>2]|0}c[e+8>>2]=d;d=c[h+8>>2]|0;c[((c[d>>2]|0)==(h|0)?d:d+4|0)>>2]=e;c[e>>2]=h;c[h+8>>2]=e;d=e;f=c[e+8>>2]|0}a[d+12>>0]=1;a[f+12>>0]=0;d=c[f>>2]|0;e=c[d+4>>2]|0;c[f>>2]=e;if(e|0)c[e+8>>2]=f;h=f+8|0;c[d+8>>2]=c[h>>2];g=c[h>>2]|0;c[((c[g>>2]|0)==(f|0)?g:g+4|0)>>2]=d;c[d+4>>2]=f;c[h>>2]=d;return}else if((e|0)==16){if((c[h>>2]|0)==(d|0)){b=d+4|0;e=c[b>>2]|0;c[h>>2]=e;if(e){c[e+8>>2]=h;f=c[h+8>>2]|0}c[g>>2]=f;f=c[h+8>>2]|0;c[((c[f>>2]|0)==(h|0)?f:f+4|0)>>2]=d;c[b>>2]=h;c[h+8>>2]=d;f=c[g>>2]|0}else d=h;a[d+12>>0]=1;a[f+12>>0]=0;h=f+4|0;d=c[h>>2]|0;e=c[d>>2]|0;c[h>>2]=e;if(e|0)c[e+8>>2]=f;h=f+8|0;c[d+8>>2]=c[h>>2];g=c[h>>2]|0;c[((c[g>>2]|0)==(f|0)?g:g+4|0)>>2]=d;c[d>>2]=f;c[h>>2]=d;return}else if((e|0)==23)return}function gd(b,d,e,f,g,h,i,j){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;var k=0;c[e>>2]=b;c[h>>2]=f;if(j&2)if((g-f|0)<3)b=1;else{c[h>>2]=f+1;a[f>>0]=-17;k=c[h>>2]|0;c[h>>2]=k+1;a[k>>0]=-69;k=c[h>>2]|0;c[h>>2]=k+1;a[k>>0]=-65;k=4}else k=4;a:do if((k|0)==4){b=c[e>>2]|0;if(b>>>0<d>>>0)while(1){f=c[b>>2]|0;if(f>>>0>i>>>0|(f&-2048|0)==55296){b=2;break a}do if(f>>>0>=128){if(f>>>0<2048){b=c[h>>2]|0;if((g-b|0)<2){b=1;break a}c[h>>2]=b+1;a[b>>0]=f>>>6|192;k=c[h>>2]|0;c[h>>2]=k+1;a[k>>0]=f&63|128;break}b=c[h>>2]|0;if(f>>>0<65536){if((g-b|0)<3){b=1;break a}c[h>>2]=b+1;a[b>>0]=f>>>12|224;k=c[h>>2]|0;c[h>>2]=k+1;a[k>>0]=f>>>6&63|128;k=c[h>>2]|0;c[h>>2]=k+1;a[k>>0]=f&63|128;break}else{if((g-b|0)<4){b=1;break a}c[h>>2]=b+1;a[b>>0]=f>>>18|240;k=c[h>>2]|0;c[h>>2]=k+1;a[k>>0]=f>>>12&63|128;k=c[h>>2]|0;c[h>>2]=k+1;a[k>>0]=f>>>6&63|128;k=c[h>>2]|0;c[h>>2]=k+1;a[k>>0]=f&63|128;break}}else{b=c[h>>2]|0;if((g-b|0)<1){b=1;break a}c[h>>2]=b+1;a[b>>0]=f}while(0);b=(c[e>>2]|0)+4|0;c[e>>2]=b;if(b>>>0>=d>>>0){b=0;break}}else b=0}while(0);return b|0}function hd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0.0;a:do if(b>>>0<=20)do switch(b|0){case 9:{e=(c[d>>2]|0)+(4-1)&~(4-1);b=c[e>>2]|0;c[d>>2]=e+4;c[a>>2]=b;break a}case 10:{b=(c[d>>2]|0)+(4-1)&~(4-1);e=c[b>>2]|0;c[d>>2]=b+4;c[a>>2]=e;c[a+4>>2]=((e|0)<0)<<31>>31;break a}case 11:{b=(c[d>>2]|0)+(4-1)&~(4-1);e=c[b>>2]|0;c[d>>2]=b+4;c[a>>2]=e;c[a+4>>2]=0;break a}case 12:{f=(c[d>>2]|0)+(8-1)&~(8-1);b=c[f>>2]|0;e=c[f+4>>2]|0;c[d>>2]=f+8;c[a>>2]=b;c[a+4>>2]=e;break a}case 13:{e=(c[d>>2]|0)+(4-1)&~(4-1);f=c[e>>2]|0;c[d>>2]=e+4;c[a>>2]=(f&65535)<<16>>16;c[a+4>>2]=(((f&65535)<<16>>16|0)<0)<<31>>31;break a}case 14:{e=(c[d>>2]|0)+(4-1)&~(4-1);f=c[e>>2]|0;c[d>>2]=e+4;c[a>>2]=f&65535;c[a+4>>2]=0;break a}case 15:{e=(c[d>>2]|0)+(4-1)&~(4-1);f=c[e>>2]|0;c[d>>2]=e+4;c[a>>2]=(f&255)<<24>>24;c[a+4>>2]=(((f&255)<<24>>24|0)<0)<<31>>31;break a}case 16:{e=(c[d>>2]|0)+(4-1)&~(4-1);f=c[e>>2]|0;c[d>>2]=e+4;c[a>>2]=f&255;c[a+4>>2]=0;break a}case 17:{f=(c[d>>2]|0)+(8-1)&~(8-1);g=+h[f>>3];c[d>>2]=f+8;h[a>>3]=g;break a}case 18:{f=(c[d>>2]|0)+(8-1)&~(8-1);g=+h[f>>3];c[d>>2]=f+8;h[a>>3]=g;break a}default:break a}while(0);while(0);return}function id(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;i=l;l=l+16|0;a:do if(!b){e=c[d>>2]|0;b=c[e>>2]|0;if(!b)e=0;else{f=e;e=0;do{if(b>>>0>127){b=Td(i,b)|0;if((b|0)==-1){e=-1;break a}}else b=1;e=b+e|0;f=f+4|0;b=c[f>>2]|0}while((b|0)!=0)}}else{b:do if(e>>>0>3){f=e;g=c[d>>2]|0;while(1){h=c[g>>2]|0;if((h+-1|0)>>>0>126){if(!h)break;h=Td(b,h)|0;if((h|0)==-1){e=-1;break a}b=b+h|0;f=f-h|0}else{a[b>>0]=h;b=b+1|0;f=f+-1|0;g=c[d>>2]|0}g=g+4|0;c[d>>2]=g;if(f>>>0<=3)break b}a[b>>0]=0;c[d>>2]=0;e=e-f|0;break a}else f=e;while(0);if(f){g=c[d>>2]|0;while(1){h=c[g>>2]|0;if((h+-1|0)>>>0>126){if(!h){g=19;break}h=Td(i,h)|0;if((h|0)==-1){e=-1;break a}if(f>>>0<h>>>0){g=22;break}Td(b,c[g>>2]|0)|0;b=b+h|0;f=f-h|0}else{a[b>>0]=h;b=b+1|0;f=f+-1|0;g=c[d>>2]|0}g=g+4|0;c[d>>2]=g;if(!f)break a}if((g|0)==19){a[b>>0]=0;c[d>>2]=0;e=e-f|0;break}else if((g|0)==22){e=e-f|0;break}}}while(0);l=i;return e|0}function jd(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;oe(a,b);c[a+40>>2]=0;c[a+44>>2]=0;c[a+12>>2]=0;c[a+12+4>>2]=0;c[a+12+8>>2]=0;c[a+12+12>>2]=0;c[a+12+16>>2]=0;c[a+12+20>>2]=0;c[a+36>>2]=a+40;b=c[d>>2]|0;if((b|0)!=(d+4|0)){g=b;while(1){b=g+16|0;Qc(a+36|0,a+40|0,b,b);b=c[g+4>>2]|0;if(!b){f=g+8|0;b=c[f>>2]|0;if((c[b>>2]|0)!=(g|0))do{g=c[f>>2]|0;f=g+8|0;b=c[f>>2]|0}while((c[b>>2]|0)!=(g|0))}else while(1){f=c[b>>2]|0;if(!f)break;else b=f}if((b|0)==(d+4|0))break;else g=b}}c[a+52>>2]=0;c[a+56>>2]=0;c[a+60>>2]=0;b=(c[e+4>>2]|0)-(c[e>>2]|0)|0;if(!(b>>2)){Wc(a);return}if(b>>2>>>0>1073741823)Bh();g=tf(b)|0;c[a+56>>2]=g;c[a+52>>2]=g;c[a+60>>2]=g+(b>>2<<2);f=c[e>>2]|0;b=(c[e+4>>2]|0)-f|0;if((b|0)<=0){Wc(a);return}wd(g|0,f|0,b|0)|0;c[a+56>>2]=g+(b>>>2<<2);Wc(a);return}function kd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+32|0;c[j+12>>2]=0;i=j+12+4|0;c[i>>2]=0;c[j+12+8>>2]=0;f=c[d>>2]|0;a:do if((c[d+4>>2]|0)!=(f|0)){e=0;g=0;h=0;while(1){f=c[f+(e<<2)>>2]|0;c[j>>2]=f;if(g>>>0<h>>>0){c[g>>2]=f;c[i>>2]=g+4}else Nd(j+12|0,j);e=e+1|0;f=c[d>>2]|0;if(e>>>0>=(c[d+4>>2]|0)-f>>2>>>0)break a;g=c[i>>2]|0;h=c[j+12+8>>2]|0}}while(0);Kc(j,b);e=tf(64)|0;oe(e,j);c[e+40>>2]=0;c[e+44>>2]=0;c[e+12>>2]=0;c[e+12+4>>2]=0;c[e+12+8>>2]=0;c[e+12+12>>2]=0;c[e+12+16>>2]=0;c[e+12+20>>2]=0;c[e+36>>2]=e+40;c[e+52>>2]=0;c[e+56>>2]=0;c[e+60>>2]=0;f=c[i>>2]|0;g=c[j+12>>2]|0;if(f-g>>2|0){if(f-g>>2>>>0>1073741823)Bh();h=tf(f-g|0)|0;c[e+56>>2]=h;c[e+52>>2]=h;c[e+60>>2]=h+(f-g>>2<<2);if((f-g|0)>0){wd(h|0,g|0,f-g|0)|0;c[e+56>>2]=h+((f-g|0)>>>2<<2)}}Wc(e);if((a[j+11>>0]|0)<0)Nh(c[j>>2]|0);if(!g){l=j;return e|0}if((f|0)!=(g|0))c[i>>2]=f+(~((f+-4-g|0)>>>2)<<2);Nh(g);l=j;return e|0}function ld(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0;q=l;l=l+16|0;f=c[d+4>>2]|0;if(!f){p=1;c[b>>2]=p;l=q;return}m=a[e+8+3>>0]|0;n=m<<24>>24<0?c[e+4>>2]|0:m&255;m=m<<24>>24<0?c[e>>2]|0:e;j=d+4|0;a:while(1){e=f;while(1){g=e+16|0;h=a[e+24+3>>0]|0;i=h<<24>>24<0?c[e+20>>2]|0:h&255;f=n>>>0<i>>>0?n:i;if((f|0)!=0?(k=bf(h<<24>>24<0?c[g>>2]|0:g,m,f)|0,(k|0)!=0):0){if((k|0)>=0)break}else p=6;if((p|0)==6?(p=0,i>>>0>=n>>>0):0)break;e=c[e+4>>2]|0;if(!e){e=j;break a}}f=c[e>>2]|0;if(!f)break;else j=e}if((e|0)==(d+4|0)){p=1;c[b>>2]=p;l=q;return}g=e+16|0;h=a[e+24+3>>0]|0;i=h<<24>>24<0?c[e+20>>2]|0:h&255;f=i>>>0<n>>>0?i:n;if((f|0)!=0?(o=bf(m,h<<24>>24<0?c[g>>2]|0:g,f)|0,(o|0)!=0):0){if((o|0)<0){p=1;c[b>>2]=p;l=q;return}}else p=13;if((p|0)==13?n>>>0<i>>>0:0){p=1;c[b>>2]=p;l=q;return}n=e+28|0;m=a[e+36+3>>0]|0;o=m<<24>>24<0?c[e+32>>2]|0:m&255;p=Dc((o<<2)+4|0)|0;c[p>>2]=o;Ef(p+4|0,m<<24>>24<0?c[n>>2]|0:n,o)|0;c[q>>2]=p;p=Ua(64,q|0)|0;c[b>>2]=p;l=q;return}function md(){var a=0;lb(88,184,200,0,4484,10,4487,0,4487,0,4089,4489,20);Ea(88,1,1044,4484,11,1);a=tf(8)|0;c[a>>2]=12;c[a+4>>2]=0;Zb(88,4515,2,1048,4145,1,a|0,0);a=tf(4)|0;c[a>>2]=1;Zb(88,4520,3,1056,4189,6,a|0,0);a=tf(4)|0;c[a>>2]=2;Zb(88,4524,4,1068,4509,4,a|0,0);lb(96,152,168,0,4484,13,4487,0,4487,0,4105,4489,21);Ea(96,1,976,4484,14,2);a=tf(8)|0;c[a>>2]=1;c[a+4>>2]=0;Zb(96,4492,3,980,4173,3,a|0,0);a=tf(8)|0;c[a>>2]=4;c[a+4>>2]=0;Zb(96,4502,4,992,4509,5,a|0,0);a=tf(8)|0;c[a>>2]=15;c[a+4>>2]=0;Zb(96,4515,2,1008,4145,2,a|0,0);a=tf(4)|0;c[a>>2]=5;Zb(96,4520,3,1016,4189,7,a|0,0);a=tf(4)|0;c[a>>2]=8;Zb(96,4524,4,1028,4225,1,a|0,0);Vb(4120,2,800,4133,2,22);Vb(4137,2,808,4145,3,16);Vb(4149,2,816,4145,4,3);Vb(4157,2,824,4145,5,17);Vb(4166,3,832,4173,6,4);Vb(4178,2,844,4145,6,18);Vb(4183,3,852,4189,9,7);Vb(4194,3,864,4189,10,8);Vb(4200,3,876,4189,11,9);Vb(4206,3,888,4189,12,10);Vb(4212,3,900,4189,13,11);Vb(4218,4,912,4225,2,14);Vb(4231,4,928,4225,3,15);Vb(4238,4,944,4225,4,16);Vb(4245,4,960,4225,5,17);return}function nd(d){d=d|0;var e=0,f=0,g=0,h=0;h=l;l=l+16|0;c[h>>2]=0;c[h+4>>2]=0;c[h+8>>2]=0;a[h+11>>0]=2;b[h>>1]=29550;a[h+2>>0]=0;g=rd(d+36|0,h+12|0,h)|0;e=c[g>>2]|0;if(!e){e=tf(40)|0;c[e+16>>2]=c[h>>2];c[e+16+4>>2]=c[h+4>>2];c[e+16+8>>2]=c[h+8>>2];c[h>>2]=0;c[h+4>>2]=0;c[h+8>>2]=0;c[e+28>>2]=0;c[e+28+4>>2]=0;c[e+28+8>>2]=0;f=c[h+12>>2]|0;c[e>>2]=0;c[e+4>>2]=0;c[e+8>>2]=f;c[g>>2]=e;f=c[c[d+36>>2]>>2]|0;if(!f)f=e;else{c[d+36>>2]=f;f=c[g>>2]|0}fd(c[d+40>>2]|0,f);c[d+44>>2]=(c[d+44>>2]|0)+1}Pf(e+28|0)|0;g=a[d+11>>0]|0;if(((g<<24>>24<0?c[d+4>>2]|0:g&255)|0)==13?(Ie(d,1816,13)|0)==0:0){l=h;return}e=c[d+52>>2]|0;if((e|0)==(c[d+56>>2]|0)){l=h;return}f=0;do{nd(c[e+(f<<2)>>2]|0);f=f+1|0;e=c[d+52>>2]|0}while((f|0)!=((c[d+56>>2]|0)-e>>2|0));l=h;return}function od(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0;p=l;l=l+1040|0;m=c[b>>2]|0;c[p>>2]=m;h=a|0?e:256;e=a|0?a:p+8|0;a:do if((h|0)!=0&(m|0)!=0){g=0;j=d;n=h;k=e;e=m;d=m;while(1){h=j>>>2;i=h>>>0>=n>>>0;if(!(j>>>0>131|i)){i=k;h=n;break a}e=i?n:h;j=j-e|0;e=Oc(k,p,e,f)|0;if((e|0)==-1)break;d=(k|0)==(p+8|0);h=n-(d?0:e)|0;d=d?k:k+(e<<2)|0;g=e+g|0;m=c[p>>2]|0;if((h|0)!=0&(m|0)!=0){n=h;k=d;e=m;d=m}else{i=d;e=m;d=m;break a}}d=c[p>>2]|0;i=k;g=-1;h=0;e=d}else{i=e;g=0;j=d;e=m;d=m}while(0);b:do if((e|0)!=0?(h|0)!=0&(j|0)!=0:0){while(1){d=td(i,e,j,f)|0;if((d+2|0)>>>0<3)break;e=e+d|0;j=j-d|0;h=h+-1|0;g=g+1|0;if(!((h|0)!=0&(j|0)!=0)){o=13;break}else i=i+4|0}if((o|0)==13){c[p>>2]=e;break}c[p>>2]=e;switch(d|0){case -1:{g=-1;break b}case 0:{c[p>>2]=0;e=0;break b}default:{c[f>>2]=0;break b}}}else e=d;while(0);if(a|0)c[b>>2]=e;l=p;return g|0}function pd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;i=a[b+12+11>>0]|0;f=i<<24>>24<0?c[b+16>>2]|0:i&255;e=a[d+12+11>>0]|0;if((f|0)!=((e<<24>>24<0?c[d+16>>2]|0:e&255)|0)){d=0;return d|0}g=c[b+12>>2]|0;h=i<<24>>24<0?g:b+12|0;e=e<<24>>24<0?c[d+12>>2]|0:d+12|0;a:do if(i<<24>>24<0){if(f|0?Ye(h,e,f)|0:0){d=0;return d|0}}else if(f|0){if((g&255)<<24>>24==(a[e>>0]|0)){g=b+12|0;f=i&255}else{d=0;return d|0}while(1){f=f+-1|0;g=g+1|0;if(!f)break a;e=e+1|0;if((a[g>>0]|0)!=(a[e>>0]|0)){e=0;break}}return e|0}while(0);i=a[b+11>>0]|0;f=i<<24>>24<0?c[b+4>>2]|0:i&255;e=a[d+11>>0]|0;if((f|0)!=((e<<24>>24<0?c[d+4>>2]|0:e&255)|0)){d=0;return d|0}g=c[b>>2]|0;h=i<<24>>24<0?g:b;e=e<<24>>24<0?c[d>>2]|0:d;if(i<<24>>24<0){if(!f){d=1;return d|0}d=(Ye(h,e,f)|0)==0;return d|0}if(!f){d=1;return d|0}if((g&255)<<24>>24==(a[e>>0]|0))f=i&255;else{d=0;return d|0}while(1){f=f+-1|0;b=b+1|0;if(!f){e=1;f=17;break}e=e+1|0;if((a[b>>0]|0)!=(a[e>>0]|0)){e=0;f=17;break}}if((f|0)==17)return e|0;return 0}function qd(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;f=c[b+4>>2]|0;if(!f){c[d>>2]=b+4;n=b+4|0;return n|0}k=a[e+8+3>>0]|0;l=k<<24>>24<0?c[e+4>>2]|0:k&255;k=k<<24>>24<0?c[e>>2]|0:e;i=b+4|0;while(1){b=f+16|0;g=a[f+24+3>>0]|0;h=g<<24>>24<0?c[f+20>>2]|0:g&255;e=h>>>0<l>>>0?h:l;if((e|0)!=0?(m=bf(k,g<<24>>24<0?c[b>>2]|0:b,e)|0,(m|0)!=0):0)if((m|0)<0)j=8;else j=10;else if(l>>>0<h>>>0)j=8;else j=10;if((j|0)==8){e=c[f>>2]|0;if(!e){j=9;break}}else if((j|0)==10){j=0;e=l>>>0<h>>>0?l:h;if((e|0)!=0?(n=bf(g<<24>>24<0?c[b>>2]|0:b,k,e)|0,(n|0)!=0):0){if((n|0)>=0){j=16;break}}else j=12;if((j|0)==12?(0,h>>>0>=l>>>0):0){j=16;break}b=f+4|0;e=c[b>>2]|0;if(!e){j=15;break}else f=b}i=f;f=e}if((j|0)==9){c[d>>2]=f;n=f;return n|0}else if((j|0)==15){c[d>>2]=f;n=b;return n|0}else if((j|0)==16){c[d>>2]=f;n=i;return n|0}return 0}function rd(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;f=c[b+4>>2]|0;if(!f){c[d>>2]=b+4;n=b+4|0;return n|0}k=a[e+11>>0]|0;l=k<<24>>24<0?c[e+4>>2]|0:k&255;k=k<<24>>24<0?c[e>>2]|0:e;i=b+4|0;while(1){b=f+16|0;g=a[b+11>>0]|0;h=g<<24>>24<0?c[f+20>>2]|0:g&255;e=h>>>0<l>>>0?h:l;if((e|0)!=0?(m=Ye(k,g<<24>>24<0?c[b>>2]|0:b,e)|0,(m|0)!=0):0)if((m|0)<0)j=8;else j=10;else if(l>>>0<h>>>0)j=8;else j=10;if((j|0)==8){e=c[f>>2]|0;if(!e){j=9;break}}else if((j|0)==10){j=0;e=l>>>0<h>>>0?l:h;if((e|0)!=0?(n=Ye(g<<24>>24<0?c[b>>2]|0:b,k,e)|0,(n|0)!=0):0){if((n|0)>=0){j=16;break}}else j=12;if((j|0)==12?(0,h>>>0>=l>>>0):0){j=16;break}b=f+4|0;e=c[b>>2]|0;if(!e){j=15;break}else f=b}i=f;f=e}if((j|0)==9){c[d>>2]=f;n=f;return n|0}else if((j|0)==15){c[d>>2]=f;n=b;return n|0}else if((j|0)==16){c[d>>2]=f;n=i;return n|0}return 0}function sd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;oe(a,b);c[a+40>>2]=0;c[a+44>>2]=0;c[a+12>>2]=0;c[a+12+4>>2]=0;c[a+12+8>>2]=0;c[a+12+12>>2]=0;c[a+12+16>>2]=0;c[a+12+20>>2]=0;c[a+36>>2]=a+40;b=c[d>>2]|0;if((b|0)==(d+4|0)){d=a+52|0;c[d>>2]=0;d=a+56|0;c[d>>2]=0;d=a+60|0;c[d>>2]=0;Wc(a);return}else f=b;while(1){b=f+16|0;Qc(a+36|0,a+40|0,b,b);b=c[f+4>>2]|0;if(!b){e=f+8|0;b=c[e>>2]|0;if((c[b>>2]|0)!=(f|0))do{f=c[e>>2]|0;e=f+8|0;b=c[e>>2]|0}while((c[b>>2]|0)!=(f|0))}else while(1){e=c[b>>2]|0;if(!e)break;else b=e}if((b|0)==(d+4|0))break;else f=b}d=a+52|0;c[d>>2]=0;d=a+56|0;c[d>>2]=0;d=a+60|0;c[d>>2]=0;Wc(a);return}function td(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0;k=l;l=l+16|0;i=(f|0)==0?10208:f;f=c[i>>2]|0;a:do if(!d)if(!f)f=0;else j=17;else{h=(b|0)==0?k:b;if(!e)f=-2;else{if(!f){f=a[d>>0]|0;if(f<<24>>24>-1){c[h>>2]=f&255;f=f<<24>>24!=0&1;break}if(!(c[c[453]>>2]|0)){c[h>>2]=f<<24>>24&57343;f=1;break}if(((f&255)+-194|0)>>>0>50){j=17;break}f=c[1156+((f&255)+-194<<2)>>2]|0;if(e+-1|0){d=d+1|0;g=e+-1|0;j=11}}else{g=e;j=11}b:do if((j|0)==11){b=a[d>>0]|0;if((((b&255)>>>3)+-16|((b&255)>>>3)+(f>>26))>>>0>7){j=17;break a}while(1){d=d+1|0;f=f<<6|(b&255)+-128;g=g+-1|0;if((f|0)>=0)break;if(!g)break b;b=a[d>>0]|0;if((b&-64)<<24>>24!=-128){j=17;break a}}c[i>>2]=0;c[h>>2]=f;f=e-g|0;break a}while(0);c[i>>2]=f;f=-2}}while(0);if((j|0)==17){c[i>>2]=0;c[2561]=84;f=-1}l=k;return f|0}function ud(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0;k=l;l=l+272|0;j=c[b>>2]|0;c[k>>2]=j;g=a|0?e:256;e=a|0?a:k+8|0;a:do if((g|0)!=0&(j|0)!=0){f=0;i=d;h=e;e=j;while(1){d=i>>>0>=g>>>0;if(!(i>>>0>32|d)){d=j;break a}e=d?g:i;i=i-e|0;e=id(h,k,e)|0;if((e|0)==-1)break;d=(h|0)==(k+8|0);g=g-(d?0:e)|0;d=d?h:h+e|0;f=e+f|0;j=c[k>>2]|0;if((g|0)!=0&(j|0)!=0){h=d;e=j}else{h=d;e=j;d=j;break a}}d=c[k>>2]|0;f=-1;g=0;e=d}else{h=e;f=0;i=d;e=j;d=j}while(0);do if((e|0)!=0?(g|0)!=0&(i|0)!=0:0){d=h;while(1){h=Td(d,c[e>>2]|0)|0;if((h+1|0)>>>0<2){d=9;break}e=e+4|0;i=i+-1|0;g=g-h|0;f=h+f|0;if(!((i|0)!=0&(g|0)!=0)){d=11;break}else d=d+h|0}if((d|0)==9){e=(h|0)==0?0:e;c[k>>2]=e;f=(h|0)==0?f:-1;break}else if((d|0)==11){c[k>>2]=e;break}}else e=d;while(0);if(a|0)c[b>>2]=e;l=k;return f|0}function vd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;f=c[b+4>>2]|0;do if(f|0){l=a[d+11>>0]|0;m=l<<24>>24<0?c[d+4>>2]|0:l&255;l=l<<24>>24<0?c[d>>2]|0:d;d=b+4|0;a:while(1){e=f;while(1){g=e+16|0;h=a[g+11>>0]|0;i=h<<24>>24<0?c[e+20>>2]|0:h&255;f=m>>>0<i>>>0?m:i;if((f|0)!=0?(j=Ye(h<<24>>24<0?c[g>>2]|0:g,l,f)|0,(j|0)!=0):0){if((j|0)>=0)break}else k=6;if((k|0)==6?(k=0,i>>>0>=m>>>0):0)break;e=c[e+4>>2]|0;if(!e)break a}f=c[e>>2]|0;if(!f){d=e;break}else d=e}if((d|0)!=(b+4|0)){f=d+16|0;g=a[f+11>>0]|0;h=g<<24>>24<0?c[d+20>>2]|0:g&255;e=h>>>0<m>>>0?h:m;if(e|0?(n=Ye(l,g<<24>>24<0?c[f>>2]|0:f,e)|0,n|0):0){if((n|0)<0)break;return d|0}if(m>>>0>=h>>>0){n=d;return n|0}}}while(0);n=b+4|0;return n|0}function wd(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;if((e|0)>=8192)return ua(b|0,d|0,e|0)|0;h=b|0;g=b+e|0;if((b&3)==(d&3)){while(b&3){if(!e)return h|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}e=g&-4|0;f=e-64|0;while((b|0)<=(f|0)){c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2];c[b+12>>2]=c[d+12>>2];c[b+16>>2]=c[d+16>>2];c[b+20>>2]=c[d+20>>2];c[b+24>>2]=c[d+24>>2];c[b+28>>2]=c[d+28>>2];c[b+32>>2]=c[d+32>>2];c[b+36>>2]=c[d+36>>2];c[b+40>>2]=c[d+40>>2];c[b+44>>2]=c[d+44>>2];c[b+48>>2]=c[d+48>>2];c[b+52>>2]=c[d+52>>2];c[b+56>>2]=c[d+56>>2];c[b+60>>2]=c[d+60>>2];b=b+64|0;d=d+64|0}while((b|0)<(e|0)){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0}}else{e=g-4|0;while((b|0)<(e|0)){a[b>>0]=a[d>>0]|0;a[b+1>>0]=a[d+1>>0]|0;a[b+2>>0]=a[d+2>>0]|0;a[b+3>>0]=a[d+3>>0]|0;b=b+4|0;d=d+4|0}}while((b|0)<(g|0)){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0}return h|0}function xd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;k=c[a+4>>2]|0;j=c[a>>2]|0;l=k-j>>2;if(l>>>0>=b>>>0){if(l>>>0<=b>>>0)return;if((k|0)==(j+(b<<2)|0))return;c[a+4>>2]=k+(~((k+-4-(j+(b<<2))|0)>>>2)<<2);return}e=c[a+8>>2]|0;if(e-k>>2>>>0>=(b-l|0)>>>0){e=b-l|0;f=k;while(1){c[f>>2]=c[d>>2];e=e+-1|0;if(!e)break;else f=f+4|0}c[a+4>>2]=k+(b-l<<2);return}if(b>>>0>1073741823)Bh();f=e-j>>2>>>0<536870911?(e-j>>1>>>0<b>>>0?b:e-j>>1):1073741823;do if(f)if(f>>>0>1073741823){l=qb(8)|0;Ag(l,4528);c[l>>2]=1664;jc(l|0,512,10)}else{h=tf(f<<2)|0;break}else h=0;while(0);g=h+(l<<2)|0;e=b-l|0;i=g;while(1){c[i>>2]=c[d>>2];e=e+-1|0;if(!e)break;else i=i+4|0}if((k-j|0)>0)wd(g+(0-l<<2)|0,j|0,k-j|0)|0;c[a>>2]=g+(0-l<<2);c[a+4>>2]=g+(b-l<<2);c[a+8>>2]=h+(f<<2);if(!j)return;Nh(j);return}function yd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;i=l;l=l+48|0;e=c[a+28>>2]|0;c[i+32>>2]=e;e=(c[a+20>>2]|0)-e|0;c[i+32+4>>2]=e;c[i+32+8>>2]=b;c[i+32+12>>2]=d;c[i>>2]=c[a+60>>2];c[i+4>>2]=i+32;c[i+8>>2]=2;f=Vg(Ja(146,i|0)|0)|0;a:do if((e+d|0)!=(f|0)){b=2;g=e+d|0;e=i+32|0;while(1){if((f|0)<0)break;g=g-f|0;j=c[e+4>>2]|0;k=f>>>0>j>>>0;e=k?e+8|0:e;b=(k<<31>>31)+b|0;j=f-(k?j:0)|0;c[e>>2]=(c[e>>2]|0)+j;c[e+4>>2]=(c[e+4>>2]|0)-j;c[i+16>>2]=c[a+60>>2];c[i+16+4>>2]=e;c[i+16+8>>2]=b;f=Vg(Ja(146,i+16|0)|0)|0;if((g|0)==(f|0)){h=3;break a}}c[a+16>>2]=0;c[a+28>>2]=0;c[a+20>>2]=0;c[a>>2]=c[a>>2]|32;if((b|0)==2)d=0;else d=d-(c[e+4>>2]|0)|0}else h=3;while(0);if((h|0)==3){k=c[a+44>>2]|0;c[a+16>>2]=k+(c[a+48>>2]|0);c[a+28>>2]=k;c[a+20>>2]=k}l=i;return d|0}function zd(){Ub(608,9491);Qa(624,9496,1,1,0);pb(632,9439,1,-128,127);pb(648,9444,1,-128,127);pb(640,9456,1,0,255);pb(656,9470,2,-32768,32767);pb(664,9476,2,0,65535);pb(672,9501,4,-2147483648,2147483647);pb(680,9505,4,0,-1);pb(688,9518,4,-2147483648,2147483647);pb(696,9523,4,0,-1);dc(704,9537,4);dc(712,9543,8);Mb(16,9416);Mb(216,4904);Yb(64,4,4937);hb(8,4950);Pb(240,0,4966);Pb(248,0,4996);Pb(256,1,5033);Pb(264,2,5072);Pb(272,3,5103);Pb(280,4,5143);Pb(288,5,5172);Pb(296,4,5210);Pb(304,5,5240);Pb(248,0,5279);Pb(256,1,5311);Pb(264,2,5344);Pb(272,3,5377);Pb(280,4,5411);Pb(288,5,5444);Pb(312,6,5478);Pb(320,7,5509);Pb(328,7,5541);return}function Ad(b,d){b=b|0;d=d|0;var e=0,f=0;c[b>>2]=0;c[b+4>>2]=0;c[b+8>>2]=0;e=a[d+11>>0]|0;Bd(b,e<<24>>24<0?c[d+4>>2]|0:e&255);e=a[d+11>>0]|0;if(!((e<<24>>24<0?c[d+4>>2]|0:e&255)|0))return;f=0;do{e=(e<<24>>24<0?c[d>>2]|0:d)+f|0;switch(a[e>>0]|0){case 38:{Nf(b,3875)|0;break}case 34:{Nf(b,3881)|0;break}case 39:{Nf(b,3888)|0;break}case 60:{Nf(b,3895)|0;break}case 62:{Nf(b,3900)|0;break}case 96:{Nf(b,3905)|0;break}default:ie(b,e,1)|0}f=f+1|0;e=a[d+11>>0]|0}while((f|0)!=((e<<24>>24<0?c[d+4>>2]|0:e&255)|0));return}function Bd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;if(d>>>0>4294967279)Bh();f=a[b+11>>0]|0;if(f<<24>>24<0){i=c[b+4>>2]|0;e=(c[b+8>>2]&2147483647)+-1|0}else{i=f&255;e=10}d=i>>>0>d>>>0?i:d;h=d>>>0<11?10:(d+16&-16)+-1|0;do if((h|0)!=(e|0)){do if(d>>>0<11){d=c[b>>2]|0;if(f<<24>>24<0){g=0;e=d;d=b;f=12}else{ug(b,d,(f&255)+1|0)|0;Nh(d);f=14}}else{d=tf(h+1|0)|0;if(f<<24>>24<0){g=1;e=c[b>>2]|0;f=12;break}else{ug(d,b,(f&255)+1|0)|0;f=13;break}}while(0);if((f|0)==12){ug(d,e,(c[b+4>>2]|0)+1|0)|0;Nh(e);if(g)f=13;else f=14}if((f|0)==13){c[b+8>>2]=h+1|-2147483648;c[b+4>>2]=i;c[b>>2]=d;break}else if((f|0)==14){a[b+11>>0]=i;break}}while(0);return}function Cd(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0;do if(!(Zg(b,c[d+8>>2]|0)|0)){if(!(Zg(b,c[d>>2]|0)|0)){h=c[b+8>>2]|0;qc[c[(c[h>>2]|0)+24>>2]&3](h,d,e,f,g);break}if((c[d+16>>2]|0)!=(e|0)?(c[d+20>>2]|0)!=(e|0):0){c[d+32>>2]=f;if((c[d+44>>2]|0)==4)break;a[d+52>>0]=0;a[d+53>>0]=0;f=c[b+8>>2]|0;zc[c[(c[f>>2]|0)+20>>2]&3](f,d,e,e,1,g);if(a[d+53>>0]|0)if(!(a[d+52>>0]|0)){b=3;h=11}else b=3;else{b=4;h=11}if((h|0)==11){c[d+20>>2]=e;c[d+40>>2]=(c[d+40>>2]|0)+1;if((c[d+36>>2]|0)==1?(c[d+24>>2]|0)==2:0)a[d+54>>0]=1}c[d+44>>2]=b;break}if((f|0)==1)c[d+32>>2]=1}else Jf(d,e,f);while(0);return}function Dd(b,d,e,f,g,h){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0;if(Zg(b,c[d+8>>2]|0)|0)ke(d,e,f,g);else{j=a[d+52>>0]|0;k=a[d+53>>0]|0;l=c[b+12>>2]|0;a[d+52>>0]=0;a[d+53>>0]=0;Se(b+16|0,d,e,f,g,h);a:do if((l|0)>1){i=b+24|0;do{if(a[d+54>>0]|0)break a;if(!(a[d+52>>0]|0)){if(a[d+53>>0]|0?(c[b+8>>2]&1|0)==0:0)break a}else{if((c[d+24>>2]|0)==1)break a;if(!(c[b+8>>2]&2))break a}a[d+52>>0]=0;a[d+53>>0]=0;Se(i,d,e,f,g,h);i=i+8|0}while(i>>>0<(b+16+(l<<3)|0)>>>0)}while(0);a[d+52>>0]=j;a[d+53>>0]=k}return}function Ed(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;b=c[b+4>>2]|0;if(!b){l=0;return l|0}i=a[d+11>>0]|0;j=i<<24>>24<0?c[d+4>>2]|0:i&255;i=i<<24>>24<0?c[d>>2]|0:d;while(1){e=b+16|0;f=a[e+11>>0]|0;g=f<<24>>24<0?c[b+20>>2]|0:f&255;d=g>>>0<j>>>0?g:j;if((d|0)!=0?(k=Ye(i,f<<24>>24<0?c[e>>2]|0:e,d)|0,(k|0)!=0):0)if((k|0)<0)h=7;else h=8;else if(j>>>0<g>>>0)h=7;else h=8;if((h|0)!=7)if((h|0)==8){h=0;d=j>>>0<g>>>0?j:g;if((d|0)!=0?(l=Ye(f<<24>>24<0?c[e>>2]|0:e,i,d)|0,(l|0)!=0):0){if((l|0)>=0){b=1;h=14;break}}else h=10;if((h|0)==10?(0,g>>>0>=j>>>0):0){b=1;h=14;break}b=b+4|0}b=c[b>>2]|0;if(!b){b=0;h=14;break}}if((h|0)==14)return b|0;return 0}function Fd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;i=l;l=l+64|0;c[d>>2]=c[c[d>>2]>>2];if(!(Hf(a,b)|0))if(((b|0)!=0?(f=Id(b,576)|0,(f|0)!=0):0)?(c[f+8>>2]&~c[a+8>>2]|0)==0:0){a=c[a+12>>2]|0;if(!(Zg(a,c[f+12>>2]|0)|0)?!(Zg(a,608)|0):0)if((((a|0)!=0?(g=Id(a,424)|0,(g|0)!=0):0)?(e=c[f+12>>2]|0,(e|0)!=0):0)?(h=Id(e,424)|0,(h|0)!=0):0){a=i+4|0;b=a+52|0;do{c[a>>2]=0;a=a+4|0}while((a|0)<(b|0));c[i>>2]=h;c[i+8>>2]=g;c[i+12>>2]=-1;c[i+48>>2]=1;Cc[c[(c[h>>2]|0)+28>>2]&7](h,i,c[d>>2]|0,1);if((c[i+24>>2]|0)==1){c[d>>2]=c[i+16>>2];a=1}else a=0}else a=0;else a=1}else a=0;else a=1;l=i;return a|0}function Gd(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;n=(c[b>>2]|0)+1794895138|0;f=Lg(c[b+8>>2]|0,n)|0;k=Lg(c[b+12>>2]|0,n)|0;m=Lg(c[b+16>>2]|0,n)|0;a:do if((f>>>0<d>>>2>>>0?k>>>0<(d-(f<<2)|0)>>>0&m>>>0<(d-(f<<2)|0)>>>0:0)?((m|k)&3|0)==0:0){j=0;while(1){i=f>>>1;l=j+i|0;g=Lg(c[b+((l<<1)+(k>>>2)<<2)>>2]|0,n)|0;h=Lg(c[b+((l<<1)+(k>>>2)+1<<2)>>2]|0,n)|0;if(!(h>>>0<d>>>0&g>>>0<(d-h|0)>>>0)){f=0;break a}if(a[b+(h+g)>>0]|0){f=0;break a}g=cf(e,b+h|0)|0;if(!g)break;if((f|0)==1){f=0;break a}else{j=(g|0)<0?j:l;f=(g|0)<0?i:f-i|0}}g=Lg(c[b+((l<<1)+(m>>>2)<<2)>>2]|0,n)|0;f=Lg(c[b+((l<<1)+(m>>>2)+1<<2)>>2]|0,n)|0;if(f>>>0<d>>>0&g>>>0<(d-f|0)>>>0)f=(a[b+(f+g)>>0]|0)==0?b+f|0:0;else f=0}else f=0;while(0);return f|0}function Hd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;h=l;l=l+16|0;f=qd(a,h,b)|0;e=c[f>>2]|0;if(e|0){a=e;a=a+28|0;lf(a,d)|0;l=h;return}g=tf(40)|0;Xd(g+16|0,b);c[g+28>>2]=0;c[g+28+4>>2]=0;c[g+28+8>>2]=0;e=c[h>>2]|0;c[g>>2]=0;c[g+4>>2]=0;c[g+8>>2]=e;c[f>>2]=g;e=c[c[a>>2]>>2]|0;if(!e)e=g;else{c[a>>2]=e;e=c[f>>2]|0}fd(c[a+4>>2]|0,e);c[a+8>>2]=(c[a+8>>2]|0)+1;a=g;a=a+28|0;lf(a,d)|0;l=h;return}function Id(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,i=0;i=l;l=l+64|0;h=c[d>>2]|0;g=d+(c[h+-8>>2]|0)|0;h=c[h+-4>>2]|0;c[i>>2]=e;c[i+4>>2]=d;c[i+8>>2]=440;d=Zg(h,e)|0;e=i+12|0;f=e+40|0;do{c[e>>2]=0;e=e+4|0}while((e|0)<(f|0));b[i+12+40>>1]=0;a[i+12+42>>0]=0;a:do if(d){c[i+48>>2]=1;zc[c[(c[h>>2]|0)+20>>2]&3](h,i,g,g,1,0);d=(c[i+24>>2]|0)==1?g:0}else{qc[c[(c[h>>2]|0)+24>>2]&3](h,i,g,1,0);switch(c[i+36>>2]|0){case 0:{d=((c[i+40>>2]|0)==1?(c[i+28>>2]|0)==1:0)&(c[i+32>>2]|0)==1?c[i+20>>2]|0:0;break a}case 1:break;default:{d=0;break a}}if((c[i+24>>2]|0)!=1?!(((c[i+40>>2]|0)==0?(c[i+28>>2]|0)==1:0)&(c[i+32>>2]|0)==1):0){d=0;break}d=c[i+16>>2]|0}while(0);l=i;return d|0}function Jd(b,d){b=b|0;d=d|0;var e=0,f=0;a:do if((d|0)!=0&(b&3|0)!=0){e=d;while(1){if(!(a[b>>0]|0))break a;b=b+1|0;d=e+-1|0;if((d|0)!=0&(b&3|0)!=0)e=d;else{e=d;d=(d|0)!=0;f=4;break}}}else{e=d;d=(d|0)!=0;f=4}while(0);b:do if((f|0)==4)if(d){if(a[b>>0]|0){c:do if(e>>>0>3)while(1){d=c[b>>2]|0;if((d&-2139062144^-2139062144)&d+-16843009|0)break;b=b+4|0;e=e+-4|0;if(e>>>0<=3){f=10;break c}}else f=10;while(0);if((f|0)==10)if(!e){e=0;break}while(1){if(!(a[b>>0]|0))break b;b=b+1|0;e=e+-1|0;if(!e){e=0;break}}}}else e=0;while(0);return (e|0?b:0)|0}function Kd(b,d,e,f,g,h,i,j){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;var k=0,l=0;if((1073741806-d|0)>>>0<e>>>0)Bh();if((a[b+8+3>>0]|0)<0)l=c[b>>2]|0;else l=b;if(d>>>0<536870887){e=(e+d|0)>>>0<d<<1>>>0?d<<1:e+d|0;e=e>>>0<2?2:e+4&-4;if(e>>>0>1073741823)Ib();else k=e}else k=1073741807;e=tf(k<<2)|0;if(g|0)Dg(e,l,g);if(i|0)Dg(e+(g<<2)|0,j,i);if(f-h-g|0)Dg(e+(g<<2)+(i<<2)|0,l+(g<<2)+(h<<2)|0,f-h-g|0);if((d|0)!=1)Nh(l);c[b>>2]=e;c[b+8>>2]=k|-2147483648;c[b+4>>2]=f-h+i;dh(e+(f-h+i<<2)|0,0);return}function Ld(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=c[a+4>>2]|0;d=c[a+8>>2]|0;if((h|0)!=(d|0)){c[h>>2]=c[b>>2];c[a+4>>2]=h+4;return}g=c[a>>2]|0;if(((h-g>>2)+1|0)>>>0>1073741823)Bh();d=d-g>>2>>>0<536870911?(d-g>>1>>>0<((h-g>>2)+1|0)>>>0?(h-g>>2)+1|0:d-g>>1):1073741823;do if(d)if(d>>>0>1073741823){h=qb(8)|0;Ag(h,4528);c[h>>2]=1664;jc(h|0,512,10)}else{f=tf(d<<2)|0;break}else f=0;while(0);e=f+(h-g>>2<<2)|0;c[e>>2]=c[b>>2];if((h-g|0)>0)wd(e+(0-(h-g>>2)<<2)|0,g|0,h-g|0)|0;c[a>>2]=e+(0-(h-g>>2)<<2);c[a+4>>2]=e+4;c[a+8>>2]=f+(d<<2);if(!g)return;Nh(g);return}function Md(b,d,e,f,g,h,i,j){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;var k=0,l=0;if((-18-d|0)>>>0<e>>>0)Bh();if((a[b+11>>0]|0)<0)l=c[b>>2]|0;else l=b;if(d>>>0<2147483623){e=(e+d|0)>>>0<d<<1>>>0?d<<1:e+d|0;e=e>>>0<11?11:e+16&-16}else e=-17;k=tf(e)|0;if(g|0)ug(k,l,g)|0;if(i|0)ug(k+g|0,j,i)|0;if(f-h-g|0)ug(k+g+i|0,l+g+h|0,f-h-g|0)|0;if((d|0)!=10)Nh(l);c[b>>2]=k;c[b+8>>2]=e|-2147483648;c[b+4>>2]=f-h+i;eh(k+(f-h+i)|0,0);return}function Nd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;g=c[a>>2]|0;h=(c[a+4>>2]|0)-g|0;if(((h>>2)+1|0)>>>0>1073741823)Bh();d=(c[a+8>>2]|0)-g|0;d=d>>2>>>0<536870911?(d>>1>>>0<((h>>2)+1|0)>>>0?(h>>2)+1|0:d>>1):1073741823;do if(d)if(d>>>0>1073741823){h=qb(8)|0;Ag(h,4528);c[h>>2]=1664;jc(h|0,512,10)}else{f=tf(d<<2)|0;break}else f=0;while(0);e=f+(h>>2<<2)|0;c[e>>2]=c[b>>2];if((h|0)>0)wd(e+(0-(h>>2)<<2)|0,g|0,h|0)|0;c[a>>2]=e+(0-(h>>2)<<2);c[a+4>>2]=e+4;c[a+8>>2]=f+(d<<2);if(!g)return;Nh(g);return}function Od(){var a=0,b=0,d=0,e=0;e=l;l=l+48|0;a=Lf()|0;if(a|0?(d=c[a>>2]|0,d|0):0){b=c[d+48>>2]|0;a=c[d+48+4>>2]|0;if(!((b&-256|0)==1126902528&(a|0)==1129074247)){c[e+24>>2]=8818;ng(8768,e+24|0)}if((b|0)==1126902529&(a|0)==1129074247)a=c[d+44>>2]|0;else a=d+80|0;c[e+36>>2]=a;d=c[d>>2]|0;a=c[d+4>>2]|0;if(me(416,d,e+36|0)|0){d=c[e+36>>2]|0;d=uc[c[(c[d>>2]|0)+8>>2]&31](d)|0;c[e>>2]=8818;c[e+4>>2]=a;c[e+8>>2]=d;ng(8682,e)}else{c[e+16>>2]=8818;c[e+16+4>>2]=a;ng(8727,e+16|0)}}ng(8806,e+32|0)}function Pd(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=c[e+16>>2]|0;if(!f){if(!(ef(e)|0)){g=c[e+16>>2]|0;h=5}}else{g=f;h=5}a:do if((h|0)==5){f=c[e+20>>2]|0;if((g-f|0)>>>0<d>>>0){pc[c[e+36>>2]&31](e,b,d)|0;break}b:do if((a[e+75>>0]|0)>-1){h=d;while(1){if(!h){g=b;break b}g=h+-1|0;if((a[b+g>>0]|0)==10)break;else h=g}if((pc[c[e+36>>2]&31](e,b,h)|0)>>>0<h>>>0)break a;g=b+h|0;d=d-h|0;f=c[e+20>>2]|0}else g=b;while(0);wd(f|0,g|0,d|0)|0;c[e+20>>2]=(c[e+20>>2]|0)+d}while(0);return}function Qd(b,d){b=b|0;d=d|0;var e=0;e=l;l=l+32|0;Kc(e+12|0,b);Kc(e,d);b=tf(64)|0;oe(b,e+12|0);c[b+12>>2]=0;c[b+12+4>>2]=0;c[b+12+8>>2]=0;oe(b+24|0,e);c[b+40>>2]=0;c[b+44>>2]=0;c[b+36>>2]=b+40;c[b+52>>2]=0;c[b+56>>2]=0;c[b+60>>2]=0;if((a[e+11>>0]|0)<0)Nh(c[e>>2]|0);if((a[e+12+11>>0]|0)>=0){l=e;return b|0}Nh(c[e+12>>2]|0);l=e;return b|0}function Rd(b,d){b=b|0;d=d|0;var e=0,f=0;e=c[d>>2]|0;c[b>>2]=0;c[b+4>>2]=0;c[b+8>>2]=0;if(e>>>0>1073741807)Bh();do if(e>>>0<2){a[b+8+3>>0]=e;if(!e){d=b;e=d+(e<<2)|0;c[e>>2]=0;return}}else if((e+4&-4)>>>0>1073741823){e=qb(8)|0;Ag(e,4528);c[e>>2]=1664;jc(e|0,512,10)}else{f=tf((e+4&-4)<<2)|0;c[b>>2]=f;c[b+8>>2]=e+4&-4|-2147483648;c[b+4>>2]=e;b=f;break}while(0);Ef(b,d+4|0,e)|0;f=b;f=f+(e<<2)|0;c[f>>2]=0;return}function Sd(b){b=b|0;var d=0,e=0,f=0;d=c[b+52>>2]|0;e=(c[b+56>>2]|0)-d>>2;if(e)do{e=e+-1|0;f=c[d+(e<<2)>>2]|0;if(f){Sd(f);Nh(f);d=c[b+52>>2]|0}}while((e|0)!=0);if(d|0){e=c[b+56>>2]|0;if((e|0)!=(d|0))c[b+56>>2]=e+(~((e+-4-d|0)>>>2)<<2);Nh(d)}qe(c[b+40>>2]|0);if((a[b+24+11>>0]|0)<0)Nh(c[b+24>>2]|0);if((a[b+12+11>>0]|0)<0)Nh(c[b+12>>2]|0);if((a[b+11>>0]|0)>=0)return;Nh(c[b>>2]|0);return}function Td(b,d){b=b|0;d=d|0;do if(b){if(d>>>0<128){a[b>>0]=d;b=1;break}if(!(c[c[453]>>2]|0))if((d&-128|0)==57216){a[b>>0]=d;b=1;break}else{c[2561]=84;b=-1;break}if(d>>>0<2048){a[b>>0]=d>>>6|192;a[b+1>>0]=d&63|128;b=2;break}if(d>>>0<55296|(d&-8192|0)==57344){a[b>>0]=d>>>12|224;a[b+1>>0]=d>>>6&63|128;a[b+2>>0]=d&63|128;b=3;break}if((d+-65536|0)>>>0<1048576){a[b>>0]=d>>>18|240;a[b+1>>0]=d>>>12&63|128;a[b+2>>0]=d>>>6&63|128;a[b+3>>0]=d&63|128;b=4;break}else{c[2561]=84;b=-1;break}}else b=1;while(0);return b|0}function Ud(b,d){b=b|0;d=d|0;var e=0,f=0;e=l;l=l+16|0;Kc(e,b);f=c[d>>2]|0;b=tf(64)|0;oe(b,e);c[b+40>>2]=0;c[b+44>>2]=0;c[b+12>>2]=0;c[b+12+4>>2]=0;c[b+12+8>>2]=0;c[b+12+12>>2]=0;c[b+12+16>>2]=0;c[b+12+20>>2]=0;c[b+36>>2]=b+40;c[b+52>>2]=0;c[b+56>>2]=0;c[b+60>>2]=0;d=tf(4)|0;c[b+52>>2]=d;c[b+60>>2]=d+4;c[d>>2]=f;c[b+56>>2]=d+4;if((a[e+11>>0]|0)>=0){l=e;return b|0}Nh(c[e>>2]|0);l=e;return b|0}function Vd(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0;h=l;l=l+16|0;c[g>>2]=e;d=kg(c[b+8>>2]|0)|0;e=Td(h,0)|0;if(d|0)kg(d)|0;switch(e|0){case 0:case -1:{d=2;break}default:{d=c[g>>2]|0;if((e+-1|0)>>>0<=(f-d|0)>>>0)if((e+-1|0)!=0?(f=a[h>>0]|0,c[g>>2]=d+1,a[d>>0]=f,(e+-2|0)!=0):0){b=h;d=e+-2|0;do{b=b+1|0;f=c[g>>2]|0;e=a[b>>0]|0;c[g>>2]=f+1;a[f>>0]=e;d=d+-1|0}while((d|0)!=0);d=0}else d=0;else d=1}}l=h;return d|0}function Wd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;h=l;l=l+32|0;a:do if(!(ch(d)|0)){f=0;g=0;do{e=(1<<g&a|0)!=0;if((d|0)==0|e)e=ad(g,e?b:10256)|0;else e=c[d+(g<<2)>>2]|0;f=((e|0)!=0&1)+f|0;c[h+(g<<2)>>2]=e;g=g+1|0}while((g|0)!=6);switch(f|0){case 0:{d=10184;break a}case 1:{if((c[h>>2]|0)==1084){d=1132;break a}break}default:{}}}else{e=0;do{if(1<<e&a|0)c[d+(e<<2)>>2]=ad(e,b)|0;e=e+1|0}while((e|0)!=6)}while(0);l=h;return d|0}function Xd(b,d){b=b|0;d=d|0;var e=0,f=0;c[b>>2]=0;c[b+4>>2]=0;c[b+8>>2]=0;if((a[d+8+3>>0]|0)<0){f=c[d>>2]|0;d=c[d+4>>2]|0;if(d>>>0>1073741807)Bh();do if(d>>>0>=2)if((d+4&-4)>>>0>1073741823)Ib();else{e=tf((d+4&-4)<<2)|0;c[b>>2]=e;c[b+8>>2]=d+4&-4|-2147483648;c[b+4>>2]=d;break}else{a[b+8+3>>0]=d;e=b}while(0);Dg(e,f,d);dh(e+(d<<2)|0,0)}else{c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2]}return}function Yd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+224|0;e=g+80|0;f=e+40|0;do{c[e>>2]=0;e=e+4|0}while((e|0)<(f|0));c[g+120>>2]=c[d>>2];if((Jc(0,b,g+120|0,g,g+80|0)|0)>=0){e=c[340]|0;if((a[1434]|0)<1)c[340]=e&-33;if(!(c[352]|0)){d=c[351]|0;c[351]=g+136;c[347]=g+136;c[345]=g+136;c[352]=80;c[344]=g+136+80;Jc(1360,b,g+120|0,g,g+80|0)|0;if(d|0){pc[c[1396>>2]&31](1360,0,0)|0;c[351]=d;c[352]=0;c[344]=0;c[347]=0;c[345]=0}}else Jc(1360,b,g+120|0,g,g+80|0)|0;c[340]=c[340]|e&32}l=g;return}function Zd(b,d){b=b|0;d=d|0;var e=0.0,f=0,g=0,h=0;h=l;l=l+16|0;e=+Oa(d|0,16,h|0);f=c[h>>2]|0;g=c[~~e>>>0>>2]|0;c[b>>2]=0;c[b+4>>2]=0;c[b+8>>2]=0;if(g>>>0>4294967279)Bh();if(g>>>0<11){a[b+11>>0]=g;if(!g){g=b+g|0;a[g>>0]=0;bb(f|0);l=h;return}else d=b}else{d=tf(g+16&-16)|0;c[b>>2]=d;c[b+8>>2]=g+16&-16|-2147483648;c[b+4>>2]=g}wd(d|0,(~~e>>>0)+4|0,g|0)|0;b=d;g=b+g|0;a[g>>0]=0;bb(f|0);l=h;return}function _d(b){b=b|0;var d=0;a:do if(!(b&3))d=4;else while(1){switch(a[b>>0]|0){case 0:case 58:break a;default:{}}b=b+1|0;if(!(b&3)){d=4;break a}}while(0);b:do if((d|0)==4){d=c[b>>2]|0;c:do if(!((d&-2139062144^-2139062144)&d+-16843009))do{if((d&-2139062144^-2139062144)&(d^976894522)+-16843009|0)break c;b=b+4|0;d=c[b>>2]|0}while(!((d&-2139062144^-2139062144)&d+-16843009|0));while(0);while(1)switch(a[b>>0]|0){case 0:case 58:break b;default:b=b+1|0}}while(0);return b|0}function $d(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;f=b+e|0;d=d&255;if((e|0)>=67){while(b&3){a[b>>0]=d;b=b+1|0}g=d|d<<8|d<<16|d<<24;while((b|0)<=((f&-4)-64|0)){c[b>>2]=g;c[b+4>>2]=g;c[b+8>>2]=g;c[b+12>>2]=g;c[b+16>>2]=g;c[b+20>>2]=g;c[b+24>>2]=g;c[b+28>>2]=g;c[b+32>>2]=g;c[b+36>>2]=g;c[b+40>>2]=g;c[b+44>>2]=g;c[b+48>>2]=g;c[b+52>>2]=g;c[b+56>>2]=g;c[b+60>>2]=g;b=b+64|0}while((b|0)<(f&-4|0)){c[b>>2]=g;b=b+4|0}}while((b|0)<(f|0)){a[b>>0]=d;b=b+1|0}return f-e|0}function ae(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;if((1073741807-d|0)>>>0<e>>>0)Bh();if((a[b+8+3>>0]|0)<0)i=c[b>>2]|0;else i=b;if(d>>>0<536870887){e=(e+d|0)>>>0<d<<1>>>0?d<<1:e+d|0;e=e>>>0<2?2:e+4&-4;if(e>>>0>1073741823)Ib();else h=e}else h=1073741807;e=tf(h<<2)|0;if(g|0)Dg(e,i,g);if(f-g|0)Dg(e+(g<<2)|0,i+(g<<2)|0,f-g|0);if((d|0)!=1)Nh(i);c[b>>2]=e;c[b+8>>2]=h|-2147483648;return}function be(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;f=a[b+8+3>>0]|0;if(f<<24>>24<0)g=(c[b+8>>2]&2147483647)+-1|0;else g=1;do if(g>>>0>=e>>>0){if(f<<24>>24<0)f=c[b>>2]|0;else f=b;Cg(f,d,e);dh(f+(e<<2)|0,0);if((a[b+8+3>>0]|0)<0){c[b+4>>2]=e;break}else{a[b+8+3>>0]=e;break}}else{if(f<<24>>24<0)f=c[b+4>>2]|0;else f=f&255;Kd(b,g,e-g|0,f,0,f,e,d)}while(0);return b|0}function ce(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;do if(!(Zg(b,c[d+8>>2]|0)|0)){if(Zg(b,c[d>>2]|0)|0){if((c[d+16>>2]|0)!=(e|0)?(c[d+20>>2]|0)!=(e|0):0){c[d+32>>2]=f;c[d+20>>2]=e;c[d+40>>2]=(c[d+40>>2]|0)+1;if((c[d+36>>2]|0)==1?(c[d+24>>2]|0)==2:0)a[d+54>>0]=1;c[d+44>>2]=4;break}if((f|0)==1)c[d+32>>2]=1}}else Jf(d,e,f);while(0);return}function de(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;a:do if(!(Zg(b,c[d+8>>2]|0)|0)){h=c[b+12>>2]|0;Ze(b+16|0,d,e,f);if((h|0)>1){g=b+24|0;do{Ze(g,d,e,f);if(a[d+54>>0]|0)break a;g=g+8|0}while(g>>>0<(b+16+(h<<3)|0)>>>0)}}else Le(d,e,f);while(0);return}function ee(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;f=a[b+11>>0]|0;if(f<<24>>24<0)g=(c[b+8>>2]&2147483647)+-1|0;else g=10;do if(g>>>0>=e>>>0){if(f<<24>>24<0)f=c[b>>2]|0;else f=b;tg(f,d,e)|0;eh(f+e|0,0);if((a[b+11>>0]|0)<0){c[b+4>>2]=e;break}else{a[b+11>>0]=e;break}}else{if(f<<24>>24<0)f=c[b+4>>2]|0;else f=f&255;Md(b,g,e-g|0,f,0,f,e,d)}while(0);return b|0}function fe(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;g=a[b+8+3>>0]|0;if(g<<24>>24<0){f=(c[b+8>>2]&2147483647)+-1|0;h=c[b+4>>2]|0}else{f=1;h=g&255}i=h+e|0;if((f-h|0)>>>0>=e>>>0){if(e|0){if(g<<24>>24<0)f=c[b>>2]|0;else f=b;Dg(f+(h<<2)|0,d,e);if((a[b+8+3>>0]|0)<0)c[b+4>>2]=i;else a[b+8+3>>0]=i;dh(f+(i<<2)|0,0)}}else Kd(b,f,i-f|0,h,h,0,e,d);return b|0}function ge(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0;g=l;l=l+32|0;b=c[b>>2]|0;Rd(g+12|0,e);Rd(g,f);vc[b&7](d,g+12|0,g);if((a[g+8+3>>0]|0)<0)Nh(c[g>>2]|0);if((a[g+12+8+3>>0]|0)>=0){l=g;return}Nh(c[g+12>>2]|0);l=g;return}function he(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+16|0;Kc(g,b);b=tf(64)|0;c[b+40>>2]=0;c[b+44>>2]=0;e=b;f=e+36|0;do{c[e>>2]=0;e=e+4|0}while((e|0)<(f|0));c[b+36>>2]=b+40;c[b+52>>2]=0;c[b+56>>2]=0;c[b+60>>2]=0;if(d)mf(b+24|0,g)|0;else mf(b,g)|0;if((a[g+11>>0]|0)>=0){l=g;return b|0}Nh(c[g>>2]|0);l=g;return b|0}function ie(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;g=a[b+11>>0]|0;if(g<<24>>24<0){f=(c[b+8>>2]&2147483647)+-1|0;h=c[b+4>>2]|0}else{f=10;h=g&255}i=h+e|0;if((f-h|0)>>>0>=e>>>0){if(e|0){if(g<<24>>24<0)f=c[b>>2]|0;else f=b;ug(f+h|0,d,e)|0;if((a[b+11>>0]|0)<0)c[b+4>>2]=i;else a[b+11>>0]=i;eh(f+i|0,0)}}else Md(b,f,i-f|0,h,h,0,e,d);return b|0}function je(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0;g=l;l=l+32|0;Rd(g+12|0,d);Rd(g,f);b=pc[b&31](g+12|0,e,g)|0;if((a[g+8+3>>0]|0)<0)Nh(c[g>>2]|0);if((a[g+12+8+3>>0]|0)>=0){l=g;return b|0}Nh(c[g+12>>2]|0);l=g;return b|0}function ke(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;a[b+53>>0]=1;do if((c[b+4>>2]|0)==(e|0)){a[b+52>>0]=1;e=c[b+16>>2]|0;if(!e){c[b+16>>2]=d;c[b+24>>2]=f;c[b+36>>2]=1;if(!((f|0)==1?(c[b+48>>2]|0)==1:0))break;a[b+54>>0]=1;break}if((e|0)!=(d|0)){c[b+36>>2]=(c[b+36>>2]|0)+1;a[b+54>>0]=1;break}e=c[b+24>>2]|0;if((e|0)==2){c[b+24>>2]=f;e=f}if((e|0)==1?(c[b+48>>2]|0)==1:0)a[b+54>>0]=1}while(0);return}function le(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;if(d|0){e=a[b+8+3>>0]|0;if(e<<24>>24<0){f=(c[b+8>>2]&2147483647)+-1|0;g=c[b+4>>2]|0}else{f=1;g=e&255}h=g+d|0;if((f-g|0)>>>0<d>>>0){ae(b,f,h-f|0,g,g);e=a[b+8+3>>0]|0}if(e<<24>>24<0)e=c[b>>2]|0;else e=b;Pg(e+(g<<2)|0,d);if((a[b+8+3>>0]|0)<0)c[b+4>>2]=h;else a[b+8+3>>0]=h;dh(e+(h<<2)|0,0)}return b|0}function me(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+64|0;if(!(Zg(a,b)|0))if((b|0)!=0?(f=Id(b,424)|0,(f|0)!=0):0){b=g+4|0;e=b+52|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(e|0));c[g>>2]=f;c[g+8>>2]=a;c[g+12>>2]=-1;c[g+48>>2]=1;Cc[c[(c[f>>2]|0)+28>>2]&7](f,g,c[d>>2]|0,1);if((c[g+24>>2]|0)==1){c[d>>2]=c[g+16>>2];b=1}else b=0}else b=0;else b=1;l=g;return b|0}function ne(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;if(d|0){e=a[b+11>>0]|0;if(e<<24>>24<0){f=(c[b+8>>2]&2147483647)+-1|0;g=c[b+4>>2]|0}else{f=10;g=e&255}h=g+d|0;if((f-g|0)>>>0<d>>>0){pe(b,f,h-f|0,g,g);e=a[b+11>>0]|0}if(e<<24>>24<0)e=c[b>>2]|0;else e=b;Fg(e+g|0,d)|0;if((a[b+11>>0]|0)<0)c[b+4>>2]=h;else a[b+11>>0]=h;eh(e+h|0,0)}return b|0}function oe(b,d){b=b|0;d=d|0;var e=0,f=0;c[b>>2]=0;c[b+4>>2]=0;c[b+8>>2]=0;if((a[d+11>>0]|0)<0){e=c[d>>2]|0;d=c[d+4>>2]|0;if(d>>>0>4294967279)Bh();if(d>>>0<11)a[b+11>>0]=d;else{f=tf(d+16&-16)|0;c[b>>2]=f;c[b+8>>2]=d+16&-16|-2147483648;c[b+4>>2]=d;b=f}ug(b,e,d)|0;eh(b+d|0,0)}else{c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2]}return}function pe(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;if((-17-d|0)>>>0<e>>>0)Bh();if((a[b+11>>0]|0)<0)i=c[b>>2]|0;else i=b;if(d>>>0<2147483623){e=(e+d|0)>>>0<d<<1>>>0?d<<1:e+d|0;e=e>>>0<11?11:e+16&-16}else e=-17;h=tf(e)|0;if(g|0)ug(h,i,g)|0;if(f-g|0)ug(h+g|0,i+g|0,f-g|0)|0;if((d|0)!=10)Nh(i);c[b>>2]=h;c[b+8>>2]=e|-2147483648;return}function qe(b){b=b|0;if(!b)return;qe(c[b>>2]|0);qe(c[b+4>>2]|0);if((a[b+28+11>>0]|0)<0)Nh(c[b+28>>2]|0);if((a[b+16+11>>0]|0)<0)Nh(c[b+16>>2]|0);Nh(b);return}function re(b){b=b|0;if(!b)return;re(c[b>>2]|0);re(c[b+4>>2]|0);if((a[b+36+3>>0]|0)<0)Nh(c[b+28>>2]|0);if((a[b+24+3>>0]|0)<0)Nh(c[b+16>>2]|0);Nh(b);return}function se(b){b=b|0;var d=0;d=l;l=l+16|0;Kc(d,b);b=tf(64)|0;oe(b,d);c[b+40>>2]=0;c[b+44>>2]=0;c[b+12>>2]=0;c[b+12+4>>2]=0;c[b+12+8>>2]=0;c[b+12+12>>2]=0;c[b+12+16>>2]=0;c[b+12+20>>2]=0;c[b+36>>2]=b+40;c[b+52>>2]=0;c[b+56>>2]=0;c[b+60>>2]=0;if((a[d+11>>0]|0)>=0){l=d;return b|0}Nh(c[d>>2]|0);l=d;return b|0}function te(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;f=l;l=l+32|0;Rd(f+12|0,d);Rd(f,e);b=Ac[b&15](f+12|0,f)|0;if((a[f+8+3>>0]|0)<0)Nh(c[f>>2]|0);if((a[f+12+8+3>>0]|0)>=0){l=f;return b|0}Nh(c[f+12>>2]|0);l=f;return b|0}function ue(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;f=l;l=l+16|0;b=c[b>>2]|0;Rd(f,e);vc[b&7](f+12|0,d,f);_b(c[f+12>>2]|0);b=c[f+12>>2]|0;Va(b|0);if((a[f+8+3>>0]|0)>=0){l=f;return b|0}Nh(c[f>>2]|0);l=f;return b|0}function ve(b){b=b|0;if(!b)return;ve(c[b>>2]|0);ve(c[b+4>>2]|0);if((a[b+16+11>>0]|0)<0)Nh(c[b+16>>2]|0);Nh(b);return}function we(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0;a:do if((d|0)==(e|0)|(f|0)==0)g=0;else{j=0;g=0;while(1){i=kg(c[a+8>>2]|0)|0;h=Xg(d,e-d|0,b)|0;if(i|0)kg(i)|0;switch(h|0){case -2:case -1:break a;case 0:{h=1;break}default:{}}d=d+h|0;g=h+g|0;j=j+1|0;if((d|0)==(e|0)|j>>>0>=f>>>0)break a}}while(0);return g|0}function xe(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0.0,i=0;g=l;l=l+16|0;if((a[9560]|0)==0?Eg(9560)|0:0)c[2405]=Nb(2,792)|0;i=c[2405]|0;c[g>>2]=c[f>>2];h=+ab(i|0,d|0,e|0,g+8|0,g|0);f=c[g+8>>2]|0;Rd(b,~~h>>>0);bb(f|0);l=g;return}function ye(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0;g=l;l=l+16|0;Rd(g+4|0,d);c[g>>2]=f;b=pc[b&31](g+4|0,e,g)|0;if((a[g+4+8+3>>0]|0)>=0){l=g;return b|0}Nh(c[g+4>>2]|0);l=g;return b|0}function ze(b,d){b=b|0;d=d|0;var e=0,f=0;f=a[b+8+3>>0]|0;if(f<<24>>24<0)e=c[b+4>>2]|0;else e=f&255;do if(e>>>0>=d>>>0)if(f<<24>>24<0){dh((c[b>>2]|0)+(d<<2)|0,0);c[b+4>>2]=d;break}else{dh(b+(d<<2)|0,0);a[b+8+3>>0]=d;break}else le(b,d-e|0)|0;while(0);return}function Ae(b){b=b|0;var d=0,e=0,f=0;a:do if(!(b&3)){d=b;f=4}else{d=b;e=b;while(1){if(!(a[d>>0]|0)){d=e;break a}d=d+1|0;e=d;if(!(e&3)){f=4;break}}}while(0);if((f|0)==4){while(1){e=c[d>>2]|0;if(!((e&-2139062144^-2139062144)&e+-16843009))d=d+4|0;else break}if((e&255)<<24>>24)do d=d+1|0;while((a[d>>0]|0)!=0)}return d-b|0}function Be(b,d){b=b|0;d=d|0;var e=0,f=0;e=l;l=l+16|0;c[e>>2]=d;tc[b&7](e+4|0,e);f=a[e+4+8+3>>0]|0;d=f<<24>>24<0?c[e+4+4>>2]|0:f&255;b=Dc((d<<2)+4|0)|0;c[b>>2]=d;Ef(b+4|0,f<<24>>24<0?c[e+4>>2]|0:e+4|0,d)|0;if((a[e+4+8+3>>0]|0)>=0){l=e;return b|0}Nh(c[e+4>>2]|0);l=e;return b|0}function Ce(b,d){b=b|0;d=d|0;var e=0,f=0;e=a[b+11>>0]|0;if(e<<24>>24<0)f=c[b+4>>2]|0;else f=e&255;do if(f>>>0>=d>>>0)if(e<<24>>24<0){eh((c[b>>2]|0)+d|0,0);c[b+4>>2]=d;break}else{eh(b+d|0,0);a[b+11>>0]=d;break}else ne(b,d-f|0)|0;while(0);return}function De(a,b){a=+a;b=b|0;var d=0,e=0,f=0;h[j>>3]=a;d=c[j>>2]|0;e=c[j+4>>2]|0;f=_f(d|0,e|0,52)|0;switch(f&2047){case 0:{if(a!=0.0){a=+De(a*18446744073709551616.0,b);d=(c[b>>2]|0)+-64|0}else d=0;c[b>>2]=d;break}case 2047:break;default:{c[b>>2]=(f&2047)+-1022;c[j>>2]=d;c[j+4>>2]=e&-2146435073|1071644672;a=+h[j>>3]}}return +a}function Ee(b,e){b=b|0;e=e|0;var f=0,g=0;g=0;while(1){if((d[6534+g>>0]|0)==(b|0)){b=2;break}f=g+1|0;if((f|0)==87){f=6622;g=87;b=5;break}else g=f}if((b|0)==2)if(!g)f=6622;else{f=6622;b=5}if((b|0)==5)while(1){do{b=f;f=f+1|0}while((a[b>>0]|0)!=0);g=g+-1|0;if(!g)break;else b=5}return vh(f,c[e+20>>2]|0)|0}function Fe(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0;g=l;l=l+16|0;Rd(g,d);b=pc[b&31](g,e,f)|0;if((a[g+8+3>>0]|0)>=0){l=g;return b|0}Nh(c[g>>2]|0);l=g;return b|0}function Ge(b,c,d){b=b|0;c=c|0;d=d|0;var e=0;if(c>>>0>0|(c|0)==0&b>>>0>4294967295){while(1){e=Kf(b|0,c|0,10,0)|0;d=d+-1|0;a[d>>0]=e&255|48;e=b;b=Mg(b|0,c|0,10,0)|0;if(!(c>>>0>9|(c|0)==9&e>>>0>4294967295))break;else c=z}c=b}else c=b;if(c)while(1){d=d+-1|0;a[d>>0]=(c>>>0)%10|0|48;if(c>>>0<10)break;else c=(c>>>0)/10|0}return d|0}function He(){var b=0,e=0,f=0;f=l;l=l+16|0;a[f>>0]=10;b=c[344]|0;if(!b)if(!(ef(1360)|0)){b=c[344]|0;e=4}else b=-1;else e=4;do if((e|0)==4){e=c[345]|0;if(!(e>>>0>=b>>>0|(a[1435]|0)==10)){c[345]=e+1;a[e>>0]=10;b=10;break}if((pc[c[1396>>2]&31](1360,f,1)|0)==1)b=d[f>>0]|0;else b=-1}while(0);l=f;return b|0}function Ie(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;f=a[b+11>>0]|0;if(f<<24>>24<0)g=c[b+4>>2]|0;else g=f&255;if((e|0)==-1)Bh();if(f<<24>>24<0)b=c[b>>2]|0;f=g>>>0>e>>>0;b=ig(b,d,f?e:g)|0;if(!b)return (g>>>0<e>>>0?-1:f&1)|0;else return b|0;return 0}function Je(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;f=l;l=l+16|0;Rd(f+4|0,d);c[f>>2]=e;b=Ac[b&15](f+4|0,f)|0;if((a[f+4+8+3>>0]|0)>=0){l=f;return b|0}Nh(c[f+4>>2]|0);l=f;return b|0}function Ke(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;f=l;l=l+16|0;Rd(f,d);b=Ac[b&15](f,e)|0;if((a[f+8+3>>0]|0)>=0){l=f;return b|0}Nh(c[f>>2]|0);l=f;return b|0}function Le(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;f=c[b+16>>2]|0;do if(f){if((f|0)!=(d|0)){c[b+36>>2]=(c[b+36>>2]|0)+1;c[b+24>>2]=2;a[b+54>>0]=1;break}if((c[b+24>>2]|0)==2)c[b+24>>2]=e}else{c[b+16>>2]=d;c[b+24>>2]=e;c[b+36>>2]=1}while(0);return}function Me(a,b,d,e,f,g,h,i){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;b=l;l=l+16|0;c[b+4>>2]=d;c[b>>2]=g;h=gd(d,e,b+4|0,g,h,b,c[a+12>>2]|0,c[a+16>>2]|0)|0;c[f>>2]=c[b+4>>2];c[i>>2]=c[b>>2];l=b;return h|0}function Ne(a,b,d,e,f,g,h,i){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;b=l;l=l+16|0;c[b+4>>2]=d;c[b>>2]=g;h=_c(d,e,b+4|0,g,h,b,c[a+12>>2]|0,c[a+16>>2]|0)|0;c[f>>2]=c[b+4>>2];c[i>>2]=c[b>>2];l=b;return h|0}function Oe(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0;f=l;l=l+256|0;if((c|0)>(d|0)&(e&73728|0)==0){$d(f|0,b|0,((c-d|0)>>>0<256?c-d|0:256)|0)|0;if((c-d|0)>>>0>255){b=c-d|0;do{Ig(a,f,256);b=b+-256|0}while(b>>>0>255);b=c-d&255}else b=c-d|0;Ig(a,f,b)}l=f;return}function Pe(b,d){b=b|0;d=d|0;var e=0;e=l;l=l+16|0;Rd(e,d);b=uc[b&31](e)|0;if((a[e+8+3>>0]|0)>=0){l=e;return b|0}Nh(c[e>>2]|0);l=e;return b|0}function Qe(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;if(Zg(a,c[b+8>>2]|0)|0)ke(b,d,e,f);else{a=c[a+8>>2]|0;zc[c[(c[a>>2]|0)+20>>2]&3](a,b,d,e,f,g)}return}function Re(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;h=l;l=l+16|0;f=c[a>>2]|0;g=c[a+4>>2]|0;if(!(g&1))a=f;else a=c[(c[b+(g>>1)>>2]|0)+f>>2]|0;c[h>>2]=e;vc[a&7](b+(g>>1)|0,d,h);l=h;return}function Se(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;i=c[a+4>>2]|0;if(!(i&1))h=i>>8;else h=c[(c[e>>2]|0)+(i>>8)>>2]|0;a=c[a>>2]|0;zc[c[(c[a>>2]|0)+20>>2]&3](a,b,d,e+h|0,i&2|0?f:2,g);return}function Te(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+16|0;e=c[a>>2]|0;f=c[a+4>>2]|0;if(!(f&1))a=e;else a=c[(c[b+(f>>1)>>2]|0)+e>>2]|0;c[g>>2]=d;tc[a&7](b+(f>>1)|0,g);l=g;return}function Ue(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if(Zg(a,c[b+8>>2]|0)|0)Le(b,d,e);else{a=c[a+8>>2]|0;Cc[c[(c[a>>2]|0)+28>>2]&7](a,b,d,e)}return}function Ve(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=c[b>>2]|0;if((c[b+4>>2]|0)-e>>2>>>0<=d>>>0){e=1;c[a>>2]=e;l=f;return}c[f>>2]=c[e+(d<<2)>>2];e=Ua(680,f|0)|0;c[a>>2]=e;l=f;return}function We(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;if(a-b>>2>>>0>=d>>>0){if(d|0){e=a;while(1){d=d+-1|0;c[e>>2]=c[b>>2];if(!d)break;else{b=b+4|0;e=e+4|0}}}}else do{d=d+-1|0;c[a+(d<<2)>>2]=c[b+(d<<2)>>2]}while((d|0)!=0);return a|0}function Xe(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;h=c[a+4>>2]|0;if(!(h&1))g=h>>8;else g=c[(c[d>>2]|0)+(h>>8)>>2]|0;a=c[a>>2]|0;qc[c[(c[a>>2]|0)+24>>2]&3](a,b,d+g|0,h&2|0?e:2,f);return}function Ye(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0;a:do if(!d)b=0;else{while(1){e=a[b>>0]|0;f=a[c>>0]|0;if(e<<24>>24!=f<<24>>24)break;d=d+-1|0;if(!d){b=0;break a}else{b=b+1|0;c=c+1|0}}b=(e&255)-(f&255)|0}while(0);return b|0}function Ze(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a+4>>2]|0;if(!(g&1))f=g>>8;else f=c[(c[d>>2]|0)+(g>>8)>>2]|0;a=c[a>>2]|0;Cc[c[(c[a>>2]|0)+28>>2]&7](a,b,d+f|0,g&2|0?e:2);return}function _e(){var b=0,d=0,e=0;b=(a[1435]|0)==10;do if((c[359]|0)<0){if(!b?(d=c[345]|0,d>>>0<(c[344]|0)>>>0):0){c[345]=d+1;a[d>>0]=10;break}He()|0}else{if(!b?(e=c[345]|0,e>>>0<(c[344]|0)>>>0):0){c[345]=e+1;a[e>>0]=10;break}He()|0}while(0);return}function $e(a){a=a|0;if(!a)return;re(c[a+4>>2]|0);Nh(a);return}function af(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=l;l=l+32|0;c[e>>2]=c[a+60>>2];c[e+4>>2]=0;c[e+8>>2]=b;c[e+12>>2]=e+20;c[e+16>>2]=d;if((Vg(Ha(140,e|0)|0)|0)<0){c[e+20>>2]=-1;a=-1}else a=c[e+20>>2]|0;l=e;return a|0}function bf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;a:do if(!d)d=0;else{while(1){e=c[a>>2]|0;f=c[b>>2]|0;if((e|0)!=(f|0))break;d=d+-1|0;if(!d){d=0;break a}else{b=b+4|0;a=a+4|0}}d=e-f|0}while(0);return d|0}function cf(b,c){b=b|0;c=c|0;var d=0,e=0;d=a[b>>0]|0;e=a[c>>0]|0;if(d<<24>>24==0?1:d<<24>>24!=e<<24>>24)b=e;else{do{b=b+1|0;c=c+1|0;d=a[b>>0]|0;e=a[c>>0]|0}while(!(d<<24>>24==0?1:d<<24>>24!=e<<24>>24));b=e}return (d&255)-(b&255)|0}function df(a){a=a|0;var b=0,d=0;d=a+15&-16|0;b=c[i>>2]|0;a=b+d|0;if((d|0)>0&(a|0)<(b|0)|(a|0)<0){W()|0;Pa(12);return -1}c[i>>2]=a;if((a|0)>(V()|0)?(U()|0)==0:0){c[i>>2]=b;Pa(12);return -1}return b|0}function ef(b){b=b|0;var d=0;d=a[b+74>>0]|0;a[b+74>>0]=d+255|d;d=c[b>>2]|0;if(!(d&8)){c[b+8>>2]=0;c[b+4>>2]=0;d=c[b+44>>2]|0;c[b+28>>2]=d;c[b+20>>2]=d;c[b+16>>2]=d+(c[b+48>>2]|0);b=0}else{c[b>>2]=d|32;b=-1}return b|0}function ff(){var a=0,b=0,d=0;c[2394]=0;c[2395]=0;c[2396]=0;a=tf(64)|0;c[a+40>>2]=0;c[a+44>>2]=0;b=a;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));c[a+36>>2]=a+40;c[a+52>>2]=0;c[a+56>>2]=0;c[a+60>>2]=0;c[2397]=a;return}function gf(a,b){a=a|0;b=b|0;var d=0;d=c[a>>2]|0;a=c[b>>2]|0;if((d|0)==(a|0))return;if(pd(d,a)|0){Fc(d,a);return}else{b=Uc(a)|0;Fb(15,b|0,c[d+48>>2]|0)|0;return}}function hf(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;if(Zg(a,c[b+8>>2]|0)|0)ke(b,d,e,f);return}function jf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=l;l=l+16|0;vc[c[a>>2]&7](e,b,d);_b(c[e>>2]|0);d=c[e>>2]|0;Va(d|0);l=e;return d|0}function kf(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=c[a+4>>2]|0;if(!(e&1))a=d;else a=c[(c[b+(e>>1)>>2]|0)+d>>2]|0;return uc[a&31](b+(e>>1)|0)|0}function lf(b,d){b=b|0;d=d|0;var e=0;if((b|0)!=(d|0)){e=a[d+8+3>>0]|0;be(b,e<<24>>24<0?c[d>>2]|0:d,e<<24>>24<0?c[d+4>>2]|0:e&255)|0}return b|0}function mf(b,d){b=b|0;d=d|0;var e=0;if((b|0)!=(d|0)){e=a[d+11>>0]|0;ee(b,e<<24>>24<0?c[d>>2]|0:d,e<<24>>24<0?c[d+4>>2]|0:e&255)|0}return b|0}function nf(a,b){a=a|0;b=b|0;var d=0,e=0;e=Ae(b)|0;d=tf(e+13|0)|0;c[d>>2]=e;c[d+4>>2]=e;c[d+8>>2]=0;d=$g(d)|0;wd(d|0,b|0,e+1|0)|0;c[a>>2]=d;return}function of(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;f=l;l=l+16|0;a=c[a>>2]|0;c[f>>2]=e;e=pc[a&31](b,d,f)|0;l=f;return e|0}function pf(b,c,d){b=b|0;c=c|0;d=d|0;var e=0;if((c|0)<(b|0)&(b|0)<(c+d|0)){e=b;c=c+d|0;b=b+d|0;while((d|0)>0){b=b-1|0;c=c-1|0;d=d-1|0;a[b>>0]=a[c>>0]|0}b=e}else wd(b,c,d)|0;return b|0}function qf(a){a=a|0;var b=0;b=kg(c[a+8>>2]|0)|0;if(b|0)kg(b)|0;a=c[a+8>>2]|0;if(!a)return 1;a=kg(a)|0;b=Ah()|0;if(a|0)kg(a)|0;return (b|0)==1|0}function rf(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if(Zg(a,c[b+8>>2]|0)|0)Le(b,d,e);return}function sf(a){a=a|0;var b=0,d=0;if(!a)return;b=c[a>>2]|0;if(b|0){d=c[a+4>>2]|0;if((d|0)!=(b|0))c[a+4>>2]=d+(~((d+-4-b|0)>>>2)<<2);Nh(b)}Nh(a);return}function tf(a){a=a|0;var b=0;b=(a|0)==0?1:a;a=Dc(b)|0;a:do if(!a)do{a=ih()|0;if(!a){a=0;break a}wc[a&3]();a=Dc(b)|0}while(!(a|0));while(0);return a|0}function uf(b){b=b|0;var d=0,e=0,f=0;e=c[b>>2]|0;f=(a[e>>0]|0)+-48|0;if(f>>>0<10){d=0;do{d=(d*10|0)+f|0;e=e+1|0;c[b>>2]=e;f=(a[e>>0]|0)+-48|0}while(f>>>0<10)}else d=0;return d|0}function vf(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;if(!((b|0)==0&(c|0)==0))do{e=e+-1|0;a[e>>0]=d[6518+(b&15)>>0]|0|f;b=_f(b|0,c|0,4)|0;c=z}while(!((b|0)==0&(c|0)==0));return e|0}function wf(b){b=b|0;var c=0;c=a[n+(b&255)>>0]|0;if((c|0)<8)return c|0;c=a[n+(b>>8&255)>>0]|0;if((c|0)<8)return c+8|0;c=a[n+(b>>16&255)>>0]|0;if((c|0)<8)return c+16|0;return (a[n+(b>>>24)>>0]|0)+24|0}function xf(){var a=0,b=0;a=Lf()|0;if((a|0?(b=c[a>>2]|0,b|0):0)?((c[b+48>>2]&-256|0)==1126902528?(c[b+48+4>>2]|0)==1129074247:0):0)wg(c[b+12>>2]|0);wg(jh()|0)}function yf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=l;l=l+16|0;c[e>>2]=c[d>>2];a=pc[c[(c[a>>2]|0)+16>>2]&31](a,b,e)|0;if(a)c[d>>2]=c[e>>2];l=e;return a&1|0}function zf(b,c,d){b=b|0;c=c|0;d=d|0;if(!((b|0)==0&(c|0)==0))do{d=d+-1|0;a[d>>0]=b&7|48;b=_f(b|0,c|0,3)|0;c=z}while(!((b|0)==0&(c|0)==0));return d|0}function Af(a,b){a=a|0;b=b|0;var d=0;d=l;l=l+16|0;c[d>>2]=b;b=uc[a&31](d)|0;Va(c[d>>2]|0);l=d;return b|0}function Bf(){var a=0;a=tf(12)|0;c[a+4>>2]=0;c[a+8>>2]=0;c[a>>2]=a+4;return a|0}function Cf(a){a=a|0;var b=0;a=c[a+8>>2]|0;if(a){b=kg(a)|0;a=Ah()|0;if(b)kg(b)|0}else a=1;return a|0}function Df(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=l;l=l+16|0;c[e+4>>2]=b;c[e>>2]=d;tc[a&7](e+4|0,e);l=e;return}function Ef(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;if(d|0){e=a;while(1){d=d+-1|0;c[e>>2]=c[b>>2];if(!d)break;else{b=b+4|0;e=e+4|0}}}return a|0}function Ff(a,b,c,d,e,f,g,h,i){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;return xc[a&7](b|0,c|0,d|0,e|0,f|0,g|0,h|0,i|0)|0}function Gf(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;return ed(d,e,f,c[a+12>>2]|0,c[a+16>>2]|0)|0}function Hf(a,b){a=a|0;b=b|0;if(Zg(a,b)|0)a=1;else a=Zg(b,616)|0;return a|0}function If(a){a=a|0;var b=0;a=fh(c[a>>2]|0)|0;b=c[a+8>>2]|0;c[a+8>>2]=b+-1;if((b+-1|0)<0)Nh(a);return}function Jf(a,b,d){a=a|0;b=b|0;d=d|0;if((c[a+4>>2]|0)==(b|0)?(c[a+28>>2]|0)!=1:0)c[a+28>>2]=d;return}function Kf(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;f=l;l=l+16|0;Xc(a,b,d,e,f|0)|0;l=f;return (z=c[f+4>>2]|0,c[f>>2]|0)|0}function Lf(){var a=0,b=0;a=l;l=l+16|0;if(!(Wa(10232,2)|0)){b=tb(c[2559]|0)|0;l=a;return b|0}else ng(8957,a);return 0}function Mf(a){a=a|0;var b=0;b=l;l=l+16|0;Mc(a);if(!(Cb(c[2559]|0,0)|0)){l=b;return}else ng(9056,b)}function Nf(a,b){a=a|0;b=b|0;return ie(a,b,xh(b)|0)|0}function Of(a,b){a=a|0;b=b|0;var d=0;d=l;l=l+16|0;c[d>>2]=b;b=uc[a&31](d)|0;l=d;return b|0}function Pf(a){a=a|0;return ee(a,4043,xh(4043)|0)|0}function Qf(a){a=a|0;var b=0;b=l;l=l+16|0;c[b>>2]=Qh(c[a+60>>2]|0)|0;a=Vg(fb(6,b|0)|0)|0;l=b;return a|0}function Rf(a,b){a=a|0;b=b|0;var d=0;if(b|0){d=a;while(1){b=b+-1|0;c[d>>2]=0;if(!b)break;else d=d+4|0}}return a|0}function Sf(a,b){a=a|0;b=b|0;var d=0;d=l;l=l+16|0;c[d>>2]=b;sc[a&31](d);l=d;return}function Tf(a,b){a=a|0;b=b|0;var d=0;d=l;l=l+16|0;c[d>>2]=a;c[d+4>>2]=b;Vg(Ta(91,d|0)|0)|0;l=d;return}function Uf(a){a=a|0;var b=0;c[a>>2]=1492;b=c[a+8>>2]|0;if((b|0)!=(pg()|0))qh(c[a+8>>2]|0);return}function Vf(){var a=0;a=l;l=l+16|0;if(!(Ab(10236,23)|0)){l=a;return}else ng(9006,a)}function Wf(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;zc[a&3](b|0,c|0,d|0,e|0,f|0,g|0)}function Xf(a,b,d){a=a|0;b=b|0;d=d|0;c[(c[a>>2]|0)+(b<<2)>>2]=c[d>>2];return 1}function Yf(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){z=b<<c|(a&(1<<c)-1<<32-c)>>>32-c;return a<<c}z=a<<c-32;return 0}function Zf(){var a=0;a=tf(12)|0;c[a>>2]=0;c[a+4>>2]=0;c[a+8>>2]=0;return a|0}function _f(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){z=b>>>c;return a>>>c|(b&(1<<c)-1)<<32-c}z=0;return b>>>c-32|0}function $f(){}function ag(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;d=b-d-(c>>>0>a>>>0|0)>>>0;return (z=d,a-c>>>0|0)|0}function bg(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return Bc[a&7](b|0,c|0,d|0,e|0,f|0)|0}function cg(a){a=a|0;var b=0,c=0;c=(Ae(a)|0)+1|0;b=Dc(c)|0;if(!b)b=0;else wd(b|0,a|0,c|0)|0;return b|0}function dg(a,b){a=a|0;b=b|0;if(!b)b=0;else b=Gd(c[b>>2]|0,c[b+4>>2]|0,a)|0;return (b|0?b:a)|0}function eg(a,b,c){a=a|0;b=b|0;c=c|0;return Zg(a,b)|0}function fg(a){a=a|0;return 88}function gg(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;qc[a&3](b|0,c|0,d|0,e|0,f|0)}function hg(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;c[f>>2]=d;return 3}function ig(a,b,c){a=a|0;b=b|0;c=c|0;if(!c)a=0;else a=Ye(a,b,c)|0;return a|0}function jg(a){a=+a;var b=0;h[j>>3]=a;b=c[j>>2]|0;z=c[j+4>>2]|0;return b|0}function kg(a){a=a|0;var b=0;b=c[453]|0;if(a|0)c[453]=(a|0)==(-1|0)?10160:a;return ((b|0)==10160?-1:b)|0}function lg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return yc[a&7](b|0,c|0,d|0,e|0)|0}function mg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return (z=b+d+(a+c>>>0>>>0<a>>>0|0)>>>0,a+c>>>0|0)|0}function ng(a,b){a=a|0;b=b|0;var d=0;d=l;l=l+16|0;c[d>>2]=b;Yd(a,d);_e();Ib()}function og(a){a=a|0;return c[a+8>>2]|0}function pg(){if((a[9568]|0)==0?Eg(9568)|0:0)c[2557]=Wd(2147483647,8570,0)|0;return c[2557]|0}function qg(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;S(8);return 0}function rg(a){a=a|0;c[a+4>>2]=-1;c[a>>2]=1492;c[a+8>>2]=pg()|0;return}function sg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;Cc[a&7](b|0,c|0,d|0,e|0)}function tg(a,b,c){a=a|0;b=b|0;c=c|0;if(c|0)pf(a|0,b|0,c|0)|0;return a|0}function ug(a,b,c){a=a|0;b=b|0;c=c|0;if(c|0)wd(a|0,b|0,c|0)|0;return a|0}function vg(a){a=a|0;if(a|0)sc[c[(c[a>>2]|0)+4>>2]&31](a);return}function wg(a){a=a|0;var b=0;b=l;l=l+16|0;wc[a&3]();ng(9109,b)}function xg(a){a=a|0;a=c[a>>2]|0;if(!a)return;Sd(a);Nh(a);return}function yg(a,b){a=a|0;b=b|0;c[a>>2]=1644;nf(a+4|0,b);return}function zg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return pc[a&31](b|0,c|0,d|0)|0}function Ag(a,b){a=a|0;b=b|0;c[a>>2]=1624;nf(a+4|0,b);return}function Bg(a){a=a|0;if(!a)a=0;else a=(Id(a,576)|0)!=0;return a&1|0}function Cg(a,b,c){a=a|0;b=b|0;c=c|0;if(c|0)We(a,b,c)|0;return}function Dg(a,b,c){a=a|0;b=b|0;c=c|0;if(c|0)Ef(a,b,c)|0;return}function Eg(b){b=b|0;if((a[b>>0]|0)==1)b=0;else{a[b>>0]=1;b=1}return b|0}function Fg(a,b){a=a|0;b=b|0;if(b|0)$d(a|0,0,b|0)|0;return a|0}function Gg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;vc[a&7](b|0,c|0,d|0)}function Hg(a){a=a|0;var b=0;b=l;l=l+a|0;l=l+15&-16;return b|0}function Ig(a,b,d){a=a|0;b=b|0;d=d|0;if(!(c[a>>2]&32))Pd(b,d,a);return}function Jg(a,b){a=a|0;b=b|0;if(!a)a=0;else a=Td(a,b)|0;return a|0}function Kg(a){a=a|0;return (c[a+4>>2]|0)-(c[a>>2]|0)>>2|0}function Lg(a,b){a=a|0;b=b|0;var c=0;c=Tg(a|0)|0;return ((b|0)==0?a:c)|0}function Mg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Xc(a,b,c,d,0)|0}function Ng(a){a=a|0;Uf(a);Nh(a);return}function Og(a){a=a|0;c[a>>2]=1644;If(a+4|0);return}function Pg(a,b){a=a|0;b=b|0;if(b|0)Rf(a,b)|0;return}function Qg(a){a=a|0;c[a>>2]=1624;If(a+4|0);return}function Rg(a){a=a|0;return ((c[a+16>>2]&4|0)==0?4:7)|0}function Sg(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;S(10)}function Tg(a){a=a|0;return (a&255)<<24|(a>>8&255)<<16|(a>>16&255)<<8|a>>>24|0}function Ug(a,b,c){a=a|0;b=b|0;c=c|0;return Ac[a&15](b|0,c|0)|0}function Vg(a){a=a|0;if(a>>>0>4294963200){c[2561]=0-a;a=-1}return a|0}function Wg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;S(12);return 0}function Xg(a,b,c){a=a|0;b=b|0;c=c|0;return td(0,a,b,c|0?c:10224)|0}function Yg(a){a=a|0;return 96}function Zg(a,b){a=a|0;b=b|0;return (a|0)==(b|0)|0}function _g(a,b){a=a|0;b=b|0;if(!o){o=a;p=b}}function $g(a){a=a|0;return a+12|0}function ah(a){a=a|0;return Hc(a)|0}function bh(a,b,c){a=a|0;b=b|0;c=c|0;tc[a&7](b|0,c|0)}function ch(a){a=a|0;return (a|0)!=1132&((a|0)!=0&(a|0)!=10184)&1|0}function dh(a,b){a=a|0;b=b|0;c[a>>2]=b;return}function eh(b,c){b=b|0;c=c|0;a[b>>0]=c;return}function fh(a){a=a|0;return a+-12|0}function gh(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;S(1)}function hh(a){a=a|0;var b=0;b=(Hh(a)|0)==0;return (b?a:a|32)|0}function ih(){var a=0;a=c[2560]|0;c[2560]=a+0;return a|0}function jh(){var a=0;a=c[383]|0;c[383]=a+0;return a|0}function kh(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;S(9);return 0}function lh(a){a=a|0;Og(a);Nh(a);return}function mh(a){a=a|0;ta(a|0)|0;xf()}function nh(a,b){a=a|0;b=b|0;return uc[a&31](b|0)|0}function oh(a){a=a|0;Qg(a);Nh(a);return}function ph(a){a=a|0;return Qh(c[a+4>>2]|0)|0}function qh(a){a=a|0;if(ch(a)|0)Mc(a);return}function rh(a,b){a=a|0;b=b|0;l=a;m=b}function sh(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;S(13)}function th(a){a=a|0;return c[(c[a>>2]|0)+48>>2]|0}function uh(a,b){a=a|0;b=b|0;sc[a&31](b|0)}function vh(a,b){a=a|0;b=b|0;return dg(a,b)|0}function wh(a){a=a|0;return cg(c[a+4>>2]|0)|0}function xh(a){a=a|0;return Ae(a)|0}function yh(a){a=a|0;Nh(a);return}function zh(a,b,c){a=a|0;b=b|0;c=c|0;S(0);return 0}function Ah(){return (c[c[453]>>2]|0?4:1)|0}function Bh(){Ib()}function Ch(a){a=a|0;return Ee(a,c[453]|0)|0}function Dh(a){a=a|0;return 0}function Eh(a,b){a=+a;b=b|0;return +(+De(a,b))}function Fh(a){a=a|0;return rc[a&3]()|0}function Gh(a,b,c){a=a|0;b=b|0;c=c|0;S(6)}function Hh(a){a=a|0;return (a+-65|0)>>>0<26|0}function Ih(a){a=a|0;return}function Jh(a,b){a=a|0;b=b|0;S(11);return 0}function Kh(a){a=a|0;wc[a&3]()}function Lh(a,b){a=a|0;b=b|0;S(4)}function Mh(a){a=a|0;l=a}function Nh(a){a=a|0;Mc(a);return}function Oh(a){a=a|0;z=a}function Ph(){return 10120}function Qh(a){a=a|0;return a|0}function Rh(a){a=a|0;S(5);return 0}function Sh(){return z|0}function Th(){return l|0}function Uh(a){a=a|0;S(3)}function Vh(){S(2);return 0}function Wh(){S(7)}

// EMSCRIPTEN_END_FUNCS
var pc=[zh,yd,af,me,eg,Fd,ue,jf,Xf,Ke,Je,te,Ke,Ke,Sc,Rc,Vc,Zc,zh,zh,zh,zh,zh,zh,zh,zh,zh,zh,zh,zh,zh,zh];var qc=[gh,ce,Cd,Yc];var rc=[Vh,Bf,Zf,Vh];var sc=[Uh,Uf,Ng,vg,Ng,Ih,yh,Ih,Ih,yh,Qg,oh,Og,lh,oh,oh,lh,yh,yh,yh,$e,sf,xg,Mf,Uh,Uh,Uh,Uh,Uh,Uh,Uh,Uh];var tc=[Lh,Ld,Sf,Lc,gf,Lh,Lh,Lh];var uc=[Rh,Dh,Dh,Rg,Qf,qf,Dh,Cf,ph,ph,fg,Fh,og,Yg,Fh,Kg,ah,th,se,Rh,Rh,Rh,Rh,Rh,Rh,Rh,Rh,Rh,Rh,Rh,Rh,Rh];var vc=[Gh,ld,Hd,Te,xd,Ve,Df,Gh];var wc=[Wh,Od,Vf,Wh];var xc=[qg,Me,Ne,cd,bd,qg,qg,qg];var yc=[kh,of,ye,je,Fe,Fe,kh,kh];var zc=[Sg,hf,Qe,Dd];var Ac=[Jh,kf,kf,Af,Be,Of,Pe,he,Ud,Qd,$c,kd,Jh,Jh,Jh,Jh];var Bc=[Wg,hg,Gf,Vd,we,Wg,Wg,Wg];var Cc=[sh,rf,Ue,de,ge,Re,sh,sh];return{stackSave:Th,getTempRet0:Sh,___udivdi3:Mg,setThrew:_g,dynCall_viii:Gg,_bitshift64Lshr:_f,_bitshift64Shl:Yf,dynCall_viiii:sg,dynCall_iiiiiiiii:Ff,___cxa_is_pointer_type:Bg,dynCall_iii:Ug,_memset:$d,_sbrk:df,_memcpy:wd,stackAlloc:Hg,dynCall_vii:bh,___uremdi3:Kf,dynCall_vi:uh,__GLOBAL__sub_I_asm_dom_cpp:ff,_i64Subtract:ag,__GLOBAL__sub_I_bind_cpp:zd,setTempRet0:Oh,_i64Add:mg,dynCall_iiii:zg,dynCall_ii:nh,_emscripten_get_global_libc:Ph,dynCall_iiiii:lg,__GLOBAL__sub_I_asm_dom_server_cpp:Gc,dynCall_i:Fh,__GLOBAL__sub_I_index_cpp:md,dynCall_iiiiii:bg,_llvm_bswap_i32:Tg,dynCall_viiiii:gg,___cxa_can_catch:yf,_free:Mc,runPostSets:$f,dynCall_viiiiii:Wf,establishStackSpace:rh,_memmove:pf,stackRestore:Mh,_malloc:Dc,___getTypeName:wh,dynCall_v:Kh}})


// EMSCRIPTEN_END_ASM
(c.ia,c.ja,A);c.stackSave=k.stackSave;c._i64Subtract=k._i64Subtract;c.___udivdi3=k.___udivdi3;c.getTempRet0=k.getTempRet0;c._bitshift64Lshr=k._bitshift64Lshr;c._bitshift64Shl=k._bitshift64Shl;c.___cxa_is_pointer_type=
k.___cxa_is_pointer_type;c._memset=k._memset;c._sbrk=k._sbrk;c._memcpy=k._memcpy;c.stackAlloc=k.stackAlloc;c.___uremdi3=k.___uremdi3;var Fc=c.__GLOBAL__sub_I_asm_dom_cpp=k.__GLOBAL__sub_I_asm_dom_cpp,Gc=c.__GLOBAL__sub_I_asm_dom_server_cpp=k.__GLOBAL__sub_I_asm_dom_server_cpp,Ic=c.__GLOBAL__sub_I_bind_cpp=k.__GLOBAL__sub_I_bind_cpp;c.setTempRet0=k.setTempRet0;c._i64Add=k._i64Add;c._emscripten_get_global_libc=k._emscripten_get_global_libc;var zc=c.___getTypeName=k.___getTypeName,Hc=c.__GLOBAL__sub_I_index_cpp=
k.__GLOBAL__sub_I_index_cpp;c._llvm_bswap_i32=k._llvm_bswap_i32;c.___cxa_can_catch=k.___cxa_can_catch;var z=c._free=k._free;c.runPostSets=k.runPostSets;c.setThrew=k.setThrew;c.establishStackSpace=k.establishStackSpace;c._memmove=k._memmove;c.stackRestore=k.stackRestore;var O=c._malloc=k._malloc;c.dynCall_iiii=k.dynCall_iiii;c.dynCall_viiiii=k.dynCall_viiiii;c.dynCall_i=k.dynCall_i;c.dynCall_vi=k.dynCall_vi;c.dynCall_vii=k.dynCall_vii;c.dynCall_ii=k.dynCall_ii;c.dynCall_viii=k.dynCall_viii;c.dynCall_v=
k.dynCall_v;c.dynCall_iiiiiiiii=k.dynCall_iiiiiiiii;c.dynCall_iiiii=k.dynCall_iiiii;c.dynCall_viiiiii=k.dynCall_viiiiii;c.dynCall_iii=k.dynCall_iii;c.dynCall_iiiiii=k.dynCall_iiiiii;c.dynCall_viiii=k.dynCall_viiii;m.ea=c.stackAlloc;m.Ea=c.stackSave;m.Da=c.stackRestore;m.Ma=c.establishStackSpace;m.F=c.setTempRet0;m.sa=c.getTempRet0;c.asm=k;if(F)if("function"===typeof c.locateFile?F=c.locateFile(F):c.memoryInitializerPrefixURL&&(F=c.memoryInitializerPrefixURL+F),S||Pa){var Lc=c.readBinary(F);u.set(Lc,
m.S)}else{var pc=function(){c.readAsync(F,pb,function(){throw"could not load memory initializer "+F;})};Y++;c.monitorRunDependencies&&c.monitorRunDependencies(Y);var pb=function(a){a.byteLength&&(a=new Uint8Array(a));u.set(a,m.S);c.memoryInitializerRequest&&delete c.memoryInitializerRequest.response;Y--;c.monitorRunDependencies&&c.monitorRunDependencies(Y);0==Y&&(null!==mb&&(clearInterval(mb),mb=null),ya&&(a=ya,ya=null,a()))},qc=R(F);if(qc)pb(qc.buffer);else if(c.memoryInitializerRequest){var rc=
function(){var a=c.memoryInitializerRequest,b=a.response;if(200!==a.status&&0!==a.status)if(b=R(c.memoryInitializerRequestURL))b=b.buffer;else{console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+a.status+", retrying "+F);pc();return}pb(b)};c.memoryInitializerRequest.response?setTimeout(rc,0):c.memoryInitializerRequest.addEventListener("load",rc)}else pc()}ha.prototype=Error();ha.prototype.constructor=ha;var Ec,jc=null;ya=function b(){c.calledRun||fb();c.calledRun||
(ya=b)};c.callMain=c.Ia=function(b){function d(){for(var b=0;3>b;b++)f.push(0)}b=b||[];Oa||(Oa=!0,ca(gb));var e=b.length+1,f=[N(cb(c.thisProgram),"i8",0)];d();for(var g=0;g<e-1;g+=1)f.push(N(cb(b[g]),"i8",0)),d();f.push(0);f=N(f,"i32",0);try{var k=c._main(e,f,0);lc(k,!0)}catch(h){h instanceof ha||("SimulateInfiniteLoop"==h?c.noExitRuntime=!0:((b=h)&&"object"===typeof h&&h.stack&&(b=[h,h.stack]),c.printErr("exception thrown: "+b),c.quit(1,h)))}finally{}};c.run=c.run=fb;c.exit=c.exit=lc;var nc=[];c.abort=
c.abort=G;if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();var hc=!0;c.noInitialRun&&(hc=!1);c.noExitRuntime=!0;fb();return c}} true?module.exports=za():"function"===typeof define&&define.f?define([],za):"object"===typeof exports?exports["default"]=za():this["default"]=za();


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).Buffer, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(14)
var ieee754 = __webpack_require__(15)
var isArray = __webpack_require__(16)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ })
]);
//# sourceMappingURL=1.bundle.js.map