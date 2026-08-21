__d(
  "WAWebVoipStartCall",
  [
    "fbt",
    "Promise",
    "WAComms",
    "WALogger",
    "WAPromiseRaceAbort",
    "WARandomHex",
    "WAWebAdvSyncDeviceListApi",
    "WAWebApiDeviceList",
    "WAWebBlockedParticipantCallWarning",
    "WAWebBuildConstants",
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebContactMutator",
    "WAWebCoreActionsODS",
    "WAWebEnsureVoipInited",
    "WAWebEnvironment",
    "WAWebFbtIntlList",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebNoop",
    "WAWebNotificationIconUtils",
    "WAWebOpenCoexCallingFirstTimeModalUtils",
    "WAWebPageVisibilityRecency",
    "WAWebPipController",
    "WAWebSendMsgDatabaseJob",
    "WAWebSendTcTokenChatAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipActionWriteCallLogEventUpdateJoinable",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCancelOutgoingCall",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipOutgoingCallQpl",
    "WAWebVoipOutgoingSetupLatencyMode",
    "WAWebVoipOutgoingSetupLatencyStore",
    "WAWebVoipPeerTcToken",
    "WAWebVoipStackInterface",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiVideoCallLoadable",
    "WAWebVoipUiVideoGroupCallLoadable",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWidFactory",
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
      ee = Z || (Z = o("react")),
      te = "#aa6627",
      ne = 3e4,
      re = 6e4,
      oe = (e = n("cr:17219")) != null ? e : {},
      ae = oe.getWindowsBridge,
      ie = 5;
    function le() {
      var e, t;
      return (e = (t = globalThis.performance) == null ? void 0 : t.now()) !=
        null
        ? e
        : null;
    }
    function se(e, t) {
      return e != null && t != null ? t - e : null;
    }
    function ue(e, t) {
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
    function ce(e, t) {
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
    function de() {
      return ce(
        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
        "voip-preload-group-call-bundle",
      );
    }
    function me(e) {
      r("WAWebEnvironment").isWindows ||
        (r("WAWebCallCollection").setPendingOutgoingCall({
          abortController: e.abortController,
          isGroup: e.isGroup,
          isJoin: e.isJoin,
          isVideo: e.isVideo,
        }),
        r("WAWebPipController").openVoipUiPiPForOutgoing());
    }
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (r("WAWebCallCollection").pendingOutgoingCall != null)
            return (
              o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: outgoing call already pending; ignoring duplicate start",
                    ])),
                )
                .color(te),
              null
            );
          var t = new AbortController();
          me({
            abortController: t,
            isGroup: e.isGroup,
            isJoin: e.isJoin,
            isVideo: e.isVideo,
          });
          var n = o("WAWebEnsureVoipInited").ensureVoipInitialized(
            "call",
            t.signal,
          );
          n.catch(r("WAWebNoop"));
          try {
            yield r("WAPromiseRaceAbort")(n, t.signal);
          } catch (e) {
            return t.signal.aborted
              ? (o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing call cancelled while waiting for VoIP init",
                      ])),
                  )
                  .color(te),
                null)
              : (o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                e instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError
                  ? (o("WALogger")
                      .LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: outgoing call stopped because VoIP init requires reload",
                          ])),
                      )
                      .color(te),
                    null)
                  : (o("WALogger")
                      .ERROR(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: outgoing call: VoIP init failed, aborting",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("voip-outgoing-ensure-init-failed"),
                    o(
                      "WAWebVoipCallBlockedModals",
                    ).showCouldNotPlaceCallModal(),
                    null));
          }
          return t;
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e, t, n, r, o) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i, l;
            (n === void 0 && (n = 0),
              r === void 0 && (r = 0),
              a === void 0 && (a = null));
            var s =
                (i =
                  (l = globalThis.document) == null
                    ? void 0
                    : l.visibilityState) != null
                  ? i
                  : "unknown",
              u = o("WAWebVoipOutgoingCallQpl").startVoipOutgoingCallQpl({
                bool: {
                  is_video: t,
                  is_hidden_at_start: s !== "visible",
                  socket_connected_at_start: o("WAComms").isSocketConnected(),
                  was_hidden_within_30s: o(
                    "WAWebPageVisibilityRecency",
                  ).wasDocumentHiddenWithinMs(ne),
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
                string: { visibility_state_at_start: s },
              });
            try {
              yield be(u, e, t, n, r, a);
            } catch (e) {
              throw (
                u.isActive() &&
                  o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
                    u,
                    "unexpected_error",
                  ),
                e
              );
            }
          },
        )),
        ge.apply(this, arguments)
      );
    }
    function he(e) {
      if (o("WAWebVoipOutgoingSetupLatencyMode").isSocketHealthCheckEnabled()) {
        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
          e,
          o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
            .SOCKET_HEALTH_CHECK_START,
        );
        var t = !1;
        ((!o("WAComms").isSocketConnected() ||
          o("WAComms").getMsSinceLastInboundRx() > re) &&
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
    function ye(e, t) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebVoipOutgoingSetupLatencyMode").isCacheAwareSyncEnabled())
            try {
              var n = yield o("WAWebApiDeviceList").getDeviceRecord(e);
              if (
                n != null &&
                n.deleted === !1 &&
                n.expectedTs == null &&
                n.advAccountType != null
              ) {
                var r = n.advAccountType;
                (o(
                  "WAWebVoipOutgoingCallQpl",
                ).voipOutgoingCallQplAddAnnotations(t, {
                  bool: { device_list_cache_hit: !0 },
                }),
                  o("WAWebContactMutator").updateContactAdvAccountType({
                    contactId: o("WAWebWidFactory").asUserWidOrThrow(e),
                    advAccountType: r,
                  }));
                return;
              }
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(
                t,
                { bool: { device_list_cache_hit: !1 } },
              );
            } catch (e) {
              (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(
                t,
                { bool: { device_list_cache_error: !0 } },
              ),
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: cache-aware device sync failed, falling back to network sync: ",
                      "",
                    ])),
                  e,
                ));
            }
          yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
            wids: [e],
            context: "voip",
            phash: null,
          });
        })),
        Ce.apply(this, arguments)
      );
    }
    function be(e, t, n, r, o, a) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var u = le();
            if (
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded()
            ) {
              o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
                e,
                "call_blocked",
              );
              return;
            }
            (o("WAWebVoipActivityTracker").startActivityTracking(),
              o("WAWebVoipActivityTracker").startUiActivityTracking(),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .VOIP_READY_START,
              ));
            var c = yield pe({ isGroup: !1, isJoin: !1, isVideo: a });
            if (c == null) {
              o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
                e,
                "voip_not_ready",
              );
              return;
            }
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .VOIP_READY_END,
            );
            var d = c.signal;
            he(e);
            var m = le();
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .DEVICE_PERMISSIONS_START,
            );
            var p = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(a);
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .DEVICE_PERMISSIONS_END,
            );
            var _ = se(m, le());
            if (!p) {
              (o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
                e,
                "permission_denied",
              ),
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
              return;
            }
            var f = s != null ? s : Fe(),
              g = o("WAWebLidMigrationUtils").toLid(t),
              E = o("WAWebLidMigrationUtils").toPn(t);
            if (g == null)
              if (
                (o("WALogger")
                  .LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: toLid() returned null, attempting usync for LID resolution",
                      ])),
                  )
                  .color(te),
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .LID_RESOLUTION_SYNC_START,
                ),
                yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                  wids: [t],
                  context: "voip",
                  phash: null,
                }),
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .LID_RESOLUTION_SYNC_END,
                ),
                (g = o("WAWebLidMigrationUtils").toLid(t)),
                g != null)
              )
                o("WALogger")
                  .LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: usync resolved LID successfully",
                      ])),
                  )
                  .color(te);
              else {
                (o("WALogger")
                  .ERROR(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: LID resolution failed after usync, aborting call",
                      ])),
                  )
                  .sendLogs(
                    "voip: startWAWebVoipCall: LID failed after usync, call aborted",
                  ),
                  o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
                    e,
                    "lid_resolution_failed",
                  ),
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
                return;
              }
            var k = g != null ? g : E;
            if (k == null) {
              (o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startWAWebVoipCall: peerWid is null",
                    ])),
                )
                .sendLogs("voip: startWAWebVoipCall: peerWid is null"),
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
                  e,
                  "peer_wid_null",
                ),
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
              return;
            }
            (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .SYNC_DEVICE_LIST_START,
            ),
              yield ye(k, e),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SYNC_DEVICE_LIST_END,
              ));
            var I = le();
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .COEX_FIRST_TIME_MODAL_START,
            );
            var T = yield o(
                "WAWebOpenCoexCallingFirstTimeModalUtils",
              ).maybeShowCoexCallingSMBFirstTimeModal(),
              D = yield o(
                "WAWebOpenCoexCallingFirstTimeModalUtils",
              ).maybeShowCoexCallingConsumerFirstTimeModal(t);
            ((T || D) &&
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(
                e,
                { bool: { coex_first_time_modal_shown: !0 } },
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .COEX_FIRST_TIME_MODAL_END,
              ));
            var x = se(I, le());
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
            var $ = (J || (J = n("Promise"))).all([
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
                .getFanOutListJob([k])
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
                .sendTcToken(k)
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
              ce(
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
                ? ce(
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
            $.catch(r("WAWebNoop"));
            try {
              var P = yield r("WAPromiseRaceAbort")($, d),
                N = P[0],
                M = P[1],
                w = P[2];
              if (
                (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .SETUP_END,
                ),
                N == null)
              ) {
                (o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
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
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
                return;
              }
              var A = Ae(M, "callStart");
              if (
                (o("WALogger")
                  .LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: Placing LID call",
                      ])),
                  )
                  .color(te),
                o("WAWebVoipGatingUtils").isWinHybridPlusEnabled())
              ) {
                var F;
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      'voip: [HYBRID+] placing 1:1 call via "',
                      '" stack (expect "web" = WASM)',
                    ])),
                  (F = N == null ? void 0 : N.type) != null ? F : "null",
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
                  ? o("WAWebCoreActionsODS").logCallOutgoingVideo()
                  : o("WAWebCoreActionsODS").logCallOutgoingAudio(),
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .START_CALL_START,
                ),
                yield N.startCall(
                  k,
                  A,
                  f,
                  a,
                  (E != null ? E : k).toString({ legacy: !0 }),
                  !1,
                  w,
                  i,
                  l,
                  null,
                ),
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .START_CALL_END,
                ),
                ue(f, {
                  coexModalMs: x,
                  devicePermissionsMs: _,
                  intentTs: u,
                  successTs: le(),
                }),
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplSuccess(e));
            } catch (t) {
              if (d.aborted) {
                (o("WALogger")
                  .LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: cancelled before signaling",
                      ])),
                  )
                  .color(te),
                  o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
                    e,
                    "aborted_before_signaling",
                  ));
                return;
              }
              throw (
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
                  e,
                  "setup_or_signaling_error",
                ),
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                t
              );
            }
            yield Me(a);
          },
        )),
        ve.apply(this, arguments)
      );
    }
    function Se(e, t, n, r, o, a) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            (l === void 0 && (l = 0),
              s === void 0 && (s = 0),
              o("WALogger")
                .LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startWAWebVoipCall: Placing Group call",
                    ])),
                )
                .color(te),
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
              ));
            var u = yield pe({ isGroup: !0, isJoin: !1, isVideo: t });
            if (u != null) {
              var c = u.signal,
                d = yield o(
                  "WAWebVoipAcquireMediaStream",
                ).checkVoipDevicePermissions(t);
              if (!d) {
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                return;
              }
              var m = Fe(),
                p = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                _ = p
                  ? o("WAWebContactCollection").ContactCollection.get(p)
                  : null,
                f = _ ? o("WAWebFrontendContactGetters").getUsername(_) : null,
                g = (J || (J = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  Oe(e),
                  ce(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-start-group-call-preload-ui",
                  ),
                  t
                    ? ce(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-start-group-call-preload-video",
                      )
                    : void 0,
                  t
                    ? ce(
                        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                        "voip-start-group-call-preload-video-group",
                      )
                    : void 0,
                ]);
              g.catch(r("WAWebNoop"));
              try {
                var h,
                  y = yield r("WAPromiseRaceAbort")(g, c),
                  C = y[0],
                  b = y[1],
                  v = b.gcDeviceJidsCsv,
                  S = b.gcUserJids,
                  R = b.gcUserPnJids;
                yield (J || (J = n("Promise"))).all(
                  S.map(function (e) {
                    return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                  }),
                );
                var L =
                  (h = i == null ? void 0 : i.toString({ legacy: !0 })) != null
                    ? h
                    : "";
                o("WALogger")
                  .LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipGroupCall: gid=",
                        " users=",
                        " name=",
                        "",
                      ])),
                    L,
                    S,
                    a,
                  )
                  .color(te);
                var D = i
                  ? yield o(
                      "WAWebNotificationIconUtils",
                    ).getNotificationIconByWid(
                      i,
                      new AbortController().signal,
                      o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
                    )
                  : o("WAWebNotificationIconUtils").USER_DEFAULT_ICON;
                if (c.aborted) {
                  o("WALogger")
                    .LOG(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(te);
                  return;
                }
                (o("WAWebCoreActionsODS").logCallAttempt(),
                  t
                    ? o("WAWebCoreActionsODS").logCallOutgoingGroupVideo()
                    : o("WAWebCoreActionsODS").logCallOutgoingGroupAudio(),
                  yield C == null
                    ? void 0
                    : C.startGroupCall(
                        R.map(function (e) {
                          var t;
                          return (t =
                            e == null ? void 0 : e.toString({ legacy: !0 })) !=
                            null
                            ? t
                            : "";
                        }),
                        S.map(function (e) {
                          return e.toString({ legacy: !0 });
                        }),
                        v,
                        m,
                        t,
                        L,
                        !1,
                        "",
                        a,
                        D,
                        l,
                        s,
                        o("WAWebUsernameTypes").serializeMaybeUsername(f),
                      ));
              } catch (e) {
                if (c.aborted) {
                  o("WALogger")
                    .LOG(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(te);
                  return;
                }
                throw (
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  e
                );
              }
              yield Me(t);
            }
          },
        )),
        Re.apply(this, arguments)
      );
    }
    function Le(e, t, n, r) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a, i;
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = 0),
              !(yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded()) &&
                (yield o(
                  "WAWebBlockedParticipantCallWarning",
                ).maybeShowBlockedParticipantCallWarning(e, "start")))
            ) {
              var l =
                (a =
                  (i = e.groupMetadata) == null
                    ? void 0
                    : i.participants.toArray()) != null
                  ? a
                  : [];
              yield Se(
                l.map(function (e) {
                  return e.id;
                }),
                t,
                e.name || e.formattedTitle,
                e.id,
                n,
                r,
              );
            }
          },
        )),
        Ee.apply(this, arguments)
      );
    }
    function ke(e, t, n, r) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (
              (n === void 0 && (n = 0),
              a === void 0 && (a = 0),
              !(yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded()))
            ) {
              var i = e.filter(function (e) {
                return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
              });
              if (i.length !== 0) {
                if (i.length === 1) {
                  yield fe(i[0].id, t, n, a);
                  return;
                }
                var l = r("WAWebFbtIntlList")(
                  i.map(function (e) {
                    return o(
                      "WAWebFrontendContactGetters",
                    ).getFormattedShortName(e);
                  }),
                  r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                  r("WAWebFbtIntlList").DELIMITERS.COMMA,
                );
                yield Se(
                  i.map(function (e) {
                    return e.id;
                  }),
                  t,
                  l.toString(),
                  void 0,
                  n,
                  a,
                );
              }
            }
          },
        )),
        Ie.apply(this, arguments)
      );
    }
    function Te(e, t, n, r) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = 0),
              !(yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded()))
            ) {
              var a = e.filter(function (e) {
                return !o("WAWebUserPrefsMeUser").isMeAccount(e) && !e.isBot();
              });
              if (a.length !== 0) {
                if (a.length === 1) {
                  yield fe(a[0], t, n, r);
                  return;
                }
                yield Se(a, t, "", void 0, n, r);
              }
            }
          },
        )),
        De.apply(this, arguments)
      );
    }
    function xe(e, t) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          (t === void 0 &&
            (t = o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .SECOND_NOTIFICATION),
            o("WALogger")
              .LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: callId=",
                    ", lobbyEntryPoint=",
                    "",
                  ])),
                e,
                t,
              )
              .color(te),
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
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: no call for ",
                    "",
                  ])),
                e,
              )
              .color(te),
              o("WAWebToastManager").ToastManager.open(
                ee.jsx(o("WAWebToast.react").Toast, {
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
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: No chat found for call ID ",
                    "",
                  ])),
                e,
              )
              .color(te),
              o("WAWebToastManager").ToastManager.open(
                ee.jsx(o("WAWebToast.react").Toast, {
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
          yield Pe({
            callId: e,
            chat: l,
            isDeviceSwitch: !0,
            isVideo: u,
            lobbyEntryPoint: t,
          });
        })),
        $e.apply(this, arguments)
      );
    }
    function Pe(e) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
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
            !(yield o(
              "WAWebVoipCallBlockedModals",
            ).showCallBlockedModalIfNeeded())
          ) {
            var f = yield o(
              "WAWebBlockedParticipantCallWarning",
            ).maybeShowBlockedParticipantCallWarning(i, "join");
            if (!f) {
              o("WAWebVoipActivityTracker").clearAllActivityTracking();
              return;
            }
            (o("WAWebVoipActivityTracker").startActivityTracking(),
              o("WAWebVoipActivityTracker").startUiActivityTracking());
            var g = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(c);
            if (!g) {
              o("WAWebVoipActivityTracker").clearAllActivityTracking();
              return;
            }
            if (
              r("WAWebEnvironment").isWindows &&
              !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
            ) {
              var h,
                y =
                  ae == null ||
                  (h = ae(
                    r("WAWebWindowsHybridBridgeInitiator").WAWebVoipStartCall,
                  )) == null
                    ? void 0
                    : h.voip;
              if (y == null) {
                (o("WALogger")
                  .LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: VoIP bridge is null",
                      ])),
                  )
                  .color(te),
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
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: unsupported",
                      ])),
                  )
                  .color(te),
                  o("WAWebVoipActivityTracker").clearAllActivityTracking());
                return;
              }
            }
            if (!o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled()) {
              (o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: not enabled",
                  ])),
              ),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            }
            var C = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(a);
            if (C == null) {
              (o("WALogger")
                .LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no call ",
                      "",
                    ])),
                  a,
                )
                .color(te),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            } else if (C.callCreator == null) {
              (o("WALogger")
                .LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no creator ",
                      "",
                    ])),
                  a,
                )
                .color(te),
                yield o(
                  "WAWebVoipActionWriteCallLogEventUpdateJoinable",
                ).cleanupJoinableCallLog(a),
                o("WAWebToastManager").ToastManager.open(
                  ee.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Could not join call."),
                  }),
                ),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            }
            (o("WALogger")
              .LOG(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: joining",
                  ])),
              )
              .color(te),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_JOIN_ONGOING_CALL,
              ));
            var b = (t = C.callParticipants) != null ? t : [],
              v = [
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              ].concat(
                b
                  .map(function (e) {
                    var t = o("WAWebLidMigrationUtils").toPn(e.participant);
                    return (
                      t == null &&
                        o("WALogger")
                          .ERROR(
                            O ||
                              (O = babelHelpers.taggedTemplateLiteralLoose([
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
                    return (
                      e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e)
                    );
                  }),
              ),
              S = yield pe({ isGroup: !0, isJoin: !0, isVideo: c });
            if (S != null) {
              var R = S.signal,
                L = (J || (J = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  Oe(v, !0),
                  ce(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-join-group-call-preload-ui",
                  ),
                  c
                    ? ce(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video",
                      )
                    : void 0,
                  c
                    ? ce(
                        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video-group",
                      )
                    : void 0,
                ]);
              L.catch(r("WAWebNoop"));
              try {
                var E,
                  k = yield r("WAPromiseRaceAbort")(L, R),
                  I = k[0],
                  T = k[1],
                  D = T.gcDeviceJidsCsv,
                  x = T.gcUserJids,
                  $ = T.gcUserPnJids;
                yield (J || (J = n("Promise"))).all(
                  x.map(function (e) {
                    return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                  }),
                );
                var U = i.id.isGroup() ? i.id.toString({ legacy: !0 }) : "";
                if (
                  (o("WALogger")
                    .LOG(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCallPN: groupJid: ",
                          "",
                        ])),
                      U,
                    )
                    .color(te),
                  R.aborted)
                ) {
                  o("WALogger")
                    .LOG(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(te);
                  return;
                }
                (o("WAWebCoreActionsODS").logCallGroupJoin(),
                  yield I == null
                    ? void 0
                    : I.joinOngoingCall(
                        a,
                        r("nullthrows")(C.callCreator).toString({
                          legacy: !0,
                          formatIncludeDevice: !0,
                        }),
                        "",
                        $.map(function (e) {
                          var t;
                          return (t =
                            e == null ? void 0 : e.toString({ legacy: !0 })) !=
                            null
                            ? t
                            : "";
                        }),
                        x.map(function (e) {
                          return e.toString({ legacy: !0 });
                        }),
                        D,
                        c,
                        U,
                        0,
                        !0,
                        (E = C.callLinkToken) != null ? E : "",
                        !1,
                        "",
                        m,
                        i.name || i.formattedTitle,
                        _,
                        u,
                      ));
              } catch (e) {
                if (R.aborted) {
                  o("WALogger")
                    .LOG(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(te);
                  return;
                }
                throw (
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  e
                );
              }
            }
          }
        })),
        Ne.apply(this, arguments)
      );
    }
    function Me(e) {
      return we.apply(this, arguments);
    }
    function we() {
      return (
        (we = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if ("permissions" in navigator) {
              if (e) {
                var t = yield navigator.permissions.query({ name: "camera" }),
                  n = t.state === "granted";
                n ||
                  o("WALogger").LOG(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: JS doesn't have camera permissions for a video call",
                      ])),
                  );
              }
              var r = yield navigator.permissions.query({ name: "microphone" }),
                a = r.state === "granted";
              a ||
                o("WALogger").LOG(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: JS doesn't have microphone permissions for a call",
                    ])),
                );
            }
          } catch (e) {
            o("WALogger").LOG(
              H ||
                (H = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: failed to check device permissions: ",
                  "",
                ])),
              e,
            );
          }
        })),
        we.apply(this, arguments)
      );
    }
    function Ae(e, t) {
      return e.length > ie
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function Fe() {
      var e = "00" + o("WARandomHex").randomHex(16).substr(2);
      return (
        o("WALogger")
          .LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip:generateCallId: ",
                "",
              ])),
            e,
          )
          .color(te),
        e
      );
    }
    function Oe(e, t) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            a = e.map(function (e) {
              return o("WAWebLidMigrationUtils").toLid(e);
            }),
            i = e.filter(function (e, t) {
              return a[t] == null;
            });
          if (i.length > 0) {
            (o("WALogger")
              .LOG(
                G ||
                  (G = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParticipantJids: ",
                    " participants unresolved, attempting usync",
                  ])),
                i.length,
              )
              .color(te),
              yield (J || (J = n("Promise"))).all(
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
                    z ||
                      (z = babelHelpers.taggedTemplateLiteralLoose([
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
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getVoipParticipantJids: usync resolved all participants successfully",
                      ])),
                  )
                  .color(te);
          }
          var s = [].concat(
              t ? [r] : [],
              a.filter(function (e) {
                return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
              }),
            ),
            u = s.map(function (e) {
              return o("WAWebLidMigrationUtils").toPn(e);
            });
          yield (J || (J = n("Promise"))).all(
            s.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              });
            }),
          );
          var c = yield J.all(
              s.map(function (e) {
                return o("WAWebSendMsgDatabaseJob").getFanOutListJob([e]);
              }),
            ),
            d = c.map(function (e) {
              var t = Ae(e, "callStart"),
                n = t.join(",");
              return n;
            });
          return { gcUserJids: s, gcUserPnJids: u, gcDeviceJidsCsv: d };
        })),
        Be.apply(this, arguments)
      );
    }
    function We(e) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(yield o(
              "WAWebVoipCallBlockedModals",
            ).showCallBlockedModalIfNeeded())
          ) {
            o("WALogger").LOG(
              K ||
                (K = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: inviteToCall called for chat: ",
                  "",
                ])),
              e.toString(),
            );
            try {
              var t,
                a = yield Ue(e);
              if (a == null) {
                o("WALogger")
                  .ERROR(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: inviteToCall: LID resolution failed for participant, aborting invite",
                      ])),
                  )
                  .sendLogs("voip: inviteToCall: LID expected but missing");
                return;
              }
              var i = a.lidJid,
                l = a.pnJid,
                s = (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e,
                u = yield (J || (J = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [s],
                    context: "voip",
                    phash: null,
                  }),
                  ce(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-invite-to-call-preload-ui",
                  ),
                  ce(
                    o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                    "voip-invite-to-call-preload-video-group",
                  ),
                ]),
                c = u[0];
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
                _ = Ae(p, "inviteToCall");
              (yield c == null ? void 0 : c.inviteToCall(l, i, _),
                o("WALogger").LOG(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: inviteToCall completed successfully for ",
                      "",
                    ])),
                  e.toString(),
                ));
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    Y ||
                      (Y = babelHelpers.taggedTemplateLiteralLoose([
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
        qe.apply(this, arguments)
      );
    }
    function Ue(e) {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Ve.apply(this, arguments)
      );
    }
    ((l.preloadGroupCallBundle = de),
      (l.startWAWebVoipCall = fe),
      (l.startWAWebVoipGroupCallFromChat = Le),
      (l.startWAWebVoipGroupCallFromContacts = ke),
      (l.startWAWebVoipGroupCallFromWids = Te),
      (l.joinOngoingCallByCallId = xe),
      (l.joinOngoingWAWebVoipGroupCallPN = Pe),
      (l.inviteToCall = We));
  },
  226,
);
