__d(
  "WAWebFetchOHAIKeyConfigJob",
  [
    "WATimeUtils",
    "WAWebFetchOHAIKeyConfigJobQuery.graphql",
    "WAWebMexClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("WAWebFetchOHAIKeyConfigJobQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield o("WAWebMexClient").fetchQuery(s, {}),
            n =
              (e = t.xwa2_ohai_configurations) == null
                ? void 0
                : e.ohai_configs;
          return n == null
            ? null
            : n.reduce(function (e, t) {
                var n = t.expiration_date,
                  r = t.last_updated_time,
                  a = Number.parseInt(n, 10),
                  i = Number.parseInt(r, 10);
                return !Number.isSafeInteger(a) ||
                  !Number.isSafeInteger(i) ||
                  (e != null && e.expirationDate > a)
                  ? e
                  : {
                      aeadId: t.aead_id,
                      expirationDate: o("WATimeUtils").castToUnixTime(a),
                      kdfId: t.kdf_id,
                      kemId: t.kem_id,
                      keyId: t.key_id,
                      lastUpdatedTime: o("WATimeUtils").castToUnixTime(i),
                      publicKey: t.public_key,
                    };
              }, null);
        })),
        c.apply(this, arguments)
      );
    }
    l.mexFetchOHAIKeyConfig = u;
  },
  98,
);
