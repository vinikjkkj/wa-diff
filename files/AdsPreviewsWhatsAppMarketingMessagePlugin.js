__d(
  "AdsPreviewsWhatsAppMarketingMessagePlugin",
  [
    "fbt",
    "ix",
    "AdsAutomaticFlowUtils",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdsUtils",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPreviewsPluginCommon",
    "MessageMarketingClientAdPreviewOverlay",
    "WhatsAppMarketingMessageClientSideAdPreviewWrapper.react",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/whatsapp_marketing_message",
        apiFormat: "WHATSAPP_MARKETING_MESSAGES_MEDIA",
        customizationGroup: r("AdsPlacementAssetCustomizationTypes")
          .AdsAssetCustomizationGroups.WHATSAPP_MARKETING_MESSAGE,
        loadingPlaceholderSize: { width: 300, height: 530 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279341"),
        isMessageMarketing: function () {
          return !0;
        },
        isClientSideSupported: function (t, n, a, i) {
          var e = r("gkx")("11594") || r("gkx")("6187");
          return !e || o("AdsDynamicAdsUtils").isDynamicAd(t)
            ? !1
            : !!(
                o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(
                  t,
                ) || o("AdsChildAttachmentsUtils").isCarouselAd(t)
              );
        },
        renderClientSidePreview: function (t) {
          return c.jsxs(c.Fragment, {
            children: [
              c.jsx(
                r("WhatsAppMarketingMessageClientSideAdPreviewWrapper.react"),
                babelHelpers.extends({}, t),
              ),
              c.jsx(r("MessageMarketingClientAdPreviewOverlay"), {}),
            ],
          });
        },
      }),
      m = d;
    l.default = m;
  },
  226,
);
