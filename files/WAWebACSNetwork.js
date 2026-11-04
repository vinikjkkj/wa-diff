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
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data,
            n = e.project,
            r = e.url,
            a = yield c(n, t);
          return o("WAWebHttpExtendedFetch").extendedFetch(r, {
            body: a,
            method: "POST",
          });
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (_(t))
            try {
              return yield f(t, n);
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
          var a = yield o("WAWebRedeemACSCredential").redeemACSCredential(t);
          if (a == null) throw r("err")("Failed to redeem ACS credential");
          return (n.set("acs_token", a), n.set("acs_project", t), n);
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
          (o("WAWebACSClient").clearAPTClientStorage(e),
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["acs-tokens"], function (t) {
                var n = t[0];
                return o(
                  "WAWebCRUDOperationsACSTokens",
                ).deleteAllACSTokensByProject(e, n);
              }));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return o("WAWebCanonicalUtils").isCanonicalPresent()
        ? o("WAWebABProps")
            .getABPropConfigValue("acs_graphql_issuance_projects")
            .split(",")
            .some(function (t) {
              return t.trim() === e;
            })
        : !1;
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        })),
        g.apply(this, arguments)
      );
    }
    ((l.fetchWithACSCredential = s),
      (l.addACSCredential = c),
      (l.invalidateACSCredential = m));
  },
  98,
);
