__d(
  "IdleCallbackImplementation",
  ["performanceNow", "requestAnimationFramePolyfill"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [],
      u = 0,
      c = 0,
      d = -1,
      m = !1,
      p = 1e3 / 60,
      _ = 2;
    function f(e) {
      return e;
    }
    function g(e) {
      return e;
    }
    function h(e, n) {
      var r = c++;
      if (((s[r] = e), C(), n != null && n.timeout > 0)) {
        var o = r;
        t.setTimeout(function () {
          return E(o);
        }, n.timeout);
      }
      return r;
    }
    function y(e) {
      var t = e;
      s[t] = null;
    }
    function C() {
      m ||
        ((m = !0),
        r("requestAnimationFramePolyfill")(function (t) {
          ((m = !1), v((e || (e = r("performanceNow")))() - t));
        }));
    }
    function b(e) {
      var t = p - _;
      if (e < t) return t - e;
      var n = e % p;
      return n > t || n < _ ? 0 : t - n;
    }
    function v(t) {
      var n = (e || (e = r("performanceNow")))();
      if (n > d) {
        var o = b(t);
        if (o > 0) {
          var a = n + o;
          (L(a), (d = a));
        }
      }
      S() && C();
    }
    function S() {
      return u < s.length;
    }
    function R() {
      for (; S(); ) {
        var e = s[u];
        if ((u++, e)) return e;
      }
      return null;
    }
    function L(t) {
      for (var n; (e || (e = r("performanceNow")))() < t && (n = R()); )
        n(new k(t));
    }
    function E(e) {
      var t = e,
        n = s[t];
      n && (y(e), n(new k(null)));
    }
    var k = (function () {
      function t(e) {
        ((this.didTimeout = e == null), (this.$1 = e));
      }
      var n = t.prototype;
      return (
        (n.timeRemaining = function () {
          var t = this.$1;
          if (t != null) {
            var n = (e || (e = r("performanceNow")))();
            if (n < t) return t - n;
          }
          return 0;
        }),
        t
      );
    })();
    ((l.requestIdleCallback = h), (l.cancelIdleCallback = y));
  },
  98,
);
