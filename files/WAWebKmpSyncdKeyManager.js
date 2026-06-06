__d(
  "WAWebKmpSyncdKeyManager",
  [
    "Promise",
    "WALogger",
    "WAWebKmpBridgeResultWrappers",
    "WAWebKmpKotlinUtils",
    "WAWebKmpSyncdCollectionNameUtils",
    "WAWebKmpSyncdMutationKeyIdUtils",
    "WAWebSyncdCollectionsStateMachine",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdHandleMissingKeys",
    "WAWebSyncdKeyCache",
    "WAWebSyncdKeyManagement",
    "asyncToGeneratorRuntime",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        getCollectionsWaitingForKeys: function () {
          return (s || (s = n("Promise"))).resolve(
            o("wa-kmp-syncd-engine-api").KmpResult.success(
              o("WAWebKmpKotlinUtils").asKtSet(
                new Set(
                  r("WAWebSyncdCollectionsStateMachine")
                    .getCollectionsInStateBlocked()
                    .map(function (e) {
                      return o(
                        "WAWebKmpSyncdCollectionNameUtils",
                      ).asKmpSyncdCollectionName(e);
                    }),
                ),
              ),
            ),
          );
        },
        resolveActiveKey: function () {
          return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o("WAWebSyncdKeyManagement").getActiveKey(!0);
              return o("WAWebKmpSyncdMutationKeyIdUtils").toKmpSyncdMutationKey(
                e.keyId,
                e.keyData,
              );
            }),
          );
        },
        resolveKeys: function (a, i) {
          return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = new Set(),
                l = yield (s || (s = n("Promise"))).all(
                  o("WAWebKmpKotlinUtils")
                    .asSet(i)
                    .keys()
                    .map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            var n = o(
                                "WAWebKmpSyncdMutationKeyIdUtils",
                              ).toSyncdKeyId(e),
                              r = yield o("WAWebSyncdKeyCache").getKeyData(n);
                            return (
                              r ||
                                t.add(
                                  o("WAWebSyncdCryptoUtils").syncKeyIdToHex(n),
                                ),
                              [
                                e,
                                r
                                  ? o(
                                      "WAWebKmpSyncdMutationKeyIdUtils",
                                    ).toKmpSyncdMutationKey(n, r)
                                  : null,
                              ]
                            );
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                );
              if (t.size > 0) {
                yield o("WAWebSyncdHandleMissingKeys").handleMissingKeys(t);
                var u = o(
                  "WAWebKmpSyncdCollectionNameUtils",
                ).asWebCollectionName(a);
                (r(
                  "WAWebSyncdCollectionsStateMachine",
                ).moveCollectionsToBlocked([u]),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: kmp: marked ",
                        " as blocked due to ",
                        " missing keys",
                      ])),
                    u,
                    t.size,
                  ));
              }
              var c = yield o("WAWebSyncdKeyManagement").getActiveKey(!0);
              return o("WAWebKmpKotlinUtils").asKtMap(new Map(l));
            }),
          );
        },
      };
    l.syncdKeyManager = u;
  },
  98,
);
