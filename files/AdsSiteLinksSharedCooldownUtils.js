__d(
  "AdsSiteLinksSharedCooldownUtils",
  [
    "AdCreativeFeatureActionTypeUtils",
    "AdsSiteLinksSharedCooldownGK",
    "PEDefaultOnExclusions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["sa_collection", "carousel", "video_slideshow"];
    function s() {
      return (
        o("AdsSiteLinksSharedCooldownGK").isSEDisableDefaultOn(!0) ||
        o("AdsSiteLinksSharedCooldownGK").isSESourcingBlocklisted(!0) ||
        o("PEDefaultOnExclusions").isExcludedBySaefSensitiveVerticals()
      );
    }
    function u(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.site_links_data_consented;
      return (
        (r == null ? void 0 : r.enroll_status) === "OPT_IN" &&
        o("AdCreativeFeatureActionTypeUtils").isExplicitAdvertiserActionType(
          r == null || (n = r.action_metadata) == null ? void 0 : n.type,
        )
      );
    }
    function c(e) {
      var t,
        n,
        r =
          e == null ||
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null
            ? void 0
            : t.site_extensions;
      return (
        (r == null ? void 0 : r.enroll_status) === "OPT_IN" &&
        o("AdCreativeFeatureActionTypeUtils").isExplicitAdvertiserActionType(
          r == null || (n = r.action_metadata) == null ? void 0 : n.type,
        )
      );
    }
    ((l.SE_A_PLUS_C_FORMATS = e),
      (l.isSEFormatDefaultOnBlocklisted = s),
      (l.isSiteLinksPauseExemptByDataConsent = u),
      (l.isSiteLinksPauseExemptByFormatOptIn = c));
  },
  98,
);
