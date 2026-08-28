__d(
  "adsPlacementAssetMutationAddCarouselFromAssetFeedSpec",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "adsPlacementAssetGetChildAttachmentFromLabelMap",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i,
        l = e,
        s = (n = t.creative) == null ? void 0 : n.asset_feed_spec,
        u = s == null ? void 0 : s.asset_customization_rules,
        c = s == null ? void 0 : s.carousels,
        d =
          (a = l.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.link_data) == null
            ? void 0
            : a.call_to_action,
        m = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(u);
      if (m == null || c == null || d == null) return l;
      var p = m.getIn(["carousel_label", "name"]),
        _ = c.find(function (e) {
          return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === p;
        }),
        f = _.get("child_attachments");
      if (!(f instanceof r("immutable").List)) return l;
      var g = f.map(function (e) {
        return r("adsPlacementAssetGetChildAttachmentFromLabelMap")(e, t, d);
      });
      l = l.setIn(
        r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
          .CHILD_ATTACHMENTS,
        g,
      );
      var h = _.get("multi_share_end_card");
      l = l.setIn(
        r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
          .MULTI_SHARE_END_CARD,
        h,
      );
      var y = _.get("multi_share_optimized");
      l = l.setIn(
        r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
          .MULTI_SHARE_OPTIMIZED,
        y,
      );
      var C = m.getIn(["link_url_label", "name"]),
        b =
          s == null || (i = s.link_urls) == null
            ? void 0
            : i.find(function (e) {
                return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === C;
              }),
        v = b == null ? void 0 : b.get("deeplink_url");
      return (
        v != null &&
          typeof v == "string" &&
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.app_link.set(
            v,
          )(l)),
        l
      );
    }
    l.default = e;
  },
  98,
);
