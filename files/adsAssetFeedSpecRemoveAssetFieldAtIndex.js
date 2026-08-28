__d(
  "adsAssetFeedSpecRemoveAssetFieldAtIndex",
  ["AdsAdgroupRecordAccessors", "FBLogger", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[t].get(e);
      return a instanceof r("immutable").List
        ? n < 0 || n >= a.count()
          ? (r("FBLogger")("ads_dynamic_creative_optimization").mustfix(
              "assetIndex should be non-negative and smaller than the asset count",
            ),
            e)
          : ((a = a.update(n, function (e) {
              return e.delete(o);
            })),
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[t].set(
              a,
              e,
            ))
        : (r("FBLogger")("ads_dynamic_creative_optimization").mustfix(
            "this function must be invoked on an asset feed field",
          ),
          e);
    }
    l.adsAssetFeedSpecRemoveAssetFieldAtIndex = e;
  },
  98,
);
