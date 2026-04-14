__d(
  "useWAWebStableActiveUsers",
  ["WAWebGroupGatingUtils", "react"],
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
      var n = o("WAWebGroupGatingUtils").isGroupTypingIndicatorEnabled(),
        r = s(function () {
          return n ? c(e, t) : [];
        }),
        a = r[0],
        i = r[1],
        l = s(e),
        d = l[0],
        m = l[1],
        p = s(t),
        _ = p[0],
        f = p[1];
      if (n && (e !== d || t !== _)) {
        (m(e), f(t));
        var g = c(e, t);
        i(u(a, g));
      }
      return n ? a : null;
    }
    ((l.preserveUserOrder = u), (l.useWAWebStableActiveUsers = d));
  },
  98,
);
