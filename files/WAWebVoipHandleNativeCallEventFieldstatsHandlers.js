__d(
  "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebCallWamEvent",
    "WAWebJoinableCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebReleaseToEventLoop",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallRatingStore",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipFocusTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipJsonParserPayloads",
    "WAWebVoipPersistentFS",
    "WAWebVoipStackInterface",
    "WAWebVoipWindowMetrics",
    "WAWebWamEnumFieldStatsRowType",
    "getErrorSafe",
    "isEmptyObject",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v = 0;
    async function S(e) {
      var t = o("WAWebBrowserApi").getNumCpu(),
        n = o("WAWebBrowserApi").getMemClass(),
        r = n != null ? Math.round(n / 1e3) : null,
        a = o("WAWebVoipDeviceClassUtils").computeDeviceClass(t, r),
        i = babelHelpers.extends({}, e);
      (t != null && (i.numCpuCores = t),
        r != null && (i.totalMemoryGb = r),
        a != null && (i.deviceClass = a),
        (i.webTransportUsed = o(
          "WAWebVoipGatingUtils",
        ).isWebTransportEnabled()));
      var l = o("WAWebVoipFocusTracker").snapshotFocusStats();
      l != null && (i = babelHelpers.extends({}, i, l));
      var s = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
      s != null && (i = babelHelpers.extends({}, i, s));
      var u = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
      u != null && (i = babelHelpers.extends({}, i, u));
      var c = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
      (c != null && (i = babelHelpers.extends({}, i, c)), R());
      var d = await o("WAWebBackendApi").frontendSendAndReceive(
        "consumeAudioPlaybackMetrics",
      );
      return (d != null && (i = babelHelpers.extends({}, i, d)), i);
    }
    function R() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    async function L(t) {
      o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(t);
      var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if (n == null || n.type !== "web") {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [Fieldstats] stack unavailable, dropping",
            ])),
        );
        return;
      }
      var r = n.parsers.parseFieldstatsData(t),
        a = r.stats.groupCallSegmentIdx,
        i = r.stats.fieldStatsRowType,
        l = r.isLastFieldStatsReport;
      if (l) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [Fieldstats] last segment stored for rating",
            ])),
        );
        return;
      }
      await o("WAWebReleaseToEventLoop").releaseToEventLoop();
      var u =
          i === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
          i === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
        c = u ? await S(r.stats) : babelHelpers.extends({}, r.stats);
      r.eventType ===
        o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
        c.callTermReason === v &&
        delete c.callTermReason;
      var d =
        r.eventType ===
        o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
          ? new (o("WAWebCallWamEvent").CallWamEvent)(c)
          : E(c);
      d.commit();
    }
    function E(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    async function k(e) {
      var t = o("WAWebVoipCallRatingStore").consumePendingFieldstatsJsonStr();
      if (t == null) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: No pending fieldstats to send",
            ])),
        );
        return;
      }
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "voip: Sending stored fieldstats with rating: ",
            "",
          ])),
        e != null ? e : "none",
      );
      var n = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (n.type === "web") {
        var a = n.parsers.parseFieldstatsData(t),
          i = babelHelpers.extends({}, a.stats);
        if (
          e != null &&
          a.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
        ) {
          var l = i.call_ended_stats;
          l != null && typeof l == "object"
            ? (i.call_ended_stats = babelHelpers.extends({}, l, {
                userRating: e,
              }))
            : (i.userRating = e);
        }
        var s = await S(i),
          y = o("WAWebVoipBatteryDiagnostics").getBatteryLevelAtCallStart();
        if (y != null) {
          var C = s.browserBatteryLevelEndPct;
          ((s.callStartBatteryPct = y),
            (s.callEndBatteryPct = C),
            typeof C == "number" && (s.callBatteryChangePct = C - y));
        }
        (o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
          await o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
          o("WAWebVoipWindowMetrics").stopWindowMetrics(),
          await o("WAWebVoipBatteryDiagnostics").stopBatteryDiagnostics());
        var b = await o("WAWebBackendApi").frontendSendAndReceive(
          "consumeAVSyncMetrics",
        );
        b != null && (s = babelHelpers.extends({}, s, b));
        var v = await o("WAWebBackendApi").frontendSendAndReceive(
          "consumeWebCodecsFatalErrorCount",
        );
        (v != null && (s.videoWebcodecsDecFatalErrorNum = v),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                "",
              ])),
            v != null ? v : 0,
          ));
        var R = await n.consumeVideoCaptureFps();
        R != null &&
          ((s = babelHelpers.extends({}, s, R)),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [VideoCapture] video_capture_avg_fps=",
                "",
              ])),
            R.videoCaptureAvgFps,
          ));
        var L =
          await o("WAWebBackendApi").frontendSendAndReceive("consumeAnrCount");
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: ANR count for this call: ",
              "",
            ])),
          L != null ? L : 0,
        );
        var k = null,
          I = null,
          T = null,
          D = null,
          x = null;
        if (L != null && L > 0) {
          var $ = await o("WAWebBackendApi").frontendSendAndReceive(
            "consumeActivityData",
          );
          $ != null &&
            ((k = $.lastVoipActivity),
            (I = $.lastVoipActivityTimestampSec),
            (T = $.timeFirstAnrSinceCallStartSec),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR data act=",
                  " actT=",
                  "s firstAnrT=",
                  "s",
                ])),
              k != null ? k : "none",
              I != null ? I : "none",
              T != null ? T : "none",
            ));
          var P = await o("WAWebBackendApi").frontendSendAndReceive(
            "consumeUiActivityData",
          );
          P != null &&
            ((D = P.lastVoipUiActivity),
            (x = P.lastVoipUiActivityTimestampSec),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR uiAct=",
                  " uiActT=",
                  "s",
                ])),
              D != null ? D : "none",
              x != null ? x : "none",
            ));
        } else
          o("WAWebBackendApi").frontendFireAndForget(
            "clearAllActivityTracking",
            {},
          );
        var N;
        if (
          a.eventType ===
          o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
        ) {
          var M = new (o("WAWebCallWamEvent").CallWamEvent)(s),
            w = {};
          (L != null && (w.numAnrs = L),
            k != null && (w.lastVoipActivity = k),
            I != null && (w.lastVoipActivityTimestampSec = I),
            T != null && (w.timeFirstAnrSinceCallStartSec = T),
            D != null && (w.lastVoipUiActivity = D),
            x != null && (w.lastVoipUiActivityTimestampSec = x),
            r("isEmptyObject")(w) ||
              (M.set(w),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ANR fields set n=",
                    " act=",
                    " actT=",
                    "s firstT=",
                    " uiAct=",
                    " uiActT=",
                    "s",
                  ])),
                L != null ? L : "null",
                k != null ? k : "null",
                I != null ? I : "null",
                T != null ? T : "null",
                D != null ? D : "null",
                x != null ? x : "null",
              )),
            (N = M));
        } else N = E(s);
        (a.uploadInRealtime ? await N.commitAndWaitForFlush() : N.commit(),
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Fieldstats sent successfully with user rating: ",
                "",
              ])),
            e != null ? e : "none",
          ));
      }
    }
    async function I() {
      try {
        var e =
          await o("WAWebBackendApi").frontendSendAndReceive(
            "initializeVoipWasm",
          );
        e.cleanupUnfinishedCallStats();
      } catch (e) {
        o("WALogger")
          .ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Failed to cleanup fieldstats after normal call end",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function T() {
      o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
        var e = Date.now();
        o("WAWebBackendApi")
          .frontendSendAndReceive("initializeVoipWasm")
          .then(function (e) {
            return o("WAWebVoipPersistentFS").syncPersistentFS(e);
          })
          .then(function () {
            var t = Date.now() - e;
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Successfully synced filesystem in ",
                  "ms",
                ])),
              t,
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      });
    }
    ((l.handleFieldstatsReady = L),
      (l.sendStoredFieldstats = k),
      (l.cleanupFieldstatsAfterNormalEnd = I),
      (l.syncVoipPersistentFSWithIdleCallback = T));
  },
  98,
);
