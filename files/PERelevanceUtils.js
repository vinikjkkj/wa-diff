__d(
  "PERelevanceUtils",
  [
    "AdCreativeFeatureActionTypeUtils",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsConnectedSourcesProductsOptOutUtils",
    "AdsCreativeEnrollmentDefaultOnStoreUtils",
    "AdsGovernedCreativeFeaturesMutators",
    "AdsMutators",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "Instant",
    "PEMidFunnelLLMRelevanceUtils",
    "gkx",
    "immutable",
    "justknobx",
    "performanceAbsoluteNow",
    "shouldServeSERelevanceSessionSiteLinks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = e instanceof r("immutable").Map ? e.get("extension_type") : null;
      return typeof t == "string" && t.toLowerCase() === "product_extensions";
    }
    function u(e) {
      var t = null;
      return (
        (e instanceof r("immutable").List || e instanceof r("immutable").Map) &&
          (t = e.filterNot(s)),
        t == null || t.isEmpty() ? null : t
      );
    }
    function c(e) {
      var t, n;
      if (e instanceof r("immutable").Map) {
        var o = e.get("extension_specs");
        if (!(o instanceof r("immutable").List)) return null;
        for (var a of o)
          if (
            a instanceof r("immutable").Map &&
            a.get("extension_type") === "product_extensions"
          ) {
            var i = a.get("selected_strategy_id"),
              l = a.get("virtual_pset_id");
            return {
              extension_type: "product_extensions",
              selected_strategy_id: i != null ? String(i) : null,
              virtual_pset_id: l != null ? String(l) : null,
            };
          }
        return null;
      }
      return (t =
        e == null || (n = e.extension_specs) == null
          ? void 0
          : n.find(function (e) {
              return (
                (e == null ? void 0 : e.extension_type) === "product_extensions"
              );
            })) != null
        ? t
        : null;
    }
    function d(e) {
      return e === !0 ? !1 : r("gkx")("2898");
    }
    function m(e) {
      return e === !0 ? !1 : r("gkx")("1972");
    }
    function p() {
      return m() || r("gkx")("19674");
    }
    function _(e) {
      return e === !0 ? !1 : m(e) || d(e);
    }
    function f() {
      return r("justknobx")._("5814");
    }
    function g(e) {
      return e && f();
    }
    function h(e) {
      return r("gkx")("27429") ? m(e) : !1;
    }
    function y(e, t, n) {
      return m(e)
        ? (o("PEMidFunnelLLMRelevanceUtils").isPEMidFunnelLLMRelevanceObjective(
            n,
          ) &&
            t !== !0 &&
            o(
              "PEMidFunnelLLMRelevanceUtils",
            ).isPEMidFunnelLLMRelevancePopulation() &&
            o(
              "PEMidFunnelLLMRelevanceUtils",
            ).isPEMidFunnelLLMRelevanceEnabled()) ||
          r("gkx")("26739")
          ? !0
          : t === !0 && r("gkx")("27429")
        : !1;
    }
    function C(e, t, n, a) {
      return (e !== r("AdsAPIObjectives").OUTCOME_LEADS &&
        e !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) ||
        !o("AdsPCAUnifiedFormatEligibilityUtils").isWebsiteConversionLocation(
          t,
        ) ||
        a === !0 ||
        n === !0
        ? !1
        : r("gkx")("2374");
    }
    function b() {
      return r("justknobx")._("3925");
    }
    function v(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.ad_extensions_relevancy_spec;
      return p() && ((n = c(r)) == null ? void 0 : n.virtual_pset_id) != null;
    }
    function S(e, t) {
      var n,
        o,
        a,
        i =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null
            ? void 0
            : n.product_extensions,
        l =
          t === "carousel"
            ? i == null || (o = i.customizations) == null
              ? void 0
              : o.pe_carousel
            : i;
      return (
        (l == null ? void 0 : l.enroll_status) === "OPT_OUT" &&
        (l == null || (a = l.action_metadata) == null ? void 0 : a.type) ===
          "MANUAL" &&
        r("justknobx")._("8587")
      );
    }
    function R(e) {
      var t, n, r;
      return p() &&
        (t =
          (n = c(
            (r = e.creative) == null || (r = r.creative_sourcing_spec) == null
              ? void 0
              : r.ad_extensions_relevancy_spec,
          )) == null
            ? void 0
            : n.virtual_pset_id) != null
        ? t
        : null;
    }
    function L(e) {
      var t, n, r;
      return (t =
        (n = c(
          (r = e.creative) == null || (r = r.creative_sourcing_spec) == null
            ? void 0
            : r.ad_extensions_relevancy_spec,
        )) == null
          ? void 0
          : n.selected_strategy_id) != null
        ? t
        : null;
    }
    function E(e) {
      var t;
      if (!p()) return !1;
      var n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.ad_extensions_relevancy_spec,
        r = c(n);
      return (
        (r == null ? void 0 : r.virtual_pset_id) != null ||
        (r == null ? void 0 : r.selected_strategy_id) != null
      );
    }
    function k(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.ad_extensions_relevancy_spec;
      return ((n = c(r)) == null ? void 0 : n.selected_strategy_id) != null;
    }
    function I(e) {
      var t, n;
      return (t = (n = c(e)) == null ? void 0 : n.selected_strategy_id) != null
        ? t
        : null;
    }
    function T(e) {
      var t;
      if (!p()) return null;
      var n = c(e);
      return (n == null ? void 0 : n.virtual_pset_id) == null
        ? null
        : (t = n == null ? void 0 : n.selected_strategy_id) != null
          ? t
          : null;
    }
    function D(e) {
      var t, n;
      return p() &&
        (t = (n = c(e)) == null ? void 0 : n.virtual_pset_id) != null
        ? t
        : null;
    }
    function x(e) {
      return D(e) != null;
    }
    function $(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.ad_extensions_relevancy_spec,
        o =
          n instanceof r("immutable").Map &&
          r("shouldServeSERelevanceSessionSiteLinks")()
            ? n
                .set(
                  "extension_specs",
                  n.get("se_ai_relevancy_ent_id") == null
                    ? null
                    : u(n.get("extension_specs")),
                )
                .filter(function (e, t) {
                  return e != null && t !== "ai_relevancy_ent_id";
                })
            : null;
      return o == null || o.isEmpty()
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.ad_extensions_relevancy_spec.delete(
            e,
          )
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.ad_extensions_relevancy_spec.set(o)(
            e,
          );
    }
    function P(e) {
      return e === "MANUAL" ? "MANUAL" : "DEFAULT";
    }
    function N(e, t, n) {
      var r,
        a,
        i,
        l,
        s =
          (r = e.creative) == null ||
          (r = r.degrees_of_freedom_spec) == null ||
          (r = r.creative_features_spec) == null
            ? void 0
            : r.product_extensions,
        u =
          t === "carousel"
            ? s == null || (a = s.customizations) == null
              ? void 0
              : a.pe_carousel
            : s;
      return (
        ((i = e.creative) == null ||
        (i = i.creative_sourcing_spec) == null ||
        (i = i.catalog) == null
          ? void 0
          : i.enroll_status) === "OPT_IN" &&
        (u == null ? void 0 : u.enroll_status) === "OPT_OUT" &&
        o("AdCreativeFeatureActionTypeUtils").isExplicitAdvertiserActionType(
          u == null || (l = u.action_metadata) == null ? void 0 : l.type,
        ) &&
        y(void 0, o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e), n)
      );
    }
    function M(e, t, a) {
      t === void 0 && (t = "MANUAL");
      var i = n("AdsAdgroupFormatTransformationMutators"),
        l = i.adsAdgroupMixedCollageRelevanceOptInMutator,
        s = i.adsAdgroupReactiveControlOptionOptInWithBoundleMutationMutator;
      if (
        (t !== "MANUAL" &&
          o(
            "AdsGovernedCreativeFeaturesMutators",
          ).isCreativeSetupGovernanceEnabled() &&
          o(
            "AdsCreativeEnrollmentDefaultOnStoreUtils",
          ).isCreativeEnrollmentDefaultOnVetoedForSelectedAccount("catalog")) ||
        (t !== "MANUAL" &&
          o(
            "AdsConnectedSourcesProductsOptOutUtils",
          ).shouldSkipDefaultCatalogForStickyProductsOptOut(e))
      )
        return e;
      var u = P(t),
        c = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.catalog.enroll_status.set("OPT_IN"),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.catalog.action_metadata.type.set(t),
        )(e);
      return (
        N(e, "sa_collection", a) || (c = s(c, "sa_collection", "catalog", u)),
        r("justknobx")._("1114") &&
          !N(e, "carousel", a) &&
          (c = s(c, "carousel", "catalog", u)),
        (c = l(c)),
        c
      );
    }
    function w(e, t) {
      t === void 0 && (t = "MANUAL");
      var r = n("AdsAdgroupFormatTransformationMutators"),
        o = r.adsAdgroupReactiveControlOptionOptOutWithBoundleMutationMutator,
        a = P(t),
        i = o(e, "sa_collection", "catalog", void 0, a);
      return ((i = o(i, "carousel", "catalog", void 0, a)), i);
    }
    function A(e, t, n) {
      return e && !(t === 1 && h(n));
    }
    function F() {
      return r("justknobx")._("8513")
        ? o("Instant").now()
        : Math.floor((e || (e = r("performanceAbsoluteNow")))() / 1e3);
    }
    ((l.getProductExtensionsSpec = c),
      (l.isPEVisibleProductsAdexGKOrLLMGKEnabled = _),
      (l.isPENestedViewTransactionalSaveEnabled = f),
      (l.isPEProductsToggleGatingEnabled = g),
      (l.isPELLMRelevanceEPAEnabled = h),
      (l.isPELLMProductsSectionInCreativeSetupEnabled = y),
      (l.isPEProductsSectionNoSessionEnabled = C),
      (l.isPEVisibleProductsRemoveProductsEnabled = b),
      (l.hasVirtualProductSetId = v),
      (l.isCatalogFormatOptedOutByHand = S),
      (l.getVirtualProductSetIdFromAdgroup = R),
      (l.getSelectedRelevancyStrategyIDFromAdgroup = L),
      (l.hasLLMRelevanceStrategySelected = E),
      (l.hasSelectedRelevancyStrategyIgnoringGK = k),
      (l.getSelectedRelevancyStrategyIDIgnoringGK = I),
      (l.getLLMStrategySelectionFromRelevancySpec = T),
      (l.getVirtualProductSetIDFromRelevancySpec = D),
      (l.hasVirtualProductSetIDFromRelevancySpec = x),
      (l.mayBeDeleteAdExtensionsRelevancySpecFromAdgroup = $),
      (l.applyVirtualPsetCatalogAndFormatOptIn = M),
      (l.applyVirtualPsetCatalogAndFormatOptOut = w),
      (l.isExistingPostExcludedFromLLMRelevance = A),
      (l.getRelevanceCooldownStartSeconds = F));
  },
  98,
);
