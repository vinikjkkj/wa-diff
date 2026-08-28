__d(
  "AdsCopySourceTrackerReducerPlugins",
  ["AdsCopySource", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            o =
              (e = n.copySource) != null
                ? e
                : r("AdsCopySource").QUICK_DUPLICATE_ACTION_REDUCER;
          return r("immutable").Map([[n.requestID, o]]);
        },
      },
      s = {
        reduce: function (t, n) {
          var e,
            o =
              (e = n.source) != null
                ? e
                : r("AdsCopySource").COPY_ACTION_REDUCER;
          if (
            o === r("AdsCopySource").SUGGESTED_ADS ||
            o === r("AdsCopySource").CREATION_PACKAGE_MFR_UPGRADE ||
            o === r("AdsCopySource").DUPLICATE_OPTIMAL_ENTRY_POINT
          )
            return t;
          var a = r("immutable").Map();
          return (
            (a = a.withMutations(function (e) {
              return n.copyRequests.forEach(function (t) {
                e.set(t.requestID, o);
              });
            })),
            a
          );
        },
      },
      u = {
        reduce: function (t, n) {
          return t.withMutations(function (e) {
            return n.responses.forEach(function (t) {
              e.delete(t.requestID);
            });
          });
        },
      },
      c = {
        reduce: function (t, n) {
          return t.delete(n.requestID);
        },
      };
    ((l.quickDuplicate = e),
      (l.copy = s),
      (l.copyCompleted = u),
      (l.copyError = c));
  },
  98,
);
