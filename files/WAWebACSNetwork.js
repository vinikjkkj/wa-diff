__d(
  "WAWebACSNetwork",
  [
    "WABase64",
    "WALogger",
    "WAWebABProps",
    "WAWebACSClient",
    "WAWebCRUDOperationsACSTokens",
    "WAWebCanonicalUtils",
    "WAWebHttpExtendedFetch",
    "WAWebModelStorageUtils",
    "WAWebRedeemACSCredential",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(e) {
      var t = e.data,
        n = e.project,
        r = e.url,
        a = await u(n, t);
      return o("WAWebHttpExtendedFetch").extendedFetch(r, {
        body: a,
        method: "POST",
      });
    }
    async function u(t, n) {
      if (d(t))
        try {
          return await m(t, n);
        } catch (n) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "ACS GraphQL issuance failed for ",
                  ", using legacy",
                ])),
              t,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("acs-graphql-issuance-failed");
        }
      var a = await o("WAWebRedeemACSCredential").redeemACSCredential(t);
      if (a == null) throw r("err")("Failed to redeem ACS credential");
      return (n.set("acs_token", a), n.set("acs_project", t), n);
    }
    async function c(e) {
      (o("WAWebACSClient").clearAPTClientStorage(e),
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["acs-tokens"], function (t) {
            var n = t[0];
            return o(
              "WAWebCRUDOperationsACSTokens",
            ).deleteAllACSTokensByProject(e, n);
          }));
    }
    function d(e) {
      return o("WAWebCanonicalUtils").isCanonicalPresent()
        ? o("WAWebABProps")
            .getABPropConfigValue("acs_graphql_issuance_projects")
            .split(",")
            .some(function (t) {
              return t.trim() === e;
            })
        : !1;
    }
    async function m(e, t) {
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
    ((l.fetchWithACSCredential = s),
      (l.addACSCredential = u),
      (l.invalidateACSCredential = c));
  },
  98,
);
