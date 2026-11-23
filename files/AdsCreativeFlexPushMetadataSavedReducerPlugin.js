__d(
  "AdsCreativeFlexPushMetadataSavedReducerPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            o,
            a,
            i = n.adgroupIDs,
            l = n.pushMetadataIds,
            s = n.remove,
            u = i[0];
          if (s === !0 || l.length === 0 || u == null) return t;
          var c = Array.from(
            new Set(
              ((e =
                (o = t.pushAdsSessionMap.get(String(u))) == null
                  ? void 0
                  : o.pushAdsSelectionMap.valueSeq().toArray()) != null
                ? e
                : []
              ).flatMap(function (e) {
                var t = e.pushMedia;
                return t.map(function (e) {
                  return e.id;
                });
              }),
            ),
          );
          return c.length === 0
            ? t
            : babelHelpers.extends({}, t, {
                savedPushMetadataByAdgroupID: ((a =
                  t.savedPushMetadataByAdgroupID) != null
                  ? a
                  : r("immutable").Map()
                ).set(String(u), {
                  adgroupIDs: i,
                  mediaIDs: c,
                  pushMetadataIDs: l,
                }),
              });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
