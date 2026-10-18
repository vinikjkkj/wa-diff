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
    "WAWebVoipInitEventEmitter",
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
      f = 30 * 1e3,
      g = 60 * 1e3,
      h = 60 * g,
      y = [
        [g, "lt_1m"],
        [5 * g, "1m_5m"],
        [30 * g, "5m_30m"],
        [3 * h, "30m_3h"],
        [12 * h, "3h_12h"],
      ],
      C = [
        [5 * 1e3, "lt_5s"],
        [30 * 1e3, "5s_30s"],
        [2 * g, "30s_2m"],
        [10 * g, "2m_10m"],
      ];
    function b(e) {
      return e > _ ? "15s+" : e > p ? "10s-15s" : e > m ? "5s-10s" : "0s-5s";
    }
    function v(e, t) {
      return e < m
        ? (r("WAWebODS").incr("web.perf.anr.skipped.too_short"), !0)
        : e > f
          ? (r("WAWebODS").incr("web.perf.anr.skipped.too_long"), !0)
          : !t.isDocumentVisible() || !t.isWindowInFocus()
            ? (S(t.isDocumentVisible()), !0)
            : !1;
    }
    function S(e) {
      if ((r("WAWebODS").incr("web.perf.anr.skipped.not_visible"), e)) {
        r("WAWebODS").incr("web.perf.anr.not_visible.unfocused");
        return;
      }
      r("WAWebODS").incr("web.perf.anr.not_visible.hidden");
      var t = o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getVoipInitTrigger();
      t != null &&
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight() &&
        R(t);
    }
    function R(e) {
      e: {
        if (e === "boot") {
          r("WAWebODS").incr("web.perf.anr.hidden_during_calling_init.boot");
          break e;
        }
        if (e === "call") {
          r("WAWebODS").incr("web.perf.anr.hidden_during_calling_init.call");
          break e;
        }
        if (e === "deadline") {
          r("WAWebODS").incr(
            "web.perf.anr.hidden_during_calling_init.deadline",
          );
          break e;
        }
        if (e === "hidden_prewarm") {
          r("WAWebODS").incr(
            "web.perf.anr.hidden_during_calling_init.hidden_prewarm",
          );
          break e;
        }
        if (e === "incoming") {
          r("WAWebODS").incr(
            "web.perf.anr.hidden_during_calling_init.incoming",
          );
          break e;
        }
        if (e === "scheduler_error") {
          r("WAWebODS").incr(
            "web.perf.anr.hidden_during_calling_init.scheduler_error",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function L(e) {
      e > _
        ? r("WAWebODS").incr("web.perf.anr.bucket.15s_plus")
        : e > p
          ? r("WAWebODS").incr("web.perf.anr.bucket.10s_15s")
          : r("WAWebODS").incr("web.perf.anr.bucket.5s_10s");
    }
    function E(e) {
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
    function k(e, t) {
      var n;
      return [
        "calling_state-" + I(),
        "calling_trigger-" +
          ((n = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getVoipInitTrigger()) != null
            ? n
            : "none"),
        "load_age-" + D(e, y, "12h_plus"),
        "since_visible-" + T(e, t),
      ];
    }
    function I() {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight()
        ? "loading"
        : o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
          ? "ready"
          : o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getDidVoipInitError()
            ? "failed"
            : "none";
    }
    function T(e, t) {
      var n = t.getReturnedFromHiddenTime();
      return n == null
        ? "never_hidden"
        : n > e
          ? "during_stall"
          : D(e - n, C, "10m_plus");
    }
    function D(e, t, n) {
      var r, o;
      return (r =
        (o = t.find(function (t) {
          var n = t[0];
          return e < n;
        })) == null
          ? void 0
          : o[1]) != null
        ? r
        : n;
    }
    function x() {
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
    function $(e) {
      var t,
        n = e.durationMs,
        a = e.endTime,
        i = e.source,
        l = e.visibility;
      if (!v(n, l)) {
        var c = o("WAWebAppTracker").AppTracker.getAppContextWithLookback(n, a);
        if (
          c.includes(
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
          L(n),
          o("WAWebLowEndDeviceApi").isLowEndDevice() &&
            r("WAWebODS").incr("web.perf.anr.low_end_device"),
          o("WAWebCrashContextUtils").recordHangEvent(a, n),
          x());
        var d = E(c),
          m = d.callLog,
          p = d.isVoipAnr;
        o("WAWebPdfViewerAnrTracker").isPdfViewerAnrTrackingActive() &&
          o("WAWebPdfViewerAnrTracker").incrementPdfViewerAnrCount();
        var _ = a - n;
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[longtask] entryStartTime: ",
              "s ago",
            ])),
          ((_ - self.performance.now()) / 1e3).toFixed(0),
        ),
          (t = o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[longtask][",
                "] entryDuration:",
                "ms lowEndDevice:",
                " appContext:",
                "",
                "",
              ])),
            b(n),
            n,
            o("WAWebLowEndDeviceApi").isLowEndDevice(),
            c || "none",
            m,
          )).tags
            .apply(t, k(_, l))
            .sendLogs("[performance observer] longtask", {
              sampling: p ? 1 : 0.01,
              sendLogsType:
                o("WALogger").SendLogsType.PERFORMANCE_OBSERVER_LONGTASK_SAD,
            }));
      }
    }
    l.reportMainThreadStall = $;
  },
  98,
);
