__d(
  "WAWebACSNetwork",
  [
    "CurrentUser",
    "WABase64",
    "WAWebACSClient",
    "WAWebHttpExtendedFetch",
    "WAWebRedeemACSCredential",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data,
            n = e.project,
            r = e.url,
            a = yield u(n, t);
          return o("WAWebHttpExtendedFetch").extendedFetch(r, {
            body: a,
            method: "POST",
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (r("gkx")("22267") && r("CurrentUser").isLoggedIn()) {
            var n = yield o("WAWebACSClient").redeemWithAPTClient(e);
            return (
              t.set(
                "acs_token",
                o("WABase64").encodeB64UrlSafe(n.credential, !0) +
                  "+" +
                  o("WABase64").encodeB64UrlSafe(n.tag, !0),
              ),
              t.set("acs_project", e),
              t.set("acs_config_id", n.serverConfigId),
              t
            );
          }
          var a = yield o("WAWebRedeemACSCredential").redeemACSCredential(e);
          if (a == null) throw r("err")("Failed to redeem ACS credential");
          return (t.set("acs_token", a), t.set("acs_project", e), t);
        })),
        c.apply(this, arguments)
      );
    }
    ((l.fetchWithACSCredential = e), (l.addACSCredential = u));
  },
  98,
);
