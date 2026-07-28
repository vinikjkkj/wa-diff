__d(
  "WAWebMetaAiWaffleAuthToken",
  [
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1,
      c = 1,
      d = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "meta_ai_metering",
      );
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t;
          try {
            t = yield d.getAccountLinkingData();
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Meta AI auth token: failed to read account linking data",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("waffle-metaai-auth-token-db-read-failed", {
                  sampling: 0.01,
                }),
              null
            );
          }
          if (t == null) return null;
          var n = t,
            a = n.accesstoken,
            i = n.linkState;
          if (
            i !== o("WAWebAccountLinkingConstants").AccountLinkState.Active ||
            a == null ||
            a === ""
          )
            return null;
          try {
            var l = yield o(
              "WAWebAccountLinkingCryptoUtils",
            ).wrapPayloadWithRSAAESEncryption({
              access_token: a,
              op: u,
              timestamp: Math.floor(Date.now() / 1e3),
              version: c,
            });
            return o(
              "WAWebAccountLinkingCryptoUtils",
            ).serializeWaffleEncryptedEnvelope(l);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Meta AI auth token: failed to build encrypted blob",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("waffle-metaai-auth-token-encrypt-failed", {
                  sampling: 0.01,
                }),
              null
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.buildMetaAiWaffleAuthTokenBlob = m;
  },
  98,
);
