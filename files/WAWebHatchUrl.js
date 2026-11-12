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
      f = /^https:\/\/[^/?#]*:/i,
      g = [
        ["utm_source", "wa4a"],
        ["utm_campaign", "wa_web_muse_fab"],
      ];
    function h() {
      return C(
        o("WAWebABProps").getABPropConfigValue(
          "wa_hatch_companion_onboarding_url",
        ),
      );
    }
    function y(e) {
      var t = new URL(e),
        n = t.searchParams,
        r = g
          .filter(function (e) {
            var t = e[0];
            return !n.has(t);
          })
          .map(function (e) {
            var t = e[0],
              n = e[1];
            return t + "=" + n;
          })
          .join("&");
      if (r === "") return e;
      var o = e.indexOf("#"),
        a = o === -1 ? e : e.slice(0, o),
        i = o === -1 ? "" : e.slice(o),
        l = a.includes("?") ? "&" : "?";
      return "" + a + l + r + i;
    }
    function C(t) {
      return E(t, e);
    }
    function b(e) {
      return E(e, s);
    }
    function v(e) {
      var t, n;
      return (t = (n = R(e)) == null ? void 0 : n.connectorId) != null
        ? t
        : null;
    }
    function S(e) {
      var t;
      return ((t = R(e)) == null ? void 0 : t.isApiKey) === !0;
    }
    function R(e) {
      var t,
        n = e == null || _.test(e) ? null : C(e);
      if (n == null || f.test(n)) return null;
      var r = new URL(n),
        o = r.host,
        a = r.pathname,
        i = r.searchParams;
      if (o !== c || i.has("spec")) return null;
      var l = a === m,
        s = L(l ? i.get("service") : (t = d.exec(a)) == null ? void 0 : t[1]);
      return s == null ? null : { connectorId: s, isApiKey: l };
    }
    function L(e) {
      return e != null && p.test(e) ? e : null;
    }
    function E(e, t) {
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
    ((l.getHatchJoinUrl = h),
      (l.withHatchFabSource = y),
      (l.toHttpsUrl = C),
      (l.toWebUrl = b),
      (l.getHatchConnectLinkConnectorId = v),
      (l.isHatchApiKeyConnectLink = S));
  },
  98,
);
