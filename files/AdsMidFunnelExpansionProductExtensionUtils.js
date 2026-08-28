__d(
  "AdsMidFunnelExpansionProductExtensionUtils",
  [
    "CatalogBusinessEventsLoggerHelper",
    "CurrentAdAccount",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "unstructured_data_to_product";
    }
    function s(e) {
      if ((e === void 0 && (e = !1), e)) {
        r("gkx")("22771");
        return;
      }
      r("gkx")("22772");
    }
    function u(e) {
      if ((e === void 0 && (e = !1), e)) {
        r("gkx")("23715");
        return;
      }
      r("gkx")("23716");
    }
    function c(e) {
      if ((e === void 0 && (e = !1), e)) {
        r("gkx")("1779");
        return;
      }
      r("gkx")("1984");
    }
    function d(e) {
      if ((e === void 0 && (e = !1), e)) {
        r("gkx")("1987");
        return;
      }
      r("gkx")("2038");
    }
    function m(e) {
      return e === !0
        ? "test"
        : e === !1
          ? "control"
          : e == null
            ? "not_in_universe"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function p(e) {
      if ((e === void 0 && (e = !0), e)) return r("qex")._("3498") === !0;
      var t = r("qex")._("2064"),
        n = t === !0;
      return (
        r("CatalogBusinessEventsLoggerHelper")
          .getAdsCreationLogger()
          .setEvent("ads_manager_x2p_offsite_leadgen_pe_qe_exposure")
          .setAdAccountID(r("CurrentAdAccount").getID())
          .setActionData({
            experimentGroupValue: m(t),
            is_enabled: String(n),
            universe: "x2p_offsite_leadgen_pe_universe",
          })
          .log(),
        n
      );
    }
    function _() {
      return r("qex")._("3498");
    }
    function f(e) {
      var t,
        n = m(h(!e.shouldLogExposure));
      if (!r("justknobx")._("5734")) {
        var o = m(_());
        r("CatalogBusinessEventsLoggerHelper")
          .getAdsCreationLogger()
          .setEvent("ads_manager_x2p_offsite_leadgen_pe_eligibility")
          .setAdAccountID(r("CurrentAdAccount").getID())
          .setCatalogID(e.catalogID)
          .setActionData({
            aa_experiment_group: n,
            adgroup_id: e.adgroupID == null ? "" : String(e.adgroupID),
            catalog_id: e.catalogID == null ? "" : String(e.catalogID),
            experiment_group: o,
            is_eligible_surface: String(e.isEligibleSurface),
            is_x2p_catalog: String(e.isX2PCatalog),
            page_id: e.pageID == null ? "" : String(e.pageID),
            product_set_id:
              e.productSetID == null ? "" : String(e.productSetID),
            should_log_exposure: String(e.shouldLogExposure),
            x2p_onboarding_status:
              (t = e.x2pOnboardingStatus) != null ? t : "null",
          })
          .log();
      }
    }
    function g(e) {
      (e === void 0 && (e = !0), h(e));
    }
    function h(e) {
      return e ? r("qex")._("4222") : r("qex")._("4234");
    }
    ((l.isX2PCatalogCreationSource = e),
      (l.isLeadsxWebsitePEEnabledAATest = s),
      (l.isLeadsxWebsitePEEnabledV2AATest = u),
      (l.isMidFunnelExpansionPEGuidanceAdoptionAATest = c),
      (l.isMidFunnelExpansionPEGuidanceNoHarmAATest = d),
      (l.isX2POffsiteLeadGenPEEnabled = p),
      (l.logX2POffsiteLeadGenPEEligibility = f),
      (l.isX2POffsiteLeadGenPEEnabledAATest = g));
  },
  98,
);
