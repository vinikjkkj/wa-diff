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
    "WAWebVoipLabMetricsFile",
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
      F = 15e3;
    function O() {
      return o("WAWebVoipGatingUtils").isGuestViewer() ? F : A;
    }
    var B = new WeakSet(),
      W = new WeakMap(),
      q = new WeakMap(),
      U = null;
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebBrowserApi").getNumCpu(),
            r = o("WAWebBrowserApi").getMemClass(),
            a = r != null ? Math.round(r / 1e3) : null,
            i = o("WAWebVoipDeviceClassUtils").computeDeviceClass(n, a),
            l = babelHelpers.extends({}, e);
          (n != null && (l.numCpuCores = n),
            a != null && (l.totalMemoryGb = a),
            i != null && (l.deviceClass = i),
            (l = G(l, t)));
          var s = o("WAWebVoipFocusTracker").snapshotFocusStats();
          s != null && (l = babelHelpers.extends({}, l, s));
          var u = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
          u != null && (l = babelHelpers.extends({}, l, u));
          var c = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
          c != null && (l = babelHelpers.extends({}, l, c));
          var d = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
          (d != null && (l = babelHelpers.extends({}, l, d)), z());
          var m = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          m != null && (l = babelHelpers.extends({}, l, m));
          var p = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioCaptureMetrics",
          );
          return (p != null && (l = babelHelpers.extends({}, l, p)), l);
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      if (t == null) return babelHelpers.extends({}, e);
      var n = babelHelpers.extends({}, e, {
        webTransportUsed: t.relayTrafficSent,
        webTransportConnectAttempted: t.connectAttempted,
        webTransportConnectOpened: t.connectOpened,
        webTransportRelayTrafficSent: t.relayTrafficSent,
        webTransportFallbackTriggered: t.fallbackTriggered,
      });
      return (
        t.configEnabled != null &&
          (n = babelHelpers.extends({}, n, {
            webTransportConfigEnabled: t.configEnabled,
          })),
        t.runtimeEligible != null &&
          (n = babelHelpers.extends({}, n, {
            webTransportRuntimeEligible: t.runtimeEligible,
          })),
        n
      );
    }
    function z() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function j(e) {
      try {
        var t = JSON.parse(e);
        return t.is_last_field_stats_report === !0;
      } catch (e) {
        return !1;
      }
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o(
              "WAWebVoipWebTransportCallSummary",
            ).getWtCurrentCallTelemetry(),
            r = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(e);
          (n != null && W.set(r, n), ie(r));
          var a = j(e);
          a && re(r);
          var i = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (i == null || i.type !== "web") {
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] stack unavailable, dropping",
                ])),
            );
            return;
          }
          var l = i.parsers.parseFieldstatsData(e),
            s = l.stats.groupCallSegmentIdx,
            u = l.stats.fieldStatsRowType,
            c = l.isLastFieldStatsReport;
          if (c) {
            (o("WAWebCoreActionsODS").logCallFieldstatsFinalReceived(),
              a || re(r),
              l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                (X(l.stats), J(l.stats)),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] last segment stored for rating",
                  ])),
              ));
            return;
          }
          (a && ae(r), yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var d =
              u ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
              u ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
            m = d
              ? yield V(l.stats, (t = W.get(r)) != null ? t : null)
              : babelHelpers.extends({}, l.stats);
          l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            m.callTermReason === $ &&
            delete m.callTermReason;
          var f = typeof m.callId == "string" ? m.callId : null,
            g = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(f);
          if (
            (g != null && (m.lobbyEntryPoint = g),
            l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call)
          ) {
            var h = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getUnifiedSessionId",
            );
            h != null && (m.unifiedSessionId = h);
          }
          var y =
            l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(m)
              : Z(m);
          y.commit();
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
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
    function Y(e, t) {
      return e === N
        ? "anc"
        : e === P && (t === M || t === w)
          ? "relay_bind"
          : null;
    }
    function J(t) {
      var n = typeof t.callId == "string" ? t.callId : null,
        r = o("WAWebVoipWebTransportCallSummary").getWtCallSummaryForCall(n);
      if (r != null) {
        var a = t.callResult,
          i = t.callSetupErrorType,
          l = t.maxConnectedParticipants;
        if (
          !(
            t.groupCallIsLastSegment !== !0 ||
            typeof a != "number" ||
            typeof l != "number"
          )
        ) {
          var s = Y(a, i);
          s != null &&
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
                s,
                String(n),
                a,
                String(i != null ? i : "n/a"),
                l,
                r.numRelayAttempts,
                r.numOpened,
                JSON.stringify(r.attempts),
              )
              .sendLogs("webtransport-group-call-anc"));
        }
      }
    }
    function Z(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    function ee(e) {
      var t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
      return t == null
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send",
              ])),
          ),
          (x || (x = n("Promise"))).resolve())
        : te(t, e);
    }
    function te(e, t) {
      var n = q.get(e);
      if (n != null) return n;
      var r = le(e, t);
      return (
        q.set(e, r),
        r.then(
          function () {
            q.get(e) === r && q.delete(e);
          },
          function () {
            q.get(e) === r && q.delete(e);
          },
        ),
        r
      );
    }
    function ne(e) {
      ee(e).catch(function (e) {
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
    function re(e) {
      if (!B.has(e)) {
        U != null && window.clearTimeout(U.timeoutId);
        var t = window.setTimeout(function () {
          var t;
          if (((t = U) == null ? void 0 : t.fieldstats) === e) {
            U = null;
            var n = q.get(e);
            if (n != null) {
              n.catch(function () {
                oe(e);
              });
              return;
            }
            (o("WAWebCoreActionsODS").logCallFieldstatsWatchdogSend(),
              te(e).catch(function (t) {
                (o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] watchdog send failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  oe(e));
              }));
          }
        }, O());
        U = { fieldstats: e, timeoutId: t };
      }
    }
    function oe(e) {
      !B.has(e) &&
        o("WAWebVoipCallRatingStore").getPendingFieldstats() === e &&
        re(e);
    }
    function ae(e) {
      var t = U;
      t != null &&
        t.fieldstats === e &&
        (window.clearTimeout(t.timeoutId), (U = null));
    }
    function ie(e) {
      var t = U;
      t != null &&
        t.fieldstats !== e &&
        (window.clearTimeout(t.timeoutId), (U = null));
    }
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            var a,
              i = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (i == null || i.type !== "web") {
              (o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] web stack unavailable, skipping pending fieldstats",
                  ])),
              ),
                oe(e));
              return;
            }
            var l = i.parsers.parseFieldstatsData(n),
              s = babelHelpers.extends({}, l.stats);
            if (
              t != null &&
              l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var u = s.call_ended_stats;
              u != null && typeof u == "object"
                ? (s.call_ended_stats = babelHelpers.extends({}, u, {
                    userRating: t,
                  }))
                : (s.userRating = t);
            }
            var c = yield V(s, (a = W.get(e)) != null ? a : null),
              d = o("WAWebVoipBatteryDiagnostics").getBatteryLevelAtCallStart();
            if (d != null) {
              var m = c.browserBatteryLevelEndPct;
              ((c.callStartBatteryPct = d),
                (c.callEndBatteryPct = m),
                typeof m == "number" && (c.callBatteryChangePct = m - d));
            }
            (o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
              yield o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
              o("WAWebVoipWindowMetrics").stopWindowMetrics(),
              yield o("WAWebVoipBatteryDiagnostics").stopBatteryDiagnostics());
            var p = yield o("WAWebBackendApi").frontendSendAndReceive(
              "consumeAVSyncMetrics",
            );
            p != null && (c = babelHelpers.extends({}, c, p));
            var _ = yield o("WAWebBackendApi").frontendSendAndReceive(
              "consumeWebCodecsFatalErrorCount",
            );
            (_ != null && (c.videoWebcodecsDecFatalErrorNum = _),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                    "",
                  ])),
                _ != null ? _ : 0,
              ));
            var T = yield i.consumeVideoCaptureFps();
            T != null &&
              ((c = babelHelpers.extends({}, c, T)),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                T.videoCaptureAvgFps,
              ));
            var D = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
            D != null &&
              ((c.webVideoEncoderType = D),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoEncoder] web_video_encoder_type=",
                    "",
                  ])),
                D,
              ));
            var x = typeof c.callId == "string" ? c.callId : null,
              $ = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(
                x,
              );
            if (
              ($ != null &&
                ((c.lobbyEntryPoint = $),
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] lobby_entry_point=",
                      "",
                    ])),
                  $,
                )),
              l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call)
            ) {
              var P = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getUnifiedSessionId",
              );
              P != null && (c.unifiedSessionId = P);
              var N = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeOutgoingCallSetupActiveMs",
                { callId: x },
              );
              N != null &&
                ((c.outgoingCallSetupActiveMs = N),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              M != null ? M : 0,
            );
            var w = null,
              A = null,
              F = null,
              O = null,
              q = null;
            if (M != null && M > 0) {
              var U = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              U != null &&
                ((w = U.lastVoipActivity),
                (A = U.lastVoipActivityTimestampSec),
                (F = U.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  w != null ? w : "none",
                  A != null ? A : "none",
                  F != null ? F : "none",
                ));
              var H = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              H != null &&
                ((O = H.lastVoipUiActivity),
                (q = H.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  O != null ? O : "none",
                  q != null ? q : "none",
                ));
            } else
              o("WAWebBackendApi").frontendFireAndForget(
                "clearAllActivityTracking",
                {},
              );
            var G = {};
            (M != null && (G.numAnrs = M),
              w != null && (G.lastVoipActivity = w),
              A != null && (G.lastVoipActivityTimestampSec = A),
              F != null && (G.timeFirstAnrSinceCallStartSec = F),
              O != null && (G.lastVoipUiActivity = O),
              q != null && (G.lastVoipUiActivityTimestampSec = q));
            var z;
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var j = new (o("WAWebCallWamEvent").CallWamEvent)(c);
              (r("isEmptyObject")(G) ||
                (j.set(G),
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
                  M != null ? M : "null",
                  w != null ? w : "null",
                  A != null ? A : "null",
                  F != null ? F : "null",
                  O != null ? O : "null",
                  q != null ? q : "null",
                )),
                (z = j));
            } else z = Z(c);
            yield z.commitAndWaitForFlush(l.uploadInRealtime);
            var K =
                l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call,
              Q = K
                ? babelHelpers.extends({}, c, G)
                : babelHelpers.extends({}, c);
            (t != null && K && (Q.userRating = t),
              yield o("WAWebVoipLabMetricsFile").patchLabMetricsSelfRow(Q),
              o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(n),
              B.add(e),
              ae(e),
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
              yield ue());
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
        se.apply(this, arguments)
      );
    }
    function ue() {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        ce.apply(this, arguments)
      );
    }
    function de() {
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
    ((l.handleFieldstatsReady = K),
      (l.sendStoredFieldstats = ee),
      (l.requestStoredFieldstatsSend = ne),
      (l.syncVoipPersistentFSWithIdleCallback = de));
  },
  98,
);
