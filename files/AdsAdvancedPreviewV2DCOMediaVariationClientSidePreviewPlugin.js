__d(
  "AdsAdvancedPreviewV2DCOMediaVariationClientSidePreviewPlugin",
  ["AdsAPIAdgroupPaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        forVariationPlugin: "dco-media",
        type: "advanced_preview/variation/client_side_preview",
        key: "dco-media",
        isCagPreviewSpecRequired: function () {
          return !0;
        },
        isClientSidePreviewSupported: function (t) {
          var e = t.config;
          return (
            (e == null ? void 0 : e.type) === "dco-media" &&
            e.index === 0 &&
            e.fieldPath ===
              r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.IMAGES
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
