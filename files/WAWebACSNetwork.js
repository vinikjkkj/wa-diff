__d(
  "WAWebACSNetwork",
  [
    "WABase64",
    "WALogger",
    "WAWebABProps",
    "WAWebACSClient",
    "WAWebCanonicalUtils",
    "WAWebHttpExtendedFetch",
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
          if (m(t))
            try {
              return yield p(t, n);
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
      return o("WAWebCanonicalUtils").isCanonicalPresent()
        ? o("WAWebABProps")
            .getABPropConfigValue("acs_graphql_issuance_projects")
            .split(",")
            .some(function (t) {
              return t.trim() === e;
            })
        : !1;
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        _.apply(this, arguments)
      );
    }
    ((l.fetchWithACSCredential = s), (l.addACSCredential = c));
  },
  98,
);
