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
    "WAWebVoipWebTransportCallSummary",
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
      x,
      $ = 0,
      P = 6,
      N = 10,
      M = 15,
      w = 17,
      A = 3e4,
      F = new WeakSet(),
      O = new WeakMap(),
      B = null;
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          (c != null && (i = babelHelpers.extends({}, i, c)), U());
          var d = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          return (d != null && (i = babelHelpers.extends({}, i, d)), i);
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function V(e) {
      try {
        var t = JSON.parse(e);
        return t.is_last_field_stats_report === !0;
      } catch (e) {
        return !1;
      }
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(e);
          ne(t);
          var n = V(e);
          n && Z(t);
          var r = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (r == null || r.type !== "web") {
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
              n || Z(t),
              a.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                (z(a.stats), K(a.stats)),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] last segment stored for rating",
                  ])),
              ));
            return;
          }
          (n && te(t), yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var u =
              l ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
              l ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
            c = u ? yield W(a.stats) : babelHelpers.extends({}, a.stats);
          a.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            c.callTermReason === $ &&
            delete c.callTermReason;
          var d = typeof c.callId == "string" ? c.callId : null,
            m = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(d);
          if (
            (m != null && (c.lobbyEntryPoint = m),
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
              : Q(c);
          g.commit();
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
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
    function j(e, t) {
      return e === N
        ? "anc"
        : e === P && (t === M || t === w)
          ? "relay_bind"
          : null;
    }
    function K(t) {
      if (o("WAWebVoipWebTransportCallSummary").hasWtActivityThisCall()) {
        var n = t.callResult,
          r = t.callSetupErrorType,
          a = t.maxConnectedParticipants;
        if (
          !(
            t.groupCallIsLastSegment !== !0 ||
            typeof n != "number" ||
            typeof a != "number"
          )
        ) {
          var i = j(n, r);
          if (i != null) {
            var l = o("WAWebVoipWebTransportCallSummary").getWtCallSummary(),
              s = typeof t.callId == "string" ? t.callId : null;
            (o("WAWebCoreActionsODS").logCallWebtransportGroupCallAnc(),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WtGroupCallAnc] kind=",
                      " callId=",
                      " callResult=",
                      " callSetupErrorType=",
                      " maxConnectedParticipants=",
                      " numRelayAttempts=",
                      " numOpened=",
                      " attempts=",
                      "",
                    ])),
                  i,
                  String(s),
                  n,
                  String(r != null ? r : "n/a"),
                  a,
                  l.numRelayAttempts,
                  l.numOpened,
                  JSON.stringify(l.attempts),
                )
                .sendLogs("webtransport-group-call-anc"));
          }
        }
      }
    }
    function Q(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    function X(e) {
      var t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
      return t == null
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send",
              ])),
          ),
          (x || (x = n("Promise"))).resolve())
        : Y(t, e);
    }
    function Y(e, t) {
      var n = O.get(e);
      if (n != null) return n;
      var r = re(e, t);
      return (
        O.set(e, r),
        r.then(
          function () {
            O.get(e) === r && O.delete(e);
          },
          function () {
            O.get(e) === r && O.delete(e);
          },
        ),
        r
      );
    }
    function J(e) {
      X(e).catch(function (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] send request failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      });
    }
    function Z(e) {
      if (!F.has(e)) {
        B != null && window.clearTimeout(B.timeoutId);
        var t = window.setTimeout(function () {
          var t;
          if (((t = B) == null ? void 0 : t.fieldstats) === e) {
            B = null;
            var n = O.get(e);
            if (n != null) {
              n.catch(function () {
                ee(e);
              });
              return;
            }
            (o("WAWebCoreActionsODS").logCallFieldstatsWatchdogSend(),
              Y(e).catch(function (t) {
                (o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] watchdog send failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  ee(e));
              }));
          }
        }, A);
        B = { fieldstats: e, timeoutId: t };
      }
    }
    function ee(e) {
      !F.has(e) &&
        o("WAWebVoipCallRatingStore").getPendingFieldstats() === e &&
        Z(e);
    }
    function te(e) {
      var t = B;
      t != null &&
        t.fieldstats === e &&
        (window.clearTimeout(t.timeoutId), (B = null));
    }
    function ne(e) {
      var t = B;
      t != null &&
        t.fieldstats !== e &&
        (window.clearTimeout(t.timeoutId), (B = null));
    }
    function re(e, t) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.jsonDataStr;
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Sending stored fieldstats with rating: ",
                "",
              ])),
            t != null ? t : "none",
          );
          try {
            var a = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (a == null || a.type !== "web") {
              (o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] web stack unavailable, skipping pending fieldstats",
                  ])),
              ),
                ee(e));
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
            var u = yield W(l),
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
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                    "",
                  ])),
                p != null ? p : 0,
              ));
            var _ = yield a.consumeVideoCaptureFps();
            _ != null &&
              ((u = babelHelpers.extends({}, u, _)),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                _.videoCaptureAvgFps,
              ));
            var T = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
            T != null &&
              ((u.webVideoEncoderType = T),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
              var P = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeOutgoingCallSetupActiveMs",
                { callId: D },
              );
              P != null &&
                ((u.outgoingCallSetupActiveMs = P),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              N != null ? N : 0,
            );
            var M = null,
              w = null,
              A = null,
              O = null,
              B = null;
            if (N != null && N > 0) {
              var q = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              q != null &&
                ((M = q.lastVoipActivity),
                (w = q.lastVoipActivityTimestampSec),
                (A = q.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  M != null ? M : "none",
                  w != null ? w : "none",
                  A != null ? A : "none",
                ));
              var U = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              U != null &&
                ((O = U.lastVoipUiActivity),
                (B = U.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  O != null ? O : "none",
                  B != null ? B : "none",
                ));
            } else
              o("WAWebBackendApi").frontendFireAndForget(
                "clearAllActivityTracking",
                {},
              );
            var V;
            if (
              i.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var H = new (o("WAWebCallWamEvent").CallWamEvent)(u),
                G = {};
              (N != null && (G.numAnrs = N),
                M != null && (G.lastVoipActivity = M),
                w != null && (G.lastVoipActivityTimestampSec = w),
                A != null && (G.timeFirstAnrSinceCallStartSec = A),
                O != null && (G.lastVoipUiActivity = O),
                B != null && (G.lastVoipUiActivityTimestampSec = B),
                r("isEmptyObject")(G) ||
                  (H.set(G),
                  o("WALogger").LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
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
                    O != null ? O : "null",
                    B != null ? B : "null",
                  )),
                (V = H));
            } else V = Q(u);
            (yield V.commitAndWaitForFlush(i.uploadInRealtime),
              o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(n),
              F.add(e),
              te(e),
              o("WAWebVoipCallRatingStore").clearPendingFieldstats(e),
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffCompleted(),
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                t != null ? t : "none",
              ),
              yield ae());
          } catch (e) {
            throw (
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffFailed(),
              o("WALogger")
                .ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
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
        oe.apply(this, arguments)
      );
    }
    function ae() {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            (e.cleanupUnfinishedCallStats(),
              yield o("WAWebVoipPersistentFS").syncPersistentFS(e),
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff",
                  ])),
              ));
          } catch (e) {
            (o(
              "WAWebCoreActionsODS",
            ).logCallFieldstatsPersistenceCleanupFailed(),
              o("WALogger")
                .ERROR(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
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
        ie.apply(this, arguments)
      );
    }
    function le() {
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Successfully synced filesystem in ",
                  "ms",
                ])),
              t,
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      });
    }
    ((l.handleFieldstatsReady = H),
      (l.sendStoredFieldstats = X),
      (l.requestStoredFieldstatsSend = J),
      (l.syncVoipPersistentFSWithIdleCallback = le));
  },
  98,
);
