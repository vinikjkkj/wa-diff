__d(
  "ClickToMessageCTXMDFeatureGating",
  [
    "AdsAPIObjectives",
    "CTXMDAdsOptimizationStoreUtils",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "CurrentAdAccount",
    "EngagementUnitificationGating",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e ? r("qex")._("2026") === !0 : r("qex")._("2045") === !0;
    }
    function s(e, t) {
      return e && t;
    }
    function u(e) {
      e === void 0 && (e = !1);
      var t = r("qex")._("3441") === !0,
        n = e ? r("qex")._("3253") === !0 : r("qex")._("3761") === !0;
      return s(t, n);
    }
    function c(e) {
      e === void 0 && (e = !1);
      var t = r("qex")._("1330") === !0;
      return t
        ? e
          ? r("qex")._("1331") === !0
          : r("qex")._("1355") === !0
        : !1;
    }
    function d(e) {
      e === void 0 && (e = !1);
      var t = r("qex")._("1375") === !0;
      return t
        ? e
          ? r("qex")._("1377") === !0
          : r("qex")._("1382") === !0
        : !1;
    }
    function m(e) {
      e === void 0 && (e = !1);
      var t = r("qex")._("1420") === !0,
        n = e ? r("qex")._("1432") === !0 : r("qex")._("1439") === !0;
      return s(t, n);
    }
    function p(e) {
      return e ? r("qex")._("2162") === !0 : r("qex")._("2497") === !0;
    }
    function _(e, t, n, a) {
      return (
        a === void 0 && (a = !1),
        e || n || !t
          ? !1
          : (a ? r("gkx")("8464") : r("gkx")("8491"),
            r("gkx")("2169")
              ? !0
              : o("EngagementUnitificationGating").getEULaunch1Experiment(!1))
      );
    }
    function f(e) {
      return e ? r("gkx")("2892") : r("gkx")("3311");
    }
    function g(e) {
      e === void 0 && (e = !1);
      var t = f(e);
      return t;
    }
    function h() {
      var e = r("gkx")("11835") === !0;
      if (e) return !0;
      var t = r("gkx")("11803") === !0;
      return (
        r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
          var e;
          return {
            condition: t ? "test" : "control",
            feature_name: "ctwa_l1_daisy_chain",
            hbt_name: "h2_train_1_am_mid_adacc_w998_hbt",
            unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
            unit_type: "ad_account_id",
          };
        }),
        t
      );
    }
    function y() {
      return r("qex")._("2006") === !0;
    }
    function C() {
      return r("qex")._("2464") === !0;
    }
    function b() {
      var e;
      return (e = r("qex")._("1367")) != null ? e : !1;
    }
    function v() {
      var e;
      return (e = r("qex")._("4035")) != null ? e : !1;
    }
    function S(e) {
      return r("justknobx")._("3898")
        ? e
          ? r("qex")._("2226") === !0
          : r("qex")._("2363") === !0
        : !1;
    }
    function R(e) {
      return (
        e != null && o("CTXMDAdsOptimizationStoreUtils").getIsCTXMDLOEligible(e)
      );
    }
    function L() {
      return r("gkx")("6513") === !0;
    }
    function E() {
      return r("gkx")("8214");
    }
    function k(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        r("qex")._("5228") === !0
      );
    }
    function I(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("2234") === !0 : r("qex")._("3266") === !0
      );
    }
    function T() {
      return r("qex")._("1612") === !0;
    }
    function D() {
      return r("qex")._("3763") === !0;
    }
    ((l.enableTrafficObjectiveCatchAllDefaulting = e),
      (l.isTrafficMTMLUnifiedConversionLocationDefaultingEnabled = u),
      (l.isEngagementMTMLUnifiedConversionLocationDefaultingEnabled = c),
      (l.isSalesMTMLUnifiedConversionLocationDefaultingEnabled = d),
      (l.isAwarenessMTMLUnifiedConversionLocationDefaultingEnabled = m),
      (l.isEngagementMTMLDestinationDefaultingEnabled = p),
      (l.isAutomaticDestinationFeatureEnabled = _),
      (l.enableTrafficObjectiveReachAndImpressions = g),
      (l.enableCTWAL1Switching = h),
      (l.enableCTWADaisyChainFromIGOnL2ForAll = y),
      (l.enableCTWADaisyChainLeadNurturing = C),
      (l.shouldSkipTrafficObjectiveDestinationTypeSetting = b),
      (l.shouldCheckWhatsAppNumberType = v),
      (l.isCtxmdLeadsObjectiveEnabled = S),
      (l.isEligibleForStartConversationsInLeads = R),
      (l.shouldSkipAutoDestForCTWADogfood = L),
      (l.isCTXPostCTARelaxationEnabled = E),
      (l.isPGDAutomaticDestinationEnabled = k),
      (l.enableExistingPostTextEditing = I),
      (l.isH126AccountLinkingBundleEnabled = T),
      (l.isCTXAccountLinkingEntryPointRemoved = D));
  },
  98,
);
