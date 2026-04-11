__d(
  "oz-player/shims/www/OzPerformanceWWW",
  ["performance", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        now: function () {
          return (e || (e = r("performanceNow")))();
        },
        getEntriesByName: function (t, n) {
          return typeof (s || (s = r("performance"))).getEntriesByName ==
            "function"
            ? (s || (s = r("performance"))).getEntriesByName(t, n)
            : [];
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
