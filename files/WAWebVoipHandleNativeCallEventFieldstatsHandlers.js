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
    "asyncToGeneratorRuntime",
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
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          (c != null && (i = babelHelpers.extends({}, i, c)), L());
          var d = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          return (d != null && (i = babelHelpers.extends({}, i, d)), i);
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(e);
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (t == null || t.type !== "web") {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] stack unavailable, dropping",
                ])),
            );
            return;
          }
          var n = t.parsers.parseFieldstatsData(e),
            r = n.stats.groupCallSegmentIdx,
            a = n.stats.fieldStatsRowType,
            i = n.isLastFieldStatsReport;
          if (i) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] last segment stored for rating",
                ])),
            );
            return;
          }
          yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
          var l =
              a ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
              a ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
            s = l ? yield S(n.stats) : babelHelpers.extends({}, n.stats);
          n.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            s.callTermReason === v &&
            delete s.callTermReason;
          var d =
            n.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(s)
              : I(s);
          d.commit();
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebVoipCallRatingStore",
          ).consumePendingFieldstatsJsonStr();
          if (t == null) {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: No pending fieldstats to send",
                ])),
            );
            return;
          }
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Sending stored fieldstats with rating: ",
                "",
              ])),
            e != null ? e : "none",
          );
          var n = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
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
            var s = yield S(i),
              u = o("WAWebVoipBatteryDiagnostics").getBatteryLevelAtCallStart();
            if (u != null) {
              var c = s.browserBatteryLevelEndPct;
              ((s.callStartBatteryPct = u),
                (s.callEndBatteryPct = c),
                typeof c == "number" && (s.callBatteryChangePct = c - u));
            }
            (o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
              yield o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
              o("WAWebVoipWindowMetrics").stopWindowMetrics(),
              yield o("WAWebVoipBatteryDiagnostics").stopBatteryDiagnostics());
            var b = yield o("WAWebBackendApi").frontendSendAndReceive(
              "consumeAVSyncMetrics",
            );
            b != null && (s = babelHelpers.extends({}, s, b));
            var v = yield o("WAWebBackendApi").frontendSendAndReceive(
              "consumeWebCodecsFatalErrorCount",
            );
            (v != null && (s.videoWebcodecsDecFatalErrorNum = v),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                    "",
                  ])),
                v != null ? v : 0,
              ));
            var R = yield n.consumeVideoCaptureFps();
            R != null &&
              ((s = babelHelpers.extends({}, s, R)),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                R.videoCaptureAvgFps,
              ));
            var L =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              L != null ? L : 0,
            );
            var E = null,
              k = null,
              T = null,
              D = null,
              x = null;
            if (L != null && L > 0) {
              var $ = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              $ != null &&
                ((E = $.lastVoipActivity),
                (k = $.lastVoipActivityTimestampSec),
                (T = $.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  E != null ? E : "none",
                  k != null ? k : "none",
                  T != null ? T : "none",
                ));
              var P = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              P != null &&
                ((D = P.lastVoipUiActivity),
                (x = P.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
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
                E != null && (w.lastVoipActivity = E),
                k != null && (w.lastVoipActivityTimestampSec = k),
                T != null && (w.timeFirstAnrSinceCallStartSec = T),
                D != null && (w.lastVoipUiActivity = D),
                x != null && (w.lastVoipUiActivityTimestampSec = x),
                r("isEmptyObject")(w) ||
                  (M.set(w),
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ANR fields set n=",
                        " act=",
                        " actT=",
                        "s firstT=",
                        " uiAct=",
                        " uiActT=",
                        "s",
                      ])),
                    L != null ? L : "null",
                    E != null ? E : "null",
                    k != null ? k : "null",
                    T != null ? T : "null",
                    D != null ? D : "null",
                    x != null ? x : "null",
                  )),
                (N = M));
            } else N = I(s);
            (a.uploadInRealtime ? yield N.commitAndWaitForFlush() : N.commit(),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                e != null ? e : "none",
              ));
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            e.cleanupUnfinishedCallStats();
          } catch (e) {
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Failed to cleanup fieldstats after normal call end",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
        var t = Date.now();
        o("WAWebBackendApi")
          .frontendSendAndReceive("initializeVoipWasm")
          .then(function (e) {
            return o("WAWebVoipPersistentFS").syncPersistentFS(e);
          })
          .then(function () {
            var n = Date.now() - t;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Successfully synced filesystem in ",
                  "ms",
                ])),
              n,
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      });
    }
    ((l.handleFieldstatsReady = E),
      (l.sendStoredFieldstats = T),
      (l.cleanupFieldstatsAfterNormalEnd = x),
      (l.syncVoipPersistentFSWithIdleCallback = P));
  },
  98,
);
