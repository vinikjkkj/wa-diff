__d(
  "WAWebVoipStartCall",
  [
    "fbt",
    "JSResourceForInteraction",
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
      oe = re || (re = o("react")),
      ae = "#aa6627",
      ie = 3e4,
      le = 6e4,
      se = (e = n("cr:17219")) != null ? e : {},
      ue = se.getWindowsBridge;
    function ce(e, t) {
      var n;
      return (n = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null
        ? void 0
        : n.maybePreOpenAutoPopoutForOutgoingCall(e, t);
    }
    function de(e) {
      var t;
      (t = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null ||
        t.closePreOpenedAutoPopout(e);
    }
    function me() {
      var e, t;
      return (e =
        (t = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null
          ? void 0
          : t.awaitAutoPopoutReadyOrAbandon()) != null
        ? e
        : Promise.resolve();
    }
    var pe = 5;
    function _e(e, t) {
      return e != null && t != null ? t - e : null;
    }
    function fe(e, t) {
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
    function ge(e, t) {
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
    function he() {
      return ge(
        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
        "voip-preload-group-call-bundle",
      );
    }
    function ye(e) {
      r("WAWebEnvironment").isWindows ||
        (r("WAWebCallCollection").setPendingOutgoingCall({
          abortController: e.abortController,
          isGroup: e.isGroup,
          isJoin: e.isJoin,
          isVideo: e.isVideo,
        }),
        r("WAWebPipController").openVoipUiPiPForOutgoing());
    }
    async function Ce(e) {
      var t = be(e);
      return t.status === "started" ? t.readiness : t;
    }
    function be(e) {
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
            .color(ae),
          de(e.popoutId),
          { notReady: { reason: "duplicate_start" }, status: "not_ready" }
        );
      e.isJoin || o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock();
      var a = new AbortController();
      ((n = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null ||
        n.closePreOpenedAutoPopoutOnAbort(e.popoutId, a.signal),
        ye({
          abortController: a,
          isGroup: e.isGroup,
          isJoin: e.isJoin,
          isVideo: e.isVideo,
        }));
      var i = ve(a);
      return (
        o("WAWebVoipOutgoingCallBlockedLog").logOutgoingCallBlockedWhenNotReady(
          i,
        ),
        { abortController: a, readiness: i, status: "started" }
      );
    }
    async function ve(e) {
      var t = o("WAWebEnsureVoipInited").ensureVoipInitialized(
        "call",
        e.signal,
      );
      t.catch(r("WAWebNoop"));
      try {
        await r("WAPromiseRaceAbort")(t, e.signal);
      } catch (t) {
        if (e.signal.aborted)
          return (
            o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: outgoing call cancelled while waiting for VoIP init",
                  ])),
              )
              .color(ae),
            { notReady: { reason: "user_cancelled" }, status: "not_ready" }
          );
        if (
          (o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
          t instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError)
        )
          return (
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: outgoing call stopped because VoIP init requires reload",
                  ])),
              )
              .color(ae),
            {
              notReady: { reason: "reload_required", reloadReason: t.reason },
              status: "not_ready",
            }
          );
        var n = r("getErrorSafe")(t);
        return (
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing-intent SCTP prewarm module failed to load",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              },
            ),
        { abortController: e, status: "ready" }
      );
    }
    async function Se(e, t, n, r, a, i) {
      var l, s;
      if (
        (n === void 0 && (n = 0),
        r === void 0 && (r = 0),
        a === void 0 && (a = null),
        !(await o("WAWebVoipOutgoingCallConsent").hasOutgoingCallConsent(
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
          : ce(t, !1),
        c =
          (l =
            (s = globalThis.document) == null ? void 0 : s.visibilityState) !=
          null
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
            ).wasDocumentHiddenWithinMs(ie),
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
        var m = await Le(d, e, t, n, r, a, u);
        return m;
      } catch (e) {
        throw (
          de(u),
          d.isActive() &&
            o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
              d,
              "unexpected_error",
            ),
          e
        );
      }
    }
    function Re(e) {
      if (o("WAWebVoipOutgoingSetupLatencyMode").isSocketHealthCheckEnabled()) {
        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
          e,
          o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
            .SOCKET_HEALTH_CHECK_START,
        );
        var t = !1;
        ((!o("WAComms").isSocketConnected() ||
          o("WAComms").getMsSinceLastInboundRx() > le) &&
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
    async function Le(e, t, n, a, i, l, s) {
      var u = o("WAWebVoipOutgoingCallPreSetup").nowMs(),
        c =
          l != null
            ? l
            : o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
      if (
        (o("WAWebVoipCallIdProvider").resetPendingCallId(),
        o("WAWebVoipCallFromUiStore").setCallFromUi(a),
        await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded())
      )
        return (
          o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
            e,
            "call_blocked",
          ),
          de(s),
          !1
        );
      (o("WAWebVoipActivityTracker").startActivityTracking(),
        o("WAWebVoipActivityTracker").startUiActivityTracking(),
        o("WAWebVoipStartCallPermissions").preloadStartCallPermissionDialog(),
        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
          e,
          o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
            .VOIP_READY_START,
        ));
      var d = await Ee(e, t, n, s);
      if (d == null) return !1;
      var m = d.devicePermissionsMs,
        p = d.peerPnWid,
        _ = d.peerWid,
        C = d.permission,
        b = d.signal,
        v = o("WAWebVoipOutgoingCallPreSetup").nowMs();
      (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
        e,
        o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
          .COEX_FIRST_TIME_MODAL_START,
      ),
        o(
          "WAWebOpenCoexCallingFirstTimeModalUtils",
        ).willShowCoexCallingFirstTimeModal(t) && de(s));
      var S = await o(
          "WAWebOpenCoexCallingFirstTimeModalUtils",
        ).maybeShowCoexCallingSMBFirstTimeModal(),
        R = await o(
          "WAWebOpenCoexCallingFirstTimeModalUtils",
        ).maybeShowCoexCallingConsumerFirstTimeModal(t);
      ((S || R) &&
        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(e, {
          bool: { coex_first_time_modal_shown: !0 },
        }),
        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
          e,
          o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
            .COEX_FIRST_TIME_MODAL_END,
        ));
      var L = _e(v, o("WAWebVoipOutgoingCallPreSetup").nowMs());
      (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
        e,
        o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_START,
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
        n &&
          o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
            e,
            o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
              .SETUP_VIDEO_BUNDLE_PRELOAD_START,
          ));
      var E = Promise.all([
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
          .getFanOutListJob([_])
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
          .sendTcToken(_)
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
        ge(
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
        n
          ? ge(
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
      E.catch(r("WAWebNoop"));
      try {
        var k = await r("WAPromiseRaceAbort")(E, b),
          I = k[0],
          T = k[1],
          D = k[2];
        if (
          (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
            e,
            o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_END,
          ),
          I == null)
        )
          return (
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipCall: voipStackInterface is null",
                  ])),
              )
              .sendLogs("voip: startWAWebVoipCall: voipStackInterface is null"),
            o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
              e,
              "voip_stack_interface_null",
            ),
            o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
            !1
          );
        s != null && (await r("WAPromiseRaceAbort")(me(), b));
        var x = Ue(T, "callStart");
        if (
          (o("WALogger")
            .LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startWAWebVoipCall: Placing LID call",
                ])),
            )
            .color(ae),
          o("WAWebVoipGatingUtils").isWinHybridPlusEnabled())
        ) {
          var $;
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                'voip: [HYBRID+] placing 1:1 call via "',
                '" stack (expect "web" = WASM)',
              ])),
            ($ = I == null ? void 0 : I.type) != null ? $ : "null",
          );
        }
        (o("WAWebVoipActivityTracker").trackActivity(
          n
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
          n
            ? r("WAWebODS").incr("web.call.outgoing.video")
            : r("WAWebODS").incr("web.call.outgoing.audio"),
          o("WAWebVoipStartCallPermissions").markCallStart(c, C),
          o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
            e,
            o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
              .START_CALL_START,
          ),
          await I.startCall(
            _,
            x,
            c,
            n,
            (p != null ? p : _).toString({ legacy: !0 }),
            !1,
            D,
            a,
            i,
            null,
          ),
          o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
            e,
            o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
              .START_CALL_END,
          ),
          fe(c, {
            coexModalMs: L,
            devicePermissionsMs: m,
            intentTs: u,
            successTs: o("WAWebVoipOutgoingCallPreSetup").nowMs(),
          }),
          o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplSuccess(e));
      } catch (t) {
        if (b.aborted)
          return (
            o("WALogger")
              .LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipCall: cancelled before signaling",
                  ])),
              )
              .color(ae),
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
      return (await qe(n), !0);
    }
    async function Ee(e, t, n, r) {
      var a = be({ isGroup: !1, isJoin: !1, isVideo: n, popoutId: r });
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
        u = ke() ? Ie(e, t, n, s) : null;
      try {
        var c = await (u == null
          ? Te(e, l)
          : De(e, t, { abortController: i, preSetup: u, readiness: l }));
        if (!c) return null;
        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
          e,
          o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.VOIP_READY_END,
        );
        var d = o("WAWebVoipOutgoingCallPreSetup").nowMs();
        if ((Re(e), u != null))
          return $e(e, t, await u, { signal: s, voipReadyTs: d });
        var m = await o(
          "WAWebVoipOutgoingCallPreSetup",
        ).runOutgoingCallPreSetup(e, t, n, s);
        return o("WAWebVoipOutgoingCallPreSetup").finishOutgoingCallPreSetup(
          e,
          t,
          m,
          { signal: s, voipReadyTs: d },
        );
      } catch (t) {
        throw (u != null && Pe(e, i), t);
      }
    }
    function ke() {
      return (
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInited() &&
        o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootEarlyModulePrefetchEnabled()
      );
    }
    function Ie(e, t, n, a) {
      (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(e, {
        bool: { pre_setup_overlapped_voip_init: !0 },
      }),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
    async function Te(e, t) {
      var n = await t;
      return n.status === "not_ready"
        ? (o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplNotReady(
            e,
            n.notReady,
          ),
          !1)
        : !0;
    }
    async function De(e, t, n) {
      var r = n.abortController,
        a = n.preSetup,
        i = n.readiness,
        l = r.signal,
        s = await Promise.race([i, xe(a, l)]);
      e: {
        var u = s;
        if (
          ((typeof u == "object" && u !== null) || typeof u == "function") &&
          u.status === "ready"
        )
          return !0;
        if (
          ((typeof u == "object" && u !== null) || typeof u == "function") &&
          u.status === "not_ready" &&
          "notReady" in u
        ) {
          var c = u.notReady;
          o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplNotReady(e, c);
          break e;
        }
        if (
          ((typeof u == "object" && u !== null) || typeof u == "function") &&
          u.status === "stopped" &&
          "stop" in u
        ) {
          var d = u.stop;
          o("WAWebVoipOutgoingCallPreSetup").stopOutgoingCallBeforeSetup(
            e,
            t,
            d,
            l,
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            u,
        );
      }
      return (r.abort(), !1);
    }
    function xe(e, t) {
      return e.then(
        function (e) {
          return e.status === "stopped" && !t.aborted
            ? e
            : new Promise(r("WAWebNoop"));
        },
        function (e) {
          if (t.aborted) return new Promise(r("WAWebNoop"));
          throw e;
        },
      );
    }
    function $e(e, t, n, r) {
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
    function Pe(e, t) {
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
    async function Ne(e, t, n, a, i, l, s) {
      (i === void 0 && (i = 0),
        l === void 0 && (l = 0),
        o("WALogger")
          .LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: startWAWebVoipCall: Placing Group call",
              ])),
          )
          .color(ae));
      var u = o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
      (o("WAWebVoipCallFromUiStore").setCallFromUi(i),
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
        o("WAWebVoipStartCallPermissions").preloadStartCallPermissionDialog());
      var c = await Ce({ isGroup: !0, isJoin: !1, isVideo: t, popoutId: s });
      if (c.status !== "not_ready") {
        var d = c.abortController.signal,
          m = await o(
            "WAWebVoipStartCallPermissions",
          ).checkStartCallPermissions(t, d);
        if (m == null) {
          if (d.aborted) return;
          o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
          return;
        }
        var p = o("WAWebUserUtils").getMeLidUserOrThrow(),
          _ = p ? o("WAWebContactCollection").ContactCollection.get(p) : null,
          f = _ ? o("WAWebFrontendContactGetters").getUsername(_) : null,
          g = Promise.all([
            o("WAWebVoipStackInterface").getVoipStackInterface(),
            Ve(e),
            ge(
              o("WAWebVoipUiLoadable").requireBundle,
              "voip-start-group-call-preload-ui",
            ),
            t
              ? ge(
                  o("WAWebVoipUiVideoCallLoadable").requireBundle,
                  "voip-start-group-call-preload-video",
                )
              : void 0,
            t
              ? ge(
                  o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                  "voip-start-group-call-preload-video-group",
                )
              : void 0,
          ]);
        g.catch(r("WAWebNoop"));
        try {
          var h,
            y = await r("WAPromiseRaceAbort")(g, d),
            C = y[0],
            L = y[1],
            E = L.gcDeviceJidsCsv,
            k = L.gcUserJids,
            I = L.gcUserPnJids;
          await Promise.all(
            k.map(function (e) {
              return o("WAWebSendTcTokenChatAction").sendTcToken(e);
            }),
          );
          var T =
            (h = a == null ? void 0 : a.toString({ legacy: !0 })) != null
              ? h
              : "";
          o("WALogger")
            .LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startWAWebVoipGroupCall: gid=",
                  " users=",
                  " name=",
                  "",
                ])),
              T,
              k,
              n,
            )
            .color(ae);
          var D = a
            ? await o("WAWebNotificationIconUtils").getNotificationIconByWid(
                a,
                new AbortController().signal,
                o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
              )
            : o("WAWebNotificationIconUtils").USER_DEFAULT_ICON;
          if (d.aborted) {
            o("WALogger")
              .LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipGroupCall: cancelled before signaling",
                  ])),
              )
              .color(ae);
            return;
          }
          (s != null && (await r("WAPromiseRaceAbort")(me(), d)),
            o("WAWebCoreActionsODS").logCallAttempt(),
            t
              ? r("WAWebODS").incr("web.call.outgoing.group.video")
              : o("WAWebCoreActionsODS").logCallOutgoingGroupAudio(),
            o("WAWebVoipStartCallPermissions").markCallStart(u, m),
            await (C == null
              ? void 0
              : C.startGroupCall(
                  I.map(function (e) {
                    var t;
                    return (t =
                      e == null ? void 0 : e.toString({ legacy: !0 })) != null
                      ? t
                      : "";
                  }),
                  k.map(function (e) {
                    return e.toString({ legacy: !0 });
                  }),
                  E,
                  u,
                  t,
                  T,
                  !1,
                  "",
                  n,
                  D,
                  i,
                  l,
                  o("WAWebUsernameTypes").serializeMaybeUsername(f),
                )));
        } catch (e) {
          if (d.aborted) {
            o("WALogger")
              .LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipGroupCall: cancelled before signaling",
                  ])),
              )
              .color(ae);
            return;
          }
          throw (
            o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
            e
          );
        }
        await qe(t);
      }
    }
    async function Me(e, t, n, r) {
      var a, i;
      (n === void 0 && (n = 0), r === void 0 && (r = 0));
      var l = ce(t, !0);
      if (
        await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()
      ) {
        (o("WAWebVoipCallIdProvider").resetPendingCallId(), de(l));
        return;
      }
      var s = Fe(
        ((a =
          (i = e.groupMetadata) == null ? void 0 : i.participants.toArray()) !=
        null
          ? a
          : []
        ).map(function (e) {
          return e.id;
        }),
        "startWAWebVoipGroupCallFromChat",
      );
      if (s == null) {
        (o("WAWebVoipCallIdProvider").resetPendingCallId(), de(l));
        return;
      }
      await Ne(s, t, e.name || e.formattedTitle, e.id, n, r, l);
    }
    async function we(e, t, n, a, i) {
      (n === void 0 && (n = 0), a === void 0 && (a = 0));
      var l = e.filter(function (e) {
          return !o("WAWebUserUtils").isMeAccount(e.id);
        }),
        s = l.length > 1 ? ce(t, !0) : null;
      if (
        await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()
      ) {
        (o("WAWebVoipCallIdProvider").resetPendingCallId(), de(s));
        return;
      }
      if (l.length === 0) {
        o("WAWebVoipCallIdProvider").resetPendingCallId();
        return;
      }
      if (l.length === 1) {
        await Se(l[0].id, t, n, a, null, i);
        return;
      }
      var u = r("WAWebFbtIntlList")(
        l.map(function (e) {
          return o("WAWebFrontendContactGetters").getFormattedShortName(e);
        }),
        r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
        r("WAWebFbtIntlList").DELIMITERS.COMMA,
      );
      await Ne(
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
    }
    async function Ae(e, t, n, r, a) {
      (n === void 0 && (n = 0), r === void 0 && (r = 0));
      var i = e.filter(function (e) {
          return (
            o("WAWebShouldShowCallButtons").canBeCallParticipant(e) &&
            !o("WAWebUserUtils").isMeAccount(e)
          );
        }).length,
        l = i > 1 ? ce(t, !0) : null;
      if (
        await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()
      ) {
        (o("WAWebVoipCallIdProvider").resetPendingCallId(), de(l));
        return;
      }
      if (e.length === 0) {
        o("WAWebVoipCallIdProvider").resetPendingCallId();
        return;
      }
      var s = Fe(e, "startWAWebVoipGroupCallFromWids");
      if (s == null) {
        (o("WAWebVoipCallIdProvider").resetPendingCallId(), de(l));
        return;
      }
      if (s.length === 1) {
        await Se(s[0], t, n, r, null, a);
        return;
      }
      await Ne(s, t, "", void 0, n, r, l);
    }
    function Fe(e, t) {
      var n = e.filter(function (e) {
        return o("WAWebShouldShowCallButtons").canBeCallParticipant(e);
      });
      n.length < e.length &&
        o("WALogger")
          .WARN(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
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
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ",
                  ": nothing callable in a list of ",
                  "",
                ])),
              t,
              e.length,
            )
            .sendLogs("voip-group-call-no-callable-participants"),
          o("WAWebToastManager").ToastManager.open(
            oe.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ),
          null)
        : r;
    }
    async function Oe(e, t) {
      var n;
      (t === void 0 &&
        (t = o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
          .SECOND_NOTIFICATION),
        o("WALogger")
          .LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: joinOngoingCallByCallId: callId=",
                ", lobbyEntryPoint=",
                "",
              ])),
            e,
            t,
          )
          .color(ae),
        o("WAWebVoipActivityTracker").startActivityTracking(),
        o("WAWebVoipActivityTracker").startUiActivityTracking(),
        o("WAWebVoipActivityTracker").trackUiActivity(
          o("WAWebVoipActivityTracker").VoipUiActivity.USER_JOIN_ONGOING_CALL,
        ));
      var r = o(
        "WAWebVoipOngoingCallCollection",
      ).WAWebVoipOngoingCallCollection.getByCallId(e);
      if (r == null) {
        (o("WALogger")
          .LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: joinOngoingCallByCallId: no call for ",
                "",
              ])),
            e,
          )
          .color(ae),
          o("WAWebToastManager").ToastManager.open(
            oe.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ),
          o("WAWebVoipActivityTracker").clearAllActivityTracking());
        return;
      }
      var a = r.to;
      if (a == null) {
        (o("WALogger")
          .LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "voip: joinOngoingCallByCallId: No chat found for call ID ",
                "",
              ])),
            e,
          )
          .color(ae),
          o("WAWebToastManager").ToastManager.open(
            oe.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ),
          o("WAWebVoipActivityTracker").clearAllActivityTracking());
        return;
      }
      var i = await o("WAWebFindChatAction").findOrCreateLatestChat(
          a,
          "voipNotification",
        ),
        l = i.chat,
        u = (n = r.isVideoCall) != null ? n : !1;
      await Be({
        callId: e,
        chat: l,
        isDeviceSwitch: !0,
        isVideo: u,
        lobbyEntryPoint: t,
      });
    }
    async function Be(e) {
      var t,
        n,
        a = e.callId,
        i = e.chat,
        l = e.isDeviceSwitch,
        u = l === void 0 ? !1 : l,
        c = e.isVideo,
        d = e.joinAndAccept,
        m = d === void 0 ? !1 : d,
        p = e.lobbyEntryPoint,
        _ = p === void 0 ? 0 : p;
      if (
        (o("WAWebVoipCallAudioUnlock").prepareCallAudioElement(), !(await We()))
      ) {
        (o("WAWebVoipActivityTracker").startActivityTracking(),
          o("WAWebVoipActivityTracker").startUiActivityTracking());
        var f = await o(
          "WAWebVoipOngoingCallJoinDevices",
        ).checkOngoingCallJoinDevices(a, c, m);
        if (f == null) {
          o("WAWebVoipActivityTracker").clearAllActivityTracking();
          return;
        }
        if (
          r("WAWebEnvironment").isWindows &&
          !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
        ) {
          var g,
            h =
              ue == null ||
              (g = ue(
                r("WAWebWindowsHybridBridgeInitiator").WAWebVoipStartCall,
              )) == null
                ? void 0
                : g.voip;
          if (h == null) {
            (o("WALogger")
              .LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: VoIP bridge is null",
                  ])),
              )
              .color(ae),
              o("WAWebVoipActivityTracker").clearAllActivityTracking());
            return;
          }
          if (
            !("joinOngoingCall" in h) ||
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
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: unsupported",
                  ])),
              )
              .color(ae),
              o("WAWebVoipActivityTracker").clearAllActivityTracking());
            return;
          }
        }
        var y = o(
          "WAWebVoipOngoingCallCollection",
        ).WAWebVoipOngoingCallCollection.getByCallId(a);
        if (y == null) {
          (o("WALogger")
            .LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinOngoingWAWebVoipGroupCallPN: no call ",
                  "",
                ])),
              a,
            )
            .color(ae),
            o("WAWebVoipActivityTracker").clearAllActivityTracking());
          return;
        } else if (y.callCreator == null) {
          (o("WALogger")
            .LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinOngoingWAWebVoipGroupCallPN: no creator ",
                  "",
                ])),
              a,
            )
            .color(ae),
            await o(
              "WAWebVoipActionWriteCallLogEventUpdateJoinable",
            ).cleanupJoinableCallLog(a),
            o("WAWebToastManager").ToastManager.open(
              oe.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
            ),
            o("WAWebVoipActivityTracker").clearAllActivityTracking());
          return;
        }
        (o("WALogger")
          .LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: joinOngoingWAWebVoipGroupCallPN: joining",
              ])),
          )
          .color(ae),
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.USER_JOIN_ONGOING_CALL,
          ));
        var C = y.isVoiceChat === !0,
          b = C
            ? o("WAWebVoipJoinVoiceChat").getVoiceChatJoinParticipants(
                (t = y.callParticipants) != null ? t : [],
                y.callCreator,
              )
            : (n = y.callParticipants) != null
              ? n
              : [],
          v = b
            .map(function (e) {
              var t = o("WAWebLidMigrationUtils").toPn(e.participant);
              return (
                t == null &&
                  o("WALogger")
                    .ERROR(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
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
          S = await Ce({ isGroup: !0, isJoin: !0, isVideo: c });
        if (S.status !== "not_ready") {
          var R = S.abortController.signal,
            L = Promise.all([
              o("WAWebVoipStackInterface").getVoipStackInterface(),
              Ve(v, !0),
              ge(
                o("WAWebVoipUiLoadable").requireBundle,
                "voip-join-group-call-preload-ui",
              ),
              c
                ? ge(
                    o("WAWebVoipUiVideoCallLoadable").requireBundle,
                    "voip-join-group-call-preload-video",
                  )
                : void 0,
              c
                ? ge(
                    o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                    "voip-join-group-call-preload-video-group",
                  )
                : void 0,
            ]);
          L.catch(r("WAWebNoop"));
          try {
            var E = await r("WAPromiseRaceAbort")(L, R),
              k = E[0],
              I = E[1],
              T = I.gcDeviceJidsCsv,
              O = I.gcUserJids,
              B = I.gcUserPnJids;
            await Promise.all(
              O.map(function (e) {
                return o("WAWebSendTcTokenChatAction").sendTcToken(e);
              }),
            );
            var W = i.id.isGroup() ? i.id.toString({ legacy: !0 }) : "";
            if (
              (o("WALogger")
                .LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startWAWebVoipGroupCallPN: groupJid: ",
                      "",
                    ])),
                  W,
                )
                .color(ae),
              R.aborted)
            ) {
              o("WALogger")
                .LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                    ])),
                )
                .color(ae);
              return;
            }
            o("WAWebCoreActionsODS").logCallGroupJoin();
            var q = r("nullthrows")(y.callCreator).toString({
                legacy: !0,
                formatIncludeDevice: !0,
              }),
              U = B.map(function (e) {
                var t;
                return (t = e == null ? void 0 : e.toString({ legacy: !0 })) !=
                  null
                  ? t
                  : "";
              }),
              V = O.map(function (e) {
                return e.toString({ legacy: !0 });
              });
            if (C)
              await o("WAWebVoipJoinVoiceChat").joinOngoingVoiceChat({
                callCreatorJid: q,
                callId: a,
                chat: i,
                groupParticipantsDeviceJidsCsv: T,
                groupParticipantsLidUserJid: V,
                groupParticipantsPnUserJid: U,
                isDeviceSwitch: u,
                lobbyEntryPoint: _,
                signal: R,
                voipStackInterface: k,
              });
            else {
              var H;
              await (k == null
                ? void 0
                : k.joinOngoingCall(
                    a,
                    q,
                    "",
                    U,
                    V,
                    T,
                    c,
                    W,
                    0,
                    !0,
                    (H = y.callLinkToken) != null ? H : "",
                    !1,
                    "",
                    m,
                    i.name || i.formattedTitle,
                    _,
                    u,
                  ));
            }
          } catch (e) {
            if (R.aborted) {
              o("WALogger")
                .LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                    ])),
                )
                .color(ae);
              return;
            }
            throw (
              o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
              e
            );
          }
          f.afterJoin();
        }
      }
    }
    async function We() {
      var e;
      return (await o(
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
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: a call is being placed, ignoring the join",
                  ])),
              )
              .color(ae),
            !0);
    }
    async function qe(e) {
      try {
        if ("permissions" in navigator) {
          if (e) {
            var t = await navigator.permissions.query({ name: "camera" }),
              n = t.state === "granted";
            n ||
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: JS doesn't have camera permissions for a video call",
                  ])),
              );
          }
          var r = await navigator.permissions.query({ name: "microphone" }),
            a = r.state === "granted";
          a ||
            o("WALogger").LOG(
              W ||
                (W = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: JS doesn't have microphone permissions for a call",
                ])),
            );
        }
      } catch (e) {
        o("WALogger").LOG(
          q ||
            (q = babelHelpers.taggedTemplateLiteralLoose([
              "voip: failed to check device permissions: ",
              "",
            ])),
          e,
        );
      }
    }
    function Ue(e, t) {
      return e.length > pe
        ? (o("WALogger").LOG(
            U ||
              (U = babelHelpers.taggedTemplateLiteralLoose([
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
    async function Ve(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebUserUtils").getMeLidUserOrThrow(),
        r = e.map(function (e) {
          return o("WAWebLidMigrationUtils").toLid(e);
        }),
        a = e.filter(function (e, t) {
          return r[t] == null;
        });
      if (a.length > 0) {
        (o("WALogger")
          .LOG(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "voip: getVoipParticipantJids: ",
                " participants unresolved, attempting usync",
              ])),
            a.length,
          )
          .color(ae),
          await Promise.all(
            a.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              });
            }),
          ),
          (r = e.map(function (e) {
            return o("WAWebLidMigrationUtils").toLid(e);
          })));
        var i = e.filter(function (e, t) {
          return r[t] == null;
        });
        i.length > 0
          ? o("WALogger")
              .ERROR(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParticipantJids: ",
                    " participants still unresolved after usync, stripping",
                  ])),
                i.length,
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
              .color(ae);
      }
      var l = [].concat(
          t ? [n] : [],
          r.filter(function (e) {
            return e != null && !o("WAWebUserUtils").isMeAccount(e);
          }),
        ),
        s = l.map(function (e) {
          return o("WAWebLidMigrationUtils").toPn(e);
        });
      await Promise.all(
        l.map(function (e) {
          return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
            wids: [e],
            context: "voip",
            phash: null,
          });
        }),
      );
      var u = await Promise.all(
          l.map(function (e) {
            return o("WAWebSendMsgDatabaseJob").getFanOutListJob([e]);
          }),
        ),
        c = u.map(function (e) {
          var t = Ue(e, "callStart"),
            n = t.join(",");
          return n;
        });
      return { gcUserJids: l, gcUserPnJids: s, gcDeviceJidsCsv: c };
    }
    async function He(e, t) {
      var n = t === void 0 ? {} : t,
        a = n.isRering,
        i = a === void 0 ? !1 : a;
      if (
        !(await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded())
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
          var l,
            s = await ze(e);
          if (s == null) {
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
          var u = s.lidJid,
            c = s.pnJid,
            d = (l = o("WAWebLidMigrationUtils").toLid(e)) != null ? l : e,
            m = await Promise.all([
              o("WAWebVoipStackInterface").getVoipStackInterface(),
              o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [d],
                context: "voip",
                phash: null,
              }),
              ge(
                o("WAWebVoipUiLoadable").requireBundle,
                "voip-invite-to-call-preload-ui",
              ),
              ge(
                o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                "voip-invite-to-call-preload-video-group",
              ),
            ]),
            p = m[0];
          if (!c) {
            var _, f;
            c =
              (_ =
                (f = o("WAWebLidMigrationUtils").toPn(e)) == null
                  ? void 0
                  : f.toString()) != null
                ? _
                : "";
          }
          var g = await o("WAWebSendMsgDatabaseJob").getFanOutListJob([d]),
            h = Ue(g, "inviteToCall"),
            y = await (p == null ? void 0 : p.inviteToCall(c, u, h));
          if (y != null && y !== 0) {
            o("WALogger").WARN(
              K ||
                (K = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: inviteToCall refused with status ",
                  "",
                ])),
              y,
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
            p != null &&
              !i &&
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
    }
    async function Ge(e) {
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
          n = await ze(e);
        if (n == null)
          return (
            o("WALogger")
              .ERROR(
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: waveAtParticipant: LID resolution failed for participant, aborting wave",
                  ])),
              )
              .sendLogs("voip: waveAtParticipant: LID expected but missing"),
            !1
          );
        var a = n.lidJid,
          i = n.pnJid,
          l = (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e,
          s = await Promise.all([
            o("WAWebVoipStackInterface").getVoipStackInterface(),
            o("WAWebAdvSyncDeviceListApi").syncDeviceList({
              wids: [l],
              context: "voip",
              phash: null,
            }),
          ]),
          u = s[0];
        if (u == null)
          return (
            o("WALogger")
              .ERROR(
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: waveAtParticipant: voipStackInterface is null, aborting wave",
                  ])),
              )
              .sendLogs("voip: waveAtParticipant: voipStackInterface is null"),
            !1
          );
        if (!i) {
          var c, d;
          i =
            (c =
              (d = o("WAWebLidMigrationUtils").toPn(e)) == null
                ? void 0
                : d.toString()) != null
              ? c
              : "";
        }
        var m = await o("WAWebSendMsgDatabaseJob").getFanOutListJob([l]),
          p = Ue(m, "waveAtParticipant");
        return p.length === 0
          ? (o("WALogger")
              .ERROR(
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: waveAtParticipant: no devices resolved for participant, aborting wave",
                  ])),
              )
              .sendLogs("voip: waveAtParticipant: empty device list"),
            !1)
          : (await u.sendWave(i, a, p),
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
    }
    async function ze(e) {
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
          (await o("WAWebAdvSyncDeviceListApi").syncDeviceList({
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
    }
    ((l.preloadVoipBundleSafely = ge),
      (l.preloadGroupCallBundle = he),
      (l.beginOutgoingCallWithMiniplayer = Ce),
      (l.startWAWebVoipCall = Se),
      (l.startWAWebVoipGroupCallFromChat = Me),
      (l.startWAWebVoipGroupCallFromContacts = we),
      (l.startWAWebVoipGroupCallFromWids = Ae),
      (l.joinOngoingCallByCallId = Oe),
      (l.joinOngoingWAWebVoipGroupCallPN = Be),
      (l.inviteToCall = He),
      (l.waveAtParticipant = Ge));
  },
  226,
);
