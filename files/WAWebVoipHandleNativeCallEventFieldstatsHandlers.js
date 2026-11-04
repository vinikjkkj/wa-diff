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
      z,
      j = 0,
      K = 6,
      Q = 10,
      X = 15,
      Y = 17,
      J = 3e4,
      Z = 15e3,
      ee = 5e3,
      te = 3e4,
      ne = 0,
      re = 2e3,
      oe = 2e3,
      ae = 5e3;
    function ie() {
      return o("WAWebVoipGatingUtils").isGuestViewer() ? Z : J;
    }
    var le = new WeakSet(),
      se = new WeakMap(),
      ue = new WeakMap(),
      ce = null,
      de = null;
    function me(e, t) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebBrowserApi").getNumCpu(),
            r = o("WAWebBrowserApi").getMemClass(),
            a = r != null ? Math.round(r / 1e3) : null,
            i = o("WAWebVoipDeviceClassUtils").computeDeviceClass(n, a),
            l = babelHelpers.extends({}, e);
          (n != null && (l.numCpuCores = n),
            a != null && (l.totalMemoryGb = a),
            i != null && (l.deviceClass = i),
            (l = _e(l)),
            (l = fe(l, t)));
          var s = o("WAWebVoipFocusTracker").snapshotFocusStats();
          s != null && (l = babelHelpers.extends({}, l, s));
          var u = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
          u != null && (l = babelHelpers.extends({}, l, u));
          var c = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
          c != null && (l = babelHelpers.extends({}, l, c));
          var d = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
          (d != null && (l = babelHelpers.extends({}, l, d)), ge());
          var m = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          m != null && (l = babelHelpers.extends({}, l, m));
          var p = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioCaptureMetrics",
          );
          return (p != null && (l = babelHelpers.extends({}, l, p)), l);
        })),
        pe.apply(this, arguments)
      );
    }
    function _e(e) {
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
    function fe(e, t) {
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
    function ge() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function he(e) {
      try {
        var t = JSON.parse(e);
        return t.is_last_field_stats_report === !0;
      } catch (e) {
        return !1;
      }
    }
    function ye(e) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Pe(e);
          (delete e.micPermission, delete e.cameraPermission);
          var r = yield (z || (z = n("Promise"))).all([
              be(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "getVoipMicPermissionGranted",
                ),
                "mic_permission",
              ),
              t
                ? be(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "getVoipCameraPermissionGranted",
                    ),
                    "camera_permission",
                  )
                : (z || (z = n("Promise"))).resolve(null),
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
        Ce.apply(this, arguments)
      );
    }
    function be(t, n) {
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
        re,
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
    function ve(e) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = o(
              "WAWebVoipWebTransportCallSummary",
            ).getWtCurrentCallTelemetry(),
            i = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr({
              calleeOfferToRingT: o(
                "WAWebVoipCalleeOfferToRingStore",
              ).getCalleeOfferToRingT(),
              callEnterPipModeCount: De(),
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
                  : Le(),
              lobbyVisibleForMs: o(
                "WAWebVoipLobbyVisibilityStore",
              ).getLobbyVisibleForMs(),
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
          ((de = i), a != null && se.set(i, a), He(i));
          var l = he(e);
          l && qe(i);
          var s = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (s == null || s.type !== "web") {
            o("WALogger").WARN(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] stack unavailable, dropping",
                ])),
            );
            return;
          }
          var u = s.parsers.parseFieldstatsData(e),
            c = u.stats.groupCallSegmentIdx,
            d = u.stats.fieldStatsRowType,
            m = u.isLastFieldStatsReport;
          if ((xe(u.eventType, d), m)) {
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
                i.unifiedSessionIdAtCallStart,
              ),
              r("WAWebODS").incr("web.call.fieldstats.final_received"),
              l || qe(i),
              u.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                (Me(u.stats), Ae(u.stats)),
              de === i &&
                (yield Qe(i),
                u.eventType ===
                  o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                  (yield Je(i))),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] last segment stored for rating",
                  ])),
              ));
            return;
          }
          (l && Ve(i), yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var p = Ne(d)
            ? yield me(u.stats, (n = se.get(i)) != null ? n : null)
            : babelHelpers.extends({}, u.stats);
          u.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            p.callTermReason === j &&
            delete p.callTermReason;
          var _ = i.lobbyEntryPoint;
          if (
            (_ != null && (p.lobbyEntryPoint = _),
            o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
          ) {
            var f = i.callRandomId;
            f != null && (p.callRandomId = f);
          }
          if (
            u.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
          ) {
            (o(
              "WAWebCallUserJourneyGating",
            ).isCallUserJourneyLoggingEnabled() &&
              (delete p.micPermission, delete p.cameraPermission),
              Ee(p, i.callFromUi),
              ke(p, i.isAppInBgWhenCallStarts),
              $e(p, i.callEnterPipModeCount),
              o("WAWebVoipCallReachabilityStore").maybeStampCallReachability(
                p,
                i.callReachability,
              ),
              o("WAWebVoipTabStateAtOfferStore").maybeStampTabStateAtOffer(
                p,
                i.tabStateAtOffer,
              ),
              o(
                "WAWebVoipIncomingCallNotificationStateStore",
              ).maybeStampIncomingCallNotificationState(
                p,
                i.incomingCallNotificationState,
              ));
            var g = yield o(
              "WAWebVoipCallStartUnifiedSessionStore",
            ).resolveCallUnifiedSessionId(i.unifiedSessionIdAtCallStart);
            g != null && (p.unifiedSessionId = g);
          }
          u.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType
              .JoinableCall && Re(p, i.lobbyVisibleForMs);
          var h =
            u.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(p)
              : Fe(p);
          h.commit();
        })),
        Se.apply(this, arguments)
      );
    }
    function Re(e, t) {
      o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled() &&
        (e.lobbyEntryPoint ===
        o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
          ? (e.lobbyVisibleT = 0)
          : t != null && (e.lobbyVisibleT = t));
    }
    function Le() {
      var e = o("WAWebVoipLobbyVisibilityStore").getGroupRingLobbyEntryPoint();
      return e != null &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled()
        ? e
        : null;
    }
    function Ee(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLER &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.callFromUi = t);
    }
    function ke(e, t) {
      t != null &&
        Ne(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.isAppInBgWhenCallStarts = t);
    }
    function Ie(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.calleeOfferToRingT = t);
    }
    function Te(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        (e.voipWindowIncomingOfferToLayoutTime = t);
    }
    function De() {
      return o("WAWebVoipGatingUtils").isDocPipEnabled()
        ? o("WAWebVoipCallEnterPipModeCountStore").getCallEnterPipModeCount()
        : null;
    }
    function xe(e, t) {
      e === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
        t === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF &&
        o("WAWebVoipCallEnterPipModeCountStore").resetCallEnterPipModeCount();
    }
    function $e(e, t) {
      t != null &&
        Ne(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.callEnterPipModeCount = t);
    }
    function Pe(e) {
      return e.videoEnabled === !0 || e.videoEnabledAtCallStart === !0;
    }
    function Ne(e) {
      return (
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH
      );
    }
    function Me(e) {
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
    function we(e, t) {
      return e === Q
        ? "anc"
        : e === K && (t === X || t === Y)
          ? "relay_bind"
          : null;
    }
    function Ae(e) {
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
          var l = we(r, a);
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
    function Fe(e) {
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
    function Oe(e) {
      var t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
      return t == null
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send",
              ])),
          ),
          (z || (z = n("Promise"))).resolve())
        : Be(t, e);
    }
    function Be(e, t) {
      var n = ue.get(e);
      if (n != null) return n;
      var r = rt(e, t);
      return (
        ue.set(e, r),
        r.then(
          function () {
            ue.get(e) === r && ue.delete(e);
          },
          function () {
            ue.get(e) === r && ue.delete(e);
          },
        ),
        r
      );
    }
    function We(e) {
      Oe(e).catch(function (e) {
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
    function qe(e) {
      if (!le.has(e)) {
        ce != null && window.clearTimeout(ce.timeoutId);
        var t = window.setTimeout(function () {
          var t;
          if (((t = ce) == null ? void 0 : t.fieldstats) === e) {
            ce = null;
            var n = ue.get(e);
            if (n != null) {
              n.catch(function () {
                Ue(e);
              });
              return;
            }
            (r("WAWebODS").incr("web.call.fieldstats.watchdog_send"),
              Be(e).catch(function (t) {
                (o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] watchdog send failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  Ue(e));
              }));
          }
        }, ie());
        ce = { fieldstats: e, timeoutId: t };
      }
    }
    function Ue(e) {
      !le.has(e) &&
        o("WAWebVoipCallRatingStore").getPendingFieldstats() === e &&
        qe(e);
    }
    function Ve(e) {
      var t = ce;
      t != null &&
        t.fieldstats === e &&
        (window.clearTimeout(t.timeoutId), (ce = null));
    }
    function He(e) {
      var t = ce;
      t != null &&
        t.fieldstats !== e &&
        (window.clearTimeout(t.timeoutId), (ce = null));
    }
    var Ge = new WeakMap(),
      ze = new WeakMap(),
      je = new WeakMap(),
      Ke = new WeakMap();
    function Qe(e) {
      var t = ze.get(e);
      if (t != null) return t;
      var n = Xe(e);
      ze.set(e, n);
      var r = function () {
        ze.get(e) === n && ze.delete(e);
      };
      return (n.then(r, r), n);
    }
    function Xe(e) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Ge.get(e);
          if (t == null) {
            var r = {};
            (Ge.set(e, r), (t = r));
          }
          var a = t;
          return (
            yield (z || (z = n("Promise"))).all([
              a.avSyncMetrics === void 0
                ? nt(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeAVSyncMetrics",
                    ),
                    "consumeAVSyncMetrics",
                  ).then(function (e) {
                    e !== void 0 && (a.avSyncMetrics = e);
                  })
                : null,
              a.webCodecsFatalErrors === void 0
                ? nt(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeWebCodecsFatalErrorCount",
                    ),
                    "consumeWebCodecsFatalErrorCount",
                  ).then(function (e) {
                    e !== void 0 && (a.webCodecsFatalErrors = e);
                  })
                : null,
              a.decodeOrderMetrics === void 0
                ? nt(
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
        Ye.apply(this, arguments)
      );
    }
    function Je(e) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!je.has(e)) {
            var t = o(
                "WAWebVoipIncomingOfferReceivedWallClockStore",
              ).consumeIncomingOfferReceivedWallMs(),
              n = yield nt(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "consumeIncomingCallWindowShownMs",
                ),
                "consumeIncomingCallWindowShownMs",
              ),
              r = t != null && n != null && n > t ? Math.round(n - t) : null;
            je.set(e, r);
          }
        })),
        Ze.apply(this, arguments)
      );
    }
    function et(e, t) {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (
        (tt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.oneToOneOfferCallId;
          if (
            !(
              n == null ||
              e.callSide !== o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE ||
              !Ne(e.fieldStatsRowType) ||
              e.isPendingCall === !0
            )
          ) {
            var r = Ke.get(t);
            r == null &&
              ((r = o("WAPromiseDelays").withTimeout(
                o(
                  "WAWebVoipClosedTabCallRingFields",
                ).takeClosedTabCallRingFields(n),
                ae,
                function () {
                  return (
                    o("WALogger").WARN(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [Fieldstats] closed tab call ring lookup timed out",
                        ])),
                    ),
                    {}
                  );
                },
              )),
              Ke.set(t, r));
            for (var a of Object.entries(yield r)) {
              var i = a[0],
                l = a[1];
              e[i] = l;
            }
          }
        })),
        tt.apply(this, arguments)
      );
    }
    function nt(e, t) {
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
        oe,
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
    function rt(e, t) {
      return ot.apply(this, arguments);
    }
    function ot() {
      return (
        (ot = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.jsonDataStr;
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
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
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] web stack unavailable, skipping pending fieldstats",
                  ])),
              ),
                Ue(e));
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
            var c = yield me(s, (a = se.get(e)) != null ? a : null),
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
              _ = p ? yield Qe(e) : {},
              f = _.avSyncMetrics,
              g = _.decodeOrderMetrics,
              h = _.webCodecsFatalErrors;
            if (
              (f != null && (c = babelHelpers.extends({}, c, f)),
              h != null && (c.videoWebcodecsDecFatalErrorNum = h),
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
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
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                C.videoCaptureAvgFps,
              ));
            var b = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
            b != null &&
              ((c.webVideoEncoderType = b),
              o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
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
              var E = e.incomingCallUiAction;
              (E != null &&
                o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled() &&
                ((c.incomingCallUiAction = E),
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] incoming_call_ui_action=",
                      "",
                    ])),
                  E,
                )),
                Ee(c, e.callFromUi),
                ke(c, e.isAppInBgWhenCallStarts),
                $e(c, e.callEnterPipModeCount),
                Ie(c, e.calleeOfferToRingT),
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
                yield et(c, e),
                o("WAWebVoipCallReachabilityStore").maybeStampCallReachability(
                  c,
                  e.callReachability,
                ),
                o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled() && (yield ye(c)));
              var q = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeOutgoingCallSetupActiveMs",
                { callId: v },
              );
              (q != null &&
                ((c.outgoingCallSetupActiveMs = q),
                o("WALogger").LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] outgoing_call_setup_active_ms=",
                      "",
                    ])),
                  q,
                )),
                Te(c, je.get(e)));
            }
            var U =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
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
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
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
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
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
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
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
            } else Y = Fe(c);
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
              le.add(e),
              Ve(e),
              o("WAWebVoipCallRatingStore").clearPendingFieldstats(e),
              r("WAWebODS").incr("web.call.fieldstats.wam_handoff_completed"),
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                t != null ? t : "none",
              ),
              yield at(i));
          } catch (e) {
            throw (
              r("WAWebODS").incr("web.call.fieldstats.wam_handoff_failed"),
              o("WALogger")
                .ERROR(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
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
        ot.apply(this, arguments)
      );
    }
    function at(e) {
      return it.apply(this, arguments);
    }
    function it() {
      return (
        (it = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            o("WAWebVoipMainThreadLockFixes").readMainThreadLockFix(
              "fs_cleanup",
            ) && !r("justknobx")._("7005");
          if (t) {
            ut(e);
            return;
          }
          yield lt();
        })),
        it.apply(this, arguments)
      );
    }
    function lt() {
      return st.apply(this, arguments);
    }
    function st() {
      return (
        (st = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff",
                  ])),
              ));
          } catch (e) {
            (o(
              "WAWebCoreActionsODS",
            ).logCallFieldstatsPersistenceCleanupFailed(),
              o("WALogger")
                .ERROR(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
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
        st.apply(this, arguments)
      );
    }
    function ut(e) {
      return ct.apply(this, arguments);
    }
    function ct() {
      return (
        (ct = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = window.setTimeout(_t, ee),
            n = o(
              "WAWebVoipOffloadedCleanupQueue",
            ).startOffloadedCleanupQueueTracking(),
            a = dt(n),
            i = !0;
          try {
            var l = yield e.cleanupUnfinishedCallStats();
            if (
              ((i = !1),
              a.clearAfterReply(),
              o("WAWebVoipOffloadedCleanupQueue").reportOffloadedCleanupReply(
                n,
              ),
              !l)
            ) {
              (o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
                "no_worker",
              ),
                o("WALogger").LOG(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] VoIP stack skipped the persisted fieldstats cleanup, leaving the file",
                    ])),
                ));
              return;
            }
            var s =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            (yield o("WAWebVoipPersistentFS").syncPersistentFS(s),
              o("WALogger").LOG(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
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
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
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
        ct.apply(this, arguments)
      );
    }
    function dt(e) {
      var t = !1,
        n = null,
        r = window.setTimeout(function () {
          ((t = !0), ne++, (n = mt(e)));
        }, te);
      return {
        clearAfterReply: function () {
          (window.clearTimeout(r),
            t &&
              ((t = !1),
              ne--,
              o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
                "late_reply",
              ),
              ne === 0 && pt()));
        },
        keepAfterNoReply: function () {
          (window.clearTimeout(r),
            t
              ? ((t = !1),
                ne--,
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.markVoipStackUnresponsive())
              : (n = mt(e)),
            o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadEvent(
              "no_reply",
            ));
          var a = o(
            "WAWebVoipOffloadedCleanupQueue",
          ).reportOffloadedCleanupNoReply(n);
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] VoIP stack never answered the offloaded persisted fieldstats cleanup, keeping it marked unresponsive workerStarted=",
                "",
              ])),
            a,
          );
        },
      };
    }
    function mt(e) {
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
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
    function pt() {
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
    function _t() {
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
            ee,
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
    function ft() {
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
    ((l.MEDIA_PERMISSION_LOOKUP_TIMEOUT_MS = re),
      (l.FRONTEND_VIDEO_SNAPSHOT_TIMEOUT_MS = oe),
      (l.CLOSED_TAB_CALL_RING_LOOKUP_TIMEOUT_MS = ae),
      (l.handleFieldstatsReady = ve),
      (l.sendStoredFieldstats = Oe),
      (l.requestStoredFieldstatsSend = We),
      (l.syncVoipPersistentFSWithIdleCallback = ft));
  },
  98,
);
