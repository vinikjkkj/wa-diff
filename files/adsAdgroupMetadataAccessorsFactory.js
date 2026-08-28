__d(
  "adsAdgroupMetadataAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          adgroup_creation_source: n.basicFieldAccessorFactory(
            e,
            t,
            "adgroup_creation_source",
          ),
          ad_standard_enhancements_edit_source: n.basicFieldAccessorFactory(
            e,
            t,
            "ad_standard_enhancements_edit_source",
          ),
          adgroup_media_source: n.basicFieldAccessorFactory(
            e,
            t,
            "adgroup_media_source",
          ),
          is_pca_unified_format_ad: n.basicFieldAccessorFactory(
            e,
            t,
            "is_pca_unified_format_ad",
          ),
          media_setup: n.basicFieldAccessorFactory(e, t, "media_setup"),
          carousel_style: n.basicFieldAccessorFactory(e, t, "carousel_style"),
          carousel_with_static_card_style: n.basicFieldAccessorFactory(
            e,
            t,
            "carousel_with_static_card_style",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
