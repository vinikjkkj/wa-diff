__d(
  "AdsAdvancedPreviewV2CombinedVariationClientSidePreviewPlugin",
  ["AdsAdvancedPreviewClientSidePreviewUtils", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        forVariationPlugin: "combined-variation",
        type: "advanced_preview/variation/client_side_preview",
        key: "combined-variation",
        isClientSidePreviewSupported: function (t) {
          var e = t.config;
          return (
            (e == null ? void 0 : e.type) === "combined-variation" &&
            r("justknobx")._("539") &&
            e.variations.every(
              o("AdsAdvancedPreviewClientSidePreviewUtils")
                .isVariationClientSidePreviewSupported,
            )
          );
        },
        applyToRenderSpec: function (t, n, r) {
          var e = n.config;
          return (e == null ? void 0 : e.type) === "combined-variation"
            ? e.variations.reduce(function (e, t) {
                return o(
                  "AdsAdvancedPreviewClientSidePreviewUtils",
                ).applyVariationToClientSideRenderSpec(e, t, r);
              }, t)
            : t;
        },
        isCagPreviewSpecRequired: function (t) {
          var e = t.config;
          return (
            (e == null ? void 0 : e.type) === "combined-variation" &&
            e.variations.some(
              o("AdsAdvancedPreviewClientSidePreviewUtils")
                .isVariationCagPreviewSpecRequired,
            )
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
