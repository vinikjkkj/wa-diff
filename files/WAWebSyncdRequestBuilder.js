__d(
  "WAWebSyncdRequestBuilder",
  [
    "WAWebABProps",
    "WAWebGetPendingMutation",
    "WAWebKmpSyncdRequestBuilder",
    "WAWebSyncdRequestBuilderBuild",
    "WAWebSyncdRequestBuilderUtils",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      return o("WAWebABProps").getABPropConfigValue(
        "kmp_syncd_engine_outgoing_processor_enabled",
      )
        ? o("WAWebKmpSyncdRequestBuilder").buildOutgoingRequestWithKmp(
            new Set(e),
            t,
          )
        : s(e, t);
    }
    async function s(e, t) {
      var n = new Map(),
        a = new Map();
      await Promise.all(
        e.map(async function (e) {
          var t = await o(
              "WAWebGetPendingMutation",
            ).getSyncPendingMutationsByCollectionInTransaction(e),
            i = r("compactMap")(t, function (e) {
              return e.id;
            });
          a.set(e, i);
          var l = o("WAWebSyncdRequestBuilderUtils").compactPatch(t);
          n.set(e, l);
        }),
      );
      var i = await o("WAWebSyncdRequestBuilderBuild").buildSyncIqNode(n, t);
      return {
        syncIqNode: i.syncIqNode,
        collectionWithPendingMutationsIds: a,
        collectionWithEncryptedMutations: i.collectionWithEncryptedMutations,
        localCollectionVersions: i.localCollectionVersions,
        collectionsToRefetch: i.pendingCollectionsInBootstrap,
      };
    }
    l.buildAppStateSyncRequest = e;
  },
  98,
);
