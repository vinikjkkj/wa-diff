__d(
  "WAWebWindowsHybridBridgeConnection",
  [
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
      S = (function () {
        function t(t) {
          var a = this;
          ((this.$2 = !1),
            (this.$3 = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n,
                    i = t.data.toString(),
                    l = (n = t.channel) == null ? void 0 : n.toString();
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleUpdateNotificationsTokenEvent",
                      ])),
                  ),
                    yield r("WAWebEventsWaitForMainStreamReadyMd")(),
                    yield o("WAWebSetWindowsPushConfig").setWindowsPushConfig(
                      i,
                      l,
                    ),
                    r("WAWebODS").incr(
                      "web.hybrid.bridge.connection.send.handle_connection_state",
                    ),
                    o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                      {
                        bridge: "connection",
                        method: "handleConnectionState",
                        type: "sync",
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
                        type: "sync",
                      },
                      function () {
                        return a.$1.acknowledgeNotificationsToken(i, l);
                      },
                    ));
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            (this.$4 = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                      : e.socket) == null ||
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
                          type: "sync",
                        },
                        function () {
                          return a.$1.handleConnectionState(!1);
                        },
                      ));
                    return;
                  }
                  if (
                    (yield a.$6(),
                    yield o("WAPromiseDelays").delayMs(3e4),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "WindowsHybridBridgeConnection:handleDisconnectEvent: offline resume complete",
                        ])),
                    ),
                    r("WAWebCallCollection").activeCall != null)
                  ) {
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: awaiting active call completion",
                        ])),
                    );
                    var t = new (o("WAResolvable").Resolvable)(),
                      n = function () {
                        r("WAWebCallCollection").activeCall == null &&
                          t.resolve();
                      };
                    (r("WAWebCallCollection").on("change:activeCall", n),
                      yield t.promise,
                      r("WAWebCallCollection").off("change:activeCall", n),
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: active call completed",
                          ])),
                      ));
                  } else
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: no active call",
                        ])),
                    );
                  (o("WAComms").closeSocketAndPause(),
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                        type: "sync",
                      },
                      function () {
                        return a.$1.handleConnectionState(!1);
                      },
                    ));
                } catch (e) {
                  o("WALogger").ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleDisconnectEvent: failed to close socket: ",
                        "",
                      ])),
                    e,
                  );
                }
              },
            )),
            (this.$5 = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                if (
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection.handleConnectEvent",
                      ])),
                  ),
                  a.$2)
                ) {
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
                        : e.socket) != null;
                  (t ||
                    ((a.$2 = !0),
                    o("WAComms").closeSocketAndResume(),
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "WindowsHybridBridgeConnection:handleConnectEvent: socket opened",
                        ])),
                    )),
                    yield a.$6(),
                    o("WALogger").LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
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
                        type: "sync",
                      },
                      function () {
                        return a.$1.handleConnectionState(!0);
                      },
                    ));
                } catch (e) {
                  o("WALogger").ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
            this.$1.addEventListener("updateNotificationsTokenEvent", this.$3),
            this.$1.addEventListener("disconnectEvent", this.$4),
            this.$1.addEventListener("connectEvent", this.$5),
            this.$1.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.$6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o("WAComms").waitForConnection(),
                o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).isOfflineDeliveryEnd() ||
                  (o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
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
    l.WindowsHybridBridgeConnection = S;
  },
  98,
);
