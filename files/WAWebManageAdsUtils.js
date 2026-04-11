__d(
  "WAWebManageAdsUtils",
  [
    "WAWebBizAdManagementLogger",
    "WAWebBusinessAdCreationUtils",
    "WAWebExternalLink.react",
    "WAWebPonyfillsCryptoRandomUUID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
      var e = r("WAWebPonyfillsCryptoRandomUUID")();
      o("WAWebBizAdManagementLogger").logManageAdsEntryTap(a, e);
      var i = o("WAWebBusinessAdCreationUtils").getWhatsappManageAdsUrl(t, n);
      o("WAWebExternalLink.react").openExternalLink(i);
    };
    l.openManageAdsInLwi = e;
  },
  98,
);
