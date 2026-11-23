__d(
  "AdsMessengerMarketingMessagesCatalogPreviewUtils",
  [
    "errorCode",
    "fbt",
    "AdPreview.react",
    "AdsDynamicAdsUtils",
    "AdsError",
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
    "getMessageMarketingTopIncompatibleSettingData",
    "getUpstreamSettingsFromEligibilityInformation",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e, t) {
      if (t != null) {
        var n = o(
          "getMessageMarketingTopIncompatibleSettingData",
        ).getMessageMarketingTopIncompatibleSettingData(
          o(
            "getUpstreamSettingsFromEligibilityInformation",
          ).getUpstreamSettingsFromEligibilityInformation(t),
          o("AdsMessageMarketingCompatibleSettingsPluginType")
            .AdsMessageMarketingCompatibleSettingsChannelType.MESSENGER,
        );
        if ((n == null ? void 0 : n.field) === "hasProductCatalog") return !0;
      }
      return o("AdsDynamicAdsUtils").isDynamicAd(e);
    }
    function c(t, n) {
      return !o(
        "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
      ).isAdAccountEligibleForMessengerMarketingLiquidity() || !e(t, n)
        ? []
        : [d()];
    }
    function d() {
      return r("AdsError").createError(
        4017184,
        u._(/*BTDS*/ ""),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    l.getMessengerMarketingMessagesCatalogUnsupportedErrors = c;
  },
  226,
);
