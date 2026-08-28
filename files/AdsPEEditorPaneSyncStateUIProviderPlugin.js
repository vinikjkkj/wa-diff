__d(
  "AdsPEEditorPaneSyncStateUIProviderPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Record({
        hasPreviousAdObjectEverSynced: !1,
        hasCurrentAdObjectEverSynced: !1,
      }),
      s = function () {
        return e();
      },
      u = { initialState: s() },
      c = u;
    l.default = c;
  },
  98,
);
