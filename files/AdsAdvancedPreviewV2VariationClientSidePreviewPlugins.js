__d(
  "AdsAdvancedPreviewV2VariationClientSidePreviewPlugins",
  [
    "AdsAdvancedPreviewV2CombinedVariationClientSidePreviewPlugin",
    "AdsAdvancedPreviewV2CreativeAssetGroupVariationClientSidePreviewPlugin",
    "AdsAdvancedPreviewV2DCOMediaVariationClientSidePreviewPlugin",
    "AdsAdvancedPreviewV2MediaSourcingVariationClientSidePreviewPlugin",
    "AdsAdvancedPreviewV2OriginalVariationClientSidePreviewPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsAdvancedPreviewV2CombinedVariationClientSidePreviewPlugin"),
        n(
          "AdsAdvancedPreviewV2CreativeAssetGroupVariationClientSidePreviewPlugin",
        ),
        n("AdsAdvancedPreviewV2DCOMediaVariationClientSidePreviewPlugin"),
        n("AdsAdvancedPreviewV2MediaSourcingVariationClientSidePreviewPlugin"),
        n("AdsAdvancedPreviewV2OriginalVariationClientSidePreviewPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
