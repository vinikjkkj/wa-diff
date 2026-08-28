__d(
  "AdsAccountStore",
  [
    "AdsAccountStoreNew",
    "AdsAccountStoreOld",
    "AdsApplicationIDs",
    "CurrentAppID",
    "adsCastToAdsApplicationID",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCastToAdsApplicationID")(o("CurrentAppID").getAppID()),
      s;
    e !== r("AdsApplicationIDs").ADS_AD_BUILDER && r("gkx")("3065")
      ? (s = n("AdsAccountStoreNew"))
      : (s = n("AdsAccountStoreOld"));
    var u = s;
    l.default = u;
  },
  98,
);
