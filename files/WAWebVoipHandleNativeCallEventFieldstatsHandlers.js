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
      F,
      O = 0,
      B = 6,
      W = 10,
      q = 15,
      U = 17,
      V = 3e4,
      H = 15e3,
      G = 2e3,
      z = 2e3;
    function j() {
      return o("WAWebVoipGatingUtils").isGuestViewer() ? H : V;
    }
    var K = new WeakSet(),
      Q = new WeakMap(),
      X = new WeakMap(),
      Y = null,
      J = null;
    function Z(e, t) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebBrowserApi").getNumCpu(),
            r = o("WAWebBrowserApi").getMemClass(),
            a = r != null ? Math.round(r / 1e3) : null,
            i = o("WAWebVoipDeviceClassUtils").computeDeviceClass(n, a),
            l = babelHelpers.extends({}, e);
          (n != null && (l.numCpuCores = n),
            a != null && (l.totalMemoryGb = a),
            i != null && (l.deviceClass = i),
            (l = te(l, t)));
          var s = o("WAWebVoipFocusTracker").snapshotFocusStats();
          s != null && (l = babelHelpers.extends({}, l, s));
          var u = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
          u != null && (l = babelHelpers.extends({}, l, u));
          var c = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
          c != null && (l = babelHelpers.extends({}, l, c));
          var d = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
          (d != null && (l = babelHelpers.extends({}, l, d)), ne());
          var m = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          m != null && (l = babelHelpers.extends({}, l, m));
          var p = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioCaptureMetrics",
          );
          return (p != null && (l = babelHelpers.extends({}, l, p)), l);
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e, t) {
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
    function ne() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function re(e) {
      try {
        var t = JSON.parse(e);
        return t.is_last_field_stats_report === !0;
      } catch (e) {
        return !1;
      }
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.videoEnabled === !0 || e.videoEnabledAtCallStart === !0;
          (delete e.micPermission, delete e.cameraPermission);
          var r = yield (F || (F = n("Promise"))).all([
              ie(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "getVoipMicPermissionGranted",
                ),
                "mic_permission",
              ),
              t
                ? ie(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "getVoipCameraPermissionGranted",
                    ),
                    "camera_permission",
                  )
                : (F || (F = n("Promise"))).resolve(null),
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
        ae.apply(this, arguments)
      );
    }
    function ie(t, n) {
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
        G,
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
    function le(e) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o(
              "WAWebVoipWebTransportCallSummary",
            ).getWtCurrentCallTelemetry(),
            r = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(
              e,
              o("WAWebCallRandomIdStore").getCurrentCallRandomId(),
              o("WAWebVoipLobbyEntryPointStore").getCurrentLobbyEntryPoint(),
            );
          ((J = r), n != null && Q.set(r, n), Ce(r));
          var a = re(e);
          a && ge(r);
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
              a || ge(r),
              l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                (ue(l.stats), de(l.stats)),
              J === r && (yield Se(r)),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] last segment stored for rating",
                  ])),
              ));
            return;
          }
          (a && ye(r), yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var d =
              u ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
              u ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
            m = d
              ? yield Z(l.stats, (t = Q.get(r)) != null ? t : null)
              : babelHelpers.extends({}, l.stats);
          l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            m.callTermReason === O &&
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
              : me(m);
          g.commit();
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e) {
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
    function ce(e, t) {
      return e === W
        ? "anc"
        : e === B && (t === q || t === U)
          ? "relay_bind"
          : null;
    }
    function de(e) {
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
          var l = ce(r, a);
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
    function me(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (
        t.set(
          o("WAWebVoipGatingUtils").isGuestViewer()
            ? babelHelpers.extends({}, e, { isGuestParticipant: !0 })
            : e,
        ),
        t
      );
    }
    function pe(e) {
      var t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
      return t == null
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send",
              ])),
          ),
          (F || (F = n("Promise"))).resolve())
        : _e(t, e);
    }
    function _e(e, t) {
      var n = X.get(e);
      if (n != null) return n;
      var r = ke(e, t);
      return (
        X.set(e, r),
        r.then(
          function () {
            X.get(e) === r && X.delete(e);
          },
          function () {
            X.get(e) === r && X.delete(e);
          },
        ),
        r
      );
    }
    function fe(e) {
      pe(e).catch(function (e) {
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
    function ge(e) {
      if (!K.has(e)) {
        Y != null && window.clearTimeout(Y.timeoutId);
        var t = window.setTimeout(function () {
          var t;
          if (((t = Y) == null ? void 0 : t.fieldstats) === e) {
            Y = null;
            var n = X.get(e);
            if (n != null) {
              n.catch(function () {
                he(e);
              });
              return;
            }
            (o("WAWebCoreActionsODS").logCallFieldstatsWatchdogSend(),
              _e(e).catch(function (t) {
                (o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] watchdog send failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  he(e));
              }));
          }
        }, j());
        Y = { fieldstats: e, timeoutId: t };
      }
    }
    function he(e) {
      !K.has(e) &&
        o("WAWebVoipCallRatingStore").getPendingFieldstats() === e &&
        ge(e);
    }
    function ye(e) {
      var t = Y;
      t != null &&
        t.fieldstats === e &&
        (window.clearTimeout(t.timeoutId), (Y = null));
    }
    function Ce(e) {
      var t = Y;
      t != null &&
        t.fieldstats !== e &&
        (window.clearTimeout(t.timeoutId), (Y = null));
    }
    var be = new WeakMap(),
      ve = new WeakMap();
    function Se(e) {
      var t = ve.get(e);
      if (t != null) return t;
      var n = Re(e);
      ve.set(e, n);
      var r = function () {
        ve.get(e) === n && ve.delete(e);
      };
      return (n.then(r, r), n);
    }
    function Re(e) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = be.get(e);
          if (t == null) {
            var r = {};
            (be.set(e, r), (t = r));
          }
          var a = t;
          return (
            yield (F || (F = n("Promise"))).all([
              a.avSyncMetrics === void 0
                ? Ee(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeAVSyncMetrics",
                    ),
                    "consumeAVSyncMetrics",
                  ).then(function (e) {
                    e !== void 0 && (a.avSyncMetrics = e);
                  })
                : null,
              a.webCodecsFatalErrors === void 0
                ? Ee(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeWebCodecsFatalErrorCount",
                    ),
                    "consumeWebCodecsFatalErrorCount",
                  ).then(function (e) {
                    e !== void 0 && (a.webCodecsFatalErrors = e);
                  })
                : null,
              a.decodeOrderMetrics === void 0
                ? Ee(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeWebCodecsDecodeOrderMetrics",
                    ),
                    "consumeWebCodecsDecodeOrderMetrics",
                  ).then(function (e) {
                    e !== void 0 && (a.decodeOrderMetrics = e);
                  })
                : null,
            ]),
            a
          );
        })),
        Le.apply(this, arguments)
      );
    }
    function Ee(e, t) {
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
        z,
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
    function ke(e, t) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                he(e));
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
            var c = yield Z(s, (a = Q.get(e)) != null ? a : null),
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
              _ = p ? yield Se(e) : {},
              f = _.avSyncMetrics,
              g = _.decodeOrderMetrics,
              h = _.webCodecsFatalErrors;
            if (
              (f != null && (c = babelHelpers.extends({}, c, f)),
              h != null && (c.videoWebcodecsDecFatalErrorNum = h),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                    "",
                  ])),
                h != null ? h : 0,
              ),
              p && g != null)
            ) {
              var y;
              ((c = babelHelpers.extends({}, c, g)),
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebCodecs] decode_order mode=",
                      " out_of_order_frames=",
                      " ref_chain_breaks=",
                      " ref_chain_broken_t=",
                      "ms render_freezes=",
                      " render_freeze_t=",
                      "ms av_sync_reorders=",
                      "",
                    ])),
                  g.webVideoDecOrderingMode,
                  g.webVideoDecOutOfOrderFrames,
                  g.webVideoDecRefChainBreakCount,
                  g.webVideoDecRefChainBrokenT,
                  g.webVideoRenderNumFreezes,
                  g.webVideoRenderFreezeT,
                  (y = f == null ? void 0 : f.webAvSyncReorderCount) != null
                    ? y
                    : "n/a",
                ));
            }
            var C = yield i.consumeVideoCaptureFps();
            C != null &&
              ((c = babelHelpers.extends({}, c, C)),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                C.videoCaptureAvgFps,
              ));
            var b = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
            b != null &&
              ((c.webVideoEncoderType = b),
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoEncoder] web_video_encoder_type=",
                    "",
                  ])),
                b,
              ));
            var w = typeof c.callId == "string" ? c.callId : null,
              A = e.lobbyEntryPoint;
            if (
              (A != null &&
                ((c.lobbyEntryPoint = A),
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] lobby_entry_point=",
                      "",
                    ])),
                  A,
                )),
              o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
            ) {
              var F = e.callRandomId;
              F != null && (c.callRandomId = F);
            }
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var O = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getUnifiedSessionId",
              );
              (O != null && (c.unifiedSessionId = O),
                o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled() && (yield oe(c)));
              var B = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeOutgoingCallSetupActiveMs",
                { callId: w },
              );
              B != null &&
                ((c.outgoingCallSetupActiveMs = B),
                o("WALogger").LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] outgoing_call_setup_active_ms=",
                      "",
                    ])),
                  B,
                ));
            }
            var W =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              W != null ? W : 0,
            );
            var q = null,
              U = null,
              V = null,
              H = null,
              G = null;
            if (W != null && W > 0) {
              var z = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              z != null &&
                ((q = z.lastVoipActivity),
                (U = z.lastVoipActivityTimestampSec),
                (V = z.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  q != null ? q : "none",
                  U != null ? U : "none",
                  V != null ? V : "none",
                ));
              var j = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              j != null &&
                ((H = j.lastVoipUiActivity),
                (G = j.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  H != null ? H : "none",
                  G != null ? G : "none",
                ));
            } else
              o("WAWebBackendApi").frontendFireAndForget(
                "clearAllActivityTracking",
                {},
              );
            var X = {};
            (W != null && (X.numAnrs = W),
              q != null && (X.lastVoipActivity = q),
              U != null && (X.lastVoipActivityTimestampSec = U),
              V != null && (X.timeFirstAnrSinceCallStartSec = V),
              H != null && (X.lastVoipUiActivity = H),
              G != null && (X.lastVoipUiActivityTimestampSec = G));
            var Y;
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var J = new (o("WAWebCallWamEvent").CallWamEvent)(c);
              (r("isEmptyObject")(X) ||
                (J.set(X),
                o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR fields set n=",
                      " act=",
                      " actT=",
                      "s firstT=",
                      " uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  W != null ? W : "null",
                  q != null ? q : "null",
                  U != null ? U : "null",
                  V != null ? V : "null",
                  H != null ? H : "null",
                  G != null ? G : "null",
                )),
                (Y = J));
            } else Y = me(c);
            yield Y.commitAndWaitForFlush(l.uploadInRealtime);
            var ee = p
              ? babelHelpers.extends({}, c, X)
              : babelHelpers.extends({}, c);
            (t != null && p && (ee.userRating = t),
              yield o("WAWebVoipLabMetricsFile").patchLabMetricsSelfRow(ee),
              o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(n),
              K.add(e),
              ye(e),
              o("WAWebVoipCallRatingStore").clearPendingFieldstats(e),
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffCompleted(),
              o("WALogger").LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                t != null ? t : "none",
              ),
              yield Te());
          } catch (e) {
            throw (
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffFailed(),
              o("WALogger")
                .ERROR(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
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
        Ie.apply(this, arguments)
      );
    }
    function Te() {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            (e.cleanupUnfinishedCallStats(),
              yield o("WAWebVoipPersistentFS").syncPersistentFS(e),
              o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff",
                  ])),
              ));
          } catch (e) {
            (o(
              "WAWebCoreActionsODS",
            ).logCallFieldstatsPersistenceCleanupFailed(),
              o("WALogger")
                .ERROR(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
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
        De.apply(this, arguments)
      );
    }
    function xe() {
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
    ((l.MEDIA_PERMISSION_LOOKUP_TIMEOUT_MS = G),
      (l.FRONTEND_VIDEO_SNAPSHOT_TIMEOUT_MS = z),
      (l.handleFieldstatsReady = le),
      (l.sendStoredFieldstats = pe),
      (l.requestStoredFieldstatsSend = fe),
      (l.syncVoipPersistentFSWithIdleCallback = xe));
  },
  98,
);
