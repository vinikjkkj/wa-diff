__d(
  "WebLoom",
  [
    "CurrentUser",
    "Env",
    "PerfXSharedFields",
    "QuickPerformanceLogger",
    "Random",
    "SiteData",
    "SnappyCompressUtil",
    "URI",
    "UserAgent",
    "WebLoomBanzaiTransport",
    "WebLoomConfig",
    "cr:1094133",
    "cr:13597",
    "gkx",
    "performanceNavigationStart",
    "web-loom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 12e4,
      d = {
        QuickPerformanceLogger: e || (e = r("QuickPerformanceLogger")),
        Random: r("Random"),
        Transport: r("WebLoomBanzaiTransport"),
        URI: s || (s = r("URI")),
        isBrowser: r("UserAgent").isBrowser,
        compressStringToSnappy: r("SnappyCompressUtil").compressStringToSnappy,
      },
      m = {
        appStart: r("performanceNavigationStart")(),
        appId: r("CurrentUser").getAppID(),
        sanitizeURIs: r("gkx")("20864"),
        samplingConfig: r("WebLoomConfig"),
        clientRev: r("SiteData").client_revision,
        serverRev: r("SiteData").server_revision,
        spinMode: r("SiteData").spin,
        useLiteTracing: r("gkx")("20865"),
        perfXData: r("PerfXSharedFields").getCommonData(),
        debugLogToConsole: r("gkx")("7170"),
        stuckTraceTimeoutMs: r("gkx")("7884") ? c : 0,
      },
      p = new (o("web-loom").WebLoomCore)(m, d);
    (n("cr:1094133") && p.addProvider(n("cr:1094133")),
      n("cr:13597") &&
        (u || (u = r("Env"))).jssp_header_sent &&
        p.addProvider(n("cr:13597")));
    var _ = p;
    l.default = _;
  },
  98,
);
