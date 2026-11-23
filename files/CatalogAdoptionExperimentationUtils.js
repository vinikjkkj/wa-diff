__d(
  "CatalogAdoptionExperimentationUtils",
  [
    "AdsMidFunnelExpansionProductExtensionUtils",
    "CatalogAdoptionExperimentationFalcoEvent",
    "CurrentAdAccount",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(t, n, a, i, l, s, u) {
      (l === void 0 && (l = !1),
        s === void 0 && (s = !1),
        u === void 0 && (u = !0));
      var c =
          t === "a2p_enhancements_2026_q1_v2"
            ? l
              ? r("gkx")("17238")
              : r("gkx")("17240")
            : t === "catalog_pear_h2_round_2_experiment_holdout"
              ? l
                ? r("gkx")("9140")
                : r("gkx")("9277")
              : t === "cat_meta_product_growth_2026_h2_experiment_round_1"
                ? l
                  ? r("gkx")("2226")
                  : r("gkx")("2495")
                : t === "cat_meta_product_growth_2026_h2_ibt"
                  ? l
                    ? r("gkx")("1583")
                    : r("gkx")("1588")
                  : t === "pe_expansion_engagement_on_your_ad"
                    ? l
                      ? r("gkx")("21459")
                      : r("gkx")("21465")
                    : t === "pe_expansion_leads_instant_form"
                      ? (function () {
                          return (
                            o(
                              "AdsMidFunnelExpansionProductExtensionUtils",
                            ).isLeadsxInstantFormPEEnabledAATest(l),
                            o(
                              "AdsMidFunnelExpansionProductExtensionUtils",
                            ).isLeadsxInstantFormPEEnabled(l)
                          );
                        })()
                      : t === "pe_expansion_midfunnel_guidance"
                        ? (function () {
                            return (
                              o(
                                "AdsMidFunnelExpansionProductExtensionUtils",
                              ).isMidFunnelExpansionPEGuidanceAdoptionAATest(l),
                              o(
                                "AdsMidFunnelExpansionProductExtensionUtils",
                              ).isMidFunnelExpansionPEGuidanceNoHarmAATest(l),
                              l ? r("gkx")("22744") : r("gkx")("22682")
                            );
                          })()
                        : t === "pe_endpoint_dedup_q2_2026"
                          ? l
                            ? r("gkx")("2923")
                            : r("gkx")("2984")
                          : t === "dpa_sort_catalogs_by_revenue"
                            ? l
                              ? r("gkx")("13014")
                              : r("gkx")("13027")
                            : t === "a2c_page_website_domain_guardrail_2026_q4"
                              ? l
                                ? r("gkx")("28612")
                                : r("gkx")("28613")
                              : s,
        d = r("CurrentAdAccount").getID();
      return (
        u &&
          r("CatalogAdoptionExperimentationFalcoEvent").log(function () {
            return {
              event: "experiment_check",
              experiment_name: t,
              in_experiment: c,
              disable_exposure_logging: l,
              tag: n,
              ad_account_id: d,
              ad_group_id: a,
            };
          }),
        !c && i != null ? e(i, n, a, null, l, s) : c
      );
    }
    function s(t, n, r) {
      var o = r.HBTName,
        a = o === void 0 ? null : o,
        i = r.adGroupId,
        l = i === void 0 ? null : i,
        s = r.logToFalcon,
        u = s === void 0 ? !0 : s,
        c = r.silent;
      return e(t, n, l, a, c, !1, u);
    }
    ((l.checkExpForCatalogAdoptionExperimentation = e),
      (l.checkExpForCatalogAdoptionExperimentationNoBundles = s));
  },
  98,
);
