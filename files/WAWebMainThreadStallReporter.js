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
    function _(e, t) {
      return e < u
        ? (r("WAWebODS").incr("web.perf.anr.skipped.too_short"), !0)
        : e > m
          ? (r("WAWebODS").incr("web.perf.anr.skipped.too_long"), !0)
          : !t.isDocumentVisible() || !t.isWindowInFocus()
            ? (r("WAWebODS").incr("web.perf.anr.skipped.not_visible"), !0)
            : !1;
    }
    function f(e) {
      e > d
        ? r("WAWebODS").incr("web.perf.anr.bucket.15s_plus")
        : e > c
          ? r("WAWebODS").incr("web.perf.anr.bucket.10s_15s")
          : r("WAWebODS").incr("web.perf.anr.bucket.5s_10s");
    }
    function g(e) {
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
    function h(t) {
      var n = t.durationMs,
        a = t.endTime,
        i = t.source,
        l = t.visibility;
      if (!_(n, l)) {
        var u = o("WAWebAppTracker").AppTracker.getAppContextWithLookback(n, a);
        if (
          u.includes(
            String(o("WAWebAppTracker").AppTrackerType.ClosingBrowserTab),
          )
        ) {
          r("WAWebODS").incr("web.perf.anr.skipped.unloading");
          return;
        }
        (r("WAWebODS").incr("web.perf.anr.count"),
          i === "heartbeat"
            ? r("WAWebODS").incr("web.perf.anr.source.heartbeat")
            : r("WAWebODS").incr("web.perf.anr.source.longtask"),
          f(n),
          o("WAWebLowEndDeviceApi").isLowEndDevice() &&
            r("WAWebODS").incr("web.perf.anr.low_end_device"),
          o("WAWebCrashContextUtils").recordHangEvent(a, n));
        var c = g(u),
          d = c.callLog,
          m = c.isVoipAnr;
        o("WAWebPdfViewerAnrTracker").isPdfViewerAnrTrackingActive() &&
          o("WAWebPdfViewerAnrTracker").incrementPdfViewerAnrCount();
        var h = a - n;
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[longtask] entryStartTime: ",
              "s ago",
            ])),
          ((h - self.performance.now()) / 1e3).toFixed(0),
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
              p(n),
              n,
              o("WAWebLowEndDeviceApi").isLowEndDevice(),
              u || "none",
              d,
            )
            .sendLogs("[performance observer] longtask", {
              sampling: m ? 1 : 0.01,
              sendLogsType:
                o("WALogger").SendLogsType.PERFORMANCE_OBSERVER_LONGTASK_SAD,
            }));
      }
    }
    l.reportMainThreadStall = h;
  },
  98,
);
