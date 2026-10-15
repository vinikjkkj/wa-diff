__d(
  "WAWebHatchUrl",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^https:\/\/[^/\\\s?#]/i,
      l = /^https?:\/\/[^/\\\s?#]/i,
      s = /[\s\\]/,
      u = "agent.meta.ai",
      c = /^\/connectors\/connect\/([A-Za-z0-9_-]+)\/?$/;
    function d(t) {
      return _(t, e);
    }
    function m(e) {
      return _(e, l);
    }
    function p(e) {
      var t,
        n,
        r = d(e);
      if (r == null) return null;
      var o = new URL(r),
        a = o.host,
        i = o.pathname;
      return a === u && (t = (n = c.exec(i)) == null ? void 0 : n[1]) != null
        ? t
        : null;
    }
    function _(e, t) {
      var n = e == null ? void 0 : e.trim();
      if (n == null || !t.test(n) || s.test(n)) return null;
      var r;
      try {
        r = new URL(n);
      } catch (e) {
        return null;
      }
      return r.hostname !== "" && r.username === "" && r.password === ""
        ? n
        : null;
    }
    ((i.toHttpsUrl = d),
      (i.toWebUrl = m),
      (i.getHatchConnectLinkConnectorId = p));
  },
  66,
);
