__d(
  "WAWebMainThreadStallReporter",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebCrashContextUtils",
    "WAWebEnvironment",
    "WAWebLowEndDeviceApi",
    "WAWebODS",
    "WAWebPdfViewerAnrTracker",
    "WAWebVoipAnrTracker",
    "WAWebWindowsHybridBridgeInitiator",
    "cr:17219",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (e = n("cr:17219")) != null ? e : {},
      d = c.getWindowsBridge,
      m = 5 * 1e3,
      p = 10 * 1e3,
      _ = 15 * 1e3,
      f = 30 * 1e3;
    function g(e) {
      return e > _ ? "15s+" : e > p ? "10s-15s" : e > m ? "5s-10s" : "0s-5s";
    }
    function h(e, t) {
      return e < m
        ? (r("WAWebODS").incr("web.perf.anr.skipped.too_short"), !0)
        : e > f
          ? (r("WAWebODS").incr("web.perf.anr.skipped.too_long"), !0)
          : !t.isDocumentVisible() || !t.isWindowInFocus()
            ? (r("WAWebODS").incr("web.perf.anr.skipped.not_visible"), !0)
            : !1;
    }
    function y(e) {
      e > _
        ? r("WAWebODS").incr("web.perf.anr.bucket.15s_plus")
        : e > p
          ? r("WAWebODS").incr("web.perf.anr.bucket.10s_15s")
          : r("WAWebODS").incr("web.perf.anr.bucket.5s_10s");
    }
    function C(e) {
      var t = e.includes(String(o("WAWebAppTracker").AppTrackerType.VoipAudio)),
        n = e.includes(String(o("WAWebAppTracker").AppTrackerType.VoipVideo)),
        a = t || n;
      if (!r("WAWebEnvironment").isWeb || !a)
        return { callLog: "", isVoipAnr: a };
      (r("WAWebODS").incr("web.perf.anr.during.voip"),
        o("WAWebVoipAnrTracker").isAnrTrackingActive() &&
          o("WAWebVoipAnrTracker").incrementAnrCount());
      var i = n ? "video" : "audio",
        l = o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_proxy_and_sctp_workers",
        );
      return {
        callLog: " callType:" + i + " proxyWorker:" + String(l),
        isVoipAnr: !0,
      };
    }
    function b() {
      var e;
      if (r("WAWebEnvironment").isWindows) {
        var t =
          d == null ||
          (e = d(
            r("WAWebWindowsHybridBridgeInitiator").WAWebMainThreadStallReporter,
          )) == null
            ? void 0
            : e.voip;
        t == null || t.reportWebAnr == null || t.reportWebAnr();
      }
    }
    function v(e) {
      var t = e.durationMs,
        n = e.endTime,
        a = e.source,
        i = e.visibility;
      if (!h(t, i)) {
        var l = o("WAWebAppTracker").AppTracker.getAppContextWithLookback(t, n);
        if (
          l.includes(
            String(o("WAWebAppTracker").AppTrackerType.ClosingBrowserTab),
          )
        ) {
          r("WAWebODS").incr("web.perf.anr.skipped.unloading");
          return;
        }
        (r("WAWebODS").incr("web.perf.anr.count"),
          a === "heartbeat"
            ? r("WAWebODS").incr("web.perf.anr.source.heartbeat")
            : r("WAWebODS").incr("web.perf.anr.source.longtask"),
          y(t),
          o("WAWebLowEndDeviceApi").isLowEndDevice() &&
            r("WAWebODS").incr("web.perf.anr.low_end_device"),
          o("WAWebCrashContextUtils").recordHangEvent(n, t),
          b());
        var c = C(l),
          d = c.callLog,
          m = c.isVoipAnr;
        o("WAWebPdfViewerAnrTracker").isPdfViewerAnrTrackingActive() &&
          o("WAWebPdfViewerAnrTracker").incrementPdfViewerAnrCount();
        var p = n - t;
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[longtask] entryStartTime: ",
              "s ago",
            ])),
          ((p - self.performance.now()) / 1e3).toFixed(0),
        ),
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[longtask][",
                  "] entryDuration:",
                  "ms lowEndDevice:",
                  " appContext:",
                  "",
                  "",
                ])),
              g(t),
              t,
              o("WAWebLowEndDeviceApi").isLowEndDevice(),
              l || "none",
              d,
            )
            .sendLogs("[performance observer] longtask", {
              sampling: m ? 1 : 0.01,
              sendLogsType:
                o("WALogger").SendLogsType.PERFORMANCE_OBSERVER_LONGTASK_SAD,
            }));
      }
    }
    l.reportMainThreadStall = v;
  },
  98,
);
