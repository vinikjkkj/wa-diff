__d(
  "WAWebVoipBrowserMetrics",
  ["WALogger", "WAWebBrowserMetricsTracker", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new (r("WAWebBrowserMetricsTracker"))("[voip:browserMetrics]"),
      c = null;
    function d() {
      ((c = null), u.start());
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          u.isActive() &&
            ((c = _()),
            yield u.stop(),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:browserMetrics] stopped",
                ])),
            ));
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      if (!u.isActive()) return c;
      u.sampleMemory();
      var t = u.finalizePressurePcts(),
        n = u.finalizeMemoryStats(),
        r = u.getCapabilities();
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:browserMetrics] snapshot: cpu nominal=",
              "% fair=",
              "% serious=",
              "% critical=",
              "% mem avg=",
              "MB peak=",
              "MB",
            ])),
          String(t.nominalPct),
          String(t.fairPct),
          String(t.seriousPct),
          String(t.criticalPct),
          String(n.avgUsedMb),
          String(n.peakUsedMb),
        ),
        {
          browserCpuPressureSupported: r.browserCpuPressureSupported,
          browserCpuPressureNominalPct: t.nominalPct,
          browserCpuPressureFairPct: t.fairPct,
          browserCpuPressureSeriousPct: t.seriousPct,
          browserCpuPressureCriticalPct: t.criticalPct,
          browserMemorySupported: r.browserMemorySupported,
          browserAvgUsedJsHeapSizeMb: n.avgUsedMb,
          browserPeakUsedJsHeapSizeMb: n.peakUsedMb,
          browserJsHeapSizeLimitMb: n.limitMb,
          browserTotalJsHeapSizeMb: n.totalMb,
        }
      );
    }
    function f() {
      u.reset();
    }
    function g() {
      return u.getCapabilities();
    }
    ((l.startBrowserMetrics = d),
      (l.stopBrowserMetrics = m),
      (l.snapshotBrowserMetrics = _),
      (l.resetBrowserMetrics = f),
      (l.getBrowserMetricsCapabilities = g));
  },
  98,
);
