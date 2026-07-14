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
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipPersistentFS",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoEncoderType",
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
      v,
      S,
      R,
      L = 0;
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          (c != null && (i = babelHelpers.extends({}, i, c)), I());
          var d = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          return (d != null && (i = babelHelpers.extends({}, i, d)), i);
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            s = l ? yield E(n.stats) : babelHelpers.extends({}, n.stats);
          n.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            s.callTermReason === L &&
            delete s.callTermReason;
          var d = typeof s.callId == "string" ? s.callId : null,
            m = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(d);
          if (
            (m != null && (s.lobbyEntryPoint = m),
            n.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call)
          ) {
            var p = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getUnifiedSessionId",
            );
            p != null && (s.unifiedSessionId = p);
          }
          var _ =
            n.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(s)
              : x(s);
          _.commit();
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var s = yield E(i),
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
            var R = yield o("WAWebBackendApi").frontendSendAndReceive(
              "consumeAVSyncMetrics",
            );
            R != null && (s = babelHelpers.extends({}, s, R));
            var L = yield o("WAWebBackendApi").frontendSendAndReceive(
              "consumeWebCodecsFatalErrorCount",
            );
            (L != null && (s.videoWebcodecsDecFatalErrorNum = L),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                    "",
                  ])),
                L != null ? L : 0,
              ));
            var k = yield n.consumeVideoCaptureFps();
            k != null &&
              ((s = babelHelpers.extends({}, s, k)),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                k.videoCaptureAvgFps,
              ));
            var I = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
            I != null &&
              ((s.webVideoEncoderType = I),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoEncoder] web_video_encoder_type=",
                    "",
                  ])),
                I,
              ));
            var T = typeof s.callId == "string" ? s.callId : null,
              D = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(
                T,
              );
            if (
              (D != null &&
                ((s.lobbyEntryPoint = D),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] lobby_entry_point=",
                      "",
                    ])),
                  D,
                )),
              a.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call)
            ) {
              var $ = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getUnifiedSessionId",
              );
              $ != null && (s.unifiedSessionId = $);
              var P = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeOutgoingCallSetupActiveMs",
                { callId: T },
              );
              P != null &&
                ((s.outgoingCallSetupActiveMs = P),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] outgoing_call_setup_active_ms=",
                      "",
                    ])),
                  P,
                ));
            }
            var N =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              N != null ? N : 0,
            );
            var M = null,
              w = null,
              A = null,
              F = null,
              O = null;
            if (N != null && N > 0) {
              var B = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              B != null &&
                ((M = B.lastVoipActivity),
                (w = B.lastVoipActivityTimestampSec),
                (A = B.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  M != null ? M : "none",
                  w != null ? w : "none",
                  A != null ? A : "none",
                ));
              var W = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              W != null &&
                ((F = W.lastVoipUiActivity),
                (O = W.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  F != null ? F : "none",
                  O != null ? O : "none",
                ));
            } else
              o("WAWebBackendApi").frontendFireAndForget(
                "clearAllActivityTracking",
                {},
              );
            var q;
            if (
              a.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var U = new (o("WAWebCallWamEvent").CallWamEvent)(s),
                V = {};
              (N != null && (V.numAnrs = N),
                M != null && (V.lastVoipActivity = M),
                w != null && (V.lastVoipActivityTimestampSec = w),
                A != null && (V.timeFirstAnrSinceCallStartSec = A),
                F != null && (V.lastVoipUiActivity = F),
                O != null && (V.lastVoipUiActivityTimestampSec = O),
                r("isEmptyObject")(V) ||
                  (U.set(V),
                  o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ANR fields set n=",
                        " act=",
                        " actT=",
                        "s firstT=",
                        " uiAct=",
                        " uiActT=",
                        "s",
                      ])),
                    N != null ? N : "null",
                    M != null ? M : "null",
                    w != null ? w : "null",
                    A != null ? A : "null",
                    F != null ? F : "null",
                    O != null ? O : "null",
                  )),
                (q = U));
            } else q = x(s);
            (a.uploadInRealtime ? yield q.commitAndWaitForFlush() : q.commit(),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                e != null ? e : "none",
              ));
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            e.cleanupUnfinishedCallStats();
          } catch (e) {
            o("WALogger")
              .ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Failed to cleanup fieldstats after normal call end",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
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
    ((l.handleFieldstatsReady = T),
      (l.sendStoredFieldstats = $),
      (l.cleanupFieldstatsAfterNormalEnd = N),
      (l.syncVoipPersistentFSWithIdleCallback = w));
  },
  98,
);
