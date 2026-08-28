__d(
  "AdsProductExtensionsUtil",
  [
    "AdsAutomaticFlowUtils",
    "AdsDynamicAdsUtils",
    "AdsInterfacesLogger",
    "PEFunnelLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsDynamicAdsUtils").isDynamicAd(e),
        n = o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(e),
        r = !t && n,
        a = {
          adgroup_id: e.id,
          object_level: "ad_level",
          object_creation_source: s(e) ? "existing_post" : void 0,
        },
        i = babelHelpers.extends(
          { is_dynamic_ad: t, is_static_single_image_or_video: n },
          o("PEFunnelLogger").getPEGKBlocklistFields(),
        );
      return (
        r
          ? o("PEFunnelLogger").logL1EligibilityPass(a, i)
          : o("PEFunnelLogger").logL1EligibilityFail(a, i),
        r
      );
    }
    function s(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s =
          ((t = e.creative) == null ? void 0 : t.object_id) != null &&
          ((n = e.creative) == null ? void 0 : n.call_to_action) == null,
        u =
          ((r = e.creative) == null ? void 0 : r.source_instagram_media_id) !=
          null,
        c =
          ((a = e.creative) == null ? void 0 : a.object_story_id) != null &&
          ((i = e.creative) == null ? void 0 : i.call_to_action) == null,
        d =
          ((l = e.creative) == null ? void 0 : l.object_story_spec) == null &&
          (c || u || s) &&
          !o("AdsDynamicAdsUtils").isDynamicAd(e);
      return d;
    }
    function u(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.id),
          (i.is_enabled = t),
          (i.custom_event_type = n),
          (i.objective = o),
          (i.subsequent_data = JSON.stringify({ promoted_object_type: a })),
          i),
        eventName: "ads_aplusc_product_extension_eligibility_selector",
      });
    }
    ((l.isAdgroupEligibleForProductExtensions = e),
      (l.isFromExistingPost = s),
      (l.logEligibilityResult = u));
  },
  98,
);
