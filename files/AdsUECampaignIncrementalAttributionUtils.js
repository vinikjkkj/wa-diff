__d(
  "AdsUECampaignIncrementalAttributionUtils",
  [
    "$InternalEnum",
    "AdCampaignConversionMultiEventProducts",
    "AdCampaignLJORollout",
    "AdsAPIBidStrategies",
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "AdsEventsManagerSequencedConversionsCreationEligibilityUtils",
    "AdsGVOBetaConfig.experimental",
    "AdsManagerRelayEnvironment",
    "AdsPromotedObjectTypes",
    "AdsStrings",
    "RelayModern",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "INELIGIBLE",
        "INVALID_BID_STRATEGY",
        "INVALID_PROMOTED_OBJECT_TYPE",
        "NO_CONVERSION_OPTIMIZATION",
        "INVALID_PROMOTED_OBJECT_SEMANTIC_TYPE",
        "CUSTOM_ATTRIBUTION_ENABLED",
        "LONG_CONSIDERATION_ENABLED",
        "SEQUENCED_EVENT_ENABLED",
      ]),
      s = function (t) {
        o("RelayModern").commitLocalUpdate(
          r("AdsManagerRelayEnvironment"),
          function (e) {
            var n;
            return (n = e.get(t)) == null ? void 0 : n.invalidateRecord();
          },
        );
      },
      u = function () {
        return !0;
      },
      c = function () {
        return !0;
      },
      d = function () {
        return !0;
      };
    function m() {
      var e,
        t = new Set([
          (e = r("AdsPromotedObjectTypes")).PIXEL,
          e.WEBSITE,
          e.PRODUCT_SET,
          e.WEB_AND_SHOP,
          e.WEB_AND_APP,
        ]);
      return (
        r("gkx")("2801") &&
          t.add(r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE),
        r("gkx")("18692") &&
          t.add(r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE),
        t
      );
    }
    function p() {
      var e = new Set([
        r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
        r("AdsAPIOptimizationGoals").VALUE,
        r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND,
      ]);
      return e;
    }
    function _() {
      var e = new Set([
        "PRODUCT_SET_AND_WEBSITE",
        "PRODUCT_SET_AND_OMNICHANNEL",
      ]);
      return (
        r("gkx")("2801") && e.add("PRODUCT_SET_AND_IN_STORE"),
        r("gkx")("18692") && e.add("PRODUCT_SET_WEBSITE_APP_AND_INSTORE"),
        e
      );
    }
    function f(e, t) {
      var n = m();
      if (e === r("AdsPromotedObjectTypes").PRODUCT_SET) {
        var o = _();
        return t == null ? !0 : o.has(t);
      }
      return n.has(e);
    }
    function g(e) {
      var t = p(),
        n = e != null && t.has(e);
      return n;
    }
    function h(e, t) {
      if (
        e !== r("AdsAPIOptimizationGoals").VALUE &&
        e !== r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND
      )
        return !0;
      if (t != null) {
        var n = ["VALUE"];
        return (
          r("gkx")("18062") && n.push("MARGIN"),
          r("gkx")("19502") && n.push("LIFETIME_VALUE"),
          n.includes(t)
        );
      }
      return !0;
    }
    function y(e, t) {
      var n = C();
      return e == null || e === 0 || (t != null && n.has(t));
    }
    function C() {
      var e = new Set([
        r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
        r("AdsAPIBidStrategies").COST_CAP,
        r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS,
      ]);
      return e;
    }
    function b(t, n, a, i, l, s, c, d, m, p, _) {
      _ === void 0 && (_ = null);
      var C = y(n, a),
        b = f(t, c != null ? c : null),
        v = g(s),
        S = h(s, d),
        R = u(),
        L = r("justknobx")._("3692") && (m != null || p != null),
        E = [];
      if (
        (R || E.push(e.INELIGIBLE),
        v || E.push(e.NO_CONVERSION_OPTIMIZATION),
        b || E.push(e.INVALID_PROMOTED_OBJECT_TYPE),
        S || E.push(e.INVALID_PROMOTED_OBJECT_SEMANTIC_TYPE),
        C || E.push(e.INVALID_BID_STRATEGY),
        L && E.push(e.CUSTOM_ATTRIBUTION_ENABLED),
        i ===
          r("AdCampaignConversionMultiEventProducts")
            .BANKING_AND_CREDIT_CARDS ||
          l === !0 ||
          l === o("AdsStrings").MixedValuePlaceholder.toString())
      ) {
        var k = o(
          "AdsEventsManagerSequencedConversionsCreationEligibilityUtils",
        ).isSetupEligibleForSequencedEventCreation(_, t, s);
        k === r("AdCampaignLJORollout").ALPHA_TWO
          ? E.push(e.LONG_CONSIDERATION_ENABLED)
          : [
              r("AdCampaignLJORollout").GA,
              r("AdCampaignLJORollout").OPEN_BETA,
              r("AdCampaignLJORollout").PRE_BETA,
            ].includes(k) && E.push(e.SEQUENCED_EVENT_ENABLED);
      }
      return E;
    }
    function v(e, t, n, a, i, l, s, u) {
      var c,
        d = (c = o("AdsBulkValueUtils")).getUniformValueOrDefault(
          e,
          r("AdsPromotedObjectTypes").NONE,
        ),
        m = c.getUniformValueOrDefault(t, 0),
        p = c.getUniformValueOrDefault(n, null),
        _ = c.getUniformValueOrDefault(a, null),
        f = c.getUniformValueOrDefault(i, null),
        g = c.getUniformValueOrDefault(l, null),
        h = c.getUniformValueOrDefault(s, null),
        y = c.getUniformValueOrDefault(u, null);
      return {
        promotedObjectTypeValue: d,
        bidAmountValue: m,
        bidStrategyValue: p,
        optimizationGoalValue: _,
        promotedObjectTypeVariationValue: f,
        promotedObjectSemanticTypeValue: g,
        passbackAppIDValue: h,
        passbackPixelIDValue: y,
      };
    }
    function S(e, t, n, r, o, a, i, l, s, u) {
      var c = v(r, e, t, n, o, a, i, l),
        d = c.bidAmountValue,
        m = c.bidStrategyValue,
        p = c.optimizationGoalValue,
        _ = c.passbackAppIDValue,
        f = c.passbackPixelIDValue,
        g = c.promotedObjectSemanticTypeValue,
        h = c.promotedObjectTypeValue,
        y = c.promotedObjectTypeVariationValue,
        C = b(h, d, m, s, u, p, y, g, _, f).length > 0;
      return !C;
    }
    function R(e, t, n, r, o, a) {
      var i = 7,
        l = L(n, r, t, a),
        s = E(t, e, o);
      return {
        clickThroughWindowDays: i,
        evcWindowDays: l,
        viewThroughWindowDays: s,
      };
    }
    function L(e, t, n, o) {
      var a,
        i,
        l = r("gkx")("11906");
      if (!l || !e || t) return 0;
      var s =
          (a =
            n == null
              ? void 0
              : n.getValues().some(function (e) {
                  return e === r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE;
                })) != null
            ? a
            : !1,
        u =
          (i =
            o == null
              ? void 0
              : o.getValues().some(function (e) {
                  return e === "PRODUCT_SET_AND_IN_STORE";
                })) != null
            ? i
            : !1;
      return s || u ? 0 : 1;
    }
    function E(e, t, n) {
      var o,
        a = t.getValues().some(function (e) {
          return (
            e === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND ||
            e === r("AdsAPIOptimizationGoals").VALUE
          );
        }),
        i =
          (o =
            e == null
              ? void 0
              : e.getValues().some(function (e) {
                  return (
                    e === r("AdsPromotedObjectTypes").PIXEL ||
                    e === r("AdsPromotedObjectTypes").PRODUCT_SET ||
                    e === r("AdsPromotedObjectTypes").WEBSITE ||
                    e === r("AdsPromotedObjectTypes").WEB_AND_APP
                  );
                })) != null
            ? o
            : !1;
      if (a && !i) return 0;
      var l =
        n != null &&
        (n === "OTHER" ||
          n === "PURCHASE" ||
          r("AdsGVOBetaConfig.experimental").SUPPORTED_NPVO_EVENTS.includes(n));
      return a && !l ? 0 : 1;
    }
    function k(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _ = e,
        f = o("AdsAPICampaignRecordUtils").getPromotedObjectType(n, _),
        g =
          (a = (i = _.bid_strategy) != null ? i : t.bid_strategy) != null
            ? a
            : r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
        h = b(
          f,
          (l = _.bid_amount) != null ? l : 0,
          g,
          (s = _.promoted_object) == null ? void 0 : s.multi_event_product,
          _.is_sequenced_conversion_creation,
          _.optimization_goal,
          (u =
            (c = _) == null || (c = c.promoted_object) == null
              ? void 0
              : c.variation) != null
            ? u
            : null,
          (d = _.promoted_object) == null ? void 0 : d.value_semantic_type,
          (m = _.promoted_object) == null ? void 0 : m.passback_application_id,
          (p = _.promoted_object) == null ? void 0 : p.passback_pixel_id,
          n,
        );
      return (
        h.length === 0 &&
          (_ = r(
            "AdsCampaignRecordAccessors",
          ).is_incremental_attribution_enabled.set(!0, _)),
        _
      );
    }
    ((l.IncrementalAttributionDisabledReason = e),
      (l.refreshIncrementalAttributionStatus = s),
      (l.isAccountInIncrementalAttributionV2 = c),
      (l.isAccountInIncrementalAttributionV2WithoutLogging = d),
      (l.getIncrementalAttributionAllowedPromotedObjectTypes = m),
      (l.getIncrementalAttributionAllowedPromotedObjectVariationTypes = _),
      (l.isValidPromotedObjectTypeForIncrementalAttribution = f),
      (l.isValidOptimizationGoalForIncrementalAttribution = g),
      (l.isValidBidForIncrementalAttribution = y),
      (l.getAllowedBidStrategiesForIncrementalAttribution = C),
      (l.getIncrementalAttributionDisabledReasons = b),
      (l.getAdsBulkUniformValueForIncrementalAttributionValidation = v),
      (l.validateForIANuxMessageOnCollapsedButton = S),
      (l.getAttributionWindowInDays = R),
      (l.getViewThroughWindowDays = E),
      (l.maybeApplyIncrementalAttribution = k));
  },
  98,
);
