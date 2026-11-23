__d(
  "WAWebVoipBrowserMetrics",
  ["WALogger", "WAWebBrowserMetricsTracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new (r("WAWebBrowserMetricsTracker"))("[voip:browserMetrics]"),
      c = null;
    function d() {
      ((c = null), u.start());
    }
    async function m() {
      u.isActive() &&
        ((c = p()),
        await u.stop(),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:browserMetrics] stopped",
            ])),
        ));
    }
    function p() {
      if (!u.isActive()) return c;
      u.sampleMemory();
      var e = u.finalizePressurePcts(),
        t = u.finalizeMemoryStats(),
        n = u.getCapabilities();
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:browserMetrics] snapshot: cpu nominal=",
              "% fair=",
              "% serious=",
              "% critical=",
              "% mem avg=",
              "MB peak=",
              "MB",
            ])),
          String(e.nominalPct),
          String(e.fairPct),
          String(e.seriousPct),
          String(e.criticalPct),
          String(t.avgUsedMb),
          String(t.peakUsedMb),
        ),
        {
          browserCpuPressureSupported: n.browserCpuPressureSupported,
          browserCpuPressureNominalPct: e.nominalPct,
          browserCpuPressureFairPct: e.fairPct,
          browserCpuPressureSeriousPct: e.seriousPct,
          browserCpuPressureCriticalPct: e.criticalPct,
          browserMemorySupported: n.browserMemorySupported,
          browserAvgUsedJsHeapSizeMb: t.avgUsedMb,
          browserPeakUsedJsHeapSizeMb: t.peakUsedMb,
          browserJsHeapSizeLimitMb: t.limitMb,
          browserTotalJsHeapSizeMb: t.totalMb,
        }
      );
    }
    function _() {
      u.reset();
    }
    function f() {
      return u.getCapabilities();
    }
    ((l.startBrowserMetrics = d),
      (l.stopBrowserMetrics = m),
      (l.snapshotBrowserMetrics = p),
      (l.resetBrowserMetrics = _),
      (l.getBrowserMetricsCapabilities = f));
  },
  98,
);
