__d(
  "GeoDateRangePickerDefaultPresets",
  ["fbt", "GeoDateRangeComparePresets", "GeoDateRangePresets"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = { text: s._(/*BTDS*/ "Custom"), value: "CUSTOM" },
      d = { text: s._(/*BTDS*/ "Maximum"), value: "maximum" },
      m = [
        (e = r("GeoDateRangePresets")).TODAY,
        e.YESTERDAY,
        e.LAST_7_DAYS,
        e.LAST_14_DAYS,
        e.LAST_28_DAYS,
        e.THIS_MONTH,
        e.THIS_QUARTER,
      ],
      p = [
        (u = r("GeoDateRangeComparePresets")).PREVIOUS_PERIOD,
        u.PREVIOUS_MONTH,
        u.PREVIOUS_QUARTER,
        u.PREVIOUS_YEAR,
        c,
      ],
      _ = [u.PREVIOUS_PERIOD, u.PREVIOUS_MONTH, u.PREVIOUS_YEAR, c];
    ((l.CUSTOM = c),
      (l.MAXIMUM = d),
      (l.DEFAULT_PRESETS = m),
      (l.COMPARE_PRESETS = p),
      (l.AM_COMPARE_PRESETS = _));
  },
  226,
);
