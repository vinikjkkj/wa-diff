__d(
  "AdsPrivacyGuidanceFrameworkAYMTChannelV2ProviderPlugin",
  [
    "AYMTClientSideChannelNames",
    "AYMTTipsLoader",
    "AdsDataAtom",
    "AdsPGFLogger",
    "LoadObjectMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        initialState: function (n) {
          return r("LoadObjectMap").createKeyed(
            function (t) {
              var a = Array.from(t).filter(function (e) {
                return e.tipName != null;
              });
              (n(function (e) {
                return e.setLoading(a);
              }),
                a.forEach(function (t) {
                  var n,
                    a = ((n = {}), (n.ad_account_id = t.accountID), n);
                  (t.tipName != null && (a.tip = t.tipName),
                    o("AdsPGFLogger").logTipsLoadCalled());
                  try {
                    r("AYMTTipsLoader").loadTips(
                      a,
                      r("AYMTClientSideChannelNames")
                        .AYMT_ADS_MANAGER_PRIVACY_GUIDANCE_FRAMEWORK_CHANNEL,
                      e || (e = r("AdsDataAtom")),
                    );
                  } catch (e) {
                    var i = r("getErrorSafe")(e);
                    o("AdsPGFLogger").logLoadTipsError(i.message);
                  }
                }));
            },
            function (e) {
              return JSON.stringify(e);
            },
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
