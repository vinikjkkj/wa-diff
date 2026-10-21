__d(
  "WAWebWindowsHybridBridgeConnection",
  [
    "Promise",
    "WAComms",
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebCallCollection",
    "WAWebEventsWaitForMainStreamReadyMd",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebODS",
    "WAWebSetWindowsPushConfig",
    "WAWebSocketConstants",
    "WAWebSocketModel",
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
      E = { CONNECT_REASON: 1, PROGRESS_HEARTBEAT: 2, DISCONNECT_NOW: 4 },
      k = 0,
      I = (function () {
        function t(t) {
          var a = this;
          ((this.$2 = !1),
            (this.$3 = 0),
            (this.$4 = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n,
                    i,
                    l,
                    s = t.data.toString(),
                    u = (n = t.channel) == null ? void 0 : n.toString(),
                    c = (i = t.pkey) == null ? void 0 : i.toString(),
                    d = (l = t.settings) != null ? l : null;
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleUpdateNotificationsTokenEvent",
                      ])),
                  ),
                    yield r("WAWebEventsWaitForMainStreamReadyMd")(),
                    yield o("WAWebSetWindowsPushConfig").setWindowsPushConfig(
                      s,
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
                        return a.$1.acknowledgeNotificationsToken(s, u);
                      },
                    ));
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            (this.$5 = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
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
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
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
                    (yield a.$8(),
                    yield o("WAPromiseDelays").delayMs(3e4),
                    a.$9(t) ||
                      (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "WindowsHybridBridgeConnection:handleDisconnectEvent: offline resume complete",
                          ])),
                      ),
                      yield a.$10(),
                      a.$9(t)))
                  )
                    return;
                  (o("WAComms").closeSocketAndPause(),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
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
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleDisconnectEvent: failed to close socket: ",
                        "",
                      ])),
                    e,
                  );
                }
              },
            )),
            (this.$6 = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                if (
                  (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection.handleConnectEvent",
                      ])),
                  ),
                  a.$3++,
                  a.$2)
                ) {
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleConnectEvent: socket already opening",
                      ])),
                  );
                  return;
                }
                try {
                  var e,
                    t =
                      ((e = o("WAComms").getComms()) == null
                        ? void 0
                        : e.isSocketConnected()) === !0;
                  (t ||
                    ((a.$2 = !0),
                    o("WAComms").closeSocketAndResume(),
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "WindowsHybridBridgeConnection:handleConnectEvent: socket opened",
                        ])),
                    )),
                    yield a.$8(),
                    o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
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
                        return a.$1.handleConnectionState(!0);
                      },
                    ));
                } catch (e) {
                  o("WALogger").ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleConnectEvent: failed to open socket: ",
                        "",
                      ])),
                    e,
                  );
                } finally {
                  a.$2 = !1;
                }
              },
            )),
            (this.$1 = t),
            this.$1.addEventListener("updateNotificationsTokenEvent", this.$4),
            this.$1.addEventListener("disconnectEvent", this.$5),
            this.$1.addEventListener("connectEvent", this.$6),
            this.$7(),
            this.$1.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.$7 = function () {
            var e = this;
            try {
              var t = o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "connection",
                  method: "declareCapabilities",
                  type: "async",
                },
                function () {
                  return e.$1.declareCapabilities(k);
                },
              );
              (L || (L = n("Promise"))).resolve(t).catch(T);
            } catch (e) {
              T(e);
            }
          }),
          (a.$9 = function (t) {
            return this.$3 === t
              ? !1
              : (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:handleDisconnectEvent: cancelled by a connect request",
                    ])),
                ),
                !0);
          }),
          (a.$10 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (r("WAWebCallCollection").activeCall == null) {
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: no active call",
                    ])),
                );
                return;
              }
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: active call completed",
                    ])),
                ));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$8 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o("WAComms").waitForConnection(),
                o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).isOfflineDeliveryEnd() ||
                  (o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
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
    function T(e) {
      o("WALogger").LOG(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "WindowsHybridBridgeConnection:declareCapabilities not supported by this native build: ",
            "",
          ])),
        String(e),
      );
    }
    ((l.WindowsHybridWebCapability = E), (l.WindowsHybridBridgeConnection = I));
  },
  98,
);
