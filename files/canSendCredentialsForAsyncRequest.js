__d(
  "canSendCredentialsForAsyncRequest",
  ["isFacebookURI", "isMetaAIURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "(^|\\.)instagram\\.com$",
      s = "(^|\\.)messenger\\.com$",
      u = "(^|\\.)workplace\\.com$",
      c = "(^|\\.)workrooms\\.com$",
      d = "(^|\\.)work\\.meta\\.com$",
      m = "(^|\\.)horizon\\.meta\\.com$",
      p = "(^|\\.)spark\\.meta\\.com$",
      _ = "(^|\\.)developers\\.meta\\.com$",
      f = "(^|\\.)ar\\.meta\\.com$",
      g = "(^|\\.)aidemos\\.meta\\.com$",
      h = "(^|\\.)bugbounty\\.meta\\.com$",
      y = "(^|\\.)devicemanager\\.meta\\.com$",
      C = "(^|\\.)www\\.meta\\.com$",
      b = "(^|\\.)wearables?(\\.[^.]+)*\\.developer\\.meta\\.com$",
      v = [e, s, u, c, d, m, p, _, f, g, h, y, C, b].join("|"),
      S = "(^|\\.)internalfb\\.com$",
      R = null,
      L = null;
    function E(e) {
      if (r("isFacebookURI")(e) || r("isMetaAIURI")(e)) return !0;
      var t = e.getDomain(),
        n = L;
      if ((n == null && ((n = new RegExp(S, "i")), (L = n)), n.test(t)))
        return !0;
      if (e.getProtocol() !== "https") return !1;
      var o = R;
      return (o == null && ((o = new RegExp(v, "i")), (R = o)), o.test(t));
    }
    l.default = E;
  },
  98,
);
