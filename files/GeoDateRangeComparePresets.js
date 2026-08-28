__d(
  "GeoDateRangeComparePresets",
  ["fbt", "LocalDateInterval", "PeriodUnit"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        CUSTOM: {
          calculateInterval: function (t) {
            return t;
          },
          text: s._(/*BTDS*/ "Custom"),
          value: "CUSTOM",
        },
        PREVIOUS_PERIOD: {
          calculateInterval: function (t) {
            var e = t.measure(r("PeriodUnit").day);
            return new (r("LocalDateInterval"))(
              t.start.subtractDays(e),
              t.start,
            );
          },
          text: s._(/*BTDS*/ "Previous period"),
          value: "PREVIOUS_PERIOD",
        },
        PREVIOUS_MONTH: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.start.subtractMonths(1),
              t.end.subtractMonths(1),
            );
          },
          text: s._(/*BTDS*/ "Previous month"),
          value: "PREVIOUS_MONTH",
        },
        PREVIOUS_QUARTER: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.start.subtractMonths(3),
              t.end.subtractMonths(3),
            );
          },
          text: s._(/*BTDS*/ "Previous quarter"),
          value: "PREVIOUS_QUARTER",
        },
        PREVIOUS_YEAR: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(
              t.start.subtractYears(1),
              t.end.subtractYears(1),
            );
          },
          text: s._(/*BTDS*/ "Previous year"),
          value: "PREVIOUS_YEAR",
        },
      },
      u = e;
    l.default = u;
  },
  226,
);
