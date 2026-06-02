__d(
  "WAWebOHAIClient",
  [
    "OhaiClient",
    "WALogger",
    "WAWebABProps",
    "WAWebACSNetwork",
    "WAWebHttpExtendedFetch",
    "WAWebOHAIKeyConfigProvider",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set(["https://meta-ohttp-relay-prod.fastly-edge.com/"]);
    async function c(t) {
      var n = t.headers,
        a = t.payload,
        i = t.project,
        l = t.url,
        s = await o("WAWebOHAIKeyConfigProvider").provideOHAIKeyConfig();
      if (s == null)
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "No OHAI key config available",
                ])),
            )
            .sendLogs("failed-to-fetch-ohai-key")
            .tags("ohai"),
          r("err")("No OHAI key config available")
        );
      var u = await d({ project: i, url: l, payload: a, headers: n }),
        c = await o("OhaiClient").encapsulateRequest(s, u, !0),
        p = c.ctx,
        _ = c.enc,
        f = c.encapsulatedRequest,
        g = m(),
        h = await o("WAWebHttpExtendedFetch").extendedFetch(g, {
          body: f,
          headers: { "Content-Type": "message/ohttp-req" },
          method: "POST",
        });
      if (!h.ok) return h;
      var y = await h.arrayBuffer(),
        C = new Uint8Array(y);
      return o("OhaiClient").decapsulateResponse(p, _, C);
    }
    async function d(e) {
      var t = e.headers,
        n = e.payload,
        r = e.project,
        a = e.url;
      if (n == null || r == null) return new Request(a);
      var i = t ? new Headers(t) : new Headers();
      i.append("x-acs-project-name", r);
      var l = await o("WAWebACSNetwork").addACSCredential(r, n);
      return new Request(a, { body: l, method: "POST", headers: i });
    }
    function m() {
      var e = o("WAWebABProps").getABPropConfigValue("music_ohai_proxy_url"),
        t = new URL(e);
      return (p(t), t);
    }
    function p(e) {
      if (!u.has(e.href))
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Invalid OHAI proxy URL: ",
                  "",
                ])),
              e.href,
            )
            .sendLogs("ohai-invalid-proxy-" + e.href)
            .tags("ohai"),
          r("err")("Invalid OHAI proxy URL")
        );
    }
    l.fetchOHAI = c;
  },
  98,
);
