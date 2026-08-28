__d(
  "AdsInsightsDmaDeprecationUtils",
  ["AdsApplicationUtils", "adsExcelGKCheck", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        return (
          r("gkx")("13973") ||
          r("gkx")("13974") ||
          (o("AdsApplicationUtils").isFAME() &&
            r("adsExcelGKCheck")("dma_breakdown_deprecation_dogfooding"))
        );
      },
      s = new Set(["dma", "dma_code"]),
      u = function (n) {
        return e()
          ? n.filter(function (e) {
              return !s.has(e);
            })
          : n;
      };
    ((l.shouldHideDma = e), (l.filterDmaBreakdowns = u));
  },
  98,
);
