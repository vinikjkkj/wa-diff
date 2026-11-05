__d(
  "WAWebHatchUrl",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^https:\/\/[^/\\\s?#]/i,
      s = /^https?:\/\/[^/\\\s?#]/i,
      u = /[\s\\]/,
      c = "agent.meta.ai",
      d = /^\/connectors\/connect\/([^/]+)\/?$/,
      m = "/connect/api-key",
      p = /^[A-Za-z0-9._:-]{1,128}$/,
      _ = /[\0-\x1F\x7F-\x9F]/,
      f = /^https:\/\/[^/?#]*:/i;
    function g() {
      return h(
        o("WAWebABProps").getABPropConfigValue(
          "wa_hatch_companion_onboarding_url",
        ),
      );
    }
    function h(t) {
      return R(t, e);
    }
    function y(e) {
      return R(e, s);
    }
    function C(e) {
      var t, n;
      return (t = (n = v(e)) == null ? void 0 : n.connectorId) != null
        ? t
        : null;
    }
    function b(e) {
      var t;
      return ((t = v(e)) == null ? void 0 : t.isApiKey) === !0;
    }
    function v(e) {
      var t,
        n = e == null || _.test(e) ? null : h(e);
      if (n == null || f.test(n)) return null;
      var r = new URL(n),
        o = r.host,
        a = r.pathname,
        i = r.searchParams;
      if (o !== c || i.has("spec")) return null;
      var l = a === m,
        s = S(l ? i.get("service") : (t = d.exec(a)) == null ? void 0 : t[1]);
      return s == null ? null : { connectorId: s, isApiKey: l };
    }
    function S(e) {
      return e != null && p.test(e) ? e : null;
    }
    function R(e, t) {
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
    ((l.getHatchJoinUrl = g),
      (l.toHttpsUrl = h),
      (l.toWebUrl = y),
      (l.getHatchConnectLinkConnectorId = C),
      (l.isHatchApiKeyConnectLink = b));
  },
  98,
);
