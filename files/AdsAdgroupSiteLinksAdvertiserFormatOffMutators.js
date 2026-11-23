__d(
  "AdsAdgroupSiteLinksAdvertiserFormatOffMutators",
  [
    "AdCreativeFeatureActionTypeUtils",
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupRecordAccessors",
    "AdsAutomaticFlowUtils",
    "AdsFlexibleFormatAdexUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e.source_ad_id == null &&
        e.id != null &&
        r("AdsAdgroupDraftFragmentStore").isNew(e.id)
      );
    }
    function s(e) {
      return (
        !o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(e) &&
        !o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0)
      );
    }
    function u(e) {
      var t,
        n =
          (t = r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.get(e)) == null
            ? void 0
            : t.find(function (e) {
                return e.get("format") === "video_slideshow";
              }),
        o = n == null ? void 0 : n.get("data_source"),
        a =
          o instanceof r("immutable").List
            ? o.toArray()
            : Array.isArray(o)
              ? o
              : [];
      return a.length > 0 && !a.includes("site_links");
    }
    function c(e) {
      var t,
        n,
        r =
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null
            ? void 0
            : t.site_extensions;
      return (
        (r == null ? void 0 : r.enroll_status) === "OPT_OUT" &&
        o("AdCreativeFeatureActionTypeUtils").isExplicitAdvertiserActionType(
          r == null || (n = r.action_metadata) == null ? void 0 : n.type,
        )
      );
    }
    function d(e) {
      var t;
      return (
        ((t = e.metadata) == null ? void 0 : t.is_pca_unified_format_ad) ===
          !0 && c(e)
      );
    }
    function m(e, t) {
      var n, o, a;
      return !c(e) ||
        ((n = t.creative) == null ||
        (n = n.degrees_of_freedom_spec) == null ||
        (n = n.creative_features_spec) == null ||
        (n = n.site_extensions) == null
          ? void 0
          : n.enroll_status) !== "OPT_OUT"
        ? t
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
            (o =
              (a = e.creative) == null ||
              (a = a.degrees_of_freedom_spec) == null ||
              (a = a.creative_features_spec) == null ||
              (a = a.site_extensions) == null ||
              (a = a.action_metadata) == null
                ? void 0
                : a.type) != null
              ? o
              : "MANUAL",
          )(t);
    }
    ((l.isNewUncopiedAd = e),
      (l.doesCarouselDefaultOnTurnOnVideoSlideshow = s),
      (l.hasVideoSlideshowSiteLinksFTSOptOut = u),
      (l.isAdvertiserSiteExtensionsOptOut = c),
      (l.hasPCAAdvertiserSiteExtensionsOptOut = d),
      (l.keepAdvertiserSiteExtensionsOptOut = m));
  },
  98,
);
