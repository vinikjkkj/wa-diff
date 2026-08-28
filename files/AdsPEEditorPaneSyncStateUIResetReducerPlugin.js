__d(
  "AdsPEEditorPaneSyncStateUIResetReducerPlugin",
  ["AdsPEEditorPaneSyncStateUIProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = r("AdsPEEditorPaneSyncStateUIProvider").getInitialState();
          return n.shouldSaveSyncStatus === !0
            ? e.set(
                "hasPreviousAdObjectEverSynced",
                t.hasCurrentAdObjectEverSynced,
              )
            : e;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
