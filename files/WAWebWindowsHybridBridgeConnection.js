__d(
  "WAWebWindowsHybridBridgeConnection",
  [
    "Promise",
    "WAComms",
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAShiftTimer",
    "WAWebAppCommsCloseReason",
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
    "WAWebWindowsHybridBridgeJsonEvents",
    "WAWebWindowsHybridBridgeTrace",
    "WAWebWindowsLoginOfflineDelivery",
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
      x,
      $,
      P,
      N = { CONNECT_REASON: 1, PROGRESS_HEARTBEAT: 2 },
      M = 1e3,
      w = (function () {
        function t(t, a) {
          var i = this;
          ((this.$3 = !1),
            (this.$4 = 0),
            (this.$5 = null),
            (this.$6 = 0),
            (this.$7 = 0),
            (this.$8 = new (o("WAShiftTimer").ShiftTimer)(function () {
              return i.$9();
            })),
            (this.$18 = function (t) {
              (i.$8.cancel(),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:reportProgress not supported by this native build: ",
                      "",
                    ])),
                  String(t),
                ));
            }),
            (this.$10 = (function () {
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
                    a = t.settings,
                    l = t.tokenString;
                  yield i.$20({
                    data: l,
                    channel: n,
                    pkey: r,
                    settings: a != null ? a : null,
                  });
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.$11 = function (e) {
              var t = o(
                "WAWebWindowsHybridBridgeJsonEvents",
              ).parseHybridBridgeJsonEvent("notificationsTokenJsonEvent", e, F);
              t != null && i.$20(t);
            }),
            (this.$12 = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:handleDisconnectEvent",
                    ])),
                );
                try {
                  var e,
                    t = i.$4;
                  if (
                    !i.$3 &&
                    (((e = o("WAComms").getComms()) == null
                      ? void 0
                      : e.isSocketConnected()) !== !0 ||
                      o("WAWebSocketModel").Socket.stream ===
                        o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED)
                  ) {
                    if (
                      (o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "WindowsHybridBridgeConnection:handleDisconnectEvent: socket already closed",
                          ])),
                      ),
                      yield o(
                        "WAWebWindowsDrainIncomingMessages",
                      ).drainIncomingMessagesBeforeSocketClose(),
                      i.$22(t))
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
                          return i.$1.handleConnectionState(!1);
                        },
                      ));
                    return;
                  }
                  if (
                    (yield i.$23(),
                    yield o("WAPromiseDelays").delayMs(3e4),
                    i.$22(t) ||
                      (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "WindowsHybridBridgeConnection:handleDisconnectEvent: offline resume complete",
                          ])),
                      ),
                      yield i.$24(),
                      i.$22(t)) ||
                      (yield o(
                        "WAWebWindowsDrainIncomingMessages",
                      ).drainIncomingMessagesBeforeSocketClose(),
                      i.$22(t)))
                  )
                    return;
                  (o("WAComms").closeSocketAndPause(
                    o("WAWebAppCommsCloseReason").AppCommsCloseReason
                      .WindowsHybridDisconnect,
                  ),
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
                        return i.$1.handleConnectionState(!1);
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
            (this.$14 = (function () {
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
                    i.$4++,
                    yield i.$25(
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
            (this.$15 = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                    i.$21(),
                    i.$4++);
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
                  if (i.$3) {
                    yield i.$26();
                    return;
                  }
                  yield i.$25(!0);
                }
              },
            )),
            (this.$13 = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection.handleConnectEvent",
                    ])),
                ),
                  i.$4++,
                  yield i.$25(!1));
              },
            )),
            (this.$1 = t),
            (this.$2 = a),
            this.$1.addEventListener("updateNotificationsTokenEvent", this.$10),
            this.$1.addEventListener("notificationsTokenJsonEvent", this.$11),
            this.$1.addEventListener("disconnectEvent", this.$12),
            this.$1.addEventListener("connectEvent", this.$13),
            this.$1.addEventListener("connectWithReasonEvent", this.$14),
            this.$1.addEventListener("endBackgroundRunEvent", this.$15),
            o("WAWebWindowsBackgroundRun").isWindowsBackgroundRun() &&
              this.$8.onOrAfter(M),
            o(
              "WAWebWindowsLoginOfflineDelivery",
            ).startTrackingWindowsLoginOfflineDelivery(),
            this.$16(),
            this.$1.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.$9 = function () {
            if (
              o("WAWebWindowsBackgroundRun").isWindowsBackgroundRun() &&
              (this.$8.onOrAfter(M),
              !!o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.hasInitOfflineResumeManager())
            ) {
              var e = o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.getProcessedOfflineMessageCount();
              e !== this.$7 && ((this.$7 = e), this.$17());
            }
          }),
          (a.$17 = function () {
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
              (P || (P = n("Promise"))).resolve(t).catch(this.$18);
            } catch (e) {
              this.$18(e);
            }
          }),
          (a.$16 = function () {
            var e = this;
            try {
              var t = o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "connection",
                  method: "declareCapabilities",
                  type: "async",
                },
                function () {
                  return e.$1.declareCapabilities(e.$19());
                },
              );
              (P || (P = n("Promise"))).resolve(t).catch(A);
            } catch (e) {
              A(e);
            }
          }),
          (a.$19 = function () {
            return N.CONNECT_REASON + N.PROGRESS_HEARTBEAT;
          }),
          (a.$20 = (function () {
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
                  this.$21(),
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
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
                "WAWebWindowsBackgroundRun",
              ).logBackgroundMessageSyncExposureInUserSession();
              if (e != null) {
                var t;
                (t = this.$2) == null || t.call(this, e);
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$25 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (this.$3) {
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
                    ? e && ((this.$3 = !0), yield this.$26(), yield this.$27())
                    : ((this.$3 = !0),
                      o("WAComms").closeSocketAndResume(
                        o("WAWebAppCommsCloseReason").AppCommsCloseReason
                          .WindowsHybridReconnect,
                      ),
                      o("WALogger").LOG(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "WindowsHybridBridgeConnection:handleConnectEvent: socket opened",
                          ])),
                      )),
                    yield this.$23(),
                    this.$5 != null && (yield this.$5, yield this.$27()),
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
                  this.$3 = !1;
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$26 = function () {
            var e,
              t = (e = this.$5) != null ? e : this.$28();
            return ((this.$5 = t), t);
          }),
          (a.$28 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e;
                if (
                  (yield this.$27(),
                  yield o(
                    "WAWebWindowsDrainIncomingMessages",
                  ).drainIncomingMessagesBeforeSocketClose(),
                  yield o(
                    "WAWebWindowsLoginOfflineDelivery",
                  ).waitForPingAnswer(),
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
                ((this.$6 =
                  o("WAWebWindowsBackgroundRun").getWindowsLoginCount() + 1),
                  o("WAComms").closeSocketAndResume(
                    o("WAWebAppCommsCloseReason").AppCommsCloseReason
                      .WindowsHybridReconnect,
                  ),
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
                this.$5 = null;
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$22 = function (t) {
            return this.$4 === t
              ? !1
              : (o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeConnection:handleDisconnectEvent: cancelled by a connect request",
                    ])),
                ),
                !0);
          }),
          (a.$24 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                yield e.promise,
                r("WAWebCallCollection").off("change:activeCall", t),
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WindowsHybridBridgeConnection:handleDisconnectEvent: active call completed",
                    ])),
                ));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$27 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o("WAComms").waitForConnection(),
                yield o(
                  "WAWebWindowsLoginOfflineDelivery",
                ).waitForLatestLoginOfflineDeliveryEnd(this.$6));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$23 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o("WAComms").waitForConnection(),
                o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).isOfflineDeliveryEnd() ||
                  (o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
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
    function A(e) {
      o("WALogger").LOG(
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
            "WindowsHybridBridgeConnection:declareCapabilities not supported by this native build: ",
            "",
          ])),
        String(e),
      );
    }
    function F(e) {
      var t = e.channel,
        n = e.data,
        r = e.pkey,
        o = e.settings;
      return typeof n != "string" || !O(t) || !O(r) || !B(o)
        ? null
        : {
            data: n,
            channel: t != null ? t : void 0,
            pkey: r != null ? r : void 0,
            settings: o != null ? o : null,
          };
    }
    function O(e) {
      return e == null || typeof e == "string";
    }
    function B(e) {
      return e == null || typeof e == "number";
    }
    ((l.WindowsHybridWebCapability = N), (l.WindowsHybridBridgeConnection = w));
  },
  98,
);
