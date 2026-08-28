__d(
  "adsCreativeGenerativeAssetVideoSpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils", "ApiAdCreativeGenerativeAssetVideoFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          enroll_status: n.basicFieldAccessorFactory(e, t, "enroll_status"),
          variations: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.variations;
            },
            [].concat(t, ["variations"]),
            Object.values(r("ApiAdCreativeGenerativeAssetVideoFields")),
          ),
          video_generation_status_list: n.basicFieldAccessorFactory(
            e,
            t,
            "video_generation_status_list",
          ),
          ad_sourced_asset: n.basicFieldAccessorFactory(
            e,
            t,
            "ad_sourced_asset",
          ),
          request_id: n.basicFieldAccessorFactory(e, t, "request_id"),
        },
      );
    }
    l.default = e;
  },
  98,
);
