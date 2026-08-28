__d(
  "adsExperimentsGetDayDifference",
  ["LocalDate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e = r("LocalDate").fromISOString(t.toISOString()),
          o = r("LocalDate").fromISOString(n.toISOString());
        return o.daysBetween(e);
      },
      s = e;
    l.default = s;
  },
  98,
);
