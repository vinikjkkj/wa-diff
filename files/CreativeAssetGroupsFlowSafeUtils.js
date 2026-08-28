__d(
  "CreativeAssetGroupsFlowSafeUtils",
  ["AdsAdgroupCreativeAssetGroupsSpecOriginMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(
        e,
        [
          "creative_asset_groups",
          "pca_unification_alpha_experiment_full_format",
        ],
      );
    }
    l.isFormatCreativeAssetGroupsFromAdgroupRecord = e;
  },
  98,
);
