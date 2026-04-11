__d(
  "WAPromiseBackoffs",
  ["Promise", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      if (e === 0) return 0;
      for (var n = g(t.algo), r = 1; r < e; r++) n();
      return d(t, n());
    }
    function u(e) {
      var t = e.relativeDelay,
        n = t === void 0 ? !1 : t,
        r = null,
        o = g(e.algo);
      return function () {
        var t = r;
        if (t == null) return ((r = n ? Date.now() : 0), 0);
        var a = d(e, o());
        if (n) {
          var i = Date.now(),
            l = i - t;
          (l > 0 && (a = Math.max(0, a - l)), (r = i));
        }
        return a;
      };
    }
    function c(t) {
      var r = u(t);
      return function (o) {
        return new (e || (e = n("Promise")))(function (e) {
          var t = r();
          t > 0 ? setTimeout(e, t, o) : e(o);
        });
      };
    }
    function d(e, t) {
      var n = e.jitter,
        r = n === void 0 ? 0.1 : n,
        o = e.max,
        a = e.min,
        i = t;
      return (
        o != null && i > o && (i = o),
        a != null && i < a && (i = a),
        r !== 0 && (i = Math.ceil(i * (1 + r * Math.random()))),
        i
      );
    }
    function m(e) {
      var t = e.second - e.first,
        n = e.first - t;
      return function () {
        var e = t + n;
        return ((n = t), (t = e), e);
      };
    }
    function p(e) {
      var t = e.base,
        n = t === void 0 ? 2 : t,
        r = e.first;
      return function () {
        var e = r;
        return ((r *= n), e);
      };
    }
    function _(e) {
      var t = e.delay;
      return function () {
        return t;
      };
    }
    function f(e) {
      var t = e.backoff,
        n = e.toMs,
        r = g(t);
      return function () {
        return n(r());
      };
    }
    function g(e) {
      switch (e.type) {
        case "fibonacci":
          return m(e);
        case "exponential":
          return p(e);
        case "constant":
          return _(e);
        case "adjust":
          return f(e);
        default:
          throw r("err")("makeTimeFunc unrecognized backoff " + e.type);
      }
    }
    ((l.getDelay = s), (l.createTimer = u), (l.createPromiseTimer = c));
  },
  98,
);
