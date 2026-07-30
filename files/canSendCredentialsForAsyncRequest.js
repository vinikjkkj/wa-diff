__d(
  "canSendCredentialsForAsyncRequest",
  ["isFacebookURI", "isMetaAIURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "(^|\\.)instagram\\.com$",
      s = "(^|\\.)threads\\.(net|com)$",
      u = "(^|\\.)messenger\\.com$",
      c = "(^|\\.)workplace\\.com$",
      d = "(^|\\.)workrooms\\.com$",
      m = "(^|\\.)work\\.meta\\.com$",
      p = "(^|\\.)horizon\\.meta\\.com$",
      _ = "(^|\\.)spark\\.meta\\.com$",
      f = "(^|\\.)developers\\.meta\\.com$",
      g = "(^|\\.)ar\\.meta\\.com$",
      h = "(^|\\.)aidemos\\.meta\\.com$",
      y = "(^|\\.)bugbounty\\.meta\\.com$",
      C = "(^|\\.)devicemanager\\.meta\\.com$",
      b = "(^|\\.)www\\.meta\\.com$",
      v = "(^|\\.)wearables?(\\.[^.]+)*\\.developer\\.meta\\.com$",
      S = [e, s, u, c, d, m, p, _, f, g, h, y, C, b, v].join("|"),
      R = "(^|\\.)internalfb\\.com$",
      L = null,
      E = null;
    function k(e) {
      if (r("isFacebookURI")(e) || r("isMetaAIURI")(e)) return !0;
      var t = e.getDomain(),
        n = E;
      if ((n == null && ((n = new RegExp(R, "i")), (E = n)), n.test(t)))
        return !0;
      if (e.getProtocol() !== "https") return !1;
      var o = L;
      return (o == null && ((o = new RegExp(S, "i")), (L = o)), o.test(t));
    }
    l.default = k;
  },
  98,
);
