__d(
  "AdsAssetFeedSimpleFieldCheckUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return !!e.asset_feed_spec;
    }
    function l(e) {
      return !!(e != null && e.asset_feed_id);
    }
    function s(e) {
      return !!(e != null && e.is_dynamic_creative_format_automation);
    }
    function u(e) {
      return !!e.is_dynamic_creative_optimization;
    }
    function c(e) {
      return !!e.is_dynamic_creative_asset_customization;
    }
    function d(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.groups;
      return !!n;
    }
    function m(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.target_rules;
      return !!n;
    }
    function p(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.asset_customization_rules;
      return !!n;
    }
    ((i.isCreativeWithAssetFeed = e),
      (i.isCampaignWithDCAssetFeed = l),
      (i.isCampaignWithACOAd = s),
      (i.isRegularDCOCampaign = u),
      (i.isCarteDCOCampaign = c),
      (i.hasGroupRules = d),
      (i.hasTargetRules = m),
      (i.hasAssetCustomizationRules = p));
  },
  66,
);
