__d(
  "AdsRBCuratedReportCTMComponentUtils",
  [
    "AdsRBCommonContentStrings",
    "AdsRBCuratedReportCTMStringUtils",
    "GeoBaseText.react",
    "GeoChartBaseLegend.react",
    "GeoFlexbox.react",
    "geoMargin",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.value;
      return s.jsx(r("GeoBaseText.react"), {
        color: "value",
        size: "value",
        weight: "bold",
        whiteSpace: "nowrap",
        xstyle: r("geoMargin").start8,
        children: t,
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.color,
        n = e.name,
        a = e.value;
      return s.jsxs(r("GeoFlexbox.react"), {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
          s.jsx(r("GeoChartBaseLegend.react"), {
            color: t,
            label: n,
            variant: "bar",
          }),
          s.jsx(u, {
            value: a != null ? a : o("AdsRBCommonContentStrings").NO_DATA,
          }),
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.name,
        n = e.shouldShowPercentage,
        a = n === void 0 ? !0 : n,
        i = e.value,
        l =
          i === null
            ? o("AdsRBCommonContentStrings").NO_DATA
            : a
              ? i + "%"
              : o("AdsRBCuratedReportCTMStringUtils").N_A;
      return s.jsxs(r("GeoFlexbox.react"), {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
          s.jsx(r("GeoBaseText.react"), {
            color: "value",
            size: "value",
            children: t,
          }),
          s.jsx(u, { value: l }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.ColorNameAndValue = c),
      (l.NameAndPercent = d));
  },
  98,
);
