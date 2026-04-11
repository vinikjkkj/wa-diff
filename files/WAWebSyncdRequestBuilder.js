__d(
  "WAWebSyncdRequestBuilder",
  [
    "Promise",
    "WAWebABProps",
    "WAWebGetPendingMutation",
    "WAWebKmpSyncdRequestBuilder",
    "WAWebSyncdRequestBuilderBuild",
    "WAWebSyncdRequestBuilderUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebABProps").getABPropConfigValue(
            "kmp_syncd_engine_outgoing_processor_enabled",
          )
            ? o("WAWebKmpSyncdRequestBuilder").buildOutgoingRequestWithKmp(
                new Set(e),
                t,
              )
            : c(e, t);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = new Map(),
            l = new Map();
          yield (e || (e = n("Promise"))).all(
            t.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield o(
                        "WAWebGetPendingMutation",
                      ).getSyncPendingMutationsByCollectionInTransaction(e),
                      n = r("compactMap")(t, function (e) {
                        return e.id;
                      });
                    l.set(e, n);
                    var a = o("WAWebSyncdRequestBuilderUtils").compactPatch(t);
                    i.set(e, a);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          var s = yield o("WAWebSyncdRequestBuilderBuild").buildSyncIqNode(
            i,
            a,
          );
          return {
            syncIqNode: s.syncIqNode,
            collectionWithPendingMutationsIds: l,
            collectionWithEncryptedMutations:
              s.collectionWithEncryptedMutations,
            localCollectionVersions: s.localCollectionVersions,
            collectionsToRefetch: s.pendingCollectionsInBootstrap,
          };
        })),
        d.apply(this, arguments)
      );
    }
    l.buildAppStateSyncRequest = s;
  },
  98,
);
