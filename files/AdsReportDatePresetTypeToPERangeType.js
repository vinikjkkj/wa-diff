__d(
  "AdsReportDatePresetTypeToPERangeType",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Map([
        ["lifetime", "LIFETIME"],
        ["today", "TODAY"],
        ["yesterday", "YESTERDAY"],
        ["last_7_days", "SEVEN_DAYS"],
        ["last_14_days", "LAST_14_DAYS"],
        ["last_30_days", "LAST_30_DAYS"],
        ["last_7d", "SEVEN_DAYS"],
        ["last_14d", "LAST_14_DAYS"],
        ["last_28_days", "LAST_28_DAYS"],
        ["last_30d", "LAST_30_DAYS"],
        ["last_month", "LAST_MONTH"],
        ["this_month", "THIS_MONTH"],
        ["maximum", "MAXIMUM"],
        [null, "CUSTOM"],
        [void 0, "CUSTOM"],
        ["this_week_sun_today", "THIS_WEEK_SUN_TODAY"],
        ["last_week_sun_sat", "LAST_WEEK_SUN_SAT"],
      ]),
      s = e;
    l.default = s;
  },
  98,
);
