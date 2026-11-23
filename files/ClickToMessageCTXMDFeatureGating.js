__d(
  "ClickToMessageCTXMDFeatureGating",
  [
    "AdsAPIObjectives",
    "CTXMDAdsOptimizationStoreUtils",
    "EngagementUnitificationGating",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("qex")._("2026") === !0;
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
      var t = r("qex")._("1330") === !0,
        n = t && (e ? r("qex")._("1331") === !0 : r("qex")._("1355") === !0),
        o = e ? r("gkx")("28342") : r("gkx")("28343");
      return n || o;
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
    function m() {
      var e = r("qex")._("1420") === !0,
        t = r("qex")._("1432") === !0;
      return s(e, t);
    }
    function p() {
      var e = r("qex")._("2497") === !0,
        t = r("gkx")("28343");
      return e || t;
    }
    function _(e, t, n, a, i) {
      return (
        i === void 0 && (i = !1),
        e || n || !t
          ? !1
          : (i ? r("gkx")("8464") : r("gkx")("8491"),
            r("gkx")("2169")
              ? !0
              : o(
                  "EngagementUnitificationGating",
                ).isEngagementObjectiveAndEULaunch1Enabled(a) ||
                (a === r("AdsAPIObjectives").MESSAGES &&
                  o("EngagementUnitificationGating").getEULaunch1Experiment(
                    !1,
                  )))
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
      return r("qex")._("2464") === !0;
    }
    function y() {
      var e;
      return (e = r("qex")._("1367")) != null ? e : !1;
    }
    function C() {
      var e;
      return (e = r("qex")._("4035")) != null ? e : !1;
    }
    function b(e) {
      return r("justknobx")._("3898")
        ? e
          ? r("gkx")("21808")
          : r("gkx")("23032")
        : !1;
    }
    function v(e) {
      return (
        e != null && o("CTXMDAdsOptimizationStoreUtils").getIsCTXMDLOEligible(e)
      );
    }
    function S() {
      return r("gkx")("6513") === !0;
    }
    function R() {
      return r("gkx")("8214");
    }
    function L() {
      return r("gkx")("22698");
    }
    function E(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        r("qex")._("5228") === !0
      );
    }
    ((l.enableTrafficObjectiveCatchAllDefaulting = e),
      (l.isTrafficMTMLUnifiedConversionLocationDefaultingEnabled = u),
      (l.isEngagementMTMLUnifiedConversionLocationDefaultingEnabled = c),
      (l.isSalesMTMLUnifiedConversionLocationDefaultingEnabled = d),
      (l.isAwarenessMTMLUnifiedConversionLocationDefaultingEnabled = m),
      (l.isEngagementMTMLDestinationDefaultingEnabled = p),
      (l.isAutomaticDestinationFeatureEnabled = _),
      (l.enableTrafficObjectiveReachAndImpressions = g),
      (l.enableCTWADaisyChainLeadNurturing = h),
      (l.shouldSkipTrafficObjectiveDestinationTypeSetting = y),
      (l.shouldCheckWhatsAppNumberType = C),
      (l.isCtxmdLeadsObjectiveEnabled = b),
      (l.isEligibleForStartConversationsInLeads = v),
      (l.shouldSkipAutoDestForCTWADogfood = S),
      (l.isCTXPostCTARelaxationEnabled = R),
      (l.isFBPostPhantomCTAFixEnabled = L),
      (l.isPGDAutomaticDestinationEnabled = E));
  },
  98,
);
