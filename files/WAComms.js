__d(
  "WAComms",
  [
    "WAArrayUtils",
    "WAErrors",
    "WALogger",
    "WANotifyConnectionChangeFactory",
    "WAPromiseRetryLoop",
    "WAResolvable",
    "WAShiftTimer",
    "WASmaxInPingsClientResponseServerResponse",
    "WASmaxOutPingsClientRequest",
    "WASmaxParseUtils",
    "WASocketCloseReason",
    "WATimeUtils",
    "WAWap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
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
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U = null,
      V = function (t, n, r) {
        return new j(t, n, r);
      };
    function H(e) {
      V = e;
    }
    function G(e) {
      return e;
    }
    var z = 0,
      j = (function () {
        function t(t, n, r, a) {
          var i = this,
            l,
            E,
            k;
          ((this.$1 = null),
            (this.$2 = 1),
            (this.nextSocketId = 1),
            (this.pendingIqs = new Map()),
            (this.ackHandlers = []),
            (this.pendingSmaxStanzas = new Map()),
            (this.$4 = new (o("WAResolvable").Resolvable)()),
            (this.socketAbortController = null),
            (this.activePing = null),
            (this.$5 = new Set()),
            (this.$6 = 0),
            (this.$7 = 0),
            (this.socketId = z),
            (this.socket = null),
            (this.softCloseSocket = null),
            (this.setOnBeforeCastStanza = function (e) {
              i.config.handlers.onBeforeCastStanza = e;
            }),
            (this.getAndIncrementNextOrderedId = function () {
              return i.$2++;
            }),
            (this.waitForNetworkHealth = function () {
              return (
                i.$1 || (i.$1 = new (o("WAResolvable").Resolvable)()),
                i.$1.promise
              );
            }),
            (this.handleStanza = function (t, n, r) {
              var a = o("WASmaxParseUtils").attrString(t, "id");
              if (a.success && t.tag !== "receipt") {
                var l = a.value,
                  u = i.pendingSmaxStanzas.get(l);
                if (u)
                  return (
                    i.pendingSmaxStanzas.delete(l),
                    u.resolve(t),
                    i.maybeScheduleHealthCheck(),
                    Promise.resolve("NO_ACK")
                  );
              }
              var c = Ce(t);
              if (c != null) {
                var d = i.pendingIqs.get(c);
                d
                  ? (i.pendingIqs.delete(c),
                    d.resolve(t),
                    i.maybeScheduleHealthCheck())
                  : (o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "handleIq no handler for iq with id ",
                          "",
                        ])),
                      c,
                    ),
                    o("WALogger").ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "handleIq no handler for iq",
                        ])),
                    ));
              } else if (t.tag === "ack") i.handleAck(t);
              else
                return t.tag === "failure" &&
                  i.config.shouldBlockReceivingUntilSuccess
                  ? i.$3(t, n, r)
                  : i.$4.promise.then(function () {
                      return i.$3(t, n, r);
                    });
              return Promise.resolve("NO_ACK");
            }),
            (this.deadSocketTimer = new (o("WAShiftTimer").ShiftTimer)(
              function (e) {
                e === i.socketId &&
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] Socket ",
                        " expired",
                      ])),
                    e,
                  ),
                  i.softCloseSocket &&
                    i.softCloseSocket(
                      o("WASocketCloseReason").CommsCloseReason.DeadSocket,
                    ));
              },
            )),
            (this.healthCheckTimer = new (o("WAShiftTimer").ShiftTimer)(
              function () {
                i.socketId && i.sendPing();
              },
            )),
            (this.stopComms = function (e) {
              var t;
              (i.socketLoop.endWithValue(),
                (t = i.socket) == null || t.close(e));
            }),
            (this.closeSocketAndPreventRetry = function (e) {
              (i.socketLoop.endWithValue(),
                i.socket &&
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndPreventRetry called",
                      ])),
                  ),
                  i.socket.close(e)));
            }),
            (this.closeSocketAndPause = function (e) {
              (i.socketLoop.pauseOnNextIteration(),
                i.socket &&
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndPause called",
                      ])),
                  ),
                  i.socket.close(e)));
            }),
            (this.closeSocketAndResume = function (e) {
              (i.socketLoop.unpause(),
                i.socket &&
                  (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndResume called",
                      ])),
                  ),
                  i.socket.close(e)));
            }),
            (this.openSocketLoop = function () {
              i.socketLoop.start();
            }),
            (this.maybeResetSocketLoop = function () {
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] maybeResetSocketLoop",
                  ])),
              ),
                i.isSocketConnected() || i.socketLoop.reset());
            }),
            (this.forceResetSocketLoop = function () {
              i.socketLoop.reset();
            }),
            (this.forceAbortSocketConnection = function () {
              var e;
              ((e = i.socketAbortController) == null || e.abort(),
                i.softCloseSocket == null ||
                  i.softCloseSocket(
                    o("WASocketCloseReason").CommsCloseReason.ConnectionAborted,
                  ));
            }),
            (this.trySoftCloseSocket = function (e) {
              var t = i.softCloseSocket;
              return t == null
                ? Promise.resolve(!1)
                : (t(
                    e != null
                      ? e
                      : o("WASocketCloseReason").CommsCloseReason
                          .ClientCloseUnspecified,
                  ),
                  Promise.resolve(!0));
            }),
            (this.closeSocket = function (e) {
              i.socket &&
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] Socket ",
                      " closed",
                    ])),
                  i.socketId,
                ),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] closeSocket called",
                    ])),
                ),
                i.socket.close(e));
            }),
            (this.closeSocketInDebugMode = function () {
              var e = i.socket;
              e &&
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "closeSocket called",
                    ])),
                ),
                e.setOnClose(function () {
                  var e = i.socketId;
                  (o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] Socket ",
                        " closed",
                      ])),
                    e,
                  ),
                    i.activePing &&
                      e === i.activePing.socketId &&
                      (i.activePing.handler.resolve(), (i.activePing = null)),
                    i
                      .filterPending(function (t) {
                        return t.attachedToSocketId === e;
                      })
                      .forEach(function (e) {
                        return void i.removeHandler(e);
                      }),
                    e === i.socketId &&
                      ((i.socketId = z), (i.socket = null), i.$8(!1, z)));
                }),
                e.close());
            }),
            (this.onStreamErrorReceived = function () {
              i.socketLoop.cancelReset();
            }),
            (this.cancelDeadSocketTimer = function () {
              i.deadSocketTimer.cancel();
            }),
            (this.socketLoopIteration = function () {
              var e,
                t = i.nextSocketId++;
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] Socket ",
                    " opening",
                  ])),
                t,
              );
              var n = function () {
                i.onConnectionChange("in_handshake");
              };
              return (
                i.config.handlers.onSocketLoopIteration == null ||
                  i.config.handlers.onSocketLoopIteration(
                    i.socketAbortController,
                  ),
                typeof AbortController == "function" &&
                  (i.socketAbortController = new AbortController()),
                i.config
                  .openChatSocket(
                    n,
                    (e = i.socketAbortController) == null ? void 0 : e.signal,
                  )
                  .then(function (e) {
                    if (e.success) {
                      var n = e.value;
                      i.config.handlers.onSocketOpen == null ||
                        i.config.handlers.onSocketOpen();
                      var r = new (o("WAResolvable").Resolvable)();
                      return (
                        o("WALogger").LOG(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
                              "[comms] Socket ",
                              " opened",
                            ])),
                          t,
                        ),
                        (i.socketId = t),
                        (i.socket = n),
                        (i.$7 = self.performance.now()),
                        (i.$6 = 0),
                        i.$8(!0, t),
                        (i.softCloseSocket = function (e) {
                          ((i.softCloseSocket = null),
                            i.socket &&
                              i.config.shouldCloseStaleSocket &&
                              (i.socket.close(e), (i.socket = null), i.$8(!1)),
                            r.resolve());
                        }),
                        i.socketLoop.resetTimeoutAfter(1e4),
                        i.deadSocketTimer.cancel(),
                        i.maybeScheduleHealthCheck(),
                        n.setOnFrame(function (e) {
                          return i.parseAndHandleStanza(t, e);
                        }),
                        n.setOnClose(function (e) {
                          (o("WALogger").LOG(
                            b ||
                              (b = babelHelpers.taggedTemplateLiteralLoose([
                                "[comms] Socket ",
                                " closed",
                              ])),
                            t,
                          ),
                            i.activePing &&
                              t === i.activePing.socketId &&
                              (i.activePing.handler.resolve(),
                              (i.activePing = null)),
                            i
                              .filterPending(function (e) {
                                return e.attachedToSocketId === t;
                              })
                              .forEach(function (e) {
                                return void i.removeHandler(e);
                              }),
                            t === i.socketId &&
                              ((i.socketId = z),
                              (i.socket = null),
                              i.$8(!1, t),
                              i.onConnectionChange("disconnected"),
                              i.config.handlers.onDisconnect == null ||
                                i.config.handlers.onDisconnect(e),
                              r.resolve()));
                        }),
                        i.onConnectionChange("connected"),
                        i.config.handlers.onConnect == null ||
                          i.config.handlers.onConnect(),
                        i
                          .filterPending(function (e) {
                            return !e.attachedToSocketId;
                          })
                          .sort(function (e, t) {
                            return e.orderedId - t.orderedId;
                          })
                          .forEach(function (e) {
                            switch (e.type) {
                              case "smax":
                              case "iq":
                                i.maybeSendPendingStanza(e);
                                break;
                              case "ack":
                                i.$9(e);
                                break;
                              default:
                                e.type;
                                break;
                            }
                          }),
                        r.promise
                      );
                    } else {
                      var a = e.error;
                      switch (a) {
                        case "max-hunters":
                          o("WALogger").WARN(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose([
                                "[comms] socketLoopIteration socket closed while in noise handshake using treasureHunt strategy",
                              ])),
                          );
                          break;
                        case "disconnected":
                          o("WALogger").WARN(
                            S ||
                              (S = babelHelpers.taggedTemplateLiteralLoose([
                                "[comms] socketLoopIteration socket disconnected while in noise handshake",
                              ])),
                          );
                          break;
                        default:
                          return;
                      }
                    }
                  })
                  .catch(function (e) {
                    e instanceof o("WAErrors").Disconnected
                      ? o("WALogger").LOG(
                          R ||
                            (R = babelHelpers.taggedTemplateLiteralLoose([
                              "[comms] socketLoopIteration socket closed while in noise handshake",
                            ])),
                        )
                      : o("WALogger").ERROR(
                          L ||
                            (L = babelHelpers.taggedTemplateLiteralLoose([
                              "[comms] socketLoopIteration failed ",
                              "",
                            ])),
                          e,
                        );
                  })
              );
            }),
            (this.$8 = a != null ? a : function () {}),
            (this.$3 = t),
            (this.onConnectionChange = o(
              "WANotifyConnectionChangeFactory",
            ).notifyConnectionChangeFactory(
              (l = n.handlers.onConnectionChange) != null ? l : function () {},
              (E = n.handlers.onOptimisticConnectionChange) != null
                ? E
                : function () {},
            )),
            (this.gzipInflate = r),
            (this.config = n),
            (this.socketLoop = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
              name: "MainSocketLoop",
              code: ie,
              timer:
                (k = n.socketReconnectBackoffAlgo) != null
                  ? k
                  : {
                      jitter: 0.1,
                      max: n.maxSocketLoopWaitTime,
                      algo: { type: "fibonacci", first: 1e4, second: 1e4 },
                      relativeDelay: !0,
                    },
              resetDelay: 3e4,
              isPauseEnabled: n.isPauseEnabled === !0,
            })));
        }
        var n = t.prototype;
        return (
          (n.setSocket = function (t) {
            this.socket = t;
          }),
          (n.addAckHandler = function (t) {
            this.ackHandlers.push(t);
          }),
          (n.removeAckHandler = function (t) {
            var e = this.ackHandlers.indexOf(t);
            e !== -1 &&
              o("WAArrayUtils").removeIndexWithoutPreservingOrder(
                this.ackHandlers,
                e,
              );
          }),
          (n.filterPending = function (t) {
            var e = [];
            function n(n) {
              t(n) && e.push(n);
            }
            return (
              this.pendingIqs.forEach(n),
              this.ackHandlers.forEach(n),
              this.pendingSmaxStanzas.forEach(n),
              e
            );
          }),
          (n.sendPendingStanza = function (t) {
            (t.cleanup == null || t.cleanup(),
              (t.cleanup = void 0),
              this.$9(t));
          }),
          (n.$9 = function (t) {
            var e = this;
            this.callStanza(t.stanza).catch(function (n) {
              if (!(n instanceof o("WAErrors").BufferTooLargeError)) throw n;
              e.$10(t, n);
            });
          }),
          (n.$10 = function (t, n) {
            if (t.type === "ack") {
              var e = this.ackHandlers.indexOf(t);
              if (e === -1) return;
              o("WAArrayUtils").removeIndexWithoutPreservingOrder(
                this.ackHandlers,
                e,
              );
            } else {
              var r = t.stanza.attrs.id;
              if (typeof r != "string") return;
              if (t.type === "iq") {
                if (this.pendingIqs.get(r) !== t) return;
                this.pendingIqs.delete(r);
              } else {
                if ((t.type, this.pendingSmaxStanzas.get(r) !== t)) return;
                this.pendingSmaxStanzas.delete(r);
              }
              (t.cleanup == null || t.cleanup(), (t.cleanup = void 0));
            }
            t.resolve(Promise.reject(n));
          }),
          (n.maybeSendPendingStanza = function (t) {
            if (t.attempt >= this.config.maxRetries) {
              var e, n;
              ((e = (n = this.config.handlers).onDropStanza) == null ||
                e.call(n, t),
                t.cleanup == null || t.cleanup(),
                (t.cleanup = void 0),
                this.removeHandler(t, "max-retries"));
            } else if (this.socket) {
              ((t.attempt += 1), this.sendPendingStanza(t));
              return;
            } else
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "Comms has no open socket, will resend stanza when socket opens",
                  ])),
              );
          }),
          (n.callStanzaAsync = async function (t, n) {
            var e = await this.callStanza(t, n);
            return e;
          }),
          (n.callStanza = function (t, n) {
            var e = this.castStanza(t, n);
            return (
              this.deadSocketTimer.onOrBefore(
                this.config.deadSocketTime,
                this.socketId,
              ),
              this.healthCheckTimer.cancel(),
              e
            );
          }),
          (n.castStanzaAsync = async function (t) {
            var e = await this.castStanza(t);
            return e;
          }),
          (n.castStanza = function (t, n) {
            var e = this;
            try {
              var r,
                a,
                i =
                  (r = (a = this.config.handlers).onBeforeCastStanza) == null
                    ? void 0
                    : r.call(a, t, n);
              if (i != null)
                return (
                  o("WALogger").DEV_XMPP(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          `Dropping stanza since onBeforeCastStanza matched:
`,
                          ".",
                        ],
                        [
                          "Dropping stanza since onBeforeCastStanza matched:\\n",
                          ".",
                        ],
                      )),
                    t,
                  ),
                  o("WALogger").DEV_XMPP(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          `--- Receive (via onBeforeCastStanza) ---
`,
                          "",
                        ],
                        ["--- Receive (via onBeforeCastStanza) ---\\n", ""],
                      )),
                    i,
                  ),
                  o("WALogger").ERROR(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "Dropping stanza since onBeforeCastStanza matched.",
                      ])),
                  ),
                  Array.isArray(i)
                    ? Promise.all(
                        i.map(function (t) {
                          return Promise.resolve(
                            e.handleStanza(t, e.socketId, z),
                          );
                        }),
                      )
                    : (this.handleStanza(i, this.socketId, z),
                      Promise.resolve())
                );
            } catch (e) {
              o("WALogger").DEV_XMPP(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose(
                    [
                      `Error in onBeforeCastStanza, we consumed and continue with normal stanza sending to the server:
`,
                      "",
                    ],
                    [
                      "Error in onBeforeCastStanza, we consumed and continue with normal stanza sending to the server:\\n",
                      "",
                    ],
                  )),
                e,
              );
            }
            var l = this.socketOrThrow("castStanza");
            try {
              return (
                o("WALogger").DEV_XMPP(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose(
                      [
                        `--- Sending ---
`,
                        "",
                      ],
                      ["--- Sending ---\\n", ""],
                    )),
                  t,
                ),
                l
                  .sendFrame(o("WAWap").encodeStanza(t))
                  .then(function () {
                    e.config.handlers.onCastStanza == null ||
                      e.config.handlers.onCastStanza(t, n);
                  })
                  .catch(function (e) {
                    if (
                      (o("WALogger").ERROR(
                        $ ||
                          ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "castStanza async error ",
                            "",
                          ])),
                        e,
                      ),
                      e instanceof o("WAErrors").BufferTooLargeError)
                    )
                      return Promise.reject(e);
                  })
              );
            } catch (e) {
              o("WALogger").ERROR(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "castStanza error ",
                    "",
                  ])),
                e,
              );
            }
            return Promise.resolve();
          }),
          (n.socketOrThrow = function (t) {
            var e = this.socket;
            if (e) return e;
            throw r("err")("Comms." + t + " called while no socket");
          }),
          (n.startHandlingRequests = function () {
            return (
              o("WALogger").LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "Comms.startHandlingRequests",
                  ])),
              ),
              this.$4.resolve(),
              this.$4.promise.then(function () {})
            );
          }),
          (n.parseAndHandleStanza = function (t, n) {
            var e = this;
            t === this.socketId &&
              (this.deadSocketTimer.cancel(),
              (this.$6 = self.performance.now()),
              this.$1 && (this.$1.resolve(), (this.$1 = null)));
            var r = o("WAWap")
              .decodeStanza(n, this.gzipInflate)
              .catch(function (e) {
                throw (
                  o("WALogger").ERROR(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "Failure parsing stanza!",
                      ])),
                  ),
                  e
                );
              })
              .then(function (r) {
                (o("WALogger").DEV_XMPP(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose(
                      [
                        `--- Receiving ---
`,
                        "",
                      ],
                      ["--- Receiving ---\\n", ""],
                    )),
                  r,
                ),
                  e.config.handlers.onHandleStanza == null ||
                    e.config.handlers.onHandleStanza(r, t, n.byteLength));
                var a = e.activePing;
                return a && a.socketId === t && a.stanzaId === Ce(r)
                  ? ((e.activePing = null),
                    a.handler.resolve(r),
                    e.maybeScheduleHealthCheck(),
                    "NO_ACK")
                  : e.handleStanza(r, t, n.byteLength);
              })
              .then(function (n) {
                if (t === e.socketId) {
                  if (n === "CLOSE_SOCKET") {
                    o("WALogger").LOG(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "[comms] job response is CLOSE_SOCKET",
                        ])),
                    );
                    var r = e.socket;
                    r &&
                      r.close(
                        o("WASocketCloseReason").CommsCloseReason
                          .StanzaHandlerRequested,
                      );
                  } else n === "NO_ACK" || e.castStanza(n);
                  return "NO_ACK";
                }
              });
            (this.$5.add(r),
              r.finally(function () {
                return void e.$5.delete(r);
              }));
          }),
          (n.handleAck = function (t) {
            for (
              var e = this.ackHandlers, n = -1, r = null;
              !r && ++n < e.length;
            )
              r = e[n].parseAndTest(t);
            if (r) {
              var a,
                i,
                l = e[n];
              (o("WAArrayUtils").removeIndexWithoutPreservingOrder(e, n),
                (a = (i = this.config.handlers).onHandleAck) == null ||
                  a.call(i, t),
                l.resolve(r),
                this.maybeScheduleHealthCheck());
            } else
              o("WALogger").WARN(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "handleAck: unrecognized ",
                    "",
                  ])),
                t,
              );
          }),
          (n.removeHandler = function (t, n) {
            if (
              (n === void 0 && (n = "disconnect"),
              t.type === "iq" || t.type === "smax")
            ) {
              var e = t.stanza.attrs.id;
              if (
                !e ||
                typeof e != "string" ||
                (t.type === "iq" && !this.pendingIqs.delete(e)) ||
                (t.type === "smax" && !this.pendingSmaxStanzas.delete(e))
              )
                return;
            } else {
              t.type;
              var r = this.ackHandlers.indexOf(t);
              if (r === -1) return;
              o("WAArrayUtils").removeIndexWithoutPreservingOrder(
                this.ackHandlers,
                r,
              );
            }
            n === "disconnect"
              ? t.resolve(Promise.reject(new (o("WAErrors").Disconnected)()))
              : n === "abort"
                ? t.resolve(Promise.reject(new (o("WAErrors").Aborted)()))
                : t.resolve(Promise.reject(new (o("WAErrors").MaxRetries)()));
          }),
          (n.maybeScheduleHealthCheck = function () {
            if (
              !this.healthCheckTimer.isScheduled() &&
              !(
                this.activePing ||
                this.ackHandlers.length ||
                this.pendingIqs.size ||
                this.pendingSmaxStanzas.size
              )
            ) {
              var e = this.config.healthCheckInterval,
                t = Math.ceil(e * 1e3 * (1 + Math.random()));
              this.healthCheckTimer.onOrBefore(t);
            }
          }),
          (n.isSocketConnected = function () {
            return this.socket != null;
          }),
          (n.getMsSinceLastInboundRx = function () {
            if (!this.isSocketConnected() || this.$7 === 0) return -1;
            var e = this.$6 > 0 ? this.$6 : this.$7;
            return self.performance.now() - e;
          }),
          (n.sendIq = function (t) {
            var e = this,
              n = t.attachToSocket,
              a = t.iq,
              i = t.signal,
              l = t.timeoutSeconds,
              s = l === void 0 ? 0 : l,
              u = t.type,
              c = u === void 0 ? "iq" : u;
            return new Promise(function (t) {
              var l = a.attrs.id;
              if (!l || typeof l != "string")
                throw r("err")(
                  "[comms] sendIq given iq without id: " + String(a),
                );
              var u = e.socketId;
              if (n && !u) {
                t(Promise.reject(new (o("WAErrors").Offline)()));
                return;
              }
              var d = function (o) {
                  o === void 0 && (o = "disconnect");
                  var n =
                    c === "iq"
                      ? e.pendingIqs.get(l)
                      : e.pendingSmaxStanzas.get(l);
                  if (!n) {
                    t(
                      Promise.reject(
                        r("err")(
                          "[comms] _sendIq unexisting stanza to be cancelled: " +
                            l,
                        ),
                      ),
                    );
                    return;
                  }
                  e.removeHandler(n, o);
                },
                m = null;
              if (s > 0) {
                var p = setTimeout(d, s * 1e3);
                m = function () {
                  clearTimeout(p);
                };
              }
              if (i != null)
                if (i.aborted) {
                  t(Promise.reject(new (o("WAErrors").Disconnected)()));
                  return;
                } else {
                  var _ = function () {
                    d("abort");
                  };
                  (i.addEventListener("abort", _),
                    (m = function () {
                      i.removeEventListener("abort", _);
                    }));
                }
              var f = {
                resolve: t,
                stanza: a,
                attachedToSocketId: n ? u : z,
                orderedId: e.$2++,
                attempt: 0,
                cleanup: m,
              };
              if (c === "iq") {
                var g = babelHelpers.extends({ type: c }, f);
                (e.pendingIqs.set(l, g),
                  e.config.handlers.onSendIq == null ||
                    e.config.handlers.onSendIq(a),
                  e.maybeSendPendingStanza(g));
              } else {
                var h = babelHelpers.extends({ type: c }, f);
                (e.pendingSmaxStanzas.set(l, h), e.maybeSendPendingStanza(h));
              }
            });
          }),
          (n.sendPing = async function () {
            if (!this.socketId)
              return (
                o("WALogger").LOG(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] sendPing when socket dead",
                    ])),
                ),
                !1
              );
            if (this.activePing && this.activePing.socketId === this.socketId)
              return (
                o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] sendPing ping still pending",
                    ])),
                ),
                !1
              );
            this.activePing && this.activePing.handler.resolve();
            var e = o("WASmaxOutPingsClientRequest").makeClientRequest(),
              t = e.attrs.id;
            if (typeof t != "string")
              return (
                o("WALogger").ERROR(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] No stanzaId in ping request stanza",
                    ])),
                ),
                !1
              );
            var n = new (o("WAResolvable").Resolvable)();
            this.activePing = {
              socketId: this.socketId,
              stanzaId: t,
              handler: n,
            };
            var r = Date.now();
            this.callStanza(e);
            var a = await n.promise,
              i = Date.now();
            if (a) {
              var l = o(
                "WASmaxInPingsClientResponseServerResponse",
              ).parseClientResponseServerResponse(a, e);
              if (l.success) {
                var s,
                  u,
                  c = i - r,
                  d = Math.round(c / 2),
                  m = o("WATimeUtils").castToUnixTime(l.value.t),
                  p = Math.round((r + d) / 1e3 - m);
                return (
                  (s = (u = this.config.handlers).onClockSkewUpdate) == null ||
                    s.call(u, p),
                  !0
                );
              }
            }
            return !1;
          }),
          t
        );
      })();
    function K() {
      return U;
    }
    function Q(e, t, n, r) {
      if ((r === void 0 && (r = !0), U != null)) return U;
      var o = V(e, t, n);
      return ((U = o), r && setTimeout(ee, 0), o);
    }
    function X(e) {
      var t = ye("stopComms");
      (t.stopComms(e), (U = null));
    }
    function Y(e) {
      var t = ye("closeSocketAndPreventRetry");
      t.closeSocketAndPreventRetry(e);
    }
    function J(e) {
      var t = ye("closeSocketAndPause");
      t.closeSocketAndPause(e);
    }
    function Z(e) {
      var t = ye("closeSocketAndResume");
      t.closeSocketAndResume(e);
    }
    function ee() {
      var e = ye("openSocketLoop");
      e.openSocketLoop();
    }
    function te() {
      var e = ye("maybeResetSocketLoop");
      e.maybeResetSocketLoop();
    }
    function ne() {
      var e = ye("forceResetSocketLoop");
      e.forceResetSocketLoop();
    }
    function re() {
      var e = ye("socketAbortController");
      e.forceAbortSocketConnection();
    }
    function oe() {
      var e;
      return !!((e = U) != null && e.isSocketConnected());
    }
    function ae() {
      var e, t;
      return (e = (t = U) == null ? void 0 : t.getMsSinceLastInboundRx()) !=
        null
        ? e
        : -1;
    }
    function ie() {
      var e = ye("socketLoopIteration");
      return e.socketLoopIteration();
    }
    function le(e) {
      var t = ye("closeSocket");
      t.closeSocket(e);
    }
    function se() {
      var e = ye("onStreamErrorReceived");
      e.onStreamErrorReceived();
    }
    function ue() {
      var e = ye("waitForConnection");
      return (e.sendPing(), e.waitForNetworkHealth());
    }
    function ce(e, t) {
      var n = ye("castStanza");
      n.isSocketConnected()
        ? n.castStanza(e, t)
        : o("WALogger").LOG(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
                "Comms has no open socket",
              ])),
          );
    }
    function de(e) {
      var t = ye("castStanza");
      return t.socketId === e;
    }
    function me(e, t, n, r, o) {
      (n === void 0 && (n = 0), o === void 0 && (o = "iq"));
      var a = ye("sendIq");
      return a.sendIq({
        attachToSocket: t,
        iq: e,
        signal: r,
        timeoutSeconds: n,
        type: o,
      });
    }
    function pe(e, t) {
      var n,
        r,
        o,
        a = (n = t == null ? void 0 : t.withoutRetry) != null ? n : !1,
        i = (r = t == null ? void 0 : t.timeoutSeconds) != null ? r : 0,
        l = (o = t == null ? void 0 : t.signal) != null ? o : null,
        s = t == null ? void 0 : t.onResponse,
        u = me(e, a, i, l, "smax");
      return s == null
        ? u
        : u.then(function (e) {
            return (s(e), e);
          });
    }
    function _e() {
      var e = ye("sendPing");
      return e.sendPing();
    }
    function fe() {
      return ye("startHandlingRequests").startHandlingRequests();
    }
    function ge() {
      U && U.cancelDeadSocketTimer();
    }
    function he() {
      return U != null;
    }
    function ye(e) {
      if (U) return U;
      throw r("err")("[comms] " + e + " called before startComms");
    }
    function Ce(e) {
      if (e.tag === "iq") {
        var t = e.attrs.type;
        if (t === "result" || t === "error")
          return o("WAWap").decodeAsString(e.attrs.id) || null;
      }
      return null;
    }
    function be() {
      var e = ye("getAndIncrementNextOrderedId");
      return e.getAndIncrementNextOrderedId();
    }
    function ve() {
      U = null;
    }
    ((l.setCommsFactory = H),
      (l.toSocketId = G),
      (l.DEFAULT_SOCKET_ID = z),
      (l.Comms = j),
      (l.getComms = K),
      (l.startComms = Q),
      (l.stopComms = X),
      (l.closeSocketAndPreventRetry = Y),
      (l.closeSocketAndPause = J),
      (l.closeSocketAndResume = Z),
      (l.openSocketLoop = ee),
      (l.maybeResetSocketLoop = te),
      (l.forceResetSocketLoop = ne),
      (l.forceAbortSocketConnection = re),
      (l.isSocketConnected = oe),
      (l.getMsSinceLastInboundRx = ae),
      (l.socketLoopIteration = ie),
      (l.closeSocket = le),
      (l.onStreamErrorReceived = se),
      (l.waitForConnection = ue),
      (l.castSmaxStanza = ce),
      (l.isActiveSocket = de),
      (l._sendIq = me),
      (l.sendSmaxStanza = pe),
      (l.sendPing = _e),
      (l.startHandlingRequests = fe),
      (l.cancelDeadSocketTimer = ge),
      (l.isCommsInitialized = he),
      (l.singletonOrThrowIfUninitialized = ye),
      (l.getAndIncrementNextOrderedId = be),
      (l.resetStateForTests = ve));
  },
  98,
);
