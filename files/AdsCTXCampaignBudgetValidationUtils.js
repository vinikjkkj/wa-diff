__d(
  "AdsCTXCampaignBudgetValidationUtils",
  [
    "invariant",
    "$InternalEnum",
    "AdsAPIOptimizationGoals",
    "AdsCTXMinBudgetAMSiteVarConfig.experimental",
    "AdsCampaignDerivedUtils",
    "AdsInterfacesLogger",
    "AdsUEditorMessagingDestinationUtils",
    "Currency",
    "WebToXFeatureGating",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 300,
      u = [
        "US",
        "CN",
        "GB",
        "BR",
        "DE",
        "IN",
        "JP",
        "AU",
        "TH",
        "FR",
        "KR",
        "CA",
        "NL",
        "IT",
        "MX",
        "TR",
        "PH",
        "VN",
        "HK",
        "MY",
        "CO",
        "AR",
        "ID",
        "PL",
      ],
      c = n("$InternalEnum")({ DC: "dc", PO: "po", WTWA: "wtwa" });
    function d(e) {
      return m(e) || p(e);
    }
    function m(e) {
      return o(
        "AdsUEditorMessagingDestinationUtils",
      ).isClickToMessageAdDestination(e.destination_type);
    }
    function p(e) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isWebsiteAdDestination(
          e.destination_type,
        ) && o("WebToXFeatureGating").isWebToWAActiveAdvertiser()
      );
    }
    function _(e, t) {
      if (!d(t)) return null;
      var n = p(t)
          ? c.WTWA
          : t.optimization_goal ===
              r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
            ? c.PO
            : c.DC,
        a = g(e, n);
      if (a == null) return null;
      var i = t.daily_budget,
        l = t.lifetime_budget;
      r("isTruthy")(i) || r("isTruthy")(l) || s(0, 5534);
      var u = o("AdsCampaignDerivedUtils").getRemainingCampaignDurationInDays(
          t,
        ),
        m = r("isTruthy")(l) && !!u;
      return m ? Math.ceil(a * u) : a;
    }
    function f(e, t) {
      if (!d(t)) return null;
      var n = p(t)
          ? c.WTWA
          : t.optimization_goal ===
              r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
            ? c.PO
            : c.DC,
        o = g(e, n);
      return o;
    }
    function g(t, n) {
      var a,
        i = t.currency,
        l = t.tax_country;
      if (l != null && u.includes(l)) return null;
      var s = null;
      switch (n) {
        case c.DC:
          s = r("AdsCTXMinBudgetAMSiteVarConfig.experimental").dc.non_cbo.p10;
          break;
        case c.PO:
          s = r("AdsCTXMinBudgetAMSiteVarConfig.experimental").po.non_cbo.p10;
          break;
        case c.WTWA:
          s = r("AdsCTXMinBudgetAMSiteVarConfig.experimental").wtwa.non_cbo.p10;
          break;
      }
      if (s == null) return null;
      var d = (a = s[i]) != null ? a : s.GLOBAL;
      if (d != null) {
        d = Math.min(d, e);
        var m = o("Currency").getOffset(i) / o("Currency").getOffset("USD"),
          p = (t == null ? void 0 : t.account_currency_ratio_to_usd) * m;
        return ((d = Math.ceil(d * p)), d);
      }
      return null;
    }
    function h(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "ctx_am_min_budget_on_l2",
        data:
          ((i = {}),
          (i.ad_account_id = e.account_id),
          (i.account_country = e.tax_country),
          (i.campaign_id = t),
          (i.bulk_edit_value = n != null ? n : 0),
          (i.old_value = o),
          (i.current_target_currency = e.currency),
          (i.is_enabled = a),
          i),
      });
    }
    ((l.getCTXCampaignMinimumBudget = _),
      (l.getCTXCampaignDailyMinimumBudget = f),
      (l.logCTXCampaignMinBudgetDetails = h));
  },
  98,
);
