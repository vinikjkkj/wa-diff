__d(
  "WALoadPreKeysApi",
  [
    "WADbPrekeyTxns",
    "WADbSignal",
    "WADbSignedPrekeyTxns",
    "WALoggerTag",
    "WASignalDB",
    "WASignalSignatures",
    "WATagsLogger",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS([r("WALoggerTag").SignedPrekey]),
      d = function (n) {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["identity", "meta", "prekey", "prekeyGeneration", "signedPrekey"],
            "readonly",
            async function (t) {
              var a = await o("WADbSignedPrekeyTxns").getLatestSignedPreKey(
                t.stores,
              );
              if (!a.success) {
                var i;
                throw (
                  c.ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to get latest signed prekey",
                      ])),
                  ),
                  (i = a.error) != null
                    ? i
                    : r("err")("Failed to get latest signed prekey")
                );
              }
              var l = o("WASignalSignatures").deserializeSignedPreKey(a.value);
              if (l == null)
                throw (
                  c.ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to deserialize signed prekey",
                      ])),
                  ),
                  r("err")("Failed to deserialize signed prekey")
                );
              var d =
                n != null
                  ? n
                  : await t.stores.meta
                      .get(o("WADbSignal").MetaKeysEnum.lastPrekeyGenerationId)
                      .then(function (e) {
                        return e == null
                          ? void 0
                          : e.value.lastPrekeyGenerationId;
                      });
              if (d == null)
                throw (
                  c.ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "No last prekey generation id",
                      ])),
                  ),
                  r("err")("No last prekey generation id")
                );
              return o("WADbPrekeyTxns")
                .getPrekeysForGeneration(t.stores, d)
                .then(function (e) {
                  return { preKeys: e, signedPreKey: l };
                });
            },
            o("WASignalDB").signalOp("loadPreKeys"),
          );
      };
    l.loadPreKeys = d;
  },
  98,
);
