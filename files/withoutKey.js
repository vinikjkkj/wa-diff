__d(
  "withoutKey",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = l(e, "string");
      return typeof t == "symbol" ? t : t + "";
    }
    function l(e, t) {
      if (typeof e != "object" || !e) return e;
      var n =
        e[typeof Symbol == "function" ? Symbol.toPrimitive : "@@toPrimitive"];
      if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    function s(t, n) {
      var r = t[n],
        o = babelHelpers.objectWithoutPropertiesLoose(t, [n].map(e));
      return o;
    }
    i.default = s;
  },
  66,
);
