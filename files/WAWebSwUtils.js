__d(
  "WAWebSwUtils",
  ["WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      var r = n;
      if (typeof e == "string") {
        ((r = r || {}), (r.credentials = "same-origin"));
        var o = t != null ? t : e;
        return (u(o), new Request(o, r));
      }
      var a = t != null ? t : e.url;
      return (
        u(a),
        new Request(a || e.url, {
          method: r.method === void 0 ? e.method : r.method,
          headers: r.headers === void 0 ? e.headers : r.headers,
          mode: r.mode === void 0 ? e.mode : r.mode,
          credentials: "same-origin",
          cache: r.cache === void 0 ? e.cache : r.cache,
          redirect: r.redirect === void 0 ? e.redirect : r.redirect,
          integrity: r.integrity === void 0 ? e.integrity : r.integrity,
        })
      );
    }
    function u(t) {
      var n = new URL(t),
        a = n.host,
        i = n.protocol;
      if (i !== "https:" || !/\.whatsapp\.(net|com)(:\d+)?$/.test(a))
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Unexpected url",
                ])),
            )
            .sendLogs("SW: Potential XSS attack"),
          r("err")("URL is not of allowed host or protocol")
        );
    }
    l.manuallyCloneRequest = s;
  },
  98,
);
