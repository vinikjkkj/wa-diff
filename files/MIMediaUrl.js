__d(
  "MIMediaUrl",
  ["CurrentEnvironment", "WABase64", "WAHttpUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "/messenger_eb",
      s = new Set([
        "https://www.facebook.com",
        "https://web.facebook.com",
        "https://www.messenger.com",
      ]);
    function u() {
      return s.has(self.location.origin);
    }
    function c(e) {
      if (!e && u()) return [self.location.origin, "/uploads"];
      var t = r("CurrentEnvironment").messengerdotcom
        ? "https://rupload.messenger.com"
        : "https://rupload.facebook.com";
      return [t, ""];
    }
    function d(t, n, r, a, i) {
      var l = o("WABase64").encodeB64UrlSafe(n),
        s = o("WABase64").encodeB64UrlSafe(t),
        u = { direct_ip: 0, token: s };
      (a === !0 && (u.resume = 1), r != null && r > 0 && (u.bytestart = r));
      var d = c(i === !0),
        m = d[0],
        p = d[1];
      return o("WAHttpUtils").buildUrl(m, "" + p + e + "/" + l, u);
    }
    ((l.isMIUploadSameOrigin = u), (l.buildMIUploadUrl = d));
  },
  98,
);
