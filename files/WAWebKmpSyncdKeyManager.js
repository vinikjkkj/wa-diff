__d(
  "WAWebKmpSyncdKeyManager",
  [
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
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        getCollectionsWaitingForKeys: function () {
          return Promise.resolve(
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
            async function () {
              var e = await o("WAWebSyncdKeyManagement").getActiveKey(!0);
              return o("WAWebKmpSyncdMutationKeyIdUtils").toKmpSyncdMutationKey(
                e.keyId,
                e.keyData,
              );
            },
          );
        },
        resolveKeys: function (n, a) {
          return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
            async function () {
              var t = new Set(),
                i = await Promise.all(
                  o("WAWebKmpKotlinUtils")
                    .asSet(a)
                    .keys()
                    .map(async function (e) {
                      var n = o("WAWebKmpSyncdMutationKeyIdUtils").toSyncdKeyId(
                          e,
                        ),
                        r = await o("WAWebSyncdKeyCache").getKeyData(n);
                      return (
                        r ||
                          t.add(o("WAWebSyncdCryptoUtils").syncKeyIdToHex(n)),
                        [
                          e,
                          r
                            ? o(
                                "WAWebKmpSyncdMutationKeyIdUtils",
                              ).toKmpSyncdMutationKey(n, r)
                            : null,
                        ]
                      );
                    }),
                );
              if (t.size > 0) {
                await o("WAWebSyncdHandleMissingKeys").handleMissingKeys(t);
                var l = o(
                  "WAWebKmpSyncdCollectionNameUtils",
                ).asWebCollectionName(n);
                (r(
                  "WAWebSyncdCollectionsStateMachine",
                ).moveCollectionsToBlocked([l]),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: kmp: marked ",
                        " as blocked due to ",
                        " missing keys",
                      ])),
                    l,
                    t.size,
                  ));
              }
              var s = await o("WAWebSyncdKeyManagement").getActiveKey(!0);
              return o("WAWebKmpKotlinUtils").asKtMap(new Map(i));
            },
          );
        },
      };
    l.syncdKeyManager = s;
  },
  98,
);
