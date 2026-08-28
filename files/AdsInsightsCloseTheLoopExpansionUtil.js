__d(
  "AdsInsightsCloseTheLoopExpansionUtil",
  ["fbt", "DateTime", "convertCTLTimeSeriesData", "gkx", "qex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
        "reels_pc_recommendation",
        "offsite_conversion",
        "signals_growth_capi_v2",
      ],
      u = ["pixelless_lpv_optimization_goal", "offsite_conversion"],
      c = [
        "URCOffsiteConversionTitleVariantCloseTheLoopInsights",
        "URCOffsiteConversionOutcomeTitleVariantCloseTheLoopInsights",
        "URCSignalsGrowthCapiV2TitleVariantCloseTheLoopInsights",
        "URCSignalsGrowthCapiV2OutcomeTitleVariantCloseTheLoopInsights",
        "URCReelsPcRecommendationMFRTitleVariantCloseTheLoopInsights",
        "URCReelsPcRecommendationMFROutcomeTitleVariantCloseTheLoopInsights",
      ],
      d = function (t) {
        return t == null ? !1 : c.includes(t);
      },
      m = function (t, n, r) {
        if (t == null || n == null) return !1;
        var e = S(n);
        return e == null || e < 0 || !f(t, "PFR") ? !1 : _() ? !0 : p(r);
      };
    function p(e) {
      var t;
      return (
        e ? (t = r("qex")._("4798")) : (t = r("qex")._("4799")),
        t === "with_ctl_expansion_h126"
      );
    }
    var _ = function () {
        return r("gkx")("9185");
      },
      f = function (n, r) {
        return r === "PFR"
          ? u.includes(n)
          : r === "MFR"
            ? e.includes(n) ||
              e.some(function (e) {
                return n.includes(e);
              })
            : !1;
      },
      g = s._(/*BTDS*/ "Your past results"),
      h = function (t) {
        return t == null || t === ""
          ? s._(/*BTDS*/ "Cost per result")
          : s._(/*BTDS*/ "Cost per result:");
      },
      y = s._(/*BTDS*/ "Your past results"),
      C = s._(/*BTDS*/ "Actual"),
      b = s._(/*BTDS*/ "Without recommendation");
    function v(e, t, n) {
      var o = r("DateTime").create(e, n).format("F j"),
        a = r("DateTime").create(t, n).format("F j");
      return s._(
        /*BTDS*/ "Without making this edit, your cost per result would have been higher between {startDate} and {endDate}.",
        [s._param("startDate", o), s._param("endDate", a)],
      );
    }
    var S = function (t) {
      var e = t == null ? void 0 : t.delta;
      return e == null ? null : Math.ceil(e * 100);
    };
    ((l.isCloseTheLoopMFRExpansionEnabled = d),
      (l.isCloseTheLoopPFRExpansionEnabled = m),
      (l.CTL_CHART_HEADER_TEXT = g),
      (l.getCTLChartDescriptionText = h),
      (l.CTL_SYD_INCENTIVE_SECTION_HEADER_TEXT = y),
      (l.CTL_ACTUAL_CPR_TEXT = C),
      (l.CTL_PLE_BAU_CPR_TEXT = b),
      (l.getCTLChartFooterText = v),
      (l.convertTimeSeriesData = r("convertCTLTimeSeriesData")),
      (l.getCloseTheLoopInsightCPRLift = S));
  },
  226,
);
