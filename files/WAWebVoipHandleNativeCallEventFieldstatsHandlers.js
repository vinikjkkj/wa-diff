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
      H = 0,
      G = 6,
      z = 10,
      j = 15,
      K = 17,
      Q = 3e4,
      X = 15e3,
      Y = 5e3,
      J = 2e3,
      Z = 2e3;
    function ee() {
      return o("WAWebVoipGatingUtils").isGuestViewer() ? X : Q;
    }
    var te = new WeakSet(),
      ne = new WeakMap(),
      re = new WeakMap(),
      oe = null,
      ae = null;
    function ie(e, t) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebBrowserApi").getNumCpu(),
            r = o("WAWebBrowserApi").getMemClass(),
            a = r != null ? Math.round(r / 1e3) : null,
            i = o("WAWebVoipDeviceClassUtils").computeDeviceClass(n, a),
            l = babelHelpers.extends({}, e);
          (n != null && (l.numCpuCores = n),
            a != null && (l.totalMemoryGb = a),
            i != null && (l.deviceClass = i),
            (l = se(l)),
            (l = ue(l, t)));
          var s = o("WAWebVoipFocusTracker").snapshotFocusStats();
          s != null && (l = babelHelpers.extends({}, l, s));
          var u = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
          u != null && (l = babelHelpers.extends({}, l, u));
          var c = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
          c != null && (l = babelHelpers.extends({}, l, c));
          var d = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
          (d != null && (l = babelHelpers.extends({}, l, d)), ce());
          var m = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          m != null && (l = babelHelpers.extends({}, l, m));
          var p = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioCaptureMetrics",
          );
          return (p != null && (l = babelHelpers.extends({}, l, p)), l);
        })),
        le.apply(this, arguments)
      );
    }
    function se(e) {
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
    function ue(e, t) {
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
    function ce() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function de(e) {
      try {
        var t = JSON.parse(e);
        return t.is_last_field_stats_report === !0;
      } catch (e) {
        return !1;
      }
    }
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ke(e);
          (delete e.micPermission, delete e.cameraPermission);
          var r = yield (V || (V = n("Promise"))).all([
              _e(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "getVoipMicPermissionGranted",
                ),
                "mic_permission",
              ),
              t
                ? _e(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "getVoipCameraPermissionGranted",
                    ),
                    "camera_permission",
                  )
                : (V || (V = n("Promise"))).resolve(null),
            ]),
            a = r[0],
            i = r[1];
          (a != null &&
            ((e.micPermission = a),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] mic_permission=",
                  "",
                ])),
              String(a),
            )),
            i != null &&
              ((e.cameraPermission = i),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] camera_permission=",
                    "",
                  ])),
                String(i),
              )));
        })),
        pe.apply(this, arguments)
      );
    }
    function _e(t, n) {
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
        J,
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
    function fe(e) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = o(
              "WAWebVoipWebTransportCallSummary",
            ).getWtCurrentCallTelemetry(),
            a = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr({
              calleeOfferToRingT: o(
                "WAWebVoipCalleeOfferToRingStore",
              ).getCalleeOfferToRingT(),
              callEnterPipModeCount: Re(),
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
                  : ye(),
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
          ((ae = a), r != null && ne.set(a, r), Oe(a));
          var i = de(e);
          i && we(a);
          var l = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (l == null || l.type !== "web") {
            o("WALogger").WARN(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] stack unavailable, dropping",
                ])),
            );
            return;
          }
          var s = l.parsers.parseFieldstatsData(e),
            u = s.stats.groupCallSegmentIdx,
            c = s.stats.fieldStatsRowType,
            d = s.isLastFieldStatsReport;
          if ((Le(s.eventType, c), d)) {
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
              i || we(a),
              s.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                (Te(s.stats), xe(s.stats)),
              ae === a &&
                (yield Ue(a),
                s.eventType ===
                  o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                  (yield Ge(a))),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] last segment stored for rating",
                  ])),
              ));
            return;
          }
          (i && Fe(a), yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var m = Ie(c)
            ? yield ie(s.stats, (n = ne.get(a)) != null ? n : null)
            : babelHelpers.extends({}, s.stats);
          s.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            m.callTermReason === H &&
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
              Ce(m, a.callFromUi),
              be(m, a.isAppInBgWhenCallStarts),
              Ee(m, a.callEnterPipModeCount),
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
              .JoinableCall && he(m, a.lobbyVisibleForMs);
          var g =
            s.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(m)
              : $e(m);
          g.commit();
        })),
        ge.apply(this, arguments)
      );
    }
    function he(e, t) {
      o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled() &&
        (e.lobbyEntryPoint ===
        o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
          ? (e.lobbyVisibleT = 0)
          : t != null && (e.lobbyVisibleT = t));
    }
    function ye() {
      var e = o("WAWebVoipLobbyVisibilityStore").getGroupRingLobbyEntryPoint();
      return e != null &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled()
        ? e
        : null;
    }
    function Ce(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLER &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.callFromUi = t);
    }
    function be(e, t) {
      t != null &&
        Ie(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.isAppInBgWhenCallStarts = t);
    }
    function ve(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.calleeOfferToRingT = t);
    }
    function Se(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        (e.voipWindowIncomingOfferToLayoutTime = t);
    }
    function Re() {
      return o("WAWebVoipGatingUtils").isDocPipEnabled()
        ? o("WAWebVoipCallEnterPipModeCountStore").getCallEnterPipModeCount()
        : null;
    }
    function Le(e, t) {
      e === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
        t === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF &&
        o("WAWebVoipCallEnterPipModeCountStore").resetCallEnterPipModeCount();
    }
    function Ee(e, t) {
      t != null &&
        Ie(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.callEnterPipModeCount = t);
    }
    function ke(e) {
      return e.videoEnabled === !0 || e.videoEnabledAtCallStart === !0;
    }
    function Ie(e) {
      return (
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH
      );
    }
    function Te(e) {
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
    function De(e, t) {
      return e === z
        ? "anc"
        : e === G && (t === j || t === K)
          ? "relay_bind"
          : null;
    }
    function xe(e) {
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
          var l = De(r, a);
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
    function $e(e) {
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
    function Pe(e) {
      var t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
      return t == null
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send",
              ])),
          ),
          (V || (V = n("Promise"))).resolve())
        : Ne(t, e);
    }
    function Ne(e, t) {
      var n = re.get(e);
      if (n != null) return n;
      var r = Ke(e, t);
      return (
        re.set(e, r),
        r.then(
          function () {
            re.get(e) === r && re.delete(e);
          },
          function () {
            re.get(e) === r && re.delete(e);
          },
        ),
        r
      );
    }
    function Me(e) {
      Pe(e).catch(function (e) {
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
    function we(e) {
      if (!te.has(e)) {
        oe != null && window.clearTimeout(oe.timeoutId);
        var t = window.setTimeout(function () {
          var t;
          if (((t = oe) == null ? void 0 : t.fieldstats) === e) {
            oe = null;
            var n = re.get(e);
            if (n != null) {
              n.catch(function () {
                Ae(e);
              });
              return;
            }
            (o("WAWebCoreActionsODS").logCallFieldstatsWatchdogSend(),
              Ne(e).catch(function (t) {
                (o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] watchdog send failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  Ae(e));
              }));
          }
        }, ee());
        oe = { fieldstats: e, timeoutId: t };
      }
    }
    function Ae(e) {
      !te.has(e) &&
        o("WAWebVoipCallRatingStore").getPendingFieldstats() === e &&
        we(e);
    }
    function Fe(e) {
      var t = oe;
      t != null &&
        t.fieldstats === e &&
        (window.clearTimeout(t.timeoutId), (oe = null));
    }
    function Oe(e) {
      var t = oe;
      t != null &&
        t.fieldstats !== e &&
        (window.clearTimeout(t.timeoutId), (oe = null));
    }
    var Be = new WeakMap(),
      We = new WeakMap(),
      qe = new WeakMap();
    function Ue(e) {
      var t = We.get(e);
      if (t != null) return t;
      var n = Ve(e);
      We.set(e, n);
      var r = function () {
        We.get(e) === n && We.delete(e);
      };
      return (n.then(r, r), n);
    }
    function Ve(e) {
      return He.apply(this, arguments);
    }
    function He() {
      return (
        (He = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Be.get(e);
          if (t == null) {
            var r = {};
            (Be.set(e, r), (t = r));
          }
          var a = t;
          return (
            yield (V || (V = n("Promise"))).all([
              a.avSyncMetrics === void 0
                ? je(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeAVSyncMetrics",
                    ),
                    "consumeAVSyncMetrics",
                  ).then(function (e) {
                    e !== void 0 && (a.avSyncMetrics = e);
                  })
                : null,
              a.webCodecsFatalErrors === void 0
                ? je(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeWebCodecsFatalErrorCount",
                    ),
                    "consumeWebCodecsFatalErrorCount",
                  ).then(function (e) {
                    e !== void 0 && (a.webCodecsFatalErrors = e);
                  })
                : null,
              a.decodeOrderMetrics === void 0
                ? je(
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
        He.apply(this, arguments)
      );
    }
    function Ge(e) {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!qe.has(e)) {
            var t = o(
                "WAWebVoipIncomingOfferReceivedWallClockStore",
              ).consumeIncomingOfferReceivedWallMs(),
              n = yield je(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "consumeIncomingCallWindowShownMs",
                ),
                "consumeIncomingCallWindowShownMs",
              ),
              r = t != null && n != null && n > t ? Math.round(n - t) : null;
            qe.set(e, r);
          }
        })),
        ze.apply(this, arguments)
      );
    }
    function je(e, t) {
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
        Z,
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
    function Ke(e, t) {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (
        (Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.jsonDataStr;
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
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
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] web stack unavailable, skipping pending fieldstats",
                  ])),
              ),
                Ae(e));
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
            var c = yield ie(s, (a = ne.get(e)) != null ? a : null),
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
              _ = p ? yield Ue(e) : {},
              f = _.avSyncMetrics,
              g = _.decodeOrderMetrics,
              h = _.webCodecsFatalErrors;
            if (
              (f != null && (c = babelHelpers.extends({}, c, f)),
              h != null && (c.videoWebcodecsDecFatalErrorNum = h),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
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
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                C.videoCaptureAvgFps,
              ));
            var b = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
            b != null &&
              ((c.webVideoEncoderType = b),
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] lobby_entry_point=",
                      "",
                    ])),
                  S,
                )),
              o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
            ) {
              var O = e.callRandomId;
              O != null && (c.callRandomId = O);
            }
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var B = yield o(
                "WAWebVoipCallStartUnifiedSessionStore",
              ).resolveCallUnifiedSessionId(e.unifiedSessionIdAtCallStart);
              B != null && (c.unifiedSessionId = B);
              var W = e.incomingCallUiAction;
              (W != null &&
                o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled() &&
                ((c.incomingCallUiAction = W),
                o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] incoming_call_ui_action=",
                      "",
                    ])),
                  W,
                )),
                Ce(c, e.callFromUi),
                be(c, e.isAppInBgWhenCallStarts),
                Ee(c, e.callEnterPipModeCount),
                ve(c, e.calleeOfferToRingT),
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
                ).isCallUserJourneyLoggingEnabled() && (yield me(c)));
              var q = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeOutgoingCallSetupActiveMs",
                { callId: v },
              );
              (q != null &&
                ((c.outgoingCallSetupActiveMs = q),
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] outgoing_call_setup_active_ms=",
                      "",
                    ])),
                  q,
                )),
                Se(c, qe.get(e)));
            }
            var U =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
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
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
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
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
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
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
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
            } else Y = $e(c);
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
              te.add(e),
              Fe(e),
              o("WAWebVoipCallRatingStore").clearPendingFieldstats(e),
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffCompleted(),
              o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                t != null ? t : "none",
              ),
              yield Xe(i));
          } catch (e) {
            throw (
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffFailed(),
              o("WALogger")
                .ERROR(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
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
        Qe.apply(this, arguments)
      );
    }
    function Xe(e) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            o("WAWebVoipMainThreadLockFixes").readMainThreadLockFix(
              "fs_cleanup",
            ) && !r("justknobx")._("7005");
          if (t) {
            et(e);
            return;
          }
          yield Je();
        })),
        Ye.apply(this, arguments)
      );
    }
    function Je() {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff",
                  ])),
              ));
          } catch (e) {
            (o(
              "WAWebCoreActionsODS",
            ).logCallFieldstatsPersistenceCleanupFailed(),
              o("WALogger")
                .ERROR(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
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
        Ze.apply(this, arguments)
      );
    }
    function et(e) {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (
        (tt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = window.setTimeout(rt, Y),
            n = !0;
          try {
            var a = yield e.cleanupUnfinishedCallStats();
            if (((n = !1), !a)) {
              (o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
                "no_worker",
              ),
                o("WALogger").LOG(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] VoIP stack skipped the persisted fieldstats cleanup, leaving the file",
                    ])),
                ));
              return;
            }
            var i =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            (yield o("WAWebVoipPersistentFS").syncPersistentFS(i),
              o("WALogger").LOG(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats through the VoIP stack after WAM handoff",
                  ])),
              ));
          } catch (e) {
            if (n && e instanceof o("WACustomError").TimeoutError) {
              nt(e);
              return;
            }
            o("WALogger")
              .WARN(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] offloaded persisted fieldstats cleanup failed, leaving the file",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("non-sad")
              .sendLogs("voip-fieldstats-offloaded-cleanup-failed", {
                employeeSampling: 1,
                sampling: 0.01,
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
              });
          } finally {
            window.clearTimeout(t);
          }
        })),
        tt.apply(this, arguments)
      );
    }
    function nt(e) {
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
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] offloaded persisted fieldstats cleanup timed out, marked the VoIP stack unresponsive callState=",
                " recentRpcMethods=",
                "",
              ])),
            o("WAWebVoipWaCallEnums").CallState.getName(
              o("WAWebVoipLocalCallStateStore").getLocalCallState(),
            ),
            o("WAWebVoipRecentRpcMethods").getRecentRpcMethods().join(","),
          )
          .catching(e)
          .tags("non-sad")
          .sendLogs("voip-fieldstats-offloaded-cleanup-timeout", {
            employeeSampling: 1,
            sampling: 0.01,
            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
          }));
    }
    function rt() {
      (o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent("slow_5s"),
        o("WALogger")
          .WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] offloaded persisted fieldstats cleanup still running after ",
                "ms callState=",
                " recentRpcMethods=",
                "",
              ])),
            Y,
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
    function ot() {
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
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Successfully synced filesystem in ",
                  "ms",
                ])),
              t,
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      });
    }
    ((l.MEDIA_PERMISSION_LOOKUP_TIMEOUT_MS = J),
      (l.FRONTEND_VIDEO_SNAPSHOT_TIMEOUT_MS = Z),
      (l.handleFieldstatsReady = fe),
      (l.sendStoredFieldstats = Pe),
      (l.requestStoredFieldstatsSend = Me),
      (l.syncVoipPersistentFSWithIdleCallback = ot));
  },
  98,
);
