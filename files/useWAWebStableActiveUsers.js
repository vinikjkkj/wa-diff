__d(
  "useWAWebStableActiveUsers",
  ["WAWebGroupGatingUtils", "WAWebPresenceOrder", "react"],
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
      var n = o("WAWebGroupGatingUtils").isGroupTypingIndicatorEnabled(),
        r = s(function () {
          return n ? u(e, t) : [];
        }),
        a = r[0],
        i = r[1],
        l = s(e),
        c = l[0],
        d = l[1],
        m = s(t),
        p = m[0],
        _ = m[1];
      if (n && (e !== c || t !== p)) {
        (d(e), _(t));
        var f = u(e, t);
        i(o("WAWebPresenceOrder").preserveUserOrder(a, f));
      }
      return n ? a : null;
    }
    l.useWAWebStableActiveUsers = c;
  },
  98,
);
