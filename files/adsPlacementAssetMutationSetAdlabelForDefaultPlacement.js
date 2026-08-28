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
    "justknobx",
    "last",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a, i) {
      var l,
        c = r("last")(a),
        d = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.descriptions.set(
          (l = e.creative) == null ||
            (l = l.asset_feed_spec) == null ||
            (l = l.descriptions) == null
            ? void 0
            : l.take(1),
        )(e),
        m = e.getIn(a, null),
        p = {};
      if (m != null && m.size != null && m.size > 0) {
        var _ = m.first();
        if (
          (i.forEach(function (e) {
            var t = _.get(e);
            (typeof t == "string" || t == null || s(0, 70650, typeof t),
              (p[e] = t != null ? t.trim() : ""));
          }),
          c === "titles")
        )
          r("justknobx")._("3917")
            ? o(
                "AdsUEditorAdgroupHeadlineMutators",
              ).copyHeadlineFieldsToFieldMap(_, p)
            : u(_, p);
        else if (c === "bodies")
          if (r("justknobx")._("3917"))
            o("AdsUEditorAdgroupBodyMutators").copyMessageFieldsToFieldMap(
              _,
              p,
            );
          else {
            var f = _.get("asset_source");
            typeof f == "string" && (p.asset_source = f);
          }
      } else
        i.forEach(function (e) {
          p[e] = "";
        });
      d = d.setIn(a, r("immutable").List.of(r("immutable").Map(p)));
      var g = o(
        "AdsPlacementAssetUtils",
      ).makeUniqueLabelNameForPlacementAsset();
      if (
        ((d = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
          d,
          t,
          n,
          0,
          g,
        )),
        m != null && m.size > 1)
      )
        for (var h = 1; h < m.size; h++) {
          var y = m.get(h),
            C = i[0],
            b = y == null ? void 0 : y.get(C);
          typeof b == "string" || b == null || s(0, 70649, typeof b);
          var v = b != null ? b.trim() : "",
            S = y == null ? void 0 : y.get("asset_source");
          switch (c) {
            case "bodies":
              ((d = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                d,
                t,
                r("AdsUnifiedCreativeAPIFields").message,
                h,
                "text",
                v,
              )),
                r("justknobx")._("3917")
                  ? (d = o(
                      "AdsUEditorAdgroupBodyMutators",
                    ).copyMessageFieldsToIndex(d, t, y, h))
                  : S != null &&
                    (d = d.setIn(a.concat(h.toString(), "asset_source"), S)));
              break;
            case "titles":
              ((d = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                d,
                t,
                r("AdsUnifiedCreativeAPIFields").headline,
                h,
                "text",
                v,
              )),
                r("justknobx")._("3917")
                  ? (d = o(
                      "AdsUEditorAdgroupHeadlineMutators",
                    ).copyHeadlineFieldsToIndex(d, t, y, h))
                  : (d = o(
                      "AdsUEditorAdgroupHeadlineMutators",
                    ).copyTextGenRelatedFields(d, t, y, h)));
              break;
            default:
              break;
          }
          d = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
            d,
            t,
            n,
            h,
            g,
          );
        }
      return { updatedAdgroup: d, newAdlabel: g };
    }
    function u(e, t) {
      var n = e.get("asset_source");
      typeof n == "string" && (t.asset_source = n);
      var o = e.get("uuid");
      if ((typeof o == "string" && (t.uuid = o), !r("justknobx")._("1921"))) {
        var a = e.get("text_gen_original_text");
        typeof a == "string" && (t.text_gen_original_text = a);
        var i = e.get("text_gen_input_text");
        typeof i == "string" && (t.text_gen_input_text = i);
      }
      var l = e.get("action_type");
      typeof l == "string" && (t.action_type = l);
      var s = e.get("language");
      typeof s == "string" && (t.language = s);
    }
    l.default = e;
  },
  98,
);
