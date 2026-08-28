__d(
  "GeoPrivateChartPaletteContext",
  [
    "GeoChartPalette",
    "GeoPrivateDataVizDefaultTheme",
    "emptyFunction",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext({
        getColor: r("emptyFunction").thatReturns(
          r("GeoPrivateDataVizDefaultTheme").selectPalette({
            type: r("GeoChartPalette").Neutral,
          }).single,
        ),
        default: !0,
      });
    l.default = u;
  },
  98,
);
