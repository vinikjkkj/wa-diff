__d(
  "WAWebHatchUrl",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^https:\/\/[^/\\\s?#]/i,
      s = /^https?:\/\/[^/\\\s?#]/i,
      u = /[\s\\]/,
      c = "agent.meta.ai",
      d = /^\/connectors\/connect\/([A-Za-z0-9_-]+)\/?$/;
    function m() {
      return p(
        o("WAWebABProps").getABPropConfigValue(
          "wa_hatch_companion_onboarding_url",
        ),
      );
    }
    function p(t) {
      return g(t, e);
    }
    function _(e) {
      return g(e, s);
    }
    function f(e) {
      var t,
        n,
        r = p(e);
      if (r == null) return null;
      var o = new URL(r),
        a = o.host,
        i = o.pathname;
      return a === c && (t = (n = d.exec(i)) == null ? void 0 : n[1]) != null
        ? t
        : null;
    }
    function g(e, t) {
      var n = e == null ? void 0 : e.trim();
      if (n == null || !t.test(n) || u.test(n)) return null;
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
    ((l.getHatchJoinUrl = m),
      (l.toHttpsUrl = p),
      (l.toWebUrl = _),
      (l.getHatchConnectLinkConnectorId = f));
  },
  98,
);
