__d(
  "getDefaultDataForOutcomeLeads",
  [
    "AdsCLODefaultDestinationUtils",
    "AdsCTCSmartDefaultUtils",
    "AdsCallAdsPhoneCallRollbackUtils",
    "AdsLeadGenSmartDefaultUtils",
    "AdsMessagesDefaultDestinationUtils",
    "SharedSmartDefaultVariables",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsLeadGenSmartDefaultUtils").getDefaultFromPfrSource();
      if (t != null) return t;
      var n = e.leads;
      if (n == null || n.length === 0) return null;
      var a = o(
        "AdsMessagesDefaultDestinationUtils",
      ).getDefaultDataFromCTXLGUpsellSource();
      if (a != null) return a;
      var i = o(
        "AdsCLODefaultDestinationUtils",
      ).getDefaultDataFromCloPcrSource();
      if (i != null) return i;
      var l = n.find(function (e) {
        var t = e.source;
        if (t === "call_ads_source")
          return (
            o(
              "AdsCTCSmartDefaultUtils",
            ).logCTCSmartDefaultingSourceContainsCall(),
            !0
          );
        if (t === "web_ads_source")
          return r("qex")._("1731") && r("qex")._("1736");
        if (t === "ctwa_leads_defaulting") {
          var n;
          return (n = r("qex")._("3452")) != null ? n : !1;
        }
        return !0;
      });
      if ((l == null ? void 0 : l.source) === "call_ads_source") {
        o("SharedSmartDefaultVariables").setEligibleLeadsPhoneCallRollback(!0);
        var s = o(
          "AdsCallAdsPhoneCallRollbackUtils",
        ).maybeApplyLeadsPhoneCallRollback();
        if (s != null) return s;
      }
      return l;
    }
    l.default = e;
  },
  98,
);
