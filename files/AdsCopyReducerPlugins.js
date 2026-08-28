__d(
  "AdsCopyReducerPlugins",
  [
    "AdsCopyDataManager",
    "AdsCopySource",
    "AdsObjectTypeUtils",
    "LoadObject",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("immutable").Map();
      return (
        (t = t.withMutations(function (t) {
          return e.forEach(function (e) {
            t.set(
              e.requestID,
              r("LoadObject").loading({ creatorModuleID: i.id }),
            );
          });
        })),
        t
      );
    }
    var s = {
        reduce: function (n, a) {
          var t,
            i = {
              ids: a.ids,
              accountID: a.accountID,
              draftID: a.draftID,
              newParentID: null,
              extraData: a.extraData,
              requestID: a.requestID,
              hasCarousel: a.hasCarousel,
            };
          return (
            o("AdsCopyDataManager").copyWithFragmentSource(
              [i],
              (t = a.copySource) != null
                ? t
                : r("AdsCopySource").QUICK_DUPLICATE_ACTION_REDUCER,
              a.source,
              a.onCopyCompleted,
              a.familyLineCounts,
              o("AdsObjectTypeUtils").toObjectLevel(a.objectType),
            ),
            a.copySource === r("AdsCopySource").SIMPLE_CREATE_QUICK_DUPLICATE
              ? n
              : e([i])
          );
        },
      },
      u = {
        reduce: function (n, a) {
          var t;
          return (
            o("AdsCopyDataManager").copy(
              a.copyRequests,
              (t = a.source) != null
                ? t
                : r("AdsCopySource").COPY_ACTION_REDUCER,
              a.level,
              a.onCopyCompleted,
              a.familyLineCounts,
            ),
            a.source === r("AdsCopySource").SUGGESTED_ADS ||
            a.source === r("AdsCopySource").CREATION_PACKAGE_MFR_UPGRADE ||
            a.source === r("AdsCopySource").DUPLICATE_OPTIMAL_ENTRY_POINT
              ? n
              : e(a.copyRequests)
          );
        },
      },
      c = {
        reduce: function (t, n) {
          return t.withMutations(function (e) {
            return n.responses.forEach(function (t) {
              return e.set(
                t.requestID,
                r("LoadObject").empty({ creatorModuleID: i.id }).done(),
              );
            });
          });
        },
      },
      d = {
        reduce: function (t, n) {
          return t.set(
            n.requestID,
            r("LoadObject").empty({ creatorModuleID: i.id }).setError(n.error),
          );
        },
      };
    ((l.quickDuplicate = s),
      (l.copy = u),
      (l.copyCompleted = c),
      (l.copyError = d));
  },
  98,
);
