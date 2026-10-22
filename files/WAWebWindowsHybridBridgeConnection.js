__d(
  "WAWebWindowsHybridBridgeConnection",
  [
    "Promise",
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
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
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
      x = { CONNECT_REASON: 1, PROGRESS_HEARTBEAT: 2, DISCONNECT_NOW: 4 },
      $ = 1e3,
      P = (function () {
        function t(t) {
          var a = this;
          ((this.$2 = !1),
            (this.$3 = 0),
            (this.$4 = 0),
            (this.$5 = new (o("WAShiftTimer").ShiftTimer)(function () {
              return a.$6();
            })),
            (this.$14 = function (t) {
              (a.$5.cancel(),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:reportProgress not supported by this native build: ",
                      "",
                    ])),
                  String(t),
                ));
            }),
            (this.$7 = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t,
                    n,
                    i,
                    l = e.data.toString(),
                    u = (t = e.channel) == null ? void 0 : t.toString(),
                    c = (n = e.pkey) == null ? void 0 : n.toString(),
                    d = (i = e.settings) != null ? i : null;
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleUpdateNotificationsTokenEvent",
                      ])),
                  ),
                    yield r("WAWebEventsWaitForMainStreamReadyMd")(),
                    yield o("WAWebSetWindowsPushConfig").setWindowsPushConfig(
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
                        return a.$1.handleConnectionState(!0);
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
                        return a.$1.acknowledgeNotificationsToken(l, u);
                      },
                    ));
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.$8 = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:handleDisconnectEvent",
                    ])),
                );
                try {
                  var e;
                  if (
                    !a.$2 &&
                    (((e = o("WAComms").getComms()) == null
                      ? void 0
                      : e.isSocketConnected()) !== !0 ||
                      o("WAWebSocketModel").Socket.stream ===
                        o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED)
                  ) {
                    (o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "WindowsHybridBridgeConnection:handleDisconnectEvent: socket already closed",
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
                          return a.$1.handleConnectionState(!1);
                        },
                      ));
                    return;
                  }
                  var t = a.$3;
                  if (
                    (yield a.$16(),
                    yield o("WAPromiseDelays").delayMs(3e4),
                    a.$17(t) ||
                      (o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "WindowsHybridBridgeConnection:handleDisconnectEvent: offline resume complete",
                          ])),
                      ),
                      yield a.$18(),
                      a.$17(t)))
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
                        return a.$1.handleConnectionState(!1);
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
              },
            )),
            (this.$10 = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
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
                    a.$3++,
                    yield a.$19(
                      o(
                        "WAWebWindowsBackgroundRun",
                      ).hasLoggedInWithOtherConnectReason(),
                    ));
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.$11 = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
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
                    a.$3++);
                  try {
                    yield o("WAComms").waitForConnection();
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
                  if (a.$2) {
                    o("WAComms").closeSocketAndResume();
                    return;
                  }
                  yield a.$19(!0);
                }
              },
            )),
            (this.$9 = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection.handleConnectEvent",
                    ])),
                ),
                  a.$3++,
                  yield a.$19(!1));
              },
            )),
            (this.$1 = t),
            this.$1.addEventListener("updateNotificationsTokenEvent", this.$7),
            this.$1.addEventListener("disconnectEvent", this.$8),
            this.$1.addEventListener("connectEvent", this.$9),
            this.$1.addEventListener("connectWithReasonEvent", this.$10),
            this.$1.addEventListener("endBackgroundRunEvent", this.$11),
            o("WAWebWindowsBackgroundRun").isWindowsBackgroundRun() &&
              this.$5.onOrAfter($),
            this.$12(),
            this.$1.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.$6 = function () {
            if (
              o("WAWebWindowsBackgroundRun").isWindowsBackgroundRun() &&
              (this.$5.onOrAfter($),
              !!o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.hasInitOfflineResumeManager())
            ) {
              var e = o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.getProcessedOfflineMessageCount();
              e !== this.$4 && ((this.$4 = e), this.$13());
            }
          }),
          (a.$13 = function () {
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
              (D || (D = n("Promise"))).resolve(t).catch(this.$14);
            } catch (e) {
              this.$14(e);
            }
          }),
          (a.$12 = function () {
            var e = this;
            try {
              var t = o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "connection",
                  method: "declareCapabilities",
                  type: "async",
                },
                function () {
                  return e.$1.declareCapabilities(e.$15());
                },
              );
              (D || (D = n("Promise"))).resolve(t).catch(N);
            } catch (e) {
              N(e);
            }
          }),
          (a.$15 = function () {
            return x.CONNECT_REASON + x.PROGRESS_HEARTBEAT;
          }),
          (a.$19 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
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
                  ((e || !a) &&
                    ((this.$2 = !0),
                    o("WAComms").closeSocketAndResume(),
                    o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "WindowsHybridBridgeConnection:handleConnectEvent: socket opened",
                        ])),
                    )),
                    yield this.$16(),
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
                        return t.$1.handleConnectionState(!0);
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$17 = function (t) {
            return this.$3 === t
              ? !1
              : (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:handleDisconnectEvent: cancelled by a connect request",
                    ])),
                ),
                !0);
          }),
          (a.$18 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (r("WAWebCallCollection").activeCall == null) {
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: no active call",
                    ])),
                );
                return;
              }
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: awaiting active call completion",
                  ])),
              );
              var e = new (o("WAResolvable").Resolvable)(),
                t = function () {
                  r("WAWebCallCollection").activeCall == null && e.resolve();
                };
              (r("WAWebCallCollection").on("change:activeCall", t),
                yield e.promise,
                r("WAWebCallCollection").off("change:activeCall", t),
                o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: active call completed",
                    ])),
                ));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o("WAComms").waitForConnection(),
                o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).isOfflineDeliveryEnd() ||
                  (o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:waitForOfflineResume",
                      ])),
                  ),
                  yield o(
                    "WAWebEventsWaitForOfflineDeliveryEnd",
                  ).waitForOfflineDeliveryEnd()));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    function N(e) {
      o("WALogger").LOG(
        T ||
          (T = babelHelpers.taggedTemplateLiteralLoose([
            "WindowsHybridBridgeConnection:declareCapabilities not supported by this native build: ",
            "",
          ])),
        String(e),
      );
    }
    ((l.WindowsHybridWebCapability = x), (l.WindowsHybridBridgeConnection = P));
  },
  98,
);
