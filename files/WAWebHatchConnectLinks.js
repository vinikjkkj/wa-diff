__d(
  "WAWebHatchConnectLinks",
  ["WABase64UrlSafe", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "spec",
      s = "service",
      u = "session_id",
      c = ["api-key", "oauth"],
      d = /^[^:]*:\/\/([^/?#]*)([^?#]*)/,
      m = [
        {
          authority: "connect",
          form: "hatch",
          pathPrefix: "/",
          scheme: "hatch",
        },
        {
          authority: "agent.meta.ai",
          form: "https",
          pathPrefix: "/connect/",
          scheme: "https",
        },
      ];
    function p(e) {
      for (var t of c) {
        var n = f(e, t);
        if (n != null) return _(e, t, n);
      }
      return null;
    }
    function _(t, n, r) {
      var o,
        a,
        i,
        l = h(t),
        c = l.get(e);
      if (c === "" || (c == null && !y(t, e))) return null;
      var d = (o = (a = l.get(u)) == null ? void 0 : a.trim()) != null ? o : "";
      return babelHelpers.extends(
        {
          flow: n,
          form: r,
          service:
            r === "custom_scheme" ? g(t) : (i = l.get(s)) != null ? i : null,
        },
        d === "" ? {} : { sessionId: d },
        { spec: c == null ? null : b(c) },
      );
    }
    function f(e, t) {
      var n,
        r,
        o = e.indexOf(":"),
        a = o < 0 ? "" : e.slice(0, o).toLowerCase();
      if (a === t) return "custom_scheme";
      var i = d.exec(e),
        l = i == null || (n = i[1]) == null ? void 0 : n.toLowerCase(),
        s = i == null ? void 0 : i[2];
      return (r = m.find(function (e) {
        return (
          e.scheme === a && e.authority === l && s === "" + e.pathPrefix + t
        );
      })) == null
        ? void 0
        : r.form;
    }
    function g(e) {
      var t,
        n = (t = /^[^:]*:\/\/([^/?#]*)/.exec(e)) == null ? void 0 : t[1],
        r = n != null ? S(n) : null;
      return r === "" ? null : r;
    }
    function h(e) {
      var t = new Map();
      for (var n of C(e)) {
        var r = n.indexOf("="),
          o = S(r < 0 ? n : n.slice(0, r)),
          a = S(r < 0 ? "" : n.slice(r + 1));
        o != null && a != null && !t.has(o) && t.set(o, a);
      }
      return t;
    }
    function y(e, t) {
      return C(e).some(function (e) {
        return S(e.split("=")[0]) === t;
      });
    }
    function C(e) {
      var t = e.split("#")[0],
        n = t.indexOf("?");
      return n < 0 ? [] : t.slice(n + 1).split("&");
    }
    function b(e) {
      var t = e.trim(),
        n = t.startsWith("{") ? t : v(t);
      if (n == null) return null;
      try {
        var r = JSON.parse(n);
        return o("WAWebHatchJsonReaders").isObject(r) ? r : null;
      } catch (e) {
        return null;
      }
    }
    function v(e) {
      try {
        return new TextDecoder("utf-8", { fatal: !0 }).decode(
          o("WABase64UrlSafe").getBytesFromBase64(
            o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
          ),
        );
      } catch (e) {
        return null;
      }
    }
    function S(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, "%2B"));
      } catch (e) {
        return null;
      }
    }
    l.decodeHatchCustomConnectLink = p;
  },
  98,
);
