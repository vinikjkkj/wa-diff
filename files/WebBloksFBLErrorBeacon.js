__d(
  "WebBloksFBLErrorBeacon",
  [],
  function (t, n, r, o, a, i) {
    var e =
        /\b([\w.-]*(?:access_token|signed_request|code|state|refresh_token|password|client_secret|nonce)[\w.-]*)=[^&\s]*/gi,
      l = /\bhttps?:\/\/\S+/gi,
      s = 200,
      u = 4,
      c =
        "https://www.facebook.com/platform/scribe_endpoint.php/?c=jssdk_error&m=",
      d = 2e3,
      m = new Set(),
      p = 1e4;
    function _(t) {
      var n;
      if (t instanceof Error) n = t.message;
      else if (typeof t == "string") n = t;
      else
        try {
          n = String(t);
        } catch (e) {
          return "unknown";
        }
      if (!n) return "unknown";
      var r = n.replace(l, "[URL_REDACTED]").replace(e, "$1=[REDACTED]");
      return r.length > s ? r.substring(0, s) + "\u2026" : r;
    }
    function f(e, t) {
      if (typeof e == "string") return _(e);
      if (e == null || typeof e != "object") return e;
      if (t >= u) return "[DEPTH_EXCEEDED]";
      if (Array.isArray(e))
        return e.map(function (e) {
          return f(e, t + 1);
        });
      var n = {};
      for (var r of Object.entries(e)) {
        var o = r[0],
          a = r[1];
        n[o] = f(a, t + 1);
      }
      return n;
    }
    function g(e) {
      var t = {};
      for (var n of Object.entries(e)) {
        var r = n[0],
          o = n[1];
        t[r] = f(o, 1);
      }
      return t;
    }
    function h(e) {
      var t = _(e.error),
        n =
          e.extra != null
            ? babelHelpers.extends({}, e, { error: t, extra: g(e.extra) })
            : babelHelpers.extends({}, e, { error: t }),
        r;
      try {
        r = JSON.stringify(n);
      } catch (e) {
        r = JSON.stringify({ error: t });
      }
      var o = c + encodeURIComponent(r);
      o.length > d &&
        (o =
          c +
          encodeURIComponent(
            JSON.stringify({
              error: t.substring(0, s),
              extra: { truncated: !0 },
            }),
          ));
      var a = new Image();
      m.add(a);
      var i = window.setTimeout(function () {
          m.delete(a);
        }, p),
        l = function () {
          (window.clearTimeout(i), m.delete(a));
        };
      ((a.onload = l),
        (a.onerror = l),
        (a.crossOrigin = "anonymous"),
        (a.src = o));
    }
    ((i.webBloksFBLSanitizeLogMessage = _), (i.webBloksFBLErrorBeacon = h));
  },
  66,
);
