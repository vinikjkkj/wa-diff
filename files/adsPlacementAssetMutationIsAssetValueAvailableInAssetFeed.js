__d(
  "adsPlacementAssetMutationIsAssetValueAvailableInAssetFeed",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = n.getValue(e, t);
      return o == null
        ? !1
        : typeof o == "string"
          ? (r("FBLogger")("am_feature_pac").mustfix(
              "assets if present, should be a list",
            ),
            !1)
          : o.count() > 0;
    }
    l.default = e;
  },
  98,
);
