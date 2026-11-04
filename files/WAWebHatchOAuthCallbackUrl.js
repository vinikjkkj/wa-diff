__d(
  "WAWebHatchOAuthCallbackUrl",
  ["WAWebHatchConnectInfoDecoder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["agent.meta.ai", "muse.ai"],
      s = "/api/hatch/oauth/callback",
      u = /^https:\/\/([^/?#@:]+)(\/[^?#]*)$/i;
    function c(t) {
      var n,
        r,
        a,
        i,
        l = t.trim();
      if (!o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(l)) return null;
      var u = new URL(l);
      if (!e.includes(u.hostname) || u.pathname !== s) return null;
      var c =
          (n = (r = u.searchParams.get("code")) == null ? void 0 : r.trim()) !=
          null
            ? n
            : "",
        d =
          (a = (i = u.searchParams.get("state")) == null ? void 0 : i.trim()) !=
          null
            ? a
            : "";
      return c === "" || d === "" ? null : { code: c, state: d };
    }
    function d(t) {
      var n = u.exec(t);
      return n != null && e.includes(n[1].toLowerCase()) && n[2] === s;
    }
    ((l.parseHatchOAuthCallbackUrl = c), (l.isHatchOAuthRedirectUri = d));
  },
  98,
);
