__d(
  "AdsInsightsSettingsStore",
  [
    "invariant",
    "AdsApplicationUtils",
    "AdsDataAtom",
    "AdsInsightsChartsMetricsChangeDataActionFlux",
    "AdsInsightsChartsSectionChangeDataActionFlux",
    "AdsInsightsChartsSubsectionChangeDataActionFlux",
    "AdsInsightsPerformanceMetricsUtils",
    "AdsInsightsPerformanceSummariesUtils",
    "AdsInsightsSectionUtil",
    "AdsInsightsSections",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "FluxStore",
    "adsCreateStoreSelector",
    "adsInsightsPerformanceGetBreakdownsFromSectionSpec",
    "adsInsightsPerformanceGetMetricsFromSectionSpec",
    "adsInsightsPerformanceGetSummaryFieldsFromSectionSpec",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = ["publisher_platform", "platform_position", "device_platform"],
      c = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.getSelector = r("adsCreateStoreSelector")(
              [n],
              function () {
                return n.get();
              },
              { name: i.id },
            )),
            (n.$AdsInsightsSettingsStoreClass$p_1 = o(
              "AdsInsightsSections",
            ).withDefaultState(o("AdsInsightsSections").getDefault())),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.get = function () {
            var e = this.$AdsInsightsSettingsStoreClass$p_1,
              t = e.metrics,
              n = e.section,
              r = e.subsection,
              a = o("AdsInsightsSectionUtil").hasMetrics(n, r);
            return { metrics: a ? t : void 0, section: n, subsection: r };
          }),
          (a.getBreakdowns = function () {
            var e = this.$AdsInsightsSettingsStoreClass$p_1,
              t = e.section,
              n = e.subsection;
            switch (t) {
              case "audience":
                return ["age", "gender"];
              case "placement":
                switch (n) {
                  case "allPlacement":
                    return u;
                  case "mobilePlacement":
                    return ["impression_device"].concat(u);
                  default:
                    return [];
                }
              case "performance":
                return r("adsInsightsPerformanceGetBreakdownsFromSectionSpec")(
                  this.$AdsInsightsSettingsStoreClass$p_1,
                ).breakdowns;
              default:
                return [];
            }
          }),
          (a.getFields = function () {
            var e = this.$AdsInsightsSettingsStoreClass$p_1.metrics,
              t = this.$AdsInsightsSettingsStoreClass$p_1.section,
              n = o("AdsInsightsSections").getConfig(t);
            switch (t) {
              case "audience":
                return (e || s(0, 37285), e);
              case "performance": {
                e = r("adsInsightsPerformanceGetMetricsFromSectionSpec")(
                  this.$AdsInsightsSettingsStoreClass$p_1,
                );
                var a = e.map(function (e) {
                    return o(
                      "AdsInsightsPerformanceMetricsUtils",
                    ).getDescriptor(e).field;
                  }),
                  i = r(
                    "adsInsightsPerformanceGetSummaryFieldsFromSectionSpec",
                  )(this.$AdsInsightsSettingsStoreClass$p_1),
                  l = i.map(function (e) {
                    return o(
                      "AdsInsightsPerformanceSummariesUtils",
                    ).getDescriptor(e).field;
                  });
                return [].concat(a, l);
              }
              case "placement":
                return (e || s(0, 37291), [].concat(e, n.baseMetrics));
              default:
                return [];
            }
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsInsightsChartsMetricsChangeDataActionFlux").actionType,
              o("AdsInsightsChartsSectionChangeDataActionFlux").actionType,
              o("AdsInsightsChartsSubsectionChangeDataActionFlux").actionType,
              o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType,
            ];
          }),
          (a.__onDispatch = function (t) {
            var e = t.action;
            switch (e.actionType) {
              case o("AdsInsightsChartsMetricsChangeDataActionFlux").actionType:
                (r("vulture")("XzzYMkJm8A63IN3Fd91g5kuYD-c="),
                  o("AdsApplicationUtils").isPowerEditor() ||
                    ((this.$AdsInsightsSettingsStoreClass$p_1 =
                      babelHelpers.extends(
                        {},
                        this.$AdsInsightsSettingsStoreClass$p_1,
                        { metrics: e.metrics },
                      )),
                    this.__emitChange()));
                break;
              case o("AdsInsightsChartsSubsectionChangeDataActionFlux")
                .actionType:
                (r("vulture")("4-lVbq4LuxBXQxZQLnwW563UByE="),
                  o("AdsApplicationUtils").isPowerEditor() ||
                    ((this.$AdsInsightsSettingsStoreClass$p_1 = o(
                      "AdsInsightsSections",
                    ).withDefaultState(
                      babelHelpers.extends(
                        {},
                        this.$AdsInsightsSettingsStoreClass$p_1,
                        { subsection: e.subsection },
                      ),
                    )),
                    this.__emitChange()));
                break;
              case o("AdsInsightsChartsSectionChangeDataActionFlux").actionType:
                o("AdsApplicationUtils").isPowerEditor() ||
                  ((this.$AdsInsightsSettingsStoreClass$p_1 = o(
                    "AdsInsightsSections",
                  ).withDefaultState(
                    o("AdsInsightsSections").getDefaultForSection(e.section),
                  )),
                  this.__emitChange());
                break;
              case o("AdsInterfacesRouteUpdateParamsDataActionFlux")
                .actionType: {
                var n = e.data.params,
                  a = e.data.changedParamKeys,
                  i = n.insights_section;
                a.insights_section &&
                  i != null &&
                  ((this.$AdsInsightsSettingsStoreClass$p_1 = o(
                    "AdsInsightsSections",
                  ).withDefaultState(
                    o("AdsInsightsSections").getDefaultForSection(i),
                  )),
                  this.__emitChange());
                var l = n.insights_subsection;
                a.insights_subsection &&
                  l != null &&
                  ((this.$AdsInsightsSettingsStoreClass$p_1 = o(
                    "AdsInsightsSections",
                  ).withDefaultState(
                    babelHelpers.extends(
                      {},
                      this.$AdsInsightsSettingsStoreClass$p_1,
                      { subsection: l },
                    ),
                  )),
                  this.__emitChange());
                var s = n.insights_metrics;
                if (a.insights_metrics && s != null) {
                  var u = s.split(",");
                  ((this.$AdsInsightsSettingsStoreClass$p_1 =
                    babelHelpers.extends(
                      {},
                      this.$AdsInsightsSettingsStoreClass$p_1,
                      { metrics: u },
                    )),
                    this.__emitChange());
                }
                break;
              }
            }
          }),
          n
        );
      })(r("FluxStore"));
    c.__moduleID = i.id;
    var d = new c(),
      m = d;
    l.default = m;
  },
  98,
);
