__d(
  "WAWebKmpMutationProcessorStore",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
    "sortBy",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return new (o(
        "wa-kmp-syncd-engine-api",
      ).KmpSyncdInterfaceError.KmpSyncdStoreError)(
        String(e.message),
        e.name,
        null,
      );
    }
    function c(e) {
      return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o(
            "WAWebGetCollectionVersion",
          ).getCollectionVersionLtHashInTransaction(
            o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(e),
          );
          return t != null
            ? o("WAWebKmpKotlinUtils").asKmpByteArray(new Uint8Array(t))
            : o("WAWebKmpKotlinUtils").asKmpByteArray(new Uint8Array(0));
        }),
        u,
      );
    }
    function d(e) {
      return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o(
            "WAWebGetCollectionVersion",
          ).getCollectionVersionInTransaction(
            o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(e),
          );
          return (t == null ? void 0 : t.version) != null
            ? o("wa-kmp-syncd-engine-api").KmpLong.fromNumber(t.version)
            : null;
        }),
        u,
      );
    }
    function m(e, t) {
      return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(e),
            r = yield o(
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
        }),
        u,
      );
    }
    var p = {
        getDirtyCollections: function () {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            }),
            u,
          );
        },
        getCollectionVersion: d,
        getAllCollectionVersions: function () {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
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
            }),
            u,
          );
        },
        getCollectionLtHash: c,
        getOldestStoredMutationsExcludingKeyIdAndIndices: function (
          t,
          a,
          i,
          l,
        ) {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
                  "WAWebGetSyncAction",
                ).getSyncActionsByCollectionsInTransaction([
                  o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(t),
                ]),
                n = o("WAWebKmpKotlinUtils").asSet(i),
                s = e.filter(function (e) {
                  return (
                    !n.has(e.index) &&
                    !o("WACryptoUtils").arrayBuffersEqual(
                      e.keyId,
                      o("WAWebKmpKotlinUtils").asUint8Array(a.bytes).buffer,
                    )
                  );
                }),
                u = r("sortBy")(s, function (e) {
                  return o("WASyncdKeyManagementUtils").getKeyEpoch(e.keyId);
                }),
                c = u.slice(0, l);
              return o("WAWebKmpKotlinUtils").asKtList(
                c.map(o("WAWebKmpSyncdMutationUtils").asKmpSyncdMutation),
              );
            }),
            u,
          );
        },
        getStoredMutationWithIndex: function (t) {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e =
                yield o("WAWebGetSyncAction").getSyncActionInTransaction(t);
              return e == null
                ? null
                : o("WAWebKmpSyncdMutationUtils").asKmpSyncdMutation(e);
            }),
            u,
          );
        },
        getAllPendingMutationsByCollection: function () {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
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
            }),
            u,
          );
        },
        getLatestMutationsMac: m,
        getPendingMutationsForCriticalBlockCollectionForBootstrap:
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return o("wa-kmp-syncd-engine-api").KmpResult.success(
                o("WAWebKmpKotlinUtils").asKtList([]),
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        getContactMutationsForBootstrap: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return o("wa-kmp-syncd-engine-api").KmpResult.success(
              o("WAWebKmpKotlinUtils").asKtList([]),
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      _ = {
        getAllLtHashes: function () {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
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
            }),
            u,
          );
        },
        getCollectionLtHash: c,
        getCollectionVersion: d,
        getLatestMutationsMac: m,
        getMutationMacsGroupByCollectionName: function () {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield (s || (s = n("Promise"))).all(
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
            }),
            u,
          );
        },
        markCollectionNonDirty: function (a) {
          return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (r("WAWebSyncdCollectionsStateMachine").moveCollectionsToUpToDate(
                [o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(a)],
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
            }),
            u,
          );
        },
        onSuccessfulPatchApplication: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, o) {
              throw r("err")(
                "onSuccessfulPatchApplication not yet implemented",
              );
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      f = babelHelpers.extends({}, p, _);
    l.mutationProcessorStore = f;
  },
  98,
);
