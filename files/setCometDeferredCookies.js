__d(
  "setCometDeferredCookies",
  ["DeferredCookie", "ErrorGuard"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1,
      u = new Set();
    function c(e) {
      s ? e() : u.add(e);
    }
    function d(t) {
      (Object.entries(t).forEach(function (e) {
        var t = e[0],
          n = e[1],
          o = n.expiration_for_js,
          a = n.first_party_only,
          i = n.path,
          l = n.secure,
          s = n.value;
        r("DeferredCookie").addToQueue(t, s, o, i, a, !1, l);
      }),
        (s = !0),
        u.forEach(function (t) {
          return (e || (e = r("ErrorGuard"))).applyWithGuard(t, null, []);
        }),
        u.clear());
    }
    ((l.onCometDeferredCookieSet = c), (l.setCometDeferredCookies = d));
  },
  98,
);
