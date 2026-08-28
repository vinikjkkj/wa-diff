__d(
  "adsCreativeFeaturedOfferingSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "ApiAdCreativeFeaturedOfferingMediaObjectFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          type: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "type",
          ),
        },
      );
    }
    function s(t, n) {
      var a;
      return babelHelpers.extends(
        {},
        (a = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(t, n),
        {
          action_metadata: e(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.action_metadata;
            },
            [].concat(n, ["action_metadata"]),
          ),
          default_status: a.basicFieldAccessorFactory(t, n, "default_status"),
          enroll_status: a.basicFieldAccessorFactory(t, n, "enroll_status"),
          featured_offering_asset_id: a.basicFieldAccessorFactory(
            t,
            n,
            "featured_offering_asset_id",
          ),
          mgenai_website_entity_id: a.basicFieldAccessorFactory(
            t,
            n,
            "mgenai_website_entity_id",
          ),
          media: a.nonPrimitiveListFieldAccessorsFactory(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.media;
            },
            [].concat(n, ["media"]),
            Object.values(r("ApiAdCreativeFeaturedOfferingMediaObjectFields")),
          ),
          adex_had_data: a.basicFieldAccessorFactory(t, n, "adex_had_data"),
          adex_had_impression: a.basicFieldAccessorFactory(
            t,
            n,
            "adex_had_impression",
          ),
        },
      );
    }
    l.default = s;
  },
  98,
);
