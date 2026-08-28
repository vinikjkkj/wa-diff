__d(
  "AdsFrequencyControlEditorUtils",
  [
    "fbt",
    "AHGHelpTrayLink2.react",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBulkValueUtils",
    "AdsDeliveryPredictableOptionConstants",
    "AdsFrequencyControlCompatibilityUtils",
    "AdsFrequencyControlEditorConstants",
    "AdsFrequencyControlGKUtils",
    "AdsODAXUtils",
    "AdsUniqueMetricsID",
    "FrequencyControlEvents",
    "GeoBaseText.react",
    "immutable",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e === r("AdsAPIOptimizationGoals").BRAND_AWARENESS ||
        e === r("AdsAPIOptimizationGoals").AD_RECALL_LIFT
        ? [
            {
              event: r("FrequencyControlEvents").IMPRESSIONS,
              interval_days: o("AdsFrequencyControlEditorConstants")
                .DEFAULT_INTERVAL_DAYS_FOR_BAO,
              max_frequency: o("AdsFrequencyControlEditorConstants")
                .DEFAULT_MAX_FREQUENCY_FOR_BAO,
              type: "CAP",
            },
          ]
        : e === r("AdsAPIOptimizationGoals").REACH &&
            o(
              "AdsFrequencyControlGKUtils",
            ).isAccountEligibleForTargetFrequencyAuctionDefaulting()
          ? [
              o("AdsFrequencyControlEditorConstants")
                .DEFAULT_TARGET_FREQUENCY_CONTROL_LEGACY_SPEC,
            ]
          : [
              {
                event: r("FrequencyControlEvents").IMPRESSIONS,
                interval_days: o("AdsFrequencyControlEditorConstants")
                  .DEFAULT_INTERVAL,
                max_frequency: o("AdsFrequencyControlEditorConstants")
                  .DEFAULT_MAX_FREQUENCY_REVISED,
                type: "CAP",
              },
            ];
    }
    function d(e, t) {
      var n = e instanceof r("immutable").List ? e : r("immutable").fromJS(e);
      if (!e || !n.count()) return null;
      var o = null;
      return (
        n.forEach(function (e) {
          o = e.get(t);
        }),
        o
      );
    }
    function m(e, t) {
      return e
        .map(function (e) {
          return e
            .map(function (e) {
              return e.get(t);
            })
            .toJS();
        })
        .reduce(function (e, t) {
          return e.concat(t);
        }, []);
    }
    function p(e, t, n, a, i) {
      return (i != null && i.length > 0) ||
        !o(
          "AdsFrequencyControlCompatibilityUtils",
        ).isCompatibleWithFrequencyControl(e, t, n) ||
        o("AdsODAXUtils").maybeTranslateObjective(e, n, t) ===
          r("AdsAPIObjectives").VIDEO_VIEWS
        ? null
        : c(t);
    }
    function _(e, t, n, a) {
      return [
        {
          event:
            n === r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS
              ? r("FrequencyControlEvents").VIDEO_VIEWS_2S
              : r("FrequencyControlEvents").IMPRESSIONS,
          interval_days:
            e != null && e !== 0
              ? e
              : o("AdsFrequencyControlEditorConstants").DEFAULT_INTERVAL,
          max_frequency:
            t != null && t !== 0
              ? t
              : o("AdsFrequencyControlEditorConstants").DEFAULT_MAX_FREQUENCY,
          type:
            a != null
              ? a
              : o("AdsFrequencyControlEditorConstants")
                  .DEFAULT_FREQUENCY_CONTROL_TYPE,
        },
      ];
    }
    function f(e) {
      if (!e)
        return o("AdsFrequencyControlEditorConstants")
          .DEFAULT_SELECTOR_OPTION_INDEX;
      var t = e.frequency_control_specs,
        n = t ? R(t) : null,
        r = t ? S(t) : null,
        a = e.optimization_goal;
      if (!a)
        return o("AdsFrequencyControlEditorConstants")
          .DEFAULT_SELECTOR_OPTION_INDEX;
      var i = y(a),
        l = [i];
      return b(l, n, r);
    }
    function g(e) {
      return e === r("AdsAPIOptimizationGoals").AD_RECALL_LIFT
        ? o("AdsFrequencyControlEditorConstants").DEFAULT_INTERVAL_DAYS_FOR_BAO
        : o(
              "AdsFrequencyControlEditorConstants",
            ).NO_CAP_OPTIMIZATION_GOAL.includes(e)
          ? o("AdsFrequencyControlEditorConstants").DEFAULT_INTERVAL_DAYS_FOR_VV
          : o("AdsFrequencyControlEditorConstants").DEFAULT_INTERVAL;
    }
    function h(e, t) {
      return t ===
        r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS
        ? s._(/*BTDS*/ "Frequency cap for 2-second continuous video views")
        : s._(/*BTDS*/ "Frequency cap");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = o("AdsFrequencyControlEditorConstants").DEFAULT_INTERVAL,
        n = o("AdsFrequencyControlEditorConstants").DEFAULT_MAX_FREQUENCY,
        a = s._(/*BTDS*/ "Off"),
        i = s._(
          /*BTDS*/ "- Show ads a recommended number of times to optimize performance",
        );
      return (
        (e === r("AdsAPIOptimizationGoals").BRAND_AWARENESS ||
          e === r("AdsAPIOptimizationGoals").AD_RECALL_LIFT) &&
          ((t = o(
            "AdsFrequencyControlEditorConstants",
          ).DEFAULT_INTERVAL_DAYS_FOR_BAO),
          (n = o(
            "AdsFrequencyControlEditorConstants",
          ).DEFAULT_MAX_FREQUENCY_FOR_BAO),
          (a = s._(/*BTDS*/ "Default")),
          (i = s._(/*BTDS*/ "- Show ads no more than 2 times every 5 days"))),
        e === r("AdsAPIOptimizationGoals").REACH &&
          ((a = s._(/*BTDS*/ "Default")),
          (i = s._(/*BTDS*/ "Show ads no more than 1 time every 7 days"))),
        o(
          "AdsFrequencyControlEditorConstants",
        ).NO_CAP_OPTIMIZATION_GOAL.includes(e) && ((n = null), (t = null)),
        {
          interval: t,
          frequency: n,
          label: a,
          description: i,
          tooltip: o("AdsDeliveryPredictableOptionConstants")
            .OPTION_TOOLTIP_DEPRECATED.STANDARD,
          isDisabled: !1,
        }
      );
    }
    function C(e, t, n) {
      var r = n.interval === t && n.frequency === e,
        o = e == null || e === 0,
        a = n.frequency == null || n.frequency === 0,
        i = t == null || t === 0,
        l = n.interval == null || n.interval === 0,
        s = o && a && i && l;
      return r || s;
    }
    function b(e, t, n) {
      var r = e.findIndex(function (e) {
        return C(t, n, e);
      });
      return r >= 0 ? r : e.length;
    }
    function v(e) {
      return s._(
        /*BTDS*/ "Select an option to control how often people see your ad based on your objectives. If you choose to set a custom frequency cap, you can manually balance the tradeoffs between how often your ad is seen and how many {=m1} see it.",
        [
          s._implicitParam(
            "=m1",
            u.jsx(r("GeoBaseText.react"), {
              color: "value",
              size: "valueDescription",
              children: s._(/*BTDS*/ "{=m1}", [
                s._implicitParam(
                  "=m1",
                  u.jsx(r("AHGHelpTrayLink2.react"), {
                    helpCenterID:
                      o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                    children: s._(/*BTDS*/ "people"),
                  }),
                ),
              ]),
            }),
          ),
        ],
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      return d(e, "interval_days");
    }
    function R(e) {
      return d(e, "max_frequency");
    }
    function L(e) {
      var t = parseInt(e, 10);
      return isNaN(t) || !isFinite(t) || String(t) !== e ? null : t;
    }
    function E(e, t) {
      var n = m(t, "interval_days"),
        r = m(t, "max_frequency"),
        a = o("AdsBulkValueUtils").aggregate(n),
        i = o("AdsBulkValueUtils").aggregate(r);
      return { bulkFrequencyInterval: a, bulkMaxFrequency: i };
    }
    ((l.computeDefaultFrequencyControlSpecs = p),
      (l.getFrequencyControlSpecs = _),
      (l.getRetrievedIndexForFrequencyControl = f),
      (l.getMinimumDefaultInterval = g),
      (l.getFrequencyLabel = h),
      (l.getDefaultStaticOption = y),
      (l.getStaticOptionIndexFromFrequencyControl = b),
      (l.getFrequencyTooltipHelpText = v),
      (l.getUniformFrequencyInterval = S),
      (l.getUniformMaxFrequency = R),
      (l.parseRawIntervalDays = L),
      (l.getBulkFrequencySpecField = E));
  },
  226,
);
