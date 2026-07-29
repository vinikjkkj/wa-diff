__d(
  "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebJoinableCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebReleaseToEventLoop",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallRatingStore",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipErrorLogUpload",
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
      L,
      E,
      k,
      I,
      T,
      D,
      x = 0,
      $ = 3e4,
      P = new WeakSet(),
      N = new WeakMap(),
      M = null;
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          (c != null && (i = babelHelpers.extends({}, i, c)), F());
          var d = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          return (d != null && (i = babelHelpers.extends({}, i, d)), i);
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function O(e) {
      try {
        var t = JSON.parse(e);
        return t.is_last_field_stats_report === !0;
      } catch (e) {
        return !1;
      }
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(e);
          Q(t);
          var n = O(e);
          n && z(t);
          var r = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (r == null || r.type !== "web") {
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] stack unavailable, dropping",
                ])),
            );
            return;
          }
          var a = r.parsers.parseFieldstatsData(e),
            i = a.stats.groupCallSegmentIdx,
            l = a.stats.fieldStatsRowType,
            s = a.isLastFieldStatsReport;
          if (s) {
            (o("WAWebCoreActionsODS").logCallFieldstatsFinalReceived(),
              n || z(t),
              a.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                q(a.stats),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] last segment stored for rating",
                  ])),
              ));
            return;
          }
          (n && K(t), yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var u =
              l ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
              l ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
            c = u ? yield w(a.stats) : babelHelpers.extends({}, a.stats);
          a.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            c.callTermReason === x &&
            delete c.callTermReason;
          var d = typeof c.callId == "string" ? c.callId : null,
            _ = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(d);
          if (
            (_ != null && (c.lobbyEntryPoint = _),
            a.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call)
          ) {
            var f = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getUnifiedSessionId",
            );
            f != null && (c.unifiedSessionId = f);
          }
          var g =
            a.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(c)
              : U(c);
          g.commit();
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      var t = e.callEndReconnecting,
        n = e.callResult,
        r = e.groupCallIsLastSegment,
        a = e.maxConnectedParticipants;
      if (
        !(
          typeof t != "boolean" ||
          typeof n != "number" ||
          typeof r != "boolean" ||
          typeof a != "number"
        )
      ) {
        var i = e.callId,
          l = e.callT,
          s = e.groupCallSegmentIdx,
          u = e.groupCallTotalCallTSinceCallStart;
        o("WAWebVoipErrorLogUpload").maybeUploadGroupCallCerLogs({
          callEndReconnecting: t,
          callId: typeof i == "string" ? i : null,
          callResult: n,
          callT: typeof l == "number" ? l : null,
          groupCallIsLastSegment: r,
          groupCallSegmentIdx: typeof s == "number" ? s : null,
          groupCallTotalCallTSinceCallStart: typeof u == "number" ? u : null,
          maxConnectedParticipants: a,
        });
      }
    }
    function U(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    function V(t) {
      var r = o("WAWebVoipCallRatingStore").getPendingFieldstats();
      return r == null
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send",
              ])),
          ),
          (D || (D = n("Promise"))).resolve())
        : H(r, t);
    }
    function H(e, t) {
      var n = N.get(e);
      if (n != null) return n;
      var r = X(e, t);
      return (
        N.set(e, r),
        r.then(
          function () {
            N.get(e) === r && N.delete(e);
          },
          function () {
            N.get(e) === r && N.delete(e);
          },
        ),
        r
      );
    }
    function G(e) {
      V(e).catch(function (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] send request failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      });
    }
    function z(e) {
      if (!P.has(e)) {
        M != null && window.clearTimeout(M.timeoutId);
        var t = window.setTimeout(function () {
          var t;
          if (((t = M) == null ? void 0 : t.fieldstats) === e) {
            M = null;
            var n = N.get(e);
            if (n != null) {
              n.catch(function () {
                j(e);
              });
              return;
            }
            (o("WAWebCoreActionsODS").logCallFieldstatsWatchdogSend(),
              H(e).catch(function (t) {
                (o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] watchdog send failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  j(e));
              }));
          }
        }, $);
        M = { fieldstats: e, timeoutId: t };
      }
    }
    function j(e) {
      !P.has(e) &&
        o("WAWebVoipCallRatingStore").getPendingFieldstats() === e &&
        z(e);
    }
    function K(e) {
      var t = M;
      t != null &&
        t.fieldstats === e &&
        (window.clearTimeout(t.timeoutId), (M = null));
    }
    function Q(e) {
      var t = M;
      t != null &&
        t.fieldstats !== e &&
        (window.clearTimeout(t.timeoutId), (M = null));
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.jsonDataStr;
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Sending stored fieldstats with rating: ",
                "",
              ])),
            t != null ? t : "none",
          );
          try {
            var a = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (a == null || a.type !== "web") {
              (o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] web stack unavailable, skipping pending fieldstats",
                  ])),
              ),
                j(e));
              return;
            }
            var i = a.parsers.parseFieldstatsData(n),
              l = babelHelpers.extends({}, i.stats);
            if (
              t != null &&
              i.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var s = l.call_ended_stats;
              s != null && typeof s == "object"
                ? (l.call_ended_stats = babelHelpers.extends({}, s, {
                    userRating: t,
                  }))
                : (l.userRating = t);
            }
            var u = yield w(l),
              c = o("WAWebVoipBatteryDiagnostics").getBatteryLevelAtCallStart();
            if (c != null) {
              var d = u.browserBatteryLevelEndPct;
              ((u.callStartBatteryPct = c),
                (u.callEndBatteryPct = d),
                typeof d == "number" && (u.callBatteryChangePct = d - c));
            }
            (o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
              yield o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
              o("WAWebVoipWindowMetrics").stopWindowMetrics(),
              yield o("WAWebVoipBatteryDiagnostics").stopBatteryDiagnostics());
            var m = yield o("WAWebBackendApi").frontendSendAndReceive(
              "consumeAVSyncMetrics",
            );
            m != null && (u = babelHelpers.extends({}, u, m));
            var p = yield o("WAWebBackendApi").frontendSendAndReceive(
              "consumeWebCodecsFatalErrorCount",
            );
            (p != null && (u.videoWebcodecsDecFatalErrorNum = p),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                    "",
                  ])),
                p != null ? p : 0,
              ));
            var I = yield a.consumeVideoCaptureFps();
            I != null &&
              ((u = babelHelpers.extends({}, u, I)),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                I.videoCaptureAvgFps,
              ));
            var T = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
            T != null &&
              ((u.webVideoEncoderType = T),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoEncoder] web_video_encoder_type=",
                    "",
                  ])),
                T,
              ));
            var D = typeof u.callId == "string" ? u.callId : null,
              x = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(
                D,
              );
            if (
              (x != null &&
                ((u.lobbyEntryPoint = x),
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] lobby_entry_point=",
                      "",
                    ])),
                  x,
                )),
              i.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call)
            ) {
              var $ = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getUnifiedSessionId",
              );
              $ != null && (u.unifiedSessionId = $);
              var N = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeOutgoingCallSetupActiveMs",
                { callId: D },
              );
              N != null &&
                ((u.outgoingCallSetupActiveMs = N),
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] outgoing_call_setup_active_ms=",
                      "",
                    ])),
                  N,
                ));
            }
            var M =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              M != null ? M : 0,
            );
            var A = null,
              F = null,
              O = null,
              B = null,
              W = null;
            if (M != null && M > 0) {
              var q = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              q != null &&
                ((A = q.lastVoipActivity),
                (F = q.lastVoipActivityTimestampSec),
                (O = q.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  A != null ? A : "none",
                  F != null ? F : "none",
                  O != null ? O : "none",
                ));
              var V = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              V != null &&
                ((B = V.lastVoipUiActivity),
                (W = V.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  B != null ? B : "none",
                  W != null ? W : "none",
                ));
            } else
              o("WAWebBackendApi").frontendFireAndForget(
                "clearAllActivityTracking",
                {},
              );
            var H;
            if (
              i.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var G = new (o("WAWebCallWamEvent").CallWamEvent)(u),
                z = {};
              (M != null && (z.numAnrs = M),
                A != null && (z.lastVoipActivity = A),
                F != null && (z.lastVoipActivityTimestampSec = F),
                O != null && (z.timeFirstAnrSinceCallStartSec = O),
                B != null && (z.lastVoipUiActivity = B),
                W != null && (z.lastVoipUiActivityTimestampSec = W),
                r("isEmptyObject")(z) ||
                  (G.set(z),
                  o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ANR fields set n=",
                        " act=",
                        " actT=",
                        "s firstT=",
                        " uiAct=",
                        " uiActT=",
                        "s",
                      ])),
                    M != null ? M : "null",
                    A != null ? A : "null",
                    F != null ? F : "null",
                    O != null ? O : "null",
                    B != null ? B : "null",
                    W != null ? W : "null",
                  )),
                (H = G));
            } else H = U(u);
            (yield H.commitAndWaitForFlush(i.uploadInRealtime),
              o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(n),
              P.add(e),
              K(e),
              o("WAWebVoipCallRatingStore").clearPendingFieldstats(e),
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffCompleted(),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                t != null ? t : "none",
              ),
              yield J());
          } catch (e) {
            throw (
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffFailed(),
              o("WALogger")
                .ERROR(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] terminal WAM handoff failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-fieldstats-wam-handoff-failed", {
                  employeeSampling: 1,
                  sampling: 0.01,
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                }),
              e
            );
          }
        })),
        Y.apply(this, arguments)
      );
    }
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            (e.cleanupUnfinishedCallStats(),
              yield o("WAWebVoipPersistentFS").syncPersistentFS(e),
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff",
                  ])),
              ));
          } catch (e) {
            (o(
              "WAWebCoreActionsODS",
            ).logCallFieldstatsPersistenceCleanupFailed(),
              o("WALogger")
                .ERROR(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] failed to clean up persisted fieldstats after WAM handoff",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-fieldstats-persistence-cleanup-failed", {
                  employeeSampling: 1,
                  sampling: 0.01,
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                }));
          }
        })),
        Z.apply(this, arguments)
      );
    }
    function ee() {
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Successfully synced filesystem in ",
                  "ms",
                ])),
              t,
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      });
    }
    ((l.handleFieldstatsReady = B),
      (l.sendStoredFieldstats = V),
      (l.requestStoredFieldstatsSend = G),
      (l.syncVoipPersistentFSWithIdleCallback = ee));
  },
  98,
);
