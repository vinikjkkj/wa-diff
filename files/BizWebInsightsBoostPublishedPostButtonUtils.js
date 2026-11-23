__d(
  "BizWebInsightsBoostPublishedPostButtonUtils",
  [
    "AdsAIUtils",
    "MAIBABoostWithAIButtonUtils",
    "TofuEntityPostTypeUtils.facebook",
    "TofuEntityTypeUtils.facebook",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("qex")._("792") === !0 || r("qex")._("4899") === !0;
    }
    function s() {
      return r("qex")._("690") === !0;
    }
    function u() {
      return s() || r("qex")._("4846") === !0;
    }
    function c(e) {
      var t = e.isPrimaryPostBoostable,
        n = e.postType,
        r = e.shouldBoostCrossPosts;
      return (
        o("MAIBABoostWithAIButtonUtils").isSupportedBoostWithAITofuPostType(
          n,
        ) &&
        u() &&
        (r || t)
      );
    }
    function d(e) {
      var t = e.adsLWIEntryPoint,
        n = e.hasBlockingIGIssues,
        r = e.hasPage,
        a = e.hasProduct,
        i = e.hasSelectedAssets,
        l = e.isBoostable,
        s = e.isBoostWithAIQeEligible,
        u = e.isSupportedPostType;
      return (
        t === "business_content_manager_list_view" &&
        !n &&
        r &&
        a &&
        i &&
        l &&
        s &&
        u &&
        o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
          "BizWebInsightsBoostPublishedPostButton",
          !1,
        )
      );
    }
    function m(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s,
        u = e == null ? void 0 : e.entity_id,
        c = o("TofuEntityTypeUtils.facebook").toJSEnum(
          e == null ? void 0 : e.entity_type,
        ),
        d =
          e != null
            ? o("TofuEntityPostTypeUtils.facebook").toJSEnum(
                (n = e.entity_info) == null ? void 0 : n.post_type,
              )
            : null,
        m = e == null || (r = e.entity_info) == null ? void 0 : r.title,
        p = e == null ? void 0 : e.entity_type,
        _ = e == null ? void 0 : e.entity_info,
        f =
          u == null || d == null || _ == null
            ? []
            : [
                {
                  entityType: c,
                  isBoostable:
                    ((a = _.lwi_info) == null
                      ? void 0
                      : a.boost_unavailable_info) == null,
                  selectedAsset: {
                    id: u,
                    name: m != null ? m : "",
                    type: o(
                      "MAIBABoostWithAIButtonUtils",
                    ).getMAIBAAssetTypeFromTofuPostType(d),
                  },
                },
              ].concat(
                t
                  ? ((i = _.cross_posted_entities) != null ? i : [])
                      .filter(function (e) {
                        var t = e.entity_type;
                        return t !== p;
                      })
                      .map(function (e) {
                        var t,
                          n,
                          r,
                          a,
                          i = o("TofuEntityPostTypeUtils.facebook").toJSEnum(
                            (t = e.entity_info) == null ? void 0 : t.post_type,
                          ),
                          l = e.entity_id;
                        return i == null || l == null
                          ? null
                          : {
                              entityType: o(
                                "TofuEntityTypeUtils.facebook",
                              ).toJSEnum(e.entity_type),
                              isBoostable:
                                ((n = e.entity_info) == null ||
                                (n = n.lwi_info) == null
                                  ? void 0
                                  : n.boost_unavailable_info) == null,
                              selectedAsset: {
                                id: l,
                                name:
                                  (r =
                                    (a = e.entity_info) == null
                                      ? void 0
                                      : a.title) != null
                                    ? r
                                    : "",
                                type: o(
                                  "MAIBABoostWithAIButtonUtils",
                                ).getMAIBAAssetTypeFromTofuPostType(i),
                              },
                            };
                      })
                      .filter(Boolean)
                  : [],
              ),
        g = o("MAIBABoostWithAIButtonUtils").selectMAIBABoostWithAIAssets(
          f,
          _ == null ? void 0 : _.boost_with_ai_business_presence_type,
        ),
        h = g.map(function (e) {
          return e.selectedAsset;
        });
      return {
        hasCrossPosts: h.length > 1,
        isSupportedPostType: o(
          "MAIBABoostWithAIButtonUtils",
        ).isSupportedBoostWithAITofuPostType(d),
        product: o(
          "MAIBABoostWithAIButtonUtils",
        ).getMAIBABoostWithAIProductFromEntityType(
          (l = (s = g[0]) == null ? void 0 : s.entityType) != null ? l : c,
        ),
        selectedAssets: h,
      };
    }
    ((l.getIsBoostWithAIQeEligibleSilently = e),
      (l.getIsBoostWithAIBetaQeEligibleWithExposure = s),
      (l.getShouldRenderBoostWithAIMenuItem = c),
      (l.getIsBoostChoiceModalEligible = d),
      (l.getMAIBABoostWithAILaunchParams = m));
  },
  98,
);
