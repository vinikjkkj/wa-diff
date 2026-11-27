__d(
  "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
  [
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
    "WAWebODS",
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
    "WAWebVoipClosedTabCallRingFields",
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
    "WAWebVoipOfferAckLatencyStore",
    "WAWebVoipOffloadedCleanupQueue",
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
      re = 2e3,
      oe = 5e3;
    function ae() {
      return o("WAWebVoipGatingUtils").isGuestViewer() ? J : Y;
    }
    var ie = new WeakSet(),
      le = new WeakMap(),
      se = new WeakMap(),
      ue = null,
      ce = null;
    async function de(e, t) {
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
      var m = await o("WAWebBackendApi").frontendSendAndReceive(
        "consumeAudioPlaybackMetrics",
      );
      m != null && (l = babelHelpers.extends({}, l, m));
      var p = await o("WAWebBackendApi").frontendSendAndReceive(
        "consumeAudioCaptureMetrics",
      );
      return (p != null && (l = babelHelpers.extends({}, l, p)), l);
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
    async function ge(t) {
      var n = De(t);
      (delete t.micPermission, delete t.cameraPermission);
      var r = await Promise.all([
          he(
            o("WAWebBackendApi").frontendSendAndReceive(
              "getVoipMicPermissionGranted",
            ),
            "mic_permission",
          ),
          n
            ? he(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "getVoipCameraPermissionGranted",
                ),
                "camera_permission",
              )
            : Promise.resolve(null),
        ]),
        a = r[0],
        i = r[1];
      (a != null &&
        ((t.micPermission = a),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [Fieldstats] mic_permission=",
              "",
            ])),
          String(a),
        )),
        i != null &&
          ((t.cameraPermission = i),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] camera_permission=",
                "",
              ])),
            String(i),
          )));
    }
    function he(e, t) {
      return o("WAPromiseDelays").withTimeout(
        e.then(
          function (e) {
            return e;
          },
          function (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] ",
                      " lookup failed",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(e)),
              null
            );
          },
        ),
        ne,
        function () {
          return (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] ",
                  " lookup timed out",
                ])),
              t,
            ),
            null
          );
        },
      );
    }
    async function ye(e) {
      var t,
        n,
        a = o("WAWebVoipWebTransportCallSummary").getWtCurrentCallTelemetry(),
        i = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr({
          calleeOfferToRingT: o(
            "WAWebVoipCalleeOfferToRingStore",
          ).getCalleeOfferToRingT(),
          callEnterPipModeCount: ke(),
          callFromUi: o("WAWebVoipCallFromUiStore").getCallFromUi(),
          callRandomId: o("WAWebCallRandomIdStore").getCurrentCallRandomId(),
          callReachability: o(
            "WAWebVoipCallReachabilityStore",
          ).getCallReachability(),
          incomingCallNotificationState: o(
            "WAWebVoipIncomingCallNotificationStateStore",
          ).resolveIncomingCallNotificationState(
            o("WAWebVoipIncomingCallUiActionStore").getIncomingCallUiAction(),
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
              : be(),
          lobbyVisibleForMs: o(
            "WAWebVoipLobbyVisibilityStore",
          ).getLobbyVisibleForMs(),
          offerAckLatencyMs: o(
            "WAWebVoipOfferAckLatencyStore",
          ).getOfferAckLatencyMs(),
          oneToOneOfferCallId: o(
            "WAWebVoipTabStateAtOfferStore",
          ).getOneToOneOfferCallId(),
          tabStateAtOffer: o(
            "WAWebVoipTabStateAtOfferStore",
          ).getTabStateAtOffer(),
          unifiedSessionIdAtCallStart: o(
            "WAWebVoipCallStartUnifiedSessionStore",
          ).getCurrentCallStartUnifiedSessionId(),
        });
      ((ce = i), a != null && le.set(i, a), qe(i));
      var l = fe(e);
      l && Oe(i);
      var s = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if (s == null || s.type !== "web") {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [Fieldstats] stack unavailable, dropping",
            ])),
        );
        return;
      }
      var u = s.parsers.parseFieldstatsData(e),
        c = u.stats.groupCallSegmentIdx,
        p = u.stats.fieldStatsRowType,
        _ = u.isLastFieldStatsReport;
      if ((Ie(u.eventType, p), _)) {
        (o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
          o("WAWebVoipIncomingCallUiActionStore").resetIncomingCallUiAction(),
          o(
            "WAWebVoipIncomingCallNotificationStateStore",
          ).resetIncomingCallNotificationState(),
          o("WAWebVoipCallFromUiStore").resetCallFromUi(),
          o("WAWebVoipCallReachabilityStore").resetCallReachability(),
          o("WAWebVoipAppInBgWhenCallStartsStore").resetAppInBgWhenCallStarts(),
          o("WAWebVoipCallEnterPipModeCountStore").resetCallEnterPipModeCount(),
          o("WAWebVoipCalleeOfferToRingStore").resetCalleeOfferToRing(),
          o("WAWebVoipOfferAckLatencyStore").resetOfferAckLatency(),
          o("WAWebVoipTabStateAtOfferStore").resetTabStateAtOffer(),
          o("WAWebVoipLobbyVisibilityStore").resetLobbyVisibility(),
          o(
            "WAWebVoipCallStartUnifiedSessionStore",
          ).releaseCurrentCallStartUnifiedSessionId(
            i.unifiedSessionIdAtCallStart,
          ),
          r("WAWebODS").incr("web.call.fieldstats.final_received"),
          l || Oe(i),
          u.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            ($e(u.stats), Ne(u.stats)),
          ce === i &&
            (await ze(i),
            u.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
              (await Ke(i))),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] last segment stored for rating",
              ])),
          ));
        return;
      }
      (l && We(i), await o("WAWebReleaseToEventLoop").releaseToEventLoop());
      var f = xe(p)
        ? await de(u.stats, (n = le.get(i)) != null ? n : null)
        : babelHelpers.extends({}, u.stats);
      u.eventType ===
        o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
        f.callTermReason === z &&
        delete f.callTermReason;
      var g = i.lobbyEntryPoint;
      if (
        (g != null && (f.lobbyEntryPoint = g),
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
      ) {
        var h = i.callRandomId;
        h != null && (f.callRandomId = h);
      }
      if (
        u.eventType ===
        o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
      ) {
        (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
          (delete f.micPermission, delete f.cameraPermission),
          ve(f, i.callFromUi),
          Se(f, i.isAppInBgWhenCallStarts),
          Te(f, i.callEnterPipModeCount),
          o("WAWebVoipCallReachabilityStore").maybeStampCallReachability(
            f,
            i.callReachability,
          ),
          o("WAWebVoipTabStateAtOfferStore").maybeStampTabStateAtOffer(
            f,
            i.tabStateAtOffer,
          ),
          o(
            "WAWebVoipIncomingCallNotificationStateStore",
          ).maybeStampIncomingCallNotificationState(
            f,
            i.incomingCallNotificationState,
          ));
        var y = await o(
          "WAWebVoipCallStartUnifiedSessionStore",
        ).resolveCallUnifiedSessionId(i.unifiedSessionIdAtCallStart);
        y != null && (f.unifiedSessionId = y);
      }
      u.eventType ===
        o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.JoinableCall &&
        Ce(f, i.lobbyVisibleForMs);
      var C =
        u.eventType ===
        o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
          ? new (o("WAWebCallWamEvent").CallWamEvent)(f)
          : Me(f);
      C.commit();
    }
    function Ce(e, t) {
      o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled() &&
        (e.lobbyEntryPoint ===
        o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
          ? (e.lobbyVisibleT = 0)
          : t != null && (e.lobbyVisibleT = t));
    }
    function be() {
      var e = o("WAWebVoipLobbyVisibilityStore").getGroupRingLobbyEntryPoint();
      return e != null &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled()
        ? e
        : null;
    }
    function ve(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLER &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.callFromUi = t);
    }
    function Se(e, t) {
      t != null &&
        xe(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.isAppInBgWhenCallStarts = t);
    }
    function Re(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.calleeOfferToRingT = t);
    }
    function Le(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLER &&
        (e.offerAckLatencyMs = t);
    }
    function Ee(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        (e.voipWindowIncomingOfferToLayoutTime = t);
    }
    function ke() {
      return o("WAWebVoipGatingUtils").isDocPipEnabled()
        ? o("WAWebVoipCallEnterPipModeCountStore").getCallEnterPipModeCount()
        : null;
    }
    function Ie(e, t) {
      e === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
        t === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF &&
        o("WAWebVoipCallEnterPipModeCountStore").resetCallEnterPipModeCount();
    }
    function Te(e, t) {
      t != null &&
        xe(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.callEnterPipModeCount = t);
    }
    function De(e) {
      return e.videoEnabled === !0 || e.videoEnabledAtCallStart === !0;
    }
    function xe(e) {
      return (
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH
      );
    }
    function $e(e) {
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
    function Pe(e, t) {
      return e === K
        ? "anc"
        : e === j && (t === Q || t === X)
          ? "relay_bind"
          : null;
    }
    function Ne(e) {
      var t = typeof e.callId == "string" ? e.callId : null,
        n = o("WAWebVoipWebTransportCallSummary").getWtCallSummaryForCall(t);
      if (n != null) {
        var a = e.callResult,
          i = e.callSetupErrorType,
          l = e.maxConnectedParticipants;
        if (
          !(
            e.groupCallIsLastSegment !== !0 ||
            typeof a != "number" ||
            typeof l != "number"
          )
        ) {
          var s = Pe(a, i);
          s != null &&
            (r("WAWebODS").incr("web.call.webtransport.group_call_anc"),
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
                String(t),
                a,
                String(i != null ? i : "n/a"),
                l,
                n.numRelayAttempts,
                n.numOpened,
                JSON.stringify(n.attempts),
              )
              .sendLogs("webtransport-group-call-anc"));
        }
      }
    }
    function Me(e) {
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
    function we(e) {
      var t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
      return t == null
        ? (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send",
              ])),
          ),
          Promise.resolve())
        : Ae(t, e);
    }
    function Ae(e, t) {
      var n = se.get(e);
      if (n != null) return n;
      var r = Ye(e, t);
      return (
        se.set(e, r),
        r.then(
          function () {
            se.get(e) === r && se.delete(e);
          },
          function () {
            se.get(e) === r && se.delete(e);
          },
        ),
        r
      );
    }
    function Fe(e) {
      we(e).catch(function (e) {
        o("WALogger")
          .WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] send request failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      });
    }
    function Oe(e) {
      if (!ie.has(e)) {
        ue != null && window.clearTimeout(ue.timeoutId);
        var t = window.setTimeout(function () {
          var t;
          if (((t = ue) == null ? void 0 : t.fieldstats) === e) {
            ue = null;
            var n = se.get(e);
            if (n != null) {
              n.catch(function () {
                Be(e);
              });
              return;
            }
            (r("WAWebODS").incr("web.call.fieldstats.watchdog_send"),
              Ae(e).catch(function (t) {
                (o("WALogger")
                  .WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] watchdog send failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  Be(e));
              }));
          }
        }, ae());
        ue = { fieldstats: e, timeoutId: t };
      }
    }
    function Be(e) {
      !ie.has(e) &&
        o("WAWebVoipCallRatingStore").getPendingFieldstats() === e &&
        Oe(e);
    }
    function We(e) {
      var t = ue;
      t != null &&
        t.fieldstats === e &&
        (window.clearTimeout(t.timeoutId), (ue = null));
    }
    function qe(e) {
      var t = ue;
      t != null &&
        t.fieldstats !== e &&
        (window.clearTimeout(t.timeoutId), (ue = null));
    }
    var Ue = new WeakMap(),
      Ve = new WeakMap(),
      He = new WeakMap(),
      Ge = new WeakMap();
    function ze(e) {
      var t = Ve.get(e);
      if (t != null) return t;
      var n = je(e);
      Ve.set(e, n);
      var r = function () {
        Ve.get(e) === n && Ve.delete(e);
      };
      return (n.then(r, r), n);
    }
    async function je(e) {
      var t = Ue.get(e);
      if (t == null) {
        var n = {};
        (Ue.set(e, n), (t = n));
      }
      var r = t;
      return (
        await Promise.all([
          r.avSyncMetrics === void 0
            ? Xe(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "consumeAVSyncMetrics",
                ),
                "consumeAVSyncMetrics",
              ).then(function (e) {
                e !== void 0 && (r.avSyncMetrics = e);
              })
            : null,
          r.webCodecsFatalErrors === void 0
            ? Xe(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "consumeWebCodecsFatalErrorCount",
                ),
                "consumeWebCodecsFatalErrorCount",
              ).then(function (e) {
                e !== void 0 && (r.webCodecsFatalErrors = e);
              })
            : null,
          r.decodeOrderMetrics === void 0
            ? Xe(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "consumeWebCodecsDecodeOrderMetrics",
                ),
                "consumeWebCodecsDecodeOrderMetrics",
              ).then(function (e) {
                e !== void 0 && (r.decodeOrderMetrics = e);
              })
            : null,
        ]),
        r
      );
    }
    async function Ke(e) {
      if (!He.has(e)) {
        var t = o(
            "WAWebVoipIncomingOfferReceivedWallClockStore",
          ).consumeIncomingOfferReceivedWallMs(),
          n = await Xe(
            o("WAWebBackendApi").frontendSendAndReceive(
              "consumeIncomingCallWindowShownMs",
            ),
            "consumeIncomingCallWindowShownMs",
          ),
          r = t != null && n != null && n > t ? Math.round(n - t) : null;
        He.set(e, r);
      }
    }
    async function Qe(e, t) {
      var n = t.oneToOneOfferCallId;
      if (
        !(
          n == null ||
          e.callSide !== o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE ||
          !xe(e.fieldStatsRowType) ||
          e.isPendingCall === !0
        )
      ) {
        var r = Ge.get(t);
        r == null &&
          ((r = o("WAPromiseDelays").withTimeout(
            o("WAWebVoipClosedTabCallRingFields").takeClosedTabCallRingFields(
              n,
            ),
            oe,
            function () {
              return (
                o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] closed tab call ring lookup timed out",
                    ])),
                ),
                {}
              );
            },
          )),
          Ge.set(t, r));
        for (var a of Object.entries(await r)) {
          var i = a[0],
            l = a[1];
          e[i] = l;
        }
      }
    }
    function Xe(e, t) {
      return o("WAPromiseDelays").withTimeout(
        e.then(
          function (e) {
            return e != null ? e : null;
          },
          function (e) {
            o("WALogger")
              .WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
    async function Ye(e, t) {
      var n = e.jsonDataStr;
      o("WALogger").LOG(
        b ||
          (b = babelHelpers.taggedTemplateLiteralLoose([
            "voip: Sending stored fieldstats with rating: ",
            "",
          ])),
        t != null ? t : "none",
      );
      try {
        var a,
          i = await o("WAWebVoipStackInterface").getVoipStackInterface();
        if (i == null || i.type !== "web") {
          (o("WALogger").WARN(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] web stack unavailable, skipping pending fieldstats",
              ])),
          ),
            Be(e));
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
        var c = await de(s, (a = le.get(e)) != null ? a : null),
          d = o("WAWebVoipBatteryDiagnostics").getBatteryLevelAtCallStart();
        if (d != null) {
          var m = c.browserBatteryLevelEndPct;
          ((c.callStartBatteryPct = d),
            (c.callEndBatteryPct = m),
            typeof m == "number" && (c.callBatteryChangePct = m - d));
        }
        (o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
          await o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
          o("WAWebVoipWindowMetrics").stopWindowMetrics(),
          await o("WAWebVoipBatteryDiagnostics").stopBatteryDiagnostics());
        var p =
            l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call,
          _ = p ? await ze(e) : {},
          f = _.avSyncMetrics,
          g = _.decodeOrderMetrics,
          h = _.webCodecsFatalErrors;
        if (
          (f != null && (c = babelHelpers.extends({}, c, f)),
          h != null && (c.videoWebcodecsDecFatalErrorNum = h),
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
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
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
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
        var C = await i.consumeVideoCaptureFps();
        C != null &&
          ((c = babelHelpers.extends({}, c, C)),
          o("WALogger").LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [VideoCapture] video_capture_avg_fps=",
                "",
              ])),
            C.videoCaptureAvgFps,
          ));
        var w = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
        w != null &&
          ((c.webVideoEncoderType = w),
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [VideoEncoder] web_video_encoder_type=",
                "",
              ])),
            w,
          ));
        var A = typeof c.callId == "string" ? c.callId : null,
          F = e.lobbyEntryPoint;
        if (
          (F != null &&
            ((c.lobbyEntryPoint = F),
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] lobby_entry_point=",
                  "",
                ])),
              F,
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
          var B = await o(
            "WAWebVoipCallStartUnifiedSessionStore",
          ).resolveCallUnifiedSessionId(e.unifiedSessionIdAtCallStart);
          B != null && (c.unifiedSessionId = B);
          var W = e.incomingCallUiAction;
          (W != null &&
            o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
            ((c.incomingCallUiAction = W),
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] incoming_call_ui_action=",
                  "",
                ])),
              W,
            )),
            ve(c, e.callFromUi),
            Se(c, e.isAppInBgWhenCallStarts),
            Te(c, e.callEnterPipModeCount),
            Re(c, e.calleeOfferToRingT),
            Le(c, e.offerAckLatencyMs),
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
            await Qe(c, e),
            o("WAWebVoipCallReachabilityStore").maybeStampCallReachability(
              c,
              e.callReachability,
            ),
            o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
              (await ge(c)));
          var q = await o("WAWebBackendApi").frontendSendAndReceive(
            "consumeOutgoingCallSetupActiveMs",
            { callId: A },
          );
          (q != null &&
            ((c.outgoingCallSetupActiveMs = q),
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] outgoing_call_setup_active_ms=",
                  "",
                ])),
              q,
            )),
            Ee(c, He.get(e)));
        }
        var U =
          await o("WAWebBackendApi").frontendSendAndReceive("consumeAnrCount");
        o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
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
          var K = await o("WAWebBackendApi").frontendSendAndReceive(
            "consumeActivityData",
          );
          K != null &&
            ((V = K.lastVoipActivity),
            (H = K.lastVoipActivityTimestampSec),
            (G = K.timeFirstAnrSinceCallStartSec),
            o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR data act=",
                  " actT=",
                  "s firstAnrT=",
                  "s",
                ])),
              V != null ? V : "none",
              H != null ? H : "none",
              G != null ? G : "none",
            ));
          var Q = await o("WAWebBackendApi").frontendSendAndReceive(
            "consumeUiActivityData",
          );
          Q != null &&
            ((z = Q.lastVoipUiActivity),
            (j = Q.lastVoipUiActivityTimestampSec),
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
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
              U != null ? U : "null",
              V != null ? V : "null",
              H != null ? H : "null",
              G != null ? G : "null",
              z != null ? z : "null",
              j != null ? j : "null",
            )),
            (Y = J));
        } else Y = Me(c);
        await Y.commitAndWaitForFlush(l.uploadInRealtime);
        var Z = p
          ? babelHelpers.extends({}, c, X)
          : babelHelpers.extends({}, c);
        (t != null && p && (Z.userRating = t),
          await o("WAWebVoipLabMetricsFile").patchLabMetricsSelfRow(Z),
          o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(n),
          o("WAWebVoipCrashRecovery").clearCallRandomIdMarker(e.callRandomId),
          ie.add(e),
          We(e),
          o("WAWebVoipCallRatingStore").clearPendingFieldstats(e),
          r("WAWebODS").incr("web.call.fieldstats.wam_handoff_completed"),
          o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Fieldstats sent successfully with user rating: ",
                "",
              ])),
            t != null ? t : "none",
          ),
          await Je(i));
      } catch (e) {
        throw (
          r("WAWebODS").incr("web.call.fieldstats.wam_handoff_failed"),
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
    }
    async function Je(e) {
      var t =
        o("WAWebVoipMainThreadLockFixes").readMainThreadLockFix("fs_cleanup") &&
        !r("justknobx")._("7005");
      if (t) {
        et(e);
        return;
      }
      await Ze();
    }
    async function Ze() {
      try {
        var e =
            await o("WAWebBackendApi").frontendSendAndReceive(
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
            o("WAWebVoipMainThreadLockMarker").finishMainThreadLockMarker(t),
          );
        }
        (await o("WAWebVoipPersistentFS").syncPersistentFS(e),
          o("WALogger").LOG(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff",
              ])),
          ));
      } catch (e) {
        (o("WAWebCoreActionsODS").logCallFieldstatsPersistenceCleanupFailed(),
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
    }
    async function et(e) {
      var t = window.setTimeout(ot, Z),
        n = o(
          "WAWebVoipOffloadedCleanupQueue",
        ).startOffloadedCleanupQueueTracking(),
        a = tt(n),
        i = !0;
      try {
        var l = await e.cleanupUnfinishedCallStats();
        if (
          ((i = !1),
          a.clearAfterReply(),
          o("WAWebVoipOffloadedCleanupQueue").reportOffloadedCleanupReply(n),
          !l)
        ) {
          (o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
            "no_worker",
          ),
            o("WALogger").LOG(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] VoIP stack skipped the persisted fieldstats cleanup, leaving the file",
                ])),
            ));
          return;
        }
        var s =
          await o("WAWebBackendApi").frontendSendAndReceive(
            "initializeVoipWasm",
          );
        (await o("WAWebVoipPersistentFS").syncPersistentFS(s),
          o("WALogger").LOG(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] cleaned up persisted fieldstats through the VoIP stack after WAM handoff",
              ])),
          ));
      } catch (e) {
        if (i && e instanceof o("WACustomError").TimeoutError) {
          a.keepAfterNoReply();
          return;
        }
        (i && a.clearAfterReply(),
          o("WALogger")
            .WARN(
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    function tt(e) {
      var t = !1,
        n = null,
        r = window.setTimeout(function () {
          ((t = !0), te++, (n = nt(e)));
        }, ee);
      return {
        clearAfterReply: function () {
          (window.clearTimeout(r),
            t &&
              ((t = !1),
              te--,
              o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
                "late_reply",
              ),
              te === 0 && rt()));
        },
        keepAfterNoReply: function () {
          (window.clearTimeout(r),
            t
              ? ((t = !1),
                te--,
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.markVoipStackUnresponsive())
              : (n = nt(e)),
            o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
              "no_reply",
            ));
          var a = o(
            "WAWebVoipOffloadedCleanupQueue",
          ).reportOffloadedCleanupNoReply(n);
          o("WALogger").WARN(
            W ||
              (W = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] VoIP stack never answered the offloaded persisted fieldstats cleanup, keeping it marked unresponsive workerStarted=",
                "",
              ])),
            a,
          );
        },
      };
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
        ));
      var t = o(
        "WAWebVoipOffloadedCleanupQueue",
      ).reportOffloadedCleanupQueueAtTimeout(e);
      return (
        o("WALogger")
          .WARN(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] offloaded persisted fieldstats cleanup timed out, marked the VoIP stack unresponsive callState=",
                " recentRpcMethods=",
                " queue=",
                " rpcsBehind=",
                " offerBehind=",
                " workerStarted=",
                "",
              ])),
            o("WAWebVoipWaCallEnums").CallState.getName(
              o("WAWebVoipLocalCallStateStore").getLocalCallState(),
            ),
            o("WAWebVoipRecentRpcMethods").getRecentRpcMethods().join(","),
            t.state,
            t.rpcsBehind,
            t.isOfferBehind,
            t.isStarted,
          )
          .tags("non-sad")
          .sendLogs("voip-fieldstats-offloaded-cleanup-timeout", {
            employeeSampling: 1,
            sampling: 0.01,
            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
          }),
        t
      );
    }
    function rt() {
      (o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.clearVoipStackUnresponsive(),
        o("WALogger").LOG(
          U ||
            (U = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [Fieldstats] VoIP stack answered the offloaded persisted fieldstats cleanup late, cleared its unresponsive mark",
            ])),
        ));
    }
    function ot() {
      (o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent("slow_5s"),
        o("WALogger")
          .WARN(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
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
    function at() {
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
              H ||
                (H = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Successfully synced filesystem in ",
                  "ms",
                ])),
              t,
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                G ||
                  (G = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      });
    }
    ((l.MEDIA_PERMISSION_LOOKUP_TIMEOUT_MS = ne),
      (l.FRONTEND_VIDEO_SNAPSHOT_TIMEOUT_MS = re),
      (l.CLOSED_TAB_CALL_RING_LOOKUP_TIMEOUT_MS = oe),
      (l.handleFieldstatsReady = ye),
      (l.sendStoredFieldstats = we),
      (l.requestStoredFieldstatsSend = Fe),
      (l.syncVoipPersistentFSWithIdleCallback = at));
  },
  98,
);
