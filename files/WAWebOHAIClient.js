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
    async function p(e) {
      var t = e.headers,
        n = e.payload,
        r = e.project,
        a = e.url,
        i = y(),
        l = await h(),
        s = o("WAWebABProps").getABPropConfigValue(
          "wa_ohai_new_vip_header_enabled",
        ),
        u = await g({ project: r, url: a, payload: n, headers: t }),
        c = await f({
          forcedUserAgent: s ? m : null,
          newVipEnabled: s,
          ohaiKeyConfig: l,
          proxyUrl: i,
          request: u,
        }),
        d = c.response;
      return d;
    }
    async function _(e) {
      var t = e.headers,
        n = e.url,
        r = y(),
        o = await h();
      return f({
        forcedUserAgent: m,
        newVipEnabled: !0,
        ohaiKeyConfig: o,
        proxyUrl: r,
        request: new Request(n, { headers: t, method: "GET" }),
      });
    }
    async function f(e) {
      var t = e.forcedUserAgent,
        n = e.newVipEnabled,
        r = e.ohaiKeyConfig,
        a = e.proxyUrl,
        i = e.request,
        l = await o("OhaiClient").encapsulateRequest(r, i, !0, t),
        s = l.ctx,
        u = l.enc,
        m = l.encapsulatedRequest,
        p = { "Content-Type": "message/ohttp-req" };
      n && (p[c] = d);
      var _ = await o("WAWebHttpExtendedFetch").extendedFetch(a.href, {
        body: m,
        headers: p,
        method: "POST",
      });
      if (!_.ok) return { hop: "relay", response: _ };
      var f = await _.arrayBuffer(),
        g = new Uint8Array(f);
      return {
        hop: "origin",
        response: await o("OhaiClient").decapsulateResponse(s, u, g),
      };
    }
    async function g(e) {
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
    async function h() {
      var t = await o("WAWebOHAIKeyConfigProvider").provideOHAIKeyConfig();
      if (t == null)
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
      return t;
    }
    function y() {
      var e = o("WAWebABProps").getABPropConfigValue("music_ohai_proxy_url"),
        t = new URL(e);
      return (C(t), t);
    }
    function C(e) {
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
    ((l.fetchOHAI = p), (l.fetchOHAIGet = _));
  },
  98,
);
