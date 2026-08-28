__d(
  "AdsDraftSyncUtils",
  ["AdsNewIDs", "adsDraftIsDeleted", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return new (r("immutable").Record({ draftStore: null, liveStore: null }))(
        { draftStore: e, liveStore: t },
      );
    }
    function s(e) {
      var t = (!e.values || e.values.isEmpty()) && e.action === "modify";
      return !e.fragmentID || r("AdsNewIDs").isNewNegativeID(e.fragmentID)
        ? t
          ? "BLANK_IGNORE"
          : "CREATE"
        : t
          ? "DELETE_EMPTY"
          : e.action === "add" &&
              (e.deleteOverride === !0 || r("adsDraftIsDeleted")(e))
            ? "DELETE_NEW"
            : "UPDATE";
    }
    var u = r("immutable").Record({
      accountID: null,
      action: null,
      draftID: null,
      fragment: null,
      objectID: null,
      objectType: null,
    });
    ((l.createStoreRecord = e), (l.getSyncAction = s), (l.SyncItemRecord = u));
  },
  98,
);
