__d(
  "MjvBuiltins",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Array;
    function l(t) {
      var n = e;
      return n.isArray(t);
    }
    var s = Math,
      u = Number;
    function c(e) {
      return u.isInteger(e);
    }
    function d(e) {
      return s.abs(e);
    }
    function m(e, t) {
      return s.min(e, t);
    }
    var p = Object.getOwnPropertyDescriptor;
    function _(e, t) {
      return p(e, t) != null;
    }
    var f = Object.prototype;
    function g(e, t, n) {
      return (
        (typeof n == "function" || t === "__proto__") && t in f && !_(e, t)
      );
    }
    var h = {
      getOwnPropertyNames: Object.getOwnPropertyNames,
      getPrototypeOf: Object.getPrototypeOf,
      hasOwn: _,
      isArray: l,
      isInheritedValue: g,
      isInteger: c,
      mathAbs: d,
      mathMin: m,
      objectKeys: Object.keys,
      objectPrototype: f,
      stringify: JSON.stringify,
    };
    i.default = h;
  },
  66,
);
