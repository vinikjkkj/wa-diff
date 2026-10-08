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
    "WAWebApiDeviceList",
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
    "WAWebShouldShowCallButtons",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipActionWriteCallLogEventUpdateJoinable",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCallFromUiStore",
    "WAWebVoipCallIdProvider",
    "WAWebVoipCancelOutgoingCall",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipOutgoingCallConsent",
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
      ie,
      le = ie || (ie = o("react")),
      se = "#aa6627",
      ue = 3e4,
      ce = 6e4,
      de = (e = n("cr:17219")) != null ? e : {},
      me = de.getWindowsBridge,
      pe = 5;
    function _e() {
      var e, t;
      return (e = (t = globalThis.performance) == null ? void 0 : t.now()) !=
        null
        ? e
        : null;
    }
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
          if (r("WAWebCallCollection").pendingOutgoingCall != null)
            return (
              o("WALogger")
                .LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: outgoing call already pending; ignoring duplicate start",
                    ])),
                )
                .color(se),
              null
            );
          var t = new AbortController();
          Ce({
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing call cancelled while waiting for VoIP init",
                      ])),
                  )
                  .color(se),
                null)
              : (o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                e instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError
                  ? (o("WALogger")
                      .LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: outgoing call stopped because VoIP init requires reload",
                          ])),
                      )
                      .color(se),
                    null)
                  : (o("WALogger")
                      .ERROR(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
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
          return (
            o("WAWebVoipGatingUtils").isAdaptiveSctpPrewarmV2Enabled() &&
              r("JSResourceForInteraction")("WAWebVoipSctpPrewarm")
                .__setRef("WAWebVoipStartCall")
                .load()
                .then(
                  function (e) {
                    e({ trigger: "outgoing_intent" });
                  },
                  function (e) {
                    o("WALogger")
                      .WARN(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: outgoing-intent SCTP prewarm module failed to load",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  },
                ),
            t
          );
        })),
        ve.apply(this, arguments)
      );
    }
    function Se(e, t, n, r, o, a) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l, s;
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = 0),
              a === void 0 && (a = null),
              i === void 0 && (i = {}),
              !(yield o("WAWebVoipOutgoingCallConsent").hasOutgoingCallConsent(
                o("WAWebVoipOutgoingCallConsent").entryTrustOf(i),
                e,
                t,
              )))
            ) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            var u =
                (l =
                  (s = globalThis.document) == null
                    ? void 0
                    : s.visibilityState) != null
                  ? l
                  : "unknown",
              c = o("WAWebVoipOutgoingCallQpl").startVoipOutgoingCallQpl({
                bool: {
                  is_video: t,
                  is_hidden_at_start: u !== "visible",
                  socket_connected_at_start: o("WAComms").isSocketConnected(),
                  was_hidden_within_30s: o(
                    "WAWebPageVisibilityRecency",
                  ).wasDocumentHiddenWithinMs(ue),
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
                string: { visibility_state_at_start: u },
              });
            try {
              yield Ie(c, e, t, n, r, a);
            } catch (e) {
              throw (
                c.isActive() &&
                  o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
                    c,
                    "unexpected_error",
                  ),
                e
              );
            }
          },
        )),
        Re.apply(this, arguments)
      );
    }
    function Le(e) {
      if (o("WAWebVoipOutgoingSetupLatencyMode").isSocketHealthCheckEnabled()) {
        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
          e,
          o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
            .SOCKET_HEALTH_CHECK_START,
        );
        var t = !1;
        ((!o("WAComms").isSocketConnected() ||
          o("WAComms").getMsSinceLastInboundRx() > ce) &&
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
    function Ee(e, t) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t, n, r, o, a) {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var u = _e(),
              c =
                s != null
                  ? s
                  : o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
            if (
              (o("WAWebVoipCallIdProvider").resetPendingCallId(),
              o("WAWebVoipCallFromUiStore").setCallFromUi(i),
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded())
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
            var d = yield be({ isGroup: !1, isJoin: !1, isVideo: a });
            if (d == null) {
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
            var m = d.signal;
            Le(e);
            var p = _e();
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .DEVICE_PERMISSIONS_START,
            );
            var _ = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(a, null, m);
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .DEVICE_PERMISSIONS_END,
            );
            var f = fe(p, _e());
            if (!_) {
              if (m.aborted) {
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
            var g = o("WAWebLidMigrationUtils").toLid(t),
              h = o("WAWebLidMigrationUtils").toPn(t);
            if (g == null)
              if (
                (o("WALogger")
                  .LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: toLid() returned null, attempting usync for LID resolution",
                      ])),
                  )
                  .color(se),
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
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: usync resolved LID successfully",
                      ])),
                  )
                  .color(se);
              else {
                (o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
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
            var y = g != null ? g : h;
            if (y == null) {
              (o("WALogger")
                .ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
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
              yield Ee(y, e),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SYNC_DEVICE_LIST_END,
              ));
            var I = _e();
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
            var x = fe(I, _e());
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
            var $ = (ae || (ae = n("Promise"))).all([
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
                .getFanOutListJob([y])
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
                .sendTcToken(y)
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
            $.catch(r("WAWebNoop"));
            try {
              var P = yield r("WAPromiseRaceAbort")($, m),
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
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
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
              var A = He(M, "callStart");
              if (
                (o("WALogger")
                  .LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: Placing LID call",
                      ])),
                  )
                  .color(se),
                o("WAWebVoipGatingUtils").isWinHybridPlusEnabled())
              ) {
                var F;
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
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
                  y,
                  A,
                  c,
                  a,
                  (h != null ? h : y).toString({ legacy: !0 }),
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
                ge(c, {
                  coexModalMs: x,
                  devicePermissionsMs: f,
                  intentTs: u,
                  successTs: _e(),
                }),
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplSuccess(e));
            } catch (t) {
              if (m.aborted) {
                (o("WALogger")
                  .LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: cancelled before signaling",
                      ])),
                  )
                  .color(se),
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
            yield Ue(a);
          },
        )),
        Te.apply(this, arguments)
      );
    }
    function De(e, t, n, r, o, a) {
      return xe.apply(this, arguments);
    }
    function xe() {
      return (
        (xe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            (l === void 0 && (l = 0),
              s === void 0 && (s = 0),
              o("WALogger")
                .LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startWAWebVoipCall: Placing Group call",
                    ])),
                )
                .color(se));
            var u = o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
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
              ));
            var c = yield be({ isGroup: !0, isJoin: !1, isVideo: t });
            if (c != null) {
              var d = c.signal,
                m = yield o(
                  "WAWebVoipAcquireMediaStream",
                ).checkVoipDevicePermissions(t, null, d);
              if (!m) {
                if (d.aborted) return;
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                return;
              }
              var p = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                _ = p
                  ? o("WAWebContactCollection").ContactCollection.get(p)
                  : null,
                f = _ ? o("WAWebFrontendContactGetters").getUsername(_) : null,
                g = (ae || (ae = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  Ge(e),
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
              g.catch(r("WAWebNoop"));
              try {
                var h,
                  y = yield r("WAPromiseRaceAbort")(g, d),
                  C = y[0],
                  b = y[1],
                  v = b.gcDeviceJidsCsv,
                  S = b.gcUserJids,
                  R = b.gcUserPnJids;
                yield (ae || (ae = n("Promise"))).all(
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
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipGroupCall: gid=",
                        " users=",
                        " name=",
                        "",
                      ])),
                    L,
                    S,
                    a,
                  )
                  .color(se);
                var E = i
                  ? yield o(
                      "WAWebNotificationIconUtils",
                    ).getNotificationIconByWid(
                      i,
                      new AbortController().signal,
                      o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
                    )
                  : o("WAWebNotificationIconUtils").USER_DEFAULT_ICON;
                if (d.aborted) {
                  o("WALogger")
                    .LOG(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(se);
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
                        u,
                        t,
                        L,
                        !1,
                        "",
                        a,
                        E,
                        l,
                        s,
                        o("WAWebUsernameTypes").serializeMaybeUsername(f),
                      ));
              } catch (e) {
                if (d.aborted) {
                  o("WALogger")
                    .LOG(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(se);
                  return;
                }
                throw (
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  e
                );
              }
              yield Ue(t);
            }
          },
        )),
        xe.apply(this, arguments)
      );
    }
    function $e(e, t, n, r) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a, i;
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = 0),
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded())
            ) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            var l = Fe(
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
            if (l == null) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            yield De(l, t, e.name || e.formattedTitle, e.id, n, r);
          },
        )),
        Pe.apply(this, arguments)
      );
    }
    function Ne(e, t, n, r, o) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            if (
              (n === void 0 && (n = 0),
              a === void 0 && (a = 0),
              i === void 0 && (i = {}),
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded())
            ) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            var l = e.filter(function (e) {
              return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
            });
            if (l.length === 0) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            if (l.length === 1) {
              yield Se(l[0].id, t, n, a, null, i);
              return;
            }
            var s = r("WAWebFbtIntlList")(
              l.map(function (e) {
                return o("WAWebFrontendContactGetters").getFormattedShortName(
                  e,
                );
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            );
            yield De(
              l.map(function (e) {
                return e.id;
              }),
              t,
              s.toString(),
              void 0,
              n,
              a,
            );
          },
        )),
        Me.apply(this, arguments)
      );
    }
    function we(e, t, n, r, o) {
      return Ae.apply(this, arguments);
    }
    function Ae() {
      return (
        (Ae = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = 0),
              a === void 0 && (a = {}),
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded())
            ) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            if (e.length === 0) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            var i = Fe(e, "startWAWebVoipGroupCallFromWids");
            if (i == null) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            if (i.length === 1) {
              yield Se(i[0], t, n, r, null, a);
              return;
            }
            yield De(i, t, "", void 0, n, r);
          },
        )),
        Ae.apply(this, arguments)
      );
    }
    function Fe(e, t) {
      var n = e.filter(function (e) {
        return o("WAWebShouldShowCallButtons").canBeCallParticipant(e);
      });
      n.length < e.length &&
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
        return !o("WAWebUserPrefsMeUser").isMeAccount(e);
      });
      return r.length === 0
        ? (o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ",
                  ": nothing callable in a list of ",
                  "",
                ])),
              t,
              e.length,
            )
            .sendLogs("voip-group-call-no-callable-participants"),
          o("WAWebToastManager").ToastManager.open(
            le.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ "Couldn't start call. Select someone else to call.",
              ),
            }),
          ),
          null)
        : r;
    }
    function Oe(e, t) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          (t === void 0 &&
            (t = o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .SECOND_NOTIFICATION),
            o("WALogger")
              .LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: callId=",
                    ", lobbyEntryPoint=",
                    "",
                  ])),
                e,
                t,
              )
              .color(se),
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
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: no call for ",
                    "",
                  ])),
                e,
              )
              .color(se),
              o("WAWebToastManager").ToastManager.open(
                le.jsx(o("WAWebToast.react").Toast, {
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
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: No chat found for call ID ",
                    "",
                  ])),
                e,
              )
              .color(se),
              o("WAWebToastManager").ToastManager.open(
                le.jsx(o("WAWebToast.react").Toast, {
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
          yield We({
            callId: e,
            chat: l,
            isDeviceSwitch: !0,
            isVideo: u,
            lobbyEntryPoint: t,
          });
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
            (o("WAWebVoipActivityTracker").startActivityTracking(),
              o("WAWebVoipActivityTracker").startUiActivityTracking());
            var f = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(c);
            if (!f) {
              o("WAWebVoipActivityTracker").clearAllActivityTracking();
              return;
            }
            if (
              r("WAWebEnvironment").isWindows &&
              !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
            ) {
              var g,
                h =
                  me == null ||
                  (g = me(
                    r("WAWebWindowsHybridBridgeInitiator").WAWebVoipStartCall,
                  )) == null
                    ? void 0
                    : g.voip;
              if (h == null) {
                (o("WALogger")
                  .LOG(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: VoIP bridge is null",
                      ])),
                  )
                  .color(se),
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
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: unsupported",
                      ])),
                  )
                  .color(se),
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
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no call ",
                      "",
                    ])),
                  a,
                )
                .color(se),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            } else if (y.callCreator == null) {
              (o("WALogger")
                .LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no creator ",
                      "",
                    ])),
                  a,
                )
                .color(se),
                yield o(
                  "WAWebVoipActionWriteCallLogEventUpdateJoinable",
                ).cleanupJoinableCallLog(a),
                o("WAWebToastManager").ToastManager.open(
                  le.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Could not join call."),
                  }),
                ),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            }
            (o("WALogger")
              .LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: joining",
                  ])),
              )
              .color(se),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_JOIN_ONGOING_CALL,
              ));
            var C = (t = y.callParticipants) != null ? t : [],
              b = C.map(function (e) {
                var t = o("WAWebLidMigrationUtils").toPn(e.participant);
                return (
                  t == null &&
                    o("WALogger")
                      .ERROR(
                        B ||
                          (B = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: joinOngoingWAWebVoipGroupCallPN: participant dropped - toPn() returned null",
                          ])),
                      )
                      .sendLogs(
                        "voip: StartPNCall: group join participant toPn failed",
                      ),
                  t
                );
              }).filter(function (e) {
                return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
              }),
              v = yield be({ isGroup: !0, isJoin: !0, isVideo: c });
            if (v != null) {
              var S = v.signal,
                R = (ae || (ae = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  Ge(b, !0),
                  he(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-join-group-call-preload-ui",
                  ),
                  c
                    ? he(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video",
                      )
                    : void 0,
                  c
                    ? he(
                        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video-group",
                      )
                    : void 0,
                ]);
              R.catch(r("WAWebNoop"));
              try {
                var L,
                  E = yield r("WAPromiseRaceAbort")(R, S),
                  k = E[0],
                  I = E[1],
                  T = I.gcDeviceJidsCsv,
                  D = I.gcUserJids,
                  x = I.gcUserPnJids;
                yield (ae || (ae = n("Promise"))).all(
                  D.map(function (e) {
                    return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                  }),
                );
                var $ = i.id.isGroup() ? i.id.toString({ legacy: !0 }) : "";
                if (
                  (o("WALogger")
                    .LOG(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCallPN: groupJid: ",
                          "",
                        ])),
                      $,
                    )
                    .color(se),
                  S.aborted)
                ) {
                  o("WALogger")
                    .LOG(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(se);
                  return;
                }
                (o("WAWebCoreActionsODS").logCallGroupJoin(),
                  yield k == null
                    ? void 0
                    : k.joinOngoingCall(
                        a,
                        r("nullthrows")(y.callCreator).toString({
                          legacy: !0,
                          formatIncludeDevice: !0,
                        }),
                        "",
                        x.map(function (e) {
                          var t;
                          return (t =
                            e == null ? void 0 : e.toString({ legacy: !0 })) !=
                            null
                            ? t
                            : "";
                        }),
                        D.map(function (e) {
                          return e.toString({ legacy: !0 });
                        }),
                        T,
                        c,
                        $,
                        0,
                        !0,
                        (L = y.callLinkToken) != null ? L : "",
                        !1,
                        "",
                        m,
                        i.name || i.formattedTitle,
                        _,
                        u,
                      ));
              } catch (e) {
                if (S.aborted) {
                  o("WALogger")
                    .LOG(
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(se);
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
        qe.apply(this, arguments)
      );
    }
    function Ue(e) {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if ("permissions" in navigator) {
              if (e) {
                var t = yield navigator.permissions.query({ name: "camera" }),
                  n = t.state === "granted";
                n ||
                  o("WALogger").LOG(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: JS doesn't have camera permissions for a video call",
                      ])),
                  );
              }
              var r = yield navigator.permissions.query({ name: "microphone" }),
                a = r.state === "granted";
              a ||
                o("WALogger").LOG(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: JS doesn't have microphone permissions for a call",
                    ])),
                );
            }
          } catch (e) {
            o("WALogger").LOG(
              G ||
                (G = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: failed to check device permissions: ",
                  "",
                ])),
              e,
            );
          }
        })),
        Ve.apply(this, arguments)
      );
    }
    function He(e, t) {
      return e.length > pe
        ? (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ge(e, t) {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParticipantJids: ",
                    " participants unresolved, attempting usync",
                  ])),
                i.length,
              )
              .color(se),
              yield (ae || (ae = n("Promise"))).all(
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
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
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
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getVoipParticipantJids: usync resolved all participants successfully",
                      ])),
                  )
                  .color(se);
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
          yield (ae || (ae = n("Promise"))).all(
            s.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              });
            }),
          );
          var c = yield ae.all(
              s.map(function (e) {
                return o("WAWebSendMsgDatabaseJob").getFanOutListJob([e]);
              }),
            ),
            d = c.map(function (e) {
              var t = He(e, "callStart"),
                n = t.join(",");
              return n;
            });
          return { gcUserJids: s, gcUserPnJids: u, gcDeviceJidsCsv: d };
        })),
        ze.apply(this, arguments)
      );
    }
    function je(e) {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(yield o(
              "WAWebVoipCallBlockedModals",
            ).showCallBlockedModalIfNeeded())
          ) {
            o("WALogger").LOG(
              Q ||
                (Q = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: inviteToCall called for chat: ",
                  "",
                ])),
              e.toString(),
            );
            try {
              var t,
                a = yield Ye(e);
              if (a == null) {
                o("WALogger")
                  .ERROR(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: inviteToCall: LID resolution failed for participant, aborting invite",
                      ])),
                  )
                  .sendLogs("voip: inviteToCall: LID expected but missing");
                return;
              }
              var i = a.lidJid,
                l = a.pnJid,
                s = (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e,
                u = yield (ae || (ae = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [s],
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
                _ = He(p, "inviteToCall");
              (yield c == null ? void 0 : c.inviteToCall(l, i, _),
                o("WALogger").LOG(
                  Y ||
                    (Y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: inviteToCall completed successfully for ",
                      "",
                    ])),
                  e.toString(),
                ));
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
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
        Ke.apply(this, arguments)
      );
    }
    function Qe(e) {
      return Xe.apply(this, arguments);
    }
    function Xe() {
      return (
        (Xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            Z ||
              (Z = babelHelpers.taggedTemplateLiteralLoose([
                "voip: waveAtParticipant called for chat: ",
                "",
              ])),
            e.toString(),
          );
          try {
            var t,
              a = yield Ye(e);
            if (a == null)
              return (
                o("WALogger")
                  .ERROR(
                    ee ||
                      (ee = babelHelpers.taggedTemplateLiteralLoose([
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
              u = yield (ae || (ae = n("Promise"))).all([
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
                    te ||
                      (te = babelHelpers.taggedTemplateLiteralLoose([
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
              _ = He(p, "waveAtParticipant");
            return _.length === 0
              ? (o("WALogger")
                  .ERROR(
                    ne ||
                      (ne = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: waveAtParticipant: no devices resolved for participant, aborting wave",
                      ])),
                  )
                  .sendLogs("voip: waveAtParticipant: empty device list"),
                !1)
              : (yield c.sendWave(l, i, _),
                o("WALogger").LOG(
                  re ||
                    (re = babelHelpers.taggedTemplateLiteralLoose([
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
                  oe ||
                    (oe = babelHelpers.taggedTemplateLiteralLoose([
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
        Xe.apply(this, arguments)
      );
    }
    function Ye(e) {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Je.apply(this, arguments)
      );
    }
    ((l.preloadGroupCallBundle = ye),
      (l.startWAWebVoipCall = Se),
      (l.startWAWebVoipGroupCallFromChat = $e),
      (l.startWAWebVoipGroupCallFromContacts = Ne),
      (l.startWAWebVoipGroupCallFromWids = we),
      (l.joinOngoingCallByCallId = Oe),
      (l.joinOngoingWAWebVoipGroupCallPN = We),
      (l.inviteToCall = je),
      (l.waveAtParticipant = Qe));
  },
  226,
);
