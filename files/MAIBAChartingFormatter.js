__d(
  "MAIBAChartingFormatter",
  ["DateTime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      var e = r("DateTime").create(Number(t), n).format("M d");
      return e;
    };
    l.dateTimeLabelFormatter = e;
  },
  98,
);
