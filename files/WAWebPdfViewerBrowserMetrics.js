__d(
  "WAWebPdfViewerBrowserMetrics",
  ["WALogger", "WAWebBrowserMetricsTracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("WAWebBrowserMetricsTracker"))("[pdfViewer:browserMetrics]"),
      u = null;
    function c() {
      ((u = null), s.start());
    }
    async function d() {
      if (s.isActive()) {
        (await s.stop(), s.sampleMemory());
        var t = s.finalizePressurePcts(),
          n = s.finalizeMemoryStats(),
          r = s.getCapabilities();
        ((u = {
          browserCpuPressureSupported: r.browserCpuPressureSupported,
          browserCpuPressureNominalPct: t.nominalPct,
          browserCpuPressureFairPct: t.fairPct,
          browserCpuPressureSeriousPct: t.seriousPct,
          browserCpuPressureCriticalPct: t.criticalPct,
          browserMemorySupported: r.browserMemorySupported,
          browserAvgUsedJsHeapSizeMb: n.avgUsedMb,
          browserPeakUsedJsHeapSizeMb: n.peakUsedMb,
          browserMinUsedJsHeapSizeMb: n.minUsedMb,
          browserJsHeapSizeLimitMb: n.limitMb,
          browserTotalJsHeapSizeMb: n.totalMb,
        }),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pdfViewer:browserMetrics] stopped",
              ])),
          ));
      }
    }
    function m() {
      var e = u;
      return ((u = null), e);
    }
    ((l.startPdfViewerBrowserMetrics = c),
      (l.stopPdfViewerBrowserMetrics = d),
      (l.consumePdfViewerBrowserMetrics = m));
  },
  98,
);
