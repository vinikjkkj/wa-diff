__d(
  "WAWebWindowsHybridBridgeConnection.v2643",
  [
    "WAComms",
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAShiftTimer",
    "WAWebCallCollection",
    "WAWebEventsWaitForMainStreamReadyMd",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebODS",
    "WAWebOfflineHandler",
    "WAWebSetWindowsPushConfig",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebStreamModel",
    "WAWebWindowsBackgroundRun",
    "WAWebWindowsDrainIncomingMessages",
    "WAWebWindowsHybridBridgeTrace",
    "WAWebWindowsLoginOfflineDelivery",
  ],
  function (t, n, r, o, a, i, l) {
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
      P = { CONNECT_REASON: 1, PROGRESS_HEARTBEAT: 2 },
      N = 1e3,
      M = (function () {
        function t(t) {
          var n = this;
          ((this.$2 = !1),
            (this.$3 = 0),
            (this.$4 = null),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$7 = new (o("WAShiftTimer").ShiftTimer)(function () {
              return n.$8();
            })),
            (this.$16 = function (t) {
              (n.$7.cancel(),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:reportProgress not supported by this native build: ",
                      "",
                    ])),
                  String(t),
                ));
            }),
            (this.$9 = async function (e) {
              var t,
                a,
                i,
                l = e.data.toString(),
                u = (t = e.channel) == null ? void 0 : t.toString(),
                c = (a = e.pkey) == null ? void 0 : a.toString(),
                d = (i = e.settings) != null ? i : null;
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsHybridBridgeConnection:handleUpdateNotificationsTokenEvent",
                  ])),
              ),
                await r("WAWebEventsWaitForMainStreamReadyMd")(),
                o(
                  "WAWebWindowsBackgroundRun",
                ).logBackgroundMessageSyncExposureInUserSession(),
                await o("WAWebSetWindowsPushConfig").setWindowsPushConfig(
                  l,
                  u,
                  c,
                  d,
                ),
                r("WAWebODS").incr(
                  "web.hybrid.bridge.connection.send.handle_connection_state",
                ),
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  {
                    bridge: "connection",
                    method: "handleConnectionState",
                    type: "async",
                  },
                  function () {
                    return n.$1.handleConnectionState(!0);
                  },
                ),
                r("WAWebODS").incr(
                  "web.hybrid.bridge.connection.send.acknowledge_notifications_token",
                ),
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  {
                    bridge: "connection",
                    method: "acknowledgeNotificationsToken",
                    type: "async",
                  },
                  function () {
                    return n.$1.acknowledgeNotificationsToken(l, u);
                  },
                ));
            }),
            (this.$10 = async function () {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsHybridBridgeConnection:handleDisconnectEvent",
                  ])),
              );
              try {
                var e,
                  t = n.$3;
                if (
                  !n.$2 &&
                  (((e = o("WAComms").getComms()) == null
                    ? void 0
                    : e.isSocketConnected()) !== !0 ||
                    o("WAWebSocketModel").Socket.stream ===
                      o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED)
                ) {
                  if (
                    (o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "WindowsHybridBridgeConnection:handleDisconnectEvent: socket already closed",
                        ])),
                    ),
                    await o(
                      "WAWebWindowsDrainIncomingMessages",
                    ).drainIncomingMessagesBeforeSocketClose(),
                    n.$18(t))
                  )
                    return;
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.connection.send.handle_connection_state",
                  ),
                    o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                      {
                        bridge: "connection",
                        method: "handleConnectionState",
                        type: "async",
                      },
                      function () {
                        return n.$1.handleConnectionState(!1);
                      },
                    ));
                  return;
                }
                if (
                  (await n.$19(),
                  await o("WAPromiseDelays").delayMs(3e4),
                  n.$18(t) ||
                    (o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "WindowsHybridBridgeConnection:handleDisconnectEvent: offline resume complete",
                        ])),
                    ),
                    await n.$20(),
                    n.$18(t)) ||
                    (await o(
                      "WAWebWindowsDrainIncomingMessages",
                    ).drainIncomingMessagesBeforeSocketClose(),
                    n.$18(t)))
                )
                  return;
                (o("WAComms").closeSocketAndPause(),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleDisconnectEvent: socket closed",
                      ])),
                  ),
                  r("WAWebODS").incr(
                    "web.hybrid.bridge.connection.send.handle_connection_state",
                  ),
                  o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                    {
                      bridge: "connection",
                      method: "handleConnectionState",
                      type: "async",
                    },
                    function () {
                      return n.$1.handleConnectionState(!1);
                    },
                  ));
              } catch (e) {
                o("WALogger").ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:handleDisconnectEvent: failed to close socket: ",
                      "",
                    ])),
                  e,
                );
              }
            }),
            (this.$12 = async function (e) {
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsHybridBridgeConnection.handleConnectWithReasonEvent: ",
                    "",
                  ])),
                e,
              ),
                o(
                  "WAWebWindowsBackgroundRun",
                ).applyWindowsBackgroundRunConnectReason(e) ||
                  o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleConnectWithReasonEvent: unknown reason ",
                        "",
                      ])),
                    e,
                  ),
                n.$3++,
                await n.$21(
                  o(
                    "WAWebWindowsBackgroundRun",
                  ).hasLoggedInWithOtherConnectReason(),
                ));
            }),
            (this.$13 = async function () {
              if (
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection.handleEndBackgroundRunEvent",
                    ])),
                ),
                !!o("WAWebWindowsBackgroundRun").isWindowsBackgroundRun())
              ) {
                (o("WAWebWindowsBackgroundRun").endWindowsBackgroundRun(),
                  n.$3++);
                try {
                  await o("WAComms").waitForConnection();
                } catch (e) {
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleEndBackgroundRunEvent: waitForConnection failed: ",
                        "",
                      ])),
                    String(e),
                  );
                  return;
                }
                if (
                  !o(
                    "WAWebWindowsBackgroundRun",
                  ).hasLoggedInWithOtherConnectReason()
                ) {
                  o("WAWebStreamModel").Stream.sendAvailability(!1);
                  return;
                }
                if (n.$2) {
                  await n.$22();
                  return;
                }
                await n.$21(!0);
              }
            }),
            (this.$11 = async function () {
              (o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsHybridBridgeConnection.handleConnectEvent",
                  ])),
              ),
                n.$3++,
                await n.$21(!1));
            }),
            (this.$1 = t),
            this.$1.addEventListener("updateNotificationsTokenEvent", this.$9),
            this.$1.addEventListener("disconnectEvent", this.$10),
            this.$1.addEventListener("connectEvent", this.$11),
            this.$1.addEventListener("connectWithReasonEvent", this.$12),
            this.$1.addEventListener("endBackgroundRunEvent", this.$13),
            o("WAWebWindowsBackgroundRun").isWindowsBackgroundRun() &&
              this.$7.onOrAfter(N),
            o(
              "WAWebWindowsLoginOfflineDelivery",
            ).startTrackingWindowsLoginOfflineDelivery(),
            this.$14(),
            this.$1.subscribe(null));
        }
        var n = t.prototype;
        return (
          (n.$8 = function () {
            if (
              o("WAWebWindowsBackgroundRun").isWindowsBackgroundRun() &&
              (this.$7.onOrAfter(N),
              !!o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.hasInitOfflineResumeManager())
            ) {
              var e = o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.getProcessedOfflineMessageCount();
              e !== this.$6 && ((this.$6 = e), this.$15());
            }
          }),
          (n.$15 = function () {
            var e = this;
            try {
              var t = o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "connection",
                  method: "reportProgress",
                  type: "async",
                },
                function () {
                  return e.$1.reportProgress();
                },
              );
              Promise.resolve(t).catch(this.$16);
            } catch (e) {
              this.$16(e);
            }
          }),
          (n.$14 = function () {
            var e = this;
            try {
              var t = o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "connection",
                  method: "declareCapabilities",
                  type: "async",
                },
                function () {
                  return e.$1.declareCapabilities(e.$17());
                },
              );
              Promise.resolve(t).catch(w);
            } catch (e) {
              w(e);
            }
          }),
          (n.$17 = function () {
            return P.CONNECT_REASON + P.PROGRESS_HEARTBEAT;
          }),
          (n.$21 = async function (t) {
            var e = this;
            if (this.$2) {
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsHybridBridgeConnection:handleConnectEvent: socket already opening",
                  ])),
              );
              return;
            }
            try {
              var n,
                a =
                  ((n = o("WAComms").getComms()) == null
                    ? void 0
                    : n.isSocketConnected()) === !0;
              (a
                ? t && ((this.$2 = !0), await this.$22(), await this.$23())
                : ((this.$2 = !0),
                  o("WAComms").closeSocketAndResume(),
                  o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleConnectEvent: socket opened",
                      ])),
                  )),
                await this.$19(),
                this.$4 != null && (await this.$4, await this.$23()),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:handleConnectEvent: offline resume complete",
                    ])),
                ),
                r("WAWebODS").incr(
                  "web.hybrid.bridge.connection.send.handle_connection_state",
                ),
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  {
                    bridge: "connection",
                    method: "handleConnectionState",
                    type: "async",
                  },
                  function () {
                    return e.$1.handleConnectionState(!0);
                  },
                ));
            } catch (e) {
              o("WALogger").ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsHybridBridgeConnection:handleConnectEvent: failed to open socket: ",
                    "",
                  ])),
                e,
              );
            } finally {
              this.$2 = !1;
            }
          }),
          (n.$22 = function () {
            var e,
              t = (e = this.$4) != null ? e : this.$24();
            return ((this.$4 = t), t);
          }),
          (n.$24 = async function () {
            try {
              var e;
              if (
                (await this.$23(),
                await o(
                  "WAWebWindowsDrainIncomingMessages",
                ).drainIncomingMessagesBeforeSocketClose(),
                await o("WAWebWindowsLoginOfflineDelivery").waitForPingAnswer(),
                ((e = o("WAComms").getComms()) == null
                  ? void 0
                  : e.isSocketConnected()) !== !0 ||
                  !o(
                    "WAWebWindowsBackgroundRun",
                  ).hasLoggedInWithOtherConnectReason())
              ) {
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:relogin: not needed after offline delivery",
                    ])),
                );
                return;
              }
              ((this.$5 =
                o("WAWebWindowsBackgroundRun").getWindowsLoginCount() + 1),
                o("WAComms").closeSocketAndResume(),
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:relogin: logging in again after offline delivery",
                    ])),
                ));
            } catch (e) {
              o("WALogger").WARN(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsHybridBridgeConnection:relogin: failed: ",
                    "",
                  ])),
                e,
              );
            } finally {
              this.$4 = null;
            }
          }),
          (n.$18 = function (t) {
            return this.$3 === t
              ? !1
              : (o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:handleDisconnectEvent: cancelled by a connect request",
                    ])),
                ),
                !0);
          }),
          (n.$20 = async function () {
            if (r("WAWebCallCollection").activeCall == null) {
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: no active call",
                  ])),
              );
              return;
            }
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: awaiting active call completion",
                ])),
            );
            var e = new (o("WAResolvable").Resolvable)(),
              t = function () {
                r("WAWebCallCollection").activeCall == null && e.resolve();
              };
            (r("WAWebCallCollection").on("change:activeCall", t),
              await e.promise,
              r("WAWebCallCollection").off("change:activeCall", t),
              o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: active call completed",
                  ])),
              ));
          }),
          (n.$23 = async function () {
            (await o("WAComms").waitForConnection(),
              await o(
                "WAWebWindowsLoginOfflineDelivery",
              ).waitForLatestLoginOfflineDeliveryEnd(this.$5));
          }),
          (n.$19 = async function () {
            (await o("WAComms").waitForConnection(),
              o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).isOfflineDeliveryEnd() ||
                (o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:waitForOfflineResume",
                    ])),
                ),
                await o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd()));
          }),
          t
        );
      })();
    function w(e) {
      o("WALogger").LOG(
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
            "WindowsHybridBridgeConnection:declareCapabilities not supported by this native build: ",
            "",
          ])),
        String(e),
      );
    }
    ((l.WindowsHybridWebCapability_v2643 = P),
      (l.WindowsHybridBridgeConnection_v2643 = M));
  },
  98,
);
