__d(
  "GeoDateRangePresets",
  ["fbt", "LocalDateInterval"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        TODAY: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t, t.addDays(1));
          },
          text: s._(/*BTDS*/ "Today"),
          value: "today",
        },
        YESTERDAY: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(1), t);
          },
          text: s._(/*BTDS*/ "Yesterday"),
          value: "yesterday",
        },
        LAST_7_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(7), t);
          },
          text: s._(/*BTDS*/ "Last 7 days"),
          value: "last_7_days",
        },
        LAST_14_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(14), t);
          },
          text: s._(/*BTDS*/ "Last 14 days"),
          value: "last_14_days",
        },
        LAST_28_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(28), t);
          },
          text: s._(/*BTDS*/ "Last 28 days"),
          value: "last_28_days",
        },
        LAST_30_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(30), t);
          },
          text: s._(/*BTDS*/ "Last 30 days"),
          value: "last_30_days",
        },
        LAST_90_DAYS: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.subtractDays(90), t);
          },
          text: s._(/*BTDS*/ "Last 90 days"),
          value: "last_90_days",
        },
        THIS_MONTH: {
          calculateInterval: function (t) {
            var e = t.startOfMonth();
            return new (r("LocalDateInterval"))(e, t.addDays(1));
          },
          text: s._(/*BTDS*/ "This month"),
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
          text: s._(/*BTDS*/ "This quarter"),
          value: "this_quarter",
        },
        THIS_HALF: {
          calculateInterval: function (t) {
            var e = t.startOfMonth();
            return new (r("LocalDateInterval"))(
              e.addMonths(-(t.month - 1) % 6),
              t.addDays(1),
            );
          },
          text: s._(/*BTDS*/ "This half"),
          value: "this_half",
        },
        THIS_YEAR: {
          calculateInterval: function (t) {
            return new (r("LocalDateInterval"))(t.startOfYear(), t.addDays(1));
          },
          text: s._(/*BTDS*/ "This year"),
          value: "this_year",
        },
      },
      u = e;
    l.default = u;
  },
  226,
);
