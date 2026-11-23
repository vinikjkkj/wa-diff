__d(
  "AdsConnectedSourcesCatalogEnrollStatusUtils",
  ["PERelevanceUtils", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("justknobx")._("7724")
        ? {
            isProductExtensionDefaultOptOut:
              e == null ? void 0 : e.isProductExtensionDefaultOptOut,
            isProductExtensionOptOut:
              e == null ? void 0 : e.isProductExtensionOptOut,
          }
        : {};
    }
    function s(t, n) {
      return n == null
        ? t
        : babelHelpers.extends({}, e(t), {
            enrollStatus: "OPT_IN",
            productSetID: n,
            enrollActionType: "DEFAULT",
          });
    }
    var u = ["DEFAULT", "DEFAULT_OFF"];
    function c(e, t) {
      var n = e === "OPT_OUT";
      return {
        isProductExtensionDefaultOptOut: n && u.includes(t),
        isProductExtensionOptOut: n,
      };
    }
    function d(e) {
      return (
        (e == null ? void 0 : e.isProductExtensionOptOut) === !0 &&
        !(
          (e == null ? void 0 : e.isProductExtensionDefaultOptOut) === !0 &&
          r("justknobx")._("7724")
        )
      );
    }
    function m(e) {
      return d(e) && r("gkx")("29359");
    }
    function p(e) {
      return d(e) && r("gkx")("25146");
    }
    function _(e) {
      var t,
        n = e == null ? void 0 : e.catalog,
        o =
          (n == null ? void 0 : n.productData) != null ||
          (n == null ? void 0 : n.productSetID) != null,
        a =
          (n == null ? void 0 : n.isLLMStrategySelected) === !0 ||
          (e == null || (t = e.strategy) == null
            ? void 0
            : t.selectedStrategyID) != null;
      return (
        (!p(n) &&
          (((n == null ? void 0 : n.enrollStatus) === "OPT_IN" && o) || a)) ||
        ((n == null ? void 0 : n.isCarouselPEOptInWithoutCatalogConsent) ===
          !0 &&
          r("gkx")("22153"))
      );
    }
    function f(e) {
      var t;
      return (e == null ? void 0 : e.strategy) != null
        ? e.strategy.selectedStrategyID != null
        : (e == null || (t = e.catalog) == null
            ? void 0
            : t.isLLMStrategySelected) === !0;
    }
    function g(e) {
      var t = e == null ? void 0 : e.catalog;
      return (
        (t == null ? void 0 : t.enrollStatus) === "OPT_IN" &&
        ((t == null ? void 0 : t.productSetID) != null || f(e)) &&
        (t == null ? void 0 : t.enrollActionType) === "DEFAULT" &&
        !m(t)
      );
    }
    function h(e) {
      var t = e == null ? void 0 : e.catalog;
      return (t == null ? void 0 : t.enrollActionType) === "DEFAULT" && m(t);
    }
    function y(e) {
      var t,
        n,
        r,
        a = (t = e.creative) == null ? void 0 : t.creative_sourcing_spec,
        i = a == null ? void 0 : a.ad_extensions_relevancy_spec,
        l = o("PERelevanceUtils").getProductExtensionsSpec(i);
      return (
        (a == null || (n = a.catalog) == null ? void 0 : n.enroll_status) ===
          "OPT_IN" &&
        (a == null || (r = a.catalog) == null || (r = r.action_metadata) == null
          ? void 0
          : r.type) === "DEFAULT" &&
        (a == null ? void 0 : a.associated_product_set_id) == null &&
        (l == null ? void 0 : l.selected_strategy_id) != null &&
        (l == null ? void 0 : l.virtual_pset_id) != null &&
        o("PERelevanceUtils").getLLMStrategySelectionFromRelevancySpec(i) !=
          null
      );
    }
    function C(e) {
      var t,
        n,
        r,
        o,
        a,
        i =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.catalog,
        l =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null
            ? void 0
            : n.product_extensions;
      return {
        catalog: babelHelpers.extends(
          {
            enrollActionType:
              i == null || (r = i.action_metadata) == null ? void 0 : r.type,
            enrollStatus: i == null ? void 0 : i.enroll_status,
            isLLMStrategySelected: y(e),
          },
          c(
            l == null ? void 0 : l.enroll_status,
            l == null || (o = l.action_metadata) == null ? void 0 : o.type,
          ),
          {
            productSetID:
              (a = e.creative) == null || (a = a.creative_sourcing_spec) == null
                ? void 0
                : a.associated_product_set_id,
          },
        ),
      };
    }
    function b(e) {
      return r("justknobx")._("850")
        ? g(e())
          ? "defaulted_on"
          : "unavailable"
        : "not_required";
    }
    function v(e) {
      var t = e.associatedProductSetID,
        n = e.catalogEnrollStatus,
        r = e.isKnobEnabled,
        o = e.isPcaUnificationWs1BetaEnabled,
        a = e.l3CatalogID,
        i = e.productExtensionsEnrollStatus;
      return (
        r && o && a == null && (i === "OPT_IN" || n === "OPT_IN") && t != null
      );
    }
    ((l.getProductsOptOutFields = e),
      (l.getFirstEligibleCatalog = s),
      (l.getProductsOptOutFromSpec = c),
      (l.isProductsOptOutKeptOff = d),
      (l.isCatalogHiddenByPEOptOut = p),
      (l.getCatalogEnrollStatus = _),
      (l.hasActiveLLMStrategySelection = f),
      (l.isCatalogDefaultedOn = g),
      (l.isDefaultCatalogWithProductsOff = h),
      (l.getSavedCatalogPluginState = C),
      (l.getSEPEDefaultingState = b),
      (l.shouldShowSavedProductSetForOptOut = v));
  },
  98,
);
