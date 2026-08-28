__d(
  "AdsAPlusCSCJUtils",
  [
    "AdsAPlusCFastTrackV2Utils",
    "AdsAccountStore",
    "AdsApplicationIDs",
    "AdsSensitiveVerticalUtils",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("19550");
    }
    function s(e) {
      return e ? r("gkx")("16887") : r("gkx")("16888");
    }
    function u() {
      return r("gkx")("12253");
    }
    function c(e) {
      return (
        !o("AdsSensitiveVerticalUtils").isAdAccountOnFastTrackBlocklist() &&
        !o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist() &&
        p(e)
      );
    }
    function d(t) {
      var n = m(t);
      return n && e();
    }
    function m(e) {
      var t = e == null ? void 0 : e.sales_segment_v2,
        n = o("AdsAPlusCFastTrackV2Utils").isSBGSegment(t),
        a =
          o(
            "AdsSensitiveVerticalUtils",
          ).isAdAccountInPharmaOrSensitiveVertical() ||
          o("AdsSensitiveVerticalUtils").isAdAccountLuxuryVertical();
      return (
        r("gkx")("21205") &&
        !a &&
        !o("AdsSensitiveVerticalUtils").isAdAccountOnFastTrackBlocklist() &&
        !o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist()
      );
    }
    function p(e) {
      return (
        (e == null ? void 0 : e.source_app_id) ===
          r("AdsApplicationIDs").ADS_POWER_EDITOR ||
        (e == null ? void 0 : e.source_app_id) == null
      );
    }
    function _(e, t) {
      return d(e) && p(t);
    }
    function f(e, t) {
      return m(e) && p(t);
    }
    function g() {
      var e = r("AdsAccountStore").getSelectedAccount().getValue(),
        t = e == null ? void 0 : e.sales_segment_v2;
      if (t == null) return !0;
      var n = o("AdsAPlusCFastTrackV2Utils").isSBGSegment(t),
        a = o("AdsAPlusCFastTrackV2Utils").isGBGUnmanagedSegment(t);
      return n || a;
    }
    function h() {
      var e =
        o(
          "AdsSensitiveVerticalUtils",
        ).isAdAccountInPharmaOrSensitiveVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountLuxuryVertical();
      return (
        !e &&
        !o("AdsSensitiveVerticalUtils").isAdAccountOnFastTrackBlocklist() &&
        !o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist() &&
        g()
      );
    }
    function y(e) {
      return h() && p(e);
    }
    function C(e) {
      var t,
        n,
        r,
        o,
        a =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.app_info_spec;
      return a
        ? ((n = a.media) == null ? void 0 : n.enroll_status) === "OPT_IN" &&
            ((r = a.app_information) == null ? void 0 : r.enroll_status) ===
              "OPT_IN" &&
            ((o = a.ratings_and_reviews) == null ? void 0 : o.enroll_status) ===
              "OPT_IN"
        : !1;
    }
    function b() {
      return r("gkx")("22299");
    }
    function v() {
      if (r("justknobx")._("4601")) return !0;
      var e = r("AdsAccountStore").getSelectedAccount().getValue(),
        t = e == null ? void 0 : e.sales_segment_v2;
      if (t == null) return !0;
      var n = o("AdsAPlusCFastTrackV2Utils").isSBGSegment(t),
        a = o("AdsAPlusCFastTrackV2Utils").isGBGUnmanagedSegment(t);
      return n || a;
    }
    ((l.passAppInfoBackfillAdExGK = e),
      (l.passShowDestinationBlurbsGK = s),
      (l.isAccountInSCJFastTrackAllowlist = u),
      (l.isEligibleForSCJAPlusCFastTrackBackfill = c),
      (l.isAdAccountEligibleForSCJAppInfoFastTrackBackfill = d),
      (l.isAdAccountEligibleForSCJExtensionsFastTrackBackfill = m),
      (l.isAdCreatedFromAdsManager = p),
      (l.isAdEligibleForSCJAppInfoFastTrackBackfill = _),
      (l.isAdEligibleForSCJWebsiteMediaFastTrackBackfill = f),
      (l.passWebsiteSummaryBackfillEligibility = g),
      (l.isAdAccountEligibleForSCJWebsiteSummaryFastTrackBackfill = h),
      (l.isAdEligibleForSCJWebsiteSummaryFastTrackBackfill = y),
      (l.areAllAppInfoOptedIn = C),
      (l.passNativeCommerceExperienceNonCTAGK = b),
      (l.isAdAccountSegmentEligibleForProductBrowsingNonCTA = v));
  },
  98,
);
