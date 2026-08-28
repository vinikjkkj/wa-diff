__d(
  "AdImageCropsPerDimensionSpec-ad_object_spec-resolver",
  [
    "AdImageCropsPerDimensionSpecAdObjectSpecResolver.graphql",
    "AdsImageCropsSpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("AdImageCropsPerDimensionSpecAdObjectSpecResolver.graphql")),
        t,
      );
      return o("AdsImageCropsSpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.ad_image_crops_per_dimension_spec = s;
  },
  98,
);
