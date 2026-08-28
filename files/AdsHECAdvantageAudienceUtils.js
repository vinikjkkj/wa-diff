__d(
  "AdsHECAdvantageAudienceUtils",
  [
    "AdsTargetingAsSignalUtils",
    "adsRegulatedCategoryIsHECRegulatedCategory",
    "gkx",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("16729") : r("gkx")("9753")
      );
    }
    function u(e) {
      var t = o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(e);
      if (!t) return !1;
      var n = d(e == null ? void 0 : e.slice());
      return n ? !s() : !0;
    }
    function c(e) {
      var t = d(e == null ? void 0 : e.slice());
      return t ? s() : !1;
    }
    function d(t) {
      return t == null || (e || (e = r("isEmpty")))(t)
        ? !1
        : t.every(function (e) {
            return r("adsRegulatedCategoryIsHECRegulatedCategory")(e);
          });
    }
    function m(e, t) {
      var n =
          o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(e) && !d(e),
        r = o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(t) && !d(t);
      return n || r ? !0 : !s();
    }
    function p() {
      return r("gkx")("1197");
    }
    function _(e) {
      var t = o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(e);
      if (!t) return !1;
      var n = d(e);
      return n ? !p() : !0;
    }
    function f(e) {
      var t = d(e);
      return t ? p() : !1;
    }
    function g() {
      return r("gkx")("26207");
    }
    function h(e) {
      var t = d(e == null ? void 0 : e.slice());
      return t ? g() : !1;
    }
    ((l.getAdAccountPassesAdvantageAudienceHSAEGK = s),
      (l.isCampaignGroupRegulatedAndIneligibleForAdvantageAudience = u),
      (l.isCampaignGroupRegulatedAndEligibleForAdvantageAudience = c),
      (l.areRegulatedCategoriesOnlyHEC = d),
      (l.shouldResetAdvantageAudienceFieldsForRegulatedCategories = m),
      (l.getAdAccountPassesHEFAutomationUnificationGK = p),
      (l.isCampaignGroupRegulatedAndIneligibleForAutomationUnification = _),
      (l.isRegulatedCampaignGroupEligibleForAutomationUnification = f),
      (l.getAdAccountPassesHECFBroadGeoLaunchGK = g),
      (l.isCampaignGroupRegulatedAndEligibleForBroadGeo = h));
  },
  98,
);
