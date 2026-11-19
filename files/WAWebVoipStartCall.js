__d(
  "WAWebVoipStartCall",
  [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WAComms",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebAdvSyncDeviceListApi",
    "WAWebBuildConstants",
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebCoreActionsODS",
    "WAWebEnsureVoipInited",
    "WAWebEnvironment",
    "WAWebFbtIntlList",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebNoop",
    "WAWebNotificationIconUtils",
    "WAWebODS",
    "WAWebOpenCoexCallingFirstTimeModalUtils",
    "WAWebPageVisibilityRecency",
    "WAWebPipController",
    "WAWebSendMsgDatabaseJob",
    "WAWebSendTcTokenChatAction",
    "WAWebShouldShowCallButtons",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserUtils",
    "WAWebUsernameTypes",
    "WAWebVoipActionWriteCallLogEventUpdateJoinable",
    "WAWebVoipActionWriteCallLogInviteeLoadable",
    "WAWebVoipActivityTracker",
    "WAWebVoipAutoPopoutLoader",
    "WAWebVoipBootInitDecision",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCallFromUiStore",
    "WAWebVoipCallIdProvider",
    "WAWebVoipCancelOutgoingCall",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipJoinVoiceChat",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipOngoingCallJoinDevices",
    "WAWebVoipOutgoingCallBlockedLog",
    "WAWebVoipOutgoingCallConsent",
    "WAWebVoipOutgoingCallPreSetup",
    "WAWebVoipOutgoingCallQpl",
    "WAWebVoipOutgoingSetupLatencyMode",
    "WAWebVoipOutgoingSetupLatencyStore",
    "WAWebVoipPeerTcToken",
    "WAWebVoipStackInterface",
    "WAWebVoipStartCallPermissions",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiVideoCallLoadable",
    "WAWebVoipUiVideoGroupCallLoadable",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "getErrorSafe",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
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
      j,
      K,
      Q,
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne,
      re,
      oe,
      ae = oe || (oe = o("react")),
      ie = "#aa6627",
      le = 3e4,
      se = 6e4,
      ue = (e = n("cr:17219")) != null ? e : {},
      ce = ue.getWindowsBridge;
    function de(e, t) {
      var n;
      return (n = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null
        ? void 0
        : n.maybePreOpenAutoPopoutForOutgoingCall(e, t);
    }
    function me(e) {
      var t;
      (t = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null ||
        t.closePreOpenedAutoPopout(e);
    }
    function pe() {
      var e, t;
      return (e =
        (t = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null
          ? void 0
          : t.awaitAutoPopoutReadyOrAbandon()) != null
        ? e
        : (re || (re = n("Promise"))).resolve();
    }
    var _e = 5;
    function fe(e, t) {
      return e != null && t != null ? t - e : null;
    }
    function ge(e, t) {
      var n = t.coexModalMs,
        r = t.devicePermissionsMs,
        a = t.intentTs,
        i = t.successTs;
      if (!(a == null || i == null)) {
        var l = i - a - (r != null ? r : 0) - (n != null ? n : 0);
        l < 0 ||
          o("WAWebVoipOutgoingSetupLatencyStore").setOutgoingCallSetupActiveMs(
            Math.round(l),
            e,
          );
      }
    }
    function he(e, t) {
      return e().then(
        function () {},
        function (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: bundle preload failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs(t);
        },
      );
    }
    function ye() {
      return he(
        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
        "voip-preload-group-call-bundle",
      );
    }
    function Ce(e) {
      r("WAWebEnvironment").isWindows ||
        (r("WAWebCallCollection").setPendingOutgoingCall({
          abortController: e.abortController,
          isGroup: e.isGroup,
          isJoin: e.isJoin,
          isVideo: e.isVideo,
        }),
        r("WAWebPipController").openVoipUiPiPForOutgoing());
    }
    function be(e) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Se(e);
          return t.status === "started" ? t.readiness : t;
        })),
        ve.apply(this, arguments)
      );
    }
    function Se(e) {
      var t, n;
      if (
        r("WAWebCallCollection").pendingOutgoingCall != null ||
        ((t = r("WAWebCallCollection").pendingCallTransferLobby) == null
          ? void 0
          : t.isJoining) === !0
      )
        return (
          o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: outgoing call already pending; ignoring duplicate start",
                ])),
            )
            .color(ie),
          me(e.popoutId),
          { notReady: { reason: "duplicate_start" }, status: "not_ready" }
        );
      e.isJoin || o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock();
      var a = new AbortController();
      ((n = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null ||
        n.closePreOpenedAutoPopoutOnAbort(e.popoutId, a.signal),
        Ce({
          abortController: a,
          isGroup: e.isGroup,
          isJoin: e.isJoin,
          isVideo: e.isVideo,
        }));
      var i = Re(a);
      return (
        o("WAWebVoipOutgoingCallBlockedLog").logOutgoingCallBlockedWhenNotReady(
          i,
        ),
        { abortController: a, readiness: i, status: "started" }
      );
    }
    function Re(e) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebEnsureVoipInited").ensureVoipInitialized(
            "call",
            e.signal,
          );
          t.catch(r("WAWebNoop"));
          try {
            yield r("WAPromiseRaceAbort")(t, e.signal);
          } catch (t) {
            if (e.signal.aborted)
              return (
                o("WALogger")
                  .LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing call cancelled while waiting for VoIP init",
                      ])),
                  )
                  .color(ie),
                { notReady: { reason: "user_cancelled" }, status: "not_ready" }
              );
            if (
              (o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
              t instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError)
            )
              return (
                o("WALogger")
                  .LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing call stopped because VoIP init requires reload",
                      ])),
                  )
                  .color(ie),
                {
                  notReady: {
                    reason: "reload_required",
                    reloadReason: t.reason,
                  },
                  status: "not_ready",
                }
              );
            var n = r("getErrorSafe")(t);
            return (
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: outgoing call: VoIP init failed, aborting",
                    ])),
                )
                .catching(n)
                .sendLogs("voip-outgoing-ensure-init-failed"),
              o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal(),
              {
                notReady: { initErrorName: n.name, reason: "init_failed" },
                status: "not_ready",
              }
            );
          }
          return (
            o("WAWebVoipGatingUtils").isWebCallingUiEnabled() &&
              r("JSResourceForInteraction")("WAWebVoipSctpPrewarm")
                .__setRef("WAWebVoipStartCall")
                .load()
                .then(
                  function (e) {
                    e();
                  },
                  function (e) {
                    o("WALogger")
                      .WARN(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: outgoing-intent SCTP prewarm module failed to load",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  },
                ),
            { abortController: e, status: "ready" }
          );
        })),
        Le.apply(this, arguments)
      );
    }
    function Ee(e, t, n, r, o, a) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l, s;
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = 0),
              a === void 0 && (a = null),
              !(yield o("WAWebVoipOutgoingCallConsent").hasOutgoingCallConsent(
                i.entryTrust,
                e,
                t,
              )))
            )
              return (o("WAWebVoipCallIdProvider").resetPendingCallId(), !1);
            var u = o(
                "WAWebOpenCoexCallingFirstTimeModalUtils",
              ).willShowCoexCallingFirstTimeModal(e)
                ? null
                : de(t, !1),
              c =
                (l =
                  (s = globalThis.document) == null
                    ? void 0
                    : s.visibilityState) != null
                  ? l
                  : "unknown",
              d = o("WAWebVoipOutgoingCallQpl").startVoipOutgoingCallQpl({
                bool: {
                  boot_deferred: o(
                    "WAWebVoipBootInitDecision",
                  ).isDeferredVoipBootInitEnabled(),
                  is_video: t,
                  is_hidden_at_start: c !== "visible",
                  socket_connected_at_start: o("WAComms").isSocketConnected(),
                  voip_init_in_flight_at_start: o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight(),
                  voip_inited_at_start: o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getIsVoipInited(),
                  was_hidden_within_30s: o(
                    "WAWebPageVisibilityRecency",
                  ).wasDocumentHiddenWithinMs(le),
                },
                int: {
                  call_from_ui: n != null ? n : 0,
                  ms_since_visibility_visible: Math.round(
                    o("WAWebPageVisibilityRecency").getMsSinceDocumentVisible(),
                  ),
                  last_hidden_duration_ms: Math.round(
                    o("WAWebPageVisibilityRecency").getLastHiddenDurationMs(),
                  ),
                  ms_since_last_socket_rx: Math.round(
                    o("WAComms").getMsSinceLastInboundRx(),
                  ),
                },
                string: { visibility_state_at_start: c },
              });
            try {
              var m = yield Te(d, e, t, n, r, a, u);
              return m;
            } catch (e) {
              throw (
                me(u),
                d.isActive() &&
                  o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
                    d,
                    "unexpected_error",
                  ),
                e
              );
            }
          },
        )),
        ke.apply(this, arguments)
      );
    }
    function Ie(e) {
      if (o("WAWebVoipOutgoingSetupLatencyMode").isSocketHealthCheckEnabled()) {
        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
          e,
          o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
            .SOCKET_HEALTH_CHECK_START,
        );
        var t = !1;
        ((!o("WAComms").isSocketConnected() ||
          o("WAComms").getMsSinceLastInboundRx() > se) &&
          (o("WAComms").forceAbortSocketConnection(),
          o("WAComms").forceResetSocketLoop(),
          (t = !0)),
          o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(e, {
            bool: { socket_reconnect_triggered: t },
          }),
          o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
            e,
            o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
              .SOCKET_HEALTH_CHECK_END,
          ));
      }
    }
    function Te(e, t, n, r, o, a, i) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, u) {
            var c = o("WAWebVoipOutgoingCallPreSetup").nowMs(),
              d =
                s != null
                  ? s
                  : o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
            if (
              (o("WAWebVoipCallIdProvider").resetPendingCallId(),
              o("WAWebVoipCallFromUiStore").setCallFromUi(i),
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded())
            )
              return (
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
                  e,
                  "call_blocked",
                ),
                me(u),
                !1
              );
            (o("WAWebVoipActivityTracker").startActivityTracking(),
              o("WAWebVoipActivityTracker").startUiActivityTracking(),
              o(
                "WAWebVoipStartCallPermissions",
              ).preloadStartCallPermissionDialog(),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .VOIP_READY_START,
              ));
            var m = yield xe(e, t, a, u);
            if (m == null) return !1;
            var p = m.devicePermissionsMs,
              _ = m.peerPnWid,
              f = m.peerWid,
              g = m.permission,
              h = m.signal,
              y = o("WAWebVoipOutgoingCallPreSetup").nowMs();
            (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .COEX_FIRST_TIME_MODAL_START,
            ),
              o(
                "WAWebOpenCoexCallingFirstTimeModalUtils",
              ).willShowCoexCallingFirstTimeModal(t) && me(u));
            var R = yield o(
                "WAWebOpenCoexCallingFirstTimeModalUtils",
              ).maybeShowCoexCallingSMBFirstTimeModal(),
              L = yield o(
                "WAWebOpenCoexCallingFirstTimeModalUtils",
              ).maybeShowCoexCallingConsumerFirstTimeModal(t);
            ((R || L) &&
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(
                e,
                { bool: { coex_first_time_modal_shown: !0 } },
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .COEX_FIRST_TIME_MODAL_END,
              ));
            var E = fe(y, o("WAWebVoipOutgoingCallPreSetup").nowMs());
            (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .SETUP_START,
            ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SETUP_STACK_INTERFACE_START,
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SETUP_FANOUT_LIST_START,
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SETUP_GET_TC_TOKEN_START,
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SETUP_SEND_TC_TOKEN_START,
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SETUP_UI_BUNDLE_PRELOAD_START,
              ),
              a &&
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .SETUP_VIDEO_BUNDLE_PRELOAD_START,
                ));
            var k = (re || (re = n("Promise"))).all([
              o("WAWebVoipStackInterface")
                .getVoipStackInterface()
                .then(function (t) {
                  return (
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                      e,
                      o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                        .SETUP_STACK_INTERFACE_END,
                    ),
                    t
                  );
                }),
              o("WAWebSendMsgDatabaseJob")
                .getFanOutListJob([f])
                .then(function (t) {
                  return (
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                      e,
                      o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                        .SETUP_FANOUT_LIST_END,
                    ),
                    t
                  );
                }),
              o("WAWebVoipPeerTcToken")
                .fetchPeerTcToken(t)
                .then(function (t) {
                  return (
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                      e,
                      o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                        .SETUP_GET_TC_TOKEN_END,
                    ),
                    t
                  );
                }),
              o("WAWebSendTcTokenChatAction")
                .sendTcToken(f)
                .then(function (t) {
                  return (
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                      e,
                      o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                        .SETUP_SEND_TC_TOKEN_END,
                    ),
                    t
                  );
                }),
              he(
                o("WAWebVoipUiLoadable").requireBundle,
                "voip-start-call-preload-ui",
              ).then(function (t) {
                return (
                  o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                    e,
                    o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                      .SETUP_UI_BUNDLE_PRELOAD_END,
                  ),
                  t
                );
              }),
              a
                ? he(
                    o("WAWebVoipUiVideoCallLoadable").requireBundle,
                    "voip-start-call-preload-video",
                  ).then(function (t) {
                    return (
                      o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                        e,
                        o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                          .SETUP_VIDEO_BUNDLE_PRELOAD_END,
                      ),
                      t
                    );
                  })
                : void 0,
            ]);
            k.catch(r("WAWebNoop"));
            try {
              var I = yield r("WAPromiseRaceAbort")(k, h),
                T = I[0],
                D = I[1],
                x = I[2];
              if (
                (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .SETUP_END,
                ),
                T == null)
              )
                return (
                  o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipCall: voipStackInterface is null",
                        ])),
                    )
                    .sendLogs(
                      "voip: startWAWebVoipCall: voipStackInterface is null",
                    ),
                  o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
                    e,
                    "voip_stack_interface_null",
                  ),
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  !1
                );
              u != null && (yield r("WAPromiseRaceAbort")(pe(), h));
              var $ = ot(D, "callStart");
              if (
                (o("WALogger")
                  .LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: Placing LID call",
                      ])),
                  )
                  .color(ie),
                o("WAWebVoipGatingUtils").isWinHybridPlusEnabled())
              ) {
                var P;
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      'voip: [HYBRID+] placing 1:1 call via "',
                      '" stack (expect "web" = WASM)',
                    ])),
                  (P = T == null ? void 0 : T.type) != null ? P : "null",
                );
              }
              (o("WAWebVoipActivityTracker").trackActivity(
                a
                  ? o("WAWebVoipActivityTracker").VoipActivity
                      .START_OUTGOING_VIDEO_CALL
                  : o("WAWebVoipActivityTracker").VoipActivity
                      .START_OUTGOING_AUDIO_CALL,
              ),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .USER_INITIATE_OUTGOING_CALL,
                ),
                o("WAWebCoreActionsODS").logCallAttempt(),
                a
                  ? r("WAWebODS").incr("web.call.outgoing.video")
                  : r("WAWebODS").incr("web.call.outgoing.audio"),
                o("WAWebVoipStartCallPermissions").markCallStart(d, g),
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .START_CALL_START,
                ),
                yield T.startCall(
                  f,
                  $,
                  d,
                  a,
                  (_ != null ? _ : f).toString({ legacy: !0 }),
                  !1,
                  x,
                  i,
                  l,
                  null,
                ),
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .START_CALL_END,
                ),
                ge(d, {
                  coexModalMs: E,
                  devicePermissionsMs: p,
                  intentTs: c,
                  successTs: o("WAWebVoipOutgoingCallPreSetup").nowMs(),
                }),
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplSuccess(e));
            } catch (t) {
              if (h.aborted)
                return (
                  o("WALogger")
                    .LOG(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipCall: cancelled before signaling",
                        ])),
                    )
                    .color(ie),
                  o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
                    e,
                    "aborted_before_signaling",
                  ),
                  !1
                );
              throw (
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
                  e,
                  "setup_or_signaling_error",
                ),
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                t
              );
            }
            return (yield nt(a), !0);
          },
        )),
        De.apply(this, arguments)
      );
    }
    function xe(e, t, n, r) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = Se({ isGroup: !1, isJoin: !1, isVideo: n, popoutId: r });
            if (a.status === "not_ready")
              return (
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplNotReady(
                  e,
                  a.notReady,
                ),
                null
              );
            var i = a.abortController,
              l = a.readiness,
              s = i.signal,
              u = Pe() ? Ne(e, t, n, s) : null;
            try {
              var c = yield u == null
                ? Me(e, l)
                : Ae(e, t, { abortController: i, preSetup: u, readiness: l });
              if (!c) return null;
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .VOIP_READY_END,
              );
              var d = o("WAWebVoipOutgoingCallPreSetup").nowMs();
              if ((Ie(e), u != null))
                return Be(e, t, yield u, { signal: s, voipReadyTs: d });
              var m = yield o(
                "WAWebVoipOutgoingCallPreSetup",
              ).runOutgoingCallPreSetup(e, t, n, s);
              return o(
                "WAWebVoipOutgoingCallPreSetup",
              ).finishOutgoingCallPreSetup(e, t, m, {
                signal: s,
                voipReadyTs: d,
              });
            } catch (t) {
              throw (u != null && We(e, i), t);
            }
          },
        )),
        $e.apply(this, arguments)
      );
    }
    function Pe() {
      return (
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInited() &&
        o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootEarlyModulePrefetchEnabled()
      );
    }
    function Ne(e, t, n, a) {
      (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(e, {
        bool: { pre_setup_overlapped_voip_init: !0 },
      }),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] intent pre_setup_during_init",
                ])),
            );
          },
        ));
      var i = o("WAWebVoipOutgoingCallPreSetup").runOutgoingCallPreSetup(
        e,
        t,
        n,
        a,
      );
      return (i.catch(r("WAWebNoop")), i);
    }
    function Me(e, t) {
      return we.apply(this, arguments);
    }
    function we() {
      return (
        (we = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield t;
          return n.status === "not_ready"
            ? (o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplNotReady(
                e,
                n.notReady,
              ),
              !1)
            : !0;
        })),
        we.apply(this, arguments)
      );
    }
    function Ae(e, t, n) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = r.abortController,
              i = r.preSetup,
              l = r.readiness,
              s = a.signal,
              u = yield (re || (re = n("Promise"))).race([l, Oe(i, s)]);
            e: {
              var c = u;
              if (
                ((typeof c == "object" && c !== null) ||
                  typeof c == "function") &&
                c.status === "ready"
              )
                return !0;
              if (
                ((typeof c == "object" && c !== null) ||
                  typeof c == "function") &&
                c.status === "not_ready" &&
                "notReady" in c
              ) {
                var d = c.notReady;
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplNotReady(
                  e,
                  d,
                );
                break e;
              }
              if (
                ((typeof c == "object" && c !== null) ||
                  typeof c == "function") &&
                c.status === "stopped" &&
                "stop" in c
              ) {
                var m = c.stop;
                o("WAWebVoipOutgoingCallPreSetup").stopOutgoingCallBeforeSetup(
                  e,
                  t,
                  m,
                  s,
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  c,
              );
            }
            return (a.abort(), !1);
          },
        )),
        Fe.apply(this, arguments)
      );
    }
    function Oe(e, t) {
      return e.then(
        function (e) {
          return e.status === "stopped" && !t.aborted
            ? e
            : new (re || (re = n("Promise")))(r("WAWebNoop"));
        },
        function (e) {
          if (t.aborted) return new (re || (re = n("Promise")))(r("WAWebNoop"));
          throw e;
        },
      );
    }
    function Be(e, t, n, r) {
      return n.status === "stopped" && r.signal.aborted
        ? (o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
            e,
            "aborted_before_signaling",
          ),
          null)
        : o("WAWebVoipOutgoingCallPreSetup").finishOutgoingCallPreSetup(
            e,
            t,
            n,
            r,
          );
    }
    function We(e, t) {
      var n;
      if (t.signal.aborted) {
        o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
          e,
          "aborted_before_signaling",
        );
        return;
      }
      (o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
        e,
        "pre_setup_error",
      ),
        ((n = r("WAWebCallCollection").pendingOutgoingCall) == null
          ? void 0
          : n.abortController) === t &&
          o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
        t.abort());
    }
    function qe(e, t, n, r, o, a, i) {
      return Ue.apply(this, arguments);
    }
    function Ue() {
      return (
        (Ue = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, u) {
            (l === void 0 && (l = 0),
              s === void 0 && (s = 0),
              o("WALogger")
                .LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startWAWebVoipCall: Placing Group call",
                    ])),
                )
                .color(ie));
            var c = o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
            (o("WAWebVoipCallFromUiStore").setCallFromUi(l),
              o("WAWebVoipActivityTracker").startActivityTracking(),
              o("WAWebVoipActivityTracker").startUiActivityTracking(),
              o("WAWebVoipActivityTracker").trackActivity(
                t
                  ? o("WAWebVoipActivityTracker").VoipActivity
                      .START_OUTGOING_VIDEO_GROUP_CALL
                  : o("WAWebVoipActivityTracker").VoipActivity
                      .START_OUTGOING_AUDIO_GROUP_CALL,
              ),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_INITIATE_OUTGOING_CALL,
              ),
              o(
                "WAWebVoipStartCallPermissions",
              ).preloadStartCallPermissionDialog());
            var d = yield be({
              isGroup: !0,
              isJoin: !1,
              isVideo: t,
              popoutId: u,
            });
            if (d.status !== "not_ready") {
              var m = d.abortController.signal,
                p = yield o(
                  "WAWebVoipStartCallPermissions",
                ).checkStartCallPermissions(t, m);
              if (p == null) {
                if (m.aborted) return;
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                return;
              }
              var _ = o("WAWebUserUtils").getMeLidUserOrThrow(),
                f = _
                  ? o("WAWebContactCollection").ContactCollection.get(_)
                  : null,
                g = f ? o("WAWebFrontendContactGetters").getUsername(f) : null,
                h = (re || (re = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  at(e),
                  he(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-start-group-call-preload-ui",
                  ),
                  t
                    ? he(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-start-group-call-preload-video",
                      )
                    : void 0,
                  t
                    ? he(
                        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                        "voip-start-group-call-preload-video-group",
                      )
                    : void 0,
                ]);
              h.catch(r("WAWebNoop"));
              try {
                var y,
                  C = yield r("WAPromiseRaceAbort")(h, m),
                  b = C[0],
                  v = C[1],
                  S = v.gcDeviceJidsCsv,
                  I = v.gcUserJids,
                  T = v.gcUserPnJids;
                yield (re || (re = n("Promise"))).all(
                  I.map(function (e) {
                    return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                  }),
                );
                var D =
                  (y = i == null ? void 0 : i.toString({ legacy: !0 })) != null
                    ? y
                    : "";
                o("WALogger")
                  .LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipGroupCall: gid=",
                        " users=",
                        " name=",
                        "",
                      ])),
                    D,
                    I,
                    a,
                  )
                  .color(ie);
                var x = i
                  ? yield o(
                      "WAWebNotificationIconUtils",
                    ).getNotificationIconByWid(
                      i,
                      new AbortController().signal,
                      o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
                    )
                  : o("WAWebNotificationIconUtils").USER_DEFAULT_ICON;
                if (m.aborted) {
                  o("WALogger")
                    .LOG(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(ie);
                  return;
                }
                (u != null && (yield r("WAPromiseRaceAbort")(pe(), m)),
                  o("WAWebCoreActionsODS").logCallAttempt(),
                  t
                    ? r("WAWebODS").incr("web.call.outgoing.group.video")
                    : o("WAWebCoreActionsODS").logCallOutgoingGroupAudio(),
                  o("WAWebVoipStartCallPermissions").markCallStart(c, p),
                  yield b == null
                    ? void 0
                    : b.startGroupCall(
                        T.map(function (e) {
                          var t;
                          return (t =
                            e == null ? void 0 : e.toString({ legacy: !0 })) !=
                            null
                            ? t
                            : "";
                        }),
                        I.map(function (e) {
                          return e.toString({ legacy: !0 });
                        }),
                        S,
                        c,
                        t,
                        D,
                        !1,
                        "",
                        a,
                        x,
                        l,
                        s,
                        o("WAWebUsernameTypes").serializeMaybeUsername(g),
                      ));
              } catch (e) {
                if (m.aborted) {
                  o("WALogger")
                    .LOG(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(ie);
                  return;
                }
                throw (
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  e
                );
              }
              yield nt(t);
            }
          },
        )),
        Ue.apply(this, arguments)
      );
    }
    function Ve(e, t, n, r) {
      return He.apply(this, arguments);
    }
    function He() {
      return (
        (He = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a, i;
            (n === void 0 && (n = 0), r === void 0 && (r = 0));
            var l = de(t, !0);
            if (
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded()
            ) {
              (o("WAWebVoipCallIdProvider").resetPendingCallId(), me(l));
              return;
            }
            var s = Qe(
              ((a =
                (i = e.groupMetadata) == null
                  ? void 0
                  : i.participants.toArray()) != null
                ? a
                : []
              ).map(function (e) {
                return e.id;
              }),
              "startWAWebVoipGroupCallFromChat",
            );
            if (s == null) {
              (o("WAWebVoipCallIdProvider").resetPendingCallId(), me(l));
              return;
            }
            yield qe(s, t, e.name || e.formattedTitle, e.id, n, r, l);
          },
        )),
        He.apply(this, arguments)
      );
    }
    function Ge(e, t, n, r, o) {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            (n === void 0 && (n = 0), a === void 0 && (a = 0));
            var l = e.filter(function (e) {
                return !o("WAWebUserUtils").isMeAccount(e.id);
              }),
              s = l.length > 1 ? de(t, !0) : null;
            if (
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded()
            ) {
              (o("WAWebVoipCallIdProvider").resetPendingCallId(), me(s));
              return;
            }
            if (l.length === 0) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            if (l.length === 1) {
              yield Ee(l[0].id, t, n, a, null, i);
              return;
            }
            var u = r("WAWebFbtIntlList")(
              l.map(function (e) {
                return o("WAWebFrontendContactGetters").getFormattedShortName(
                  e,
                );
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            );
            yield qe(
              l.map(function (e) {
                return e.id;
              }),
              t,
              u.toString(),
              void 0,
              n,
              a,
              s,
            );
          },
        )),
        ze.apply(this, arguments)
      );
    }
    function je(e, t, n, r, o) {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            (n === void 0 && (n = 0), r === void 0 && (r = 0));
            var i = e.filter(function (e) {
                return (
                  o("WAWebShouldShowCallButtons").canBeCallParticipant(e) &&
                  !o("WAWebUserUtils").isMeAccount(e)
                );
              }).length,
              l = i > 1 ? de(t, !0) : null;
            if (
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded()
            ) {
              (o("WAWebVoipCallIdProvider").resetPendingCallId(), me(l));
              return;
            }
            if (e.length === 0) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            var s = Qe(e, "startWAWebVoipGroupCallFromWids");
            if (s == null) {
              (o("WAWebVoipCallIdProvider").resetPendingCallId(), me(l));
              return;
            }
            if (s.length === 1) {
              yield Ee(s[0], t, n, r, null, a);
              return;
            }
            yield qe(s, t, "", void 0, n, r, l);
          },
        )),
        Ke.apply(this, arguments)
      );
    }
    function Qe(e, t) {
      var n = e.filter(function (e) {
        return o("WAWebShouldShowCallButtons").canBeCallParticipant(e);
      });
      n.length < e.length &&
        o("WALogger")
          .WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: ",
                ": dropped ",
                " non-callable participant(s) of ",
                "",
              ])),
            t,
            e.length - n.length,
            e.length,
          )
          .sendLogs("voip-group-call-dropped-non-callable");
      var r = n.filter(function (e) {
        return !o("WAWebUserUtils").isMeAccount(e);
      });
      return r.length === 0
        ? (o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ",
                  ": nothing callable in a list of ",
                  "",
                ])),
              t,
              e.length,
            )
            .sendLogs("voip-group-call-no-callable-participants"),
          o("WAWebToastManager").ToastManager.open(
            ae.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ "Couldn't start call. Select someone else to call.",
              ),
            }),
          ),
          null)
        : r;
    }
    function Xe(e, t) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          (t === void 0 &&
            (t = o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .SECOND_NOTIFICATION),
            o("WALogger")
              .LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: callId=",
                    ", lobbyEntryPoint=",
                    "",
                  ])),
                e,
                t,
              )
              .color(ie),
            o("WAWebVoipActivityTracker").startActivityTracking(),
            o("WAWebVoipActivityTracker").startUiActivityTracking(),
            o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .USER_JOIN_ONGOING_CALL,
            ));
          var r = o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(e);
          if (r == null) {
            (o("WALogger")
              .LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: no call for ",
                    "",
                  ])),
                e,
              )
              .color(ie),
              o("WAWebToastManager").ToastManager.open(
                ae.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Call not found."),
                }),
              ),
              o("WAWebVoipActivityTracker").clearAllActivityTracking());
            return;
          }
          var a = r.to;
          if (a == null) {
            (o("WALogger")
              .LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: No chat found for call ID ",
                    "",
                  ])),
                e,
              )
              .color(ie),
              o("WAWebToastManager").ToastManager.open(
                ae.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Could not join call."),
                }),
              ),
              o("WAWebVoipActivityTracker").clearAllActivityTracking());
            return;
          }
          var i = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              a,
              "voipNotification",
            ),
            l = i.chat,
            u = (n = r.isVideoCall) != null ? n : !1;
          yield Je({
            callId: e,
            chat: l,
            isDeviceSwitch: !0,
            isVideo: u,
            lobbyEntryPoint: t,
          });
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
          var t,
            a,
            i = e.callId,
            l = e.chat,
            u = e.isDeviceSwitch,
            c = u === void 0 ? !1 : u,
            d = e.isVideo,
            m = e.joinAndAccept,
            p = m === void 0 ? !1 : m,
            _ = e.lobbyEntryPoint,
            f = _ === void 0 ? 0 : _;
          if (
            (o("WAWebVoipCallAudioUnlock").prepareCallAudioElement(),
            !(yield et()))
          ) {
            (o("WAWebVoipActivityTracker").startActivityTracking(),
              o("WAWebVoipActivityTracker").startUiActivityTracking());
            var g = yield o(
              "WAWebVoipOngoingCallJoinDevices",
            ).checkOngoingCallJoinDevices(i, d, p);
            if (g == null) {
              o("WAWebVoipActivityTracker").clearAllActivityTracking();
              return;
            }
            if (
              r("WAWebEnvironment").isWindows &&
              !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
            ) {
              var h,
                y =
                  ce == null ||
                  (h = ce(
                    r("WAWebWindowsHybridBridgeInitiator").WAWebVoipStartCall,
                  )) == null
                    ? void 0
                    : h.voip;
              if (y == null) {
                (o("WALogger")
                  .LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: VoIP bridge is null",
                      ])),
                  )
                  .color(ie),
                  o("WAWebVoipActivityTracker").clearAllActivityTracking());
                return;
              }
              if (
                !("joinOngoingCall" in y) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2511")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2514")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2515")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2516")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2557")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2558")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2559"))
              ) {
                (o("WALogger")
                  .LOG(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: unsupported",
                      ])),
                  )
                  .color(ie),
                  o("WAWebVoipActivityTracker").clearAllActivityTracking());
                return;
              }
            }
            var C = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(i);
            if (C == null) {
              (o("WALogger")
                .LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no call ",
                      "",
                    ])),
                  i,
                )
                .color(ie),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            } else if (C.callCreator == null) {
              (o("WALogger")
                .LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no creator ",
                      "",
                    ])),
                  i,
                )
                .color(ie),
                yield o(
                  "WAWebVoipActionWriteCallLogEventUpdateJoinable",
                ).cleanupJoinableCallLog(i),
                o("WAWebToastManager").ToastManager.open(
                  ae.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Could not join call."),
                  }),
                ),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            }
            (o("WALogger")
              .LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: joining",
                  ])),
              )
              .color(ie),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_JOIN_ONGOING_CALL,
              ));
            var b = C.isVoiceChat === !0,
              v = b
                ? o("WAWebVoipJoinVoiceChat").getVoiceChatJoinParticipants(
                    (t = C.callParticipants) != null ? t : [],
                    C.callCreator,
                  )
                : (a = C.callParticipants) != null
                  ? a
                  : [],
              S = v
                .map(function (e) {
                  var t = o("WAWebLidMigrationUtils").toPn(e.participant);
                  return (
                    t == null &&
                      o("WALogger")
                        .ERROR(
                          w ||
                            (w = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: joinOngoingWAWebVoipGroupCallPN: participant dropped - toPn() returned null",
                            ])),
                        )
                        .sendLogs(
                          "voip: StartPNCall: group join participant toPn failed",
                        ),
                    t
                  );
                })
                .filter(function (e) {
                  return e != null && !o("WAWebUserUtils").isMeAccount(e);
                }),
              R = yield be({ isGroup: !0, isJoin: !0, isVideo: d });
            if (R.status !== "not_ready") {
              var L = R.abortController.signal,
                E = (re || (re = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  at(S, !0),
                  he(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-join-group-call-preload-ui",
                  ),
                  d
                    ? he(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video",
                      )
                    : void 0,
                  d
                    ? he(
                        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video-group",
                      )
                    : void 0,
                ]);
              E.catch(r("WAWebNoop"));
              try {
                var k = yield r("WAPromiseRaceAbort")(E, L),
                  I = k[0],
                  T = k[1],
                  D = T.gcDeviceJidsCsv,
                  B = T.gcUserJids,
                  W = T.gcUserPnJids;
                yield (re || (re = n("Promise"))).all(
                  B.map(function (e) {
                    return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                  }),
                );
                var q = l.id.isGroup() ? l.id.toString({ legacy: !0 }) : "";
                if (
                  (o("WALogger")
                    .LOG(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCallPN: groupJid: ",
                          "",
                        ])),
                      q,
                    )
                    .color(ie),
                  L.aborted)
                ) {
                  o("WALogger")
                    .LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(ie);
                  return;
                }
                o("WAWebCoreActionsODS").logCallGroupJoin();
                var U = r("nullthrows")(C.callCreator).toString({
                    legacy: !0,
                    formatIncludeDevice: !0,
                  }),
                  V = W.map(function (e) {
                    var t;
                    return (t =
                      e == null ? void 0 : e.toString({ legacy: !0 })) != null
                      ? t
                      : "";
                  }),
                  H = B.map(function (e) {
                    return e.toString({ legacy: !0 });
                  });
                if (b)
                  yield o("WAWebVoipJoinVoiceChat").joinOngoingVoiceChat({
                    callCreatorJid: U,
                    callId: i,
                    chat: l,
                    groupParticipantsDeviceJidsCsv: D,
                    groupParticipantsLidUserJid: H,
                    groupParticipantsPnUserJid: V,
                    isDeviceSwitch: c,
                    lobbyEntryPoint: f,
                    signal: L,
                    voipStackInterface: I,
                  });
                else {
                  var G;
                  yield I == null
                    ? void 0
                    : I.joinOngoingCall(
                        i,
                        U,
                        "",
                        V,
                        H,
                        D,
                        d,
                        q,
                        0,
                        !0,
                        (G = C.callLinkToken) != null ? G : "",
                        !1,
                        "",
                        p,
                        l.name || l.formattedTitle,
                        f,
                        c,
                      );
                }
              } catch (e) {
                if (L.aborted) {
                  o("WALogger")
                    .LOG(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(ie);
                  return;
                }
                throw (
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  e
                );
              }
              g.afterJoin();
            }
          }
        })),
        Ze.apply(this, arguments)
      );
    }
    function et() {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (
        (tt = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          return (yield o(
            "WAWebVoipCallBlockedModals",
          ).showCallBlockedModalIfNeeded())
            ? !0
            : r("WAWebCallCollection").pendingOutgoingCall == null &&
                ((e = r("WAWebCallCollection").pendingCallTransferLobby) == null
                  ? void 0
                  : e.isJoining) !== !0
              ? !1
              : (o("WALogger")
                  .LOG(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: a call is being placed, ignoring the join",
                      ])),
                  )
                  .color(ie),
                !0);
        })),
        tt.apply(this, arguments)
      );
    }
    function nt(e) {
      return rt.apply(this, arguments);
    }
    function rt() {
      return (
        (rt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if ("permissions" in navigator) {
              if (e) {
                var t = yield navigator.permissions.query({ name: "camera" }),
                  n = t.state === "granted";
                n ||
                  o("WALogger").LOG(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: JS doesn't have camera permissions for a video call",
                      ])),
                  );
              }
              var r = yield navigator.permissions.query({ name: "microphone" }),
                a = r.state === "granted";
              a ||
                o("WALogger").LOG(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: JS doesn't have microphone permissions for a call",
                    ])),
                );
            }
          } catch (e) {
            o("WALogger").LOG(
              U ||
                (U = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: failed to check device permissions: ",
                  "",
                ])),
              e,
            );
          }
        })),
        rt.apply(this, arguments)
      );
    }
    function ot(e, t) {
      return e.length > _e
        ? (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip:",
                ": too many devices, removing companions",
              ])),
            t,
          ),
          e
            .filter(function (e) {
              return !e.isCompanion();
            })
            .map(function (e) {
              return e.toString({ legacy: !0, formatIncludeDevice: !0 });
            }))
        : e.map(function (e) {
            return e.toString({ legacy: !0, formatIncludeDevice: !0 });
          });
    }
    function at(e, t) {
      return it.apply(this, arguments);
    }
    function it() {
      return (
        (it = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var r = o("WAWebUserUtils").getMeLidUserOrThrow(),
            a = e.map(function (e) {
              return o("WAWebLidMigrationUtils").toLid(e);
            }),
            i = e.filter(function (e, t) {
              return a[t] == null;
            });
          if (i.length > 0) {
            (o("WALogger")
              .LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParticipantJids: ",
                    " participants unresolved, attempting usync",
                  ])),
                i.length,
              )
              .color(ie),
              yield (re || (re = n("Promise"))).all(
                i.map(function (e) {
                  return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [e],
                    context: "voip",
                    phash: null,
                  });
                }),
              ),
              (a = e.map(function (e) {
                return o("WAWebLidMigrationUtils").toLid(e);
              })));
            var l = e.filter(function (e, t) {
              return a[t] == null;
            });
            l.length > 0
              ? o("WALogger")
                  .ERROR(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getVoipParticipantJids: ",
                        " participants still unresolved after usync, stripping",
                      ])),
                    l.length,
                  )
                  .sendLogs(
                    "voip: getVoipParticipantJids: participants stripped after usync",
                  )
              : o("WALogger")
                  .LOG(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getVoipParticipantJids: usync resolved all participants successfully",
                      ])),
                  )
                  .color(ie);
          }
          var s = [].concat(
              t ? [r] : [],
              a.filter(function (e) {
                return e != null && !o("WAWebUserUtils").isMeAccount(e);
              }),
            ),
            u = s.map(function (e) {
              return o("WAWebLidMigrationUtils").toPn(e);
            });
          yield (re || (re = n("Promise"))).all(
            s.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              });
            }),
          );
          var c = yield re.all(
              s.map(function (e) {
                return o("WAWebSendMsgDatabaseJob").getFanOutListJob([e]);
              }),
            ),
            d = c.map(function (e) {
              var t = ot(e, "callStart"),
                n = t.join(",");
              return n;
            });
          return { gcUserJids: s, gcUserPnJids: u, gcDeviceJidsCsv: d };
        })),
        it.apply(this, arguments)
      );
    }
    function lt(e, t) {
      return st.apply(this, arguments);
    }
    function st() {
      return (
        (st = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = t === void 0 ? {} : t,
            i = a.isRering,
            l = i === void 0 ? !1 : i;
          if (
            !(yield o(
              "WAWebVoipCallBlockedModals",
            ).showCallBlockedModalIfNeeded())
          ) {
            o("WALogger").LOG(
              z ||
                (z = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: inviteToCall called for chat: ",
                  "",
                ])),
              e.toString(),
            );
            try {
              var s,
                u = yield dt(e);
              if (u == null) {
                o("WALogger")
                  .ERROR(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: inviteToCall: LID resolution failed for participant, aborting invite",
                      ])),
                  )
                  .sendLogs("voip: inviteToCall: LID expected but missing");
                return;
              }
              var c = u.lidJid,
                d = u.pnJid,
                m = (s = o("WAWebLidMigrationUtils").toLid(e)) != null ? s : e,
                p = yield (re || (re = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [m],
                    context: "voip",
                    phash: null,
                  }),
                  he(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-invite-to-call-preload-ui",
                  ),
                  he(
                    o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                    "voip-invite-to-call-preload-video-group",
                  ),
                ]),
                _ = p[0];
              if (!d) {
                var f, g;
                d =
                  (f =
                    (g = o("WAWebLidMigrationUtils").toPn(e)) == null
                      ? void 0
                      : g.toString()) != null
                    ? f
                    : "";
              }
              var h = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([m]),
                y = ot(h, "inviteToCall"),
                C = yield _ == null ? void 0 : _.inviteToCall(d, c, y);
              if (C != null && C !== 0) {
                o("WALogger").WARN(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: inviteToCall refused with status ",
                      "",
                    ])),
                  C,
                );
                return;
              }
              (o("WALogger").LOG(
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: inviteToCall completed successfully for ",
                    "",
                  ])),
                e.toString(),
              ),
                _ != null &&
                  !l &&
                  o(
                    "WAWebVoipActionWriteCallLogInviteeLoadable",
                  ).writeCallLogForInviteeLoadable(e));
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: inviteToCall failed for ",
                        "",
                      ])),
                    e.toString(),
                  )
                  .catching(r("getErrorSafe")(t)),
                t
              );
            }
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
          o("WALogger").LOG(
            Y ||
              (Y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: waveAtParticipant called for chat: ",
                "",
              ])),
            e.toString(),
          );
          try {
            var t,
              a = yield dt(e);
            if (a == null)
              return (
                o("WALogger")
                  .ERROR(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: waveAtParticipant: LID resolution failed for participant, aborting wave",
                      ])),
                  )
                  .sendLogs(
                    "voip: waveAtParticipant: LID expected but missing",
                  ),
                !1
              );
            var i = a.lidJid,
              l = a.pnJid,
              s = (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e,
              u = yield (re || (re = n("Promise"))).all([
                o("WAWebVoipStackInterface").getVoipStackInterface(),
                o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                  wids: [s],
                  context: "voip",
                  phash: null,
                }),
              ]),
              c = u[0];
            if (c == null)
              return (
                o("WALogger")
                  .ERROR(
                    Z ||
                      (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: waveAtParticipant: voipStackInterface is null, aborting wave",
                      ])),
                  )
                  .sendLogs(
                    "voip: waveAtParticipant: voipStackInterface is null",
                  ),
                !1
              );
            if (!l) {
              var d, m;
              l =
                (d =
                  (m = o("WAWebLidMigrationUtils").toPn(e)) == null
                    ? void 0
                    : m.toString()) != null
                  ? d
                  : "";
            }
            var p = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([s]),
              _ = ot(p, "waveAtParticipant");
            return _.length === 0
              ? (o("WALogger")
                  .ERROR(
                    ee ||
                      (ee = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: waveAtParticipant: no devices resolved for participant, aborting wave",
                      ])),
                  )
                  .sendLogs("voip: waveAtParticipant: empty device list"),
                !1)
              : (yield c.sendWave(l, i, _),
                o("WALogger").LOG(
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: waveAtParticipant completed successfully for ",
                      "",
                    ])),
                  e.toString(),
                ),
                !0);
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  ne ||
                    (ne = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: waveAtParticipant failed for ",
                      "",
                    ])),
                  e.toString(),
                )
                .catching(r("getErrorSafe")(t)),
              t
            );
          }
        })),
        ct.apply(this, arguments)
      );
    }
    function dt(e) {
      return mt.apply(this, arguments);
    }
    function mt() {
      return (
        (mt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.toString(),
            n = "",
            r = "";
          if (e.isLid()) {
            var a, i, l, s;
            ((r =
              (a =
                (i = o("WAWebLidMigrationUtils").toLid(e)) == null
                  ? void 0
                  : i.toString()) != null
                ? a
                : t),
              (n =
                (l =
                  (s = o("WAWebLidMigrationUtils").toPn(e)) == null
                    ? void 0
                    : s.toString()) != null
                  ? l
                  : ""));
          } else {
            var u, c, d, m;
            if (
              ((n =
                (u =
                  (c = o("WAWebLidMigrationUtils").toPn(e)) == null
                    ? void 0
                    : c.toString()) != null
                  ? u
                  : t),
              (r =
                (d =
                  (m = o("WAWebLidMigrationUtils").toLid(e)) == null
                    ? void 0
                    : m.toString()) != null
                  ? d
                  : ""),
              !r)
            ) {
              var p, _;
              (yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              }),
                (r =
                  (p =
                    (_ = o("WAWebLidMigrationUtils").toLid(e)) == null
                      ? void 0
                      : _.toString()) != null
                    ? p
                    : ""));
            }
          }
          return r ? { lidJid: r, pnJid: n } : null;
        })),
        mt.apply(this, arguments)
      );
    }
    ((l.preloadVoipBundleSafely = he),
      (l.preloadGroupCallBundle = ye),
      (l.beginOutgoingCallWithMiniplayer = be),
      (l.startWAWebVoipCall = Ee),
      (l.startWAWebVoipGroupCallFromChat = Ve),
      (l.startWAWebVoipGroupCallFromContacts = Ge),
      (l.startWAWebVoipGroupCallFromWids = je),
      (l.joinOngoingCallByCallId = Xe),
      (l.joinOngoingWAWebVoipGroupCallPN = Je),
      (l.inviteToCall = lt),
      (l.waveAtParticipant = ut));
  },
  226,
);
