__d(
  "AdsInsightsTimeRange",
  [
    "fbt",
    "invariant",
    "AdsInsightsTimeRangeUtils",
    "AdsReportDatePresetType",
    "GeoDateRangePickerDefaultPresets",
    "LocalDate",
    "LocalDateInterval",
    "enumUtils",
    "expectationViolation",
    "filterNulls",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = 37,
      c = s._(/*BTDS*/ "Today"),
      d = s._(/*BTDS*/ "Yesterday"),
      m = s._(/*BTDS*/ "This week"),
      p = s._(/*BTDS*/ "Last week"),
      _ = s._(/*BTDS*/ "Today and yesterday"),
      f = s._(/*BTDS*/ "Last 7 days"),
      g = s._(/*BTDS*/ "Last 14 days"),
      h = s._(/*BTDS*/ "Last 28 days"),
      y = s._(/*BTDS*/ "Last 30 days"),
      C = s._(/*BTDS*/ "Last month"),
      b = s._(/*BTDS*/ "This month"),
      v = s._(/*BTDS*/ "This quarter"),
      S = s._(/*BTDS*/ "Last quarter"),
      R = s._(/*BTDS*/ "This year"),
      L = s._(/*BTDS*/ "Last year"),
      E = s._(/*BTDS*/ "Maximum"),
      k = {
        TODAY: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t, t.addDays(1));
          },
          shouldRenderExplicitRangeLabel: !0,
          text: c,
          value: "today",
        },
        YESTERDAY: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(1), t);
          },
          shouldRenderExplicitRangeLabel: !0,
          text: d,
          value: "yesterday",
        },
        THIS_WEEK: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.startOfWeek(), t.addDays(1));
          },
          shouldRenderExplicitRangeLabel: !0,
          text: m,
          value: "this_week_sun_today",
        },
        LAST_WEEK: {
          calculateInterval: function (t) {
            var e = t.subtractWeeks(1).startOfWeek();
            return new (r("LocalDateInterval"))(e, t.startOfWeek());
          },
          shouldRenderExplicitRangeLabel: !0,
          text: p,
          value: "last_week_sun_sat",
        },
        MAXIMUM: {
          calculateInterval: function (n) {
            var t = n.subtractMonths(e);
            return new (r("LocalDateInterval"))(t, n.addDays(1));
          },
          shouldRenderExplicitRangeLabel: !0,
          text: E,
          value: "maximum",
        },
        LAST_2_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(1),
              t.addDays(1),
            );
          },
          shouldRenderExplicitRangeLabel: !0,
          text: _,
          value: "last_2_days",
        },
        LAST_7D: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(7), t);
          },
          shouldRenderExplicitRangeLabel: !0,
          text: f,
          value: "last_7d",
        },
        LAST_14D: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(14), t);
          },
          shouldRenderExplicitRangeLabel: !0,
          text: g,
          value: "last_14d",
        },
        LAST_28D: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(28), t);
          },
          text: h,
          value: "last_28d",
        },
        LAST_30D: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(30), t);
          },
          shouldRenderExplicitRangeLabel: !0,
          text: y,
          value: "last_30d",
        },
        LAST_90D: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(90), t);
          },
          text: s._(/*BTDS*/ "Last 30 days"),
          value: "last_90d",
        },
        LAST_7_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(6),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "Last 7 days"),
          value: "last_7_days",
        },
        LAST_14_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(13),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "Last 14 days"),
          value: "last_14_days",
        },
        LAST_28_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(27),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "Last 28 days"),
          value: "last_28_days",
        },
        LAST_30_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(29),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "Last 30 days"),
          value: "last_30_days",
        },
        LAST_90_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(89),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "Last 90 days"),
          value: "last_90_days",
        },
        LAST_180_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(179),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "Last 180 days"),
          value: "last_180_days",
        },
        LAST_MONTH: {
          calculateInterval: function (t) {
            var e = t.subtractMonths(1).startOfMonth();
            return new (r("LocalDateInterval"))(e, t.startOfMonth());
          },
          shouldRenderExplicitRangeLabel: !0,
          text: C,
          value: "last_month",
        },
        THIS_MONTH: {
          calculateInterval: function (t) {
            var e = t.startOfMonth();
            return new (r("LocalDateInterval"))(e, t.addDays(1));
          },
          shouldRenderExplicitRangeLabel: !0,
          text: b,
          value: "this_month",
        },
        THIS_QUARTER: {
          calculateInterval: function (t) {
            var e = t.startOfMonth();
            return new (r("LocalDateInterval"))(
              e.addMonths(-(t.month - 1) % 3),
              t.addDays(1),
            );
          },
          text: v,
          value: "this_quarter",
        },
        LAST_QUARTER: {
          calculateInterval: function (t) {
            var e = t.startOfMonth(),
              n = e.addMonths(-(t.month - 1) % 3);
            return new (r("LocalDateInterval"))(n.subtractMonths(3), n);
          },
          text: S,
          value: "last_nq_2_1",
        },
        LAST_3_MONTHS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.startOfMonth().subtractMonths(3),
              t.startOfMonth(),
            );
          },
          text: s._(/*BTDS*/ "Last 3 months"),
          value: "last_3_months",
        },
        THIS_YEAR: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.startOfYear(), t.addDays(1));
          },
          text: R,
          value: "this_year",
        },
        LAST_YEAR: {
          calculateInterval: function (t) {
            var e = t.startOfYear();
            return new (r("LocalDateInterval"))(e.subtractYears(1), e);
          },
          text: L,
          value: "last_year",
        },
      },
      I = {
        TODAY: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t, t.addDays(1));
          },
          text: c,
          value: "today",
        },
        YESTERDAY: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(1), t);
          },
          text: d,
          value: "yesterday",
        },
        THIS_WEEK: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.startOfWeek(), t.addDays(1));
          },
          text: m,
          value: "this_week_sun_today",
        },
        LAST_WEEK: {
          calculateInterval: function (t) {
            var e = t.subtractWeeks(1).startOfWeek();
            return new (r("LocalDateInterval"))(e, t.startOfWeek());
          },
          text: p,
          value: "last_week_sun_sat",
        },
        LAST_2_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(1),
              t.addDays(1),
            );
          },
          text: _,
          value: "last_2_days",
        },
        LAST_7D: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(7), t);
          },
          text: f,
          value: "last_7d",
        },
        LAST_14D: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(14), t);
          },
          text: g,
          value: "last_14d",
        },
        LAST_28D: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(28), t);
          },
          text: h,
          value: "last_28d",
        },
        LAST_30D: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(30), t);
          },
          text: y,
          value: "last_30d",
        },
        LAST_7_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(6),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "Last 7 days"),
          value: "last_7_days",
        },
        LAST_14_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(13),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "Last 14 days"),
          value: "last_14_days",
        },
        LAST_28_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(27),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "Last 28 days"),
          value: "last_28_days",
        },
        LAST_30_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(29),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "Last 30 days"),
          value: "last_30_days",
        },
        LAST_90_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.subtractDays(89),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "Last 90 days"),
          value: "last_90_days",
        },
        LAST_MONTH: {
          calculateInterval: function (t) {
            var e = t.subtractMonths(1).startOfMonth();
            return new (r("LocalDateInterval"))(e, t.startOfMonth());
          },
          text: C,
          value: "last_month",
        },
        THIS_MONTH: {
          calculateInterval: function (t) {
            var e = t.startOfMonth();
            return new (r("LocalDateInterval"))(e, t.addDays(1));
          },
          text: b,
          value: "this_month",
        },
        THIS_QUARTER: {
          calculateInterval: function (t) {
            var e = t.startOfMonth();
            return new (r("LocalDateInterval"))(
              e.addMonths(-(t.month - 1) % 3),
              t.addDays(1),
            );
          },
          text: v,
          value: "this_quarter",
        },
        LAST_QUARTER: {
          calculateInterval: function (t) {
            var e = t.startOfMonth(),
              n = e.addMonths(-(t.month - 1) % 3);
            return new (r("LocalDateInterval"))(n.addMonths(-3), n);
          },
          text: S,
          value: "last_nq_2_1",
        },
        THIS_YEAR: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.startOfYear(), t.addDays(1));
          },
          text: R,
          value: "this_year",
        },
        LAST_YEAR: {
          calculateInterval: function (t) {
            var e = t.startOfYear();
            return new (r("LocalDateInterval"))(e.subtractYears(1), e);
          },
          text: L,
          value: "last_year",
        },
        MAXIMUM: {
          calculateInterval: function (n) {
            var t = n.subtractMonths(e);
            return new (r("LocalDateInterval"))(t, n.addDays(1));
          },
          text: E,
          value: "maximum",
        },
      },
      T = new Set(
        Object.keys(k)
          .map(function (e) {
            return k[e].value;
          })
          .concat("lifetime"),
      ),
      D = (function () {
        function e(e, t) {
          ((this.interval = e),
            (this.preset =
              t === o("GeoDateRangePickerDefaultPresets").CUSTOM.value
                ? null
                : t));
        }
        ((e.preset = function (n) {
          return new e(null, n);
        }),
          (e.interval = function (n) {
            return new e(n);
          }));
        var t = e.prototype;
        return (
          (t.isLifetime = function () {
            return this.preset === "lifetime";
          }),
          (t.isMaximum = function () {
            return this.preset === "maximum";
          }),
          (t.isDefault = function () {
            return this.equals(e.default);
          }),
          (t.equals = function (t) {
            return this.interval === t.interval && this.preset === t.preset;
          }),
          (e.equals = function (t, n) {
            return t == null ? t == n : n == null ? !1 : t.equals(n);
          }),
          (t.getValidDatePresetOrNull = function () {
            return r("isStringNullOrEmpty")(this.preset) ? null : this.preset;
          }),
          (t.toString = function () {
            return r("isStringNullOrEmpty")(this.preset)
              ? this.getIntervalString()
              : this.preset;
          }),
          (t.getIntervalString = function () {
            var e = this.interval;
            return (
              e || u(0, 18098),
              e.start.toString() + "_" + e.end.toString()
            );
          }),
          (e.fromString = function (n) {
            var t = o("enumUtils").coerce(n, r("AdsReportDatePresetType"));
            if (t != null) return e.preset(n);
            var a = n.split("_");
            return a.length > 1
              ? e.interval(r("LocalDateInterval").fromStrings(a[0], a[1]))
              : (r("expectationViolation")("fail to convert time range: %s", n),
                e.default);
          }),
          (e.getPresets = function () {
            return T;
          }),
          (e.getAllPresetDefinitions = function () {
            return k;
          }),
          (e.getLifetimePreset = function (t, n, o) {
            return {
              calculateInterval: function () {
                return r("LocalDateInterval").create(
                  r("LocalDate").fromInstant(t / 1e3, o),
                  r("LocalDate")
                    .fromInstant(n / 1e3, o)
                    .addDays(1),
                );
              },
              text: s._(/*BTDS*/ "Lifetime"),
              value: "lifetime",
              disableComparison: !0,
              disableComparisonMessage: {
                content: s._(
                  /*BTDS*/ "You can't compare date ranges when viewing lifetime results. Please change your selected date range to show comparisons.",
                ),
                title: s._(/*BTDS*/ "Date comparison not available"),
              },
              shouldRenderExplicitRangeLabel: !0,
            };
          }),
          (e.getDataMaximumPreset = function (t, n, o) {
            return {
              calculateInterval: function () {
                return r("LocalDateInterval").create(
                  r("LocalDate").fromInstant(t / 1e3, o),
                  r("LocalDate")
                    .fromInstant(n / 1e3, o)
                    .addDays(1),
                );
              },
              shouldRenderExplicitRangeLabel: !0,
              text: E,
              value: "data_maximum",
              disableComparison: !0,
              disableComparisonMessage: {
                content: s._(
                  /*BTDS*/ "You can't compare date ranges when viewing results over the maximum date range. Please change your selected date range to show comparisons.",
                ),
                title: s._(/*BTDS*/ "Date comparison not available"),
              },
            };
          }),
          (e.getMaximumPreset = function (t) {
            return {
              calculateInterval: function (n) {
                return new (r("LocalDateInterval"))(t, n.addDays(1));
              },
              shouldRenderExplicitRangeLabel: !0,
              text: E,
              value: "maximum",
              disableComparison: !0,
              disableComparisonMessage: {
                content: s._(
                  /*BTDS*/ "You can't compare date ranges when viewing results over the maximum date range. Please change your selected date range to show comparisons.",
                ),
                title: s._(/*BTDS*/ "Date comparison not available"),
              },
            };
          }),
          (e.getSelectablePresetDefinitions = function (t, n, o) {
            return (
              o === void 0 && (o = !1),
              n
                ? [
                    k.TODAY,
                    k.YESTERDAY,
                    k.LAST_7D,
                    k.LAST_14D,
                    k.LAST_28D,
                    k.LAST_30D,
                    k.THIS_WEEK,
                    k.LAST_WEEK,
                    k.THIS_MONTH,
                    k.LAST_MONTH,
                  ]
                : t
                  ? r("filterNulls")([
                      k.TODAY,
                      k.YESTERDAY,
                      k.LAST_7_DAYS,
                      k.LAST_14_DAYS,
                      k.LAST_28_DAYS,
                      k.LAST_30_DAYS,
                      k.THIS_WEEK,
                      k.LAST_WEEK,
                      k.THIS_MONTH,
                      k.LAST_MONTH,
                    ])
                  : r("filterNulls")([
                      k.TODAY,
                      k.YESTERDAY,
                      k.LAST_7_DAYS,
                      k.LAST_14_DAYS,
                      k.LAST_28_DAYS,
                      k.LAST_30_DAYS,
                      o ? k.LAST_90_DAYS : null,
                      o ? k.LAST_180_DAYS : null,
                      k.THIS_MONTH,
                      k.LAST_MONTH,
                    ])
            );
          }),
          (e.getReportBuilderSelectablePresetDefinitions = function () {
            var t = e.getSelectablePresetDefinitions(!0, !0);
            return t.concat([
              k.THIS_QUARTER,
              k.LAST_QUARTER,
              k.THIS_YEAR,
              k.LAST_YEAR,
            ]);
          }),
          (e.getReportBuilderPageHeaderSelectablePresetDefinitions =
            function () {
              return [
                I.LAST_7_DAYS,
                I.LAST_14_DAYS,
                I.LAST_30_DAYS,
                I.LAST_90_DAYS,
                I.THIS_MONTH,
                I.THIS_QUARTER,
              ];
            }),
          (e.getGeoSelectablePresetDefinitions = function () {
            return [I.TODAY, I.YESTERDAY].concat(
              this.getMaybeIncludesTodayInsightsSelectablePresetsWithGeo(),
              [
                I.THIS_WEEK,
                I.LAST_WEEK,
                I.THIS_MONTH,
                I.LAST_MONTH,
                I.THIS_QUARTER,
                I.LAST_QUARTER,
                I.THIS_YEAR,
                I.LAST_YEAR,
              ],
            );
          }),
          (e.getIncludesTodayInsightsSelectablePresetsWithGeo = function () {
            return [I.LAST_7_DAYS, I.LAST_14_DAYS]
              .concat(r("filterNulls")([I.LAST_28_DAYS]))
              .concat([I.LAST_30_DAYS]);
          }),
          (e.getExcludesTodayInsightsSelectablePresetsWithGeo = function () {
            return [I.LAST_7D, I.LAST_14D]
              .concat(r("filterNulls")([I.LAST_28D]))
              .concat([I.LAST_30D]);
          }),
          (e.getMaybeIncludesTodayInsightsSelectablePresetsWithGeo =
            function () {
              return o(
                "AdsInsightsTimeRangeUtils",
              ).isEligibleForIGFAGraduationDateRangePreset()
                ? this.getIncludesTodayInsightsSelectablePresetsWithGeo()
                : this.getExcludesTodayInsightsSelectablePresetsWithGeo();
            }),
          (e.getInsightsSelectablePresetsWithGeo = function () {
            return [I.TODAY, I.YESTERDAY, I.LAST_2_DAYS].concat(
              this.getMaybeIncludesTodayInsightsSelectablePresetsWithGeo(),
              [I.THIS_WEEK, I.LAST_WEEK, I.THIS_MONTH, I.LAST_MONTH, I.MAXIMUM],
            );
          }),
          (e.getSortedGeoDateRangePresetFromValues = function (n) {
            var t = e.getInsightsSelectablePresetsWithGeo();
            return n
              .map(function (e) {
                return t.find(function (t) {
                  return t.value === e;
                });
              })
              .filter(Boolean)
              .sort(function (e, n) {
                return t.indexOf(e) - t.indexOf(n);
              });
          }),
          (e.isValidPreset = function (t) {
            return T.has(t);
          }),
          (e.getPresetDefinition = function (n) {
            var t = e.getSelectablePresetDefinitions(!1, !0),
              r = t.filter(function (e) {
                return e.value === n;
              });
            return r.length > 0 ? r[0] : null;
          }),
          (e.fromRaw = function (n, o) {
            if (o != null && e.isValidPreset(o)) return e.preset(o);
            if (n != null) {
              var t, a;
              return e.interval(
                r("LocalDateInterval").fromStrings(
                  (t = n.start) != null ? t : "",
                  (a = n.end) != null ? a : "",
                ),
              );
            }
            return null;
          }),
          (e.fromRawOrDefault = function (n, r) {
            var t;
            return (t = e.fromRaw(n, r)) != null ? t : e.default;
          }),
          (e.getDefaultPreset = function (t) {
            return (
              t === void 0 && (t = !1),
              t ? "last_90_days" : "last_30_days"
            );
          }),
          e
        );
      })();
    ((D.default = D.preset(D.getDefaultPreset())),
      (D.lifetime = D.preset("lifetime")),
      (l.default = D));
  },
  226,
);
