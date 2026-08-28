__d(
  "adsDegreesOfFreedomAccessorsFactory",
  ["AdsAdObjectsAccessorUtils", "adsCreativeFeaturesSpecAccessorsFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          ad_handle_type: n.basicFieldAccessorFactory(e, t, "ad_handle_type"),
          creative_features_spec: r("adsCreativeFeaturesSpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.creative_features_spec;
            },
            [].concat(t, ["creative_features_spec"]),
          ),
          degrees_of_freedom_type: n.basicFieldAccessorFactory(
            e,
            t,
            "degrees_of_freedom_type",
          ),
          image_transformation_types: n.basicListFieldAccessorFactory(
            e,
            t,
            "image_transformation_types",
          ),
          multi_media_transformation_type: n.basicListFieldAccessorFactory(
            e,
            t,
            "multi_media_transformation_type",
          ),
          stories_transformation_types: n.basicListFieldAccessorFactory(
            e,
            t,
            "stories_transformation_types",
          ),
          text_transformation_types: n.basicListFieldAccessorFactory(
            e,
            t,
            "text_transformation_types",
          ),
          video_transformation_types: n.basicListFieldAccessorFactory(
            e,
            t,
            "video_transformation_types",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
