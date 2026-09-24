__d(
  "WAWebChatlistCallingActivationBannerImpression",
  [
    "WAWebBannerEventWamEvent",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s() {
      e ||
        ((e = !0),
        new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
          bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS
            .SHOWN,
          bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
            .WEB_CALLING_ACTIVATION_BANNER,
        }).commit());
    }
    function u() {
      e = !1;
    }
    ((l.logChatlistCallingActivationBannerShownOnce = s),
      (l.resetChatlistCallingActivationBannerImpressionForTests = u));
  },
  98,
);
