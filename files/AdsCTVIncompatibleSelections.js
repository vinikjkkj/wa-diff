__d(
  "AdsCTVIncompatibleSelections",
  [
    "AdsAPIBidStrategies",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIPacingType",
    "AdsCTVDisabledStrings",
    "AdsCTVSwitchRestrictionUtils",
    "AdsPromotedObjectTypes",
    "AdsTargetingCountryUtils",
    "AttributionSettingType",
    "DeepRecord",
    "adsRegulatedCategoryGetCountriesFromCountryGroup",
    "adsRegulatedCategoryIsPoliticalCategorySelected",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        buying_type: 0,
        advantage_catalog: 1,
        bid_strategy: 2,
        ab_test: 3,
        audience_segment_reporting: 4,
        siep_special_ad_category: 5,
        conversion_location: 6,
        performance_goal: 7,
        attribution_model: 8,
        value_rules: 9,
        attribution_window: 10,
        attribution_count_type: 11,
        delivery_type: 12,
        performance_goal_awareness: 13,
        cost_per_result: 14,
        audience_location: 15,
        target_frequency: 16,
      },
      s = new Map([
        ["X1D_CLICK", { days: 1, event: "click" }],
        ["X7D_CLICK", { days: 7, event: "click" }],
        ["X1D_VIEW", { days: 1, event: "view" }],
        ["X1D_EVC", { days: 1, event: "engaged_view" }],
      ]);
    function u(e, t) {
      var n = [];
      for (var r of e != null ? e : []) {
        var o = s.get(r);
        o != null && o.event === t && n.push(o.days);
      }
      return n;
    }
    function c(e, t, n) {
      var r = u(e, t);
      return r.length === 0 ? !1 : n == null || !r.includes(n);
    }
    function d(e, t, n) {
      return c(e, "view", t) || c(e, "engaged_view", n);
    }
    function m(e) {
      return (
        e === "ENGAGED_USER_SEGMENTATION" || e === "EXISTING_USER_SEGMENTATION"
      );
    }
    function p(e, t) {
      var n;
      return (
        e ||
        ((n =
          t == null
            ? void 0
            : t.some(function (e) {
                return (
                  e != null &&
                  m(e.group_type) &&
                  e.custom_audience_ids.length > 0
                );
              })) != null
          ? n
          : !1)
      );
    }
    function _(e) {
      var t,
        n = r("AdsAPIPacingType");
      return (t =
        e == null
          ? void 0
          : e
              .map(function (e) {
                return n[e];
              })
              .filter(Boolean)) != null
        ? t
        : null;
    }
    function f(e) {
      var t,
        n = r("AttributionSettingType");
      return (t =
        e == null
          ? void 0
          : e
              .map(function (e) {
                return n[e];
              })
              .filter(function (e) {
                return e != null;
              })) != null
        ? t
        : null;
    }
    function g(e, t) {
      var n,
        a = e.targetingGeoLocations;
      if (a == null) return !1;
      var i = r("DeepRecord").isDeepRecord(a) ? a.toJS() : a,
        l = ((n = i.country_groups) != null ? n : []).some(function (e) {
          var n = o(
            "adsRegulatedCategoryGetCountriesFromCountryGroup",
          ).adsRegulatedCategoryGetCountriesFromCountryGroup(e);
          return (
            n.length === 0 ||
            n.some(function (e) {
              return !t.includes(e);
            })
          );
        });
      return l
        ? !0
        : o("AdsTargetingCountryUtils")
            .getUniqueCountriesSorted(i, !1)
            .some(function (e) {
              return !t.includes(e);
            });
    }
    function h(t, n) {
      var a,
        i = n.attributionCountType,
        l = n.attributionEngagedViewWindowDays,
        s = n.attributionModel,
        u = n.attributionViewWindowDays,
        c = n.audienceSegmentReportingCustomAudienceGroups,
        m = n.bidStrategy,
        h = n.hasAudienceSegmentReportingSignal,
        y = n.hasValueRules,
        C = n.pacingType,
        b = [],
        v = o("AdsCTVSwitchRestrictionUtils").getCTVSwitchFeatureRestrictions(
          t,
        );
      ((v == null ? void 0 : v.is_advantage_catalog_eligible) === !1 &&
        (t.isCTXAdvantageCatalogEnabled === !0 ||
          t.productSetID != null ||
          t.productCatalogID != null) &&
        b.push("advantage_catalog"),
        (v == null ? void 0 : v.is_ab_test_eligible) === !1 &&
          (t.lightWeightSplitTest != null || t.isOptedIntoExperiments === !0) &&
          b.push("ab_test"),
        (v == null ? void 0 : v.is_audience_segment_reporting_eligible) ===
          !1 &&
          p(h, c) &&
          b.push("audience_segment_reporting"),
        (v == null ? void 0 : v.is_siep_special_ad_category_eligible) === !1 &&
          r("adsRegulatedCategoryIsPoliticalCategorySelected")(
            t.specialAdCategories,
          ) &&
          b.push("siep_special_ad_category"));
      var S = v == null ? void 0 : v.eligible_countries;
      (S != null && S.length > 0 && g(t, S) && b.push("audience_location"),
        (v == null ? void 0 : v.is_target_frequency_eligible) === !1 &&
          t.isTargetFrequencyInAuctionEnabled === !0 &&
          b.push("target_frequency"),
        (v == null ? void 0 : v.is_cost_per_result_eligible) === !1 &&
          m === r("AdsAPIBidStrategies").COST_CAP &&
          b.push("cost_per_result"),
        (v == null ? void 0 : v.is_value_rules_eligible) === !1 &&
          y &&
          b.push("value_rules"));
      var R =
        (a = t.ctvPlacementEligibility) == null
          ? void 0
          : a.eligible_buying_types;
      t.buyingType != null &&
        R != null &&
        R.length > 0 &&
        !R.includes(t.buyingType) &&
        b.push("buying_type");
      var L = v == null ? void 0 : v.eligible_bid_strategies;
      m != null &&
        L != null &&
        L.length > 0 &&
        !L.includes(m) &&
        b.push("bid_strategy");
      var E =
          t.promotedObjectType === r("AdsPromotedObjectTypes").PRODUCT_SET
            ? t.conversionLocations
            : t.promotedObjectType,
        k = v == null ? void 0 : v.eligible_conversion_locations;
      E != null &&
        E !== r("AdsPromotedObjectTypes").NONE &&
        k != null &&
        k.length > 0 &&
        !k.includes(E) &&
        b.push("conversion_location");
      var I = o("AdsCTVSwitchRestrictionUtils").getEligibleCTVOptimizationGoals(
        t,
      );
      t.optimizationGoal != null &&
        I != null &&
        I.length > 0 &&
        !I.includes(t.optimizationGoal) &&
        b.push(
          t.objective === r("AdsAPIObjectives").OUTCOME_AWARENESS
            ? "performance_goal_awareness"
            : "performance_goal",
        );
      var T = f(v == null ? void 0 : v.eligible_attribution_models);
      (s != null &&
        T != null &&
        T.length > 0 &&
        !T.includes(s) &&
        b.push("attribution_model"),
        d(v == null ? void 0 : v.eligible_attribution_windows, u, l) &&
          b.push("attribution_window"));
      var D = v == null ? void 0 : v.eligible_attribution_count_types;
      i != null &&
        D != null &&
        D.length > 0 &&
        !D.some(function (e) {
          return e === i;
        }) &&
        b.push("attribution_count_type");
      var x = _(
          o("AdsCTVSwitchRestrictionUtils").getEligibleCTVDeliveryTypes(t),
        ),
        $ =
          C == null
            ? void 0
            : C.find(function (e) {
                return x != null && !x.includes(e);
              });
      return (
        $ != null && x != null && x.length > 0 && b.push("delivery_type"),
        b.sort(function (t, n) {
          return e[t] - e[n];
        })
      );
    }
    function y(e, t) {
      var n = h(e, t),
        a = n[0];
      return a == null
        ? null
        : new Map([
            [
              r("AdsAPIDevicePlatform").CONNECTED_TV,
              o("AdsCTVDisabledStrings").getCTVUnavailableReasonTooltip(a),
            ],
          ]);
    }
    ((l.getCTVIncompatibilities = h),
      (l.getCTVDevicePlatformIneligibility = y));
  },
  98,
);
