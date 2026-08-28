__d(
  "AdsSuggestedAdsImportStatusTrackerReducerPlugins",
  ["AdsCopySource", "LoadObject", "flatMapArray"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (n.source !== r("AdsCopySource").SUGGESTED_ADS) return t;
          var e = r("flatMapArray")(n.copyRequests, function (e) {
            return e.ids;
          });
          return t.merge(
            e.map(function (e) {
              return [e, r("LoadObject").creating({ creatorModuleID: i.id })];
            }),
          );
        },
      },
      s = {
        reduce: function (t, n) {
          if (n.source !== r("AdsCopySource").SUGGESTED_ADS) return t;
          var e = r("flatMapArray")(n.responses, function (e) {
            return e.sourceAdObjectIDs;
          });
          return t.merge(
            e.map(function (e) {
              return [
                e,
                r("LoadObject").withValue(!0, { creatorModuleID: i.id }),
              ];
            }),
          );
        },
      },
      u = {
        reduce: function (t, n) {
          if (n.source !== r("AdsCopySource").SUGGESTED_ADS) return t;
          var e = r("LoadObject").withError(n.error, { creatorModuleID: i.id });
          return t.merge(
            n.ids.map(function (t) {
              return [t, e];
            }),
          );
        },
      },
      c = {
        reduce: function (t, n) {
          return t.merge(
            n.ids.map(function (e) {
              return [
                e,
                r("LoadObject").withValue(!1, { creatorModuleID: i.id }),
              ];
            }),
          );
        },
      };
    ((l.copy = e), (l.copyComplete = s), (l.copyError = u), (l.dismiss = c));
  },
  98,
);
