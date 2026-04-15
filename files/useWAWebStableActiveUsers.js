__d(
  "useWAWebStableActiveUsers",
  [
    "WAWebGroupGatingUtils",
    "WAWebPresenceOrder",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
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
    function c(e, t) {
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
            return a ? u(e, t) : [];
          }),
          (n[1] = t),
          (n[2] = e),
          (n[3] = i))
        : (i = n[3]);
      var l = s(i),
        c = l[0],
        d = l[1],
        m = s(e),
        p = m[0],
        _ = m[1],
        f = s(t),
        g = f[0],
        h = f[1];
      if (a && (e !== p || t !== g)) {
        (_(e), h(t));
        var y = u(e, t);
        d(o("WAWebPresenceOrder").preserveUserOrder(c, y));
      }
      return a ? c : null;
    }
    l.useWAWebStableActiveUsers = c;
  },
  98,
);
