__d(
  "GeoMetricUtils",
  ["NumberFormatConfig", "intlSummarizeNumber"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new RegExp("\\" + r("NumberFormatConfig").decimalSeparator + "0+$");
    function s(t) {
      return t.replace(e, "");
    }
    function u(e) {
      return s(r("intlSummarizeNumber")(e, 1));
    }
    l.formatValue = u;
  },
  98,
);
