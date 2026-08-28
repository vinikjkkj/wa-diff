__d(
  "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsChildAttachmentsUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "adsPlacementAssetMutationSetAdlabelForDefaultPlacement",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      var u,
        c = o("AdsPlacementAssetUtils").hasCustomizationsInSpec(e, t, n, i);
      if (c) return { updatedAdgroup: e, addedCustomization: !1 };
      var d = r("adsPlacementAssetMutationSetAdlabelForDefaultPlacement")(
          e,
          t,
          n,
          a,
          l,
        ),
        m = d.updatedAdgroup,
        p =
          (u = e.creative) == null || (u = u.asset_feed_spec) == null
            ? void 0
            : u.asset_customization_rules;
      if (p == null || p.size <= 0)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "[PAC] customization rule should have atleast one rule",
        );
      var _ = r("nullthrows")(
        o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(p),
        "[PAC] default customization rule cannot be null",
      );
      return (
        (p = p.map(function (e) {
          if (r("immutable").is(_, e)) {
            var t;
            return e.set(
              i,
              r("immutable").Map(((t = {}), (t.name = d.newAdlabel), t)),
            );
          }
          return e;
        })),
        (m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(p, m)),
        p.forEach(function (e) {
          r("immutable").is(e, _) ||
            (m = s(
              m,
              t,
              o(
                "AdsPlacementAssetTargetingRuleUtils",
              ).convertTargetingRuleToPlacementList(e),
            ));
        }),
        { updatedAdgroup: m, addedCustomization: !0 }
      );
    }
    function s(t, n, a) {
      if (o("AdsChildAttachmentsUtils").isCarouselAd(t)) return t;
      var i = t,
        l = o("AdsAssetFeedUtils").hasPostFormat(i);
      if (!l) {
        var s = e(
          i,
          n,
          r("AdsUnifiedCreativeAPIFields").message,
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.BODIES,
          "body_label",
          ["text"],
          o("AdsUEditorAdgroupBodyMutators").copyDefaultPlacementBody,
        );
        i = s.updatedAdgroup;
      }
      if (!l) {
        var u = e(
          i,
          n,
          r("AdsUnifiedCreativeAPIFields").headline,
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.TITLES,
          "title_label",
          ["text"],
          o("AdsUEditorAdgroupHeadlineMutators").copyDefaultPlacementHeadline,
        );
        i = u.updatedAdgroup;
      }
      if (o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(t)) {
        var c = e(
          i,
          n,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
          "link_url_label",
          ["website_url", "display_url"],
          o("AdsUEditorAdgroupUrlMutators").copyDefaultPlacementURL,
        );
        i = c.updatedAdgroup;
      }
      return i;
    }
    l.default = s;
  },
  98,
);
