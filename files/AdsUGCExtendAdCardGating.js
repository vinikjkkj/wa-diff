__d(
  "AdsUGCExtendAdCardGating",
  ["AdsAccountUtils", "AdsAppExperiencesUtils", "AdsAutomaticFlowUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (
        t.length !== 1 ||
        r("AdsAccountUtils").hasCapability(e, "ADS_TRUST_TIER_0_FULL")
      )
        return !1;
      var a = t[0],
        i = a.adgroup,
        l = a.campaign,
        s = a.campaignGroup;
      if (
        ((n = i.metadata) == null ? void 0 : n.is_pca_unified_format_ad) ===
          !0 ||
        !o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(i)
      )
        return !1;
      var u = s == null ? void 0 : s.special_ad_categories;
      return (
        o("AdsAppExperiencesUtils").isAdgroupEligibleForAppExperiences(i, {
          buying_type: s == null ? void 0 : s.buying_type,
          objective: s == null ? void 0 : s.objective,
          special_ad_categories: u == null ? null : Array.from(u, String),
        }) && o("AdsAutomaticFlowUtils").isAdPlacementEligibleForAPlusC(l)
      );
    }
    function s(e) {
      return (
        (e == null
          ? void 0
          : e.some(function (e) {
              return e === "catalog" || e === "site_links";
            })) === !0
      );
    }
    function u(e) {
      return !r("gkx")("23914") ||
        !o("AdsAppExperiencesUtils").isADUToL1AEPhase1Enabled(!0)
        ? !1
        : (e == null ? void 0 : e.silent) === !0
          ? r("gkx")("16238") === !0
          : r("gkx")("16240") === !0;
    }
    ((l.isUGCExtendAdSurface = e),
      (l.hasExtendAdSourceBesidesUGC = s),
      (l.isUGCOnExtendAdCard = u));
  },
  98,
);
