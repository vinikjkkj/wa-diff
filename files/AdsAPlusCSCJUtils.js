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
    function s() {
      return r("gkx")("12253");
    }
    function u(e) {
      return (
        !o("AdsSensitiveVerticalUtils").isAdAccountOnFastTrackBlocklist() &&
        !o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist() &&
        m(e)
      );
    }
    function c(t) {
      var n = d(t);
      return n && e();
    }
    function d(e) {
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
    function m(e) {
      return (
        (e == null ? void 0 : e.source_app_id) ===
          r("AdsApplicationIDs").ADS_POWER_EDITOR ||
        (e == null ? void 0 : e.source_app_id) == null
      );
    }
    function p(e, t) {
      return c(e) && m(t);
    }
    function _(e, t) {
      return d(e) && m(t);
    }
    function f() {
      var e = r("AdsAccountStore").getSelectedAccount().getValue(),
        t = e == null ? void 0 : e.sales_segment_v2;
      if (t == null) return !0;
      var n = o("AdsAPlusCFastTrackV2Utils").isSBGSegment(t),
        a = o("AdsAPlusCFastTrackV2Utils").isGBGUnmanagedSegment(t);
      return n || a;
    }
    function g() {
      var e =
        o(
          "AdsSensitiveVerticalUtils",
        ).isAdAccountInPharmaOrSensitiveVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountLuxuryVertical();
      return (
        !e &&
        !o("AdsSensitiveVerticalUtils").isAdAccountOnFastTrackBlocklist() &&
        !o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist() &&
        f()
      );
    }
    function h(e) {
      return g() && m(e);
    }
    function y(e) {
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
    function C() {
      return r("gkx")("22299");
    }
    function b() {
      if (r("justknobx")._("4601")) return !0;
      var e = r("AdsAccountStore").getSelectedAccount().getValue(),
        t = e == null ? void 0 : e.sales_segment_v2;
      if (t == null) return !0;
      var n = o("AdsAPlusCFastTrackV2Utils").isSBGSegment(t),
        a = o("AdsAPlusCFastTrackV2Utils").isGBGUnmanagedSegment(t);
      return n || a;
    }
    ((l.passAppInfoBackfillAdExGK = e),
      (l.isAccountInSCJFastTrackAllowlist = s),
      (l.isEligibleForSCJAPlusCFastTrackBackfill = u),
      (l.isAdAccountEligibleForSCJAppInfoFastTrackBackfill = c),
      (l.isAdAccountEligibleForSCJExtensionsFastTrackBackfill = d),
      (l.isAdCreatedFromAdsManager = m),
      (l.isAdEligibleForSCJAppInfoFastTrackBackfill = p),
      (l.isAdEligibleForSCJWebsiteMediaFastTrackBackfill = _),
      (l.passWebsiteSummaryBackfillEligibility = f),
      (l.isAdAccountEligibleForSCJWebsiteSummaryFastTrackBackfill = g),
      (l.isAdEligibleForSCJWebsiteSummaryFastTrackBackfill = h),
      (l.areAllAppInfoOptedIn = y),
      (l.passNativeCommerceExperienceNonCTAGK = C),
      (l.isAdAccountSegmentEligibleForProductBrowsingNonCTA = b));
  },
  98,
);
