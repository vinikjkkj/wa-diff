__d(
  "useMatchViewport",
  [
    "CometSSRViewportHints",
    "ExecutionEnvironment",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useLayoutEffect,
      d = u.useState;
    function m(t, n, a, i) {
      var l = o("react-compiler-runtime").c(10),
        s = i === void 0 ? !1 : i,
        u;
      l[0] !== n || l[1] !== a || l[2] !== t
        ? ((u = function () {
            if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) {
              var i = o("CometSSRViewportHints").getDimension(n);
              return i != null ? o("CometSSRViewportHints").check[t](i, a) : !1;
            }
            return !!window.matchMedia && window.matchMedia(p(t, n, a)).matches;
          }),
          (l[0] = n),
          (l[1] = a),
          (l[2] = t),
          (l[3] = u))
        : (u = l[3]);
      var m = d(u),
        _ = m[0],
        f = m[1];
      (e || (e = r("ExecutionEnvironment"))).canUseDOM ||
        o("CometSSRViewportHints").addUseMatchViewportResult(n, a, t, _);
      var g, h;
      return (
        l[4] !== s || l[5] !== n || l[6] !== a || l[7] !== t
          ? ((g = function () {
              if (window.matchMedia) {
                var e = p(t, n, a),
                  r = window.matchMedia(e),
                  o = function (t) {
                    return f(t.matches);
                  };
                return (
                  r.addListener(o),
                  s && f(r.matches),
                  function () {
                    return r.removeListener(o);
                  }
                );
              }
            }),
            (h = [t, n, a, s]),
            (l[4] = s),
            (l[5] = n),
            (l[6] = a),
            (l[7] = t),
            (l[8] = g),
            (l[9] = h))
          : ((g = l[8]), (h = l[9])),
        c(g, h),
        _
      );
    }
    function p(e, t, n) {
      return "(" + e + "-" + t + ": " + n + "px)";
    }
    l.default = m;
  },
  98,
);
