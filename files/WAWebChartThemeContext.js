__d(
  "WAWebChartThemeContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        xTickStrokeWidth: 2,
        yTickStrokeWidth: 1,
        axisStrokeWidth: 2,
        gridStrokeWidth: 1,
        markerRadius: 4,
        markerStrokeWidth: 2,
        markerHaloRadius: 10,
        markerHaloOpacity: 0.2,
        fontSize: 13,
        fontWeight: "400",
        showYAxis: !1,
        tickLabelFontFamily: "SF Pro Text",
        verticalMarkerStrokeWidth: 2,
        verticalMarkerDash: [4, 2.5],
        xTicksCount: 3,
        tooltipBottomMargin: 10,
        margin: { left: 50, top: 50, right: 10, bottom: 50 },
      },
      c = babelHelpers.extends({}, u, {
        backgroundColor: "#161717",
        chartStroke: "#8696A0",
        textColor: "#667781",
        tooltipTextColor: "#AEBAC1",
        tooltipBackgroundColor: "#202C33",
      }),
      d = babelHelpers.extends({}, u, {
        backgroundColor: "#fff",
        chartStroke: "#E9EDEF",
        textColor: "#667781",
        tooltipTextColor: "#667781",
        tooltipBackgroundColor: "#fff",
      }),
      m = s.createContext(d);
    ((l.DarkTheme = c), (l.LightTheme = d), (l.ChartThemeContext = m));
  },
  98,
);
