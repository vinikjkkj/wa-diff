__d(
  "AdsAdPreviewRenderSpecUtils",
  [
    "AdsAdgroupUtils",
    "AdsAppUrlUtils",
    "AdsArLinkUtils",
    "AdsAssetFeedUtils",
    "AdsInteractiveComponentConstants",
    "adsInteractiveComponentsUtils",
    "getByPath",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new WeakMap(),
      s = new Set([
        "USER_ENROLLED",
        "USER_ENROLLED_NON_DCO",
        "DISABLED",
        "USER_ENROLLED_AUTOFLOW",
      ]),
      u = [
        {
          name: "Autoflow Plan A",
          getIsUnsupported: o("AdsAssetFeedUtils").isAutomaticFlow,
        },
        { name: "AR Ad", getIsUnsupported: o("AdsArLinkUtils").isArAdCreative },
        {
          name: "Contains app without product tags",
          getIsUnsupported: function (t) {
            var e,
              n,
              a,
              i,
              l = !!(
                ((e = t.creative) == null
                  ? void 0
                  : e.use_page_actor_override) !== !0 &&
                (((n = t.creative) == null ||
                (n = n.object_story_spec) == null ||
                (n = n.link_data) == null ||
                (n = n.call_to_action) == null ||
                (n = n.value) == null
                  ? void 0
                  : n.application) != null ||
                  (!(
                    (a = t.creative) == null ||
                    (a = a.asset_feed_spec) == null ||
                    (a = a.call_to_actions) == null
                  ) &&
                    a.some(function (e) {
                      return (
                        r("getByPath")(e, ["value", "application"]) != null
                      );
                    })) ||
                  r("AdsAppUrlUtils").isAppStoreURL(
                    (i = t.creative) == null ||
                      (i = i.object_story_spec) == null ||
                      (i = i.link_data) == null
                      ? void 0
                      : i.link,
                  ))
              ),
              s = o(
                "adsInteractiveComponentsUtils",
              ).adgroupHasInteractiveComponents(
                t,
                o("AdsInteractiveComponentConstants").SHOPPING_PRODUCT_TAG,
              );
            return l && !s;
          },
        },
        {
          name: "Unsupported DoF Spec",
          getIsUnsupported: function (t) {
            var e, n;
            return (
              o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t) ||
              (((e = t.creative) == null
                ? void 0
                : e.degrees_of_freedom_spec) != null &&
                ((n = t.creative) == null
                  ? void 0
                  : n.degrees_of_freedom_spec.creative_features_spec) == null &&
                !s.has(
                  t.creative.degrees_of_freedom_spec.degrees_of_freedom_type,
                ))
            );
          },
        },
        {
          name: "PAC Phase 1",
          getIsUnsupported: function (t) {
            var e;
            return (
              (t == null || (e = t.creative) == null
                ? void 0
                : e.platform_customizations) != null
            );
          },
        },
        {
          name: "Dynamic Language Optimization",
          getIsUnsupported: function (t) {
            return o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(t);
          },
        },
        {
          name: "DC Asset Customization",
          getIsUnsupported: function (t) {
            return o("AdsAssetFeedUtils").isDCAssetCustomizationAdgroupFromSpec(
              t,
            );
          },
        },
        {
          name: "Localized Placements",
          getIsUnsupported: function (t) {
            return o(
              "AdsAssetFeedUtils",
            ).isLocalizedPlacementsAdgroupFromRecord(t);
          },
        },
        {
          name: "DCO Carousel",
          getIsUnsupported: function (t) {
            return (
              o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(t) &&
              o("AdsAssetFeedUtils").hasCarouselFormat(t)
            );
          },
        },
        {
          name: "Has scrapped image",
          getIsUnsupported: function (t) {
            var e = r("qex")._("1845");
            return o("AdsAdgroupUtils").hasScrapedImage(t) && !e;
          },
        },
        {
          name: "Has poll",
          getIsUnsupported: function (t) {
            return o(
              "adsInteractiveComponentsUtils",
            ).adgroupHasInteractiveComponents(
              t,
              o("AdsInteractiveComponentConstants")
                .INTERACTIVE_COMPONENT_POLL_TYPE,
            );
          },
        },
      ];
    function c(t) {
      var n = e.get(t);
      if (n != null) return n;
      var r = !u.some(function (e) {
        var n = e.getIsUnsupported;
        return n(t);
      });
      return (e.set(t, r), r);
    }
    l.isRenderSpecSupported = c;
  },
  98,
);
