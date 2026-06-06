__d(
  "WAWebOHAIClient",
  [
    "OhaiClient",
    "WALogger",
    "WAWebABProps",
    "WAWebACSNetwork",
    "WAWebHttpExtendedFetch",
    "WAWebOHAIKeyConfigProvider",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set(["https://meta-ohttp-relay-prod.fastly-edge.com/"]);
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.headers,
            n = e.payload,
            a = e.project,
            i = e.url,
            l = yield o("WAWebOHAIKeyConfigProvider").provideOHAIKeyConfig();
          if (l == null)
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "No OHAI key config available",
                    ])),
                )
                .sendLogs("failed-to-fetch-ohai-key")
                .tags("ohai"),
              r("err")("No OHAI key config available")
            );
          var u = yield m({ project: a, url: i, payload: n, headers: t }),
            c = yield o("OhaiClient").encapsulateRequest(l, u, !0),
            d = c.ctx,
            p = c.enc,
            f = c.encapsulatedRequest,
            g = _(),
            h = yield o("WAWebHttpExtendedFetch").extendedFetch(g, {
              body: f,
              headers: { "Content-Type": "message/ohttp-req" },
              method: "POST",
            });
          if (!h.ok) return h;
          var y = yield h.arrayBuffer(),
            C = new Uint8Array(y);
          return o("OhaiClient").decapsulateResponse(d, p, C);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.headers,
            n = e.payload,
            r = e.project,
            a = e.url;
          if (n == null || r == null) return new Request(a);
          var i = t ? new Headers(t) : new Headers();
          i.append("x-acs-project-name", r);
          var l = yield o("WAWebACSNetwork").addACSCredential(r, n);
          return new Request(a, { body: l, method: "POST", headers: i });
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      var e = o("WAWebABProps").getABPropConfigValue("music_ohai_proxy_url"),
        t = new URL(e);
      return (f(t), t);
    }
    function f(t) {
      if (!u.has(t.href))
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Invalid OHAI proxy URL: ",
                  "",
                ])),
              t.href,
            )
            .sendLogs("ohai-invalid-proxy-" + t.href)
            .tags("ohai"),
          r("err")("Invalid OHAI proxy URL")
        );
    }
    l.fetchOHAI = c;
  },
  98,
);
