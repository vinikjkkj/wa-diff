__d(
  "WAWebACSNetwork",
  [
    "WABase64",
    "WAWebACSClient",
    "WAWebCanonicalUtils",
    "WAWebHttpExtendedFetch",
    "WAWebRedeemACSCredential",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.data,
        n = e.project,
        r = e.url,
        a = await s(n, t);
      return o("WAWebHttpExtendedFetch").extendedFetch(r, {
        body: a,
        method: "POST",
      });
    }
    async function s(e, t) {
      if (
        r("gkx")("22267") &&
        o("WAWebCanonicalUtils").isCurrentUserLoggedIn()
      ) {
        var n = await o("WAWebACSClient").redeemWithAPTClient(e);
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
      var a = await o("WAWebRedeemACSCredential").redeemACSCredential(e);
      if (a == null) throw r("err")("Failed to redeem ACS credential");
      return (t.set("acs_token", a), t.set("acs_project", e), t);
    }
    ((l.fetchWithACSCredential = e), (l.addACSCredential = s));
  },
  98,
);
