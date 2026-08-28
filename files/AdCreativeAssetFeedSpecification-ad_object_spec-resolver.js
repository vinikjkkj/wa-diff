__d(
  "AdCreativeAssetFeedSpecification-ad_object_spec-resolver",
  [
    "AdCreativeAssetFeedSpecificationAdObjectSpecResolver.graphql",
    "AdsAssetFeedSpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n(
              "AdCreativeAssetFeedSpecificationAdObjectSpecResolver.graphql",
            )),
        t,
      );
      return o("AdsAssetFeedSpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.ad_creative_asset_feed_spec = s;
  },
  98,
);
