__d(
  "WAWebKmpMutationProcessorStore",
  [
    "WAArrayUtils",
    "WACryptoUtils",
    "WALogger",
    "WASyncdKeyManagementUtils",
    "WAWebGetCollectionVersion",
    "WAWebGetPendingMutation",
    "WAWebGetSyncAction",
    "WAWebKmpBridgeResultWrappers",
    "WAWebKmpKotlinUtils",
    "WAWebKmpSyncdCollectionNameUtils",
    "WAWebKmpSyncdMutationUtils",
    "WAWebSyncdCollectionsStateMachine",
    "err",
    "sortBy",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return new (o(
        "wa-kmp-syncd-engine-api",
      ).KmpSyncdInterfaceError.KmpSyncdStoreError)(
        String(e.message),
        e.name,
        null,
      );
    }
    function u(e) {
      return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
        async function () {
          var t = await o(
            "WAWebGetCollectionVersion",
          ).getCollectionVersionLtHashInTransaction(
            o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(e),
          );
          return t != null
            ? o("WAWebKmpKotlinUtils").asKmpByteArray(new Uint8Array(t))
            : o("WAWebKmpKotlinUtils").asKmpByteArray(new Uint8Array(0));
        },
        s,
      );
    }
    function c(e) {
      return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
        async function () {
          var t = await o(
            "WAWebGetCollectionVersion",
          ).getCollectionVersionInTransaction(
            o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(e),
          );
          return (t == null ? void 0 : t.version) != null
            ? o("wa-kmp-syncd-engine-api").KmpLong.fromNumber(t.version)
            : null;
        },
        s,
      );
    }
    function d(e, t) {
      return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
        async function () {
          var n = o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(e),
            r = await o(
              "WAWebGetSyncAction",
            ).getSyncActionsByCollectionAndIndexesInTransaction(n, t),
            a = new Map(
              r.map(function (e) {
                return [
                  e.index,
                  o("WAWebKmpKotlinUtils").asKmpByteArray(
                    new Uint8Array(e.valueMac),
                  ),
                ];
              }),
            );
          return o("WAWebKmpKotlinUtils").asKtMap(a);
        },
        s,
      );
    }
    var m = {
        getDirtyCollections: function () {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            async function () {
              var e = new Set(
                  r(
                    "WAWebSyncdCollectionsStateMachine",
                  ).getCollectionsInStateDirty(),
                ),
                t = new Set(
                  e
                    .keys()
                    .map(
                      o("WAWebKmpSyncdCollectionNameUtils")
                        .asKmpSyncdCollectionName,
                    ),
                );
              return o("WAWebKmpKotlinUtils").asKtSet(t);
            },
            s,
          );
        },
        getCollectionVersion: c,
        getAllCollectionVersions: function () {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            async function () {
              var e = await o(
                  "WAWebGetCollectionVersion",
                ).getAllCollectionVersionsInTransaction(),
                t = e.map(function (e) {
                  var t = e.version,
                    n = o(
                      "WAWebKmpSyncdCollectionNameUtils",
                    ).asKmpSyncdCollectionName(e.collection);
                  return t != null
                    ? [n, o("wa-kmp-syncd-engine-api").KmpLong.fromNumber(t)]
                    : null;
                });
              return o("WAWebKmpKotlinUtils").asKtMap(
                new Map(t.filter(Boolean)),
              );
            },
            s,
          );
        },
        getCollectionLtHash: u,
        getOldestStoredMutationsExcludingKeyIdAndIndices: function (
          t,
          n,
          a,
          i,
        ) {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            async function () {
              var e = await o(
                  "WAWebGetSyncAction",
                ).getSyncActionsByCollectionsInTransaction([
                  o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(t),
                ]),
                l = o("WAWebKmpKotlinUtils").asSet(a),
                s = e.filter(function (e) {
                  return (
                    !l.has(e.index) &&
                    !o("WACryptoUtils").arrayBuffersEqual(
                      e.keyId,
                      o("WAWebKmpKotlinUtils").asUint8Array(n.bytes).buffer,
                    )
                  );
                }),
                u = r("sortBy")(s, function (e) {
                  return o("WASyncdKeyManagementUtils").getKeyEpoch(e.keyId);
                }),
                c = u.slice(0, i);
              return o("WAWebKmpKotlinUtils").asKtList(
                c.map(o("WAWebKmpSyncdMutationUtils").asKmpSyncdMutation),
              );
            },
            s,
          );
        },
        getStoredMutationWithIndex: function (t) {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            async function () {
              var e =
                await o("WAWebGetSyncAction").getSyncActionInTransaction(t);
              return e == null
                ? null
                : o("WAWebKmpSyncdMutationUtils").asKmpSyncdMutation(e);
            },
            s,
          );
        },
        getAllPendingMutationsByCollection: function () {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            async function () {
              var e = await o(
                  "WAWebGetPendingMutation",
                ).getAllSyncPendingMutationsInTransaction(),
                t = o("WAArrayUtils").groupBy(e, function (e) {
                  return e.collection;
                });
              return o("WAWebKmpKotlinUtils").asKtMapTransform(
                t,
                o("WAWebKmpSyncdCollectionNameUtils").asKmpSyncdCollectionName,
                function (e) {
                  return o("WAWebKmpKotlinUtils").asKtList(
                    e.map(
                      o("WAWebKmpSyncdMutationUtils").asPendingKmpSyncdMutation,
                    ),
                  );
                },
              );
            },
            s,
          );
        },
        getLatestMutationsMac: d,
        getPendingMutationsForCriticalBlockCollectionForBootstrap:
          async function () {
            return o("wa-kmp-syncd-engine-api").KmpResult.success(
              o("WAWebKmpKotlinUtils").asKtList([]),
            );
          },
        getContactMutationsForBootstrap: async function (t) {
          return o("wa-kmp-syncd-engine-api").KmpResult.success(
            o("WAWebKmpKotlinUtils").asKtList([]),
          );
        },
      },
      p = {
        getAllLtHashes: function () {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            async function () {
              var e = await o(
                  "WAWebGetCollectionVersion",
                ).getAllCollectionVersionsInTransaction(),
                t = e.map(function (e) {
                  return [
                    o(
                      "WAWebKmpSyncdCollectionNameUtils",
                    ).asKmpSyncdCollectionName(e.collection),
                    o("WAWebKmpKotlinUtils").asKmpByteArray(
                      new Uint8Array(e.ltHash),
                    ),
                  ];
                });
              return o("WAWebKmpKotlinUtils").asKtMap(new Map(t));
            },
            s,
          );
        },
        getCollectionLtHash: u,
        getCollectionVersion: c,
        getLatestMutationsMac: d,
        getMutationMacsGroupByCollectionName: function () {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            async function () {
              var e = await Promise.all(
                o("wa-kmp-syncd-engine-api")
                  .KmpSyncdCollectionName.values()
                  .map(function (e) {
                    return o("WAWebGetSyncAction")
                      .getSyncActionsByCollectionsInTransaction([
                        o(
                          "WAWebKmpSyncdCollectionNameUtils",
                        ).asWebCollectionName(e),
                      ])
                      .then(function (t) {
                        return [
                          e,
                          o("WAWebKmpKotlinUtils").asKtList(
                            t.map(function (e) {
                              return o("WAWebKmpKotlinUtils").asKmpByteArray(
                                new Uint8Array(e.valueMac),
                              );
                            }),
                          ),
                        ];
                      });
                  }),
              );
              return o("WAWebKmpKotlinUtils").asKtMap(new Map(e));
            },
            s,
          );
        },
        markCollectionNonDirty: function (n) {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            async function () {
              (r("WAWebSyncdCollectionsStateMachine").moveCollectionsToUpToDate(
                [o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(n)],
              ),
                r("WAWebSyncdCollectionsStateMachine")
                  .persistToDb()
                  .catch(function (t) {
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: kmp: failed to persist collection state to db: ",
                          "",
                        ])),
                      t,
                    );
                  }));
            },
            s,
          );
        },
        onSuccessfulPatchApplication: async function (t, n, o, a) {
          throw r("err")("onSuccessfulPatchApplication not yet implemented");
        },
      },
      _ = babelHelpers.extends({}, m, p);
    l.mutationProcessorStore = _;
  },
  98,
);
