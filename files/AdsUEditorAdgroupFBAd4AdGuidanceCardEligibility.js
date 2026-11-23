__d(
  "AdsUEditorAdgroupFBAd4AdGuidanceCardEligibility",
  ["AdDraftFragmentSource", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a =
          (t = (n = e.routeMarkers) == null ? void 0 : n.entry_point) != null
            ? t
            : (o = e.routeMarkers) == null
              ? void 0
              : o.nav_entry_point;
      return (
        a === "fb_ad4ad_am_landing_entrypoint" &&
        e.selectedAdgroupIDs.length === 1 &&
        e.draftSource === r("AdDraftFragmentSource").FB_AD4AD_AM_LANDING
      );
    }
    function s(e) {
      return e ? r("gkx")("27497") : !1;
    }
    ((l.isFBAd4AdGuidanceCardEligible = e), (l.canSeeFBAd4AdWarmStart = s));
  },
  98,
);
