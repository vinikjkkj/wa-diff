__d(
  "WAWebHatchOAuthAttempts",
  ["WAWebHatchConnectInfoDecoder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6e5,
      s = 5,
      u = new Map();
    function c(t) {
      var n = t.authorizeUrl,
        r = t.connectorId,
        a = t.flow,
        i = t.onFailed,
        l = t.onSettled;
      if (!o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(n)) return null;
      var s = new URL(n).searchParams.get("state");
      if (s == null || s === "") return null;
      var c = Date.now();
      (p(c), u.delete(s), _(r, a));
      var d = {
        connectorId: r,
        expiresAt: c + e,
        flow: a,
        onFailed: i,
        onSettled: l,
        rawState: s,
      };
      return (u.set(s, d), d);
    }
    function d(e) {
      p(Date.now());
      var t = u.get(e);
      return (u.delete(e), t != null ? t : null);
    }
    function m() {
      u.clear();
    }
    function p(e) {
      for (var t of u) {
        var n = t[0],
          r = t[1];
        e >= r.expiresAt && u.delete(n);
      }
    }
    function _(e, t) {
      var n = Array.from(u.values()).filter(function (n) {
        return n.connectorId === e && n.flow === t;
      });
      if (!(n.length < s)) {
        var r = n.reduce(function (e, t) {
          return t.expiresAt < e.expiresAt ? t : e;
        });
        u.delete(r.rawState);
      }
    }
    ((l.registerHatchOAuthAttempt = c),
      (l.consumeHatchOAuthAttempt = d),
      (l.resetHatchOAuthAttemptsForTests = m));
  },
  98,
);
