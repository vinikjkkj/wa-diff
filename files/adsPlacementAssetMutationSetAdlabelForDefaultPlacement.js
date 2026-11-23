__d(
  "adsPlacementAssetMutationSetAdlabelForDefaultPlacement",
  [
    "invariant",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedMutationUtils",
    "AdsPlacementAssetUtils",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUnifiedCreativeAPIFields",
    "immutable",
    "last",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a, i) {
      var l,
        u = r("last")(a),
        c = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.descriptions.set(
          (l = e.creative) == null ||
            (l = l.asset_feed_spec) == null ||
            (l = l.descriptions) == null
            ? void 0
            : l.take(1),
        )(e),
        d = e.getIn(a, null),
        m = {};
      if (d != null && d.size != null && d.size > 0) {
        var p = d.first();
        (i.forEach(function (e) {
          var t = p.get(e);
          (typeof t == "string" || t == null || s(0, 70650, typeof t),
            (m[e] = t != null ? t.trim() : ""));
        }),
          u === "titles"
            ? o(
                "AdsUEditorAdgroupHeadlineMutators",
              ).copyHeadlineFieldsToFieldMap(p, m)
            : u === "bodies" &&
              o("AdsUEditorAdgroupBodyMutators").copyMessageFieldsToFieldMap(
                p,
                m,
              ));
      } else
        i.forEach(function (e) {
          m[e] = "";
        });
      c = c.setIn(a, r("immutable").List.of(r("immutable").Map(m)));
      var _ = o(
        "AdsPlacementAssetUtils",
      ).makeUniqueLabelNameForPlacementAsset();
      if (
        ((c = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
          c,
          t,
          n,
          0,
          _,
        )),
        d != null && d.size > 1)
      )
        for (var f = 1; f < d.size; f++) {
          var g = d.get(f),
            h = i[0],
            y = g == null ? void 0 : g.get(h);
          typeof y == "string" || y == null || s(0, 70649, typeof y);
          var C = y != null ? y.trim() : "",
            b = g == null ? void 0 : g.get("asset_source");
          switch (u) {
            case "bodies":
              ((c = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                c,
                t,
                r("AdsUnifiedCreativeAPIFields").message,
                f,
                "text",
                C,
              )),
                (c = o(
                  "AdsUEditorAdgroupBodyMutators",
                ).copyMessageFieldsToIndex(c, t, g, f)));
              break;
            case "titles":
              ((c = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                c,
                t,
                r("AdsUnifiedCreativeAPIFields").headline,
                f,
                "text",
                C,
              )),
                (c = o(
                  "AdsUEditorAdgroupHeadlineMutators",
                ).copyHeadlineFieldsToIndex(c, t, g, f)));
              break;
            default:
              break;
          }
          c = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
            c,
            t,
            n,
            f,
            _,
          );
        }
      return { updatedAdgroup: c, newAdlabel: _ };
    }
    l.default = e;
  },
  98,
);
