__d(
  "adsCreativeSourcingWebsiteSummarySpecNodeAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCreativeSourcingActionMetadataAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          enroll_status: n.basicFieldAccessorFactory(e, t, "enroll_status"),
          is_selling_points_available: n.basicFieldAccessorFactory(
            e,
            t,
            "is_selling_points_available",
          ),
          is_summary_text_available: n.basicFieldAccessorFactory(
            e,
            t,
            "is_summary_text_available",
          ),
          page_text_signals_asset_id: n.basicFieldAccessorFactory(
            e,
            t,
            "page_text_signals_asset_id",
          ),
          mgenai_website_entity_id: n.basicFieldAccessorFactory(
            e,
            t,
            "mgenai_website_entity_id",
          ),
          action_metadata: r(
            "adsCreativeSourcingActionMetadataAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.action_metadata;
            },
            [].concat(t, ["action_metadata"]),
          ),
          subfeatures: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.subfeatures;
            },
            [].concat(t, ["subfeatures"]),
            ["action_metadata", "enroll_status", "feature_name"],
          ),
          selling_points: n.basicListFieldAccessorFactory(
            e,
            t,
            "selling_points",
          ),
          summary_text: n.basicFieldAccessorFactory(e, t, "summary_text"),
        },
      );
    }
    l.default = e;
  },
  98,
);
