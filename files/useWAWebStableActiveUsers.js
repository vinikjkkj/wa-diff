__d(
  "useWAWebStableActiveUsers",
  ["WAWebGroupGatingUtils", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = new Set(
          t.map(function (e) {
            return e.toString();
          }),
        ),
        r = e.filter(function (e) {
          return n.has(e.toString());
        }),
        o = new Set(
          r.map(function (e) {
            return e.toString();
          }),
        ),
        a = t.filter(function (e) {
          return !o.has(e.toString());
        });
      return [].concat(r, a);
    }
    function c(e, t) {
      var n = new Set(
          e.map(function (e) {
            return e.toString();
          }),
        ),
        r = t.filter(function (e) {
          var t = e.toString();
          return n.has(t) ? !1 : (n.add(t), !0);
        });
      return [].concat(e, r);
    }
    function d(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = o("WAWebGroupGatingUtils").isGroupTypingIndicatorEnabled()),
          (n[0] = r))
        : (r = n[0]);
      var a = r,
        i;
      n[1] !== t || n[2] !== e
        ? ((i = function () {
            return a ? c(e, t) : [];
          }),
          (n[1] = t),
          (n[2] = e),
          (n[3] = i))
        : (i = n[3]);
      var l = s(i),
        d = l[0],
        m = l[1],
        p = s(e),
        _ = p[0],
        f = p[1],
        g = s(t),
        h = g[0],
        y = g[1];
      if (a && (e !== _ || t !== h)) {
        (f(e), y(t));
        var C = c(e, t);
        m(u(d, C));
      }
      return a ? d : null;
    }
    ((l.preserveUserOrder = u), (l.useWAWebStableActiveUsers = d));
  },
  98,
);
