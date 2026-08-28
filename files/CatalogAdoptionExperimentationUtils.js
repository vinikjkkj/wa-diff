__d(
  "CatalogAdoptionExperimentationUtils",
  [
    "AdsMidFunnelExpansionProductExtensionUtils",
    "AdsProductGrowthH2Round1HbtExposure",
    "CatalogAdoptionExperimentationFalcoEvent",
    "CurrentAdAccount",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "pe_adoption_ads_manager";
    function s(e, t, n, a, i, l, u) {
      (i === void 0 && (i = !1),
        l === void 0 && (l = !1),
        u === void 0 && (u = !0));
      var c =
          e === "a2p_enhancements_2026_q1_v2"
            ? i
              ? r("gkx")("17238")
              : r("gkx")("17240")
            : e === "catalog_pear_h2_round_2_experiment_holdout"
              ? i
                ? r("gkx")("9140")
                : r("gkx")("9277")
              : e === "cat_meta_product_growth_2026_h2_experiment_round_1"
                ? i
                  ? r("gkx")("2226")
                  : r("gkx")("2495")
                : e === "meta_product_growth_2026_h2_launch_round_1"
                  ? i
                    ? r("gkx")("17193")
                    : r("gkx")("17632")
                  : e === "cat_meta_product_growth_2026_h2_ibt"
                    ? i
                      ? r("gkx")("1583")
                      : r("gkx")("1588")
                    : e === "mid_funnel_expansion_ctx_pe"
                      ? i
                        ? r("gkx")("10003")
                        : r("gkx")("11310")
                      : e === "pe_expansion_engagement_on_your_ad"
                        ? i
                          ? r("gkx")("21459")
                          : r("gkx")("21465")
                        : e === "pe_expansion_leads_website"
                          ? (function () {
                              return (
                                o(
                                  "AdsMidFunnelExpansionProductExtensionUtils",
                                ).isLeadsxWebsitePEEnabledV2AATest(i),
                                i ? r("gkx")("23935") : r("gkx")("23936")
                              );
                            })()
                          : e === "x2p_offsite_leadgen_pe_universe"
                            ? (function () {
                                return (
                                  o(
                                    "AdsMidFunnelExpansionProductExtensionUtils",
                                  ).isX2POffsiteLeadGenPEEnabledAATest(i),
                                  o(
                                    "AdsMidFunnelExpansionProductExtensionUtils",
                                  ).isX2POffsiteLeadGenPEEnabled(i)
                                );
                              })()
                            : e === "pe_expansion_midfunnel_guidance"
                              ? (function () {
                                  return (
                                    o(
                                      "AdsMidFunnelExpansionProductExtensionUtils",
                                    ).isMidFunnelExpansionPEGuidanceAdoptionAATest(
                                      i,
                                    ),
                                    o(
                                      "AdsMidFunnelExpansionProductExtensionUtils",
                                    ).isMidFunnelExpansionPEGuidanceNoHarmAATest(
                                      i,
                                    ),
                                    i ? r("gkx")("22744") : r("gkx")("22682")
                                  );
                                })()
                              : e === "pe_endpoint_dedup_q2_2026"
                                ? i
                                  ? r("gkx")("2923")
                                  : r("gkx")("2984")
                                : e === "dpa_sort_catalogs_by_revenue"
                                  ? i
                                    ? r("gkx")("13014")
                                    : r("gkx")("13027")
                                  : e === "test"
                                    ? i
                                      ? r("gkx")("2769")
                                      : r("gkx")("3520")
                                    : l,
        d = r("CurrentAdAccount").getID();
      return (
        u &&
          r("CatalogAdoptionExperimentationFalcoEvent").log(function () {
            return {
              event: "experiment_check",
              experiment_name: e,
              in_experiment: c,
              disable_exposure_logging: i,
              tag: t,
              ad_account_id: d,
              ad_group_id: n,
            };
          }),
        !c && a != null ? s(a, t, n, null, i, l) : c
      );
    }
    function u(t, n, a) {
      var i = a.HBTName,
        l = i === void 0 ? null : i,
        u = a.adGroupId,
        c = u === void 0 ? null : u,
        d = a.logToFalcon,
        m = d === void 0 ? !0 : d,
        p = a.silent;
      if (
        s(t, n, c, l, p, !1, m) ||
        s("cat_meta_product_growth_2026_h2_ibt", n, c, null, p, !1, m)
      )
        return !0;
      var _ = s(
        "meta_product_growth_2026_h2_launch_round_1",
        n,
        c,
        null,
        p,
        !1,
        m,
      );
      return (
        p ||
          o(
            "AdsProductGrowthH2Round1HbtExposure",
          ).logProductGrowthH2Round1HbtExposure(
            e,
            r("CurrentAdAccount").getID(),
            _,
            !1,
          ),
        _
      );
    }
    function c(e, t, n) {
      var r = n.HBTName,
        o = r === void 0 ? null : r,
        a = n.adGroupId,
        i = a === void 0 ? null : a,
        l = n.logToFalcon,
        u = l === void 0 ? !0 : l,
        c = n.silent;
      return s(e, t, i, o, c, !1, u);
    }
    ((l.PRODUCT_GROWTH_H2_ROUND_1_HBT_FEATURE_NAME = e),
      (l.checkExpForCatalogAdoptionExperimentation = s),
      (l.checkExpForCatalogAdoptionExperimentationOrIBT = u),
      (l.checkExpForCatalogAdoptionExperimentationNoBundles = c));
  },
  98,
);
