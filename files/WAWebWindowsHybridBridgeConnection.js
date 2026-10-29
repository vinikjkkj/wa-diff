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
    "WAWebWindowsHybridBridgeJsonEvents",
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
      x = { CONNECT_REASON: 1, PROGRESS_HEARTBEAT: 2 },
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
            (this.$15 = function (t) {
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
                  var t = o("WAWebWindowsHybridBridgeTrace").traceBridgeRead(
                      {
                        bridge: "connection",
                        method: "updateNotificationsTokenEvent",
                      },
                      function () {
                        var t, n;
                        return {
                          channelString:
                            (t = e.channel) == null ? void 0 : t.toString(),
                          pkeyString:
                            (n = e.pkey) == null ? void 0 : n.toString(),
                          settings: e.settings,
                          tokenString: e.data.toString(),
                        };
                      },
                    ),
                    n = t.channelString,
                    r = t.pkeyString,
                    i = t.settings,
                    l = t.tokenString;
                  yield a.$17({
                    data: l,
                    channel: n,
                    pkey: r,
                    settings: i != null ? i : null,
                  });
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.$8 = function (e) {
              var t = o(
                "WAWebWindowsHybridBridgeJsonEvents",
              ).parseHybridBridgeJsonEvent("notificationsTokenJsonEvent", e, M);
              t != null && a.$17(t);
            }),
            (this.$9 = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                    (yield a.$18(),
                    yield o("WAPromiseDelays").delayMs(3e4),
                    a.$19(t) ||
                      (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "WindowsHybridBridgeConnection:handleDisconnectEvent: offline resume complete",
                          ])),
                      ),
                      yield a.$20(),
                      a.$19(t)))
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
            (this.$11 = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeConnection.handleConnectWithReasonEvent: ",
                        "",
                      ])),
                    e,
                  ),
                    o(
                      "WAWebWindowsBackgroundRun",
                    ).applyWindowsBackgroundRunConnectReason(e) ||
                      o("WALogger").WARN(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "WindowsHybridBridgeConnection:handleConnectWithReasonEvent: unknown reason ",
                            "",
                          ])),
                        e,
                      ),
                    a.$3++,
                    yield a.$21(
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
            (this.$12 = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                if (
                  (o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
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
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
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
                  yield a.$21(!0);
                }
              },
            )),
            (this.$10 = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection.handleConnectEvent",
                    ])),
                ),
                  a.$3++,
                  yield a.$21(!1));
              },
            )),
            (this.$1 = t),
            this.$1.addEventListener("updateNotificationsTokenEvent", this.$7),
            this.$1.addEventListener("notificationsTokenJsonEvent", this.$8),
            this.$1.addEventListener("disconnectEvent", this.$9),
            this.$1.addEventListener("connectEvent", this.$10),
            this.$1.addEventListener("connectWithReasonEvent", this.$11),
            this.$1.addEventListener("endBackgroundRunEvent", this.$12),
            o("WAWebWindowsBackgroundRun").isWindowsBackgroundRun() &&
              this.$5.onOrAfter($),
            this.$13(),
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
              e !== this.$4 && ((this.$4 = e), this.$14());
            }
          }),
          (a.$14 = function () {
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
              (D || (D = n("Promise"))).resolve(t).catch(this.$15);
            } catch (e) {
              this.$15(e);
            }
          }),
          (a.$13 = function () {
            var e = this;
            try {
              var t = o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "connection",
                  method: "declareCapabilities",
                  type: "async",
                },
                function () {
                  return e.$1.declareCapabilities(e.$16());
                },
              );
              (D || (D = n("Promise"))).resolve(t).catch(N);
            } catch (e) {
              N(e);
            }
          }),
          (a.$16 = function () {
            return x.CONNECT_REASON + x.PROGRESS_HEARTBEAT;
          }),
          (a.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = e.channel,
                  a = e.data,
                  i = e.pkey,
                  l = e.settings;
                (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:handleUpdateNotificationsTokenEvent",
                    ])),
                ),
                  yield r("WAWebEventsWaitForMainStreamReadyMd")(),
                  yield o("WAWebSetWindowsPushConfig").setWindowsPushConfig(
                    a,
                    n,
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
                      type: "async",
                    },
                    function () {
                      return t.$1.handleConnectionState(!0);
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
                      return t.$1.acknowledgeNotificationsToken(a, n);
                    },
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$21 = (function () {
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
                    yield this.$18(),
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
          (a.$19 = function (t) {
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
          (a.$20 = (function () {
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
          (a.$18 = (function () {
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
    function M(e) {
      var t = e.channel,
        n = e.data,
        r = e.pkey,
        o = e.settings;
      return typeof n != "string" || !w(t) || !w(r) || !A(o)
        ? null
        : {
            data: n,
            channel: t != null ? t : void 0,
            pkey: r != null ? r : void 0,
            settings: o != null ? o : null,
          };
    }
    function w(e) {
      return e == null || typeof e == "string";
    }
    function A(e) {
      return e == null || typeof e == "number";
    }
    ((l.WindowsHybridWebCapability = x), (l.WindowsHybridBridgeConnection = P));
  },
  98,
);
