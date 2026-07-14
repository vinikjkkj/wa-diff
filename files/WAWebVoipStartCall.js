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
    "WAWebBackendApi",
    "WAWebBlockedParticipantCallWarning",
    "WAWebBuildConstants",
    "WAWebCallCollection",
    "WAWebConstantsDeprecated",
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
    "WAWebVoipStackInterface",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiVideoCallLoadable",
    "WAWebVoipUiVideoGroupCallLoadable",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWidFactory",
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
      J = Y || (Y = o("react")),
      Z = 3e4,
      ee = 6e4,
      te = (e = n("cr:17219")) != null ? e : {},
      ne = te.getWindowsBridge,
      re = 5;
    function oe() {
      var e, t;
      return (e = (t = globalThis.performance) == null ? void 0 : t.now()) !=
        null
        ? e
        : null;
    }
    function ae(e, t) {
      return e != null && t != null ? t - e : null;
    }
    function ie(e, t) {
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
    function le(e, t) {
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
    function se() {
      return le(
        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
        "voip-preload-group-call-bundle",
      );
    }
    function ue() {
      return (X || (X = n("Promise")))
        .all([
          le(
            o("WAWebVoipUiLoadable").requireBundle,
            "voip-preload-call-link-ui",
          ),
          le(
            o("WAWebVoipUiVideoCallLoadable").requireBundle,
            "voip-preload-call-link-video",
          ),
        ])
        .then(function () {});
    }
    function ce(e) {
      r("WAWebEnvironment").isWindows ||
        (r("WAWebCallCollection").setPendingOutgoingCall({
          abortController: e.abortController,
          isGroup: e.isGroup,
          isJoin: e.isJoin,
          isVideo: e.isVideo,
        }),
        r("WAWebPipController").openVoipUiPiPForOutgoing());
    }
    function de(e) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (r("WAWebCallCollection").pendingOutgoingCall != null)
            return (
              o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: outgoing call already pending; ignoring duplicate start",
                    ])),
                )
                .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              null
            );
          var t = new AbortController();
          ce({
            abortController: t,
            isGroup: e.isGroup,
            isJoin: e.isJoin,
            isVideo: e.isVideo,
          });
          var n = o("WAWebEnsureVoipInited").ensureVoipInitialized();
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
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                null)
              : (o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing call: VoIP init failed, aborting",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-outgoing-ensure-init-failed"),
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal(),
                null);
          }
          return t;
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e, t, n, r, o) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  ).wasDocumentHiddenWithinMs(Z),
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
              yield ye(u, e, t, n, r, a);
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
        _e.apply(this, arguments)
      );
    }
    function fe(e) {
      if (o("WAWebVoipOutgoingSetupLatencyMode").isSocketHealthCheckEnabled()) {
        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
          e,
          o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
            .SOCKET_HEALTH_CHECK_START,
        );
        var t = !1;
        ((!o("WAComms").isSocketConnected() ||
          o("WAComms").getMsSinceLastInboundRx() > ee) &&
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
    function ge(e, t) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
        he.apply(this, arguments)
      );
    }
    function ye(e, t, n, r, o, a) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var u = oe();
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
            var c = yield de({ isGroup: !1, isJoin: !1, isVideo: a });
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
            fe(e);
            var m = oe();
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
            var _ = ae(m, oe());
            if (!p) {
              (o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
                e,
                "permission_denied",
              ),
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
              return;
            }
            var f = s != null ? s : we(),
              R = o("WAWebLidMigrationUtils").toLid(t),
              L = o("WAWebLidMigrationUtils").toPn(t);
            if (R == null)
              if (
                (o("WALogger")
                  .LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: toLid() returned null, attempting usync for LID resolution",
                      ])),
                  )
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
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
                (R = o("WAWebLidMigrationUtils").toLid(t)),
                R != null)
              )
                o("WALogger")
                  .LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: usync resolved LID successfully",
                      ])),
                  )
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
              else {
                (o("WALogger")
                  .ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
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
            var E = R != null ? R : L;
            if (E == null) {
              (o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
              yield ge(E, e),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SYNC_DEVICE_LIST_END,
              ));
            var k = oe();
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .COEX_FIRST_TIME_MODAL_START,
            );
            var I = yield o(
                "WAWebOpenCoexCallingFirstTimeModalUtils",
              ).maybeShowCoexCallingSMBFirstTimeModal(),
              T = yield o(
                "WAWebOpenCoexCallingFirstTimeModalUtils",
              ).maybeShowCoexCallingConsumerFirstTimeModal(t);
            ((I || T) &&
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(
                e,
                { bool: { coex_first_time_modal_shown: !0 } },
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .COEX_FIRST_TIME_MODAL_END,
              ));
            var D = ae(k, oe());
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
            var x = (X || (X = n("Promise"))).all([
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
                .getFanOutListJob([E])
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
              o("WAWebBackendApi")
                .frontendSendAndReceive("getTcToken", { wid: t })
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
                .sendTcToken(E)
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
              le(
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
                ? le(
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
            x.catch(r("WAWebNoop"));
            try {
              var $ = yield r("WAPromiseRaceAbort")(x, d),
                P = $[0],
                N = $[1],
                M = $[2].tcToken;
              if (
                (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .SETUP_END,
                ),
                P == null)
              ) {
                (o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
              var w = Me(N, "callStart");
              (o("WALogger")
                .LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startWAWebVoipCall: Placing LID call",
                    ])),
                )
                .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                o("WAWebVoipActivityTracker").trackActivity(
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
                yield P.startCall(
                  E,
                  w,
                  f,
                  a,
                  (L != null ? L : E).toString({ legacy: !0 }),
                  !1,
                  M,
                  i,
                  l,
                  null,
                ),
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .START_CALL_END,
                ),
                ie(f, {
                  coexModalMs: D,
                  devicePermissionsMs: _,
                  intentTs: u,
                  successTs: oe(),
                }),
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplSuccess(e));
            } catch (t) {
              if (d.aborted) {
                (o("WALogger")
                  .LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: cancelled before signaling",
                      ])),
                  )
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
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
            yield Pe(a);
          },
        )),
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
            (l === void 0 && (l = 0),
              s === void 0 && (s = 0),
              o("WALogger")
                .LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startWAWebVoipCall: Placing Group call",
                    ])),
                )
                .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
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
            var u = yield de({ isGroup: !0, isJoin: !1, isVideo: t });
            if (u != null) {
              var c = u.signal,
                d = yield o(
                  "WAWebVoipAcquireMediaStream",
                ).checkVoipDevicePermissions(t);
              if (!d) {
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                return;
              }
              var m = we(),
                p = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                _ = p
                  ? o("WAWebContactCollection").ContactCollection.get(p)
                  : null,
                f = _ ? o("WAWebFrontendContactGetters").getUsername(_) : null,
                g = (X || (X = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  Ae(e),
                  le(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-start-group-call-preload-ui",
                  ),
                  t
                    ? le(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-start-group-call-preload-video",
                      )
                    : void 0,
                  t
                    ? le(
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
                  I = b.gcUserPnJids;
                yield (X || (X = n("Promise"))).all(
                  S.map(function (e) {
                    return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                  }),
                );
                var T =
                  (h = i == null ? void 0 : i.toString({ legacy: !0 })) != null
                    ? h
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
                    T,
                    S,
                    a,
                  )
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
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
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
                  return;
                }
                (o("WAWebCoreActionsODS").logCallAttempt(),
                  t
                    ? o("WAWebCoreActionsODS").logCallOutgoingGroupVideo()
                    : o("WAWebCoreActionsODS").logCallOutgoingGroupAudio(),
                  yield C == null
                    ? void 0
                    : C.startGroupCall(
                        I.map(function (e) {
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
                        T,
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
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
                  return;
                }
                throw (
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  e
                );
              }
              yield Pe(t);
            }
          },
        )),
        ve.apply(this, arguments)
      );
    }
    function Se(e, t, n, r) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              yield be(
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
        Re.apply(this, arguments)
      );
    }
    function Le(e, t, n, r) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  yield pe(i[0].id, t, n, a);
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
                yield be(
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
        Ee.apply(this, arguments)
      );
    }
    function ke(e, t, n, r) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  yield pe(a[0], t, n, r);
                  return;
                }
                yield be(a, t, "", void 0, n, r);
              }
            }
          },
        )),
        Ie.apply(this, arguments)
      );
    }
    function Te(e) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          (o("WALogger")
            .LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinOngoingCallByCallId: callId=",
                  "",
                ])),
              e,
            )
            .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
            o("WAWebVoipActivityTracker").startActivityTracking(),
            o("WAWebVoipActivityTracker").startUiActivityTracking(),
            o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .USER_JOIN_ONGOING_CALL,
            ));
          var n = o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(e);
          if (n == null) {
            (o("WALogger")
              .LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: no call for ",
                    "",
                  ])),
                e,
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              o("WAWebToastManager").ToastManager.open(
                J.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Call not found."),
                }),
              ));
            return;
          }
          var a = n.to;
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
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              o("WAWebToastManager").ToastManager.open(
                J.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Could not join call."),
                }),
              ));
            return;
          }
          var i = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              a,
              "voipNotification",
            ),
            l = i.chat,
            u = (t = n.isVideoCall) != null ? t : !1;
          yield xe({
            callId: e,
            chat: l,
            isDeviceSwitch: !0,
            isVideo: u,
            lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType")
              .LOBBY_ENTRY_POINT_TYPE.SECOND_NOTIFICATION,
          });
        })),
        De.apply(this, arguments)
      );
    }
    function xe(e) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a = e.callId,
            i = e.chat,
            l = e.isDeviceSwitch,
            u = l === void 0 ? !1 : l,
            c = e.isVideo,
            d = e.lobbyEntryPoint,
            m = d === void 0 ? 0 : d;
          if (
            !(yield o(
              "WAWebVoipCallBlockedModals",
            ).showCallBlockedModalIfNeeded())
          ) {
            var p = yield o(
              "WAWebBlockedParticipantCallWarning",
            ).maybeShowBlockedParticipantCallWarning(i, "join");
            if (!p) {
              o("WAWebVoipActivityTracker").clearAllActivityTracking();
              return;
            }
            (o("WAWebVoipActivityTracker").startActivityTracking(),
              o("WAWebVoipActivityTracker").startUiActivityTracking());
            var _ = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(c);
            if (!_) {
              o("WAWebVoipActivityTracker").clearAllActivityTracking();
              return;
            }
            if (r("WAWebEnvironment").isWindows) {
              var f,
                g = ne == null || (f = ne()) == null ? void 0 : f.voip;
              if (g == null) {
                (o("WALogger")
                  .LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: VoIP bridge is null",
                      ])),
                  )
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                  o("WAWebVoipActivityTracker").clearAllActivityTracking());
                return;
              }
              if (
                !("joinOngoingCall" in g) ||
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
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                  o("WAWebVoipActivityTracker").clearAllActivityTracking());
                return;
              }
            }
            if (!o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled()) {
              (o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: not enabled",
                  ])),
              ),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            }
            var h = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(a);
            if (h == null) {
              (o("WALogger")
                .LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no call ",
                      "",
                    ])),
                  a,
                )
                .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            } else if (h.callCreator == null) {
              (o("WALogger")
                .LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no creator ",
                      "",
                    ])),
                  a,
                )
                .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                yield o(
                  "WAWebVoipActionWriteCallLogEventUpdateJoinable",
                ).cleanupJoinableCallLog(a),
                o("WAWebToastManager").ToastManager.open(
                  J.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Could not join call."),
                  }),
                ),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            }
            (o("WALogger")
              .LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: joining",
                  ])),
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_JOIN_ONGOING_CALL,
              ));
            var y = (t = h.callParticipants) != null ? t : [],
              C = [
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              ].concat(
                y
                  .map(function (e) {
                    var t = o("WAWebLidMigrationUtils").toPn(e.participant);
                    return (
                      t == null &&
                        o("WALogger")
                          .ERROR(
                            A ||
                              (A = babelHelpers.taggedTemplateLiteralLoose([
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
              b = yield de({ isGroup: !0, isJoin: !0, isVideo: c });
            if (b != null) {
              var v = b.signal,
                S = (X || (X = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  Ae(C, !0),
                  le(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-join-group-call-preload-ui",
                  ),
                  c
                    ? le(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video",
                      )
                    : void 0,
                  c
                    ? le(
                        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video-group",
                      )
                    : void 0,
                ]);
              S.catch(r("WAWebNoop"));
              try {
                var R,
                  L = yield r("WAPromiseRaceAbort")(S, v),
                  E = L[0],
                  k = L[1],
                  I = k.gcDeviceJidsCsv,
                  T = k.gcUserJids,
                  D = k.gcUserPnJids;
                yield (X || (X = n("Promise"))).all(
                  T.map(function (e) {
                    return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                  }),
                );
                var W = i.id.isGroup() ? i.id.toString({ legacy: !0 }) : "";
                if (
                  (o("WALogger")
                    .LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCallPN: groupJid: ",
                          "",
                        ])),
                      W,
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                  v.aborted)
                ) {
                  o("WALogger")
                    .LOG(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
                  return;
                }
                (o("WAWebCoreActionsODS").logCallGroupJoin(),
                  yield E == null
                    ? void 0
                    : E.joinOngoingCall(
                        a,
                        r("nullthrows")(h.callCreator).toString({
                          legacy: !0,
                          formatIncludeDevice: !0,
                        }),
                        "",
                        D.map(function (e) {
                          var t;
                          return (t =
                            e == null ? void 0 : e.toString({ legacy: !0 })) !=
                            null
                            ? t
                            : "";
                        }),
                        T.map(function (e) {
                          return e.toString({ legacy: !0 });
                        }),
                        I,
                        c,
                        W,
                        0,
                        !0,
                        (R = h.callLinkToken) != null ? R : "",
                        !1,
                        "",
                        !1,
                        i.name || i.formattedTitle,
                        m,
                        u,
                      ));
              } catch (e) {
                if (v.aborted) {
                  o("WALogger")
                    .LOG(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
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
        $e.apply(this, arguments)
      );
    }
    function Pe(e) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Ne.apply(this, arguments)
      );
    }
    function Me(e, t) {
      return e.length > re
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
    function we() {
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
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
        e
      );
    }
    function Ae(e, t) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            i = e.map(function (e) {
              return o("WAWebLidMigrationUtils").toLid(e);
            }),
            l = e.filter(function (e, t) {
              return i[t] == null;
            });
          if (l.length > 0) {
            (o("WALogger")
              .LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParticipantJids: ",
                    " participants unresolved, attempting usync",
                  ])),
                l.length,
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              yield (X || (X = n("Promise"))).all(
                l.map(function (e) {
                  return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [e],
                    context: "voip",
                    phash: null,
                  });
                }),
              ),
              (i = e.map(function (e) {
                return o("WAWebLidMigrationUtils").toLid(e);
              })));
            var s = e.filter(function (e, t) {
              return i[t] == null;
            });
            s.length > 0
              ? o("WALogger")
                  .ERROR(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getVoipParticipantJids: ",
                        " participants still unresolved after usync, stripping",
                      ])),
                    s.length,
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
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
          }
          var u = [].concat(
              t ? [a] : [],
              i.filter(function (e) {
                return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
              }),
            ),
            c = u.map(function (e) {
              return o("WAWebLidMigrationUtils").toPn(e);
            });
          yield (X || (X = n("Promise"))).all(
            u.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              });
            }),
          );
          var d = yield X.all(
              u.map(function (e) {
                return o("WAWebSendMsgDatabaseJob").getFanOutListJob([e]);
              }),
            ),
            m = d.map(function (e) {
              var t = Me(e, "callStart"),
                n = t.join(",");
              return n;
            });
          return { gcUserJids: u, gcUserPnJids: c, gcDeviceJidsCsv: m };
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
              var t,
                a = e.toString(),
                i = "",
                l = "";
              if (e.isLid()) {
                var s, u, c, d;
                ((l =
                  (s =
                    (u = o("WAWebLidMigrationUtils").toLid(e)) == null
                      ? void 0
                      : u.toString()) != null
                    ? s
                    : a),
                  (i =
                    (c =
                      (d = o("WAWebLidMigrationUtils").toPn(e)) == null
                        ? void 0
                        : d.toString()) != null
                      ? c
                      : ""));
              } else {
                var m, p, _, f;
                if (
                  ((i =
                    (m =
                      (p = o("WAWebLidMigrationUtils").toPn(e)) == null
                        ? void 0
                        : p.toString()) != null
                      ? m
                      : a),
                  (l =
                    (_ =
                      (f = o("WAWebLidMigrationUtils").toLid(e)) == null
                        ? void 0
                        : f.toString()) != null
                      ? _
                      : ""),
                  !l)
                ) {
                  var g, h;
                  (yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [e],
                    context: "voip",
                    phash: null,
                  }),
                    (l =
                      (g =
                        (h = o("WAWebLidMigrationUtils").toLid(e)) == null
                          ? void 0
                          : h.toString()) != null
                        ? g
                        : ""));
                }
              }
              if (!l) {
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
              var y =
                  (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e,
                C = yield (X || (X = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [y],
                    context: "voip",
                    phash: null,
                  }),
                  le(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-invite-to-call-preload-ui",
                  ),
                  le(
                    o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                    "voip-invite-to-call-preload-video-group",
                  ),
                ]),
                b = C[0];
              if (!i) {
                var v, S;
                i =
                  (v =
                    (S = o("WAWebLidMigrationUtils").toPn(e)) == null
                      ? void 0
                      : S.toString()) != null
                    ? v
                    : "";
              }
              var R = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([y]),
                L = Me(R, "inviteToCall");
              (yield b == null ? void 0 : b.inviteToCall(i, l, L),
                o("WALogger").LOG(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: inviteToCall completed successfully for ",
                      "",
                    ])),
                  e.toString(),
                ));
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
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
        Be.apply(this, arguments)
      );
    }
    ((l.preloadGroupCallBundle = se),
      (l.preloadCallLinkBundles = ue),
      (l.startWAWebVoipCall = pe),
      (l.startWAWebVoipGroupCallFromChat = Se),
      (l.startWAWebVoipGroupCallFromContacts = Le),
      (l.startWAWebVoipGroupCallFromWids = ke),
      (l.joinOngoingCallByCallId = Te),
      (l.joinOngoingWAWebVoipGroupCallPN = xe),
      (l.inviteToCall = Oe));
  },
  226,
);
