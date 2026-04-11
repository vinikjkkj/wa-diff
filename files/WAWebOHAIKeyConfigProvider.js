__d(
  "WAWebOHAIKeyConfigProvider",
  [
    "Hpke",
    "WAHex",
    "WALogger",
    "WATimeUtils",
    "WAWebFetchOHAIKeyConfigJob",
    "WAWebNewsletterRpcUtils",
    "WAWebOHAIUserPrefs",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 3600;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield p();
          if (t == null)
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[OHAI] Failed to retrieve OHAI key",
                    ])),
                )
                .sendLogs("ohai-retrieve-failed"),
              null
            );
          var n = o("Hpke").AeadID.cast(t.aeadId),
            r = o("Hpke").KdfID.cast(t.kdfId),
            a = o("Hpke").KemID.cast(t.kemId),
            i = t.keyId;
          if (n == null || r == null || a == null || i == null)
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[OHAI] Failed to cast OHAI parameters",
                    ])),
                )
                .sendLogs("ohai-cast-failed"),
              null
            );
          try {
            return {
              aeadId: n,
              kdfId: r,
              kemId: a,
              keyId: i,
              expirationDate: t.expirationDate,
              publicKey: new Uint8Array(o("WAHex").parseHex(t.publicKey)),
            };
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[OHAI] Failed to parse OHAI key config",
                    ])),
                )
                .sendLogs("ohai-parse-failed"),
              null
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebOHAIUserPrefs").getOHAIKeyConfig();
          if (e != null && f(e)) return e;
          var t = yield o("WAWebNewsletterRpcUtils").runWithBackoff(
            function () {
              return o("WAWebFetchOHAIKeyConfigJob").mexFetchOHAIKeyConfig();
            },
          );
          return (t != null && o("WAWebOHAIUserPrefs").setOHAIKeyConfig(t), t);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return e.expirationDate - c > o("WATimeUtils").unixTime();
    }
    l.provideOHAIKeyConfig = d;
  },
  98,
);
