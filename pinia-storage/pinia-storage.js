var Xs = Object.defineProperty;
var Qs = (e, r, t) => r in e ? Xs(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var $e = (e, r, t) => (Qs(e, typeof r != "symbol" ? r + "" : r, t), t);
import { toRaw as Ys } from "vue";
class xs {
  forEeah() {
    let r = new Array();
    for (let t = 0; t < this.length(); t++) {
      let n = window.sessionStorage.key(t);
      !(n != null && n.includes("--scheme")) && n != null && r.push(n);
    }
    return r;
  }
  envCan() {
    if (!window.sessionStorage)
      throw new Error(
        "your browser do not support sessionStorage! please update the latest version"
      );
    return !0;
  }
  length() {
    return window.sessionStorage.length;
  }
  get(r) {
    return window.sessionStorage.getItem(r);
  }
  set(r, t) {
    window.sessionStorage.setItem(r, t);
  }
  remove(r) {
    window.sessionStorage.removeItem(r);
  }
  clear() {
    window.sessionStorage.clear();
  }
}
class ei {
  forEeah() {
    let r = new Array();
    for (let t = 0; t < this.length(); t++) {
      let n = window.localStorage.key(t);
      !(n != null && n.includes("--scheme")) && n != null && r.push(n);
    }
    return r;
  }
  envCan() {
    if (!window.localStorage)
      throw new Error(
        "your browser do not support localStorage! please update the latest version"
      );
    return !0;
  }
  length() {
    return window.localStorage.length;
  }
  get(r) {
    return window.localStorage.getItem(r);
  }
  set(r, t) {
    window.localStorage.setItem(r, t);
  }
  remove(r) {
    window.localStorage.removeItem(r);
  }
  clear() {
    window.localStorage.clear();
  }
}
var ri = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ti(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      if (this instanceof n) {
        var a = [null];
        a.push.apply(a, arguments);
        var i = Function.bind.apply(r, a);
        return new i();
      }
      return r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var He = {}, ni = {
  get exports() {
    return He;
  },
  set exports(e) {
    He = e;
  }
}, Yr = {}, ai = {
  get exports() {
    return Yr;
  },
  set exports(e) {
    Yr = e;
  }
};
const si = Object.getPrototypeOf({});
function Yt(e) {
  function r(h) {
    return h !== "constructor" && h !== "prototype" && h !== "__proto__";
  }
  function t(h) {
    let w = 0;
    const f = h.length, g = new Array(f);
    for (w = 0; w < f; ++w)
      g[w] = j(h[w]);
    return g;
  }
  function n(h) {
    const w = {};
    if (d && Object.getPrototypeOf(h) !== si)
      return d(h);
    const f = o(h);
    let g, D, p;
    for (g = 0, D = f.length; g < D; ++g)
      r(p = f[g]) && (w[p] = j(h[p]));
    return w;
  }
  function a(h, w) {
    const f = h.length, g = w.length;
    let D = 0;
    const p = new Array(f + g);
    for (D = 0; D < f; ++D)
      p[D] = j(h[D]);
    for (D = 0; D < g; ++D)
      p[D + f] = j(w[D]);
    return p;
  }
  const i = Object.prototype.propertyIsEnumerable;
  function s(h) {
    const w = Object.keys(h), f = Object.getOwnPropertySymbols(h);
    for (let g = 0, D = f.length; g < D; ++g)
      i.call(h, f[g]) && w.push(f[g]);
    return w;
  }
  const o = e && e.symbols ? s : Object.keys, d = typeof (e == null ? void 0 : e.cloneProtoObject) == "function" ? e.cloneProtoObject : void 0;
  function c(h) {
    return typeof h == "object" && h !== null && !(h instanceof RegExp) && !(h instanceof Date);
  }
  function m(h) {
    return typeof h != "object" || h === null;
  }
  const _ = typeof Buffer < "u" ? (h) => typeof h != "object" || h === null || h instanceof RegExp || h instanceof Date || h instanceof Buffer : (h) => typeof h != "object" || h === null || h instanceof RegExp || h instanceof Date, k = e && typeof e.mergeArray == "function" ? e.mergeArray({ clone: j, deepmerge: P, getKeys: o, isMergeableObject: c }) : a;
  function j(h) {
    return c(h) ? Array.isArray(h) ? t(h) : n(h) : h;
  }
  function O(h, w) {
    const f = {}, g = o(h), D = o(w);
    let p, b, R;
    for (p = 0, b = g.length; p < b; ++p)
      r(R = g[p]) && D.indexOf(R) === -1 && (f[R] = j(h[R]));
    for (p = 0, b = D.length; p < b; ++p)
      r(R = D[p]) && (R in h && (g.indexOf(R) !== -1 && (f[R] = P(h[R], w[R])), !0) || // eslint-disable-line no-mixed-operators
      (f[R] = j(w[R])));
    return f;
  }
  function P(h, w) {
    const f = Array.isArray(w), g = Array.isArray(h);
    return m(w) ? w : _(h) ? j(w) : f && g ? k(h, w) : f !== g ? j(w) : O(h, w);
  }
  function S() {
    switch (arguments.length) {
      case 0:
        return {};
      case 1:
        return j(arguments[0]);
      case 2:
        return P(arguments[0], arguments[1]);
    }
    let h;
    for (let w = 0, f = arguments.length; w < f; ++w)
      h = P(h, arguments[w]);
    return h;
  }
  return e && e.all ? S : P;
}
ai.exports = Yt;
Yr.default = Yt;
Yr.deepmerge = Yt;
var Ta = ii;
function Pr(e) {
  return e instanceof Buffer ? Buffer.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
}
function ii(e) {
  if (e = e || {}, e.circles)
    return oi(e);
  return e.proto ? n : t;
  function r(a, i) {
    for (var s = Object.keys(a), o = new Array(s.length), d = 0; d < s.length; d++) {
      var c = s[d], m = a[c];
      typeof m != "object" || m === null ? o[c] = m : m instanceof Date ? o[c] = new Date(m) : ArrayBuffer.isView(m) ? o[c] = Pr(m) : o[c] = i(m);
    }
    return o;
  }
  function t(a) {
    if (typeof a != "object" || a === null)
      return a;
    if (a instanceof Date)
      return new Date(a);
    if (Array.isArray(a))
      return r(a, t);
    if (a instanceof Map)
      return new Map(r(Array.from(a), t));
    if (a instanceof Set)
      return new Set(r(Array.from(a), t));
    var i = {};
    for (var s in a)
      if (Object.hasOwnProperty.call(a, s) !== !1) {
        var o = a[s];
        typeof o != "object" || o === null ? i[s] = o : o instanceof Date ? i[s] = new Date(o) : o instanceof Map ? i[s] = new Map(r(Array.from(o), t)) : o instanceof Set ? i[s] = new Set(r(Array.from(o), t)) : ArrayBuffer.isView(o) ? i[s] = Pr(o) : i[s] = t(o);
      }
    return i;
  }
  function n(a) {
    if (typeof a != "object" || a === null)
      return a;
    if (a instanceof Date)
      return new Date(a);
    if (Array.isArray(a))
      return r(a, n);
    if (a instanceof Map)
      return new Map(r(Array.from(a), n));
    if (a instanceof Set)
      return new Set(r(Array.from(a), n));
    var i = {};
    for (var s in a) {
      var o = a[s];
      typeof o != "object" || o === null ? i[s] = o : o instanceof Date ? i[s] = new Date(o) : o instanceof Map ? i[s] = new Map(r(Array.from(o), n)) : o instanceof Set ? i[s] = new Set(r(Array.from(o), n)) : ArrayBuffer.isView(o) ? i[s] = Pr(o) : i[s] = n(o);
    }
    return i;
  }
}
function oi(e) {
  var r = [], t = [];
  return e.proto ? i : a;
  function n(s, o) {
    for (var d = Object.keys(s), c = new Array(d.length), m = 0; m < d.length; m++) {
      var _ = d[m], k = s[_];
      if (typeof k != "object" || k === null)
        c[_] = k;
      else if (k instanceof Date)
        c[_] = new Date(k);
      else if (ArrayBuffer.isView(k))
        c[_] = Pr(k);
      else {
        var j = r.indexOf(k);
        j !== -1 ? c[_] = t[j] : c[_] = o(k);
      }
    }
    return c;
  }
  function a(s) {
    if (typeof s != "object" || s === null)
      return s;
    if (s instanceof Date)
      return new Date(s);
    if (Array.isArray(s))
      return n(s, a);
    if (s instanceof Map)
      return new Map(n(Array.from(s), a));
    if (s instanceof Set)
      return new Set(n(Array.from(s), a));
    var o = {};
    r.push(s), t.push(o);
    for (var d in s)
      if (Object.hasOwnProperty.call(s, d) !== !1) {
        var c = s[d];
        if (typeof c != "object" || c === null)
          o[d] = c;
        else if (c instanceof Date)
          o[d] = new Date(c);
        else if (c instanceof Map)
          o[d] = new Map(n(Array.from(c), a));
        else if (c instanceof Set)
          o[d] = new Set(n(Array.from(c), a));
        else if (ArrayBuffer.isView(c))
          o[d] = Pr(c);
        else {
          var m = r.indexOf(c);
          m !== -1 ? o[d] = t[m] : o[d] = a(c);
        }
      }
    return r.pop(), t.pop(), o;
  }
  function i(s) {
    if (typeof s != "object" || s === null)
      return s;
    if (s instanceof Date)
      return new Date(s);
    if (Array.isArray(s))
      return n(s, i);
    if (s instanceof Map)
      return new Map(n(Array.from(s), i));
    if (s instanceof Set)
      return new Set(n(Array.from(s), i));
    var o = {};
    r.push(s), t.push(o);
    for (var d in s) {
      var c = s[d];
      if (typeof c != "object" || c === null)
        o[d] = c;
      else if (c instanceof Date)
        o[d] = new Date(c);
      else if (c instanceof Map)
        o[d] = new Map(n(Array.from(c), i));
      else if (c instanceof Set)
        o[d] = new Set(n(Array.from(c), i));
      else if (ArrayBuffer.isView(c))
        o[d] = Pr(c);
      else {
        var m = r.indexOf(c);
        m !== -1 ? o[d] = t[m] : o[d] = i(c);
      }
    }
    return r.pop(), t.pop(), o;
  }
}
const fi = {}, ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fi
}, Symbol.toStringTag, { value: "Module" })), Ra = /* @__PURE__ */ ti(ci);
var St = {}, ui = {
  get exports() {
    return St;
  },
  set exports(e) {
    St = e;
  }
}, kt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
  function r(C, L) {
    return { validate: C, compare: L };
  }
  e.fullFormats = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: r(i, s),
    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
    time: r(d, c),
    "date-time": r(_, k),
    // duration: https://tools.ietf.org/html/rfc3339#appendix-A
    duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri: P,
    "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
    // uri-template: https://tools.ietf.org/html/rfc6570
    "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    // For the source: https://gist.github.com/dperini/729294
    // For test cases: https://mathiasbynens.be/demo/url-regex
    url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
    // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
    regex: R,
    // uuid: http://tools.ietf.org/html/rfc4122
    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    // JSON-pointer: https://tools.ietf.org/html/rfc6901
    // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
    // byte: https://github.com/miguelmota/is-base64
    byte: h,
    // signed 32 bit integer
    int32: { type: "number", validate: g },
    // signed 64 bit integer
    int64: { type: "number", validate: D },
    // C-type float
    float: { type: "number", validate: p },
    // C-type double
    double: { type: "number", validate: p },
    // hint to the UI to hide input strings
    password: !0,
    // unchecked string payload
    binary: !0
  }, e.fastFormats = {
    ...e.fullFormats,
    date: r(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, s),
    time: r(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, c),
    "date-time": r(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, k),
    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    // email (sources from jsen validator):
    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
  }, e.formatNames = Object.keys(e.fullFormats);
  function t(C) {
    return C % 4 === 0 && (C % 100 !== 0 || C % 400 === 0);
  }
  const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function i(C) {
    const L = n.exec(C);
    if (!L)
      return !1;
    const J = +L[1], q = +L[2], x = +L[3];
    return q >= 1 && q <= 12 && x >= 1 && x <= (q === 2 && t(J) ? 29 : a[q]);
  }
  function s(C, L) {
    if (C && L)
      return C > L ? 1 : C < L ? -1 : 0;
  }
  const o = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
  function d(C, L) {
    const J = o.exec(C);
    if (!J)
      return !1;
    const q = +J[1], x = +J[2], ne = +J[3], pe = J[5];
    return (q <= 23 && x <= 59 && ne <= 59 || q === 23 && x === 59 && ne === 60) && (!L || pe !== "");
  }
  function c(C, L) {
    if (!(C && L))
      return;
    const J = o.exec(C), q = o.exec(L);
    if (J && q)
      return C = J[1] + J[2] + J[3] + (J[4] || ""), L = q[1] + q[2] + q[3] + (q[4] || ""), C > L ? 1 : C < L ? -1 : 0;
  }
  const m = /t|\s/i;
  function _(C) {
    const L = C.split(m);
    return L.length === 2 && i(L[0]) && d(L[1], !0);
  }
  function k(C, L) {
    if (!(C && L))
      return;
    const [J, q] = C.split(m), [x, ne] = L.split(m), pe = s(J, x);
    if (pe !== void 0)
      return pe || c(q, ne);
  }
  const j = /\/|:/, O = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function P(C) {
    return j.test(C) && O.test(C);
  }
  const S = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function h(C) {
    return S.lastIndex = 0, S.test(C);
  }
  const w = -(2 ** 31), f = 2 ** 31 - 1;
  function g(C) {
    return Number.isInteger(C) && C <= f && C >= w;
  }
  function D(C) {
    return Number.isInteger(C);
  }
  function p() {
    return !0;
  }
  const b = /[^\\]\\Z/;
  function R(C) {
    if (b.test(C))
      return !1;
    try {
      return new RegExp(C), !0;
    } catch {
      return !1;
    }
  }
})(kt);
var Ir = {}, xt = function e(r, t) {
  if (r === t)
    return !0;
  if (r && t && typeof r == "object" && typeof t == "object") {
    if (r.constructor !== t.constructor)
      return !1;
    var n, a, i;
    if (Array.isArray(r)) {
      if (n = r.length, n != t.length)
        return !1;
      for (a = n; a-- !== 0; )
        if (!e(r[a], t[a]))
          return !1;
      return !0;
    }
    if (r.constructor === RegExp)
      return r.source === t.source && r.flags === t.flags;
    if (r.valueOf !== Object.prototype.valueOf)
      return r.valueOf() === t.valueOf();
    if (r.toString !== Object.prototype.toString)
      return r.toString() === t.toString();
    if (i = Object.keys(r), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (a = n; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[a]))
        return !1;
    for (a = n; a-- !== 0; ) {
      var s = i[a];
      if (!e(r[s], t[s]))
        return !1;
    }
    return !0;
  }
  return r !== r && t !== t;
};
Object.defineProperty(Ir, "__esModule", { value: !0 });
const Da = xt;
Da.code = 'require("ajv/dist/runtime/equal").default';
Ir.default = Da;
ui.exports = z;
St.default = z;
const li = { $schema: "http://json-schema.org/draft-07/schema#", $id: "http://json-schema.org/draft-07/schema#", title: "Core schema meta-schema", definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, type: ["object", "boolean"], properties: { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, default: !0 }, ra = { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, ta = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, di = kt.fullFormats.uri, na = kt.fullFormats.regex;
function Ae(e, { instancePath: r = "", parentData: t, parentDataProperty: n, rootData: a = e } = {}) {
  let i = null, s = 0;
  return typeof e == "number" && !(e % 1) && !isNaN(e) && isFinite(e) ? typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e)) ? (Ae.errors = [{ instancePath: r, schemaPath: "#/definitions/nonNegativeInteger/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" }], !1) : (Ae.errors = i, s === 0) : (Ae.errors = [{ instancePath: r, schemaPath: "#/definitions/nonNegativeInteger/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }], !1);
}
const zt = { validate: z };
function _e(e, { instancePath: r = "", parentData: t, parentDataProperty: n, rootData: a = e } = {}) {
  let i = null, s = 0;
  if (s === 0)
    if (Array.isArray(e)) {
      if (e.length < 1)
        return _e.errors = [{ instancePath: r, schemaPath: "#/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" }], !1;
      {
        var o = !0;
        const d = e.length;
        for (let c = 0; c < d; c++) {
          const m = s;
          zt.validate(e[c], { instancePath: r + "/" + c, parentData: e, parentDataProperty: c, rootData: a }) || (i = i === null ? zt.validate.errors : i.concat(zt.validate.errors), s = i.length);
          var o = m === s;
          if (!o)
            break;
        }
      }
    } else
      return _e.errors = [{ instancePath: r, schemaPath: "#/type", keyword: "type", params: { type: "array" }, message: "must be array" }], !1;
  return _e.errors = i, s === 0;
}
const aa = Ir.default;
function z(e, { instancePath: r = "", parentData: t, parentDataProperty: n, rootData: a = e } = {}) {
  let i = null, s = 0;
  if (!(e && typeof e == "object" && !Array.isArray(e)) && typeof e != "boolean")
    return z.errors = [{ instancePath: r, schemaPath: "#/type", keyword: "type", params: { type: li.type }, message: "must be object,boolean" }], !1;
  if (s === 0 && e && typeof e == "object" && !Array.isArray(e)) {
    if (e.$id !== void 0) {
      let f = e.$id;
      const g = s;
      if (s === g && s === g)
        if (typeof f == "string") {
          if (!ta.test(f))
            return z.errors = [{ instancePath: r + "/$id", schemaPath: "#/properties/%24id/format", keyword: "format", params: { format: "uri-reference" }, message: 'must match format "uri-reference"' }], !1;
        } else
          return z.errors = [{ instancePath: r + "/$id", schemaPath: "#/properties/%24id/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
      var o = g === s;
    } else
      var o = !0;
    if (o) {
      if (e.$schema !== void 0) {
        let f = e.$schema;
        const g = s;
        if (s === g && s === g)
          if (typeof f == "string") {
            if (!di(f))
              return z.errors = [{ instancePath: r + "/$schema", schemaPath: "#/properties/%24schema/format", keyword: "format", params: { format: "uri" }, message: 'must match format "uri"' }], !1;
          } else
            return z.errors = [{ instancePath: r + "/$schema", schemaPath: "#/properties/%24schema/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
        var o = g === s;
      } else
        var o = !0;
      if (o) {
        if (e.$ref !== void 0) {
          let f = e.$ref;
          const g = s;
          if (s === g && s === g)
            if (typeof f == "string") {
              if (!ta.test(f))
                return z.errors = [{ instancePath: r + "/$ref", schemaPath: "#/properties/%24ref/format", keyword: "format", params: { format: "uri-reference" }, message: 'must match format "uri-reference"' }], !1;
            } else
              return z.errors = [{ instancePath: r + "/$ref", schemaPath: "#/properties/%24ref/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
          var o = g === s;
        } else
          var o = !0;
        if (o) {
          if (e.$comment !== void 0) {
            const f = s;
            if (typeof e.$comment != "string")
              return z.errors = [{ instancePath: r + "/$comment", schemaPath: "#/properties/%24comment/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
            var o = f === s;
          } else
            var o = !0;
          if (o) {
            if (e.title !== void 0) {
              const f = s;
              if (typeof e.title != "string")
                return z.errors = [{ instancePath: r + "/title", schemaPath: "#/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
              var o = f === s;
            } else
              var o = !0;
            if (o) {
              if (e.description !== void 0) {
                const f = s;
                if (typeof e.description != "string")
                  return z.errors = [{ instancePath: r + "/description", schemaPath: "#/properties/description/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
                var o = f === s;
              } else
                var o = !0;
              if (o) {
                if (e.readOnly !== void 0) {
                  const f = s;
                  if (typeof e.readOnly != "boolean")
                    return z.errors = [{ instancePath: r + "/readOnly", schemaPath: "#/properties/readOnly/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }], !1;
                  var o = f === s;
                } else
                  var o = !0;
                if (o) {
                  if (e.examples !== void 0) {
                    const f = s;
                    if (s === f && !Array.isArray(e.examples))
                      return z.errors = [{ instancePath: r + "/examples", schemaPath: "#/properties/examples/type", keyword: "type", params: { type: "array" }, message: "must be array" }], !1;
                    var o = f === s;
                  } else
                    var o = !0;
                  if (o) {
                    if (e.multipleOf !== void 0) {
                      let f = e.multipleOf;
                      const g = s;
                      if (s === g)
                        if (typeof f == "number" && isFinite(f)) {
                          if (f <= 0 || isNaN(f))
                            return z.errors = [{ instancePath: r + "/multipleOf", schemaPath: "#/properties/multipleOf/exclusiveMinimum", keyword: "exclusiveMinimum", params: { comparison: ">", limit: 0 }, message: "must be > 0" }], !1;
                        } else
                          return z.errors = [{ instancePath: r + "/multipleOf", schemaPath: "#/properties/multipleOf/type", keyword: "type", params: { type: "number" }, message: "must be number" }], !1;
                      var o = g === s;
                    } else
                      var o = !0;
                    if (o) {
                      if (e.maximum !== void 0) {
                        let f = e.maximum;
                        const g = s;
                        if (!(typeof f == "number" && isFinite(f)))
                          return z.errors = [{ instancePath: r + "/maximum", schemaPath: "#/properties/maximum/type", keyword: "type", params: { type: "number" }, message: "must be number" }], !1;
                        var o = g === s;
                      } else
                        var o = !0;
                      if (o) {
                        if (e.exclusiveMaximum !== void 0) {
                          let f = e.exclusiveMaximum;
                          const g = s;
                          if (!(typeof f == "number" && isFinite(f)))
                            return z.errors = [{ instancePath: r + "/exclusiveMaximum", schemaPath: "#/properties/exclusiveMaximum/type", keyword: "type", params: { type: "number" }, message: "must be number" }], !1;
                          var o = g === s;
                        } else
                          var o = !0;
                        if (o) {
                          if (e.minimum !== void 0) {
                            let f = e.minimum;
                            const g = s;
                            if (!(typeof f == "number" && isFinite(f)))
                              return z.errors = [{ instancePath: r + "/minimum", schemaPath: "#/properties/minimum/type", keyword: "type", params: { type: "number" }, message: "must be number" }], !1;
                            var o = g === s;
                          } else
                            var o = !0;
                          if (o) {
                            if (e.exclusiveMinimum !== void 0) {
                              let f = e.exclusiveMinimum;
                              const g = s;
                              if (!(typeof f == "number" && isFinite(f)))
                                return z.errors = [{ instancePath: r + "/exclusiveMinimum", schemaPath: "#/properties/exclusiveMinimum/type", keyword: "type", params: { type: "number" }, message: "must be number" }], !1;
                              var o = g === s;
                            } else
                              var o = !0;
                            if (o) {
                              if (e.maxLength !== void 0) {
                                let f = e.maxLength;
                                const g = s, D = s;
                                if (!(typeof f == "number" && !(f % 1) && !isNaN(f) && isFinite(f)))
                                  return z.errors = [{ instancePath: r + "/maxLength", schemaPath: "#/definitions/nonNegativeInteger/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }], !1;
                                if (s === D && typeof f == "number" && isFinite(f) && (f < 0 || isNaN(f)))
                                  return z.errors = [{ instancePath: r + "/maxLength", schemaPath: "#/definitions/nonNegativeInteger/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" }], !1;
                                var o = g === s;
                              } else
                                var o = !0;
                              if (o) {
                                if (e.minLength !== void 0) {
                                  const f = s;
                                  Ae(e.minLength, { instancePath: r + "/minLength", parentData: e, parentDataProperty: "minLength", rootData: a }) || (i = i === null ? Ae.errors : i.concat(Ae.errors), s = i.length);
                                  var o = f === s;
                                } else
                                  var o = !0;
                                if (o) {
                                  if (e.pattern !== void 0) {
                                    let f = e.pattern;
                                    const g = s;
                                    if (s === g && s === g)
                                      if (typeof f == "string") {
                                        if (!na(f))
                                          return z.errors = [{ instancePath: r + "/pattern", schemaPath: "#/properties/pattern/format", keyword: "format", params: { format: "regex" }, message: 'must match format "regex"' }], !1;
                                      } else
                                        return z.errors = [{ instancePath: r + "/pattern", schemaPath: "#/properties/pattern/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
                                    var o = g === s;
                                  } else
                                    var o = !0;
                                  if (o) {
                                    if (e.additionalItems !== void 0) {
                                      const f = s;
                                      z(e.additionalItems, { instancePath: r + "/additionalItems", parentData: e, parentDataProperty: "additionalItems", rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                      var o = f === s;
                                    } else
                                      var o = !0;
                                    if (o) {
                                      if (e.items !== void 0) {
                                        let f = e.items;
                                        const g = s, D = s;
                                        let p = !1;
                                        const b = s;
                                        z(f, { instancePath: r + "/items", parentData: e, parentDataProperty: "items", rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                        var d = b === s;
                                        if (p = p || d, !p) {
                                          const C = s;
                                          _e(f, { instancePath: r + "/items", parentData: e, parentDataProperty: "items", rootData: a }) || (i = i === null ? _e.errors : i.concat(_e.errors), s = i.length);
                                          var d = C === s;
                                          p = p || d;
                                        }
                                        if (p)
                                          s = D, i !== null && (D ? i.length = D : i = null);
                                        else {
                                          const C = { instancePath: r + "/items", schemaPath: "#/properties/items/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                          return i === null ? i = [C] : i.push(C), s++, z.errors = i, !1;
                                        }
                                        var o = g === s;
                                      } else
                                        var o = !0;
                                      if (o) {
                                        if (e.maxItems !== void 0) {
                                          let f = e.maxItems;
                                          const g = s, D = s;
                                          if (!(typeof f == "number" && !(f % 1) && !isNaN(f) && isFinite(f)))
                                            return z.errors = [{ instancePath: r + "/maxItems", schemaPath: "#/definitions/nonNegativeInteger/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }], !1;
                                          if (s === D && typeof f == "number" && isFinite(f) && (f < 0 || isNaN(f)))
                                            return z.errors = [{ instancePath: r + "/maxItems", schemaPath: "#/definitions/nonNegativeInteger/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" }], !1;
                                          var o = g === s;
                                        } else
                                          var o = !0;
                                        if (o) {
                                          if (e.minItems !== void 0) {
                                            const f = s;
                                            Ae(e.minItems, { instancePath: r + "/minItems", parentData: e, parentDataProperty: "minItems", rootData: a }) || (i = i === null ? Ae.errors : i.concat(Ae.errors), s = i.length);
                                            var o = f === s;
                                          } else
                                            var o = !0;
                                          if (o) {
                                            if (e.uniqueItems !== void 0) {
                                              const f = s;
                                              if (typeof e.uniqueItems != "boolean")
                                                return z.errors = [{ instancePath: r + "/uniqueItems", schemaPath: "#/properties/uniqueItems/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }], !1;
                                              var o = f === s;
                                            } else
                                              var o = !0;
                                            if (o) {
                                              if (e.contains !== void 0) {
                                                const f = s;
                                                z(e.contains, { instancePath: r + "/contains", parentData: e, parentDataProperty: "contains", rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                                var o = f === s;
                                              } else
                                                var o = !0;
                                              if (o) {
                                                if (e.maxProperties !== void 0) {
                                                  let f = e.maxProperties;
                                                  const g = s, D = s;
                                                  if (!(typeof f == "number" && !(f % 1) && !isNaN(f) && isFinite(f)))
                                                    return z.errors = [{ instancePath: r + "/maxProperties", schemaPath: "#/definitions/nonNegativeInteger/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }], !1;
                                                  if (s === D && typeof f == "number" && isFinite(f) && (f < 0 || isNaN(f)))
                                                    return z.errors = [{ instancePath: r + "/maxProperties", schemaPath: "#/definitions/nonNegativeInteger/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" }], !1;
                                                  var o = g === s;
                                                } else
                                                  var o = !0;
                                                if (o) {
                                                  if (e.minProperties !== void 0) {
                                                    const f = s;
                                                    Ae(e.minProperties, { instancePath: r + "/minProperties", parentData: e, parentDataProperty: "minProperties", rootData: a }) || (i = i === null ? Ae.errors : i.concat(Ae.errors), s = i.length);
                                                    var o = f === s;
                                                  } else
                                                    var o = !0;
                                                  if (o) {
                                                    if (e.required !== void 0) {
                                                      let f = e.required;
                                                      const g = s;
                                                      if (s === s)
                                                        if (Array.isArray(f)) {
                                                          var c = !0;
                                                          const b = f.length;
                                                          for (let R = 0; R < b; R++) {
                                                            const C = s;
                                                            if (typeof f[R] != "string")
                                                              return z.errors = [{ instancePath: r + "/required/" + R, schemaPath: "#/definitions/stringArray/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
                                                            var c = C === s;
                                                            if (!c)
                                                              break;
                                                          }
                                                          if (c) {
                                                            let R = f.length, C;
                                                            if (R > 1) {
                                                              const L = {};
                                                              for (; R--; ) {
                                                                let J = f[R];
                                                                if (typeof J == "string") {
                                                                  if (typeof L[J] == "number")
                                                                    return C = L[J], z.errors = [{ instancePath: r + "/required", schemaPath: "#/definitions/stringArray/uniqueItems", keyword: "uniqueItems", params: { i: R, j: C }, message: "must NOT have duplicate items (items ## " + C + " and " + R + " are identical)" }], !1;
                                                                  L[J] = R;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        } else
                                                          return z.errors = [{ instancePath: r + "/required", schemaPath: "#/definitions/stringArray/type", keyword: "type", params: { type: "array" }, message: "must be array" }], !1;
                                                      var o = g === s;
                                                    } else
                                                      var o = !0;
                                                    if (o) {
                                                      if (e.additionalProperties !== void 0) {
                                                        const f = s;
                                                        z(e.additionalProperties, { instancePath: r + "/additionalProperties", parentData: e, parentDataProperty: "additionalProperties", rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                                        var o = f === s;
                                                      } else
                                                        var o = !0;
                                                      if (o) {
                                                        if (e.definitions !== void 0) {
                                                          let f = e.definitions;
                                                          const g = s;
                                                          if (s === g)
                                                            if (f && typeof f == "object" && !Array.isArray(f))
                                                              for (const p in f) {
                                                                const b = s;
                                                                z(f[p], { instancePath: r + "/definitions/" + p.replace(/~/g, "~0").replace(/\//g, "~1"), parentData: f, parentDataProperty: p, rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                                                var m = b === s;
                                                                if (!m)
                                                                  break;
                                                              }
                                                            else
                                                              return z.errors = [{ instancePath: r + "/definitions", schemaPath: "#/properties/definitions/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
                                                          var o = g === s;
                                                        } else
                                                          var o = !0;
                                                        if (o) {
                                                          if (e.properties !== void 0) {
                                                            let f = e.properties;
                                                            const g = s;
                                                            if (s === g)
                                                              if (f && typeof f == "object" && !Array.isArray(f))
                                                                for (const p in f) {
                                                                  const b = s;
                                                                  z(f[p], { instancePath: r + "/properties/" + p.replace(/~/g, "~0").replace(/\//g, "~1"), parentData: f, parentDataProperty: p, rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                                                  var _ = b === s;
                                                                  if (!_)
                                                                    break;
                                                                }
                                                              else
                                                                return z.errors = [{ instancePath: r + "/properties", schemaPath: "#/properties/properties/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
                                                            var o = g === s;
                                                          } else
                                                            var o = !0;
                                                          if (o) {
                                                            if (e.patternProperties !== void 0) {
                                                              let f = e.patternProperties;
                                                              const g = s;
                                                              if (s === g)
                                                                if (f && typeof f == "object" && !Array.isArray(f)) {
                                                                  for (const p in f) {
                                                                    const b = s;
                                                                    if (s === b && typeof p == "string" && !na(p)) {
                                                                      const R = { instancePath: r + "/patternProperties", schemaPath: "#/properties/patternProperties/propertyNames/format", keyword: "format", params: { format: "regex" }, message: 'must match format "regex"', propertyName: p };
                                                                      i === null ? i = [R] : i.push(R), s++;
                                                                    }
                                                                    var k = b === s;
                                                                    if (!k) {
                                                                      const R = { instancePath: r + "/patternProperties", schemaPath: "#/properties/patternProperties/propertyNames", keyword: "propertyNames", params: { propertyName: p }, message: "property name must be valid" };
                                                                      return i === null ? i = [R] : i.push(R), s++, z.errors = i, !1;
                                                                    }
                                                                  }
                                                                  if (k)
                                                                    for (const p in f) {
                                                                      const b = s;
                                                                      z(f[p], { instancePath: r + "/patternProperties/" + p.replace(/~/g, "~0").replace(/\//g, "~1"), parentData: f, parentDataProperty: p, rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                                                      var j = b === s;
                                                                      if (!j)
                                                                        break;
                                                                    }
                                                                } else
                                                                  return z.errors = [{ instancePath: r + "/patternProperties", schemaPath: "#/properties/patternProperties/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
                                                              var o = g === s;
                                                            } else
                                                              var o = !0;
                                                            if (o) {
                                                              if (e.dependencies !== void 0) {
                                                                let f = e.dependencies;
                                                                const g = s;
                                                                if (s === g)
                                                                  if (f && typeof f == "object" && !Array.isArray(f))
                                                                    for (const p in f) {
                                                                      let b = f[p];
                                                                      const R = s, C = s;
                                                                      let L = !1;
                                                                      const J = s;
                                                                      z(b, { instancePath: r + "/dependencies/" + p.replace(/~/g, "~0").replace(/\//g, "~1"), parentData: f, parentDataProperty: p, rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                                                      var O = J === s;
                                                                      if (L = L || O, !L) {
                                                                        const q = s;
                                                                        if (s === s)
                                                                          if (Array.isArray(b)) {
                                                                            var P = !0;
                                                                            const pe = b.length;
                                                                            for (let ce = 0; ce < pe; ce++) {
                                                                              const je = s;
                                                                              if (typeof b[ce] != "string") {
                                                                                const be = { instancePath: r + "/dependencies/" + p.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + ce, schemaPath: "#/definitions/stringArray/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                                i === null ? i = [be] : i.push(be), s++;
                                                                              }
                                                                              var P = je === s;
                                                                              if (!P)
                                                                                break;
                                                                            }
                                                                            if (P) {
                                                                              let ce = b.length, je;
                                                                              if (ce > 1) {
                                                                                const We = {};
                                                                                for (; ce--; ) {
                                                                                  let be = b[ce];
                                                                                  if (typeof be == "string") {
                                                                                    if (typeof We[be] == "number") {
                                                                                      je = We[be];
                                                                                      const F = { instancePath: r + "/dependencies/" + p.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/stringArray/uniqueItems", keyword: "uniqueItems", params: { i: ce, j: je }, message: "must NOT have duplicate items (items ## " + je + " and " + ce + " are identical)" };
                                                                                      i === null ? i = [F] : i.push(F), s++;
                                                                                      break;
                                                                                    }
                                                                                    We[be] = ce;
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          } else {
                                                                            const pe = { instancePath: r + "/dependencies/" + p.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/stringArray/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                                                            i === null ? i = [pe] : i.push(pe), s++;
                                                                          }
                                                                        var O = q === s;
                                                                        L = L || O;
                                                                      }
                                                                      if (L)
                                                                        s = C, i !== null && (C ? i.length = C : i = null);
                                                                      else {
                                                                        const q = { instancePath: r + "/dependencies/" + p.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/properties/dependencies/additionalProperties/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                                        return i === null ? i = [q] : i.push(q), s++, z.errors = i, !1;
                                                                      }
                                                                      var S = R === s;
                                                                      if (!S)
                                                                        break;
                                                                    }
                                                                  else
                                                                    return z.errors = [{ instancePath: r + "/dependencies", schemaPath: "#/properties/dependencies/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
                                                                var o = g === s;
                                                              } else
                                                                var o = !0;
                                                              if (o) {
                                                                if (e.propertyNames !== void 0) {
                                                                  const f = s;
                                                                  z(e.propertyNames, { instancePath: r + "/propertyNames", parentData: e, parentDataProperty: "propertyNames", rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                                                  var o = f === s;
                                                                } else
                                                                  var o = !0;
                                                                if (o) {
                                                                  if (e.enum !== void 0) {
                                                                    let f = e.enum;
                                                                    const g = s;
                                                                    if (s === g)
                                                                      if (Array.isArray(f)) {
                                                                        if (f.length < 1)
                                                                          return z.errors = [{ instancePath: r + "/enum", schemaPath: "#/properties/enum/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" }], !1;
                                                                        {
                                                                          let p = f.length, b;
                                                                          if (p > 1) {
                                                                            for (; p--; )
                                                                              for (b = p; b--; )
                                                                                if (aa(f[p], f[b]))
                                                                                  return z.errors = [{ instancePath: r + "/enum", schemaPath: "#/properties/enum/uniqueItems", keyword: "uniqueItems", params: { i: p, j: b }, message: "must NOT have duplicate items (items ## " + b + " and " + p + " are identical)" }], !1;
                                                                          }
                                                                        }
                                                                      } else
                                                                        return z.errors = [{ instancePath: r + "/enum", schemaPath: "#/properties/enum/type", keyword: "type", params: { type: "array" }, message: "must be array" }], !1;
                                                                    var o = g === s;
                                                                  } else
                                                                    var o = !0;
                                                                  if (o) {
                                                                    if (e.type !== void 0) {
                                                                      let f = e.type;
                                                                      const g = s, D = s;
                                                                      let p = !1;
                                                                      const b = s;
                                                                      if (!(f === "array" || f === "boolean" || f === "integer" || f === "null" || f === "number" || f === "object" || f === "string")) {
                                                                        const C = { instancePath: r + "/type", schemaPath: "#/definitions/simpleTypes/enum", keyword: "enum", params: { allowedValues: ra.enum }, message: "must be equal to one of the allowed values" };
                                                                        i === null ? i = [C] : i.push(C), s++;
                                                                      }
                                                                      var h = b === s;
                                                                      if (p = p || h, !p) {
                                                                        const C = s;
                                                                        if (s === C)
                                                                          if (Array.isArray(f))
                                                                            if (f.length < 1) {
                                                                              const J = { instancePath: r + "/type", schemaPath: "#/properties/type/anyOf/1/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" };
                                                                              i === null ? i = [J] : i.push(J), s++;
                                                                            } else {
                                                                              var w = !0;
                                                                              const J = f.length;
                                                                              for (let q = 0; q < J; q++) {
                                                                                let x = f[q];
                                                                                const ne = s;
                                                                                if (!(x === "array" || x === "boolean" || x === "integer" || x === "null" || x === "number" || x === "object" || x === "string")) {
                                                                                  const ce = { instancePath: r + "/type/" + q, schemaPath: "#/definitions/simpleTypes/enum", keyword: "enum", params: { allowedValues: ra.enum }, message: "must be equal to one of the allowed values" };
                                                                                  i === null ? i = [ce] : i.push(ce), s++;
                                                                                }
                                                                                var w = ne === s;
                                                                                if (!w)
                                                                                  break;
                                                                              }
                                                                              if (w) {
                                                                                let q = f.length, x;
                                                                                if (q > 1) {
                                                                                  e:
                                                                                    for (; q--; )
                                                                                      for (x = q; x--; )
                                                                                        if (aa(f[q], f[x])) {
                                                                                          const ne = { instancePath: r + "/type", schemaPath: "#/properties/type/anyOf/1/uniqueItems", keyword: "uniqueItems", params: { i: q, j: x }, message: "must NOT have duplicate items (items ## " + x + " and " + q + " are identical)" };
                                                                                          i === null ? i = [ne] : i.push(ne), s++;
                                                                                          break e;
                                                                                        }
                                                                                }
                                                                              }
                                                                            }
                                                                          else {
                                                                            const J = { instancePath: r + "/type", schemaPath: "#/properties/type/anyOf/1/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                                                            i === null ? i = [J] : i.push(J), s++;
                                                                          }
                                                                        var h = C === s;
                                                                        p = p || h;
                                                                      }
                                                                      if (p)
                                                                        s = D, i !== null && (D ? i.length = D : i = null);
                                                                      else {
                                                                        const C = { instancePath: r + "/type", schemaPath: "#/properties/type/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                                        return i === null ? i = [C] : i.push(C), s++, z.errors = i, !1;
                                                                      }
                                                                      var o = g === s;
                                                                    } else
                                                                      var o = !0;
                                                                    if (o) {
                                                                      if (e.format !== void 0) {
                                                                        const f = s;
                                                                        if (typeof e.format != "string")
                                                                          return z.errors = [{ instancePath: r + "/format", schemaPath: "#/properties/format/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
                                                                        var o = f === s;
                                                                      } else
                                                                        var o = !0;
                                                                      if (o) {
                                                                        if (e.contentMediaType !== void 0) {
                                                                          const f = s;
                                                                          if (typeof e.contentMediaType != "string")
                                                                            return z.errors = [{ instancePath: r + "/contentMediaType", schemaPath: "#/properties/contentMediaType/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
                                                                          var o = f === s;
                                                                        } else
                                                                          var o = !0;
                                                                        if (o) {
                                                                          if (e.contentEncoding !== void 0) {
                                                                            const f = s;
                                                                            if (typeof e.contentEncoding != "string")
                                                                              return z.errors = [{ instancePath: r + "/contentEncoding", schemaPath: "#/properties/contentEncoding/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
                                                                            var o = f === s;
                                                                          } else
                                                                            var o = !0;
                                                                          if (o) {
                                                                            if (e.if !== void 0) {
                                                                              const f = s;
                                                                              z(e.if, { instancePath: r + "/if", parentData: e, parentDataProperty: "if", rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                                                              var o = f === s;
                                                                            } else
                                                                              var o = !0;
                                                                            if (o) {
                                                                              if (e.then !== void 0) {
                                                                                const f = s;
                                                                                z(e.then, { instancePath: r + "/then", parentData: e, parentDataProperty: "then", rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                                                                var o = f === s;
                                                                              } else
                                                                                var o = !0;
                                                                              if (o) {
                                                                                if (e.else !== void 0) {
                                                                                  const f = s;
                                                                                  z(e.else, { instancePath: r + "/else", parentData: e, parentDataProperty: "else", rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                                                                  var o = f === s;
                                                                                } else
                                                                                  var o = !0;
                                                                                if (o) {
                                                                                  if (e.allOf !== void 0) {
                                                                                    const f = s;
                                                                                    _e(e.allOf, { instancePath: r + "/allOf", parentData: e, parentDataProperty: "allOf", rootData: a }) || (i = i === null ? _e.errors : i.concat(_e.errors), s = i.length);
                                                                                    var o = f === s;
                                                                                  } else
                                                                                    var o = !0;
                                                                                  if (o) {
                                                                                    if (e.anyOf !== void 0) {
                                                                                      const f = s;
                                                                                      _e(e.anyOf, { instancePath: r + "/anyOf", parentData: e, parentDataProperty: "anyOf", rootData: a }) || (i = i === null ? _e.errors : i.concat(_e.errors), s = i.length);
                                                                                      var o = f === s;
                                                                                    } else
                                                                                      var o = !0;
                                                                                    if (o) {
                                                                                      if (e.oneOf !== void 0) {
                                                                                        const f = s;
                                                                                        _e(e.oneOf, { instancePath: r + "/oneOf", parentData: e, parentDataProperty: "oneOf", rootData: a }) || (i = i === null ? _e.errors : i.concat(_e.errors), s = i.length);
                                                                                        var o = f === s;
                                                                                      } else
                                                                                        var o = !0;
                                                                                      if (o)
                                                                                        if (e.not !== void 0) {
                                                                                          const f = s;
                                                                                          z(e.not, { instancePath: r + "/not", parentData: e, parentDataProperty: "not", rootData: a }) || (i = i === null ? z.errors : i.concat(z.errors), s = i.length);
                                                                                          var o = f === s;
                                                                                        } else
                                                                                          var o = !0;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return z.errors = i, s === 0;
}
const hi = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;
var Ca = class Ma {
  constructor(r) {
    switch (r && r.rounding) {
      case "floor":
        this.parseInteger = Math.floor;
        break;
      case "ceil":
        this.parseInteger = Math.ceil;
        break;
      case "round":
        this.parseInteger = Math.round;
        break;
      case "trunc":
      default:
        this.parseInteger = Math.trunc;
        break;
    }
    this._options = r;
  }
  asInteger(r) {
    if (typeof r == "number") {
      if (r === 1 / 0 || r === -1 / 0)
        throw new Error(`The value "${r}" cannot be converted to an integer.`);
      if (Number.isInteger(r))
        return "" + r;
      if (Number.isNaN(r))
        throw new Error(`The value "${r}" cannot be converted to an integer.`);
      return this.parseInteger(r);
    } else {
      if (r === null)
        return "0";
      if (typeof r == "bigint")
        return r.toString();
      {
        const t = this.parseInteger(r);
        if (Number.isFinite(t))
          return "" + t;
        throw new Error(`The value "${r}" cannot be converted to an integer.`);
      }
    }
  }
  asNumber(r) {
    const t = Number(r);
    if (Number.isNaN(t))
      throw new Error(`The value "${r}" cannot be converted to a number.`);
    return Number.isFinite(t) ? "" + t : "null";
  }
  asBoolean(r) {
    return r && "true" || "false";
  }
  asDateTime(r) {
    if (r === null)
      return '""';
    if (r instanceof Date)
      return '"' + r.toISOString() + '"';
    if (typeof r == "string")
      return '"' + r + '"';
    throw new Error(`The value "${r}" cannot be converted to a date-time.`);
  }
  asDate(r) {
    if (r === null)
      return '""';
    if (r instanceof Date)
      return '"' + new Date(r.getTime() - r.getTimezoneOffset() * 6e4).toISOString().slice(0, 10) + '"';
    if (typeof r == "string")
      return '"' + r + '"';
    throw new Error(`The value "${r}" cannot be converted to a date.`);
  }
  asTime(r) {
    if (r === null)
      return '""';
    if (r instanceof Date)
      return '"' + new Date(r.getTime() - r.getTimezoneOffset() * 6e4).toISOString().slice(11, 19) + '"';
    if (typeof r == "string")
      return '"' + r + '"';
    throw new Error(`The value "${r}" cannot be converted to a time.`);
  }
  asString(r) {
    if (typeof r != "string") {
      if (r === null)
        return '""';
      if (r instanceof Date)
        return '"' + r.toISOString() + '"';
      r instanceof RegExp ? r = r.source : r = r.toString();
    }
    return hi.test(r) ? r.length < 42 ? this.asStringSmall(r) : JSON.stringify(r) : '"' + r + '"';
  }
  // magically escape strings for json
  // relying on their charCodeAt
  // everything below 32 needs JSON.stringify()
  // every string that contain surrogate needs JSON.stringify()
  // 34 and 92 happens all the time, so we
  // have a fast case for them
  asStringSmall(r) {
    const t = r.length;
    let n = "", a = 0, i = !1, s = !1, o = 255;
    for (var d = 0; d < t && o >= 32; d++)
      o = r.charCodeAt(d), o >= 55296 && o <= 57343 && (s = !0), (o === 34 || o === 92) && (n += r.slice(a, d) + "\\", a = d, i = !0);
    return i ? n += r.slice(a) : n = r, o < 32 || s === !0 ? JSON.stringify(r) : '"' + n + '"';
  }
  getState() {
    return this._options;
  }
  static restoreFromState(r) {
    return new Ma(r);
  }
}, xr = {}, mi = {
  get exports() {
    return xr;
  },
  set exports(e) {
    xr = e;
  }
}, za = {}, Me = {}, jr = {}, tt = {}, Z = {}, et = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class r {
  }
  e._CodeOrName = r, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class t extends r {
    constructor(w) {
      if (super(), !e.IDENTIFIER.test(w))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = w;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  e.Name = t;
  class n extends r {
    constructor(w) {
      super(), this._items = typeof w == "string" ? [w] : w;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const w = this._items[0];
      return w === "" || w === '""';
    }
    get str() {
      var w;
      return (w = this._str) !== null && w !== void 0 ? w : this._str = this._items.reduce((f, g) => `${f}${g}`, "");
    }
    get names() {
      var w;
      return (w = this._names) !== null && w !== void 0 ? w : this._names = this._items.reduce((f, g) => (g instanceof t && (f[g.str] = (f[g.str] || 0) + 1), f), {});
    }
  }
  e._Code = n, e.nil = new n("");
  function a(h, ...w) {
    const f = [h[0]];
    let g = 0;
    for (; g < w.length; )
      o(f, w[g]), f.push(h[++g]);
    return new n(f);
  }
  e._ = a;
  const i = new n("+");
  function s(h, ...w) {
    const f = [j(h[0])];
    let g = 0;
    for (; g < w.length; )
      f.push(i), o(f, w[g]), f.push(i, j(h[++g]));
    return d(f), new n(f);
  }
  e.str = s;
  function o(h, w) {
    w instanceof n ? h.push(...w._items) : w instanceof t ? h.push(w) : h.push(_(w));
  }
  e.addCodeArg = o;
  function d(h) {
    let w = 1;
    for (; w < h.length - 1; ) {
      if (h[w] === i) {
        const f = c(h[w - 1], h[w + 1]);
        if (f !== void 0) {
          h.splice(w - 1, 3, f);
          continue;
        }
        h[w++] = "+";
      }
      w++;
    }
  }
  function c(h, w) {
    if (w === '""')
      return h;
    if (h === '""')
      return w;
    if (typeof h == "string")
      return w instanceof t || h[h.length - 1] !== '"' ? void 0 : typeof w != "string" ? `${h.slice(0, -1)}${w}"` : w[0] === '"' ? h.slice(0, -1) + w.slice(1) : void 0;
    if (typeof w == "string" && w[0] === '"' && !(h instanceof t))
      return `"${h}${w.slice(1)}`;
  }
  function m(h, w) {
    return w.emptyStr() ? h : h.emptyStr() ? w : s`${h}${w}`;
  }
  e.strConcat = m;
  function _(h) {
    return typeof h == "number" || typeof h == "boolean" || h === null ? h : j(Array.isArray(h) ? h.join(",") : h);
  }
  function k(h) {
    return new n(j(h));
  }
  e.stringify = k;
  function j(h) {
    return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = j;
  function O(h) {
    return typeof h == "string" && e.IDENTIFIER.test(h) ? new n(`.${h}`) : a`[${h}]`;
  }
  e.getProperty = O;
  function P(h) {
    if (typeof h == "string" && e.IDENTIFIER.test(h))
      return new n(`${h}`);
    throw new Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
  }
  e.getEsmExportName = P;
  function S(h) {
    return new n(h.toString());
  }
  e.regexpCode = S;
})(et);
var Ht = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const r = et;
  class t extends Error {
    constructor(c) {
      super(`CodeGen: "code" for ${c} not defined`), this.value = c.value;
    }
  }
  var n;
  (function(d) {
    d[d.Started = 0] = "Started", d[d.Completed = 1] = "Completed";
  })(n = e.UsedValueState || (e.UsedValueState = {})), e.varKinds = {
    const: new r.Name("const"),
    let: new r.Name("let"),
    var: new r.Name("var")
  };
  class a {
    constructor({ prefixes: c, parent: m } = {}) {
      this._names = {}, this._prefixes = c, this._parent = m;
    }
    toName(c) {
      return c instanceof r.Name ? c : this.name(c);
    }
    name(c) {
      return new r.Name(this._newName(c));
    }
    _newName(c) {
      const m = this._names[c] || this._nameGroup(c);
      return `${c}${m.index++}`;
    }
    _nameGroup(c) {
      var m, _;
      if (!((_ = (m = this._parent) === null || m === void 0 ? void 0 : m._prefixes) === null || _ === void 0) && _.has(c) || this._prefixes && !this._prefixes.has(c))
        throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);
      return this._names[c] = { prefix: c, index: 0 };
    }
  }
  e.Scope = a;
  class i extends r.Name {
    constructor(c, m) {
      super(m), this.prefix = c;
    }
    setValue(c, { property: m, itemIndex: _ }) {
      this.value = c, this.scopePath = (0, r._)`.${new r.Name(m)}[${_}]`;
    }
  }
  e.ValueScopeName = i;
  const s = (0, r._)`\n`;
  class o extends a {
    constructor(c) {
      super(c), this._values = {}, this._scope = c.scope, this.opts = { ...c, _n: c.lines ? s : r.nil };
    }
    get() {
      return this._scope;
    }
    name(c) {
      return new i(c, this._newName(c));
    }
    value(c, m) {
      var _;
      if (m.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const k = this.toName(c), { prefix: j } = k, O = (_ = m.key) !== null && _ !== void 0 ? _ : m.ref;
      let P = this._values[j];
      if (P) {
        const w = P.get(O);
        if (w)
          return w;
      } else
        P = this._values[j] = /* @__PURE__ */ new Map();
      P.set(O, k);
      const S = this._scope[j] || (this._scope[j] = []), h = S.length;
      return S[h] = m.ref, k.setValue(m, { property: j, itemIndex: h }), k;
    }
    getValue(c, m) {
      const _ = this._values[c];
      if (_)
        return _.get(m);
    }
    scopeRefs(c, m = this._values) {
      return this._reduceValues(m, (_) => {
        if (_.scopePath === void 0)
          throw new Error(`CodeGen: name "${_}" has no value`);
        return (0, r._)`${c}${_.scopePath}`;
      });
    }
    scopeCode(c = this._values, m, _) {
      return this._reduceValues(c, (k) => {
        if (k.value === void 0)
          throw new Error(`CodeGen: name "${k}" has no value`);
        return k.value.code;
      }, m, _);
    }
    _reduceValues(c, m, _ = {}, k) {
      let j = r.nil;
      for (const O in c) {
        const P = c[O];
        if (!P)
          continue;
        const S = _[O] = _[O] || /* @__PURE__ */ new Map();
        P.forEach((h) => {
          if (S.has(h))
            return;
          S.set(h, n.Started);
          let w = m(h);
          if (w) {
            const f = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            j = (0, r._)`${j}${f} ${h} = ${w};${this.opts._n}`;
          } else if (w = k == null ? void 0 : k(h))
            j = (0, r._)`${j}${w}${this.opts._n}`;
          else
            throw new t(h);
          S.set(h, n.Completed);
        });
      }
      return j;
    }
  }
  e.ValueScope = o;
})(Ht);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const r = et, t = Ht;
  var n = et;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return n._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return n.str;
  } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
    return n.strConcat;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return n.nil;
  } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
    return n.getProperty;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return n.stringify;
  } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
    return n.regexpCode;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return n.Name;
  } });
  var a = Ht;
  Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
    return a.Scope;
  } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
    return a.ValueScope;
  } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
    return a.ValueScopeName;
  } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
    return a.varKinds;
  } }), e.operators = {
    GT: new r._Code(">"),
    GTE: new r._Code(">="),
    LT: new r._Code("<"),
    LTE: new r._Code("<="),
    EQ: new r._Code("==="),
    NEQ: new r._Code("!=="),
    NOT: new r._Code("!"),
    OR: new r._Code("||"),
    AND: new r._Code("&&"),
    ADD: new r._Code("+")
  };
  class i {
    optimizeNodes() {
      return this;
    }
    optimizeNames(u, v) {
      return this;
    }
  }
  class s extends i {
    constructor(u, v, T) {
      super(), this.varKind = u, this.name = v, this.rhs = T;
    }
    render({ es5: u, _n: v }) {
      const T = u ? t.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${T} ${this.name}${V};` + v;
    }
    optimizeNames(u, v) {
      if (u[this.name.str])
        return this.rhs && (this.rhs = ne(this.rhs, u, v)), this;
    }
    get names() {
      return this.rhs instanceof r._CodeOrName ? this.rhs.names : {};
    }
  }
  class o extends i {
    constructor(u, v, T) {
      super(), this.lhs = u, this.rhs = v, this.sideEffects = T;
    }
    render({ _n: u }) {
      return `${this.lhs} = ${this.rhs};` + u;
    }
    optimizeNames(u, v) {
      if (!(this.lhs instanceof r.Name && !u[this.lhs.str] && !this.sideEffects))
        return this.rhs = ne(this.rhs, u, v), this;
    }
    get names() {
      const u = this.lhs instanceof r.Name ? {} : { ...this.lhs.names };
      return x(u, this.rhs);
    }
  }
  class d extends o {
    constructor(u, v, T, V) {
      super(u, T, V), this.op = v;
    }
    render({ _n: u }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + u;
    }
  }
  class c extends i {
    constructor(u) {
      super(), this.label = u, this.names = {};
    }
    render({ _n: u }) {
      return `${this.label}:` + u;
    }
  }
  class m extends i {
    constructor(u) {
      super(), this.label = u, this.names = {};
    }
    render({ _n: u }) {
      return `break${this.label ? ` ${this.label}` : ""};` + u;
    }
  }
  class _ extends i {
    constructor(u) {
      super(), this.error = u;
    }
    render({ _n: u }) {
      return `throw ${this.error};` + u;
    }
    get names() {
      return this.error.names;
    }
  }
  class k extends i {
    constructor(u) {
      super(), this.code = u;
    }
    render({ _n: u }) {
      return `${this.code};` + u;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(u, v) {
      return this.code = ne(this.code, u, v), this;
    }
    get names() {
      return this.code instanceof r._CodeOrName ? this.code.names : {};
    }
  }
  class j extends i {
    constructor(u = []) {
      super(), this.nodes = u;
    }
    render(u) {
      return this.nodes.reduce((v, T) => v + T.render(u), "");
    }
    optimizeNodes() {
      const { nodes: u } = this;
      let v = u.length;
      for (; v--; ) {
        const T = u[v].optimizeNodes();
        Array.isArray(T) ? u.splice(v, 1, ...T) : T ? u[v] = T : u.splice(v, 1);
      }
      return u.length > 0 ? this : void 0;
    }
    optimizeNames(u, v) {
      const { nodes: T } = this;
      let V = T.length;
      for (; V--; ) {
        const U = T[V];
        U.optimizeNames(u, v) || (pe(u, U.names), T.splice(V, 1));
      }
      return T.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((u, v) => q(u, v.names), {});
    }
  }
  class O extends j {
    render(u) {
      return "{" + u._n + super.render(u) + "}" + u._n;
    }
  }
  class P extends j {
  }
  class S extends O {
  }
  S.kind = "else";
  class h extends O {
    constructor(u, v) {
      super(v), this.condition = u;
    }
    render(u) {
      let v = `if(${this.condition})` + super.render(u);
      return this.else && (v += "else " + this.else.render(u)), v;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const u = this.condition;
      if (u === !0)
        return this.nodes;
      let v = this.else;
      if (v) {
        const T = v.optimizeNodes();
        v = this.else = Array.isArray(T) ? new S(T) : T;
      }
      if (v)
        return u === !1 ? v instanceof h ? v : v.nodes : this.nodes.length ? this : new h(ce(u), v instanceof h ? [v] : v.nodes);
      if (!(u === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(u, v) {
      var T;
      if (this.else = (T = this.else) === null || T === void 0 ? void 0 : T.optimizeNames(u, v), !!(super.optimizeNames(u, v) || this.else))
        return this.condition = ne(this.condition, u, v), this;
    }
    get names() {
      const u = super.names;
      return x(u, this.condition), this.else && q(u, this.else.names), u;
    }
  }
  h.kind = "if";
  class w extends O {
  }
  w.kind = "for";
  class f extends w {
    constructor(u) {
      super(), this.iteration = u;
    }
    render(u) {
      return `for(${this.iteration})` + super.render(u);
    }
    optimizeNames(u, v) {
      if (super.optimizeNames(u, v))
        return this.iteration = ne(this.iteration, u, v), this;
    }
    get names() {
      return q(super.names, this.iteration.names);
    }
  }
  class g extends w {
    constructor(u, v, T, V) {
      super(), this.varKind = u, this.name = v, this.from = T, this.to = V;
    }
    render(u) {
      const v = u.es5 ? t.varKinds.var : this.varKind, { name: T, from: V, to: U } = this;
      return `for(${v} ${T}=${V}; ${T}<${U}; ${T}++)` + super.render(u);
    }
    get names() {
      const u = x(super.names, this.from);
      return x(u, this.to);
    }
  }
  class D extends w {
    constructor(u, v, T, V) {
      super(), this.loop = u, this.varKind = v, this.name = T, this.iterable = V;
    }
    render(u) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(u);
    }
    optimizeNames(u, v) {
      if (super.optimizeNames(u, v))
        return this.iterable = ne(this.iterable, u, v), this;
    }
    get names() {
      return q(super.names, this.iterable.names);
    }
  }
  class p extends O {
    constructor(u, v, T) {
      super(), this.name = u, this.args = v, this.async = T;
    }
    render(u) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(u);
    }
  }
  p.kind = "func";
  class b extends j {
    render(u) {
      return "return " + super.render(u);
    }
  }
  b.kind = "return";
  class R extends O {
    render(u) {
      let v = "try" + super.render(u);
      return this.catch && (v += this.catch.render(u)), this.finally && (v += this.finally.render(u)), v;
    }
    optimizeNodes() {
      var u, v;
      return super.optimizeNodes(), (u = this.catch) === null || u === void 0 || u.optimizeNodes(), (v = this.finally) === null || v === void 0 || v.optimizeNodes(), this;
    }
    optimizeNames(u, v) {
      var T, V;
      return super.optimizeNames(u, v), (T = this.catch) === null || T === void 0 || T.optimizeNames(u, v), (V = this.finally) === null || V === void 0 || V.optimizeNames(u, v), this;
    }
    get names() {
      const u = super.names;
      return this.catch && q(u, this.catch.names), this.finally && q(u, this.finally.names), u;
    }
  }
  class C extends O {
    constructor(u) {
      super(), this.error = u;
    }
    render(u) {
      return `catch(${this.error})` + super.render(u);
    }
  }
  C.kind = "catch";
  class L extends O {
    render(u) {
      return "finally" + super.render(u);
    }
  }
  L.kind = "finally";
  class J {
    constructor(u, v = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...v, _n: v.lines ? `
` : "" }, this._extScope = u, this._scope = new t.Scope({ parent: u }), this._nodes = [new P()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(u) {
      return this._scope.name(u);
    }
    // reserves unique name in the external scope
    scopeName(u) {
      return this._extScope.name(u);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(u, v) {
      const T = this._extScope.value(u, v);
      return (this._values[T.prefix] || (this._values[T.prefix] = /* @__PURE__ */ new Set())).add(T), T;
    }
    getScopeValue(u, v) {
      return this._extScope.getValue(u, v);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(u) {
      return this._extScope.scopeRefs(u, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(u, v, T, V) {
      const U = this._scope.toName(v);
      return T !== void 0 && V && (this._constants[U.str] = T), this._leafNode(new s(u, U, T)), U;
    }
    // `const` declaration (`var` in es5 mode)
    const(u, v, T) {
      return this._def(t.varKinds.const, u, v, T);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(u, v, T) {
      return this._def(t.varKinds.let, u, v, T);
    }
    // `var` declaration with optional assignment
    var(u, v, T) {
      return this._def(t.varKinds.var, u, v, T);
    }
    // assignment code
    assign(u, v, T) {
      return this._leafNode(new o(u, v, T));
    }
    // `+=` code
    add(u, v) {
      return this._leafNode(new d(u, e.operators.ADD, v));
    }
    // appends passed SafeExpr to code or executes Block
    code(u) {
      return typeof u == "function" ? u() : u !== r.nil && this._leafNode(new k(u)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...u) {
      const v = ["{"];
      for (const [T, V] of u)
        v.length > 1 && v.push(","), v.push(T), (T !== V || this.opts.es5) && (v.push(":"), (0, r.addCodeArg)(v, V));
      return v.push("}"), new r._Code(v);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(u, v, T) {
      if (this._blockNode(new h(u)), v && T)
        this.code(v).else().code(T).endIf();
      else if (v)
        this.code(v).endIf();
      else if (T)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(u) {
      return this._elseNode(new h(u));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new S());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(h, S);
    }
    _for(u, v) {
      return this._blockNode(u), v && this.code(v).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(u, v) {
      return this._for(new f(u), v);
    }
    // `for` statement for a range of values
    forRange(u, v, T, V, U = this.opts.es5 ? t.varKinds.var : t.varKinds.let) {
      const Q = this._scope.toName(u);
      return this._for(new g(U, Q, v, T), () => V(Q));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(u, v, T, V = t.varKinds.const) {
      const U = this._scope.toName(u);
      if (this.opts.es5) {
        const Q = v instanceof r.Name ? v : this.var("_arr", v);
        return this.forRange("_i", 0, (0, r._)`${Q}.length`, (ee) => {
          this.var(U, (0, r._)`${Q}[${ee}]`), T(U);
        });
      }
      return this._for(new D("of", V, U, v), () => T(U));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(u, v, T, V = this.opts.es5 ? t.varKinds.var : t.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(u, (0, r._)`Object.keys(${v})`, T);
      const U = this._scope.toName(u);
      return this._for(new D("in", V, U, v), () => T(U));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode(w);
    }
    // `label` statement
    label(u) {
      return this._leafNode(new c(u));
    }
    // `break` statement
    break(u) {
      return this._leafNode(new m(u));
    }
    // `return` statement
    return(u) {
      const v = new b();
      if (this._blockNode(v), this.code(u), v.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(b);
    }
    // `try` statement
    try(u, v, T) {
      if (!v && !T)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const V = new R();
      if (this._blockNode(V), this.code(u), v) {
        const U = this.name("e");
        this._currNode = V.catch = new C(U), v(U);
      }
      return T && (this._currNode = V.finally = new L(), this.code(T)), this._endBlockNode(C, L);
    }
    // `throw` statement
    throw(u) {
      return this._leafNode(new _(u));
    }
    // start self-balancing block
    block(u, v) {
      return this._blockStarts.push(this._nodes.length), u && this.code(u).endBlock(v), this;
    }
    // end the current self-balancing block
    endBlock(u) {
      const v = this._blockStarts.pop();
      if (v === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const T = this._nodes.length - v;
      if (T < 0 || u !== void 0 && T !== u)
        throw new Error(`CodeGen: wrong number of nodes: ${T} vs ${u} expected`);
      return this._nodes.length = v, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(u, v = r.nil, T, V) {
      return this._blockNode(new p(u, v, T)), V && this.code(V).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(p);
    }
    optimize(u = 1) {
      for (; u-- > 0; )
        this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(u) {
      return this._currNode.nodes.push(u), this;
    }
    _blockNode(u) {
      this._currNode.nodes.push(u), this._nodes.push(u);
    }
    _endBlockNode(u, v) {
      const T = this._currNode;
      if (T instanceof u || v && T instanceof v)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${v ? `${u.kind}/${v.kind}` : u.kind}"`);
    }
    _elseNode(u) {
      const v = this._currNode;
      if (!(v instanceof h))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = v.else = u, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const u = this._nodes;
      return u[u.length - 1];
    }
    set _currNode(u) {
      const v = this._nodes;
      v[v.length - 1] = u;
    }
  }
  e.CodeGen = J;
  function q(N, u) {
    for (const v in u)
      N[v] = (N[v] || 0) + (u[v] || 0);
    return N;
  }
  function x(N, u) {
    return u instanceof r._CodeOrName ? q(N, u.names) : N;
  }
  function ne(N, u, v) {
    if (N instanceof r.Name)
      return T(N);
    if (!V(N))
      return N;
    return new r._Code(N._items.reduce((U, Q) => (Q instanceof r.Name && (Q = T(Q)), Q instanceof r._Code ? U.push(...Q._items) : U.push(Q), U), []));
    function T(U) {
      const Q = v[U.str];
      return Q === void 0 || u[U.str] !== 1 ? U : (delete u[U.str], Q);
    }
    function V(U) {
      return U instanceof r._Code && U._items.some((Q) => Q instanceof r.Name && u[Q.str] === 1 && v[Q.str] !== void 0);
    }
  }
  function pe(N, u) {
    for (const v in u)
      N[v] = (N[v] || 0) - (u[v] || 0);
  }
  function ce(N) {
    return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, r._)`!${M(N)}`;
  }
  e.not = ce;
  const je = E(e.operators.AND);
  function We(...N) {
    return N.reduce(je);
  }
  e.and = We;
  const be = E(e.operators.OR);
  function F(...N) {
    return N.reduce(be);
  }
  e.or = F;
  function E(N) {
    return (u, v) => u === r.nil ? v : v === r.nil ? u : (0, r._)`${M(u)} ${N} ${M(v)}`;
  }
  function M(N) {
    return N instanceof r.Name ? N : (0, r._)`(${N})`;
  }
})(Z);
var te = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.checkStrictMode = e.getErrorPath = e.Type = e.useFunc = e.setEvaluated = e.evaluatedPropsToName = e.mergeEvaluated = e.eachItem = e.unescapeJsonPointer = e.escapeJsonPointer = e.escapeFragment = e.unescapeFragment = e.schemaRefOrVal = e.schemaHasRulesButRef = e.schemaHasRules = e.checkUnknownRules = e.alwaysValidSchema = e.toHash = void 0;
  const r = Z, t = et;
  function n(p) {
    const b = {};
    for (const R of p)
      b[R] = !0;
    return b;
  }
  e.toHash = n;
  function a(p, b) {
    return typeof b == "boolean" ? b : Object.keys(b).length === 0 ? !0 : (i(p, b), !s(b, p.self.RULES.all));
  }
  e.alwaysValidSchema = a;
  function i(p, b = p.schema) {
    const { opts: R, self: C } = p;
    if (!R.strictSchema || typeof b == "boolean")
      return;
    const L = C.RULES.keywords;
    for (const J in b)
      L[J] || D(p, `unknown keyword: "${J}"`);
  }
  e.checkUnknownRules = i;
  function s(p, b) {
    if (typeof p == "boolean")
      return !p;
    for (const R in p)
      if (b[R])
        return !0;
    return !1;
  }
  e.schemaHasRules = s;
  function o(p, b) {
    if (typeof p == "boolean")
      return !p;
    for (const R in p)
      if (R !== "$ref" && b.all[R])
        return !0;
    return !1;
  }
  e.schemaHasRulesButRef = o;
  function d({ topSchemaRef: p, schemaPath: b }, R, C, L) {
    if (!L) {
      if (typeof R == "number" || typeof R == "boolean")
        return R;
      if (typeof R == "string")
        return (0, r._)`${R}`;
    }
    return (0, r._)`${p}${b}${(0, r.getProperty)(C)}`;
  }
  e.schemaRefOrVal = d;
  function c(p) {
    return k(decodeURIComponent(p));
  }
  e.unescapeFragment = c;
  function m(p) {
    return encodeURIComponent(_(p));
  }
  e.escapeFragment = m;
  function _(p) {
    return typeof p == "number" ? `${p}` : p.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  e.escapeJsonPointer = _;
  function k(p) {
    return p.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  e.unescapeJsonPointer = k;
  function j(p, b) {
    if (Array.isArray(p))
      for (const R of p)
        b(R);
    else
      b(p);
  }
  e.eachItem = j;
  function O({ mergeNames: p, mergeToName: b, mergeValues: R, resultToName: C }) {
    return (L, J, q, x) => {
      const ne = q === void 0 ? J : q instanceof r.Name ? (J instanceof r.Name ? p(L, J, q) : b(L, J, q), q) : J instanceof r.Name ? (b(L, q, J), J) : R(J, q);
      return x === r.Name && !(ne instanceof r.Name) ? C(L, ne) : ne;
    };
  }
  e.mergeEvaluated = {
    props: O({
      mergeNames: (p, b, R) => p.if((0, r._)`${R} !== true && ${b} !== undefined`, () => {
        p.if((0, r._)`${b} === true`, () => p.assign(R, !0), () => p.assign(R, (0, r._)`${R} || {}`).code((0, r._)`Object.assign(${R}, ${b})`));
      }),
      mergeToName: (p, b, R) => p.if((0, r._)`${R} !== true`, () => {
        b === !0 ? p.assign(R, !0) : (p.assign(R, (0, r._)`${R} || {}`), S(p, R, b));
      }),
      mergeValues: (p, b) => p === !0 ? !0 : { ...p, ...b },
      resultToName: P
    }),
    items: O({
      mergeNames: (p, b, R) => p.if((0, r._)`${R} !== true && ${b} !== undefined`, () => p.assign(R, (0, r._)`${b} === true ? true : ${R} > ${b} ? ${R} : ${b}`)),
      mergeToName: (p, b, R) => p.if((0, r._)`${R} !== true`, () => p.assign(R, b === !0 ? !0 : (0, r._)`${R} > ${b} ? ${R} : ${b}`)),
      mergeValues: (p, b) => p === !0 ? !0 : Math.max(p, b),
      resultToName: (p, b) => p.var("items", b)
    })
  };
  function P(p, b) {
    if (b === !0)
      return p.var("props", !0);
    const R = p.var("props", (0, r._)`{}`);
    return b !== void 0 && S(p, R, b), R;
  }
  e.evaluatedPropsToName = P;
  function S(p, b, R) {
    Object.keys(R).forEach((C) => p.assign((0, r._)`${b}${(0, r.getProperty)(C)}`, !0));
  }
  e.setEvaluated = S;
  const h = {};
  function w(p, b) {
    return p.scopeValue("func", {
      ref: b,
      code: h[b.code] || (h[b.code] = new t._Code(b.code))
    });
  }
  e.useFunc = w;
  var f;
  (function(p) {
    p[p.Num = 0] = "Num", p[p.Str = 1] = "Str";
  })(f = e.Type || (e.Type = {}));
  function g(p, b, R) {
    if (p instanceof r.Name) {
      const C = b === f.Num;
      return R ? C ? (0, r._)`"[" + ${p} + "]"` : (0, r._)`"['" + ${p} + "']"` : C ? (0, r._)`"/" + ${p}` : (0, r._)`"/" + ${p}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return R ? (0, r.getProperty)(p).toString() : "/" + _(p);
  }
  e.getErrorPath = g;
  function D(p, b, R = p.opts.strictSchema) {
    if (R) {
      if (b = `strict mode: ${b}`, R === !0)
        throw new Error(b);
      p.self.logger.warn(b);
    }
  }
  e.checkStrictMode = D;
})(te);
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
const ve = Z, pi = {
  // validation function arguments
  data: new ve.Name("data"),
  // args passed from referencing schema
  valCxt: new ve.Name("valCxt"),
  instancePath: new ve.Name("instancePath"),
  parentData: new ve.Name("parentData"),
  parentDataProperty: new ve.Name("parentDataProperty"),
  rootData: new ve.Name("rootData"),
  dynamicAnchors: new ve.Name("dynamicAnchors"),
  // function scoped variables
  vErrors: new ve.Name("vErrors"),
  errors: new ve.Name("errors"),
  this: new ve.Name("this"),
  // "globals"
  self: new ve.Name("self"),
  scope: new ve.Name("scope"),
  // JTD serialize/parse name for JSON string and position
  json: new ve.Name("json"),
  jsonPos: new ve.Name("jsonPos"),
  jsonLen: new ve.Name("jsonLen"),
  jsonPart: new ve.Name("jsonPart")
};
Be.default = pi;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const r = Z, t = te, n = Be;
  e.keywordError = {
    message: ({ keyword: S }) => (0, r.str)`must pass "${S}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: S, schemaType: h }) => h ? (0, r.str)`"${S}" keyword must be ${h} ($data)` : (0, r.str)`"${S}" keyword is invalid ($data)`
  };
  function a(S, h = e.keywordError, w, f) {
    const { it: g } = S, { gen: D, compositeRule: p, allErrors: b } = g, R = _(S, h, w);
    f ?? (p || b) ? d(D, R) : c(g, (0, r._)`[${R}]`);
  }
  e.reportError = a;
  function i(S, h = e.keywordError, w) {
    const { it: f } = S, { gen: g, compositeRule: D, allErrors: p } = f, b = _(S, h, w);
    d(g, b), D || p || c(f, n.default.vErrors);
  }
  e.reportExtraError = i;
  function s(S, h) {
    S.assign(n.default.errors, h), S.if((0, r._)`${n.default.vErrors} !== null`, () => S.if(h, () => S.assign((0, r._)`${n.default.vErrors}.length`, h), () => S.assign(n.default.vErrors, null)));
  }
  e.resetErrorsCount = s;
  function o({ gen: S, keyword: h, schemaValue: w, data: f, errsCount: g, it: D }) {
    if (g === void 0)
      throw new Error("ajv implementation error");
    const p = S.name("err");
    S.forRange("i", g, n.default.errors, (b) => {
      S.const(p, (0, r._)`${n.default.vErrors}[${b}]`), S.if((0, r._)`${p}.instancePath === undefined`, () => S.assign((0, r._)`${p}.instancePath`, (0, r.strConcat)(n.default.instancePath, D.errorPath))), S.assign((0, r._)`${p}.schemaPath`, (0, r.str)`${D.errSchemaPath}/${h}`), D.opts.verbose && (S.assign((0, r._)`${p}.schema`, w), S.assign((0, r._)`${p}.data`, f));
    });
  }
  e.extendErrors = o;
  function d(S, h) {
    const w = S.const("err", h);
    S.if((0, r._)`${n.default.vErrors} === null`, () => S.assign(n.default.vErrors, (0, r._)`[${w}]`), (0, r._)`${n.default.vErrors}.push(${w})`), S.code((0, r._)`${n.default.errors}++`);
  }
  function c(S, h) {
    const { gen: w, validateName: f, schemaEnv: g } = S;
    g.$async ? w.throw((0, r._)`new ${S.ValidationError}(${h})`) : (w.assign((0, r._)`${f}.errors`, h), w.return(!1));
  }
  const m = {
    keyword: new r.Name("keyword"),
    schemaPath: new r.Name("schemaPath"),
    params: new r.Name("params"),
    propertyName: new r.Name("propertyName"),
    message: new r.Name("message"),
    schema: new r.Name("schema"),
    parentSchema: new r.Name("parentSchema")
  };
  function _(S, h, w) {
    const { createErrors: f } = S.it;
    return f === !1 ? (0, r._)`{}` : k(S, h, w);
  }
  function k(S, h, w = {}) {
    const { gen: f, it: g } = S, D = [
      j(g, w),
      O(S, w)
    ];
    return P(S, h, D), f.object(...D);
  }
  function j({ errorPath: S }, { instancePath: h }) {
    const w = h ? (0, r.str)`${S}${(0, t.getErrorPath)(h, t.Type.Str)}` : S;
    return [n.default.instancePath, (0, r.strConcat)(n.default.instancePath, w)];
  }
  function O({ keyword: S, it: { errSchemaPath: h } }, { schemaPath: w, parentSchema: f }) {
    let g = f ? h : (0, r.str)`${h}/${S}`;
    return w && (g = (0, r.str)`${g}${(0, t.getErrorPath)(w, t.Type.Str)}`), [m.schemaPath, g];
  }
  function P(S, { params: h, message: w }, f) {
    const { keyword: g, data: D, schemaValue: p, it: b } = S, { opts: R, propertyName: C, topSchemaRef: L, schemaPath: J } = b;
    f.push([m.keyword, g], [m.params, typeof h == "function" ? h(S) : h || (0, r._)`{}`]), R.messages && f.push([m.message, typeof w == "function" ? w(S) : w]), R.verbose && f.push([m.schema, p], [m.parentSchema, (0, r._)`${L}${J}`], [n.default.data, D]), C && f.push([m.propertyName, C]);
  }
})(tt);
Object.defineProperty(jr, "__esModule", { value: !0 });
jr.boolOrEmptySchema = jr.topBoolOrEmptySchema = void 0;
const yi = tt, gi = Z, vi = Be, $i = {
  message: "boolean schema is false"
};
function _i(e) {
  const { gen: r, schema: t, validateName: n } = e;
  t === !1 ? Fa(e, !1) : typeof t == "object" && t.$async === !0 ? r.return(vi.default.data) : (r.assign((0, gi._)`${n}.errors`, null), r.return(!0));
}
jr.topBoolOrEmptySchema = _i;
function wi(e, r) {
  const { gen: t, schema: n } = e;
  n === !1 ? (t.var(r, !1), Fa(e)) : t.var(r, !0);
}
jr.boolOrEmptySchema = wi;
function Fa(e, r) {
  const { gen: t, data: n } = e, a = {
    gen: t,
    keyword: "false schema",
    data: n,
    schema: !1,
    schemaCode: !1,
    schemaValue: !1,
    params: {},
    it: e
  };
  (0, yi.reportError)(a, $i, void 0, r);
}
var nt = {}, hr = {};
Object.defineProperty(hr, "__esModule", { value: !0 });
hr.getRules = hr.isJSONType = void 0;
const bi = ["string", "number", "integer", "boolean", "null", "object", "array"], Si = new Set(bi);
function Ei(e) {
  return typeof e == "string" && Si.has(e);
}
hr.isJSONType = Ei;
function Pi() {
  const e = {
    number: { type: "number", rules: [] },
    string: { type: "string", rules: [] },
    array: { type: "array", rules: [] },
    object: { type: "object", rules: [] }
  };
  return {
    types: { ...e, integer: !0, boolean: !0, null: !0 },
    rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
    post: { rules: [] },
    all: {},
    keywords: {}
  };
}
hr.getRules = Pi;
var Xe = {};
Object.defineProperty(Xe, "__esModule", { value: !0 });
Xe.shouldUseRule = Xe.shouldUseGroup = Xe.schemaHasRulesForType = void 0;
function Oi({ schema: e, self: r }, t) {
  const n = r.RULES.types[t];
  return n && n !== !0 && La(e, n);
}
Xe.schemaHasRulesForType = Oi;
function La(e, r) {
  return r.rules.some((t) => Va(e, t));
}
Xe.shouldUseGroup = La;
function Va(e, r) {
  var t;
  return e[r.keyword] !== void 0 || ((t = r.definition.implements) === null || t === void 0 ? void 0 : t.some((n) => e[n] !== void 0));
}
Xe.shouldUseRule = Va;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.reportTypeError = e.checkDataTypes = e.checkDataType = e.coerceAndCheckDataType = e.getJSONTypes = e.getSchemaTypes = e.DataType = void 0;
  const r = hr, t = Xe, n = tt, a = Z, i = te;
  var s;
  (function(f) {
    f[f.Correct = 0] = "Correct", f[f.Wrong = 1] = "Wrong";
  })(s = e.DataType || (e.DataType = {}));
  function o(f) {
    const g = d(f.type);
    if (g.includes("null")) {
      if (f.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!g.length && f.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      f.nullable === !0 && g.push("null");
    }
    return g;
  }
  e.getSchemaTypes = o;
  function d(f) {
    const g = Array.isArray(f) ? f : f ? [f] : [];
    if (g.every(r.isJSONType))
      return g;
    throw new Error("type must be JSONType or JSONType[]: " + g.join(","));
  }
  e.getJSONTypes = d;
  function c(f, g) {
    const { gen: D, data: p, opts: b } = f, R = _(g, b.coerceTypes), C = g.length > 0 && !(R.length === 0 && g.length === 1 && (0, t.schemaHasRulesForType)(f, g[0]));
    if (C) {
      const L = P(g, p, b.strictNumbers, s.Wrong);
      D.if(L, () => {
        R.length ? k(f, g, R) : h(f);
      });
    }
    return C;
  }
  e.coerceAndCheckDataType = c;
  const m = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function _(f, g) {
    return g ? f.filter((D) => m.has(D) || g === "array" && D === "array") : [];
  }
  function k(f, g, D) {
    const { gen: p, data: b, opts: R } = f, C = p.let("dataType", (0, a._)`typeof ${b}`), L = p.let("coerced", (0, a._)`undefined`);
    R.coerceTypes === "array" && p.if((0, a._)`${C} == 'object' && Array.isArray(${b}) && ${b}.length == 1`, () => p.assign(b, (0, a._)`${b}[0]`).assign(C, (0, a._)`typeof ${b}`).if(P(g, b, R.strictNumbers), () => p.assign(L, b))), p.if((0, a._)`${L} !== undefined`);
    for (const q of D)
      (m.has(q) || q === "array" && R.coerceTypes === "array") && J(q);
    p.else(), h(f), p.endIf(), p.if((0, a._)`${L} !== undefined`, () => {
      p.assign(b, L), j(f, L);
    });
    function J(q) {
      switch (q) {
        case "string":
          p.elseIf((0, a._)`${C} == "number" || ${C} == "boolean"`).assign(L, (0, a._)`"" + ${b}`).elseIf((0, a._)`${b} === null`).assign(L, (0, a._)`""`);
          return;
        case "number":
          p.elseIf((0, a._)`${C} == "boolean" || ${b} === null
              || (${C} == "string" && ${b} && ${b} == +${b})`).assign(L, (0, a._)`+${b}`);
          return;
        case "integer":
          p.elseIf((0, a._)`${C} === "boolean" || ${b} === null
              || (${C} === "string" && ${b} && ${b} == +${b} && !(${b} % 1))`).assign(L, (0, a._)`+${b}`);
          return;
        case "boolean":
          p.elseIf((0, a._)`${b} === "false" || ${b} === 0 || ${b} === null`).assign(L, !1).elseIf((0, a._)`${b} === "true" || ${b} === 1`).assign(L, !0);
          return;
        case "null":
          p.elseIf((0, a._)`${b} === "" || ${b} === 0 || ${b} === false`), p.assign(L, null);
          return;
        case "array":
          p.elseIf((0, a._)`${C} === "string" || ${C} === "number"
              || ${C} === "boolean" || ${b} === null`).assign(L, (0, a._)`[${b}]`);
      }
    }
  }
  function j({ gen: f, parentData: g, parentDataProperty: D }, p) {
    f.if((0, a._)`${g} !== undefined`, () => f.assign((0, a._)`${g}[${D}]`, p));
  }
  function O(f, g, D, p = s.Correct) {
    const b = p === s.Correct ? a.operators.EQ : a.operators.NEQ;
    let R;
    switch (f) {
      case "null":
        return (0, a._)`${g} ${b} null`;
      case "array":
        R = (0, a._)`Array.isArray(${g})`;
        break;
      case "object":
        R = (0, a._)`${g} && typeof ${g} == "object" && !Array.isArray(${g})`;
        break;
      case "integer":
        R = C((0, a._)`!(${g} % 1) && !isNaN(${g})`);
        break;
      case "number":
        R = C();
        break;
      default:
        return (0, a._)`typeof ${g} ${b} ${f}`;
    }
    return p === s.Correct ? R : (0, a.not)(R);
    function C(L = a.nil) {
      return (0, a.and)((0, a._)`typeof ${g} == "number"`, L, D ? (0, a._)`isFinite(${g})` : a.nil);
    }
  }
  e.checkDataType = O;
  function P(f, g, D, p) {
    if (f.length === 1)
      return O(f[0], g, D, p);
    let b;
    const R = (0, i.toHash)(f);
    if (R.array && R.object) {
      const C = (0, a._)`typeof ${g} != "object"`;
      b = R.null ? C : (0, a._)`!${g} || ${C}`, delete R.null, delete R.array, delete R.object;
    } else
      b = a.nil;
    R.number && delete R.integer;
    for (const C in R)
      b = (0, a.and)(b, O(C, g, D, p));
    return b;
  }
  e.checkDataTypes = P;
  const S = {
    message: ({ schema: f }) => `must be ${f}`,
    params: ({ schema: f, schemaValue: g }) => typeof f == "string" ? (0, a._)`{type: ${f}}` : (0, a._)`{type: ${g}}`
  };
  function h(f) {
    const g = w(f);
    (0, n.reportError)(g, S);
  }
  e.reportTypeError = h;
  function w(f) {
    const { gen: g, data: D, schema: p } = f, b = (0, i.schemaRefOrVal)(f, p, "type");
    return {
      gen: g,
      keyword: "type",
      data: D,
      schema: p.type,
      schemaCode: b,
      schemaValue: b,
      parentSchema: p,
      params: {},
      it: f
    };
  }
})(nt);
var Tt = {};
Object.defineProperty(Tt, "__esModule", { value: !0 });
Tt.assignDefaults = void 0;
const br = Z, ji = te;
function Ni(e, r) {
  const { properties: t, items: n } = e.schema;
  if (r === "object" && t)
    for (const a in t)
      sa(e, a, t[a].default);
  else
    r === "array" && Array.isArray(n) && n.forEach((a, i) => sa(e, i, a.default));
}
Tt.assignDefaults = Ni;
function sa(e, r, t) {
  const { gen: n, compositeRule: a, data: i, opts: s } = e;
  if (t === void 0)
    return;
  const o = (0, br._)`${i}${(0, br.getProperty)(r)}`;
  if (a) {
    (0, ji.checkStrictMode)(e, `default is ignored for: ${o}`);
    return;
  }
  let d = (0, br._)`${o} === undefined`;
  s.useDefaults === "empty" && (d = (0, br._)`${d} || ${o} === null || ${o} === ""`), n.if(d, (0, br._)`${o} = ${(0, br.stringify)(t)}`);
}
var Je = {}, X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.validateUnion = X.validateArray = X.usePattern = X.callValidateCode = X.schemaProperties = X.allSchemaProperties = X.noPropertyInData = X.propertyInData = X.isOwnProperty = X.hasPropFunc = X.reportMissingProp = X.checkMissingProp = X.checkReportMissingProp = void 0;
const ie = Z, en = te, rr = Be, Ii = te;
function Ai(e, r) {
  const { gen: t, data: n, it: a } = e;
  t.if(tn(t, n, r, a.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, ie._)`${r}` }, !0), e.error();
  });
}
X.checkReportMissingProp = Ai;
function ki({ gen: e, data: r, it: { opts: t } }, n, a) {
  return (0, ie.or)(...n.map((i) => (0, ie.and)(tn(e, r, i, t.ownProperties), (0, ie._)`${a} = ${i}`)));
}
X.checkMissingProp = ki;
function Ti(e, r) {
  e.setParams({ missingProperty: r }, !0), e.error();
}
X.reportMissingProp = Ti;
function qa(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, ie._)`Object.prototype.hasOwnProperty`
  });
}
X.hasPropFunc = qa;
function rn(e, r, t) {
  return (0, ie._)`${qa(e)}.call(${r}, ${t})`;
}
X.isOwnProperty = rn;
function Ri(e, r, t, n) {
  const a = (0, ie._)`${r}${(0, ie.getProperty)(t)} !== undefined`;
  return n ? (0, ie._)`${a} && ${rn(e, r, t)}` : a;
}
X.propertyInData = Ri;
function tn(e, r, t, n) {
  const a = (0, ie._)`${r}${(0, ie.getProperty)(t)} === undefined`;
  return n ? (0, ie.or)(a, (0, ie.not)(rn(e, r, t))) : a;
}
X.noPropertyInData = tn;
function Ua(e) {
  return e ? Object.keys(e).filter((r) => r !== "__proto__") : [];
}
X.allSchemaProperties = Ua;
function Di(e, r) {
  return Ua(r).filter((t) => !(0, en.alwaysValidSchema)(e, r[t]));
}
X.schemaProperties = Di;
function Ci({ schemaCode: e, data: r, it: { gen: t, topSchemaRef: n, schemaPath: a, errorPath: i }, it: s }, o, d, c) {
  const m = c ? (0, ie._)`${e}, ${r}, ${n}${a}` : r, _ = [
    [rr.default.instancePath, (0, ie.strConcat)(rr.default.instancePath, i)],
    [rr.default.parentData, s.parentData],
    [rr.default.parentDataProperty, s.parentDataProperty],
    [rr.default.rootData, rr.default.rootData]
  ];
  s.opts.dynamicRef && _.push([rr.default.dynamicAnchors, rr.default.dynamicAnchors]);
  const k = (0, ie._)`${m}, ${t.object(..._)}`;
  return d !== ie.nil ? (0, ie._)`${o}.call(${d}, ${k})` : (0, ie._)`${o}(${k})`;
}
X.callValidateCode = Ci;
const Mi = (0, ie._)`new RegExp`;
function zi({ gen: e, it: { opts: r } }, t) {
  const n = r.unicodeRegExp ? "u" : "", { regExp: a } = r.code, i = a(t, n);
  return e.scopeValue("pattern", {
    key: i.toString(),
    ref: i,
    code: (0, ie._)`${a.code === "new RegExp" ? Mi : (0, Ii.useFunc)(e, a)}(${t}, ${n})`
  });
}
X.usePattern = zi;
function Fi(e) {
  const { gen: r, data: t, keyword: n, it: a } = e, i = r.name("valid");
  if (a.allErrors) {
    const o = r.let("valid", !0);
    return s(() => r.assign(o, !1)), o;
  }
  return r.var(i, !0), s(() => r.break()), i;
  function s(o) {
    const d = r.const("len", (0, ie._)`${t}.length`);
    r.forRange("i", 0, d, (c) => {
      e.subschema({
        keyword: n,
        dataProp: c,
        dataPropType: en.Type.Num
      }, i), r.if((0, ie.not)(i), o);
    });
  }
}
X.validateArray = Fi;
function Li(e) {
  const { gen: r, schema: t, keyword: n, it: a } = e;
  if (!Array.isArray(t))
    throw new Error("ajv implementation error");
  if (t.some((d) => (0, en.alwaysValidSchema)(a, d)) && !a.opts.unevaluated)
    return;
  const s = r.let("valid", !1), o = r.name("_valid");
  r.block(() => t.forEach((d, c) => {
    const m = e.subschema({
      keyword: n,
      schemaProp: c,
      compositeRule: !0
    }, o);
    r.assign(s, (0, ie._)`${s} || ${o}`), e.mergeValidEvaluated(m, o) || r.if((0, ie.not)(s));
  })), e.result(s, () => e.reset(), () => e.error(!0));
}
X.validateUnion = Li;
Object.defineProperty(Je, "__esModule", { value: !0 });
Je.validateKeywordUsage = Je.validSchemaType = Je.funcKeywordCode = Je.macroKeywordCode = void 0;
const we = Z, ur = Be, Vi = X, qi = tt;
function Ui(e, r) {
  const { gen: t, keyword: n, schema: a, parentSchema: i, it: s } = e, o = r.macro.call(s.self, a, i, s), d = Ka(t, n, o);
  s.opts.validateSchema !== !1 && s.self.validateSchema(o, !0);
  const c = t.name("valid");
  e.subschema({
    schema: o,
    schemaPath: we.nil,
    errSchemaPath: `${s.errSchemaPath}/${n}`,
    topSchemaRef: d,
    compositeRule: !0
  }, c), e.pass(c, () => e.error(!0));
}
Je.macroKeywordCode = Ui;
function Ki(e, r) {
  var t;
  const { gen: n, keyword: a, schema: i, parentSchema: s, $data: o, it: d } = e;
  Ji(d, r);
  const c = !o && r.compile ? r.compile.call(d.self, i, s, d) : r.validate, m = Ka(n, a, c), _ = n.let("valid");
  e.block$data(_, k), e.ok((t = r.valid) !== null && t !== void 0 ? t : _);
  function k() {
    if (r.errors === !1)
      P(), r.modifying && ia(e), S(() => e.error());
    else {
      const h = r.async ? j() : O();
      r.modifying && ia(e), S(() => Hi(e, h));
    }
  }
  function j() {
    const h = n.let("ruleErrs", null);
    return n.try(() => P((0, we._)`await `), (w) => n.assign(_, !1).if((0, we._)`${w} instanceof ${d.ValidationError}`, () => n.assign(h, (0, we._)`${w}.errors`), () => n.throw(w))), h;
  }
  function O() {
    const h = (0, we._)`${m}.errors`;
    return n.assign(h, null), P(we.nil), h;
  }
  function P(h = r.async ? (0, we._)`await ` : we.nil) {
    const w = d.opts.passContext ? ur.default.this : ur.default.self, f = !("compile" in r && !o || r.schema === !1);
    n.assign(_, (0, we._)`${h}${(0, Vi.callValidateCode)(e, m, w, f)}`, r.modifying);
  }
  function S(h) {
    var w;
    n.if((0, we.not)((w = r.valid) !== null && w !== void 0 ? w : _), h);
  }
}
Je.funcKeywordCode = Ki;
function ia(e) {
  const { gen: r, data: t, it: n } = e;
  r.if(n.parentData, () => r.assign(t, (0, we._)`${n.parentData}[${n.parentDataProperty}]`));
}
function Hi(e, r) {
  const { gen: t } = e;
  t.if((0, we._)`Array.isArray(${r})`, () => {
    t.assign(ur.default.vErrors, (0, we._)`${ur.default.vErrors} === null ? ${r} : ${ur.default.vErrors}.concat(${r})`).assign(ur.default.errors, (0, we._)`${ur.default.vErrors}.length`), (0, qi.extendErrors)(e);
  }, () => e.error());
}
function Ji({ schemaEnv: e }, r) {
  if (r.async && !e.$async)
    throw new Error("async keyword in sync schema");
}
function Ka(e, r, t) {
  if (t === void 0)
    throw new Error(`keyword "${r}" failed to compile`);
  return e.scopeValue("keyword", typeof t == "function" ? { ref: t } : { ref: t, code: (0, we.stringify)(t) });
}
function Gi(e, r, t = !1) {
  return !r.length || r.some((n) => n === "array" ? Array.isArray(e) : n === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == n || t && typeof e > "u");
}
Je.validSchemaType = Gi;
function Bi({ schema: e, opts: r, self: t, errSchemaPath: n }, a, i) {
  if (Array.isArray(a.keyword) ? !a.keyword.includes(i) : a.keyword !== i)
    throw new Error("ajv implementation error");
  const s = a.dependencies;
  if (s != null && s.some((o) => !Object.prototype.hasOwnProperty.call(e, o)))
    throw new Error(`parent schema must have dependencies of ${i}: ${s.join(",")}`);
  if (a.validateSchema && !a.validateSchema(e[i])) {
    const d = `keyword "${i}" value is invalid at path "${n}": ` + t.errorsText(a.validateSchema.errors);
    if (r.validateSchema === "log")
      t.logger.error(d);
    else
      throw new Error(d);
  }
}
Je.validateKeywordUsage = Bi;
var ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.extendSubschemaMode = ar.extendSubschemaData = ar.getSubschema = void 0;
const Ke = Z, Ha = te;
function Wi(e, { keyword: r, schemaProp: t, schema: n, schemaPath: a, errSchemaPath: i, topSchemaRef: s }) {
  if (r !== void 0 && n !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (r !== void 0) {
    const o = e.schema[r];
    return t === void 0 ? {
      schema: o,
      schemaPath: (0, Ke._)`${e.schemaPath}${(0, Ke.getProperty)(r)}`,
      errSchemaPath: `${e.errSchemaPath}/${r}`
    } : {
      schema: o[t],
      schemaPath: (0, Ke._)`${e.schemaPath}${(0, Ke.getProperty)(r)}${(0, Ke.getProperty)(t)}`,
      errSchemaPath: `${e.errSchemaPath}/${r}/${(0, Ha.escapeFragment)(t)}`
    };
  }
  if (n !== void 0) {
    if (a === void 0 || i === void 0 || s === void 0)
      throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
    return {
      schema: n,
      schemaPath: a,
      topSchemaRef: s,
      errSchemaPath: i
    };
  }
  throw new Error('either "keyword" or "schema" must be passed');
}
ar.getSubschema = Wi;
function Zi(e, r, { dataProp: t, dataPropType: n, data: a, dataTypes: i, propertyName: s }) {
  if (a !== void 0 && t !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: o } = r;
  if (t !== void 0) {
    const { errorPath: c, dataPathArr: m, opts: _ } = r, k = o.let("data", (0, Ke._)`${r.data}${(0, Ke.getProperty)(t)}`, !0);
    d(k), e.errorPath = (0, Ke.str)`${c}${(0, Ha.getErrorPath)(t, n, _.jsPropertySyntax)}`, e.parentDataProperty = (0, Ke._)`${t}`, e.dataPathArr = [...m, e.parentDataProperty];
  }
  if (a !== void 0) {
    const c = a instanceof Ke.Name ? a : o.let("data", a, !0);
    d(c), s !== void 0 && (e.propertyName = s);
  }
  i && (e.dataTypes = i);
  function d(c) {
    e.data = c, e.dataLevel = r.dataLevel + 1, e.dataTypes = [], r.definedProperties = /* @__PURE__ */ new Set(), e.parentData = r.data, e.dataNames = [...r.dataNames, c];
  }
}
ar.extendSubschemaData = Zi;
function Xi(e, { jtdDiscriminator: r, jtdMetadata: t, compositeRule: n, createErrors: a, allErrors: i }) {
  n !== void 0 && (e.compositeRule = n), a !== void 0 && (e.createErrors = a), i !== void 0 && (e.allErrors = i), e.jtdDiscriminator = r, e.jtdMetadata = t;
}
ar.extendSubschemaMode = Xi;
var ge = {}, Jt = {}, Qi = {
  get exports() {
    return Jt;
  },
  set exports(e) {
    Jt = e;
  }
}, nr = Qi.exports = function(e, r, t) {
  typeof r == "function" && (t = r, r = {}), t = r.cb || t;
  var n = typeof t == "function" ? t : t.pre || function() {
  }, a = t.post || function() {
  };
  gt(r, n, a, e, "", e);
};
nr.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0,
  if: !0,
  then: !0,
  else: !0
};
nr.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
nr.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
nr.skipKeywords = {
  default: !0,
  enum: !0,
  const: !0,
  required: !0,
  maximum: !0,
  minimum: !0,
  exclusiveMaximum: !0,
  exclusiveMinimum: !0,
  multipleOf: !0,
  maxLength: !0,
  minLength: !0,
  pattern: !0,
  format: !0,
  maxItems: !0,
  minItems: !0,
  uniqueItems: !0,
  maxProperties: !0,
  minProperties: !0
};
function gt(e, r, t, n, a, i, s, o, d, c) {
  if (n && typeof n == "object" && !Array.isArray(n)) {
    r(n, a, i, s, o, d, c);
    for (var m in n) {
      var _ = n[m];
      if (Array.isArray(_)) {
        if (m in nr.arrayKeywords)
          for (var k = 0; k < _.length; k++)
            gt(e, r, t, _[k], a + "/" + m + "/" + k, i, a, m, n, k);
      } else if (m in nr.propsKeywords) {
        if (_ && typeof _ == "object")
          for (var j in _)
            gt(e, r, t, _[j], a + "/" + m + "/" + Yi(j), i, a, m, n, j);
      } else
        (m in nr.keywords || e.allKeys && !(m in nr.skipKeywords)) && gt(e, r, t, _, a + "/" + m, i, a, m, n);
    }
    t(n, a, i, s, o, d, c);
  }
}
function Yi(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.getSchemaRefs = ge.resolveUrl = ge.normalizeId = ge._getFullPath = ge.getFullPath = ge.inlineRef = void 0;
const xi = te, eo = xt, ro = Jt, to = /* @__PURE__ */ new Set([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum",
  "const"
]);
function no(e, r = !0) {
  return typeof e == "boolean" ? !0 : r === !0 ? !Gt(e) : r ? Ja(e) <= r : !1;
}
ge.inlineRef = no;
const ao = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function Gt(e) {
  for (const r in e) {
    if (ao.has(r))
      return !0;
    const t = e[r];
    if (Array.isArray(t) && t.some(Gt) || typeof t == "object" && Gt(t))
      return !0;
  }
  return !1;
}
function Ja(e) {
  let r = 0;
  for (const t in e) {
    if (t === "$ref")
      return 1 / 0;
    if (r++, !to.has(t) && (typeof e[t] == "object" && (0, xi.eachItem)(e[t], (n) => r += Ja(n)), r === 1 / 0))
      return 1 / 0;
  }
  return r;
}
function Ga(e, r = "", t) {
  t !== !1 && (r = Or(r));
  const n = e.parse(r);
  return Ba(e, n);
}
ge.getFullPath = Ga;
function Ba(e, r) {
  return e.serialize(r).split("#")[0] + "#";
}
ge._getFullPath = Ba;
const so = /#\/?$/;
function Or(e) {
  return e ? e.replace(so, "") : "";
}
ge.normalizeId = Or;
function io(e, r, t) {
  return t = Or(t), e.resolve(r, t);
}
ge.resolveUrl = io;
const oo = /^[a-z_][-a-z0-9._]*$/i;
function fo(e, r) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: t, uriResolver: n } = this.opts, a = Or(e[t] || r), i = { "": a }, s = Ga(n, a, !1), o = {}, d = /* @__PURE__ */ new Set();
  return ro(e, { allKeys: !0 }, (_, k, j, O) => {
    if (O === void 0)
      return;
    const P = s + k;
    let S = i[O];
    typeof _[t] == "string" && (S = h.call(this, _[t])), w.call(this, _.$anchor), w.call(this, _.$dynamicAnchor), i[k] = S;
    function h(f) {
      const g = this.opts.uriResolver.resolve;
      if (f = Or(S ? g(S, f) : f), d.has(f))
        throw m(f);
      d.add(f);
      let D = this.refs[f];
      return typeof D == "string" && (D = this.refs[D]), typeof D == "object" ? c(_, D.schema, f) : f !== Or(P) && (f[0] === "#" ? (c(_, o[f], f), o[f] = _) : this.refs[f] = P), f;
    }
    function w(f) {
      if (typeof f == "string") {
        if (!oo.test(f))
          throw new Error(`invalid anchor "${f}"`);
        h.call(this, `#${f}`);
      }
    }
  }), o;
  function c(_, k, j) {
    if (k !== void 0 && !eo(_, k))
      throw m(j);
  }
  function m(_) {
    return new Error(`reference "${_}" resolves to more than one schema`);
  }
}
ge.getSchemaRefs = fo;
Object.defineProperty(Me, "__esModule", { value: !0 });
Me.getData = Me.KeywordCxt = Me.validateFunctionCode = void 0;
const Wa = jr, oa = nt, nn = Xe, Et = nt, co = Tt, Jr = Je, Ft = ar, K = Z, B = Be, uo = ge, Qe = te, qr = tt;
function lo(e) {
  if (Qa(e) && (Ya(e), Xa(e))) {
    po(e);
    return;
  }
  Za(e, () => (0, Wa.topBoolOrEmptySchema)(e));
}
Me.validateFunctionCode = lo;
function Za({ gen: e, validateName: r, schema: t, schemaEnv: n, opts: a }, i) {
  a.code.es5 ? e.func(r, (0, K._)`${B.default.data}, ${B.default.valCxt}`, n.$async, () => {
    e.code((0, K._)`"use strict"; ${fa(t, a)}`), mo(e, a), e.code(i);
  }) : e.func(r, (0, K._)`${B.default.data}, ${ho(a)}`, n.$async, () => e.code(fa(t, a)).code(i));
}
function ho(e) {
  return (0, K._)`{${B.default.instancePath}="", ${B.default.parentData}, ${B.default.parentDataProperty}, ${B.default.rootData}=${B.default.data}${e.dynamicRef ? (0, K._)`, ${B.default.dynamicAnchors}={}` : K.nil}}={}`;
}
function mo(e, r) {
  e.if(B.default.valCxt, () => {
    e.var(B.default.instancePath, (0, K._)`${B.default.valCxt}.${B.default.instancePath}`), e.var(B.default.parentData, (0, K._)`${B.default.valCxt}.${B.default.parentData}`), e.var(B.default.parentDataProperty, (0, K._)`${B.default.valCxt}.${B.default.parentDataProperty}`), e.var(B.default.rootData, (0, K._)`${B.default.valCxt}.${B.default.rootData}`), r.dynamicRef && e.var(B.default.dynamicAnchors, (0, K._)`${B.default.valCxt}.${B.default.dynamicAnchors}`);
  }, () => {
    e.var(B.default.instancePath, (0, K._)`""`), e.var(B.default.parentData, (0, K._)`undefined`), e.var(B.default.parentDataProperty, (0, K._)`undefined`), e.var(B.default.rootData, B.default.data), r.dynamicRef && e.var(B.default.dynamicAnchors, (0, K._)`{}`);
  });
}
function po(e) {
  const { schema: r, opts: t, gen: n } = e;
  Za(e, () => {
    t.$comment && r.$comment && es(e), _o(e), n.let(B.default.vErrors, null), n.let(B.default.errors, 0), t.unevaluated && yo(e), xa(e), So(e);
  });
}
function yo(e) {
  const { gen: r, validateName: t } = e;
  e.evaluated = r.const("evaluated", (0, K._)`${t}.evaluated`), r.if((0, K._)`${e.evaluated}.dynamicProps`, () => r.assign((0, K._)`${e.evaluated}.props`, (0, K._)`undefined`)), r.if((0, K._)`${e.evaluated}.dynamicItems`, () => r.assign((0, K._)`${e.evaluated}.items`, (0, K._)`undefined`));
}
function fa(e, r) {
  const t = typeof e == "object" && e[r.schemaId];
  return t && (r.code.source || r.code.process) ? (0, K._)`/*# sourceURL=${t} */` : K.nil;
}
function go(e, r) {
  if (Qa(e) && (Ya(e), Xa(e))) {
    vo(e, r);
    return;
  }
  (0, Wa.boolOrEmptySchema)(e, r);
}
function Xa({ schema: e, self: r }) {
  if (typeof e == "boolean")
    return !e;
  for (const t in e)
    if (r.RULES.all[t])
      return !0;
  return !1;
}
function Qa(e) {
  return typeof e.schema != "boolean";
}
function vo(e, r) {
  const { schema: t, gen: n, opts: a } = e;
  a.$comment && t.$comment && es(e), wo(e), bo(e);
  const i = n.const("_errs", B.default.errors);
  xa(e, i), n.var(r, (0, K._)`${i} === ${B.default.errors}`);
}
function Ya(e) {
  (0, Qe.checkUnknownRules)(e), $o(e);
}
function xa(e, r) {
  if (e.opts.jtd)
    return ca(e, [], !1, r);
  const t = (0, oa.getSchemaTypes)(e.schema), n = (0, oa.coerceAndCheckDataType)(e, t);
  ca(e, t, !n, r);
}
function $o(e) {
  const { schema: r, errSchemaPath: t, opts: n, self: a } = e;
  r.$ref && n.ignoreKeywordsWithRef && (0, Qe.schemaHasRulesButRef)(r, a.RULES) && a.logger.warn(`$ref: keywords ignored in schema at path "${t}"`);
}
function _o(e) {
  const { schema: r, opts: t } = e;
  r.default !== void 0 && t.useDefaults && t.strictSchema && (0, Qe.checkStrictMode)(e, "default is ignored in the schema root");
}
function wo(e) {
  const r = e.schema[e.opts.schemaId];
  r && (e.baseId = (0, uo.resolveUrl)(e.opts.uriResolver, e.baseId, r));
}
function bo(e) {
  if (e.schema.$async && !e.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function es({ gen: e, schemaEnv: r, schema: t, errSchemaPath: n, opts: a }) {
  const i = t.$comment;
  if (a.$comment === !0)
    e.code((0, K._)`${B.default.self}.logger.log(${i})`);
  else if (typeof a.$comment == "function") {
    const s = (0, K.str)`${n}/$comment`, o = e.scopeValue("root", { ref: r.root });
    e.code((0, K._)`${B.default.self}.opts.$comment(${i}, ${s}, ${o}.schema)`);
  }
}
function So(e) {
  const { gen: r, schemaEnv: t, validateName: n, ValidationError: a, opts: i } = e;
  t.$async ? r.if((0, K._)`${B.default.errors} === 0`, () => r.return(B.default.data), () => r.throw((0, K._)`new ${a}(${B.default.vErrors})`)) : (r.assign((0, K._)`${n}.errors`, B.default.vErrors), i.unevaluated && Eo(e), r.return((0, K._)`${B.default.errors} === 0`));
}
function Eo({ gen: e, evaluated: r, props: t, items: n }) {
  t instanceof K.Name && e.assign((0, K._)`${r}.props`, t), n instanceof K.Name && e.assign((0, K._)`${r}.items`, n);
}
function ca(e, r, t, n) {
  const { gen: a, schema: i, data: s, allErrors: o, opts: d, self: c } = e, { RULES: m } = c;
  if (i.$ref && (d.ignoreKeywordsWithRef || !(0, Qe.schemaHasRulesButRef)(i, m))) {
    a.block(() => ns(e, "$ref", m.all.$ref.definition));
    return;
  }
  d.jtd || Po(e, r), a.block(() => {
    for (const k of m.rules)
      _(k);
    _(m.post);
  });
  function _(k) {
    (0, nn.shouldUseGroup)(i, k) && (k.type ? (a.if((0, Et.checkDataType)(k.type, s, d.strictNumbers)), ua(e, k), r.length === 1 && r[0] === k.type && t && (a.else(), (0, Et.reportTypeError)(e)), a.endIf()) : ua(e, k), o || a.if((0, K._)`${B.default.errors} === ${n || 0}`));
  }
}
function ua(e, r) {
  const { gen: t, schema: n, opts: { useDefaults: a } } = e;
  a && (0, co.assignDefaults)(e, r.type), t.block(() => {
    for (const i of r.rules)
      (0, nn.shouldUseRule)(n, i) && ns(e, i.keyword, i.definition, r.type);
  });
}
function Po(e, r) {
  e.schemaEnv.meta || !e.opts.strictTypes || (Oo(e, r), e.opts.allowUnionTypes || jo(e, r), No(e, e.dataTypes));
}
function Oo(e, r) {
  if (r.length) {
    if (!e.dataTypes.length) {
      e.dataTypes = r;
      return;
    }
    r.forEach((t) => {
      rs(e.dataTypes, t) || an(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), Ao(e, r);
  }
}
function jo(e, r) {
  r.length > 1 && !(r.length === 2 && r.includes("null")) && an(e, "use allowUnionTypes to allow union type keyword");
}
function No(e, r) {
  const t = e.self.RULES.all;
  for (const n in t) {
    const a = t[n];
    if (typeof a == "object" && (0, nn.shouldUseRule)(e.schema, a)) {
      const { type: i } = a.definition;
      i.length && !i.some((s) => Io(r, s)) && an(e, `missing type "${i.join(",")}" for keyword "${n}"`);
    }
  }
}
function Io(e, r) {
  return e.includes(r) || r === "number" && e.includes("integer");
}
function rs(e, r) {
  return e.includes(r) || r === "integer" && e.includes("number");
}
function Ao(e, r) {
  const t = [];
  for (const n of e.dataTypes)
    rs(r, n) ? t.push(n) : r.includes("integer") && n === "number" && t.push("integer");
  e.dataTypes = t;
}
function an(e, r) {
  const t = e.schemaEnv.baseId + e.errSchemaPath;
  r += ` at "${t}" (strictTypes)`, (0, Qe.checkStrictMode)(e, r, e.opts.strictTypes);
}
class ts {
  constructor(r, t, n) {
    if ((0, Jr.validateKeywordUsage)(r, t, n), this.gen = r.gen, this.allErrors = r.allErrors, this.keyword = n, this.data = r.data, this.schema = r.schema[n], this.$data = t.$data && r.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, Qe.schemaRefOrVal)(r, this.schema, n, this.$data), this.schemaType = t.schemaType, this.parentSchema = r.schema, this.params = {}, this.it = r, this.def = t, this.$data)
      this.schemaCode = r.gen.const("vSchema", as(this.$data, r));
    else if (this.schemaCode = this.schemaValue, !(0, Jr.validSchemaType)(this.schema, t.schemaType, t.allowUndefined))
      throw new Error(`${n} value must be ${JSON.stringify(t.schemaType)}`);
    ("code" in t ? t.trackErrors : t.errors !== !1) && (this.errsCount = r.gen.const("_errs", B.default.errors));
  }
  result(r, t, n) {
    this.failResult((0, K.not)(r), t, n);
  }
  failResult(r, t, n) {
    this.gen.if(r), n ? n() : this.error(), t ? (this.gen.else(), t(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  pass(r, t) {
    this.failResult((0, K.not)(r), void 0, t);
  }
  fail(r) {
    if (r === void 0) {
      this.error(), this.allErrors || this.gen.if(!1);
      return;
    }
    this.gen.if(r), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  fail$data(r) {
    if (!this.$data)
      return this.fail(r);
    const { schemaCode: t } = this;
    this.fail((0, K._)`${t} !== undefined && (${(0, K.or)(this.invalid$data(), r)})`);
  }
  error(r, t, n) {
    if (t) {
      this.setParams(t), this._error(r, n), this.setParams({});
      return;
    }
    this._error(r, n);
  }
  _error(r, t) {
    (r ? qr.reportExtraError : qr.reportError)(this, this.def.error, t);
  }
  $dataError() {
    (0, qr.reportError)(this, this.def.$dataError || qr.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, qr.resetErrorsCount)(this.gen, this.errsCount);
  }
  ok(r) {
    this.allErrors || this.gen.if(r);
  }
  setParams(r, t) {
    t ? Object.assign(this.params, r) : this.params = r;
  }
  block$data(r, t, n = K.nil) {
    this.gen.block(() => {
      this.check$data(r, n), t();
    });
  }
  check$data(r = K.nil, t = K.nil) {
    if (!this.$data)
      return;
    const { gen: n, schemaCode: a, schemaType: i, def: s } = this;
    n.if((0, K.or)((0, K._)`${a} === undefined`, t)), r !== K.nil && n.assign(r, !0), (i.length || s.validateSchema) && (n.elseIf(this.invalid$data()), this.$dataError(), r !== K.nil && n.assign(r, !1)), n.else();
  }
  invalid$data() {
    const { gen: r, schemaCode: t, schemaType: n, def: a, it: i } = this;
    return (0, K.or)(s(), o());
    function s() {
      if (n.length) {
        if (!(t instanceof K.Name))
          throw new Error("ajv implementation error");
        const d = Array.isArray(n) ? n : [n];
        return (0, K._)`${(0, Et.checkDataTypes)(d, t, i.opts.strictNumbers, Et.DataType.Wrong)}`;
      }
      return K.nil;
    }
    function o() {
      if (a.validateSchema) {
        const d = r.scopeValue("validate$data", { ref: a.validateSchema });
        return (0, K._)`!${d}(${t})`;
      }
      return K.nil;
    }
  }
  subschema(r, t) {
    const n = (0, Ft.getSubschema)(this.it, r);
    (0, Ft.extendSubschemaData)(n, this.it, r), (0, Ft.extendSubschemaMode)(n, r);
    const a = { ...this.it, ...n, items: void 0, props: void 0 };
    return go(a, t), a;
  }
  mergeEvaluated(r, t) {
    const { it: n, gen: a } = this;
    n.opts.unevaluated && (n.props !== !0 && r.props !== void 0 && (n.props = Qe.mergeEvaluated.props(a, r.props, n.props, t)), n.items !== !0 && r.items !== void 0 && (n.items = Qe.mergeEvaluated.items(a, r.items, n.items, t)));
  }
  mergeValidEvaluated(r, t) {
    const { it: n, gen: a } = this;
    if (n.opts.unevaluated && (n.props !== !0 || n.items !== !0))
      return a.if(t, () => this.mergeEvaluated(r, K.Name)), !0;
  }
}
Me.KeywordCxt = ts;
function ns(e, r, t, n) {
  const a = new ts(e, t, r);
  "code" in t ? t.code(a, n) : a.$data && t.validate ? (0, Jr.funcKeywordCode)(a, t) : "macro" in t ? (0, Jr.macroKeywordCode)(a, t) : (t.compile || t.validate) && (0, Jr.funcKeywordCode)(a, t);
}
const ko = /^\/(?:[^~]|~0|~1)*$/, To = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function as(e, { dataLevel: r, dataNames: t, dataPathArr: n }) {
  let a, i;
  if (e === "")
    return B.default.rootData;
  if (e[0] === "/") {
    if (!ko.test(e))
      throw new Error(`Invalid JSON-pointer: ${e}`);
    a = e, i = B.default.rootData;
  } else {
    const c = To.exec(e);
    if (!c)
      throw new Error(`Invalid JSON-pointer: ${e}`);
    const m = +c[1];
    if (a = c[2], a === "#") {
      if (m >= r)
        throw new Error(d("property/index", m));
      return n[r - m];
    }
    if (m > r)
      throw new Error(d("data", m));
    if (i = t[r - m], !a)
      return i;
  }
  let s = i;
  const o = a.split("/");
  for (const c of o)
    c && (i = (0, K._)`${i}${(0, K.getProperty)((0, Qe.unescapeJsonPointer)(c))}`, s = (0, K._)`${s} && ${i}`);
  return s;
  function d(c, m) {
    return `Cannot access ${c} ${m} levels up, current level is ${r}`;
  }
}
Me.getData = as;
var at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
class Ro extends Error {
  constructor(r) {
    super("validation failed"), this.errors = r, this.ajv = this.validation = !0;
  }
}
at.default = Ro;
var st = {};
Object.defineProperty(st, "__esModule", { value: !0 });
const Lt = ge;
class Do extends Error {
  constructor(r, t, n, a) {
    super(a || `can't resolve reference ${n} from id ${t}`), this.missingRef = (0, Lt.resolveUrl)(r, t, n), this.missingSchema = (0, Lt.normalizeId)((0, Lt.getFullPath)(r, this.missingRef));
  }
}
st.default = Do;
var Pe = {};
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.resolveSchema = Pe.getCompilingSchema = Pe.resolveRef = Pe.compileSchema = Pe.SchemaEnv = void 0;
const Te = Z, Co = at, cr = Be, De = ge, la = te, Mo = Me;
class Rt {
  constructor(r) {
    var t;
    this.refs = {}, this.dynamicAnchors = {};
    let n;
    typeof r.schema == "object" && (n = r.schema), this.schema = r.schema, this.schemaId = r.schemaId, this.root = r.root || this, this.baseId = (t = r.baseId) !== null && t !== void 0 ? t : (0, De.normalizeId)(n == null ? void 0 : n[r.schemaId || "$id"]), this.schemaPath = r.schemaPath, this.localRefs = r.localRefs, this.meta = r.meta, this.$async = n == null ? void 0 : n.$async, this.refs = {};
  }
}
Pe.SchemaEnv = Rt;
function sn(e) {
  const r = ss.call(this, e);
  if (r)
    return r;
  const t = (0, De.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: n, lines: a } = this.opts.code, { ownProperties: i } = this.opts, s = new Te.CodeGen(this.scope, { es5: n, lines: a, ownProperties: i });
  let o;
  e.$async && (o = s.scopeValue("Error", {
    ref: Co.default,
    code: (0, Te._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const d = s.scopeName("validate");
  e.validateName = d;
  const c = {
    gen: s,
    allErrors: this.opts.allErrors,
    data: cr.default.data,
    parentData: cr.default.parentData,
    parentDataProperty: cr.default.parentDataProperty,
    dataNames: [cr.default.data],
    dataPathArr: [Te.nil],
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: s.scopeValue("schema", this.opts.code.source === !0 ? { ref: e.schema, code: (0, Te.stringify)(e.schema) } : { ref: e.schema }),
    validateName: d,
    ValidationError: o,
    schema: e.schema,
    schemaEnv: e,
    rootId: t,
    baseId: e.baseId || t,
    schemaPath: Te.nil,
    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, Te._)`""`,
    opts: this.opts,
    self: this
  };
  let m;
  try {
    this._compilations.add(e), (0, Mo.validateFunctionCode)(c), s.optimize(this.opts.code.optimize);
    const _ = s.toString();
    m = `${s.scopeRefs(cr.default.scope)}return ${_}`, this.opts.code.process && (m = this.opts.code.process(m, e));
    const j = new Function(`${cr.default.self}`, `${cr.default.scope}`, m)(this, this.scope.get());
    if (this.scope.value(d, { ref: j }), j.errors = null, j.schema = e.schema, j.schemaEnv = e, e.$async && (j.$async = !0), this.opts.code.source === !0 && (j.source = { validateName: d, validateCode: _, scopeValues: s._values }), this.opts.unevaluated) {
      const { props: O, items: P } = c;
      j.evaluated = {
        props: O instanceof Te.Name ? void 0 : O,
        items: P instanceof Te.Name ? void 0 : P,
        dynamicProps: O instanceof Te.Name,
        dynamicItems: P instanceof Te.Name
      }, j.source && (j.source.evaluated = (0, Te.stringify)(j.evaluated));
    }
    return e.validate = j, e;
  } catch (_) {
    throw delete e.validate, delete e.validateName, m && this.logger.error("Error compiling schema, function code:", m), _;
  } finally {
    this._compilations.delete(e);
  }
}
Pe.compileSchema = sn;
function zo(e, r, t) {
  var n;
  t = (0, De.resolveUrl)(this.opts.uriResolver, r, t);
  const a = e.refs[t];
  if (a)
    return a;
  let i = Vo.call(this, e, t);
  if (i === void 0) {
    const s = (n = e.localRefs) === null || n === void 0 ? void 0 : n[t], { schemaId: o } = this.opts;
    s && (i = new Rt({ schema: s, schemaId: o, root: e, baseId: r }));
  }
  if (i !== void 0)
    return e.refs[t] = Fo.call(this, i);
}
Pe.resolveRef = zo;
function Fo(e) {
  return (0, De.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : sn.call(this, e);
}
function ss(e) {
  for (const r of this._compilations)
    if (Lo(r, e))
      return r;
}
Pe.getCompilingSchema = ss;
function Lo(e, r) {
  return e.schema === r.schema && e.root === r.root && e.baseId === r.baseId;
}
function Vo(e, r) {
  let t;
  for (; typeof (t = this.refs[r]) == "string"; )
    r = t;
  return t || this.schemas[r] || Dt.call(this, e, r);
}
function Dt(e, r) {
  const t = this.opts.uriResolver.parse(r), n = (0, De._getFullPath)(this.opts.uriResolver, t);
  let a = (0, De.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && n === a)
    return Vt.call(this, t, e);
  const i = (0, De.normalizeId)(n), s = this.refs[i] || this.schemas[i];
  if (typeof s == "string") {
    const o = Dt.call(this, e, s);
    return typeof (o == null ? void 0 : o.schema) != "object" ? void 0 : Vt.call(this, t, o);
  }
  if (typeof (s == null ? void 0 : s.schema) == "object") {
    if (s.validate || sn.call(this, s), i === (0, De.normalizeId)(r)) {
      const { schema: o } = s, { schemaId: d } = this.opts, c = o[d];
      return c && (a = (0, De.resolveUrl)(this.opts.uriResolver, a, c)), new Rt({ schema: o, schemaId: d, root: e, baseId: a });
    }
    return Vt.call(this, t, s);
  }
}
Pe.resolveSchema = Dt;
const qo = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function Vt(e, { baseId: r, schema: t, root: n }) {
  var a;
  if (((a = e.fragment) === null || a === void 0 ? void 0 : a[0]) !== "/")
    return;
  for (const o of e.fragment.slice(1).split("/")) {
    if (typeof t == "boolean")
      return;
    const d = t[(0, la.unescapeFragment)(o)];
    if (d === void 0)
      return;
    t = d;
    const c = typeof t == "object" && t[this.opts.schemaId];
    !qo.has(o) && c && (r = (0, De.resolveUrl)(this.opts.uriResolver, r, c));
  }
  let i;
  if (typeof t != "boolean" && t.$ref && !(0, la.schemaHasRulesButRef)(t, this.RULES)) {
    const o = (0, De.resolveUrl)(this.opts.uriResolver, r, t.$ref);
    i = Dt.call(this, n, o);
  }
  const { schemaId: s } = this.opts;
  if (i = i || new Rt({ schema: t, schemaId: s, root: n, baseId: r }), i.schema !== i.root.schema)
    return i;
}
const Uo = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ko = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ho = "object", Jo = [
  "$data"
], Go = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
}, Bo = !1, Wo = {
  $id: Uo,
  description: Ko,
  type: Ho,
  required: Jo,
  properties: Go,
  additionalProperties: Bo
};
var on = {}, Pt = {}, Zo = {
  get exports() {
    return Pt;
  },
  set exports(e) {
    Pt = e;
  }
};
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
(function(e, r) {
  (function(t, n) {
    n(r);
  })(ri, function(t) {
    function n() {
      for (var y = arguments.length, l = Array(y), $ = 0; $ < y; $++)
        l[$] = arguments[$];
      if (l.length > 1) {
        l[0] = l[0].slice(0, -1);
        for (var A = l.length - 1, I = 1; I < A; ++I)
          l[I] = l[I].slice(1, -1);
        return l[A] = l[A].slice(1), l.join("");
      } else
        return l[0];
    }
    function a(y) {
      return "(?:" + y + ")";
    }
    function i(y) {
      return y === void 0 ? "undefined" : y === null ? "null" : Object.prototype.toString.call(y).split(" ").pop().split("]").shift().toLowerCase();
    }
    function s(y) {
      return y.toUpperCase();
    }
    function o(y) {
      return y != null ? y instanceof Array ? y : typeof y.length != "number" || y.split || y.setInterval || y.call ? [y] : Array.prototype.slice.call(y) : [];
    }
    function d(y, l) {
      var $ = y;
      if (l)
        for (var A in l)
          $[A] = l[A];
      return $;
    }
    function c(y) {
      var l = "[A-Za-z]", $ = "[0-9]", A = n($, "[A-Fa-f]"), I = a(a("%[EFef]" + A + "%" + A + A + "%" + A + A) + "|" + a("%[89A-Fa-f]" + A + "%" + A + A) + "|" + a("%" + A + A)), H = "[\\:\\/\\?\\#\\[\\]\\@]", G = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", re = n(H, G), se = y ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", le = y ? "[\\uE000-\\uF8FF]" : "[]", Y = n(l, $, "[\\-\\.\\_\\~]", se);
      a(l + n(l, $, "[\\+\\-\\.]") + "*"), a(a(I + "|" + n(Y, G, "[\\:]")) + "*");
      var ae = a(a("25[0-5]") + "|" + a("2[0-4]" + $) + "|" + a("1" + $ + $) + "|" + a("0?[1-9]" + $) + "|0?0?" + $), de = a(ae + "\\." + ae + "\\." + ae + "\\." + ae), W = a(A + "{1,4}"), oe = a(a(W + "\\:" + W) + "|" + de), me = a(a(W + "\\:") + "{6}" + oe), fe = a("\\:\\:" + a(W + "\\:") + "{5}" + oe), er = a(a(W) + "?\\:\\:" + a(W + "\\:") + "{4}" + oe), Ve = a(a(a(W + "\\:") + "{0,1}" + W) + "?\\:\\:" + a(W + "\\:") + "{3}" + oe), qe = a(a(a(W + "\\:") + "{0,2}" + W) + "?\\:\\:" + a(W + "\\:") + "{2}" + oe), wr = a(a(a(W + "\\:") + "{0,3}" + W) + "?\\:\\:" + W + "\\:" + oe), or = a(a(a(W + "\\:") + "{0,4}" + W) + "?\\:\\:" + oe), Ie = a(a(a(W + "\\:") + "{0,5}" + W) + "?\\:\\:" + W), Ue = a(a(a(W + "\\:") + "{0,6}" + W) + "?\\:\\:"), fr = a([me, fe, er, Ve, qe, wr, or, Ie, Ue].join("|")), Ze = a(a(Y + "|" + I) + "+");
      a("[vV]" + A + "+\\." + n(Y, G, "[\\:]") + "+"), a(a(I + "|" + n(Y, G)) + "*");
      var Lr = a(I + "|" + n(Y, G, "[\\:\\@]"));
      return a(a(I + "|" + n(Y, G, "[\\@]")) + "+"), a(a(Lr + "|" + n("[\\/\\?]", le)) + "*"), {
        NOT_SCHEME: new RegExp(n("[^]", l, $, "[\\+\\-\\.]"), "g"),
        NOT_USERINFO: new RegExp(n("[^\\%\\:]", Y, G), "g"),
        NOT_HOST: new RegExp(n("[^\\%\\[\\]\\:]", Y, G), "g"),
        NOT_PATH: new RegExp(n("[^\\%\\/\\:\\@]", Y, G), "g"),
        NOT_PATH_NOSCHEME: new RegExp(n("[^\\%\\/\\@]", Y, G), "g"),
        NOT_QUERY: new RegExp(n("[^\\%]", Y, G, "[\\:\\@\\/\\?]", le), "g"),
        NOT_FRAGMENT: new RegExp(n("[^\\%]", Y, G, "[\\:\\@\\/\\?]"), "g"),
        ESCAPE: new RegExp(n("[^]", Y, G), "g"),
        UNRESERVED: new RegExp(Y, "g"),
        OTHER_CHARS: new RegExp(n("[^\\%]", Y, re), "g"),
        PCT_ENCODED: new RegExp(I, "g"),
        IPV4ADDRESS: new RegExp("^(" + de + ")$"),
        IPV6ADDRESS: new RegExp("^\\[?(" + fr + ")" + a(a("\\%25|\\%(?!" + A + "{2})") + "(" + Ze + ")") + "?\\]?$")
        //RFC 6874, with relaxed parsing rules
      };
    }
    var m = c(!1), _ = c(!0), k = function() {
      function y(l, $) {
        var A = [], I = !0, H = !1, G = void 0;
        try {
          for (var re = l[Symbol.iterator](), se; !(I = (se = re.next()).done) && (A.push(se.value), !($ && A.length === $)); I = !0)
            ;
        } catch (le) {
          H = !0, G = le;
        } finally {
          try {
            !I && re.return && re.return();
          } finally {
            if (H)
              throw G;
          }
        }
        return A;
      }
      return function(l, $) {
        if (Array.isArray(l))
          return l;
        if (Symbol.iterator in Object(l))
          return y(l, $);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), j = function(y) {
      if (Array.isArray(y)) {
        for (var l = 0, $ = Array(y.length); l < y.length; l++)
          $[l] = y[l];
        return $;
      } else
        return Array.from(y);
    }, O = 2147483647, P = 36, S = 1, h = 26, w = 38, f = 700, g = 72, D = 128, p = "-", b = /^xn--/, R = /[^\0-\x7E]/, C = /[\x2E\u3002\uFF0E\uFF61]/g, L = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, J = P - S, q = Math.floor, x = String.fromCharCode;
    function ne(y) {
      throw new RangeError(L[y]);
    }
    function pe(y, l) {
      for (var $ = [], A = y.length; A--; )
        $[A] = l(y[A]);
      return $;
    }
    function ce(y, l) {
      var $ = y.split("@"), A = "";
      $.length > 1 && (A = $[0] + "@", y = $[1]), y = y.replace(C, ".");
      var I = y.split("."), H = pe(I, l).join(".");
      return A + H;
    }
    function je(y) {
      for (var l = [], $ = 0, A = y.length; $ < A; ) {
        var I = y.charCodeAt($++);
        if (I >= 55296 && I <= 56319 && $ < A) {
          var H = y.charCodeAt($++);
          (H & 64512) == 56320 ? l.push(((I & 1023) << 10) + (H & 1023) + 65536) : (l.push(I), $--);
        } else
          l.push(I);
      }
      return l;
    }
    var We = function(l) {
      return String.fromCodePoint.apply(String, j(l));
    }, be = function(l) {
      return l - 48 < 10 ? l - 22 : l - 65 < 26 ? l - 65 : l - 97 < 26 ? l - 97 : P;
    }, F = function(l, $) {
      return l + 22 + 75 * (l < 26) - (($ != 0) << 5);
    }, E = function(l, $, A) {
      var I = 0;
      for (
        l = A ? q(l / f) : l >> 1, l += q(l / $);
        /* no initialization */
        l > J * h >> 1;
        I += P
      )
        l = q(l / J);
      return q(I + (J + 1) * l / (l + w));
    }, M = function(l) {
      var $ = [], A = l.length, I = 0, H = D, G = g, re = l.lastIndexOf(p);
      re < 0 && (re = 0);
      for (var se = 0; se < re; ++se)
        l.charCodeAt(se) >= 128 && ne("not-basic"), $.push(l.charCodeAt(se));
      for (var le = re > 0 ? re + 1 : 0; le < A; ) {
        for (
          var Y = I, ae = 1, de = P;
          ;
          /* no condition */
          de += P
        ) {
          le >= A && ne("invalid-input");
          var W = be(l.charCodeAt(le++));
          (W >= P || W > q((O - I) / ae)) && ne("overflow"), I += W * ae;
          var oe = de <= G ? S : de >= G + h ? h : de - G;
          if (W < oe)
            break;
          var me = P - oe;
          ae > q(O / me) && ne("overflow"), ae *= me;
        }
        var fe = $.length + 1;
        G = E(I - Y, fe, Y == 0), q(I / fe) > O - H && ne("overflow"), H += q(I / fe), I %= fe, $.splice(I++, 0, H);
      }
      return String.fromCodePoint.apply(String, $);
    }, N = function(l) {
      var $ = [];
      l = je(l);
      var A = l.length, I = D, H = 0, G = g, re = !0, se = !1, le = void 0;
      try {
        for (var Y = l[Symbol.iterator](), ae; !(re = (ae = Y.next()).done); re = !0) {
          var de = ae.value;
          de < 128 && $.push(x(de));
        }
      } catch (Vr) {
        se = !0, le = Vr;
      } finally {
        try {
          !re && Y.return && Y.return();
        } finally {
          if (se)
            throw le;
        }
      }
      var W = $.length, oe = W;
      for (W && $.push(p); oe < A; ) {
        var me = O, fe = !0, er = !1, Ve = void 0;
        try {
          for (var qe = l[Symbol.iterator](), wr; !(fe = (wr = qe.next()).done); fe = !0) {
            var or = wr.value;
            or >= I && or < me && (me = or);
          }
        } catch (Vr) {
          er = !0, Ve = Vr;
        } finally {
          try {
            !fe && qe.return && qe.return();
          } finally {
            if (er)
              throw Ve;
          }
        }
        var Ie = oe + 1;
        me - I > q((O - H) / Ie) && ne("overflow"), H += (me - I) * Ie, I = me;
        var Ue = !0, fr = !1, Ze = void 0;
        try {
          for (var Lr = l[Symbol.iterator](), Qn; !(Ue = (Qn = Lr.next()).done); Ue = !0) {
            var Yn = Qn.value;
            if (Yn < I && ++H > O && ne("overflow"), Yn == I) {
              for (
                var ft = H, ct = P;
                ;
                /* no condition */
                ct += P
              ) {
                var ut = ct <= G ? S : ct >= G + h ? h : ct - G;
                if (ft < ut)
                  break;
                var xn = ft - ut, ea = P - ut;
                $.push(x(F(ut + xn % ea, 0))), ft = q(xn / ea);
              }
              $.push(x(F(ft, 0))), G = E(H, Ie, oe == W), H = 0, ++oe;
            }
          }
        } catch (Vr) {
          fr = !0, Ze = Vr;
        } finally {
          try {
            !Ue && Lr.return && Lr.return();
          } finally {
            if (fr)
              throw Ze;
          }
        }
        ++H, ++I;
      }
      return $.join("");
    }, u = function(l) {
      return ce(l, function($) {
        return b.test($) ? M($.slice(4).toLowerCase()) : $;
      });
    }, v = function(l) {
      return ce(l, function($) {
        return R.test($) ? "xn--" + N($) : $;
      });
    }, T = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "2.1.0",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: je,
        encode: We
      },
      decode: M,
      encode: N,
      toASCII: v,
      toUnicode: u
    }, V = {};
    function U(y) {
      var l = y.charCodeAt(0), $ = void 0;
      return l < 16 ? $ = "%0" + l.toString(16).toUpperCase() : l < 128 ? $ = "%" + l.toString(16).toUpperCase() : l < 2048 ? $ = "%" + (l >> 6 | 192).toString(16).toUpperCase() + "%" + (l & 63 | 128).toString(16).toUpperCase() : $ = "%" + (l >> 12 | 224).toString(16).toUpperCase() + "%" + (l >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (l & 63 | 128).toString(16).toUpperCase(), $;
    }
    function Q(y) {
      for (var l = "", $ = 0, A = y.length; $ < A; ) {
        var I = parseInt(y.substr($ + 1, 2), 16);
        if (I < 128)
          l += String.fromCharCode(I), $ += 3;
        else if (I >= 194 && I < 224) {
          if (A - $ >= 6) {
            var H = parseInt(y.substr($ + 4, 2), 16);
            l += String.fromCharCode((I & 31) << 6 | H & 63);
          } else
            l += y.substr($, 6);
          $ += 6;
        } else if (I >= 224) {
          if (A - $ >= 9) {
            var G = parseInt(y.substr($ + 4, 2), 16), re = parseInt(y.substr($ + 7, 2), 16);
            l += String.fromCharCode((I & 15) << 12 | (G & 63) << 6 | re & 63);
          } else
            l += y.substr($, 9);
          $ += 9;
        } else
          l += y.substr($, 3), $ += 3;
      }
      return l;
    }
    function ee(y, l) {
      function $(A) {
        var I = Q(A);
        return I.match(l.UNRESERVED) ? I : A;
      }
      return y.scheme && (y.scheme = String(y.scheme).replace(l.PCT_ENCODED, $).toLowerCase().replace(l.NOT_SCHEME, "")), y.userinfo !== void 0 && (y.userinfo = String(y.userinfo).replace(l.PCT_ENCODED, $).replace(l.NOT_USERINFO, U).replace(l.PCT_ENCODED, s)), y.host !== void 0 && (y.host = String(y.host).replace(l.PCT_ENCODED, $).toLowerCase().replace(l.NOT_HOST, U).replace(l.PCT_ENCODED, s)), y.path !== void 0 && (y.path = String(y.path).replace(l.PCT_ENCODED, $).replace(y.scheme ? l.NOT_PATH : l.NOT_PATH_NOSCHEME, U).replace(l.PCT_ENCODED, s)), y.query !== void 0 && (y.query = String(y.query).replace(l.PCT_ENCODED, $).replace(l.NOT_QUERY, U).replace(l.PCT_ENCODED, s)), y.fragment !== void 0 && (y.fragment = String(y.fragment).replace(l.PCT_ENCODED, $).replace(l.NOT_FRAGMENT, U).replace(l.PCT_ENCODED, s)), y;
    }
    function ue(y) {
      return y.replace(/^0*(.*)/, "$1") || "0";
    }
    function ze(y, l) {
      var $ = y.match(l.IPV4ADDRESS) || [], A = k($, 2), I = A[1];
      return I ? I.split(".").map(ue).join(".") : y;
    }
    function pr(y, l) {
      var $ = y.match(l.IPV6ADDRESS) || [], A = k($, 3), I = A[1], H = A[2];
      if (I) {
        for (var G = I.toLowerCase().split("::").reverse(), re = k(G, 2), se = re[0], le = re[1], Y = le ? le.split(":").map(ue) : [], ae = se.split(":").map(ue), de = l.IPV4ADDRESS.test(ae[ae.length - 1]), W = de ? 7 : 8, oe = ae.length - W, me = Array(W), fe = 0; fe < W; ++fe)
          me[fe] = Y[fe] || ae[oe + fe] || "";
        de && (me[W - 1] = ze(me[W - 1], l));
        var er = me.reduce(function(Ie, Ue, fr) {
          if (!Ue || Ue === "0") {
            var Ze = Ie[Ie.length - 1];
            Ze && Ze.index + Ze.length === fr ? Ze.length++ : Ie.push({ index: fr, length: 1 });
          }
          return Ie;
        }, []), Ve = er.sort(function(Ie, Ue) {
          return Ue.length - Ie.length;
        })[0], qe = void 0;
        if (Ve && Ve.length > 1) {
          var wr = me.slice(0, Ve.index), or = me.slice(Ve.index + Ve.length);
          qe = wr.join(":") + "::" + or.join(":");
        } else
          qe = me.join(":");
        return H && (qe += "%" + H), qe;
      } else
        return y;
    }
    var Tr = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Rr = "".match(/(){0}/)[1] === void 0;
    function Oe(y) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, $ = {}, A = l.iri !== !1 ? _ : m;
      l.reference === "suffix" && (y = (l.scheme ? l.scheme + ":" : "") + "//" + y);
      var I = y.match(Tr);
      if (I) {
        Rr ? ($.scheme = I[1], $.userinfo = I[3], $.host = I[4], $.port = parseInt(I[5], 10), $.path = I[6] || "", $.query = I[7], $.fragment = I[8], isNaN($.port) && ($.port = I[5])) : ($.scheme = I[1] || void 0, $.userinfo = y.indexOf("@") !== -1 ? I[3] : void 0, $.host = y.indexOf("//") !== -1 ? I[4] : void 0, $.port = parseInt(I[5], 10), $.path = I[6] || "", $.query = y.indexOf("?") !== -1 ? I[7] : void 0, $.fragment = y.indexOf("#") !== -1 ? I[8] : void 0, isNaN($.port) && ($.port = y.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? I[4] : void 0)), $.host && ($.host = pr(ze($.host, A), A)), $.scheme === void 0 && $.userinfo === void 0 && $.host === void 0 && $.port === void 0 && !$.path && $.query === void 0 ? $.reference = "same-document" : $.scheme === void 0 ? $.reference = "relative" : $.fragment === void 0 ? $.reference = "absolute" : $.reference = "uri", l.reference && l.reference !== "suffix" && l.reference !== $.reference && ($.error = $.error || "URI is not a " + l.reference + " reference.");
        var H = V[(l.scheme || $.scheme || "").toLowerCase()];
        if (!l.unicodeSupport && (!H || !H.unicodeSupport)) {
          if ($.host && (l.domainHost || H && H.domainHost))
            try {
              $.host = T.toASCII($.host.replace(A.PCT_ENCODED, Q).toLowerCase());
            } catch (G) {
              $.error = $.error || "Host's domain name can not be converted to ASCII via punycode: " + G;
            }
          ee($, m);
        } else
          ee($, A);
        H && H.parse && H.parse($, l);
      } else
        $.error = $.error || "URI can not be parsed.";
      return $;
    }
    function Dr(y, l) {
      var $ = l.iri !== !1 ? _ : m, A = [];
      return y.userinfo !== void 0 && (A.push(y.userinfo), A.push("@")), y.host !== void 0 && A.push(pr(ze(String(y.host), $), $).replace($.IPV6ADDRESS, function(I, H, G) {
        return "[" + H + (G ? "%25" + G : "") + "]";
      })), (typeof y.port == "number" || typeof y.port == "string") && (A.push(":"), A.push(String(y.port))), A.length ? A.join("") : void 0;
    }
    var yr = /^\.\.?\//, gr = /^\/\.(\/|$)/, vr = /^\/\.\.(\/|$)/, Cr = /^\/?(?:.|\n)*?(?=\/|$)/;
    function Fe(y) {
      for (var l = []; y.length; )
        if (y.match(yr))
          y = y.replace(yr, "");
        else if (y.match(gr))
          y = y.replace(gr, "/");
        else if (y.match(vr))
          y = y.replace(vr, "/"), l.pop();
        else if (y === "." || y === "..")
          y = "";
        else {
          var $ = y.match(Cr);
          if ($) {
            var A = $[0];
            y = y.slice(A.length), l.push(A);
          } else
            throw new Error("Unexpected dot segment condition");
        }
      return l.join("");
    }
    function Se(y) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, $ = l.iri ? _ : m, A = [], I = V[(l.scheme || y.scheme || "").toLowerCase()];
      if (I && I.serialize && I.serialize(y, l), y.host && !$.IPV6ADDRESS.test(y.host)) {
        if (l.domainHost || I && I.domainHost)
          try {
            y.host = l.iri ? T.toUnicode(y.host) : T.toASCII(y.host.replace($.PCT_ENCODED, Q).toLowerCase());
          } catch (re) {
            y.error = y.error || "Host's domain name can not be converted to " + (l.iri ? "Unicode" : "ASCII") + " via punycode: " + re;
          }
      }
      ee(y, $), l.reference !== "suffix" && y.scheme && (A.push(y.scheme), A.push(":"));
      var H = Dr(y, l);
      if (H !== void 0 && (l.reference !== "suffix" && A.push("//"), A.push(H), y.path && y.path.charAt(0) !== "/" && A.push("/")), y.path !== void 0) {
        var G = y.path;
        !l.absolutePath && (!I || !I.absolutePath) && (G = Fe(G)), H === void 0 && (G = G.replace(/^\/\//, "/%2F")), A.push(G);
      }
      return y.query !== void 0 && (A.push("?"), A.push(y.query)), y.fragment !== void 0 && (A.push("#"), A.push(y.fragment)), A.join("");
    }
    function $r(y, l) {
      var $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, A = arguments[3], I = {};
      return A || (y = Oe(Se(y, $), $), l = Oe(Se(l, $), $)), $ = $ || {}, !$.tolerant && l.scheme ? (I.scheme = l.scheme, I.userinfo = l.userinfo, I.host = l.host, I.port = l.port, I.path = Fe(l.path || ""), I.query = l.query) : (l.userinfo !== void 0 || l.host !== void 0 || l.port !== void 0 ? (I.userinfo = l.userinfo, I.host = l.host, I.port = l.port, I.path = Fe(l.path || ""), I.query = l.query) : (l.path ? (l.path.charAt(0) === "/" ? I.path = Fe(l.path) : ((y.userinfo !== void 0 || y.host !== void 0 || y.port !== void 0) && !y.path ? I.path = "/" + l.path : y.path ? I.path = y.path.slice(0, y.path.lastIndexOf("/") + 1) + l.path : I.path = l.path, I.path = Fe(I.path)), I.query = l.query) : (I.path = y.path, l.query !== void 0 ? I.query = l.query : I.query = y.query), I.userinfo = y.userinfo, I.host = y.host, I.port = y.port), I.scheme = y.scheme), I.fragment = l.fragment, I;
    }
    function Mr(y, l, $) {
      var A = d({ scheme: "null" }, $);
      return Se($r(Oe(y, A), Oe(l, A), A, !0), A);
    }
    function sr(y, l) {
      return typeof y == "string" ? y = Se(Oe(y, l), l) : i(y) === "object" && (y = Oe(Se(y, l), l)), y;
    }
    function zr(y, l, $) {
      return typeof y == "string" ? y = Se(Oe(y, $), $) : i(y) === "object" && (y = Se(y, $)), typeof l == "string" ? l = Se(Oe(l, $), $) : i(l) === "object" && (l = Se(l, $)), y === l;
    }
    function ot(y, l) {
      return y && y.toString().replace(!l || !l.iri ? m.ESCAPE : _.ESCAPE, U);
    }
    function Ne(y, l) {
      return y && y.toString().replace(!l || !l.iri ? m.PCT_ENCODED : _.PCT_ENCODED, Q);
    }
    var ir = {
      scheme: "http",
      domainHost: !0,
      parse: function(l, $) {
        return l.host || (l.error = l.error || "HTTP URIs must have a host."), l;
      },
      serialize: function(l, $) {
        var A = String(l.scheme).toLowerCase() === "https";
        return (l.port === (A ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
      }
    }, Kn = {
      scheme: "https",
      domainHost: ir.domainHost,
      parse: ir.parse,
      serialize: ir.serialize
    };
    function Hn(y) {
      return typeof y.secure == "boolean" ? y.secure : String(y.scheme).toLowerCase() === "wss";
    }
    var Fr = {
      scheme: "ws",
      domainHost: !0,
      parse: function(l, $) {
        var A = l;
        return A.secure = Hn(A), A.resourceName = (A.path || "/") + (A.query ? "?" + A.query : ""), A.path = void 0, A.query = void 0, A;
      },
      serialize: function(l, $) {
        if ((l.port === (Hn(l) ? 443 : 80) || l.port === "") && (l.port = void 0), typeof l.secure == "boolean" && (l.scheme = l.secure ? "wss" : "ws", l.secure = void 0), l.resourceName) {
          var A = l.resourceName.split("?"), I = k(A, 2), H = I[0], G = I[1];
          l.path = H && H !== "/" ? H : void 0, l.query = G, l.resourceName = void 0;
        }
        return l.fragment = void 0, l;
      }
    }, Jn = {
      scheme: "wss",
      domainHost: Fr.domainHost,
      parse: Fr.parse,
      serialize: Fr.serialize
    }, Ls = {}, Gn = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", Le = "[0-9A-Fa-f]", Vs = a(a("%[EFef]" + Le + "%" + Le + Le + "%" + Le + Le) + "|" + a("%[89A-Fa-f]" + Le + "%" + Le + Le) + "|" + a("%" + Le + Le)), qs = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", Us = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", Ks = n(Us, '[\\"\\\\]'), Hs = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Js = new RegExp(Gn, "g"), _r = new RegExp(Vs, "g"), Gs = new RegExp(n("[^]", qs, "[\\.]", '[\\"]', Ks), "g"), Bn = new RegExp(n("[^]", Gn, Hs), "g"), Bs = Bn;
    function Mt(y) {
      var l = Q(y);
      return l.match(Js) ? l : y;
    }
    var Wn = {
      scheme: "mailto",
      parse: function(l, $) {
        var A = l, I = A.to = A.path ? A.path.split(",") : [];
        if (A.path = void 0, A.query) {
          for (var H = !1, G = {}, re = A.query.split("&"), se = 0, le = re.length; se < le; ++se) {
            var Y = re[se].split("=");
            switch (Y[0]) {
              case "to":
                for (var ae = Y[1].split(","), de = 0, W = ae.length; de < W; ++de)
                  I.push(ae[de]);
                break;
              case "subject":
                A.subject = Ne(Y[1], $);
                break;
              case "body":
                A.body = Ne(Y[1], $);
                break;
              default:
                H = !0, G[Ne(Y[0], $)] = Ne(Y[1], $);
                break;
            }
          }
          H && (A.headers = G);
        }
        A.query = void 0;
        for (var oe = 0, me = I.length; oe < me; ++oe) {
          var fe = I[oe].split("@");
          if (fe[0] = Ne(fe[0]), $.unicodeSupport)
            fe[1] = Ne(fe[1], $).toLowerCase();
          else
            try {
              fe[1] = T.toASCII(Ne(fe[1], $).toLowerCase());
            } catch (er) {
              A.error = A.error || "Email address's domain name can not be converted to ASCII via punycode: " + er;
            }
          I[oe] = fe.join("@");
        }
        return A;
      },
      serialize: function(l, $) {
        var A = l, I = o(l.to);
        if (I) {
          for (var H = 0, G = I.length; H < G; ++H) {
            var re = String(I[H]), se = re.lastIndexOf("@"), le = re.slice(0, se).replace(_r, Mt).replace(_r, s).replace(Gs, U), Y = re.slice(se + 1);
            try {
              Y = $.iri ? T.toUnicode(Y) : T.toASCII(Ne(Y, $).toLowerCase());
            } catch (oe) {
              A.error = A.error || "Email address's domain name can not be converted to " + ($.iri ? "Unicode" : "ASCII") + " via punycode: " + oe;
            }
            I[H] = le + "@" + Y;
          }
          A.path = I.join(",");
        }
        var ae = l.headers = l.headers || {};
        l.subject && (ae.subject = l.subject), l.body && (ae.body = l.body);
        var de = [];
        for (var W in ae)
          ae[W] !== Ls[W] && de.push(W.replace(_r, Mt).replace(_r, s).replace(Bn, U) + "=" + ae[W].replace(_r, Mt).replace(_r, s).replace(Bs, U));
        return de.length && (A.query = de.join("&")), A;
      }
    }, Ws = /^([^\:]+)\:(.*)/, Zn = {
      scheme: "urn",
      parse: function(l, $) {
        var A = l.path && l.path.match(Ws), I = l;
        if (A) {
          var H = $.scheme || I.scheme || "urn", G = A[1].toLowerCase(), re = A[2], se = H + ":" + ($.nid || G), le = V[se];
          I.nid = G, I.nss = re, I.path = void 0, le && (I = le.parse(I, $));
        } else
          I.error = I.error || "URN can not be parsed.";
        return I;
      },
      serialize: function(l, $) {
        var A = $.scheme || l.scheme || "urn", I = l.nid, H = A + ":" + ($.nid || I), G = V[H];
        G && (l = G.serialize(l, $));
        var re = l, se = l.nss;
        return re.path = (I || $.nid) + ":" + se, re;
      }
    }, Zs = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, Xn = {
      scheme: "urn:uuid",
      parse: function(l, $) {
        var A = l;
        return A.uuid = A.nss, A.nss = void 0, !$.tolerant && (!A.uuid || !A.uuid.match(Zs)) && (A.error = A.error || "UUID is not valid."), A;
      },
      serialize: function(l, $) {
        var A = l;
        return A.nss = (l.uuid || "").toLowerCase(), A;
      }
    };
    V[ir.scheme] = ir, V[Kn.scheme] = Kn, V[Fr.scheme] = Fr, V[Jn.scheme] = Jn, V[Wn.scheme] = Wn, V[Zn.scheme] = Zn, V[Xn.scheme] = Xn, t.SCHEMES = V, t.pctEncChar = U, t.pctDecChars = Q, t.parse = Oe, t.removeDotSegments = Fe, t.serialize = Se, t.resolveComponents = $r, t.resolve = Mr, t.normalize = sr, t.equal = zr, t.escapeComponent = ot, t.unescapeComponent = Ne, Object.defineProperty(t, "__esModule", { value: !0 });
  });
})(Zo, Pt);
Object.defineProperty(on, "__esModule", { value: !0 });
const is = Pt;
is.code = 'require("ajv/dist/runtime/uri").default';
on.default = is;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var r = Me;
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return r.KeywordCxt;
  } });
  var t = Z;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return t._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return t.str;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return t.stringify;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return t.nil;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return t.Name;
  } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
    return t.CodeGen;
  } });
  const n = at, a = st, i = hr, s = Pe, o = Z, d = ge, c = nt, m = te, _ = Wo, k = on, j = (F, E) => new RegExp(F, E);
  j.code = "new RegExp";
  const O = ["removeAdditional", "useDefaults", "coerceTypes"], P = /* @__PURE__ */ new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error"
  ]), S = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
  }, h = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, w = 200;
  function f(F) {
    var E, M, N, u, v, T, V, U, Q, ee, ue, ze, pr, Tr, Rr, Oe, Dr, yr, gr, vr, Cr, Fe, Se, $r, Mr;
    const sr = F.strict, zr = (E = F.code) === null || E === void 0 ? void 0 : E.optimize, ot = zr === !0 || zr === void 0 ? 1 : zr || 0, Ne = (N = (M = F.code) === null || M === void 0 ? void 0 : M.regExp) !== null && N !== void 0 ? N : j, ir = (u = F.uriResolver) !== null && u !== void 0 ? u : k.default;
    return {
      strictSchema: (T = (v = F.strictSchema) !== null && v !== void 0 ? v : sr) !== null && T !== void 0 ? T : !0,
      strictNumbers: (U = (V = F.strictNumbers) !== null && V !== void 0 ? V : sr) !== null && U !== void 0 ? U : !0,
      strictTypes: (ee = (Q = F.strictTypes) !== null && Q !== void 0 ? Q : sr) !== null && ee !== void 0 ? ee : "log",
      strictTuples: (ze = (ue = F.strictTuples) !== null && ue !== void 0 ? ue : sr) !== null && ze !== void 0 ? ze : "log",
      strictRequired: (Tr = (pr = F.strictRequired) !== null && pr !== void 0 ? pr : sr) !== null && Tr !== void 0 ? Tr : !1,
      code: F.code ? { ...F.code, optimize: ot, regExp: Ne } : { optimize: ot, regExp: Ne },
      loopRequired: (Rr = F.loopRequired) !== null && Rr !== void 0 ? Rr : w,
      loopEnum: (Oe = F.loopEnum) !== null && Oe !== void 0 ? Oe : w,
      meta: (Dr = F.meta) !== null && Dr !== void 0 ? Dr : !0,
      messages: (yr = F.messages) !== null && yr !== void 0 ? yr : !0,
      inlineRefs: (gr = F.inlineRefs) !== null && gr !== void 0 ? gr : !0,
      schemaId: (vr = F.schemaId) !== null && vr !== void 0 ? vr : "$id",
      addUsedSchema: (Cr = F.addUsedSchema) !== null && Cr !== void 0 ? Cr : !0,
      validateSchema: (Fe = F.validateSchema) !== null && Fe !== void 0 ? Fe : !0,
      validateFormats: (Se = F.validateFormats) !== null && Se !== void 0 ? Se : !0,
      unicodeRegExp: ($r = F.unicodeRegExp) !== null && $r !== void 0 ? $r : !0,
      int32range: (Mr = F.int32range) !== null && Mr !== void 0 ? Mr : !0,
      uriResolver: ir
    };
  }
  class g {
    constructor(E = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), E = this.opts = { ...E, ...f(E) };
      const { es5: M, lines: N } = this.opts.code;
      this.scope = new o.ValueScope({ scope: {}, prefixes: P, es5: M, lines: N }), this.logger = q(E.logger);
      const u = E.validateFormats;
      E.validateFormats = !1, this.RULES = (0, i.getRules)(), D.call(this, S, E, "NOT SUPPORTED"), D.call(this, h, E, "DEPRECATED", "warn"), this._metaOpts = L.call(this), E.formats && R.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), E.keywords && C.call(this, E.keywords), typeof E.meta == "object" && this.addMetaSchema(E.meta), b.call(this), E.validateFormats = u;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: E, meta: M, schemaId: N } = this.opts;
      let u = _;
      N === "id" && (u = { ..._ }, u.id = u.$id, delete u.$id), M && E && this.addMetaSchema(u, u[N], !1);
    }
    defaultMeta() {
      const { meta: E, schemaId: M } = this.opts;
      return this.opts.defaultMeta = typeof E == "object" ? E[M] || E : void 0;
    }
    validate(E, M) {
      let N;
      if (typeof E == "string") {
        if (N = this.getSchema(E), !N)
          throw new Error(`no schema with key or ref "${E}"`);
      } else
        N = this.compile(E);
      const u = N(M);
      return "$async" in N || (this.errors = N.errors), u;
    }
    compile(E, M) {
      const N = this._addSchema(E, M);
      return N.validate || this._compileSchemaEnv(N);
    }
    compileAsync(E, M) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: N } = this.opts;
      return u.call(this, E, M);
      async function u(ee, ue) {
        await v.call(this, ee.$schema);
        const ze = this._addSchema(ee, ue);
        return ze.validate || T.call(this, ze);
      }
      async function v(ee) {
        ee && !this.getSchema(ee) && await u.call(this, { $ref: ee }, !0);
      }
      async function T(ee) {
        try {
          return this._compileSchemaEnv(ee);
        } catch (ue) {
          if (!(ue instanceof a.default))
            throw ue;
          return V.call(this, ue), await U.call(this, ue.missingSchema), T.call(this, ee);
        }
      }
      function V({ missingSchema: ee, missingRef: ue }) {
        if (this.refs[ee])
          throw new Error(`AnySchema ${ee} is loaded but ${ue} cannot be resolved`);
      }
      async function U(ee) {
        const ue = await Q.call(this, ee);
        this.refs[ee] || await v.call(this, ue.$schema), this.refs[ee] || this.addSchema(ue, ee, M);
      }
      async function Q(ee) {
        const ue = this._loading[ee];
        if (ue)
          return ue;
        try {
          return await (this._loading[ee] = N(ee));
        } finally {
          delete this._loading[ee];
        }
      }
    }
    // Adds schema to the instance
    addSchema(E, M, N, u = this.opts.validateSchema) {
      if (Array.isArray(E)) {
        for (const T of E)
          this.addSchema(T, void 0, N, u);
        return this;
      }
      let v;
      if (typeof E == "object") {
        const { schemaId: T } = this.opts;
        if (v = E[T], v !== void 0 && typeof v != "string")
          throw new Error(`schema ${T} must be string`);
      }
      return M = (0, d.normalizeId)(M || v), this._checkUnique(M), this.schemas[M] = this._addSchema(E, N, M, u, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(E, M, N = this.opts.validateSchema) {
      return this.addSchema(E, M, !0, N), this;
    }
    //  Validate schema against its meta-schema
    validateSchema(E, M) {
      if (typeof E == "boolean")
        return !0;
      let N;
      if (N = E.$schema, N !== void 0 && typeof N != "string")
        throw new Error("$schema must be a string");
      if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const u = this.validate(N, E);
      if (!u && M) {
        const v = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(v);
        else
          throw new Error(v);
      }
      return u;
    }
    // Get compiled schema by `key` or `ref`.
    // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
    getSchema(E) {
      let M;
      for (; typeof (M = p.call(this, E)) == "string"; )
        E = M;
      if (M === void 0) {
        const { schemaId: N } = this.opts, u = new s.SchemaEnv({ schema: {}, schemaId: N });
        if (M = s.resolveSchema.call(this, u, E), !M)
          return;
        this.refs[E] = M;
      }
      return M.validate || this._compileSchemaEnv(M);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema(E) {
      if (E instanceof RegExp)
        return this._removeAllSchemas(this.schemas, E), this._removeAllSchemas(this.refs, E), this;
      switch (typeof E) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          const M = p.call(this, E);
          return typeof M == "object" && this._cache.delete(M.schema), delete this.schemas[E], delete this.refs[E], this;
        }
        case "object": {
          const M = E;
          this._cache.delete(M);
          let N = E[this.opts.schemaId];
          return N && (N = (0, d.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary(E) {
      for (const M of E)
        this.addKeyword(M);
      return this;
    }
    addKeyword(E, M) {
      let N;
      if (typeof E == "string")
        N = E, typeof M == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), M.keyword = N);
      else if (typeof E == "object" && M === void 0) {
        if (M = E, N = M.keyword, Array.isArray(N) && !N.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (ne.call(this, N, M), !M)
        return (0, m.eachItem)(N, (v) => pe.call(this, v)), this;
      je.call(this, M);
      const u = {
        ...M,
        type: (0, c.getJSONTypes)(M.type),
        schemaType: (0, c.getJSONTypes)(M.schemaType)
      };
      return (0, m.eachItem)(N, u.type.length === 0 ? (v) => pe.call(this, v, u) : (v) => u.type.forEach((T) => pe.call(this, v, u, T))), this;
    }
    getKeyword(E) {
      const M = this.RULES.all[E];
      return typeof M == "object" ? M.definition : !!M;
    }
    // Remove keyword
    removeKeyword(E) {
      const { RULES: M } = this;
      delete M.keywords[E], delete M.all[E];
      for (const N of M.rules) {
        const u = N.rules.findIndex((v) => v.keyword === E);
        u >= 0 && N.rules.splice(u, 1);
      }
      return this;
    }
    // Add format
    addFormat(E, M) {
      return typeof M == "string" && (M = new RegExp(M)), this.formats[E] = M, this;
    }
    errorsText(E = this.errors, { separator: M = ", ", dataVar: N = "data" } = {}) {
      return !E || E.length === 0 ? "No errors" : E.map((u) => `${N}${u.instancePath} ${u.message}`).reduce((u, v) => u + M + v);
    }
    $dataMetaSchema(E, M) {
      const N = this.RULES.all;
      E = JSON.parse(JSON.stringify(E));
      for (const u of M) {
        const v = u.split("/").slice(1);
        let T = E;
        for (const V of v)
          T = T[V];
        for (const V in N) {
          const U = N[V];
          if (typeof U != "object")
            continue;
          const { $data: Q } = U.definition, ee = T[V];
          Q && ee && (T[V] = be(ee));
        }
      }
      return E;
    }
    _removeAllSchemas(E, M) {
      for (const N in E) {
        const u = E[N];
        (!M || M.test(N)) && (typeof u == "string" ? delete E[N] : u && !u.meta && (this._cache.delete(u.schema), delete E[N]));
      }
    }
    _addSchema(E, M, N, u = this.opts.validateSchema, v = this.opts.addUsedSchema) {
      let T;
      const { schemaId: V } = this.opts;
      if (typeof E == "object")
        T = E[V];
      else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        if (typeof E != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let U = this._cache.get(E);
      if (U !== void 0)
        return U;
      N = (0, d.normalizeId)(T || N);
      const Q = d.getSchemaRefs.call(this, E, N);
      return U = new s.SchemaEnv({ schema: E, schemaId: V, meta: M, baseId: N, localRefs: Q }), this._cache.set(U.schema, U), v && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = U), u && this.validateSchema(E, !0), U;
    }
    _checkUnique(E) {
      if (this.schemas[E] || this.refs[E])
        throw new Error(`schema with key or id "${E}" already exists`);
    }
    _compileSchemaEnv(E) {
      if (E.meta ? this._compileMetaSchema(E) : s.compileSchema.call(this, E), !E.validate)
        throw new Error("ajv implementation error");
      return E.validate;
    }
    _compileMetaSchema(E) {
      const M = this.opts;
      this.opts = this._metaOpts;
      try {
        s.compileSchema.call(this, E);
      } finally {
        this.opts = M;
      }
    }
  }
  e.default = g, g.ValidationError = n.default, g.MissingRefError = a.default;
  function D(F, E, M, N = "error") {
    for (const u in F) {
      const v = u;
      v in E && this.logger[N](`${M}: option ${u}. ${F[v]}`);
    }
  }
  function p(F) {
    return F = (0, d.normalizeId)(F), this.schemas[F] || this.refs[F];
  }
  function b() {
    const F = this.opts.schemas;
    if (F)
      if (Array.isArray(F))
        this.addSchema(F);
      else
        for (const E in F)
          this.addSchema(F[E], E);
  }
  function R() {
    for (const F in this.opts.formats) {
      const E = this.opts.formats[F];
      E && this.addFormat(F, E);
    }
  }
  function C(F) {
    if (Array.isArray(F)) {
      this.addVocabulary(F);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const E in F) {
      const M = F[E];
      M.keyword || (M.keyword = E), this.addKeyword(M);
    }
  }
  function L() {
    const F = { ...this.opts };
    for (const E of O)
      delete F[E];
    return F;
  }
  const J = { log() {
  }, warn() {
  }, error() {
  } };
  function q(F) {
    if (F === !1)
      return J;
    if (F === void 0)
      return console;
    if (F.log && F.warn && F.error)
      return F;
    throw new Error("logger must implement log, warn and error methods");
  }
  const x = /^[a-z_$][a-z0-9_$:-]*$/i;
  function ne(F, E) {
    const { RULES: M } = this;
    if ((0, m.eachItem)(F, (N) => {
      if (M.keywords[N])
        throw new Error(`Keyword ${N} is already defined`);
      if (!x.test(N))
        throw new Error(`Keyword ${N} has invalid name`);
    }), !!E && E.$data && !("code" in E || "validate" in E))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function pe(F, E, M) {
    var N;
    const u = E == null ? void 0 : E.post;
    if (M && u)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: v } = this;
    let T = u ? v.post : v.rules.find(({ type: U }) => U === M);
    if (T || (T = { type: M, rules: [] }, v.rules.push(T)), v.keywords[F] = !0, !E)
      return;
    const V = {
      keyword: F,
      definition: {
        ...E,
        type: (0, c.getJSONTypes)(E.type),
        schemaType: (0, c.getJSONTypes)(E.schemaType)
      }
    };
    E.before ? ce.call(this, T, V, E.before) : T.rules.push(V), v.all[F] = V, (N = E.implements) === null || N === void 0 || N.forEach((U) => this.addKeyword(U));
  }
  function ce(F, E, M) {
    const N = F.rules.findIndex((u) => u.keyword === M);
    N >= 0 ? F.rules.splice(N, 0, E) : (F.rules.push(E), this.logger.warn(`rule ${M} is not defined`));
  }
  function je(F) {
    let { metaSchema: E } = F;
    E !== void 0 && (F.$data && this.opts.$data && (E = be(E)), F.validateSchema = this.compile(E, !0));
  }
  const We = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function be(F) {
    return { anyOf: [F, We] };
  }
})(za);
var fn = {}, cn = {}, un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
const Xo = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
un.default = Xo;
var mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.callRef = mr.getValidate = void 0;
const Qo = st, da = X, Ee = Z, Sr = Be, ha = Pe, lt = te, Yo = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: r, schema: t, it: n } = e, { baseId: a, schemaEnv: i, validateName: s, opts: o, self: d } = n, { root: c } = i;
    if ((t === "#" || t === "#/") && a === c.baseId)
      return _();
    const m = ha.resolveRef.call(d, c, a, t);
    if (m === void 0)
      throw new Qo.default(n.opts.uriResolver, a, t);
    if (m instanceof ha.SchemaEnv)
      return k(m);
    return j(m);
    function _() {
      if (i === c)
        return vt(e, s, i, i.$async);
      const O = r.scopeValue("root", { ref: c });
      return vt(e, (0, Ee._)`${O}.validate`, c, c.$async);
    }
    function k(O) {
      const P = os(e, O);
      vt(e, P, O, O.$async);
    }
    function j(O) {
      const P = r.scopeValue("schema", o.code.source === !0 ? { ref: O, code: (0, Ee.stringify)(O) } : { ref: O }), S = r.name("valid"), h = e.subschema({
        schema: O,
        dataTypes: [],
        schemaPath: Ee.nil,
        topSchemaRef: P,
        errSchemaPath: t
      }, S);
      e.mergeEvaluated(h), e.ok(S);
    }
  }
};
function os(e, r) {
  const { gen: t } = e;
  return r.validate ? t.scopeValue("validate", { ref: r.validate }) : (0, Ee._)`${t.scopeValue("wrapper", { ref: r })}.validate`;
}
mr.getValidate = os;
function vt(e, r, t, n) {
  const { gen: a, it: i } = e, { allErrors: s, schemaEnv: o, opts: d } = i, c = d.passContext ? Sr.default.this : Ee.nil;
  n ? m() : _();
  function m() {
    if (!o.$async)
      throw new Error("async schema referenced by sync schema");
    const O = a.let("valid");
    a.try(() => {
      a.code((0, Ee._)`await ${(0, da.callValidateCode)(e, r, c)}`), j(r), s || a.assign(O, !0);
    }, (P) => {
      a.if((0, Ee._)`!(${P} instanceof ${i.ValidationError})`, () => a.throw(P)), k(P), s || a.assign(O, !1);
    }), e.ok(O);
  }
  function _() {
    e.result((0, da.callValidateCode)(e, r, c), () => j(r), () => k(r));
  }
  function k(O) {
    const P = (0, Ee._)`${O}.errors`;
    a.assign(Sr.default.vErrors, (0, Ee._)`${Sr.default.vErrors} === null ? ${P} : ${Sr.default.vErrors}.concat(${P})`), a.assign(Sr.default.errors, (0, Ee._)`${Sr.default.vErrors}.length`);
  }
  function j(O) {
    var P;
    if (!i.opts.unevaluated)
      return;
    const S = (P = t == null ? void 0 : t.validate) === null || P === void 0 ? void 0 : P.evaluated;
    if (i.props !== !0)
      if (S && !S.dynamicProps)
        S.props !== void 0 && (i.props = lt.mergeEvaluated.props(a, S.props, i.props));
      else {
        const h = a.var("props", (0, Ee._)`${O}.evaluated.props`);
        i.props = lt.mergeEvaluated.props(a, h, i.props, Ee.Name);
      }
    if (i.items !== !0)
      if (S && !S.dynamicItems)
        S.items !== void 0 && (i.items = lt.mergeEvaluated.items(a, S.items, i.items));
      else {
        const h = a.var("items", (0, Ee._)`${O}.evaluated.items`);
        i.items = lt.mergeEvaluated.items(a, h, i.items, Ee.Name);
      }
  }
}
mr.callRef = vt;
mr.default = Yo;
Object.defineProperty(cn, "__esModule", { value: !0 });
const xo = un, ef = mr, rf = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  xo.default,
  ef.default
];
cn.default = rf;
var ln = {}, dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
const Ot = Z, tr = Ot.operators, jt = {
  maximum: { okStr: "<=", ok: tr.LTE, fail: tr.GT },
  minimum: { okStr: ">=", ok: tr.GTE, fail: tr.LT },
  exclusiveMaximum: { okStr: "<", ok: tr.LT, fail: tr.GTE },
  exclusiveMinimum: { okStr: ">", ok: tr.GT, fail: tr.LTE }
}, tf = {
  message: ({ keyword: e, schemaCode: r }) => (0, Ot.str)`must be ${jt[e].okStr} ${r}`,
  params: ({ keyword: e, schemaCode: r }) => (0, Ot._)`{comparison: ${jt[e].okStr}, limit: ${r}}`
}, nf = {
  keyword: Object.keys(jt),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: tf,
  code(e) {
    const { keyword: r, data: t, schemaCode: n } = e;
    e.fail$data((0, Ot._)`${t} ${jt[r].fail} ${n} || isNaN(${t})`);
  }
};
dn.default = nf;
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
const Gr = Z, af = {
  message: ({ schemaCode: e }) => (0, Gr.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, Gr._)`{multipleOf: ${e}}`
}, sf = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: af,
  code(e) {
    const { gen: r, data: t, schemaCode: n, it: a } = e, i = a.opts.multipleOfPrecision, s = r.let("res"), o = i ? (0, Gr._)`Math.abs(Math.round(${s}) - ${s}) > 1e-${i}` : (0, Gr._)`${s} !== parseInt(${s})`;
    e.fail$data((0, Gr._)`(${n} === 0 || (${s} = ${t}/${n}, ${o}))`);
  }
};
hn.default = sf;
var mn = {}, pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
function fs(e) {
  const r = e.length;
  let t = 0, n = 0, a;
  for (; n < r; )
    t++, a = e.charCodeAt(n++), a >= 55296 && a <= 56319 && n < r && (a = e.charCodeAt(n), (a & 64512) === 56320 && n++);
  return t;
}
pn.default = fs;
fs.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(mn, "__esModule", { value: !0 });
const lr = Z, of = te, ff = pn, cf = {
  message({ keyword: e, schemaCode: r }) {
    const t = e === "maxLength" ? "more" : "fewer";
    return (0, lr.str)`must NOT have ${t} than ${r} characters`;
  },
  params: ({ schemaCode: e }) => (0, lr._)`{limit: ${e}}`
}, uf = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: cf,
  code(e) {
    const { keyword: r, data: t, schemaCode: n, it: a } = e, i = r === "maxLength" ? lr.operators.GT : lr.operators.LT, s = a.opts.unicode === !1 ? (0, lr._)`${t}.length` : (0, lr._)`${(0, of.useFunc)(e.gen, ff.default)}(${t})`;
    e.fail$data((0, lr._)`${s} ${i} ${n}`);
  }
};
mn.default = uf;
var yn = {};
Object.defineProperty(yn, "__esModule", { value: !0 });
const lf = X, Nt = Z, df = {
  message: ({ schemaCode: e }) => (0, Nt.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, Nt._)`{pattern: ${e}}`
}, hf = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: df,
  code(e) {
    const { data: r, $data: t, schema: n, schemaCode: a, it: i } = e, s = i.opts.unicodeRegExp ? "u" : "", o = t ? (0, Nt._)`(new RegExp(${a}, ${s}))` : (0, lf.usePattern)(e, n);
    e.fail$data((0, Nt._)`!${o}.test(${r})`);
  }
};
yn.default = hf;
var gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
const Br = Z, mf = {
  message({ keyword: e, schemaCode: r }) {
    const t = e === "maxProperties" ? "more" : "fewer";
    return (0, Br.str)`must NOT have ${t} than ${r} properties`;
  },
  params: ({ schemaCode: e }) => (0, Br._)`{limit: ${e}}`
}, pf = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: mf,
  code(e) {
    const { keyword: r, data: t, schemaCode: n } = e, a = r === "maxProperties" ? Br.operators.GT : Br.operators.LT;
    e.fail$data((0, Br._)`Object.keys(${t}).length ${a} ${n}`);
  }
};
gn.default = pf;
var vn = {};
Object.defineProperty(vn, "__esModule", { value: !0 });
const Ur = X, Wr = Z, yf = te, gf = {
  message: ({ params: { missingProperty: e } }) => (0, Wr.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, Wr._)`{missingProperty: ${e}}`
}, vf = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: gf,
  code(e) {
    const { gen: r, schema: t, schemaCode: n, data: a, $data: i, it: s } = e, { opts: o } = s;
    if (!i && t.length === 0)
      return;
    const d = t.length >= o.loopRequired;
    if (s.allErrors ? c() : m(), o.strictRequired) {
      const j = e.parentSchema.properties, { definedProperties: O } = e.it;
      for (const P of t)
        if ((j == null ? void 0 : j[P]) === void 0 && !O.has(P)) {
          const S = s.schemaEnv.baseId + s.errSchemaPath, h = `required property "${P}" is not defined at "${S}" (strictRequired)`;
          (0, yf.checkStrictMode)(s, h, s.opts.strictRequired);
        }
    }
    function c() {
      if (d || i)
        e.block$data(Wr.nil, _);
      else
        for (const j of t)
          (0, Ur.checkReportMissingProp)(e, j);
    }
    function m() {
      const j = r.let("missing");
      if (d || i) {
        const O = r.let("valid", !0);
        e.block$data(O, () => k(j, O)), e.ok(O);
      } else
        r.if((0, Ur.checkMissingProp)(e, t, j)), (0, Ur.reportMissingProp)(e, j), r.else();
    }
    function _() {
      r.forOf("prop", n, (j) => {
        e.setParams({ missingProperty: j }), r.if((0, Ur.noPropertyInData)(r, a, j, o.ownProperties), () => e.error());
      });
    }
    function k(j, O) {
      e.setParams({ missingProperty: j }), r.forOf(j, n, () => {
        r.assign(O, (0, Ur.propertyInData)(r, a, j, o.ownProperties)), r.if((0, Wr.not)(O), () => {
          e.error(), r.break();
        });
      }, Wr.nil);
    }
  }
};
vn.default = vf;
var $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
const Zr = Z, $f = {
  message({ keyword: e, schemaCode: r }) {
    const t = e === "maxItems" ? "more" : "fewer";
    return (0, Zr.str)`must NOT have ${t} than ${r} items`;
  },
  params: ({ schemaCode: e }) => (0, Zr._)`{limit: ${e}}`
}, _f = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: $f,
  code(e) {
    const { keyword: r, data: t, schemaCode: n } = e, a = r === "maxItems" ? Zr.operators.GT : Zr.operators.LT;
    e.fail$data((0, Zr._)`${t}.length ${a} ${n}`);
  }
};
$n.default = _f;
var _n = {};
Object.defineProperty(_n, "__esModule", { value: !0 });
const qt = nt, ye = Z, wf = te, bf = Ir, Sf = {
  message: ({ params: { i: e, j: r } }) => (0, ye.str)`must NOT have duplicate items (items ## ${r} and ${e} are identical)`,
  params: ({ params: { i: e, j: r } }) => (0, ye._)`{i: ${e}, j: ${r}}`
}, Ef = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: Sf,
  code(e) {
    const { gen: r, data: t, $data: n, schema: a, parentSchema: i, schemaCode: s, it: o } = e;
    if (!n && !a)
      return;
    const d = r.let("valid"), c = i.items ? (0, qt.getSchemaTypes)(i.items) : [];
    e.block$data(d, m, (0, ye._)`${s} === false`), e.ok(d);
    function m() {
      const O = r.let("i", (0, ye._)`${t}.length`), P = r.let("j");
      e.setParams({ i: O, j: P }), r.assign(d, !0), r.if((0, ye._)`${O} > 1`, () => (_() ? k : j)(O, P));
    }
    function _() {
      return c.length > 0 && !c.some((O) => O === "object" || O === "array");
    }
    function k(O, P) {
      const S = r.name("item"), h = (0, qt.checkDataTypes)(c, S, o.opts.strictNumbers, qt.DataType.Wrong), w = r.const("indices", (0, ye._)`{}`);
      r.for((0, ye._)`;${O}--;`, () => {
        r.let(S, (0, ye._)`${t}[${O}]`), r.if(h, (0, ye._)`continue`), c.length > 1 && r.if((0, ye._)`typeof ${S} == "string"`, (0, ye._)`${S} += "_"`), r.if((0, ye._)`typeof ${w}[${S}] == "number"`, () => {
          r.assign(P, (0, ye._)`${w}[${S}]`), e.error(), r.assign(d, !1).break();
        }).code((0, ye._)`${w}[${S}] = ${O}`);
      });
    }
    function j(O, P) {
      const S = (0, wf.useFunc)(r, bf.default), h = r.name("outer");
      r.label(h).for((0, ye._)`;${O}--;`, () => r.for((0, ye._)`${P} = ${O}; ${P}--;`, () => r.if((0, ye._)`${S}(${t}[${O}], ${t}[${P}])`, () => {
        e.error(), r.assign(d, !1).break(h);
      })));
    }
  }
};
_n.default = Ef;
var wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
const Bt = Z, Pf = te, Of = Ir, jf = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, Bt._)`{allowedValue: ${e}}`
}, Nf = {
  keyword: "const",
  $data: !0,
  error: jf,
  code(e) {
    const { gen: r, data: t, $data: n, schemaCode: a, schema: i } = e;
    n || i && typeof i == "object" ? e.fail$data((0, Bt._)`!${(0, Pf.useFunc)(r, Of.default)}(${t}, ${a})`) : e.fail((0, Bt._)`${i} !== ${t}`);
  }
};
wn.default = Nf;
var bn = {};
Object.defineProperty(bn, "__esModule", { value: !0 });
const Kr = Z, If = te, Af = Ir, kf = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, Kr._)`{allowedValues: ${e}}`
}, Tf = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: kf,
  code(e) {
    const { gen: r, data: t, $data: n, schema: a, schemaCode: i, it: s } = e;
    if (!n && a.length === 0)
      throw new Error("enum must have non-empty array");
    const o = a.length >= s.opts.loopEnum;
    let d;
    const c = () => d ?? (d = (0, If.useFunc)(r, Af.default));
    let m;
    if (o || n)
      m = r.let("valid"), e.block$data(m, _);
    else {
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      const j = r.const("vSchema", i);
      m = (0, Kr.or)(...a.map((O, P) => k(j, P)));
    }
    e.pass(m);
    function _() {
      r.assign(m, !1), r.forOf("v", i, (j) => r.if((0, Kr._)`${c()}(${t}, ${j})`, () => r.assign(m, !0).break()));
    }
    function k(j, O) {
      const P = a[O];
      return typeof P == "object" && P !== null ? (0, Kr._)`${c()}(${t}, ${j}[${O}])` : (0, Kr._)`${t} === ${P}`;
    }
  }
};
bn.default = Tf;
Object.defineProperty(ln, "__esModule", { value: !0 });
const Rf = dn, Df = hn, Cf = mn, Mf = yn, zf = gn, Ff = vn, Lf = $n, Vf = _n, qf = wn, Uf = bn, Kf = [
  // number
  Rf.default,
  Df.default,
  // string
  Cf.default,
  Mf.default,
  // object
  zf.default,
  Ff.default,
  // array
  Lf.default,
  Vf.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  qf.default,
  Uf.default
];
ln.default = Kf;
var Sn = {}, Ar = {};
Object.defineProperty(Ar, "__esModule", { value: !0 });
Ar.validateAdditionalItems = void 0;
const dr = Z, Wt = te, Hf = {
  message: ({ params: { len: e } }) => (0, dr.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, dr._)`{limit: ${e}}`
}, Jf = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: Hf,
  code(e) {
    const { parentSchema: r, it: t } = e, { items: n } = r;
    if (!Array.isArray(n)) {
      (0, Wt.checkStrictMode)(t, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    cs(e, n);
  }
};
function cs(e, r) {
  const { gen: t, schema: n, data: a, keyword: i, it: s } = e;
  s.items = !0;
  const o = t.const("len", (0, dr._)`${a}.length`);
  if (n === !1)
    e.setParams({ len: r.length }), e.pass((0, dr._)`${o} <= ${r.length}`);
  else if (typeof n == "object" && !(0, Wt.alwaysValidSchema)(s, n)) {
    const c = t.var("valid", (0, dr._)`${o} <= ${r.length}`);
    t.if((0, dr.not)(c), () => d(c)), e.ok(c);
  }
  function d(c) {
    t.forRange("i", r.length, o, (m) => {
      e.subschema({ keyword: i, dataProp: m, dataPropType: Wt.Type.Num }, c), s.allErrors || t.if((0, dr.not)(c), () => t.break());
    });
  }
}
Ar.validateAdditionalItems = cs;
Ar.default = Jf;
var En = {}, kr = {};
Object.defineProperty(kr, "__esModule", { value: !0 });
kr.validateTuple = void 0;
const ma = Z, $t = te, Gf = X, Bf = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: r, it: t } = e;
    if (Array.isArray(r))
      return us(e, "additionalItems", r);
    t.items = !0, !(0, $t.alwaysValidSchema)(t, r) && e.ok((0, Gf.validateArray)(e));
  }
};
function us(e, r, t = e.schema) {
  const { gen: n, parentSchema: a, data: i, keyword: s, it: o } = e;
  m(a), o.opts.unevaluated && t.length && o.items !== !0 && (o.items = $t.mergeEvaluated.items(n, t.length, o.items));
  const d = n.name("valid"), c = n.const("len", (0, ma._)`${i}.length`);
  t.forEach((_, k) => {
    (0, $t.alwaysValidSchema)(o, _) || (n.if((0, ma._)`${c} > ${k}`, () => e.subschema({
      keyword: s,
      schemaProp: k,
      dataProp: k
    }, d)), e.ok(d));
  });
  function m(_) {
    const { opts: k, errSchemaPath: j } = o, O = t.length, P = O === _.minItems && (O === _.maxItems || _[r] === !1);
    if (k.strictTuples && !P) {
      const S = `"${s}" is ${O}-tuple, but minItems or maxItems/${r} are not specified or different at path "${j}"`;
      (0, $t.checkStrictMode)(o, S, k.strictTuples);
    }
  }
}
kr.validateTuple = us;
kr.default = Bf;
Object.defineProperty(En, "__esModule", { value: !0 });
const Wf = kr, Zf = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, Wf.validateTuple)(e, "items")
};
En.default = Zf;
var Pn = {};
Object.defineProperty(Pn, "__esModule", { value: !0 });
const pa = Z, Xf = te, Qf = X, Yf = Ar, xf = {
  message: ({ params: { len: e } }) => (0, pa.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, pa._)`{limit: ${e}}`
}, ec = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: xf,
  code(e) {
    const { schema: r, parentSchema: t, it: n } = e, { prefixItems: a } = t;
    n.items = !0, !(0, Xf.alwaysValidSchema)(n, r) && (a ? (0, Yf.validateAdditionalItems)(e, a) : e.ok((0, Qf.validateArray)(e)));
  }
};
Pn.default = ec;
var On = {};
Object.defineProperty(On, "__esModule", { value: !0 });
const ke = Z, dt = te, rc = {
  message: ({ params: { min: e, max: r } }) => r === void 0 ? (0, ke.str)`must contain at least ${e} valid item(s)` : (0, ke.str)`must contain at least ${e} and no more than ${r} valid item(s)`,
  params: ({ params: { min: e, max: r } }) => r === void 0 ? (0, ke._)`{minContains: ${e}}` : (0, ke._)`{minContains: ${e}, maxContains: ${r}}`
}, tc = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: rc,
  code(e) {
    const { gen: r, schema: t, parentSchema: n, data: a, it: i } = e;
    let s, o;
    const { minContains: d, maxContains: c } = n;
    i.opts.next ? (s = d === void 0 ? 1 : d, o = c) : s = 1;
    const m = r.const("len", (0, ke._)`${a}.length`);
    if (e.setParams({ min: s, max: o }), o === void 0 && s === 0) {
      (0, dt.checkStrictMode)(i, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (o !== void 0 && s > o) {
      (0, dt.checkStrictMode)(i, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, dt.alwaysValidSchema)(i, t)) {
      let P = (0, ke._)`${m} >= ${s}`;
      o !== void 0 && (P = (0, ke._)`${P} && ${m} <= ${o}`), e.pass(P);
      return;
    }
    i.items = !0;
    const _ = r.name("valid");
    o === void 0 && s === 1 ? j(_, () => r.if(_, () => r.break())) : s === 0 ? (r.let(_, !0), o !== void 0 && r.if((0, ke._)`${a}.length > 0`, k)) : (r.let(_, !1), k()), e.result(_, () => e.reset());
    function k() {
      const P = r.name("_valid"), S = r.let("count", 0);
      j(P, () => r.if(P, () => O(S)));
    }
    function j(P, S) {
      r.forRange("i", 0, m, (h) => {
        e.subschema({
          keyword: "contains",
          dataProp: h,
          dataPropType: dt.Type.Num,
          compositeRule: !0
        }, P), S();
      });
    }
    function O(P) {
      r.code((0, ke._)`${P}++`), o === void 0 ? r.if((0, ke._)`${P} >= ${s}`, () => r.assign(_, !0).break()) : (r.if((0, ke._)`${P} > ${o}`, () => r.assign(_, !1).break()), s === 1 ? r.assign(_, !0) : r.if((0, ke._)`${P} >= ${s}`, () => r.assign(_, !0)));
    }
  }
};
On.default = tc;
var ls = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
  const r = Z, t = te, n = X;
  e.error = {
    message: ({ params: { property: d, depsCount: c, deps: m } }) => {
      const _ = c === 1 ? "property" : "properties";
      return (0, r.str)`must have ${_} ${m} when property ${d} is present`;
    },
    params: ({ params: { property: d, depsCount: c, deps: m, missingProperty: _ } }) => (0, r._)`{property: ${d},
    missingProperty: ${_},
    depsCount: ${c},
    deps: ${m}}`
    // TODO change to reference
  };
  const a = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: e.error,
    code(d) {
      const [c, m] = i(d);
      s(d, c), o(d, m);
    }
  };
  function i({ schema: d }) {
    const c = {}, m = {};
    for (const _ in d) {
      if (_ === "__proto__")
        continue;
      const k = Array.isArray(d[_]) ? c : m;
      k[_] = d[_];
    }
    return [c, m];
  }
  function s(d, c = d.schema) {
    const { gen: m, data: _, it: k } = d;
    if (Object.keys(c).length === 0)
      return;
    const j = m.let("missing");
    for (const O in c) {
      const P = c[O];
      if (P.length === 0)
        continue;
      const S = (0, n.propertyInData)(m, _, O, k.opts.ownProperties);
      d.setParams({
        property: O,
        depsCount: P.length,
        deps: P.join(", ")
      }), k.allErrors ? m.if(S, () => {
        for (const h of P)
          (0, n.checkReportMissingProp)(d, h);
      }) : (m.if((0, r._)`${S} && (${(0, n.checkMissingProp)(d, P, j)})`), (0, n.reportMissingProp)(d, j), m.else());
    }
  }
  e.validatePropertyDeps = s;
  function o(d, c = d.schema) {
    const { gen: m, data: _, keyword: k, it: j } = d, O = m.name("valid");
    for (const P in c)
      (0, t.alwaysValidSchema)(j, c[P]) || (m.if(
        (0, n.propertyInData)(m, _, P, j.opts.ownProperties),
        () => {
          const S = d.subschema({ keyword: k, schemaProp: P }, O);
          d.mergeValidEvaluated(S, O);
        },
        () => m.var(O, !0)
        // TODO var
      ), d.ok(O));
  }
  e.validateSchemaDeps = o, e.default = a;
})(ls);
var jn = {};
Object.defineProperty(jn, "__esModule", { value: !0 });
const ds = Z, nc = te, ac = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, ds._)`{propertyName: ${e.propertyName}}`
}, sc = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: ac,
  code(e) {
    const { gen: r, schema: t, data: n, it: a } = e;
    if ((0, nc.alwaysValidSchema)(a, t))
      return;
    const i = r.name("valid");
    r.forIn("key", n, (s) => {
      e.setParams({ propertyName: s }), e.subschema({
        keyword: "propertyNames",
        data: s,
        dataTypes: ["string"],
        propertyName: s,
        compositeRule: !0
      }, i), r.if((0, ds.not)(i), () => {
        e.error(!0), a.allErrors || r.break();
      });
    }), e.ok(i);
  }
};
jn.default = sc;
var Ct = {};
Object.defineProperty(Ct, "__esModule", { value: !0 });
const ht = X, Re = Z, ic = Be, mt = te, oc = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, Re._)`{additionalProperty: ${e.additionalProperty}}`
}, fc = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: oc,
  code(e) {
    const { gen: r, schema: t, parentSchema: n, data: a, errsCount: i, it: s } = e;
    if (!i)
      throw new Error("ajv implementation error");
    const { allErrors: o, opts: d } = s;
    if (s.props = !0, d.removeAdditional !== "all" && (0, mt.alwaysValidSchema)(s, t))
      return;
    const c = (0, ht.allSchemaProperties)(n.properties), m = (0, ht.allSchemaProperties)(n.patternProperties);
    _(), e.ok((0, Re._)`${i} === ${ic.default.errors}`);
    function _() {
      r.forIn("key", a, (S) => {
        !c.length && !m.length ? O(S) : r.if(k(S), () => O(S));
      });
    }
    function k(S) {
      let h;
      if (c.length > 8) {
        const w = (0, mt.schemaRefOrVal)(s, n.properties, "properties");
        h = (0, ht.isOwnProperty)(r, w, S);
      } else
        c.length ? h = (0, Re.or)(...c.map((w) => (0, Re._)`${S} === ${w}`)) : h = Re.nil;
      return m.length && (h = (0, Re.or)(h, ...m.map((w) => (0, Re._)`${(0, ht.usePattern)(e, w)}.test(${S})`))), (0, Re.not)(h);
    }
    function j(S) {
      r.code((0, Re._)`delete ${a}[${S}]`);
    }
    function O(S) {
      if (d.removeAdditional === "all" || d.removeAdditional && t === !1) {
        j(S);
        return;
      }
      if (t === !1) {
        e.setParams({ additionalProperty: S }), e.error(), o || r.break();
        return;
      }
      if (typeof t == "object" && !(0, mt.alwaysValidSchema)(s, t)) {
        const h = r.name("valid");
        d.removeAdditional === "failing" ? (P(S, h, !1), r.if((0, Re.not)(h), () => {
          e.reset(), j(S);
        })) : (P(S, h), o || r.if((0, Re.not)(h), () => r.break()));
      }
    }
    function P(S, h, w) {
      const f = {
        keyword: "additionalProperties",
        dataProp: S,
        dataPropType: mt.Type.Str
      };
      w === !1 && Object.assign(f, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema(f, h);
    }
  }
};
Ct.default = fc;
var Nn = {};
Object.defineProperty(Nn, "__esModule", { value: !0 });
const cc = Me, ya = X, Ut = te, ga = Ct, uc = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: r, schema: t, parentSchema: n, data: a, it: i } = e;
    i.opts.removeAdditional === "all" && n.additionalProperties === void 0 && ga.default.code(new cc.KeywordCxt(i, ga.default, "additionalProperties"));
    const s = (0, ya.allSchemaProperties)(t);
    for (const _ of s)
      i.definedProperties.add(_);
    i.opts.unevaluated && s.length && i.props !== !0 && (i.props = Ut.mergeEvaluated.props(r, (0, Ut.toHash)(s), i.props));
    const o = s.filter((_) => !(0, Ut.alwaysValidSchema)(i, t[_]));
    if (o.length === 0)
      return;
    const d = r.name("valid");
    for (const _ of o)
      c(_) ? m(_) : (r.if((0, ya.propertyInData)(r, a, _, i.opts.ownProperties)), m(_), i.allErrors || r.else().var(d, !0), r.endIf()), e.it.definedProperties.add(_), e.ok(d);
    function c(_) {
      return i.opts.useDefaults && !i.compositeRule && t[_].default !== void 0;
    }
    function m(_) {
      e.subschema({
        keyword: "properties",
        schemaProp: _,
        dataProp: _
      }, d);
    }
  }
};
Nn.default = uc;
var In = {};
Object.defineProperty(In, "__esModule", { value: !0 });
const va = X, pt = Z, $a = te, _a = te, lc = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: r, schema: t, data: n, parentSchema: a, it: i } = e, { opts: s } = i, o = (0, va.allSchemaProperties)(t), d = o.filter((P) => (0, $a.alwaysValidSchema)(i, t[P]));
    if (o.length === 0 || d.length === o.length && (!i.opts.unevaluated || i.props === !0))
      return;
    const c = s.strictSchema && !s.allowMatchingProperties && a.properties, m = r.name("valid");
    i.props !== !0 && !(i.props instanceof pt.Name) && (i.props = (0, _a.evaluatedPropsToName)(r, i.props));
    const { props: _ } = i;
    k();
    function k() {
      for (const P of o)
        c && j(P), i.allErrors ? O(P) : (r.var(m, !0), O(P), r.if(m));
    }
    function j(P) {
      for (const S in c)
        new RegExp(P).test(S) && (0, $a.checkStrictMode)(i, `property ${S} matches pattern ${P} (use allowMatchingProperties)`);
    }
    function O(P) {
      r.forIn("key", n, (S) => {
        r.if((0, pt._)`${(0, va.usePattern)(e, P)}.test(${S})`, () => {
          const h = d.includes(P);
          h || e.subschema({
            keyword: "patternProperties",
            schemaProp: P,
            dataProp: S,
            dataPropType: _a.Type.Str
          }, m), i.opts.unevaluated && _ !== !0 ? r.assign((0, pt._)`${_}[${S}]`, !0) : !h && !i.allErrors && r.if((0, pt.not)(m), () => r.break());
        });
      });
    }
  }
};
In.default = lc;
var An = {};
Object.defineProperty(An, "__esModule", { value: !0 });
const dc = te, hc = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: r, schema: t, it: n } = e;
    if ((0, dc.alwaysValidSchema)(n, t)) {
      e.fail();
      return;
    }
    const a = r.name("valid");
    e.subschema({
      keyword: "not",
      compositeRule: !0,
      createErrors: !1,
      allErrors: !1
    }, a), e.failResult(a, () => e.reset(), () => e.error());
  },
  error: { message: "must NOT be valid" }
};
An.default = hc;
var kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
const mc = X, pc = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: mc.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
kn.default = pc;
var Tn = {};
Object.defineProperty(Tn, "__esModule", { value: !0 });
const _t = Z, yc = te, gc = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, _t._)`{passingSchemas: ${e.passing}}`
}, vc = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: gc,
  code(e) {
    const { gen: r, schema: t, parentSchema: n, it: a } = e;
    if (!Array.isArray(t))
      throw new Error("ajv implementation error");
    if (a.opts.discriminator && n.discriminator)
      return;
    const i = t, s = r.let("valid", !1), o = r.let("passing", null), d = r.name("_valid");
    e.setParams({ passing: o }), r.block(c), e.result(s, () => e.reset(), () => e.error(!0));
    function c() {
      i.forEach((m, _) => {
        let k;
        (0, yc.alwaysValidSchema)(a, m) ? r.var(d, !0) : k = e.subschema({
          keyword: "oneOf",
          schemaProp: _,
          compositeRule: !0
        }, d), _ > 0 && r.if((0, _t._)`${d} && ${s}`).assign(s, !1).assign(o, (0, _t._)`[${o}, ${_}]`).else(), r.if(d, () => {
          r.assign(s, !0), r.assign(o, _), k && e.mergeEvaluated(k, _t.Name);
        });
      });
    }
  }
};
Tn.default = vc;
var Rn = {};
Object.defineProperty(Rn, "__esModule", { value: !0 });
const $c = te, _c = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: r, schema: t, it: n } = e;
    if (!Array.isArray(t))
      throw new Error("ajv implementation error");
    const a = r.name("valid");
    t.forEach((i, s) => {
      if ((0, $c.alwaysValidSchema)(n, i))
        return;
      const o = e.subschema({ keyword: "allOf", schemaProp: s }, a);
      e.ok(a), e.mergeEvaluated(o);
    });
  }
};
Rn.default = _c;
var Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
const It = Z, hs = te, wc = {
  message: ({ params: e }) => (0, It.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, It._)`{failingKeyword: ${e.ifClause}}`
}, bc = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: wc,
  code(e) {
    const { gen: r, parentSchema: t, it: n } = e;
    t.then === void 0 && t.else === void 0 && (0, hs.checkStrictMode)(n, '"if" without "then" and "else" is ignored');
    const a = wa(n, "then"), i = wa(n, "else");
    if (!a && !i)
      return;
    const s = r.let("valid", !0), o = r.name("_valid");
    if (d(), e.reset(), a && i) {
      const m = r.let("ifClause");
      e.setParams({ ifClause: m }), r.if(o, c("then", m), c("else", m));
    } else
      a ? r.if(o, c("then")) : r.if((0, It.not)(o), c("else"));
    e.pass(s, () => e.error(!0));
    function d() {
      const m = e.subschema({
        keyword: "if",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, o);
      e.mergeEvaluated(m);
    }
    function c(m, _) {
      return () => {
        const k = e.subschema({ keyword: m }, o);
        r.assign(s, o), e.mergeValidEvaluated(k, s), _ ? r.assign(_, (0, It._)`${m}`) : e.setParams({ ifClause: m });
      };
    }
  }
};
function wa(e, r) {
  const t = e.schema[r];
  return t !== void 0 && !(0, hs.alwaysValidSchema)(e, t);
}
Dn.default = bc;
var Cn = {};
Object.defineProperty(Cn, "__esModule", { value: !0 });
const Sc = te, Ec = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: r, it: t }) {
    r.if === void 0 && (0, Sc.checkStrictMode)(t, `"${e}" without "if" is ignored`);
  }
};
Cn.default = Ec;
Object.defineProperty(Sn, "__esModule", { value: !0 });
const Pc = Ar, Oc = En, jc = kr, Nc = Pn, Ic = On, Ac = ls, kc = jn, Tc = Ct, Rc = Nn, Dc = In, Cc = An, Mc = kn, zc = Tn, Fc = Rn, Lc = Dn, Vc = Cn;
function qc(e = !1) {
  const r = [
    // any
    Cc.default,
    Mc.default,
    zc.default,
    Fc.default,
    Lc.default,
    Vc.default,
    // object
    kc.default,
    Tc.default,
    Ac.default,
    Rc.default,
    Dc.default
  ];
  return e ? r.push(Oc.default, Nc.default) : r.push(Pc.default, jc.default), r.push(Ic.default), r;
}
Sn.default = qc;
var Mn = {}, zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
const he = Z, Uc = {
  message: ({ schemaCode: e }) => (0, he.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, he._)`{format: ${e}}`
}, Kc = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: Uc,
  code(e, r) {
    const { gen: t, data: n, $data: a, schema: i, schemaCode: s, it: o } = e, { opts: d, errSchemaPath: c, schemaEnv: m, self: _ } = o;
    if (!d.validateFormats)
      return;
    a ? k() : j();
    function k() {
      const O = t.scopeValue("formats", {
        ref: _.formats,
        code: d.code.formats
      }), P = t.const("fDef", (0, he._)`${O}[${s}]`), S = t.let("fType"), h = t.let("format");
      t.if((0, he._)`typeof ${P} == "object" && !(${P} instanceof RegExp)`, () => t.assign(S, (0, he._)`${P}.type || "string"`).assign(h, (0, he._)`${P}.validate`), () => t.assign(S, (0, he._)`"string"`).assign(h, P)), e.fail$data((0, he.or)(w(), f()));
      function w() {
        return d.strictSchema === !1 ? he.nil : (0, he._)`${s} && !${h}`;
      }
      function f() {
        const g = m.$async ? (0, he._)`(${P}.async ? await ${h}(${n}) : ${h}(${n}))` : (0, he._)`${h}(${n})`, D = (0, he._)`(typeof ${h} == "function" ? ${g} : ${h}.test(${n}))`;
        return (0, he._)`${h} && ${h} !== true && ${S} === ${r} && !${D}`;
      }
    }
    function j() {
      const O = _.formats[i];
      if (!O) {
        w();
        return;
      }
      if (O === !0)
        return;
      const [P, S, h] = f(O);
      P === r && e.pass(g());
      function w() {
        if (d.strictSchema === !1) {
          _.logger.warn(D());
          return;
        }
        throw new Error(D());
        function D() {
          return `unknown format "${i}" ignored in schema at path "${c}"`;
        }
      }
      function f(D) {
        const p = D instanceof RegExp ? (0, he.regexpCode)(D) : d.code.formats ? (0, he._)`${d.code.formats}${(0, he.getProperty)(i)}` : void 0, b = t.scopeValue("formats", { key: i, ref: D, code: p });
        return typeof D == "object" && !(D instanceof RegExp) ? [D.type || "string", D.validate, (0, he._)`${b}.validate`] : ["string", D, b];
      }
      function g() {
        if (typeof O == "object" && !(O instanceof RegExp) && O.async) {
          if (!m.$async)
            throw new Error("async format in sync schema");
          return (0, he._)`await ${h}(${n})`;
        }
        return typeof S == "function" ? (0, he._)`${h}(${n})` : (0, he._)`${h}.test(${n})`;
      }
    }
  }
};
zn.default = Kc;
Object.defineProperty(Mn, "__esModule", { value: !0 });
const Hc = zn, Jc = [Hc.default];
Mn.default = Jc;
var Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.contentVocabulary = Nr.metadataVocabulary = void 0;
Nr.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
Nr.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(fn, "__esModule", { value: !0 });
const Gc = cn, Bc = ln, Wc = Sn, Zc = Mn, ba = Nr, Xc = [
  Gc.default,
  Bc.default,
  (0, Wc.default)(),
  Zc.default,
  ba.metadataVocabulary,
  ba.contentVocabulary
];
fn.default = Xc;
var Fn = {}, ms = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DiscrError = void 0, function(r) {
    r.Tag = "tag", r.Mapping = "mapping";
  }(e.DiscrError || (e.DiscrError = {}));
})(ms);
Object.defineProperty(Fn, "__esModule", { value: !0 });
const Er = Z, Zt = ms, Sa = Pe, Qc = te, Yc = {
  message: ({ params: { discrError: e, tagName: r } }) => e === Zt.DiscrError.Tag ? `tag "${r}" must be string` : `value of tag "${r}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: r, tagName: t } }) => (0, Er._)`{error: ${e}, tag: ${t}, tagValue: ${r}}`
}, xc = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: Yc,
  code(e) {
    const { gen: r, data: t, schema: n, parentSchema: a, it: i } = e, { oneOf: s } = a;
    if (!i.opts.discriminator)
      throw new Error("discriminator: requires discriminator option");
    const o = n.propertyName;
    if (typeof o != "string")
      throw new Error("discriminator: requires propertyName");
    if (n.mapping)
      throw new Error("discriminator: mapping is not supported");
    if (!s)
      throw new Error("discriminator: requires oneOf keyword");
    const d = r.let("valid", !1), c = r.const("tag", (0, Er._)`${t}${(0, Er.getProperty)(o)}`);
    r.if((0, Er._)`typeof ${c} == "string"`, () => m(), () => e.error(!1, { discrError: Zt.DiscrError.Tag, tag: c, tagName: o })), e.ok(d);
    function m() {
      const j = k();
      r.if(!1);
      for (const O in j)
        r.elseIf((0, Er._)`${c} === ${O}`), r.assign(d, _(j[O]));
      r.else(), e.error(!1, { discrError: Zt.DiscrError.Mapping, tag: c, tagName: o }), r.endIf();
    }
    function _(j) {
      const O = r.name("valid"), P = e.subschema({ keyword: "oneOf", schemaProp: j }, O);
      return e.mergeEvaluated(P, Er.Name), O;
    }
    function k() {
      var j;
      const O = {}, P = h(a);
      let S = !0;
      for (let g = 0; g < s.length; g++) {
        let D = s[g];
        D != null && D.$ref && !(0, Qc.schemaHasRulesButRef)(D, i.self.RULES) && (D = Sa.resolveRef.call(i.self, i.schemaEnv.root, i.baseId, D == null ? void 0 : D.$ref), D instanceof Sa.SchemaEnv && (D = D.schema));
        const p = (j = D == null ? void 0 : D.properties) === null || j === void 0 ? void 0 : j[o];
        if (typeof p != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${o}"`);
        S = S && (P || h(D)), w(p, g);
      }
      if (!S)
        throw new Error(`discriminator: "${o}" must be required`);
      return O;
      function h({ required: g }) {
        return Array.isArray(g) && g.includes(o);
      }
      function w(g, D) {
        if (g.const)
          f(g.const, D);
        else if (g.enum)
          for (const p of g.enum)
            f(p, D);
        else
          throw new Error(`discriminator: "properties/${o}" must have "const" or "enum"`);
      }
      function f(g, D) {
        if (typeof g != "string" || g in O)
          throw new Error(`discriminator: "${o}" values must be unique strings`);
        O[g] = D;
      }
    }
  }
};
Fn.default = xc;
const eu = "http://json-schema.org/draft-07/schema#", ru = "http://json-schema.org/draft-07/schema#", tu = "Core schema meta-schema", nu = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $ref: "#"
    }
  },
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    allOf: [
      {
        $ref: "#/definitions/nonNegativeInteger"
      },
      {
        default: 0
      }
    ]
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, au = [
  "object",
  "boolean"
], su = {
  $id: {
    type: "string",
    format: "uri-reference"
  },
  $schema: {
    type: "string",
    format: "uri"
  },
  $ref: {
    type: "string",
    format: "uri-reference"
  },
  $comment: {
    type: "string"
  },
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  readOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  additionalItems: {
    $ref: "#"
  },
  items: {
    anyOf: [
      {
        $ref: "#"
      },
      {
        $ref: "#/definitions/schemaArray"
      }
    ],
    default: !0
  },
  maxItems: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  contains: {
    $ref: "#"
  },
  maxProperties: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/definitions/stringArray"
  },
  additionalProperties: {
    $ref: "#"
  },
  definitions: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  properties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependencies: {
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/stringArray"
        }
      ]
    }
  },
  propertyNames: {
    $ref: "#"
  },
  const: !0,
  enum: {
    type: "array",
    items: !0,
    minItems: 1,
    uniqueItems: !0
  },
  type: {
    anyOf: [
      {
        $ref: "#/definitions/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  format: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentEncoding: {
    type: "string"
  },
  if: {
    $ref: "#"
  },
  then: {
    $ref: "#"
  },
  else: {
    $ref: "#"
  },
  allOf: {
    $ref: "#/definitions/schemaArray"
  },
  anyOf: {
    $ref: "#/definitions/schemaArray"
  },
  oneOf: {
    $ref: "#/definitions/schemaArray"
  },
  not: {
    $ref: "#"
  }
}, iu = {
  $schema: eu,
  $id: ru,
  title: tu,
  definitions: nu,
  type: au,
  properties: su,
  default: !0
};
(function(e, r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.MissingRefError = r.ValidationError = r.CodeGen = r.Name = r.nil = r.stringify = r.str = r._ = r.KeywordCxt = void 0;
  const t = za, n = fn, a = Fn, i = iu, s = ["/properties"], o = "http://json-schema.org/draft-07/schema";
  class d extends t.default {
    _addVocabularies() {
      super._addVocabularies(), n.default.forEach((O) => this.addVocabulary(O)), this.opts.discriminator && this.addKeyword(a.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta)
        return;
      const O = this.opts.$data ? this.$dataMetaSchema(i, s) : i;
      this.addMetaSchema(O, o, !1), this.refs["http://json-schema.org/schema"] = o;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(o) ? o : void 0);
    }
  }
  e.exports = r = d, Object.defineProperty(r, "__esModule", { value: !0 }), r.default = d;
  var c = Me;
  Object.defineProperty(r, "KeywordCxt", { enumerable: !0, get: function() {
    return c.KeywordCxt;
  } });
  var m = Z;
  Object.defineProperty(r, "_", { enumerable: !0, get: function() {
    return m._;
  } }), Object.defineProperty(r, "str", { enumerable: !0, get: function() {
    return m.str;
  } }), Object.defineProperty(r, "stringify", { enumerable: !0, get: function() {
    return m.stringify;
  } }), Object.defineProperty(r, "nil", { enumerable: !0, get: function() {
    return m.nil;
  } }), Object.defineProperty(r, "Name", { enumerable: !0, get: function() {
    return m.Name;
  } }), Object.defineProperty(r, "CodeGen", { enumerable: !0, get: function() {
    return m.CodeGen;
  } });
  var _ = at;
  Object.defineProperty(r, "ValidationError", { enumerable: !0, get: function() {
    return _.default;
  } });
  var k = st;
  Object.defineProperty(r, "MissingRefError", { enumerable: !0, get: function() {
    return k.default;
  } });
})(mi, xr);
var rt = {}, ou = {
  get exports() {
    return rt;
  },
  set exports(e) {
    rt = e;
  }
};
const fu = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
var cu = {
  HEX: fu
};
const { HEX: uu } = cu;
function ps(e) {
  if (gs(e, ".") < 3)
    return { host: e, isIPV4: !1 };
  const r = e.match(/^(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/) || [], [t] = r;
  return t ? { host: du(t, "."), isIPV4: !0 } : { host: e, isIPV4: !1 };
}
function Xt(e) {
  let r = "", t = !0;
  for (const n of e) {
    if (n !== "0" && t === !0 && (t = !1), uu[n] === void 0)
      return;
    t || (r += n);
  }
  return r;
}
function lu(e) {
  let r = 0;
  const t = { error: !1, address: "", zone: "" }, n = [], a = [];
  let i = !1, s = !1, o = !1;
  function d() {
    if (a.length) {
      if (i === !1) {
        const c = Xt(a.join(""));
        if (c !== void 0)
          n.push(c);
        else
          return t.error = !0, !1;
      }
      a.length = 0;
    }
    return !0;
  }
  for (let c = 0; c < e.length; c++) {
    const m = e[c];
    if (!(m === "[" || m === "]"))
      if (m === ":") {
        if (s === !0 && (o = !0), !d())
          break;
        if (r++, n.push(":"), r > 7) {
          t.error = !0;
          break;
        }
        c - 1 >= 0 && e[c - 1] === ":" && (s = !0);
        continue;
      } else if (m === "%") {
        if (!d())
          break;
        i = !0;
      } else {
        a.push(m);
        continue;
      }
  }
  return a.length && (i ? t.zone = a.join("") : o ? n.push(a.join("")) : n.push(Xt(a.join("")))), t.address = n.join(""), t;
}
function ys(e, r = {}) {
  if (gs(e, ":") < 2)
    return { host: e, isIPV6: !1 };
  const t = lu(e);
  if (t.error)
    return { host: e, isIPV6: !1 };
  {
    let n = t.address, a = t.address;
    return t.zone && (n += "%" + t.zone, a += "%25" + t.zone), { host: n, escapedHost: a, isIPV6: !0 };
  }
}
function du(e, r) {
  let t = "", n = !0;
  const a = e.length;
  for (let i = 0; i < a; i++) {
    const s = e[i];
    s === "0" && n ? (i + 1 <= a && e[i + 1] === r || i + 1 === a) && (t += s, n = !1) : (s === r ? n = !0 : n = !1, t += s);
  }
  return t;
}
function gs(e, r) {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    e[n] === r && t++;
  return t;
}
const Ea = /^\.\.?\//, Pa = /^\/\.(\/|$)/, Oa = /^\/\.\.(\/|$)/, hu = /^\/?(?:.|\n)*?(?=\/|$)/;
function mu(e) {
  const r = [];
  for (; e.length; )
    if (e.match(Ea))
      e = e.replace(Ea, "");
    else if (e.match(Pa))
      e = e.replace(Pa, "/");
    else if (e.match(Oa))
      e = e.replace(Oa, "/"), r.pop();
    else if (e === "." || e === "..")
      e = "";
    else {
      const t = e.match(hu);
      if (t) {
        const n = t[0];
        e = e.slice(n.length), r.push(n);
      } else
        throw new Error("Unexpected dot segment condition");
    }
  return r.join("");
}
function pu(e, r) {
  const t = r !== !0 ? escape : unescape;
  return e.scheme !== void 0 && (e.scheme = t(e.scheme)), e.userinfo !== void 0 && (e.userinfo = t(e.userinfo)), e.host !== void 0 && (e.host = t(e.host)), e.path !== void 0 && (e.path = t(e.path)), e.query !== void 0 && (e.query = t(e.query)), e.fragment !== void 0 && (e.fragment = t(e.fragment)), e;
}
function yu(e, r) {
  const t = [];
  if (e.userinfo !== void 0 && (t.push(e.userinfo), t.push("@")), e.host !== void 0) {
    let n = unescape(e.host);
    const a = ps(n);
    if (a.isIPV4)
      n = a.host;
    else {
      const i = ys(a.host, { isIPV4: !1 });
      i.isIPV6 === !0 ? n = `[${i.escapedHost}]` : n = e.host;
    }
    t.push(n);
  }
  return (typeof e.port == "number" || typeof e.port == "string") && (t.push(":"), t.push(String(e.port))), t.length ? t.join("") : void 0;
}
var gu = {
  recomposeAuthority: yu,
  normalizeComponentEncoding: pu,
  removeDotSegments: mu,
  normalizeIPv4: ps,
  normalizeIPv6: ys,
  stringToHexStripped: Xt
};
const vu = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/, $u = /([A-Za-z0-9][A-Za-z0-9-]{0,31}):(([A-Za-z0-9()+,\-.:=@;$_!*']|%[0-9A-Fa-f]{2})+)/;
function vs(e) {
  return typeof e.secure == "boolean" ? e.secure : String(e.scheme).toLowerCase() === "wss";
}
function $s(e) {
  return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
}
function _s(e) {
  const r = String(e.scheme).toLowerCase() === "https";
  return (e.port === (r ? 443 : 80) || e.port === "") && (e.port = void 0), e.path || (e.path = "/"), e;
}
function _u(e) {
  return e.secure = vs(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
}
function wu(e) {
  if ((e.port === (vs(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
    const [r, t] = e.resourceName.split("?");
    e.path = r && r !== "/" ? r : void 0, e.query = t, e.resourceName = void 0;
  }
  return e.fragment = void 0, e;
}
function bu(e, r) {
  if (!e.path)
    return e.error = "URN can not be parsed", e;
  const t = e.path.match($u);
  if (t) {
    const n = r.scheme || e.scheme || "urn";
    e.nid = t[1].toLowerCase(), e.nss = t[2];
    const a = `${n}:${r.nid || e.nid}`, i = Ln[a];
    e.path = void 0, i && (e = i.parse(e, r));
  } else
    e.error = e.error || "URN can not be parsed.";
  return e;
}
function Su(e, r) {
  const t = r.scheme || e.scheme || "urn", n = e.nid.toLowerCase(), a = `${t}:${r.nid || n}`, i = Ln[a];
  i && (e = i.serialize(e, r));
  const s = e, o = e.nss;
  return s.path = `${n || r.nid}:${o}`, r.skipEscape = !0, s;
}
function Eu(e, r) {
  const t = e;
  return t.uuid = t.nss, t.nss = void 0, !r.tolerant && (!t.uuid || !vu.test(t.uuid)) && (t.error = t.error || "UUID is not valid."), t;
}
function Pu(e) {
  const r = e;
  return r.nss = (e.uuid || "").toLowerCase(), r;
}
const ws = {
  scheme: "http",
  domainHost: !0,
  parse: $s,
  serialize: _s
}, Ou = {
  scheme: "https",
  domainHost: ws.domainHost,
  parse: $s,
  serialize: _s
}, wt = {
  scheme: "ws",
  domainHost: !0,
  parse: _u,
  serialize: wu
}, ju = {
  scheme: "wss",
  domainHost: wt.domainHost,
  parse: wt.parse,
  serialize: wt.serialize
}, Nu = {
  scheme: "urn",
  parse: bu,
  serialize: Su,
  skipNormalize: !0
}, Iu = {
  scheme: "urn:uuid",
  parse: Eu,
  serialize: Pu,
  skipNormalize: !0
}, Ln = {
  http: ws,
  https: Ou,
  ws: wt,
  wss: ju,
  urn: Nu,
  "urn:uuid": Iu
};
var Au = Ln;
const ku = Ra, { normalizeIPv6: Tu, normalizeIPv4: Ru, removeDotSegments: Hr, recomposeAuthority: Du, normalizeComponentEncoding: yt } = gu, bs = Au;
function Cu(e, r) {
  return typeof e == "string" ? e = Ge(Ye(e, r), r) : typeof e == "object" && (e = Ye(Ge(e, r), r)), e;
}
function Mu(e, r, t) {
  const n = Object.assign({ scheme: "null" }, t), a = Ss(Ye(e, n), Ye(r, n), n, !0);
  return Ge(a, { ...n, skipEscape: !0 });
}
function Ss(e, r, t, n) {
  const a = {};
  return n || (e = Ye(Ge(e, t), t), r = Ye(Ge(r, t), t)), t = t || {}, !t.tolerant && r.scheme ? (a.scheme = r.scheme, a.userinfo = r.userinfo, a.host = r.host, a.port = r.port, a.path = Hr(r.path || ""), a.query = r.query) : (r.userinfo !== void 0 || r.host !== void 0 || r.port !== void 0 ? (a.userinfo = r.userinfo, a.host = r.host, a.port = r.port, a.path = Hr(r.path || ""), a.query = r.query) : (r.path ? (r.path.charAt(0) === "/" ? a.path = Hr(r.path) : ((e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path ? a.path = "/" + r.path : e.path ? a.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + r.path : a.path = r.path, a.path = Hr(a.path)), a.query = r.query) : (a.path = e.path, r.query !== void 0 ? a.query = r.query : a.query = e.query), a.userinfo = e.userinfo, a.host = e.host, a.port = e.port), a.scheme = e.scheme), a.fragment = r.fragment, a;
}
function zu(e, r, t) {
  return typeof e == "string" ? (e = unescape(e), e = Ge(yt(Ye(e, t), !0), { ...t, skipEscape: !0 })) : typeof e == "object" && (e = Ge(yt(e, !0), { ...t, skipEscape: !0 })), typeof r == "string" ? (r = unescape(r), r = Ge(yt(Ye(r, t), !0), { ...t, skipEscape: !0 })) : typeof r == "object" && (r = Ge(yt(r, !0), { ...t, skipEscape: !0 })), e.toLowerCase() === r.toLowerCase();
}
function Ge(e, r) {
  const t = {
    host: e.host,
    scheme: e.scheme,
    userinfo: e.userinfo,
    port: e.port,
    path: e.path,
    query: e.query,
    nid: e.nid,
    nss: e.nss,
    uuid: e.uuid,
    fragment: e.fragment,
    reference: e.reference,
    resourceName: e.resourceName,
    secure: e.secure,
    error: ""
  }, n = Object.assign({}, r), a = [], i = bs[(n.scheme || t.scheme || "").toLowerCase()];
  i && i.serialize && i.serialize(t, n), t.path !== void 0 && (n.skipEscape ? t.path = unescape(t.path) : (t.path = escape(t.path), t.scheme !== void 0 && (t.path = t.path.split("%3A").join(":")))), n.reference !== "suffix" && t.scheme && (a.push(t.scheme), a.push(":"));
  const s = Du(t, n);
  if (s !== void 0 && (n.reference !== "suffix" && a.push("//"), a.push(s), t.path && t.path.charAt(0) !== "/" && a.push("/")), t.path !== void 0) {
    let o = t.path;
    !n.absolutePath && (!i || !i.absolutePath) && (o = Hr(o)), s === void 0 && (o = o.replace(/^\/\//, "/%2F")), a.push(o);
  }
  return t.query !== void 0 && (a.push("?"), a.push(t.query)), t.fragment !== void 0 && (a.push("#"), a.push(t.fragment)), a.join("");
}
const Fu = /^(?:([^:/?#]+):)?(?:\/\/((?:([^/?#@]*)@)?(\[[^/?#\]]+\]|[^/?#:]*)(?::(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
function Ye(e, r) {
  const t = Object.assign({}, r), n = {
    scheme: void 0,
    userinfo: void 0,
    host: "",
    port: void 0,
    path: "",
    query: void 0,
    fragment: void 0
  }, a = e.indexOf("%") !== -1;
  t.reference === "suffix" && (e = (t.scheme ? t.scheme + ":" : "") + "//" + e);
  const i = e.match(Fu);
  if (i) {
    if (n.scheme = i[1], n.userinfo = i[3], n.host = i[4], n.port = parseInt(i[5], 10), n.path = i[6] || "", n.query = i[7], n.fragment = i[8], isNaN(n.port) && (n.port = i[5]), n.host) {
      const o = Ru(n.host);
      o.isIPV4 === !1 ? n.host = Tu(o.host, { isIPV4: !1 }).host.toLowerCase() : n.host = o.host;
    }
    n.scheme === void 0 && n.userinfo === void 0 && n.host === void 0 && n.port === void 0 && !n.path && n.query === void 0 ? n.reference = "same-document" : n.scheme === void 0 ? n.reference = "relative" : n.fragment === void 0 ? n.reference = "absolute" : n.reference = "uri", t.reference && t.reference !== "suffix" && t.reference !== n.reference && (n.error = n.error || "URI is not a " + t.reference + " reference.");
    const s = bs[(t.scheme || n.scheme || "").toLowerCase()];
    if (!t.unicodeSupport && (!s || !s.unicodeSupport) && n.host && (t.domainHost || s && s.domainHost))
      try {
        n.host = ku.domainToASCII(n.host.toLowerCase());
      } catch (o) {
        n.error = n.error || "Host's domain name can not be converted to ASCII: " + o;
      }
    (!s || s && !s.skipNormalize) && (a && n.scheme !== void 0 && (n.scheme = unescape(n.scheme)), a && n.userinfo !== void 0 && (n.userinfo = unescape(n.userinfo)), a && n.host !== void 0 && (n.host = unescape(n.host)), n.path !== void 0 && n.path.length && (n.path = encodeURI(n.path)), n.fragment !== void 0 && n.fragment.length && (n.fragment = encodeURI(decodeURI(n.fragment)))), s && s.parse && s.parse(n, t);
  } else
    n.error = n.error || "URI can not be parsed.";
  return n;
}
const Vn = {
  normalize: Cu,
  resolve: Mu,
  resolveComponents: Ss,
  equal: zu,
  serialize: Ge,
  parse: Ye
};
ou.exports = Vn;
rt.default = Vn;
rt.fastUri = Vn;
var At = {}, Lu = {
  get exports() {
    return At;
  },
  set exports(e) {
    At = e;
  }
}, Es = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
  const r = xr, t = Z, n = t.operators, a = {
    formatMaximum: { okStr: "<=", ok: n.LTE, fail: n.GT },
    formatMinimum: { okStr: ">=", ok: n.GTE, fail: n.LT },
    formatExclusiveMaximum: { okStr: "<", ok: n.LT, fail: n.GTE },
    formatExclusiveMinimum: { okStr: ">", ok: n.GT, fail: n.LTE }
  }, i = {
    message: ({ keyword: o, schemaCode: d }) => t.str`should be ${a[o].okStr} ${d}`,
    params: ({ keyword: o, schemaCode: d }) => t._`{comparison: ${a[o].okStr}, limit: ${d}}`
  };
  e.formatLimitDefinition = {
    keyword: Object.keys(a),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: i,
    code(o) {
      const { gen: d, data: c, schemaCode: m, keyword: _, it: k } = o, { opts: j, self: O } = k;
      if (!j.validateFormats)
        return;
      const P = new r.KeywordCxt(k, O.RULES.all.format.definition, "format");
      P.$data ? S() : h();
      function S() {
        const f = d.scopeValue("formats", {
          ref: O.formats,
          code: j.code.formats
        }), g = d.const("fmt", t._`${f}[${P.schemaCode}]`);
        o.fail$data(t.or(t._`typeof ${g} != "object"`, t._`${g} instanceof RegExp`, t._`typeof ${g}.compare != "function"`, w(g)));
      }
      function h() {
        const f = P.schema, g = O.formats[f];
        if (!g || g === !0)
          return;
        if (typeof g != "object" || g instanceof RegExp || typeof g.compare != "function")
          throw new Error(`"${_}": format "${f}" does not define "compare" function`);
        const D = d.scopeValue("formats", {
          key: f,
          ref: g,
          code: j.code.formats ? t._`${j.code.formats}${t.getProperty(f)}` : void 0
        });
        o.fail$data(w(D));
      }
      function w(f) {
        return t._`${f}.compare(${c}, ${m}) ${a[_].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  const s = (o) => (o.addKeyword(e.formatLimitDefinition), o);
  e.default = s;
})(Es);
(function(e, r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const t = kt, n = Es, a = Z, i = new a.Name("fullFormats"), s = new a.Name("fastFormats"), o = (c, m = { keywords: !0 }) => {
    if (Array.isArray(m))
      return d(c, m, t.fullFormats, i), c;
    const [_, k] = m.mode === "fast" ? [t.fastFormats, s] : [t.fullFormats, i], j = m.formats || t.formatNames;
    return d(c, j, _, k), m.keywords && n.default(c), c;
  };
  o.get = (c, m = "full") => {
    const k = (m === "fast" ? t.fastFormats : t.fullFormats)[c];
    if (!k)
      throw new Error(`Unknown format "${c}"`);
    return k;
  };
  function d(c, m, _, k) {
    var j, O;
    (j = (O = c.opts.code).formats) !== null && j !== void 0 || (O.formats = a._`require("ajv-formats/dist/formats").${k}`);
    for (const P of m)
      c.addFormat(P, _[P]);
  }
  e.exports = r = o, Object.defineProperty(r, "__esModule", { value: !0 }), r.default = o;
})(Lu, At);
const Vu = xr, qu = rt, Uu = At, Ku = Ta({ proto: !0 });
let Hu = class Ps {
  constructor(r) {
    this.ajv = new Vu({
      ...r,
      strictSchema: !1,
      validateSchema: !1,
      allowUnionTypes: !0,
      uriResolver: qu
    }), Uu(this.ajv), this.ajv.addKeyword({
      keyword: "fjs_type",
      type: "object",
      errors: !1,
      validate: (t, n) => n instanceof Date
    }), this._ajvSchemas = {}, this._ajvOptions = r || {};
  }
  addSchema(r, t) {
    let n = r.$id || t;
    if (r.$id !== void 0 && r.$id[0] === "#" && (n = t + r.$id), this.ajv.refs[n] === void 0 && this.ajv.schemas[n] === void 0) {
      const a = Ku(r);
      this.convertSchemaToAjvFormat(a), this.ajv.addSchema(a, n), this._ajvSchemas[n] = r;
    }
  }
  validate(r, t) {
    return this.ajv.validate(r, t);
  }
  // Ajv does not support js date format. In order to properly validate objects containing a date,
  // it needs to replace all occurrences of the string date format with a custom keyword fjs_type.
  // (see https://github.com/fastify/fast-json-stringify/pull/441)
  convertSchemaToAjvFormat(r) {
    if (r !== null) {
      r.type === "string" ? (r.fjs_type = "string", r.type = ["string", "object"]) : Array.isArray(r.type) && r.type.includes("string") && !r.type.includes("object") && (r.fjs_type = "string", r.type.push("object"));
      for (const t in r)
        typeof r[t] == "object" && this.convertSchemaToAjvFormat(r[t]);
    }
  }
  getState() {
    return {
      ajvOptions: this._ajvOptions,
      ajvSchemas: this._ajvSchemas
    };
  }
  static restoreFromState(r) {
    const t = new Ps(r.ajvOptions);
    for (const [n, a] of Object.entries(r.ajvSchemas))
      t.ajv.addSchema(a, n);
    return t;
  }
};
var Os = Hu;
const ja = xt;
let Ju = class {
  constructor() {
    this.schemas = {};
  }
  addSchema(r, t) {
    r.$id !== void 0 && r.$id.charAt(0) !== "#" && (t = r.$id), this.getSchema(t) === void 0 && (this.insertSchemaBySchemaId(r, t), this.insertSchemaSubschemas(r, t));
  }
  getSchema(r, t = "#") {
    const n = this.schemas[r];
    if (n !== void 0)
      return n.anchors[t] !== void 0 ? n.anchors[t] : Gu(n.schema, t);
  }
  getSchemaDependencies(r, t = {}) {
    const n = this.schemas[r];
    for (const a of n.dependencies)
      t[a] === void 0 && (t[a] = this.getSchema(a), this.getSchemaDependencies(a, t));
    return t;
  }
  insertSchemaBySchemaId(r, t) {
    if (this.schemas[t] !== void 0 && !ja(r, this.schemas[t].schema))
      throw new Error(`There is already another schema with id ${t}`);
    this.schemas[t] = { schema: r, anchors: {}, dependencies: [] };
  }
  insertSchemaByAnchor(r, t, n) {
    const { anchors: a } = this.schemas[t];
    if (a[n] !== void 0 && !ja(r, a[n]))
      throw new Error(`There is already another schema with id ${t}#${n}`);
    a[n] = r;
  }
  insertSchemaSubschemas(r, t) {
    const n = r.$id;
    n !== void 0 && typeof n == "string" && (n.charAt(0) === "#" ? this.insertSchemaByAnchor(r, t, n) : (this.insertSchemaBySchemaId(r, n), t = n));
    const a = r.$ref;
    if (a !== void 0 && typeof a == "string" && a.charAt(0) !== "#") {
      const i = a.split("#")[0];
      this.schemas[t].dependencies.push(i);
    }
    for (const i in r)
      typeof r[i] == "object" && r[i] !== null && this.insertSchemaSubschemas(r[i], t);
  }
};
function Gu(e, r) {
  const t = r.split("/");
  let n = e;
  for (const a of t)
    if (!(a === "" || a === "#")) {
      if (typeof n != "object" || n === null)
        return;
      n = n[a];
    }
  return n;
}
var Bu = Ju;
let Wu = class js {
  constructor(r, t, n = "#") {
    this.schema = r, this.schemaId = t, this.jsonPointer = n, this.mergedSchemaId = null;
  }
  getPropertyLocation(r) {
    const t = new js(
      this.schema[r],
      this.schemaId,
      this.jsonPointer + "/" + r
    );
    return this.mergedSchemaId !== null && t.addMergedSchema(
      this.schema[r],
      this.mergedSchemaId,
      this.jsonPointer + "/" + r
    ), t;
  }
  // Use this method to get current schema location.
  // Use it when you need to create reference to the current location.
  getSchemaId() {
    return this.mergedSchemaId || this.schemaId;
  }
  // Use this method to get original schema id for resolving user schema $refs
  // Don't join it with a JSON pointer to get the current location.
  getOriginSchemaId() {
    return this.schemaId;
  }
  getSchemaRef() {
    return this.getSchemaId() + this.jsonPointer;
  }
  addMergedSchema(r, t, n = "#") {
    this.schema = r, this.mergedSchemaId = t, this.jsonPointer = n;
  }
};
var Zu = Wu, Xr = {}, Xu = {
  get exports() {
    return Xr;
  },
  set exports(e) {
    Xr = e;
  }
}, Na;
function Qu() {
  if (Na)
    return Xr;
  Na = 1;
  function e(r, t, n, a) {
    let i = "";
    return t.validatorSchemasIds.size > 0 ? (i += `const validatorState = ${JSON.stringify(a.getState())}
`, i += `const validator = Validator.restoreFromState(validatorState)
`) : i += `const validator = null
`, `
  'use strict'
  const { dependencies } = require('fast-json-stringify/lib/standalone')

  const { Serializer, Validator } = dependencies

  const serializerState = ${JSON.stringify(n.getState())}
  const serializer = Serializer.restoreFromState(serializerState)

  ${i}

  module.exports = ${r.toString()}(validator, serializer)`;
  }
  return Xu.exports = e, Xr.dependencies = {
    Serializer: Ca,
    Validator: Os
  }, Xr;
}
const Kt = Yr(), Yu = Ta({ proto: !0 }), { randomUUID: Ns } = Ra, Ia = St, xu = Ca, el = Os, rl = Bu, Is = Zu;
let bt = 2e4, As = "default";
const tl = [
  "floor",
  "ceil",
  "round",
  "trunc"
], ks = [
  "default",
  "json-stringify"
], Qr = "!addComma && (addComma = true) || (json += ',')";
function Qt(e, r) {
  if (!Ia(e)) {
    r ? r = `"${r}" ` : r = "";
    const t = Ia.errors[0], n = new Error(`${r}schema is invalid: data${t.instancePath} ${t.message}`);
    throw n.errors = Qt.errors, n;
  }
}
function it(e, r, t) {
  let n = t.indexOf("#");
  n === -1 && (n = t.length);
  const a = t.slice(0, n) || r.getOriginSchemaId(), i = t.slice(n) || "#", s = e.refResolver.getSchema(a, i);
  if (s === void 0)
    throw new Error(`Cannot find reference "${t}"`);
  const o = new Is(s, a, i);
  return s.$ref !== void 0 ? it(e, o, s.$ref) : o;
}
function qn(e, r) {
  Qt(e), r = r || {};
  const t = {
    functions: [],
    functionsCounter: 0,
    functionsNamesBySchema: /* @__PURE__ */ new Map(),
    options: r,
    refResolver: new rl(),
    rootSchemaId: e.$id || Ns(),
    validatorSchemasIds: /* @__PURE__ */ new Set()
  };
  if (t.refResolver.addSchema(e, t.rootSchemaId), r.schema)
    for (const c of Object.keys(r.schema))
      Qt(r.schema[c], c), t.refResolver.addSchema(r.schema[c], c);
  if (r.rounding && !tl.includes(r.rounding))
    throw new Error(`Unsupported integer rounding method ${r.rounding}`);
  if (r.largeArrayMechanism)
    if (ks.includes(r.largeArrayMechanism))
      As = r.largeArrayMechanism;
    else
      throw new Error(`Unsupported large array mechanism ${r.largeArrayMechanism}`);
  if (r.largeArraySize)
    if (typeof r.largeArraySize == "string" && Number.isFinite(Number.parseInt(r.largeArraySize, 10)))
      bt = Number.parseInt(r.largeArraySize, 10);
    else if (typeof r.largeArraySize == "number" && Number.isInteger(r.largeArraySize))
      bt = r.largeArraySize;
    else if (typeof r.largeArraySize == "bigint")
      bt = Number(r.largeArraySize);
    else
      throw new Error(`Unsupported large array size. Expected integer-like, got ${typeof r.largeArraySize} with value ${r.largeArraySize}`);
  const n = new Is(e, t.rootSchemaId), a = xe(t, n, "input");
  let i;
  a === "json += anonymous0(input)" ? i = `
    ${t.functions.join(`
`)}
    const main = anonymous0
    return main
    ` : i = `
    function main (input) {
      let json = ''
      ${a}
      return json
    }
    ${t.functions.join(`
`)}
    return main
    `;
  const s = new xu(r), o = new el(r.ajv);
  for (const c of t.validatorSchemasIds) {
    const m = t.refResolver.getSchema(c);
    o.addSchema(m, c);
    const _ = t.refResolver.getSchemaDependencies(c);
    for (const [k, j] of Object.entries(_))
      o.addSchema(j, k);
  }
  if (r.debugMode && (r.mode = "debug"), r.mode === "debug")
    return {
      validator: o,
      serializer: s,
      code: `validator
serializer
${i}`,
      ajv: o.ajv
    };
  const d = new Function("validator", "serializer", i);
  return r.mode === "standalone" ? Qu()(d, t, s, o) : d(o, s);
}
const nl = [
  "properties",
  "required",
  "additionalProperties",
  "patternProperties",
  "maxProperties",
  "minProperties",
  "dependencies"
], al = [
  "items",
  "additionalItems",
  "maxItems",
  "minItems",
  "uniqueItems",
  "contains"
], sl = [
  "maxLength",
  "minLength",
  "pattern"
], il = [
  "multipleOf",
  "maximum",
  "exclusiveMaximum",
  "minimum",
  "exclusiveMinimum"
];
function Ts(e) {
  for (var r of nl)
    if (r in e)
      return "object";
  for (var r of al)
    if (r in e)
      return "array";
  for (var r of sl)
    if (r in e)
      return "string";
  for (var r of il)
    if (r in e)
      return "number";
  return e.type;
}
function ol(e, r) {
  const t = r.schema, n = Object.keys(t.properties || {});
  let a = `
    const propertiesKeys = ${JSON.stringify(n)}
    for (const [key, value] of Object.entries(obj)) {
      if (
        propertiesKeys.includes(key) ||
        value === undefined ||
        typeof value === 'function' ||
        typeof value === 'symbol'
      ) continue
  `;
  const i = r.getPropertyLocation("patternProperties"), s = i.schema;
  if (s !== void 0)
    for (const c in s) {
      const m = i.getPropertyLocation(c);
      a += `
        if (/${c.replace(/\\*\//g, "\\/")}/.test(key)) {
          ${Qr}
          json += serializer.asString(key) + ':'
          ${xe(e, m, "value")}
          continue
        }
      `;
    }
  const d = r.getPropertyLocation("additionalProperties").schema;
  if (d !== void 0)
    if (d === !0)
      a += `
        ${Qr}
        json += serializer.asString(key) + ':' + JSON.stringify(value)
      `;
    else {
      const c = r.getPropertyLocation("additionalProperties");
      a += `
        ${Qr}
        json += serializer.asString(key) + ':'
        ${xe(e, c, "value")}
      `;
    }
  return a += `
    }
  `, a;
}
function fl(e, r) {
  const t = r.schema, n = t.required || [];
  let a = "";
  const i = r.getPropertyLocation("properties");
  Object.keys(t.properties || {}).forEach((s) => {
    let o = i.getPropertyLocation(s);
    o.schema.$ref && (o = it(e, r, o.schema.$ref));
    const d = JSON.stringify(s);
    a += `
      if (obj[${d}] !== undefined) {
        ${Qr}
        json += ${JSON.stringify(d + ":")}
      `, a += xe(e, o, `obj[${d}]`);
    const c = o.schema.default;
    c !== void 0 ? a += `
      } else {
        ${Qr}
        json += ${JSON.stringify(d + ":" + JSON.stringify(c))}
      ` : n.includes(s) && (a += `
      } else {
        throw new Error('${d} is required!')
      `), a += `
      }
    `;
  });
  for (const s of n)
    t.properties && t.properties[s] !== void 0 || (a += `if (obj['${s}'] === undefined) throw new Error('"${s}" is required!')
`);
  return (t.patternProperties || t.additionalProperties) && (a += ol(e, r)), a;
}
function Rs(e, r, t, n) {
  const a = r.getPropertyLocation("allOf");
  for (let i = 0; i < t.allOf.length; i++) {
    let s = t.allOf[i];
    if (s.$ref) {
      const d = a.getPropertyLocation(i);
      s = it(e, d, s.$ref).schema;
    }
    let o = s.type;
    if (o === void 0 && (o = Ts(s)), o !== void 0) {
      if (n.type !== void 0 && n.type !== o)
        throw new Error("allOf schemas have different type values");
      n.type = o;
    }
    if (s.format !== void 0) {
      if (n.format !== void 0 && n.format !== s.format)
        throw new Error("allOf schemas have different format values");
      n.format = s.format;
    }
    if (s.nullable !== void 0) {
      if (n.nullable !== void 0 && n.nullable !== s.nullable)
        throw new Error("allOf schemas have different nullable values");
      n.nullable = s.nullable;
    }
    s.properties !== void 0 && (n.properties === void 0 && (n.properties = {}), Object.assign(n.properties, s.properties)), s.additionalProperties !== void 0 && (n.additionalProperties === void 0 && (n.additionalProperties = {}), Object.assign(n.additionalProperties, s.additionalProperties)), s.patternProperties !== void 0 && (n.patternProperties === void 0 && (n.patternProperties = {}), Object.assign(n.patternProperties, s.patternProperties)), s.required !== void 0 && (n.required === void 0 && (n.required = []), n.required.push(...s.required)), s.oneOf !== void 0 && (n.oneOf === void 0 && (n.oneOf = []), n.oneOf.push(...s.oneOf)), s.anyOf !== void 0 && (n.anyOf === void 0 && (n.anyOf = []), n.anyOf.push(...s.anyOf)), s.allOf !== void 0 && Rs(e, r, s, n);
  }
  delete n.allOf, n.$id = `merged_${Ns()}`, e.refResolver.addSchema(n), r.addMergedSchema(n, n.$id);
}
function cl(e, r, t) {
  e.validatorSchemasIds.add(r.getSchemaId());
  const n = Kt({}, r.schema), a = n.then, i = n.else || { additionalProperties: !0 };
  delete n.if, delete n.then, delete n.else;
  const o = r.getPropertyLocation("if").getSchemaRef(), d = r.getPropertyLocation("then");
  d.schema = Kt(n, a);
  const c = r.getPropertyLocation("else");
  return c.schema = Kt(n, i), `
    if (validator.validate("${o}", ${t})) {
      ${xe(e, d, t)}
    } else {
      ${xe(e, c, t)}
    }
  `;
}
function ul(e) {
  return `(${e} && typeof ${e}.toJSON === 'function')
    ? ${e}.toJSON()
    : ${e}
  `;
}
function ll(e, r) {
  const t = r.schema;
  if (e.functionsNamesBySchema.has(t))
    return e.functionsNamesBySchema.get(t);
  const n = Cs(e);
  e.functionsNamesBySchema.set(t, n);
  let a = r.getSchemaRef();
  a.startsWith(e.rootSchemaId) && (a = a.replace(e.rootSchemaId, ""));
  let i = `
    function ${n} (input) {
      // ${a}
  `;
  return i += `
      const obj = ${ul("input")}
      let json = '{'
      let addComma = false
  `, i += fl(e, r), i += `
      return json + '}'
    }
  `, e.functions.push(i), n;
}
function dl(e, r) {
  const t = r.schema;
  let n = r.getPropertyLocation("items");
  n.schema = n.schema || {}, n.schema.$ref && (n = it(e, n, n.schema.$ref));
  const a = n.schema;
  if (e.functionsNamesBySchema.has(t))
    return e.functionsNamesBySchema.get(t);
  const i = Cs(e);
  e.functionsNamesBySchema.set(t, i);
  let s = r.getSchemaRef();
  s.startsWith(e.rootSchemaId) && (s = s.replace(e.rootSchemaId, ""));
  let o = `
    function ${i} (obj) {
      // ${s}
  `;
  if (o += `
    if (!Array.isArray(obj)) {
      throw new TypeError(\`The value of '${s}' does not match schema definition.\`)
    }
    const arrayLength = obj.length
  `, !t.additionalItems && Array.isArray(a) && (o += `
      if (arrayLength > ${a.length}) {
        throw new Error(\`Item at ${a.length} does not match schema definition.\`)
      }
    `), As === "json-stringify" && (o += `if (arrayLength && arrayLength >= ${bt}) return JSON.stringify(obj)
`), o += `
    let jsonOutput = ''
  `, Array.isArray(a)) {
    for (let d = 0; d < a.length; d++) {
      const c = a[d], m = xe(e, n.getPropertyLocation(d), `obj[${d}]`);
      o += `
        if (${d} < arrayLength) {
          if (${Ds(c.type, `[${d}]`)}) {
            let json = ''
            ${m}
            jsonOutput += json
            if (${d} < arrayLength - 1) {
              jsonOutput += ','
            }
          } else {
            throw new Error(\`Item at ${d} does not match schema definition.\`)
          }
        }
        `;
    }
    t.additionalItems && (o += `
        for (let i = ${a.length}; i < arrayLength; i++) {
          jsonOutput += JSON.stringify(obj[i])
          if (i < arrayLength - 1) {
            jsonOutput += ','
          }
        }`);
  } else {
    const d = xe(e, n, "obj[i]");
    o += `
      for (let i = 0; i < arrayLength; i++) {
        let json = ''
        ${d}
        jsonOutput += json
        if (i < arrayLength - 1) {
          jsonOutput += ','
        }
      }`;
  }
  return o += "\n    return `[${jsonOutput}]`\n  }", e.functions.push(o), i;
}
function Ds(e, r) {
  let t;
  switch (e) {
    case "null":
      t = `obj${r} === null`;
      break;
    case "string":
      t = `typeof obj${r} === 'string'`;
      break;
    case "integer":
      t = `Number.isInteger(obj${r})`;
      break;
    case "number":
      t = `Number.isFinite(obj${r})`;
      break;
    case "boolean":
      t = `typeof obj${r} === 'boolean'`;
      break;
    case "object":
      t = `obj${r} && typeof obj${r} === 'object' && obj${r}.constructor === Object`;
      break;
    case "array":
      t = `Array.isArray(obj${r})`;
      break;
    default:
      Array.isArray(e) && (t = `(${e.map((a) => Ds(a, r)).join(" || ")})`);
  }
  return t;
}
function Cs(e) {
  return "anonymous" + e.functionsCounter++;
}
function hl(e, r, t) {
  const a = r.schema.type.sort((o) => o === "null" ? -1 : 1);
  let i = "";
  a.forEach((o, d) => {
    r.schema = { ...r.schema, type: o };
    const c = Ms(e, r, t), m = d === 0 ? "if" : "else if";
    switch (o) {
      case "null":
        i += `
          ${m} (${t} === null)
            ${c}
          `;
        break;
      case "string": {
        i += `
          ${m}(
            typeof ${t} === "string" ||
            ${t} === null ||
            ${t} instanceof Date ||
            ${t} instanceof RegExp ||
            (
              typeof ${t} === "object" &&
              typeof ${t}.toString === "function" &&
              ${t}.toString !== Object.prototype.toString &&
              !(${t} instanceof Date)
            )
          )
            ${c}
        `;
        break;
      }
      case "array": {
        i += `
          ${m}(Array.isArray(${t}))
            ${c}
        `;
        break;
      }
      case "integer": {
        i += `
          ${m}(Number.isInteger(${t}) || ${t} === null)
            ${c}
        `;
        break;
      }
      default: {
        i += `
          ${m}(typeof ${t} === "${o}" || ${t} === null)
            ${c}
        `;
        break;
      }
    }
  });
  let s = r.getSchemaRef();
  return s.startsWith(e.rootSchemaId) && (s = s.replace(e.rootSchemaId, "")), i += `
    else throw new TypeError(\`The value of '${s}' does not match schema definition.\`)
  `, i;
}
function Ms(e, r, t) {
  const n = r.schema;
  switch (n.type) {
    case "null":
      return "json += 'null'";
    case "string":
      return n.format === "date-time" ? `json += serializer.asDateTime(${t})` : n.format === "date" ? `json += serializer.asDate(${t})` : n.format === "time" ? `json += serializer.asTime(${t})` : `json += serializer.asString(${t})`;
    case "integer":
      return `json += serializer.asInteger(${t})`;
    case "number":
      return `json += serializer.asNumber(${t})`;
    case "boolean":
      return `json += serializer.asBoolean(${t})`;
    case "object":
      return `json += ${ll(e, r)}(${t})`;
    case "array":
      return `json += ${dl(e, r)}(${t})`;
    case void 0:
      return `json += JSON.stringify(${t})`;
    default:
      throw new Error(`${n.type} unsupported`);
  }
}
function ml(e, r) {
  const t = e.schema, n = t.type, a = Array.isArray(n) && n.includes("null");
  let i = "";
  return a && (i += `
      if (${r} === null) {
        json += 'null'
      } else {
    `), i += `json += '${JSON.stringify(t.const)}'`, a && (i += `
      }
    `), i;
}
function xe(e, r, t) {
  let n = r.schema;
  if (typeof n == "boolean")
    return `json += JSON.stringify(${t})`;
  if (n.$ref && (r = it(e, r, n.$ref), n = r.schema), n.type === void 0) {
    const o = Ts(n);
    o && (n.type = o);
  }
  if (n.if && n.then)
    return cl(e, r, t);
  n.allOf && (Rs(e, r, n, Yu(n)), n = r.schema);
  const a = n.type;
  let i = "";
  if (a === void 0 && (n.anyOf || n.oneOf)) {
    e.validatorSchemasIds.add(r.getSchemaId());
    const o = n.anyOf ? "anyOf" : "oneOf", d = r.getPropertyLocation(o);
    for (let m = 0; m < r.schema[o].length; m++) {
      const _ = d.getPropertyLocation(m), k = _.getSchemaRef(), j = xe(e, _, t);
      i += `
        ${m === 0 ? "if" : "else if"}(validator.validate("${k}", ${t}))
          ${j}
      `;
    }
    let c = r.getSchemaRef();
    return c.startsWith(e.rootSchemaId) && (c = c.replace(e.rootSchemaId, "")), i += `
      else throw new TypeError(\`The value of '${c}' does not match schema definition.\`)
    `, i;
  }
  const s = n.nullable === !0;
  return s && (i += `
      if (${t} === null) {
        json += 'null'
      } else {
    `), n.const !== void 0 ? i += ml(r, t) : Array.isArray(a) ? i += hl(e, r, t) : i += Ms(e, r, t), s && (i += `
      }
    `), i;
}
ni.exports = qn;
He.default = qn;
He.build = qn;
He.validLargeArrayMechanisms = ks;
He.restore = function({ code: e, validator: r, serializer: t }) {
  return Function.apply(null, ["validator", "serializer", e]).apply(null, [r, t]);
};
var Ce = {}, pl = {
  get exports() {
    return Ce;
  },
  set exports(e) {
    Ce = e;
  }
};
const yl = typeof Buffer < "u", Aa = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, ka = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function zs(e, r, t) {
  t == null && r !== null && typeof r == "object" && (t = r, r = void 0), yl && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const n = JSON.parse(e, r);
  if (n === null || typeof n != "object")
    return n;
  const a = t && t.protoAction || "error", i = t && t.constructorAction || "error";
  if (a === "ignore" && i === "ignore")
    return n;
  if (a !== "ignore" && i !== "ignore") {
    if (Aa.test(e) === !1 && ka.test(e) === !1)
      return n;
  } else if (a !== "ignore" && i === "ignore") {
    if (Aa.test(e) === !1)
      return n;
  } else if (ka.test(e) === !1)
    return n;
  return Fs(n, { protoAction: a, constructorAction: i, safe: t && t.safe });
}
function Fs(e, { protoAction: r = "error", constructorAction: t = "error", safe: n } = {}) {
  let a = [e];
  for (; a.length; ) {
    const i = a;
    a = [];
    for (const s of i) {
      if (r !== "ignore" && Object.prototype.hasOwnProperty.call(s, "__proto__")) {
        if (n === !0)
          return null;
        if (r === "error")
          throw new SyntaxError("Object contains forbidden prototype property");
        delete s.__proto__;
      }
      if (t !== "ignore" && Object.prototype.hasOwnProperty.call(s, "constructor") && Object.prototype.hasOwnProperty.call(s.constructor, "prototype")) {
        if (n === !0)
          return null;
        if (t === "error")
          throw new SyntaxError("Object contains forbidden prototype property");
        delete s.constructor;
      }
      for (const o in s) {
        const d = s[o];
        d && typeof d == "object" && a.push(d);
      }
    }
  }
  return e;
}
function Un(e, r, t) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return zs(e, r, t);
  } finally {
    Error.stackTraceLimit = n;
  }
}
function gl(e, r) {
  const t = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return zs(e, r, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = t;
  }
}
pl.exports = Un;
Ce.default = Un;
Ce.parse = Un;
Ce.safeParse = gl;
Ce.scan = Fs;
class wl {
  constructor(r) {
    /**
     * target pinia
     */
    $e(this, "pinia");
    $e(this, "sessionHandler");
    $e(this, "localHandler");
    /**
     * white list
     */
    $e(this, "storageWhiteList");
    /**
     * judge the environment
     */
    $e(this, "envCan", () => {
      this.sessionHandler.envCan(), this.localHandler.envCan();
    });
    /**
     * init function use sessionStorage
     * 初始化，使用sessionStorage,if sessionStorage has target key,it will return the key's value
     * @param storeName pinia仓库的唯一ID Unique ID
     * @param key 键
     * @param value 值
     * @param scheme 序列化scheme
     * @example
     * if you value is: user={id:1,username:'pinia'}
     *  ↓↓↓↓↓👇↓↓↓↓↓
     * scheme={title:'user',type:'object',properties:{id:{type:'number'},username:{type:'string'}}}
     */
    $e(this, "init", (r, t, n, a) => {
      let i = r + "-" + t;
      this.storageWhiteList.session.add(i), this.sessionHandler.set(i + "--scheme", JSON.stringify(a));
      let s = this.isExist(i, !0);
      if (s && s != !0)
        return Ce(s);
      {
        const o = He(a);
        return this.sessionHandler.set(i, o(n)), n;
      }
    });
    /**
     * init function use sessionStorage
     * 初始化，使用sessionStorage,if sessionStorage has target key,it will return the key's value
     * @param storeName pinia仓库的唯一ID Unique ID
     * @param key 键
     * @param value 值
     * @param scheme 序列化scheme
     * @example
     * if you value is: user={id:1,username:'pinia'}
     *  ↓↓↓↓↓👇↓↓↓↓↓
     * scheme={title:'user',type:'object',properties:{id:{type:'number'},username:{type:'string'}}}
     */
    $e(this, "persist", (r, t, n, a) => {
      let i = r + "-" + t;
      this.storageWhiteList.local.add(i), this.localHandler.set(i + "--scheme", JSON.stringify(a));
      let s = this.isExist(i, !1);
      if (s && s != !0)
        return Ce(s);
      {
        const o = He(a);
        return this.localHandler.set(i, o(n)), n;
      }
    });
    /**
     * init wihte list
     */
    $e(this, "initWhiteList", () => {
      let r = this.sessionHandler.forEeah(), t = this.localHandler.forEeah();
      r.length != 0 && r.forEach((n) => {
        this.storageWhiteList.session.add(n);
      }), t.length != 0 && t.forEach((n) => {
        this.storageWhiteList.local.add(n);
      });
    });
    /**
     * Determine whether the key exists and return JSON data, otherwise return false
     * 判断是否存在key存在返回json数据，否则返回false
     * @param keyName 键key
     * @returns  boolean | string
     */
    $e(this, "isExist", (r, t) => t ? this.sessionHandler.get(r) ?? !1 : this.localHandler.get(r) ?? !1);
    $e(this, "update", (r) => {
      var t;
      (t = this.pinia) == null || t.$patch(r);
    });
    /**
     * Monitoring update subscription changes
     * 监控更新订阅变化
     * @param store
     */
    $e(this, "watch", () => {
      var r;
      (r = this.pinia) == null || r.$subscribe((t, n) => {
        t.events.forEach((i) => {
          var d, c;
          let s, o;
          if (this.checkScheme(this.pinia.$id, i.key))
            s = i.newValue, o = ((c = this.pinia) == null ? void 0 : c.$id) + "-" + i.key;
          else {
            s = i.target;
            let m = -1;
            if (Object.values(n).forEach((_, k) => {
              Object.is(s, Ys(_)) && (m = k);
            }), m == -1)
              throw new Error("the param may not in state!");
            {
              let _ = Object.keys(n)[m];
              o = ((d = this.pinia) == null ? void 0 : d.$id) + "-" + _;
            }
          }
          this.updateStorage(o, s, this.checkWhiteList(o));
        });
      });
    });
    /**
     * 检查scheme类型，object和array返回false，原始类型返回true
     * @param prefix
     * @param key
     * @returns
     */
    $e(this, "checkScheme", (r, t) => {
      let n = r + "-" + t, a = n + "--scheme", i = "";
      try {
        this.checkWhiteList(n) ? i = this.sessionHandler.get(a) : i = this.localHandler.get(a);
      } catch {
        return !1;
      }
      if (i == null)
        throw new Error("please check the scheme");
      {
        let s = Ce(i);
        return s.type != "array" || s.type != "object";
      }
    });
    /**
     * this function will check storageWhiteList and find where the key in
     * if return true -> session , false -> local
     * @param keyName
     * @returns true -> session , false -> local
     */
    $e(this, "checkWhiteList", (r) => {
      let t = -1;
      if (this.storageWhiteList.session.forEach((n) => {
        n == r && (t = 0);
      }), this.storageWhiteList.local.forEach((n) => {
        n == r && (t = 1);
      }), t == -1)
        throw new Error(
          "the param may not in store in session or local! but this may system error,after your check ,if this is a system error , please send an email to author:syf20020816@outlook.com"
        );
      return t == 0;
    });
    /**
     * updateStorage(local/session)
     * @param keyName
     * @param value
     * @param storageType true-> update session | false -> update local
     */
    $e(this, "updateStorage", (r, t, n) => {
      if (n) {
        let a = this.sessionHandler.get(r + "--scheme");
        if (a != null) {
          let i = Ce(a), s = He(i);
          this.sessionHandler.set(r, s(t));
        } else
          throw new Error("scheme is null,please check your scheme");
      } else {
        let a = this.localHandler.get(r + "--scheme");
        if (a != null) {
          let i = Ce(a), s = He(i);
          this.localHandler.set(r, s(t));
        } else
          throw new Error("scheme is null,please check your scheme");
      }
    });
    r && (this.pinia = r), this.sessionHandler = new xs(), this.localHandler = new ei(), this.storageWhiteList = {
      session: /* @__PURE__ */ new Set(),
      local: /* @__PURE__ */ new Set()
    }, this.initWhiteList(), this.envCan();
  }
}
export {
  ei as PiniaLocal,
  xs as PiniaSession,
  wl as PiniaStorage
};
