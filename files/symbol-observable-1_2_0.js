__d(
  "symbol-observable-1.2.0",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = t));
      function t(e) {
        var t,
          n = e.Symbol;
        return (
          typeof n == "function"
            ? n.observable
              ? (t = n.observable)
              : ((t = n("observable")), (n.observable = t))
            : (t = "@@observable"),
          t
        );
      }
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    var d = {},
      m = { exports: d };
    function p() {
      Object.defineProperty(d, "__esModule", { value: !0 });
      var e = c(),
        n = r(e);
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var o;
      typeof self != "undefined"
        ? (o = self)
        : typeof window != "undefined"
          ? (o = window)
          : typeof t != "undefined"
            ? (o = t)
            : typeof m != "undefined"
              ? (o = m)
              : (o = Function("return this")());
      var a = (0, n.default)(o);
      d.default = a;
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    function g(e) {
      switch (e) {
        case void 0:
          return f();
      }
    }
    a.exports = g;
  },
  null,
);
