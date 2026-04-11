__d(
  "WAWebSchemaPeerMessage",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("peer-message")
        .version(o("WAWebModelStorageVersions").peerMessageCreateTable(), [
          r("id"),
          n("to"),
          n("type"),
          n("subtype"),
          n("appStateSyncKeyShare"),
          n("appStateSyncKeyRequest"),
          n("appStateFatalExceptionNotification"),
          n("peerDataOperationRequestMessage"),
          n("peerDataOperationRequestResponseMessage"),
        ])
        .version(
          o(
            "WAWebModelStorageVersions",
          ).paymentBackgroundsRemovedTablePlaceholder(),
          [],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("peer-message");
    }
    ((l.addTable = e), (l.getPeerMessageTable = s));
  },
  98,
);
