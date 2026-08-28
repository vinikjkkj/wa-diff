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
      ee,
      te,
      ne,
      re,
      oe,
      ae,
      ie = ae || (ae = o("react")),
      le = "#aa6627",
      se = 3e4,
      ue = 6e4,
      ce = (e = n("cr:17219")) != null ? e : {},
      de = ce.getWindowsBridge,
      me = 5;
    function pe() {
      var e, t;
      return (e = (t = globalThis.performance) == null ? void 0 : t.now()) !=
        null
        ? e
        : null;
    }
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
    function Ce(e) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (r("WAWebCallCollection").pendingOutgoingCall != null)
            return (
              o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: outgoing call already pending; ignoring duplicate start",
                    ])),
                )
                .color(le),
              null
            );
          var t = new AbortController();
          ye({
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
                  .color(le),
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
                      .color(le),
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
        be.apply(this, arguments)
      );
    }
    function ve(e, t, n, r, o) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  ).wasDocumentHiddenWithinMs(se),
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
              yield ke(u, e, t, n, r, a);
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
        Se.apply(this, arguments)
      );
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
          o("WAComms").getMsSinceLastInboundRx() > ue) &&
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
    function Le(e, t) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        Ee.apply(this, arguments)
      );
    }
    function ke(e, t, n, r, o, a) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var u = pe();
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
            var c = yield Ce({ isGroup: !1, isJoin: !1, isVideo: a });
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
            Re(e);
            var m = pe();
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .DEVICE_PERMISSIONS_START,
            );
            var p = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(a, null, d);
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .DEVICE_PERMISSIONS_END,
            );
            var _ = _e(m, pe());
            if (!p) {
              if (d.aborted) {
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
                  e,
                  "aborted_before_signaling",
                );
                return;
              }
              (o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
                e,
                "permission_denied",
              ),
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
              return;
            }
            var f = s != null ? s : Ve(),
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
                  .color(le),
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
                  .color(le);
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
              yield Le(k, e),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SYNC_DEVICE_LIST_END,
              ));
            var I = pe();
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
            var x = _e(I, pe());
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
            var $ = (oe || (oe = n("Promise"))).all([
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
              a
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
              var A = Ue(M, "callStart");
              if (
                (o("WALogger")
                  .LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: Placing LID call",
                      ])),
                  )
                  .color(le),
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
                fe(f, {
                  coexModalMs: x,
                  devicePermissionsMs: _,
                  intentTs: u,
                  successTs: pe(),
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
                  .color(le),
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
            yield We(a);
          },
        )),
        Ie.apply(this, arguments)
      );
    }
    function Te(e, t, n, r, o, a) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                .color(le),
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
            var u = yield Ce({ isGroup: !0, isJoin: !1, isVideo: t });
            if (u != null) {
              var c = u.signal,
                d = yield o(
                  "WAWebVoipAcquireMediaStream",
                ).checkVoipDevicePermissions(t, null, c);
              if (!d) {
                if (c.aborted) return;
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                return;
              }
              var m = Ve(),
                p = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                _ = p
                  ? o("WAWebContactCollection").ContactCollection.get(p)
                  : null,
                f = _ ? o("WAWebFrontendContactGetters").getUsername(_) : null,
                g = (oe || (oe = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  He(e),
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
                  y = yield r("WAPromiseRaceAbort")(g, c),
                  C = y[0],
                  b = y[1],
                  v = b.gcDeviceJidsCsv,
                  S = b.gcUserJids,
                  R = b.gcUserPnJids;
                yield (oe || (oe = n("Promise"))).all(
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
                  .color(le);
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
                    .color(le);
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
                    .color(le);
                  return;
                }
                throw (
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  e
                );
              }
              yield We(t);
            }
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
              yield Te(
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
        $e.apply(this, arguments)
      );
    }
    function Pe(e, t, n, r) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  yield ve(i[0].id, t, n, a);
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
                yield Te(
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
        Ne.apply(this, arguments)
      );
    }
    function Me(e, t, n, r) {
      return we.apply(this, arguments);
    }
    function we() {
      return (
        (we = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  yield ve(a[0], t, n, r);
                  return;
                }
                yield Te(a, t, "", void 0, n, r);
              }
            }
          },
        )),
        we.apply(this, arguments)
      );
    }
    function Ae(e, t) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              .color(le),
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
              .color(le),
              o("WAWebToastManager").ToastManager.open(
                ie.jsx(o("WAWebToast.react").Toast, {
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
              .color(le),
              o("WAWebToastManager").ToastManager.open(
                ie.jsx(o("WAWebToast.react").Toast, {
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
          yield Oe({
            callId: e,
            chat: l,
            isDeviceSwitch: !0,
            isVideo: u,
            lobbyEntryPoint: t,
          });
        })),
        Fe.apply(this, arguments)
      );
    }
    function Oe(e) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  de == null ||
                  (h = de(
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
                  .color(le),
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
                  .color(le),
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
                .color(le),
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
                .color(le),
                yield o(
                  "WAWebVoipActionWriteCallLogEventUpdateJoinable",
                ).cleanupJoinableCallLog(a),
                o("WAWebToastManager").ToastManager.open(
                  ie.jsx(o("WAWebToast.react").Toast, {
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
              .color(le),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_JOIN_ONGOING_CALL,
              ));
            var b = (t = C.callParticipants) != null ? t : [],
              v = b
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
                  return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
                }),
              S = yield Ce({ isGroup: !0, isJoin: !0, isVideo: c });
            if (S != null) {
              var R = S.signal,
                L = (oe || (oe = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  He(v, !0),
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
                var E,
                  k = yield r("WAPromiseRaceAbort")(L, R),
                  I = k[0],
                  T = k[1],
                  D = T.gcDeviceJidsCsv,
                  x = T.gcUserJids,
                  $ = T.gcUserPnJids;
                yield (oe || (oe = n("Promise"))).all(
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
                    .color(le),
                  R.aborted)
                ) {
                  o("WALogger")
                    .LOG(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(le);
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
                    .color(le);
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
        Be.apply(this, arguments)
      );
    }
    function We(e) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        qe.apply(this, arguments)
      );
    }
    function Ue(e, t) {
      return e.length > me
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
    function Ve() {
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
          .color(le),
        e
      );
    }
    function He(e, t) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              .color(le),
              yield (oe || (oe = n("Promise"))).all(
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
                  .color(le);
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
          yield (oe || (oe = n("Promise"))).all(
            s.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              });
            }),
          );
          var c = yield oe.all(
              s.map(function (e) {
                return o("WAWebSendMsgDatabaseJob").getFanOutListJob([e]);
              }),
            ),
            d = c.map(function (e) {
              var t = Ue(e, "callStart"),
                n = t.join(",");
              return n;
            });
          return { gcUserJids: s, gcUserPnJids: u, gcDeviceJidsCsv: d };
        })),
        Ge.apply(this, arguments)
      );
    }
    function ze(e) {
      return je.apply(this, arguments);
    }
    function je() {
      return (
        (je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                a = yield Xe(e);
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
                u = yield (oe || (oe = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [s],
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
                _ = Ue(p, "inviteToCall");
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
        je.apply(this, arguments)
      );
    }
    function Ke(e) {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (
        (Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            J ||
              (J = babelHelpers.taggedTemplateLiteralLoose([
                "voip: waveAtParticipant called for chat: ",
                "",
              ])),
            e.toString(),
          );
          try {
            var t,
              a = yield Xe(e);
            if (a == null)
              return (
                o("WALogger")
                  .ERROR(
                    Z ||
                      (Z = babelHelpers.taggedTemplateLiteralLoose([
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
              u = yield (oe || (oe = n("Promise"))).all([
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
                    ee ||
                      (ee = babelHelpers.taggedTemplateLiteralLoose([
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
              _ = Ue(p, "waveAtParticipant");
            return _.length === 0
              ? (o("WALogger")
                  .ERROR(
                    te ||
                      (te = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: waveAtParticipant: no devices resolved for participant, aborting wave",
                      ])),
                  )
                  .sendLogs("voip: waveAtParticipant: empty device list"),
                !1)
              : (yield c.sendWave(l, i, _),
                o("WALogger").LOG(
                  ne ||
                    (ne = babelHelpers.taggedTemplateLiteralLoose([
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
                  re ||
                    (re = babelHelpers.taggedTemplateLiteralLoose([
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
        Qe.apply(this, arguments)
      );
    }
    function Xe(e) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Ye.apply(this, arguments)
      );
    }
    ((l.preloadGroupCallBundle = he),
      (l.startWAWebVoipCall = ve),
      (l.startWAWebVoipGroupCallFromChat = xe),
      (l.startWAWebVoipGroupCallFromContacts = Pe),
      (l.startWAWebVoipGroupCallFromWids = Me),
      (l.joinOngoingCallByCallId = Ae),
      (l.joinOngoingWAWebVoipGroupCallPN = Oe),
      (l.inviteToCall = ze),
      (l.waveAtParticipant = Ke));
  },
  226,
);
