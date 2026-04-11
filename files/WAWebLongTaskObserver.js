__d(
  "WAWebLongTaskObserver",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebCrashContextUtils",
    "WAWebDocumentVisibilityObserver",
    "WAWebEnvironment",
    "WAWebLowEndDeviceApi",
    "WAWebODS",
    "WAWebPdfViewerAnrTracker",
    "WAWebVoipAnrTracker",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 5e3,
      c = 10 * 1e3,
      d = 15 * 1e3,
      m = 30 * 1e3;
    function p(e) {
      return e > d ? "15s+" : e > c ? "10s-15s" : e > u ? "5s-10s" : "0s-5s";
    }
    var _ = (function () {
      function t() {
        this.documentVisibilityObserver = new (o(
          "WAWebDocumentVisibilityObserver",
        ).WAWebDocumentVisibilityObserver)();
      }
      var n = t.prototype;
      return (
        (n.isSupported = function () {
          var e;
          return (
            typeof ((e = window.PerformanceObserver) == null ||
            (e = e.supportedEntryTypes) == null
              ? void 0
              : e.includes) == "function" &&
            window.PerformanceObserver.supportedEntryTypes.includes("longtask")
          );
        }),
        (n.observe = function (t) {
          (t.observe({ type: "longtask", buffered: !1 }),
            this.documentVisibilityObserver.observe());
        }),
        (n.handle = function (n) {
          for (var t of n) {
            if (t.duration < u) {
              r("WAWebODS").incr("web.perf.anr.skipped.too_short");
              continue;
            }
            if (t.duration > m) {
              r("WAWebODS").incr("web.perf.anr.skipped.too_long");
              continue;
            }
            var a = this.documentVisibilityObserver.isWindowInFocus(),
              i = this.documentVisibilityObserver.isDocumentVisible();
            if (!i || !a) {
              r("WAWebODS").incr("web.perf.anr.skipped.not_visible");
              continue;
            }
            (r("WAWebODS").incr("web.perf.anr.count"),
              t.duration > d
                ? r("WAWebODS").incr("web.perf.anr.bucket.15s_plus")
                : t.duration > c
                  ? r("WAWebODS").incr("web.perf.anr.bucket.10s_15s")
                  : r("WAWebODS").incr("web.perf.anr.bucket.5s_10s"),
              o("WAWebLowEndDeviceApi").isLowEndDevice() &&
                r("WAWebODS").incr("web.perf.anr.low_end_device"));
            var l = t.startTime + t.duration;
            o("WAWebCrashContextUtils").recordHangEvent(l, t.duration);
            var _ = o("WAWebAppTracker").AppTracker.getAppContextWithLookback(
                t.duration,
                l,
              ),
              f = "";
            if (r("WAWebEnvironment").isWeb) {
              var g = _.includes(
                  String(o("WAWebAppTracker").AppTrackerType.VoipAudio),
                ),
                h = _.includes(
                  String(o("WAWebAppTracker").AppTrackerType.VoipVideo),
                );
              if (g || h) {
                (r("WAWebODS").incr("web.perf.anr.during.voip"),
                  o("WAWebVoipAnrTracker").isAnrTrackingActive() &&
                    o("WAWebVoipAnrTracker").incrementAnrCount());
                var y = h ? "video" : "audio",
                  C = o("WAWebABProps").getABPropConfigValue(
                    "enable_web_voip_proxy_and_sctp_workers",
                  );
                f = " callType:" + y + " proxyWorker:" + String(C);
              }
            }
            (o("WAWebPdfViewerAnrTracker").isPdfViewerAnrTrackingActive() &&
              o("WAWebPdfViewerAnrTracker").incrementPdfViewerAnrCount(),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[longtask] entryStartTime: ",
                    "s ago",
                  ])),
                ((t.startTime - self.performance.now()) / 1e3).toFixed(0),
              ),
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[longtask][",
                      "] entryDuration:",
                      "ms lowEndDevice:",
                      " appContext:",
                      "",
                      "",
                    ])),
                  p(t.duration),
                  t.duration,
                  o("WAWebLowEndDeviceApi").isLowEndDevice(),
                  _ || "none",
                  f,
                )
                .sendLogs("[performance observer] longtask", {
                  sampling: 0.01,
                  sendLogsType:
                    o("WALogger").SendLogsType
                      .PERFORMANCE_OBSERVER_LONGTASK_SAD,
                }));
          }
        }),
        t
      );
    })();
    l.WAWebLongTaskObserver = _;
  },
  98,
);
