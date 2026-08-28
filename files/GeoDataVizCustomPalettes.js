__d(
  "GeoDataVizCustomPalettes",
  ["GeoDataVizThemeTypes", "GeodesicStyleXDefaultTheme"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "#717477";
    function s(t, n) {
      var a;
      switch (t) {
        case o("GeoDataVizThemeTypes").CustomPaletteType.TofuSplitLine:
          return {
            single: r("GeodesicStyleXDefaultTheme")[
              "geodesic-color-data-viz-sky"
            ],
            multiple: [
              r("GeodesicStyleXDefaultTheme")["geodesic-color-data-viz-sky"],
              "#686060",
              "#E6DEDE",
            ],
          };
        case o("GeoDataVizThemeTypes").CustomPaletteType.AdsInsights:
          return {
            single: r("GeodesicStyleXDefaultTheme")[
              "geodesic-color-data-viz-eggplant"
            ],
            multiple: [
              r("GeodesicStyleXDefaultTheme")[
                "geodesic-color-data-viz-eggplant"
              ],
              r("GeodesicStyleXDefaultTheme")["geodesic-color-data-viz-sea"],
            ],
          };
        case o("GeoDataVizThemeTypes").CustomPaletteType.AdsInsightsAudienceGeo:
          return {
            single: r("GeodesicStyleXDefaultTheme")[
              "geodesic-color-data-viz-eggplant"
            ],
            multiple: [
              r("GeodesicStyleXDefaultTheme")[
                "geodesic-color-data-viz-eggplant"
              ],
              r("GeodesicStyleXDefaultTheme")["geodesic-color-data-viz-sea"],
              (a =
                n == null
                  ? void 0
                  : n({
                      color: o("GeoDataVizThemeTypes").CategoricalColor.Gray,
                    })) != null
                ? a
                : e,
            ],
          };
        case o("GeoDataVizThemeTypes").CustomPaletteType
          .CTMMessagingReportTrendComparison:
          return {
            single: r("GeodesicStyleXDefaultTheme")[
              "geodesic-color-data-viz-periwinkle"
            ],
            multiple: [
              r("GeodesicStyleXDefaultTheme")[
                "geodesic-color-data-viz-periwinkle"
              ],
              r("GeodesicStyleXDefaultTheme")[
                "geodesic-color-data-viz-dark-cloud"
              ],
            ],
          };
        case o("GeoDataVizThemeTypes").CustomPaletteType.MetaCRM:
          return {
            single: r("GeodesicStyleXDefaultTheme")[
              "geodesic-color-data-viz-redwood"
            ],
            multiple: [
              r("GeodesicStyleXDefaultTheme")[
                "geodesic-color-data-viz-redwood"
              ],
              r("GeodesicStyleXDefaultTheme")["geodesic-color-data-viz-pine"],
              "#BCC0C4",
              r("GeodesicStyleXDefaultTheme")[
                "geodesic-color-text-placeholder-inverted-disabled"
              ],
              "#1877F2",
              "#05214D",
              "#A8D1FF",
              "#FFBA00",
              "#D93616",
            ],
          };
        case o("GeoDataVizThemeTypes").CustomPaletteType
          .AdsReportBuilderNegative:
          return {
            single: r("GeodesicStyleXDefaultTheme")[
              "geodesic-color-background-error-primary"
            ],
            multiple: [
              r("GeodesicStyleXDefaultTheme")[
                "geodesic-color-background-error-primary"
              ],
            ],
          };
        case o("GeoDataVizThemeTypes").CustomPaletteType
          .AdsReportBuilderPositive:
          return {
            single: r("GeodesicStyleXDefaultTheme")[
              "geodesic-color-border-success-default-active"
            ],
            multiple: [
              r("GeodesicStyleXDefaultTheme")[
                "geodesic-color-border-success-default-active"
              ],
            ],
          };
        case o("GeoDataVizThemeTypes").CustomPaletteType
          .AdsReportBuilderNeutral:
          return {
            single: r("GeodesicStyleXDefaultTheme")[
              "geodesic-color-background-warning-primary"
            ],
            multiple: [
              r("GeodesicStyleXDefaultTheme")[
                "geodesic-color-background-warning-primary"
              ],
            ],
          };
        case o("GeoDataVizThemeTypes").CustomPaletteType.DisabledRing:
          return {
            single: r("GeodesicStyleXDefaultTheme")[
              "geodesic-color-data-viz-slate"
            ],
            multiple: [
              r("GeodesicStyleXDefaultTheme")["geodesic-color-data-viz-slate"],
            ],
          };
        case o("GeoDataVizThemeTypes").CustomPaletteType.AdsExperimentsHigh:
          return { single: "#007e59", multiple: ["#007e59"] };
        case o("GeoDataVizThemeTypes").CustomPaletteType.AdsExperimentsMedium:
          return { single: "#af5000", multiple: ["#af5000"] };
        case o("GeoDataVizThemeTypes").CustomPaletteType.AdsExperimentsLow:
          return { single: "#dc373c", multiple: ["#dc373c"] };
        case o("GeoDataVizThemeTypes").CustomPaletteType.CreatorMarketplaceIG:
          return {
            single: "rgba(115,115,195,1)",
            multiple: [
              "rgba(255,176,102,1)",
              "rgba(245,84,96,1)",
              "rgba(255,176,102,1)",
              "rgba(245,84,96,1)",
            ],
          };
        case o("GeoDataVizThemeTypes").CustomPaletteType.CreatorMarketplaceFB:
          return {
            single: "rgba(0,148,207,1)",
            multiple: [
              "rgba(160,217,247,1)",
              "rgba(131,200,192,1)",
              "rgba(160,217,247,1)",
              "rgba(131,200,192,1)",
            ],
          };
        case o("GeoDataVizThemeTypes").CustomPaletteType
          .CreatorMarketplaceCrossPlatform:
          return {
            single: "rgba(72,68,68,1)",
            multiple: [
              "rgba(72,68,68,1)",
              "rgba(72,68,68,1)",
              "rgba(72,68,68,1)",
              "rgba(72,68,68,1)",
            ],
          };
      }
    }
    l.getGeoDataVizCustomPalettes = s;
  },
  98,
);
