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
      w,
      A,
      F = 0,
      O = 6,
      B = 10,
      W = 15,
      q = 17,
      U = 3e4,
      V = 15e3,
      H = 2e3,
      G = 2e3;
    function z() {
      return o("WAWebVoipGatingUtils").isGuestViewer() ? V : U;
    }
    var j = new WeakSet(),
      K = new WeakMap(),
      Q = new WeakMap(),
      X = null,
      Y = null;
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebBrowserApi").getNumCpu(),
            r = o("WAWebBrowserApi").getMemClass(),
            a = r != null ? Math.round(r / 1e3) : null,
            i = o("WAWebVoipDeviceClassUtils").computeDeviceClass(n, a),
            l = babelHelpers.extends({}, e);
          (n != null && (l.numCpuCores = n),
            a != null && (l.totalMemoryGb = a),
            i != null && (l.deviceClass = i),
            (l = ee(l, t)));
          var s = o("WAWebVoipFocusTracker").snapshotFocusStats();
          s != null && (l = babelHelpers.extends({}, l, s));
          var u = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
          u != null && (l = babelHelpers.extends({}, l, u));
          var c = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
          c != null && (l = babelHelpers.extends({}, l, c));
          var d = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
          (d != null && (l = babelHelpers.extends({}, l, d)), te());
          var m = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          m != null && (l = babelHelpers.extends({}, l, m));
          var p = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioCaptureMetrics",
          );
          return (p != null && (l = babelHelpers.extends({}, l, p)), l);
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e, t) {
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
    function te() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function ne(e) {
      try {
        var t = JSON.parse(e);
        return t.is_last_field_stats_report === !0;
      } catch (e) {
        return !1;
      }
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.videoEnabled === !0 || e.videoEnabledAtCallStart === !0;
          (delete e.micPermission, delete e.cameraPermission);
          var r = yield (A || (A = n("Promise"))).all([
              ae(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "getVoipMicPermissionGranted",
                ),
                "mic_permission",
              ),
              t
                ? ae(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "getVoipCameraPermissionGranted",
                    ),
                    "camera_permission",
                  )
                : (A || (A = n("Promise"))).resolve(null),
            ]),
            a = r[0],
            i = r[1];
          (a != null &&
            ((e.micPermission = a),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] mic_permission=",
                  "",
                ])),
              String(a),
            )),
            i != null &&
              ((e.cameraPermission = i),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] camera_permission=",
                    "",
                  ])),
                String(i),
              )));
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(t, n) {
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
        H,
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
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o(
              "WAWebVoipWebTransportCallSummary",
            ).getWtCurrentCallTelemetry(),
            r = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(
              e,
              o("WAWebCallRandomIdStore").getCurrentCallRandomId(),
              o("WAWebVoipLobbyEntryPointStore").getCurrentLobbyEntryPoint(),
            );
          ((Y = r), n != null && K.set(r, n), ye(r));
          var a = ne(e);
          a && fe(r);
          var i = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (i == null || i.type !== "web") {
            o("WALogger").WARN(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
            (o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
              o("WAWebCoreActionsODS").logCallFieldstatsFinalReceived(),
              a || fe(r),
              l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                (se(l.stats), ce(l.stats)),
              Y === r && (yield ve(r)),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] last segment stored for rating",
                  ])),
              ));
            return;
          }
          (a && he(r), yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var d =
              u ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
              u ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
            m = d
              ? yield J(l.stats, (t = K.get(r)) != null ? t : null)
              : babelHelpers.extends({}, l.stats);
          l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            m.callTermReason === F &&
            delete m.callTermReason;
          var p = r.lobbyEntryPoint;
          if (
            (p != null && (m.lobbyEntryPoint = p),
            o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
          ) {
            var _ = r.callRandomId;
            _ != null && (m.callRandomId = _);
          }
          if (
            l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
          ) {
            o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
              (delete m.micPermission, delete m.cameraPermission);
            var f = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getUnifiedSessionId",
            );
            f != null && (m.unifiedSessionId = f);
          }
          var g =
            l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(m)
              : de(m);
          g.commit();
        })),
        le.apply(this, arguments)
      );
    }
    function se(e) {
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
    function ue(e, t) {
      return e === B
        ? "anc"
        : e === O && (t === W || t === q)
          ? "relay_bind"
          : null;
    }
    function ce(e) {
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
          var l = ue(r, a);
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
    function de(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    function me(e) {
      var t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
      return t == null
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send",
              ])),
          ),
          (A || (A = n("Promise"))).resolve())
        : pe(t, e);
    }
    function pe(e, t) {
      var n = Q.get(e);
      if (n != null) return n;
      var r = Ee(e, t);
      return (
        Q.set(e, r),
        r.then(
          function () {
            Q.get(e) === r && Q.delete(e);
          },
          function () {
            Q.get(e) === r && Q.delete(e);
          },
        ),
        r
      );
    }
    function _e(e) {
      me(e).catch(function (e) {
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
    function fe(e) {
      if (!j.has(e)) {
        X != null && window.clearTimeout(X.timeoutId);
        var t = window.setTimeout(function () {
          var t;
          if (((t = X) == null ? void 0 : t.fieldstats) === e) {
            X = null;
            var n = Q.get(e);
            if (n != null) {
              n.catch(function () {
                ge(e);
              });
              return;
            }
            (o("WAWebCoreActionsODS").logCallFieldstatsWatchdogSend(),
              pe(e).catch(function (t) {
                (o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] watchdog send failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  ge(e));
              }));
          }
        }, z());
        X = { fieldstats: e, timeoutId: t };
      }
    }
    function ge(e) {
      !j.has(e) &&
        o("WAWebVoipCallRatingStore").getPendingFieldstats() === e &&
        fe(e);
    }
    function he(e) {
      var t = X;
      t != null &&
        t.fieldstats === e &&
        (window.clearTimeout(t.timeoutId), (X = null));
    }
    function ye(e) {
      var t = X;
      t != null &&
        t.fieldstats !== e &&
        (window.clearTimeout(t.timeoutId), (X = null));
    }
    var Ce = new WeakMap(),
      be = new WeakMap();
    function ve(e) {
      var t = be.get(e);
      if (t != null) return t;
      var n = Se(e);
      be.set(e, n);
      var r = function () {
        be.get(e) === n && be.delete(e);
      };
      return (n.then(r, r), n);
    }
    function Se(e) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Ce.get(e);
          if (t == null) {
            var r = {};
            (Ce.set(e, r), (t = r));
          }
          var a = t;
          return (
            yield (A || (A = n("Promise"))).all([
              a.avSyncMetrics === void 0
                ? Le(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeAVSyncMetrics",
                    ),
                    "consumeAVSyncMetrics",
                  ).then(function (e) {
                    e !== void 0 && (a.avSyncMetrics = e);
                  })
                : null,
              a.webCodecsFatalErrors === void 0
                ? Le(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeWebCodecsFatalErrorCount",
                    ),
                    "consumeWebCodecsFatalErrorCount",
                  ).then(function (e) {
                    e !== void 0 && (a.webCodecsFatalErrors = e);
                  })
                : null,
            ]),
            a
          );
        })),
        Re.apply(this, arguments)
      );
    }
    function Le(e, t) {
      return o("WAPromiseDelays").withTimeout(
        e.then(
          function (e) {
            return e != null ? e : null;
          },
          function (e) {
            o("WALogger")
              .WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] ",
                    " failed, omitting its fields",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e));
          },
        ),
        G,
        function () {
          return (
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] ",
                  " timed out, omitting its fields",
                ])),
              t,
            ),
            null
          );
        },
      );
    }
    function Ee(e, t) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.jsonDataStr;
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
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
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] web stack unavailable, skipping pending fieldstats",
                  ])),
              ),
                ge(e));
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
            var c = yield J(s, (a = K.get(e)) != null ? a : null),
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
            var p =
                l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call,
              _ = p ? yield ve(e) : {},
              f = _.avSyncMetrics,
              g = _.webCodecsFatalErrors;
            (f != null && (c = babelHelpers.extends({}, c, f)),
              g != null && (c.videoWebcodecsDecFatalErrorNum = g),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                    "",
                  ])),
                g != null ? g : 0,
              ));
            var h = yield i.consumeVideoCaptureFps();
            h != null &&
              ((c = babelHelpers.extends({}, c, h)),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                h.videoCaptureAvgFps,
              ));
            var y = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
            y != null &&
              ((c.webVideoEncoderType = y),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoEncoder] web_video_encoder_type=",
                    "",
                  ])),
                y,
              ));
            var C = typeof c.callId == "string" ? c.callId : null,
              b = e.lobbyEntryPoint;
            if (
              (b != null &&
                ((c.lobbyEntryPoint = b),
                o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] lobby_entry_point=",
                      "",
                    ])),
                  b,
                )),
              o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
            ) {
              var M = e.callRandomId;
              M != null && (c.callRandomId = M);
            }
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var w = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getUnifiedSessionId",
              );
              (w != null && (c.unifiedSessionId = w),
                o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled() && (yield re(c)));
              var A = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeOutgoingCallSetupActiveMs",
                { callId: C },
              );
              A != null &&
                ((c.outgoingCallSetupActiveMs = A),
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] outgoing_call_setup_active_ms=",
                      "",
                    ])),
                  A,
                ));
            }
            var F =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              F != null ? F : 0,
            );
            var O = null,
              B = null,
              W = null,
              q = null,
              U = null;
            if (F != null && F > 0) {
              var V = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              V != null &&
                ((O = V.lastVoipActivity),
                (B = V.lastVoipActivityTimestampSec),
                (W = V.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  O != null ? O : "none",
                  B != null ? B : "none",
                  W != null ? W : "none",
                ));
              var H = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              H != null &&
                ((q = H.lastVoipUiActivity),
                (U = H.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  q != null ? q : "none",
                  U != null ? U : "none",
                ));
            } else
              o("WAWebBackendApi").frontendFireAndForget(
                "clearAllActivityTracking",
                {},
              );
            var G = {};
            (F != null && (G.numAnrs = F),
              O != null && (G.lastVoipActivity = O),
              B != null && (G.lastVoipActivityTimestampSec = B),
              W != null && (G.timeFirstAnrSinceCallStartSec = W),
              q != null && (G.lastVoipUiActivity = q),
              U != null && (G.lastVoipUiActivityTimestampSec = U));
            var z;
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var Q = new (o("WAWebCallWamEvent").CallWamEvent)(c);
              (r("isEmptyObject")(G) ||
                (Q.set(G),
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR fields set n=",
                      " act=",
                      " actT=",
                      "s firstT=",
                      " uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  F != null ? F : "null",
                  O != null ? O : "null",
                  B != null ? B : "null",
                  W != null ? W : "null",
                  q != null ? q : "null",
                  U != null ? U : "null",
                )),
                (z = Q));
            } else z = de(c);
            yield z.commitAndWaitForFlush(l.uploadInRealtime);
            var X = p
              ? babelHelpers.extends({}, c, G)
              : babelHelpers.extends({}, c);
            (t != null && p && (X.userRating = t),
              yield o("WAWebVoipLabMetricsFile").patchLabMetricsSelfRow(X),
              o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(n),
              j.add(e),
              he(e),
              o("WAWebVoipCallRatingStore").clearPendingFieldstats(e),
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffCompleted(),
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                t != null ? t : "none",
              ),
              yield Ie());
          } catch (e) {
            throw (
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffFailed(),
              o("WALogger")
                .ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
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
        ke.apply(this, arguments)
      );
    }
    function Ie() {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            (e.cleanupUnfinishedCallStats(),
              yield o("WAWebVoipPersistentFS").syncPersistentFS(e),
              o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff",
                  ])),
              ));
          } catch (e) {
            (o(
              "WAWebCoreActionsODS",
            ).logCallFieldstatsPersistenceCleanupFailed(),
              o("WALogger")
                .ERROR(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
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
        Te.apply(this, arguments)
      );
    }
    function De() {
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
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Successfully synced filesystem in ",
                  "ms",
                ])),
              t,
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      });
    }
    ((l.MEDIA_PERMISSION_LOOKUP_TIMEOUT_MS = H),
      (l.FRONTEND_VIDEO_SNAPSHOT_TIMEOUT_MS = G),
      (l.handleFieldstatsReady = ie),
      (l.sendStoredFieldstats = me),
      (l.requestStoredFieldstatsSend = _e),
      (l.syncVoipPersistentFSWithIdleCallback = De));
  },
  98,
);
