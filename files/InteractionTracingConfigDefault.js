__d(
  "InteractionTracingConfigDefault",
  [
    "OneTraceQPLLogger",
    "SiteData",
    "WebDriverConfig",
    "gkx",
    "performanceNavigationStart",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("WebDriverConfig").isJestE2ETestRun ? 3e5 : 6e4,
      u = new Set([
        "AppTiming",
        "TierFlush",
        "NavigationTiming",
        "VisualCompletion",
        "TestMetrics",
        "ServerTimings",
      ]),
      c = r("gkx")("22968") && r("gkx")("1514"),
      d = {
        cancelOnBackground: c,
        defaultTracePolicy: "default",
        enableInstrumentationCorrectnessLogging: r("gkx")("3739"),
        instrumentationCorrectnessQPLEvent: r("qpl")._(340787201, "419"),
        enableMemoryLogging: r("gkx")("20980"),
        enableVCTracker: !0,
        heroLatePlaceholderDetection: r("gkx")("20983"),
        heroDebugTracing: r("gkx")("10726"),
        pkgCohort: r("SiteData").pkg_cohort,
        timeout: s,
        qplActionCancelOnNavigation: !1,
        qplActionMap: o("OneTraceQPLLogger").qplActionMap,
        qplBaseTimestamp: r("performanceNavigationStart")(),
        useDocumentBodyForVCRoot: !0,
        navigationCancelsInteractions: !1,
        heroNestedRootsFix: r("gkx")("20984"),
        failLoggingFixCometErrorBoundary: r("gkx")("11582"),
        failOnCometErrorBoundary: r("gkx")("1154")
          ? "fail"
          : r("gkx")("196")
            ? "annotate"
            : "disabled",
        qplPointFilterRegex:
          /(^(server_)?adp_|Relay_|late_mutation.+([2-9]|\d\d))|(.+_)?ssr_.+([2-9]|\d\d)|Queue_|Render_/,
        cleanUpTraceTimeout: r("gkx")("13090") ? 10 * 1e3 : 1800 * 1e3,
        allowedQPLPointTypes: u,
        clientRevision: r("SiteData").client_revision,
        serverRevision: (e = r("SiteData").server_revision) != null ? e : 0,
        pushPhase: r("SiteData").push_phase,
        qplEnableE2ETracing: r("gkx")("15620"),
        qplPointsShouldLogData: r("gkx")("19586"),
        enableUserTimings: r("gkx")("20484"),
        enableUserTimingsVerbose: r("gkx")("20485"),
        heroBootloadStatsAfterQPL: r("gkx")("9056"),
      };
    l.DEFAULT_TRACING_CONFIG = d;
  },
  98,
);
