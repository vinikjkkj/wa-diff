__d(
  "WAWebHatchPeerInviteUrl",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["muse.ai", "www.muse.ai", "production.museai.com"]),
      l = new Set(["/peer/accept", "/hatch/peer/accept"]),
      s = 8192,
      u = 2048;
    function c(e) {
      return m(e) == null;
    }
    function d(e) {
      try {
        var t = new URL(e).hash.slice(1);
        return p(t) ? t : null;
      } catch (e) {
        return null;
      }
    }
    function m(t) {
      if (typeof t != "string" || t.length > s) return "not_url";
      var n;
      try {
        n = new URL(t);
      } catch (e) {
        return "not_url";
      }
      return e.has(n.hostname.toLowerCase())
        ? n.protocol !== "https:"
          ? "not_https"
          : n.username !== "" || n.password !== ""
            ? "credentials"
            : n.port !== "" || n.search !== ""
              ? "port_or_query"
              : l.has(n.pathname.replace(/\/$/, ""))
                ? p(n.hash.slice(1))
                  ? null
                  : "bad_fragment"
                : "other_path"
        : "other_host";
    }
    function p(e) {
      return (
        e.length > 0 &&
        e.length <= u &&
        e.length % 4 !== 1 &&
        /^[A-Za-z0-9_-]+$/.test(e)
      );
    }
    ((i.isHatchPeerInviteUrl = c),
      (i.getHatchPeerInviteFragment = d),
      (i.getHatchPeerInviteUrlMismatch = m));
  },
  66,
);
