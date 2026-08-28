__d(
  "AdsDraftPublishDataProviderPlugin",
  ["LoadObject", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("immutable")).Record({
        active: r("LoadObject").empty({ creatorModuleID: i.id }),
        fragments: e.Map(),
        requestedAdObjectIDs: e.Set(),
        pendingAdObjectIDs: e.Set(),
        completedAdObjectIDs: e.Set(),
        publishID: null,
        draftID: null,
        pushMetadataIds: e.Set(),
        requestMetadata: e.Map(),
        lastActionType: null,
      }),
      u = { initialState: s() },
      c = u;
    l.default = c;
  },
  98,
);
