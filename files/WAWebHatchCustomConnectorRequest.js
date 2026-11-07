__d(
  "WAWebHatchCustomConnectorRequest",
  ["WATypeUtils", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "custom.",
      s = 2,
      u = "api_key",
      c = 128,
      d = 10,
      m = 256,
      p = "xn--",
      _ = ["nip.io", "sslip.io", "xip.io"],
      f = ["..", "@", "\\", "://"],
      g = /^[A-Za-z0-9_.-]+$/,
      h = /^[A-Za-z0-9_.-]+$/,
      y = /^[A-Za-z0-9!#$%&\'*+.^_`|~-]+$/,
      C = /^[A-Za-z0-9_.~-]+$/,
      b = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/,
      v = /^[a-z]+$/,
      S = /^[\x00-\x7F]*$/;
    function R(e) {
      if (e.flow !== "api-key") return null;
      var t = L(e.spec);
      return t == null ||
        (e.form === "https" &&
          (e.service == null || N(e.service) !== N(t.name)))
        ? null
        : e.sessionId == null
          ? t
          : babelHelpers.extends({}, t, { sessionId: e.sessionId });
    }
    function L(e) {
      var t = o("WAWebHatchJsonReaders").readObject(e, "connector");
      if (
        o("WAWebHatchJsonReaders").readField(e, "version") !== s ||
        o("WAWebHatchJsonReaders").readString(t, "mode") !== u
      )
        return null;
      var n = o("WAWebHatchJsonReaders").readString(t, "name"),
        r = T(t, "hosts"),
        a = D(t);
      return n == null || !E(n) || r == null || a == null
        ? null
        : {
            name: n,
            connector: { name: n, mode: u, hosts: r, token_proxy: [a] },
          };
    }
    function E(t) {
      return t.length <= c && t.startsWith(e) && g.test(t.slice(e.length));
    }
    function k(e) {
      return I(e) != null;
    }
    function I(e) {
      if (!S.test(e)) return null;
      var t = e.toLowerCase().replace(/\.$/, ""),
        n = t.split("."),
        r =
          n.length >= 2 &&
          n.every(function (e) {
            return b.test(e) && !e.startsWith(p);
          }) &&
          v.test(n[n.length - 1]) &&
          !_.some(function (e) {
            return t === e || t.endsWith("." + e);
          });
      return r ? t : null;
    }
    function T(e, t) {
      var n = o("WAWebHatchJsonReaders").readArray(e, t);
      if (n == null || n.length === 0 || n.length > d) return null;
      var r = [];
      for (var a of n) {
        var i = o("WATypeUtils").isString(a) ? I(a) : null;
        if (i == null) return null;
        r.push(i);
      }
      return r;
    }
    function D(e) {
      var t = o("WAWebHatchJsonReaders").readArray(e, "token_proxy"),
        n = (t == null ? void 0 : t.length) === 1 ? t[0] : null,
        r = o("WAWebHatchJsonReaders").readString(n, "field"),
        a = x(o("WAWebHatchJsonReaders").readField(n, "placement"));
      return r != null && h.test(r) && a != null
        ? { field: r, placement: a }
        : null;
    }
    function x(e) {
      if (e === "bearer_header") return "bearer_header";
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = Object.keys(e),
        n =
          t.length === 1
            ? o("WAWebHatchJsonReaders").readString(e, t[0])
            : null;
      return n != null ? $(t[0], n) : null;
    }
    function $(e, t) {
      return e === "custom_header"
        ? y.test(t)
          ? { custom_header: t }
          : null
        : e === "url_path_segment"
          ? P(t)
            ? { url_path_segment: t }
            : null
          : e === "query_param" && C.test(t)
            ? { query_param: t }
            : null;
    }
    function P(e) {
      return (
        e.startsWith("/") &&
        !e.startsWith("//") &&
        e.includes("{}") &&
        e.length <= m &&
        !f.some(function (t) {
          return e.includes(t);
        })
      );
    }
    function N(t) {
      var n = t.startsWith(e) ? t.slice(e.length) : t;
      return n.toLowerCase().replace(/-/g, "_");
    }
    ((l.HATCH_CUSTOM_CONNECTOR_NAME_PREFIX = e),
      (l.decodeHatchCustomConnectorRequest = R),
      (l.decodeHatchCustomConnectorSpec = L),
      (l.isHatchCustomConnectorName = E),
      (l.isHatchCustomConnectorHost = k),
      (l.normalizeHatchCustomConnectorHost = I),
      (l.readHatchCustomConnectorHosts = T));
  },
  98,
);
