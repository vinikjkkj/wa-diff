__d(
  "AdsPreviewsMessengerMarketingMessagePlugin",
  [
    "fbt",
    "ix",
    "AdsAutomaticFlowUtils",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdsUtils",
    "AdsPreviewsPluginCommon",
    "MessageMarketingClientAdPreviewOverlay",
    "MessengerMarketingMessageClientSideAdPreviewWrapper.react",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/messenger_marketing_message",
        apiFormat: "MESSENGER_MARKETING_MESSAGES_MEDIA",
        loadingPlaceholderSize: { width: 320, height: 530 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("22179"),
        isMessageMarketing: function () {
          return !0;
        },
        isClientSideSupported: function (t, n, a, i) {
          var e = r("gkx")("9275");
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
                r("MessengerMarketingMessageClientSideAdPreviewWrapper.react"),
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
