__d(
  "AdsMidFunnelExpansionProductExtensionUtils",
  [
    "AdCampaignDestination",
    "CatalogBusinessEventsLoggerHelper",
    "ClickToWhatsAppFeatureGating",
    "CurrentAdAccount",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (
        !e.isCTMAd ||
        n == null ||
        e.pageID !== n ||
        e.adAccountID !== t ||
        t !== r("CurrentAdAccount").getID()
      )
        return null;
      var o = r("gkx")("28299");
      if (!o) return null;
      var a = e.getCatalogID();
      return a == null ? null : { adAccountID: t, pageID: n, catalogID: a };
    }
    function s(e, t, n, r, o) {
      return (
        o &&
        e != null &&
        e.adAccountID === t &&
        e.pageID === n &&
        e.catalogID === r
      );
    }
    function u(e) {
      return e === "unstructured_data_to_product";
    }
    function c(e, t, n, r) {
      return (
        (r != null &&
          r.fetchedCatalogID === r.selectedCatalogID &&
          s(r.resolution, n, r.pageID, r.selectedCatalogID, r.isCTMAd)) ||
        u(e) ||
        (t == null
          ? void 0
          : t.some(function (e) {
              return e.account_id === n;
            })) === !0
      );
    }
    function d(e) {
      if ((e === void 0 && (e = !1), e)) {
        r("gkx")("15546");
        return;
      }
      r("gkx")("16110");
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
      if ((e === void 0 && (e = !0), e)) return r("qex")._("3468") === !0;
      var t = r("qex")._("3474"),
        n = t === !0;
      return (
        r("CatalogBusinessEventsLoggerHelper")
          .getAdsCreationLogger()
          .setEvent("ads_manager_onsite_leadgen_pe_qe_exposure")
          .setAdAccountID(r("CurrentAdAccount").getID())
          .setActionData({
            experimentGroupValue: m(t),
            is_enabled: String(n),
            universe: "pe_expansion_leads_instant_form_universe",
          })
          .log(),
        n
      );
    }
    function _(e) {
      if ((e === void 0 && (e = !1), e)) {
        r("gkx")("1779");
        return;
      }
      r("gkx")("1984");
    }
    function f(e) {
      if ((e === void 0 && (e = !1), e)) {
        r("gkx")("1987");
        return;
      }
      r("gkx")("2038");
    }
    function g() {
      r("gkx")("677") !== !0 && r("qex")._("3776");
    }
    function h(e, t) {
      return (
        u(e) &&
        t &&
        !o("ClickToWhatsAppFeatureGating").isCTWAAutogenCatalogTreatmentEnabled(
          r("AdCampaignDestination").WHATSAPP,
        )
      );
    }
    function y(e) {
      var t;
      r("justknobx")._("5734") ||
        r("CatalogBusinessEventsLoggerHelper")
          .getAdsCreationLogger()
          .setEvent("ads_manager_x2p_offsite_leadgen_pe_eligibility")
          .setAdAccountID(r("CurrentAdAccount").getID())
          .setCatalogID(e.catalogID)
          .setActionData({
            adgroup_id: e.adgroupID == null ? "" : String(e.adgroupID),
            catalog_id: e.catalogID == null ? "" : String(e.catalogID),
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
    ((l.getResolvedCTMCatalogPickerContext = e),
      (l.isResolvedCTMCatalogSelection = s),
      (l.isX2PCatalogCreationSource = u),
      (l.shouldIncludeSelectedCatalogForAdAccount = c),
      (l.isLeadsxInstantFormPEEnabledAATest = d),
      (l.isLeadsxInstantFormPEEnabled = p),
      (l.isMidFunnelExpansionPEGuidanceAdoptionAATest = _),
      (l.isMidFunnelExpansionPEGuidanceNoHarmAATest = f),
      (l.logX2POffsiteLeadGenIBTExposure = g),
      (l.isX2PCatalogDefaultOnBlocked = h),
      (l.logX2POffsiteLeadGenPEEligibility = y));
  },
  98,
);
