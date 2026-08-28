__d(
  "AdsCreativeFatigueResolutionReducerPlugins",
  ["CreativeFatigueResolutionStatus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return (
            n.responses.forEach(function (e) {
              e.fragments.forEach(function (e) {
                var n = e.source_ad_object_id;
                if (n != null && t.has(n)) {
                  var o = t.get(n);
                  o != null &&
                    ((o.status = r(
                      "CreativeFatigueResolutionStatus",
                    ).Duplicated),
                    o.newAdIds.add(e.ad_object_id),
                    t.set(n, o));
                }
              });
            }),
            t
          );
        },
      },
      s = {
        reduce: function (t, n) {
          if (!t.has(n.adObjectID)) {
            var e = {
              status: r("CreativeFatigueResolutionStatus").Duplicating,
              newAdIds: new Set(),
              eventSource: n.eventSource,
              variant: n.variant,
              resolution: n.resolution,
              recommendationType: n.recommendationType,
              level: n.level,
            };
            t.set(n.adObjectID, e);
          }
          return t;
        },
      },
      u = {
        reduce: function (t, n) {
          return (
            n.adObjectIDs.map(function (e) {
              t.forEach(function (n, r) {
                var o = n.newAdIds;
                (o.has(e) && o.delete(e), o.size == 0 && t.delete(r));
              });
            }),
            t
          );
        },
      },
      c = {
        reduce: function (t, n) {
          return (
            n.adObjectIDs.map(function (e) {
              t.forEach(function (n, o) {
                var a = n.newAdIds;
                if (a.has(e)) {
                  var i = {
                    status: r("CreativeFatigueResolutionStatus").Resolved,
                    newAdIds: new Set(),
                    eventSource: n.eventSource,
                  };
                  t.set(o, i);
                }
              });
            }),
            t
          );
        },
      };
    ((l.AdsCreativeFatigueResolutionDuplicationCompletedReducerPlugin = e),
      (l.AdsCreativeFatigueResolutionDuplicationInitializedReducerPlugin = s),
      (l.AdsCreativeFatigueResolutionDiscardReducerPlugin = u),
      (l.AdsCreativeFatigueResolutionPublishReducerPlugin = c));
  },
  98,
);
