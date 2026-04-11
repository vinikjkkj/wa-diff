__d(
  "RSTAdsManagerUtilsMainThread",
  ["requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    r("requireWeak")("AdsAccountStore", function (t) {
      e = t;
    });
    var s = null;
    r("requireWeak")("AdsPERouterHelper", function (e) {
      s = e;
    });
    function u() {
      try {
        var e,
          t,
          n,
          r,
          o,
          a =
            (e =
              (t = s) == null || (t = t.getRouter()) == null
                ? void 0
                : t.getQueryParams()) != null
              ? e
              : {},
          i = a.selected_ad_ids,
          l = a.selected_adset_ids,
          u = a.selected_campaign_ids,
          c = (n = i == null ? void 0 : i.toArray()) != null ? n : [],
          d = (r = l == null ? void 0 : l.toArray()) != null ? r : [],
          m = (o = u == null ? void 0 : u.toArray()) != null ? o : [];
        return {
          adIds: c.map(function (e) {
            return String(e);
          }),
          adsetIds: d.map(function (e) {
            return String(e);
          }),
          campaignIds: m.map(function (e) {
            return String(e);
          }),
        };
      } catch (e) {
        return { adIds: [], adsetIds: [], campaignIds: [] };
      }
    }
    function c() {
      var t, n;
      return (t = (n = e) == null ? void 0 : n.getSelectedAccountID()) != null
        ? t
        : "0";
    }
    function d() {
      var t, n;
      return (t = (n = e) == null ? void 0 : n.getSelectedBusinessID()) != null
        ? t
        : "0";
    }
    function m() {
      return {};
    }
    ((l.getAdEntityIds = u),
      (l.getAdAccountID = c),
      (l.getBusinessID = d),
      (l.getAdsAnnotations = m));
  },
  98,
);
