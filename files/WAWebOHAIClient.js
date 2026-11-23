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
      u = new Set(["https://meta-ohttp-relay-prod.fastly-edge.com/"]),
      c = "x-ohttp-new-vip",
      d = "1",
      m = "WhatsApp/Web";
    async function p(t) {
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
      var u = o("WAWebABProps").getABPropConfigValue(
          "wa_ohai_new_vip_header_enabled",
        ),
        p = await _({ project: i, url: l, payload: a, headers: n }),
        g = await o("OhaiClient").encapsulateRequest(s, p, !0, u ? m : null),
        h = g.ctx,
        y = g.enc,
        C = g.encapsulatedRequest,
        b = f(),
        v = { "Content-Type": "message/ohttp-req" };
      u && (v[c] = d);
      var S = await o("WAWebHttpExtendedFetch").extendedFetch(b, {
        body: C,
        headers: v,
        method: "POST",
      });
      if (!S.ok) return S;
      var R = await S.arrayBuffer(),
        L = new Uint8Array(R);
      return o("OhaiClient").decapsulateResponse(h, y, L);
    }
    async function _(e) {
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
    function f() {
      var e = o("WAWebABProps").getABPropConfigValue("music_ohai_proxy_url"),
        t = new URL(e);
      return (g(t), t);
    }
    function g(e) {
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
    l.fetchOHAI = p;
  },
  98,
);
