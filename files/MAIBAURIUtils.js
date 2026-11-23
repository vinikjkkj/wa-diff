__d(
  "MAIBAURIUtils",
  ["AdsManagerURIUtils", "URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
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
    function u(t) {
      var n = t.accountId,
        o = t.currentHref,
        a = t.externalConversationId,
        i = s({ accountId: n });
      if (i == null) return null;
      var l = (e || (e = r("URI"))).tryParseURI(o);
      return (
        l != null &&
          l.getDomain().endsWith(".facebook.com") &&
          (i = i.setDomain(l.setSubdomain(i.getSubdomain()).getDomain())),
        i.addQueryData({ thread_key: a })
      );
    }
    ((l.buildAdsManagerDeeplink = s),
      (l.buildAdsManagerChatThreadDeeplink = u));
  },
  98,
);
