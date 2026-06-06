__d(
  "WAWebWindowsHybridBridgeConnection.v2622",
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
          var n = this;
          ((this.$2 = !1),
            (this.$3 = async function (t) {
              var a,
                i = t.data.toString(),
                l = (a = t.channel) == null ? void 0 : a.toString();
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsHybridBridgeConnection:handleUpdateNotificationsTokenEvent",
                  ])),
              ),
                await r("WAWebEventsWaitForMainStreamReadyMd")(),
                await o("WAWebSetWindowsPushConfig").setWindowsPushConfig(i, l),
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
                    type: "sync",
                  },
                  function () {
                    return n.$1.acknowledgeNotificationsToken(i, l);
                  },
                ));
            }),
            (this.$4 = async function () {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsHybridBridgeConnection:handleDisconnectEvent",
                  ])),
              );
              try {
                var e;
                if (
                  !n.$2 &&
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
                        return n.$1.handleConnectionState(!1);
                      },
                    ));
                  return;
                }
                if (
                  (await n.$6(),
                  await o("WAPromiseDelays").delayMs(3e4),
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
                    a = function () {
                      r("WAWebCallCollection").activeCall == null &&
                        t.resolve();
                    };
                  (r("WAWebCallCollection").on("change:activeCall", a),
                    await t.promise,
                    r("WAWebCallCollection").off("change:activeCall", a),
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
                      return n.$1.handleConnectionState(!1);
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
            }),
            (this.$5 = async function () {
              if (
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection.handleConnectEvent",
                    ])),
                ),
                n.$2)
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
                  ((n.$2 = !0),
                  o("WAComms").closeSocketAndResume(),
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection:handleConnectEvent: socket opened",
                      ])),
                  )),
                  await n.$6(),
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
                      return n.$1.handleConnectionState(!0);
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
                n.$2 = !1;
              }
            }),
            (this.$1 = t),
            this.$1.addEventListener("updateNotificationsTokenEvent", this.$3),
            this.$1.addEventListener("disconnectEvent", this.$4),
            this.$1.addEventListener("connectEvent", this.$5),
            this.$1.subscribe(null));
        }
        var n = t.prototype;
        return (
          (n.$6 = async function () {
            (await o("WAComms").waitForConnection(),
              o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).isOfflineDeliveryEnd() ||
                (o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
    l.WindowsHybridBridgeConnection_v2622 = S;
  },
  98,
);
