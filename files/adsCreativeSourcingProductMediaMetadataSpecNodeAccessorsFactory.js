__d(
  "adsCreativeSourcingProductMediaMetadataSpecNodeAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          message: n.basicFieldAccessorFactory(e, t, "message"),
          headline: n.basicFieldAccessorFactory(e, t, "headline"),
          image_layer_specs: n.basicFieldAccessorFactory(
            e,
            t,
            "image_layer_specs",
          ),
          image_template_id: n.basicFieldAccessorFactory(
            e,
            t,
            "image_template_id",
          ),
          description: n.basicFieldAccessorFactory(e, t, "description"),
          prioritize_video: n.basicFieldAccessorFactory(
            e,
            t,
            "prioritize_video",
          ),
          format_option: n.basicFieldAccessorFactory(e, t, "format_option"),
          multi_share_end_card: n.basicFieldAccessorFactory(
            e,
            t,
            "multi_share_end_card",
          ),
          pinned_product_ids: n.basicFieldAccessorFactory(
            e,
            t,
            "pinned_product_ids",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
