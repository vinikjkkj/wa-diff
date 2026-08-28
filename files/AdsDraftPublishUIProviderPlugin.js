__d(
  "AdsDraftPublishUIProviderPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Record({
        areAllDeleting: !1,
        initComplete: !1,
        isReceiptShown: !1,
        progress: 0,
        lastActionType: null,
        processingCount: 0,
        recentlyPublishedIDs: r("immutable").Set(),
        totalCount: 0,
      }),
      s = { initialState: e() },
      u = s;
    l.default = u;
  },
  98,
);
