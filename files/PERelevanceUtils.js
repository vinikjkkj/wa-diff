__d(
  "PERelevanceUtils",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("347");
    }
    function s(e) {
      return e === !0 ? !1 : r("gkx")("2898");
    }
    function u(e) {
      return e === !0 ? !1 : r("gkx")("1972");
    }
    function c(e) {
      return e === !0 ? !1 : u(e) || r("gkx")("19674");
    }
    function d(e) {
      return e === !0 ? !1 : s(e) || u(e);
    }
    function m() {
      return r("justknobx")._("3925");
    }
    function p(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.ad_extensions_relevancy_spec;
      return (
        c() &&
        (r == null || (n = r.get("extension_specs")) == null || n.some == null
          ? void 0
          : n.some(function (e) {
              return (
                (e == null ? void 0 : e.get("extension_type")) ===
                  "product_extensions" &&
                (e == null ? void 0 : e.get("virtual_pset_id")) != null
              );
            })) === !0
      );
    }
    function _(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.ad_extensions_relevancy_spec;
      return (
        c() &&
        (r == null || (n = r.get("extension_specs")) == null || n.some == null
          ? void 0
          : n.some(function (e) {
              return (
                (e == null ? void 0 : e.get("extension_type")) ===
                  "product_extensions" &&
                ((e == null ? void 0 : e.get("virtual_pset_id")) != null ||
                  (e == null ? void 0 : e.get("selected_strategy_id")) != null)
              );
            })) === !0
      );
    }
    function f(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.ad_extensions_relevancy_spec;
      return (
        (r == null || (n = r.get("extension_specs")) == null || n.some == null
          ? void 0
          : n.some(function (e) {
              return (
                (e == null ? void 0 : e.get("extension_type")) ===
                  "product_extensions" &&
                (e == null ? void 0 : e.get("selected_strategy_id")) != null
              );
            })) === !0
      );
    }
    function g(e) {
      var t,
        n,
        r =
          e == null || (t = e.extension_specs) == null
            ? void 0
            : t.find(function (e) {
                return (
                  (e == null ? void 0 : e.extension_type) ===
                  "product_extensions"
                );
              });
      return (n = r == null ? void 0 : r.selected_strategy_id) != null
        ? n
        : null;
    }
    function h(e) {
      var t, n;
      if (!c()) return null;
      var r =
        e == null || (t = e.extension_specs) == null
          ? void 0
          : t.find(function (e) {
              return (
                (e == null ? void 0 : e.extension_type) === "product_extensions"
              );
            });
      return (r == null ? void 0 : r.virtual_pset_id) == null
        ? null
        : (n = r == null ? void 0 : r.selected_strategy_id) != null
          ? n
          : null;
    }
    function y(e) {
      var t, n;
      if (!c()) return null;
      var r =
        e == null || (t = e.extension_specs) == null
          ? void 0
          : t.find(function (e) {
              return (
                (e == null ? void 0 : e.extension_type) === "product_extensions"
              );
            });
      return (n = r == null ? void 0 : r.virtual_pset_id) != null ? n : null;
    }
    function C(e) {
      return y(e) != null;
    }
    function b(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.creative_sourcing_spec.ad_extensions_relevancy_spec.delete(e);
    }
    function v(e) {
      var t = n("AdsAdgroupFormatTransformationMutators"),
        a = t.adsAdgroupReactiveControlOptionOptInWithBoundleMutationMutator,
        i = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.catalog.enroll_status.set("OPT_IN"),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.catalog.action_metadata.type.set(
            "MANUAL",
          ),
        )(e);
      return (
        (i = a(i, "sa_collection", "catalog", "MANUAL")),
        r("justknobx")._("1114") && (i = a(i, "carousel", "catalog", "MANUAL")),
        i
      );
    }
    function S(e) {
      var t = n("AdsAdgroupFormatTransformationMutators"),
        r = t.adsAdgroupReactiveControlOptionOptOutWithBoundleMutationMutator,
        o = r(e, "sa_collection", "catalog", void 0, "MANUAL");
      return ((o = r(o, "carousel", "catalog", void 0, "MANUAL")), o);
    }
    ((l.isPEVisibleProductsDebugSessionEnabled = e),
      (l.isPEVisibleProductsAdexGKOrLLMGKEnabled = d),
      (l.isPEVisibleProductsRemoveProductsEnabled = m),
      (l.hasVirtualProductSetId = p),
      (l.hasLLMRelevanceStrategySelected = _),
      (l.hasSelectedRelevancyStrategyIgnoringGK = f),
      (l.getSelectedRelevancyStrategyIDIgnoringGK = g),
      (l.getLLMStrategySelectionFromRelevancySpec = h),
      (l.getVirtualProductSetIDFromRelevancySpec = y),
      (l.hasVirtualProductSetIDFromRelevancySpec = C),
      (l.mayBeDeleteAdExtensionsRelevancySpecFromAdgroup = b),
      (l.applyVirtualPsetCatalogAndFormatOptIn = v),
      (l.applyVirtualPsetCatalogAndFormatOptOut = S));
  },
  98,
);
