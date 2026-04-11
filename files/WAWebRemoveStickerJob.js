__d(
  "WAWebRemoveStickerJob",
  [
    "Promise",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickersRemoveRecentSyncAction",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var a = r(
        "WAWebStickersRemoveRecentSyncAction",
      ).generateRemoveStickerMutation(t);
      return o("WAWebSyncdCoreApi")
        .lockForSync([], [a], function () {
          return (e || (e = n("Promise"))).resolve();
        })
        .then(function () {
          o(
            "WAWebRecentStickerCollectionMd",
          ).RecentStickerCollectionMd.removeAndSave(t.id);
        });
    }
    l.sendRemoveStickerFromRecent = s;
  },
  98,
);
