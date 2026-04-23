__d(
  "WAWebManageAdsUtils",
  [
    "WAWebBizNativeAdsEntryTapLogger",
    "WAWebBusinessAdCreationUtils",
    "WAWebExternalLink.react",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumWebFlowType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
      var e = r("WAWebPonyfillsCryptoRandomUUID")();
      o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
        lwiEntryPoint: a,
        lwiFlowId: e,
        webFlowType: o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.EXTERNAL_WEB,
      });
      var i = o("WAWebBusinessAdCreationUtils").getWhatsappManageAdsUrl(t, n);
      o("WAWebExternalLink.react").openExternalLink(i);
    };
    l.openManageAdsInLwi = e;
  },
  98,
);
