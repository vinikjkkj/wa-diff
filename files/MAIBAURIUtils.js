__d(
  "MAIBAURIUtils",
  ["AdsManagerURIUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.accountId,
        n = e.adObjectIds,
        r = e.adObjectType,
        a = o("AdsManagerURIUtils").getAdsManagerURI("ads_ai", null, {});
      (a.setDomain("adsmanager.facebook.com"), a.setProtocol("https"));
      var i = "campaigns",
        l = {};
      if (n != null && r != null) {
        var s;
        if (n.length === 0) return null;
        var u;
        switch (r) {
          case "CAMPAIGN":
            ((i = "campaigns"), (u = "selected_campaign_ids"));
            break;
          case "ADSET":
            ((i = "adsets"), (u = "selected_adset_ids"));
            break;
          case "AD":
            ((i = "ads"), (u = "selected_ad_ids"));
            break;
          default:
            return null;
        }
        l = ((s = {}), (s[u] = n.join(",")), s);
      }
      return (
        (a = a.setQueryData(babelHelpers.extends({}, l, { act: t }))),
        (a = a.setPath("/adsmanager/manage/" + i)),
        a
      );
    }
    l.buildAdsManagerDeeplink = e;
  },
  98,
);
