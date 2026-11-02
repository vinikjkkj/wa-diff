__d(
  "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
  [
    "Promise",
    "WACustomError",
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
    "WAWebVoipAppInBgWhenCallStartsStore",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallEnterPipModeCountStore",
    "WAWebVoipCallFromUiStore",
    "WAWebVoipCallRatingStore",
    "WAWebVoipCallReachabilityStore",
    "WAWebVoipCallStartUnifiedSessionStore",
    "WAWebVoipCalleeOfferToRingStore",
    "WAWebVoipCrashRecovery",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipErrorLogUpload",
    "WAWebVoipFocusTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipHardwareInfo",
    "WAWebVoipIncomingCallNotificationStateStore",
    "WAWebVoipIncomingCallUiActionStore",
    "WAWebVoipIncomingOfferReceivedWallClockStore",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipJsonParserPayloads",
    "WAWebVoipLabMetricsFile",
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipLobbyVisibilityStore",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipMainThreadLockFixes",
    "WAWebVoipMainThreadLockMarker",
    "WAWebVoipMainThreadLockODS",
    "WAWebVoipPersistentFS",
    "WAWebVoipRecentRpcMethods",
    "WAWebVoipStackInterface",
    "WAWebVoipTabStateAtOfferStore",
    "WAWebVoipVideoEncoderType",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWebTransportCallSummary",
    "WAWebVoipWindowMetrics",
    "WAWebWamEnumCallSide",
    "WAWebWamEnumFieldStatsRowType",
    "WAWebWamEnumLobbyEntryPointType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isEmptyObject",
    "justknobx",
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
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z = 0,
      j = 6,
      K = 10,
      Q = 15,
      X = 17,
      Y = 3e4,
      J = 15e3,
      Z = 5e3,
      ee = 3e4,
      te = 0,
      ne = 2e3,
      re = 2e3;
    function oe() {
      return o("WAWebVoipGatingUtils").isGuestViewer() ? J : Y;
    }
    var ae = new WeakSet(),
      ie = new WeakMap(),
      le = new WeakMap(),
      se = null,
      ue = null;
    function ce(e, t) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebBrowserApi").getNumCpu(),
            r = o("WAWebBrowserApi").getMemClass(),
            a = r != null ? Math.round(r / 1e3) : null,
            i = o("WAWebVoipDeviceClassUtils").computeDeviceClass(n, a),
            l = babelHelpers.extends({}, e);
          (n != null && (l.numCpuCores = n),
            a != null && (l.totalMemoryGb = a),
            i != null && (l.deviceClass = i),
            (l = me(l)),
            (l = pe(l, t)));
          var s = o("WAWebVoipFocusTracker").snapshotFocusStats();
          s != null && (l = babelHelpers.extends({}, l, s));
          var u = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
          u != null && (l = babelHelpers.extends({}, l, u));
          var c = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
          c != null && (l = babelHelpers.extends({}, l, c));
          var d = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
          (d != null && (l = babelHelpers.extends({}, l, d)), _e());
          var m = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          m != null && (l = babelHelpers.extends({}, l, m));
          var p = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioCaptureMetrics",
          );
          return (p != null && (l = babelHelpers.extends({}, l, p)), l);
        })),
        de.apply(this, arguments)
      );
    }
    function me(e) {
      var t = o("WAWebVoipHardwareInfo").getCachedHardwareInfo(),
        n = babelHelpers.extends({}, e);
      return (
        t.cpuArch != null && (n.cpuArch = t.cpuArch),
        t.gpuName != null && (n.gpuName = t.gpuName),
        t.gpuVendor != null && (n.gpuVendor = t.gpuVendor),
        t.gpuCount != null && (n.gpuCount = t.gpuCount),
        n
      );
    }
    function pe(e, t) {
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
    function _e() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function fe(e) {
      try {
        var t = JSON.parse(e);
        return t.is_last_field_stats_report === !0;
      } catch (e) {
        return !1;
      }
    }
    function ge(e) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = xe(e);
          (delete e.micPermission, delete e.cameraPermission);
          var r = yield (G || (G = n("Promise"))).all([
              ye(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "getVoipMicPermissionGranted",
                ),
                "mic_permission",
              ),
              t
                ? ye(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "getVoipCameraPermissionGranted",
                    ),
                    "camera_permission",
                  )
                : (G || (G = n("Promise"))).resolve(null),
            ]),
            a = r[0],
            i = r[1];
          (a != null &&
            ((e.micPermission = a),
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] mic_permission=",
                  "",
                ])),
              String(a),
            )),
            i != null &&
              ((e.cameraPermission = i),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] camera_permission=",
                    "",
                  ])),
                String(i),
              )));
        })),
        he.apply(this, arguments)
      );
    }
    function ye(t, n) {
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
        ne,
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
    function Ce(e) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = o(
              "WAWebVoipWebTransportCallSummary",
            ).getWtCurrentCallTelemetry(),
            a = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr({
              calleeOfferToRingT: o(
                "WAWebVoipCalleeOfferToRingStore",
              ).getCalleeOfferToRingT(),
              callEnterPipModeCount: Ie(),
              callFromUi: o("WAWebVoipCallFromUiStore").getCallFromUi(),
              callRandomId: o(
                "WAWebCallRandomIdStore",
              ).getCurrentCallRandomId(),
              callReachability: o(
                "WAWebVoipCallReachabilityStore",
              ).getCallReachability(),
              incomingCallNotificationState: o(
                "WAWebVoipIncomingCallNotificationStateStore",
              ).resolveIncomingCallNotificationState(
                o(
                  "WAWebVoipIncomingCallUiActionStore",
                ).getIncomingCallUiAction(),
              ),
              incomingCallUiAction: o(
                "WAWebVoipIncomingCallUiActionStore",
              ).getIncomingCallUiAction(),
              isAppInBgWhenCallStarts: o(
                "WAWebVoipAppInBgWhenCallStartsStore",
              ).getAppInBgWhenCallStarts(),
              jsonDataStr: e,
              lobbyEntryPoint:
                (t = o(
                  "WAWebVoipLobbyEntryPointStore",
                ).getCurrentLobbyEntryPoint()) != null
                  ? t
                  : Se(),
              lobbyVisibleForMs: o(
                "WAWebVoipLobbyVisibilityStore",
              ).getLobbyVisibleForMs(),
              tabStateAtOffer: o(
                "WAWebVoipTabStateAtOfferStore",
              ).getTabStateAtOffer(),
              unifiedSessionIdAtCallStart: o(
                "WAWebVoipCallStartUnifiedSessionStore",
              ).getCurrentCallStartUnifiedSessionId(),
            });
          ((ue = a), r != null && ie.set(a, r), Ue(a));
          var i = fe(e);
          i && Be(a);
          var l = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (l == null || l.type !== "web") {
            o("WALogger").WARN(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] stack unavailable, dropping",
                ])),
            );
            return;
          }
          var s = l.parsers.parseFieldstatsData(e),
            u = s.stats.groupCallSegmentIdx,
            c = s.stats.fieldStatsRowType,
            d = s.isLastFieldStatsReport;
          if ((Te(s.eventType, c), d)) {
            (o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
              o(
                "WAWebVoipIncomingCallUiActionStore",
              ).resetIncomingCallUiAction(),
              o(
                "WAWebVoipIncomingCallNotificationStateStore",
              ).resetIncomingCallNotificationState(),
              o("WAWebVoipCallFromUiStore").resetCallFromUi(),
              o("WAWebVoipCallReachabilityStore").resetCallReachability(),
              o(
                "WAWebVoipAppInBgWhenCallStartsStore",
              ).resetAppInBgWhenCallStarts(),
              o(
                "WAWebVoipCallEnterPipModeCountStore",
              ).resetCallEnterPipModeCount(),
              o("WAWebVoipCalleeOfferToRingStore").resetCalleeOfferToRing(),
              o("WAWebVoipTabStateAtOfferStore").resetTabStateAtOffer(),
              o("WAWebVoipLobbyVisibilityStore").resetLobbyVisibility(),
              o(
                "WAWebVoipCallStartUnifiedSessionStore",
              ).releaseCurrentCallStartUnifiedSessionId(
                a.unifiedSessionIdAtCallStart,
              ),
              o("WAWebCoreActionsODS").logCallFieldstatsFinalReceived(),
              i || Be(a),
              s.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                (Pe(s.stats), Me(s.stats)),
              ue === a &&
                (yield ze(a),
                s.eventType ===
                  o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                  (yield Qe(a))),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] last segment stored for rating",
                  ])),
              ));
            return;
          }
          (i && qe(a), yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var m = $e(c)
            ? yield ce(s.stats, (n = ie.get(a)) != null ? n : null)
            : babelHelpers.extends({}, s.stats);
          s.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            m.callTermReason === z &&
            delete m.callTermReason;
          var p = a.lobbyEntryPoint;
          if (
            (p != null && (m.lobbyEntryPoint = p),
            o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
          ) {
            var _ = a.callRandomId;
            _ != null && (m.callRandomId = _);
          }
          if (
            s.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
          ) {
            (o(
              "WAWebCallUserJourneyGating",
            ).isCallUserJourneyLoggingEnabled() &&
              (delete m.micPermission, delete m.cameraPermission),
              Re(m, a.callFromUi),
              Le(m, a.isAppInBgWhenCallStarts),
              De(m, a.callEnterPipModeCount),
              o("WAWebVoipCallReachabilityStore").maybeStampCallReachability(
                m,
                a.callReachability,
              ),
              o("WAWebVoipTabStateAtOfferStore").maybeStampTabStateAtOffer(
                m,
                a.tabStateAtOffer,
              ),
              o(
                "WAWebVoipIncomingCallNotificationStateStore",
              ).maybeStampIncomingCallNotificationState(
                m,
                a.incomingCallNotificationState,
              ));
            var f = yield o(
              "WAWebVoipCallStartUnifiedSessionStore",
            ).resolveCallUnifiedSessionId(a.unifiedSessionIdAtCallStart);
            f != null && (m.unifiedSessionId = f);
          }
          s.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType
              .JoinableCall && ve(m, a.lobbyVisibleForMs);
          var g =
            s.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(m)
              : we(m);
          g.commit();
        })),
        be.apply(this, arguments)
      );
    }
    function ve(e, t) {
      o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled() &&
        (e.lobbyEntryPoint ===
        o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
          ? (e.lobbyVisibleT = 0)
          : t != null && (e.lobbyVisibleT = t));
    }
    function Se() {
      var e = o("WAWebVoipLobbyVisibilityStore").getGroupRingLobbyEntryPoint();
      return e != null &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled()
        ? e
        : null;
    }
    function Re(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLER &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.callFromUi = t);
    }
    function Le(e, t) {
      t != null &&
        $e(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.isAppInBgWhenCallStarts = t);
    }
    function Ee(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.calleeOfferToRingT = t);
    }
    function ke(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        (e.voipWindowIncomingOfferToLayoutTime = t);
    }
    function Ie() {
      return o("WAWebVoipGatingUtils").isDocPipEnabled()
        ? o("WAWebVoipCallEnterPipModeCountStore").getCallEnterPipModeCount()
        : null;
    }
    function Te(e, t) {
      e === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
        t === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF &&
        o("WAWebVoipCallEnterPipModeCountStore").resetCallEnterPipModeCount();
    }
    function De(e, t) {
      t != null &&
        $e(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.callEnterPipModeCount = t);
    }
    function xe(e) {
      return e.videoEnabled === !0 || e.videoEnabledAtCallStart === !0;
    }
    function $e(e) {
      return (
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH
      );
    }
    function Pe(e) {
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
    function Ne(e, t) {
      return e === K
        ? "anc"
        : e === j && (t === Q || t === X)
          ? "relay_bind"
          : null;
    }
    function Me(e) {
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
          var l = Ne(r, a);
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
    function we(e) {
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
    function Ae(e) {
      var t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
      return t == null
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send",
              ])),
          ),
          (G || (G = n("Promise"))).resolve())
        : Fe(t, e);
    }
    function Fe(e, t) {
      var n = le.get(e);
      if (n != null) return n;
      var r = Je(e, t);
      return (
        le.set(e, r),
        r.then(
          function () {
            le.get(e) === r && le.delete(e);
          },
          function () {
            le.get(e) === r && le.delete(e);
          },
        ),
        r
      );
    }
    function Oe(e) {
      Ae(e).catch(function (e) {
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
    function Be(e) {
      if (!ae.has(e)) {
        se != null && window.clearTimeout(se.timeoutId);
        var t = window.setTimeout(function () {
          var t;
          if (((t = se) == null ? void 0 : t.fieldstats) === e) {
            se = null;
            var n = le.get(e);
            if (n != null) {
              n.catch(function () {
                We(e);
              });
              return;
            }
            (o("WAWebCoreActionsODS").logCallFieldstatsWatchdogSend(),
              Fe(e).catch(function (t) {
                (o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] watchdog send failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  We(e));
              }));
          }
        }, oe());
        se = { fieldstats: e, timeoutId: t };
      }
    }
    function We(e) {
      !ae.has(e) &&
        o("WAWebVoipCallRatingStore").getPendingFieldstats() === e &&
        Be(e);
    }
    function qe(e) {
      var t = se;
      t != null &&
        t.fieldstats === e &&
        (window.clearTimeout(t.timeoutId), (se = null));
    }
    function Ue(e) {
      var t = se;
      t != null &&
        t.fieldstats !== e &&
        (window.clearTimeout(t.timeoutId), (se = null));
    }
    var Ve = new WeakMap(),
      He = new WeakMap(),
      Ge = new WeakMap();
    function ze(e) {
      var t = He.get(e);
      if (t != null) return t;
      var n = je(e);
      He.set(e, n);
      var r = function () {
        He.get(e) === n && He.delete(e);
      };
      return (n.then(r, r), n);
    }
    function je(e) {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Ve.get(e);
          if (t == null) {
            var r = {};
            (Ve.set(e, r), (t = r));
          }
          var a = t;
          return (
            yield (G || (G = n("Promise"))).all([
              a.avSyncMetrics === void 0
                ? Ye(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeAVSyncMetrics",
                    ),
                    "consumeAVSyncMetrics",
                  ).then(function (e) {
                    e !== void 0 && (a.avSyncMetrics = e);
                  })
                : null,
              a.webCodecsFatalErrors === void 0
                ? Ye(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeWebCodecsFatalErrorCount",
                    ),
                    "consumeWebCodecsFatalErrorCount",
                  ).then(function (e) {
                    e !== void 0 && (a.webCodecsFatalErrors = e);
                  })
                : null,
              a.decodeOrderMetrics === void 0
                ? Ye(
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
        Ke.apply(this, arguments)
      );
    }
    function Qe(e) {
      return Xe.apply(this, arguments);
    }
    function Xe() {
      return (
        (Xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!Ge.has(e)) {
            var t = o(
                "WAWebVoipIncomingOfferReceivedWallClockStore",
              ).consumeIncomingOfferReceivedWallMs(),
              n = yield Ye(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "consumeIncomingCallWindowShownMs",
                ),
                "consumeIncomingCallWindowShownMs",
              ),
              r = t != null && n != null && n > t ? Math.round(n - t) : null;
            Ge.set(e, r);
          }
        })),
        Xe.apply(this, arguments)
      );
    }
    function Ye(e, t) {
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
        re,
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
    function Je(e, t) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.jsonDataStr;
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
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
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] web stack unavailable, skipping pending fieldstats",
                  ])),
              ),
                We(e));
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
            var c = yield ce(s, (a = ie.get(e)) != null ? a : null),
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
              _ = p ? yield ze(e) : {},
              f = _.avSyncMetrics,
              g = _.decodeOrderMetrics,
              h = _.webCodecsFatalErrors;
            if (
              (f != null && (c = babelHelpers.extends({}, c, f)),
              h != null && (c.videoWebcodecsDecFatalErrorNum = h),
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
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
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                C.videoCaptureAvgFps,
              ));
            var b = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
            b != null &&
              ((c.webVideoEncoderType = b),
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoEncoder] web_video_encoder_type=",
                    "",
                  ])),
                b,
              ));
            var v = typeof c.callId == "string" ? c.callId : null,
              S = e.lobbyEntryPoint;
            if (
              (S != null &&
                ((c.lobbyEntryPoint = S),
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] lobby_entry_point=",
                      "",
                    ])),
                  S,
                )),
              o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
            ) {
              var R = e.callRandomId;
              R != null && (c.callRandomId = R);
            }
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var L = yield o(
                "WAWebVoipCallStartUnifiedSessionStore",
              ).resolveCallUnifiedSessionId(e.unifiedSessionIdAtCallStart);
              L != null && (c.unifiedSessionId = L);
              var W = e.incomingCallUiAction;
              (W != null &&
                o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled() &&
                ((c.incomingCallUiAction = W),
                o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] incoming_call_ui_action=",
                      "",
                    ])),
                  W,
                )),
                Re(c, e.callFromUi),
                Le(c, e.isAppInBgWhenCallStarts),
                De(c, e.callEnterPipModeCount),
                Ee(c, e.calleeOfferToRingT),
                o("WAWebVoipCallReachabilityStore").maybeStampCallReachability(
                  c,
                  e.callReachability,
                ),
                o("WAWebVoipTabStateAtOfferStore").maybeStampTabStateAtOffer(
                  c,
                  e.tabStateAtOffer,
                ),
                o(
                  "WAWebVoipIncomingCallNotificationStateStore",
                ).maybeStampIncomingCallNotificationState(
                  c,
                  e.incomingCallNotificationState,
                ),
                o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled() && (yield ge(c)));
              var q = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeOutgoingCallSetupActiveMs",
                { callId: v },
              );
              (q != null &&
                ((c.outgoingCallSetupActiveMs = q),
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] outgoing_call_setup_active_ms=",
                      "",
                    ])),
                  q,
                )),
                ke(c, Ge.get(e)));
            }
            var U =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              U != null ? U : 0,
            );
            var V = null,
              H = null,
              G = null,
              z = null,
              j = null;
            if (U != null && U > 0) {
              var K = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              K != null &&
                ((V = K.lastVoipActivity),
                (H = K.lastVoipActivityTimestampSec),
                (G = K.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  V != null ? V : "none",
                  H != null ? H : "none",
                  G != null ? G : "none",
                ));
              var Q = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              Q != null &&
                ((z = Q.lastVoipUiActivity),
                (j = Q.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  z != null ? z : "none",
                  j != null ? j : "none",
                ));
            } else
              o("WAWebBackendApi").frontendFireAndForget(
                "clearAllActivityTracking",
                {},
              );
            var X = {};
            (U != null && (X.numAnrs = U),
              V != null && (X.lastVoipActivity = V),
              H != null && (X.lastVoipActivityTimestampSec = H),
              G != null && (X.timeFirstAnrSinceCallStartSec = G),
              z != null && (X.lastVoipUiActivity = z),
              j != null && (X.lastVoipUiActivityTimestampSec = j));
            var Y;
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var J = new (o("WAWebCallWamEvent").CallWamEvent)(c);
              (r("isEmptyObject")(X) ||
                (J.set(X),
                o("WALogger").LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR fields set n=",
                      " act=",
                      " actT=",
                      "s firstT=",
                      " uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  U != null ? U : "null",
                  V != null ? V : "null",
                  H != null ? H : "null",
                  G != null ? G : "null",
                  z != null ? z : "null",
                  j != null ? j : "null",
                )),
                (Y = J));
            } else Y = we(c);
            yield Y.commitAndWaitForFlush(l.uploadInRealtime);
            var Z = p
              ? babelHelpers.extends({}, c, X)
              : babelHelpers.extends({}, c);
            (t != null && p && (Z.userRating = t),
              yield o("WAWebVoipLabMetricsFile").patchLabMetricsSelfRow(Z),
              o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(n),
              o("WAWebVoipCrashRecovery").clearCallRandomIdMarker(
                e.callRandomId,
              ),
              ae.add(e),
              qe(e),
              o("WAWebVoipCallRatingStore").clearPendingFieldstats(e),
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffCompleted(),
              o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                t != null ? t : "none",
              ),
              yield et(i));
          } catch (e) {
            throw (
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffFailed(),
              o("WALogger")
                .ERROR(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
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
        Ze.apply(this, arguments)
      );
    }
    function et(e) {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (
        (tt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            o("WAWebVoipMainThreadLockFixes").readMainThreadLockFix(
              "fs_cleanup",
            ) && !r("justknobx")._("7005");
          if (t) {
            ot(e);
            return;
          }
          yield nt();
        })),
        tt.apply(this, arguments)
      );
    }
    function nt() {
      return rt.apply(this, arguments);
    }
    function rt() {
      return (
        (rt = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
                yield o("WAWebBackendApi").frontendSendAndReceive(
                  "initializeVoipWasm",
                ),
              t = o("WAWebVoipMainThreadLockMarker").startMainThreadLockMarker(
                "fs_cleanup",
                "main",
              );
            try {
              e.cleanupUnfinishedCallStats();
            } finally {
              o("WAWebVoipMainThreadLockODS").logMainThreadLockCallDuration(
                "fs_cleanup",
                o("WAWebVoipMainThreadLockMarker").finishMainThreadLockMarker(
                  t,
                ),
              );
            }
            (yield o("WAWebVoipPersistentFS").syncPersistentFS(e),
              o("WALogger").LOG(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff",
                  ])),
              ));
          } catch (e) {
            (o(
              "WAWebCoreActionsODS",
            ).logCallFieldstatsPersistenceCleanupFailed(),
              o("WALogger")
                .ERROR(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
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
        rt.apply(this, arguments)
      );
    }
    function ot(e) {
      return at.apply(this, arguments);
    }
    function at() {
      return (
        (at = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = window.setTimeout(ut, Z),
            n = it(),
            a = !0;
          try {
            var i = yield e.cleanupUnfinishedCallStats();
            if (((a = !1), n.clearAfterReply(), !i)) {
              (o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
                "no_worker",
              ),
                o("WALogger").LOG(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] VoIP stack skipped the persisted fieldstats cleanup, leaving the file",
                    ])),
                ));
              return;
            }
            var l =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            (yield o("WAWebVoipPersistentFS").syncPersistentFS(l),
              o("WALogger").LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats through the VoIP stack after WAM handoff",
                  ])),
              ));
          } catch (e) {
            if (a && e instanceof o("WACustomError").TimeoutError) {
              n.keepAfterNoReply();
              return;
            }
            (a && n.clearAfterReply(),
              o("WALogger")
                .WARN(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] offloaded persisted fieldstats cleanup failed, leaving the file",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("non-sad")
                .sendLogs("voip-fieldstats-offloaded-cleanup-failed", {
                  employeeSampling: 1,
                  sampling: 0.01,
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                }));
          } finally {
            window.clearTimeout(t);
          }
        })),
        at.apply(this, arguments)
      );
    }
    function it() {
      var e = !1,
        t = window.setTimeout(function () {
          ((e = !0), te++, lt());
        }, ee);
      return {
        clearAfterReply: function () {
          (window.clearTimeout(t),
            e &&
              ((e = !1),
              te--,
              o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
                "late_reply",
              ),
              te === 0 && st()));
        },
        keepAfterNoReply: function () {
          (window.clearTimeout(t),
            e
              ? ((e = !1),
                te--,
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.markVoipStackUnresponsive())
              : lt(),
            o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
              "no_reply",
            ),
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] VoIP stack never answered the offloaded persisted fieldstats cleanup, keeping it marked unresponsive",
                ])),
            ));
        },
      };
    }
    function lt() {
      (o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.markVoipStackUnresponsive(),
        o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
          "timeout",
        ),
        o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
          "marked_unresponsive",
        ),
        o("WALogger")
          .WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] offloaded persisted fieldstats cleanup timed out, marked the VoIP stack unresponsive callState=",
                " recentRpcMethods=",
                "",
              ])),
            o("WAWebVoipWaCallEnums").CallState.getName(
              o("WAWebVoipLocalCallStateStore").getLocalCallState(),
            ),
            o("WAWebVoipRecentRpcMethods").getRecentRpcMethods().join(","),
          )
          .tags("non-sad")
          .sendLogs("voip-fieldstats-offloaded-cleanup-timeout", {
            employeeSampling: 1,
            sampling: 0.01,
            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
          }));
    }
    function st() {
      (o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.clearVoipStackUnresponsive(),
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [Fieldstats] VoIP stack answered the offloaded persisted fieldstats cleanup late, cleared its unresponsive mark",
            ])),
        ));
    }
    function ut() {
      (o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent("slow_5s"),
        o("WALogger")
          .WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] offloaded persisted fieldstats cleanup still running after ",
                "ms callState=",
                " recentRpcMethods=",
                "",
              ])),
            Z,
            o("WAWebVoipWaCallEnums").CallState.getName(
              o("WAWebVoipLocalCallStateStore").getLocalCallState(),
            ),
            o("WAWebVoipRecentRpcMethods").getRecentRpcMethods().join(","),
          )
          .tags("non-sad")
          .sendLogs("voip-fieldstats-offloaded-cleanup-slow", {
            employeeSampling: 1,
            sampling: 0.01,
            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
          }));
    }
    function ct() {
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
    ((l.MEDIA_PERMISSION_LOOKUP_TIMEOUT_MS = ne),
      (l.FRONTEND_VIDEO_SNAPSHOT_TIMEOUT_MS = re),
      (l.handleFieldstatsReady = Ce),
      (l.sendStoredFieldstats = Ae),
      (l.requestStoredFieldstatsSend = Oe),
      (l.syncVoipPersistentFSWithIdleCallback = ct));
  },
  98,
);
