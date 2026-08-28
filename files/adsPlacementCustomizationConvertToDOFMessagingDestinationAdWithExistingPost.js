__d(
  "adsPlacementCustomizationConvertToDOFMessagingDestinationAdWithExistingPost",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "ApiDynamicCreativeOptimizationTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        i = e.creative;
      return i == null ||
        !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) ||
        !o("AdsAssetFeedUtils").isClickToMultiDestAds(e)
        ? e
        : o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.additional_data.set(
              i == null || (t = i.asset_feed_spec) == null
                ? void 0
                : t.additional_data,
            ),
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
              .additional_data.page_welcome_message.delete,
            r("AdsAdgroupRecordAccessors").creative.page_welcome_message.set(
              i == null ||
                (n = i.asset_feed_spec) == null ||
                (n = n.additional_data) == null
                ? void 0
                : n.page_welcome_message,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_to_actions.set(
              i == null || (a = i.asset_feed_spec) == null
                ? void 0
                : a.call_to_actions,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.optimization_type.set(
              r("ApiDynamicCreativeOptimizationTypes")
                .DOF_MESSAGING_DESTINATION,
            ),
          )(e);
    }
    l.default = e;
  },
  98,
);
