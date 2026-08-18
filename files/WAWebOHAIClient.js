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
      u = new Set(["https://meta-ohttp-relay-prod.fastly-edge.com/"]),
      c = "x-ohttp-new-vip",
      d = "1",
      m = "WhatsApp/Web";
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var u = o("WAWebABProps").getABPropConfigValue(
              "wa_ohai_new_vip_header_enabled",
            ),
            p = yield f({ project: a, url: i, payload: n, headers: t }),
            _ = yield o("OhaiClient").encapsulateRequest(
              l,
              p,
              !0,
              u ? m : null,
            ),
            g = _.ctx,
            y = _.enc,
            C = _.encapsulatedRequest,
            b = h(),
            v = { "Content-Type": "message/ohttp-req" };
          u && (v[c] = d);
          var S = yield o("WAWebHttpExtendedFetch").extendedFetch(b, {
            body: C,
            headers: v,
            method: "POST",
          });
          if (!S.ok) return S;
          var R = yield S.arrayBuffer(),
            L = new Uint8Array(R);
          return o("OhaiClient").decapsulateResponse(g, y, L);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        g.apply(this, arguments)
      );
    }
    function h() {
      var e = o("WAWebABProps").getABPropConfigValue("music_ohai_proxy_url"),
        t = new URL(e);
      return (y(t), t);
    }
    function y(t) {
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
    l.fetchOHAI = p;
  },
  98,
);
