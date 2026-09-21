__d(
  "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebCallRandomIdStore",
    "WAWebCallUserJourneyGating",
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
      $,
      P,
      N,
      M,
      w = 0,
      A = 6,
      F = 10,
      O = 15,
      B = 17,
      W = 3e4,
      q = 15e3,
      U = 2e3;
    function V() {
      return o("WAWebVoipGatingUtils").isGuestViewer() ? q : W;
    }
    var H = new WeakSet(),
      G = new WeakMap(),
      z = new WeakMap(),
      j = null;
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebBrowserApi").getNumCpu(),
            r = o("WAWebBrowserApi").getMemClass(),
            a = r != null ? Math.round(r / 1e3) : null,
            i = o("WAWebVoipDeviceClassUtils").computeDeviceClass(n, a),
            l = babelHelpers.extends({}, e);
          (n != null && (l.numCpuCores = n),
            a != null && (l.totalMemoryGb = a),
            i != null && (l.deviceClass = i),
            (l = X(l, t)));
          var s = o("WAWebVoipFocusTracker").snapshotFocusStats();
          s != null && (l = babelHelpers.extends({}, l, s));
          var u = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
          u != null && (l = babelHelpers.extends({}, l, u));
          var c = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
          c != null && (l = babelHelpers.extends({}, l, c));
          var d = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
          (d != null && (l = babelHelpers.extends({}, l, d)), Y());
          var m = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          m != null && (l = babelHelpers.extends({}, l, m));
          var p = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioCaptureMetrics",
          );
          return (p != null && (l = babelHelpers.extends({}, l, p)), l);
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      if (t == null) return babelHelpers.extends({}, e);
      var n = babelHelpers.extends({}, e, {
        webTransportUsed: t.relayTrafficSent,
        webTransportConnectAttempted: t.connectAttempted,
        webTransportConnectOpened: t.connectOpened,
        webTransportRelayTrafficSent: t.relayTrafficSent,
        webTransportFallbackTriggered: t.fallbackTriggered,
        webTransportFallbackPhase: t.fallbackPhase,
        webTransportFallbackReason: t.fallbackReason,
        webTransportFallbackSinceCallStartMs: t.fallbackSinceCallStartMs,
        webTransportFallbackSinceAcceptMs: t.fallbackSinceAcceptMs,
        webTransportFallbackSctpStartMs: t.fallbackSctpStartMs,
        webTransportFallbackSctpConnectedMs: t.fallbackSctpConnectedMs,
        webTransportFallbackToFirstActiveMs: t.fallbackToFirstActiveMs,
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
    function Y() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function J(e) {
      try {
        var t = JSON.parse(e);
        return t.is_last_field_stats_report === !0;
      } catch (e) {
        return !1;
      }
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.videoEnabled === !0 || e.videoEnabledAtCallStart === !0;
          (delete e.micPermission, delete e.cameraPermission);
          var r = yield (M || (M = n("Promise"))).all([
              te(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "getVoipMicPermissionGranted",
                ),
                "mic_permission",
              ),
              t
                ? te(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "getVoipCameraPermissionGranted",
                    ),
                    "camera_permission",
                  )
                : (M || (M = n("Promise"))).resolve(null),
            ]),
            a = r[0],
            i = r[1];
          (a != null &&
            ((e.micPermission = a),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] mic_permission=",
                  "",
                ])),
              String(a),
            )),
            i != null &&
              ((e.cameraPermission = i),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] camera_permission=",
                    "",
                  ])),
                String(i),
              )));
        })),
        ee.apply(this, arguments)
      );
    }
    function te(t, n) {
      return o("WAPromiseDelays").withTimeout(
        t.then(
          function (e) {
            return e;
          },
          function (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] ",
                      " lookup failed",
                    ])),
                  n,
                )
                .catching(r("getErrorSafe")(t)),
              null
            );
          },
        ),
        U,
        function () {
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] ",
                  " lookup timed out",
                ])),
              n,
            ),
            null
          );
        },
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o(
              "WAWebVoipWebTransportCallSummary",
            ).getWtCurrentCallTelemetry(),
            r = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(
              e,
              o("WAWebCallRandomIdStore").getCurrentCallRandomId(),
            );
          (n != null && G.set(r, n), _e(r));
          var a = J(e);
          a && de(r);
          var i = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (i == null || i.type !== "web") {
            o("WALogger").WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
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
              a || de(r),
              l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                (oe(l.stats), ie(l.stats)),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] last segment stored for rating",
                  ])),
              ));
            return;
          }
          (a && pe(r), yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var d =
              u ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
              u ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
            m = d
              ? yield K(l.stats, (t = G.get(r)) != null ? t : null)
              : babelHelpers.extends({}, l.stats);
          l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            m.callTermReason === w &&
            delete m.callTermReason;
          var p = typeof m.callId == "string" ? m.callId : null,
            _ = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(p);
          if (
            (_ != null && (m.lobbyEntryPoint = _),
            o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
          ) {
            var f = r.callRandomId;
            f != null && (m.callRandomId = f);
          }
          if (
            l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
          ) {
            o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
              (delete m.micPermission, delete m.cameraPermission);
            var g = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getUnifiedSessionId",
            );
            g != null && (m.unifiedSessionId = g);
          }
          var C =
            l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(m)
              : le(m);
          C.commit();
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
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
    function ae(e, t) {
      return e === F
        ? "anc"
        : e === A && (t === O || t === B)
          ? "relay_bind"
          : null;
    }
    function ie(e) {
      var t = typeof e.callId == "string" ? e.callId : null,
        n = o("WAWebVoipWebTransportCallSummary").getWtCallSummaryForCall(t);
      if (n != null) {
        var r = e.callResult,
          a = e.callSetupErrorType,
          i = e.maxConnectedParticipants;
        if (
          !(
            e.groupCallIsLastSegment !== !0 ||
            typeof r != "number" ||
            typeof i != "number"
          )
        ) {
          var l = ae(r, a);
          l != null &&
            (o("WAWebCoreActionsODS").logCallWebtransportGroupCallAnc(),
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
                l,
                String(t),
                r,
                String(a != null ? a : "n/a"),
                i,
                n.numRelayAttempts,
                n.numOpened,
                JSON.stringify(n.attempts),
              )
              .sendLogs("webtransport-group-call-anc"));
        }
      }
    }
    function le(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    function se(e) {
      var t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
      return t == null
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send",
              ])),
          ),
          (M || (M = n("Promise"))).resolve())
        : ue(t, e);
    }
    function ue(e, t) {
      var n = z.get(e);
      if (n != null) return n;
      var r = fe(e, t);
      return (
        z.set(e, r),
        r.then(
          function () {
            z.get(e) === r && z.delete(e);
          },
          function () {
            z.get(e) === r && z.delete(e);
          },
        ),
        r
      );
    }
    function ce(e) {
      se(e).catch(function (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] send request failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      });
    }
    function de(e) {
      if (!H.has(e)) {
        j != null && window.clearTimeout(j.timeoutId);
        var t = window.setTimeout(function () {
          var t;
          if (((t = j) == null ? void 0 : t.fieldstats) === e) {
            j = null;
            var n = z.get(e);
            if (n != null) {
              n.catch(function () {
                me(e);
              });
              return;
            }
            (o("WAWebCoreActionsODS").logCallFieldstatsWatchdogSend(),
              ue(e).catch(function (t) {
                (o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] watchdog send failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  me(e));
              }));
          }
        }, V());
        j = { fieldstats: e, timeoutId: t };
      }
    }
    function me(e) {
      !H.has(e) &&
        o("WAWebVoipCallRatingStore").getPendingFieldstats() === e &&
        de(e);
    }
    function pe(e) {
      var t = j;
      t != null &&
        t.fieldstats === e &&
        (window.clearTimeout(t.timeoutId), (j = null));
    }
    function _e(e) {
      var t = j;
      t != null &&
        t.fieldstats !== e &&
        (window.clearTimeout(t.timeoutId), (j = null));
    }
    function fe(e, t) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.jsonDataStr;
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] web stack unavailable, skipping pending fieldstats",
                  ])),
              ),
                me(e));
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
            var c = yield K(s, (a = G.get(e)) != null ? a : null),
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                    "",
                  ])),
                _ != null ? _ : 0,
              ));
            var f = yield i.consumeVideoCaptureFps();
            f != null &&
              ((c = babelHelpers.extends({}, c, f)),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                f.videoCaptureAvgFps,
              ));
            var g = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
            g != null &&
              ((c.webVideoEncoderType = g),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoEncoder] web_video_encoder_type=",
                    "",
                  ])),
                g,
              ));
            var h = typeof c.callId == "string" ? c.callId : null,
              y = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(
                h,
              );
            if (
              (y != null &&
                ((c.lobbyEntryPoint = y),
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] lobby_entry_point=",
                      "",
                    ])),
                  y,
                )),
              o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
            ) {
              var P = e.callRandomId;
              P != null && (c.callRandomId = P);
            }
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var N = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getUnifiedSessionId",
              );
              (N != null && (c.unifiedSessionId = N),
                o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled() && (yield Z(c)));
              var M = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeOutgoingCallSetupActiveMs",
                { callId: h },
              );
              M != null &&
                ((c.outgoingCallSetupActiveMs = M),
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] outgoing_call_setup_active_ms=",
                      "",
                    ])),
                  M,
                ));
            }
            var w =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              w != null ? w : 0,
            );
            var A = null,
              F = null,
              O = null,
              B = null,
              W = null;
            if (w != null && w > 0) {
              var q = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              q != null &&
                ((A = q.lastVoipActivity),
                (F = q.lastVoipActivityTimestampSec),
                (O = q.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  A != null ? A : "none",
                  F != null ? F : "none",
                  O != null ? O : "none",
                ));
              var U = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              U != null &&
                ((B = U.lastVoipUiActivity),
                (W = U.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
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
            var V = {};
            (w != null && (V.numAnrs = w),
              A != null && (V.lastVoipActivity = A),
              F != null && (V.lastVoipActivityTimestampSec = F),
              O != null && (V.timeFirstAnrSinceCallStartSec = O),
              B != null && (V.lastVoipUiActivity = B),
              W != null && (V.lastVoipUiActivityTimestampSec = W));
            var z;
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var j = new (o("WAWebCallWamEvent").CallWamEvent)(c);
              (r("isEmptyObject")(V) ||
                (j.set(V),
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR fields set n=",
                      " act=",
                      " actT=",
                      "s firstT=",
                      " uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  w != null ? w : "null",
                  A != null ? A : "null",
                  F != null ? F : "null",
                  O != null ? O : "null",
                  B != null ? B : "null",
                  W != null ? W : "null",
                )),
                (z = j));
            } else z = le(c);
            yield z.commitAndWaitForFlush(l.uploadInRealtime);
            var Q =
                l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call,
              X = Q
                ? babelHelpers.extends({}, c, V)
                : babelHelpers.extends({}, c);
            (t != null && Q && (X.userRating = t),
              yield o("WAWebVoipLabMetricsFile").patchLabMetricsSelfRow(X),
              o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(n),
              H.add(e),
              pe(e),
              o("WAWebVoipCallRatingStore").clearPendingFieldstats(e),
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffCompleted(),
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                t != null ? t : "none",
              ),
              yield he());
          } catch (e) {
            throw (
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffFailed(),
              o("WALogger")
                .ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
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
        ge.apply(this, arguments)
      );
    }
    function he() {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            (e.cleanupUnfinishedCallStats(),
              yield o("WAWebVoipPersistentFS").syncPersistentFS(e),
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff",
                  ])),
              ));
          } catch (e) {
            (o(
              "WAWebCoreActionsODS",
            ).logCallFieldstatsPersistenceCleanupFailed(),
              o("WALogger")
                .ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
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
        ye.apply(this, arguments)
      );
    }
    function Ce() {
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Successfully synced filesystem in ",
                  "ms",
                ])),
              t,
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      });
    }
    ((l.MEDIA_PERMISSION_LOOKUP_TIMEOUT_MS = U),
      (l.handleFieldstatsReady = ne),
      (l.sendStoredFieldstats = se),
      (l.requestStoredFieldstatsSend = ce),
      (l.syncVoipPersistentFSWithIdleCallback = Ce));
  },
  98,
);
