__d(
  "WAWebPdfViewerBrowserMetrics",
  ["WALogger", "WAWebBrowserMetricsTracker", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("WAWebBrowserMetricsTracker"))("[pdfViewer:browserMetrics]"),
      u = null;
    function c() {
      ((u = null), s.start());
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (s.isActive()) {
            (yield s.stop(), s.sampleMemory());
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
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      var e = u;
      return ((u = null), e);
    }
    ((l.startPdfViewerBrowserMetrics = c),
      (l.stopPdfViewerBrowserMetrics = d),
      (l.consumePdfViewerBrowserMetrics = p));
  },
  98,
);
