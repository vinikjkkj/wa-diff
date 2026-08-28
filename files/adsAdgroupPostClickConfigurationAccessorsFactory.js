__d(
  "adsAdgroupPostClickConfigurationAccessorsFactory",
  ["AdsAdObjectsAccessorUtils", "adsAdgroupImageOverlaySpecAccessorsFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o(
          "AdsAdObjectsAccessorUtils",
        ).baseFieldAccessorFactory_MANUAL_TYPES_DO_NOT_USE(e, t),
        {
          post_click_item_description: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory_MANUAL_TYPES_DO_NOT_USE(
            e,
            t,
            "post_click_item_description",
          ),
          post_click_item_headline: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory_MANUAL_TYPES_DO_NOT_USE(
            e,
            t,
            "post_click_item_headline",
          ),
          image_overlay_spec: r("adsAdgroupImageOverlaySpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.image_overlay_spec;
            },
            [].concat(t, ["image_overlay_spec"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
