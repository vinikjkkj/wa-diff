__d(
  "WAWebFetchOHAIKeyConfigJob",
  ["WATimeUtils", "WAWebFetchOHAIKeyConfigJobQuery.graphql", "WAWebMexClient"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("WAWebFetchOHAIKeyConfigJobQuery.graphql"));
    async function u() {
      var e,
        t = await o("WAWebMexClient").fetchQuery(s, {}),
        n = (e = t.xwa2_ohai_configurations) == null ? void 0 : e.ohai_configs;
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
    }
    l.mexFetchOHAIKeyConfig = u;
  },
  98,
);
