__d(
  "WAComms",
  [
    "Promise",
    "WAArrayUtils",
    "WABaseGlobals",
    "WAErrors",
    "WALogger",
    "WANotifyConnectionChangeFactory",
    "WAPromiseRetryLoop",
    "WAResolvable",
    "WAShiftTimer",
    "WASmaxInPingsClientResponseServerResponse",
    "WASmaxOutPingsClientRequest",
    "WASmaxParseUtils",
    "WATimeUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
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
      U,
      V = null,
      H = function (t, n, r) {
        return new j(t, n, r);
      };
    function G(e) {
      H = e;
    }
    var z = 0,
      j = (function () {
        function t(t, n, r) {
          var a = this,
            i,
            l,
            E;
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
            (this.setOnBeforeCastStanzaForE2E = function (e) {
              a.config.handlers.onBeforeCastStanzaForE2E = e;
            }),
            (this.getAndIncrementNextOrderedId = function () {
              return a.$2++;
            }),
            (this.waitForNetworkHealth = function () {
              return (
                a.$1 || (a.$1 = new (o("WAResolvable").Resolvable)()),
                a.$1.promise
              );
            }),
            (this.handleStanza = function (t, n, r) {
              var i = o("WASmaxParseUtils").attrString(t, "id");
              if (i.success && t.tag !== "receipt") {
                var l = i.value,
                  u = a.pendingSmaxStanzas.get(l);
                if (u)
                  return (
                    a.pendingSmaxStanzas.delete(l),
                    u.resolve(t),
                    a.maybeScheduleHealthCheck(),
                    "NO_ACK"
                  );
              }
              var c = Ce(t);
              if (c != null) {
                var d = a.pendingIqs.get(c);
                d
                  ? (a.pendingIqs.delete(c),
                    d.resolve(t),
                    a.maybeScheduleHealthCheck())
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
              } else if (t.tag === "ack") a.handleAck(t);
              else
                return t.tag === "failure" &&
                  a.config.shouldBlockReceivingUntilSuccess
                  ? a.$3(t, n, r)
                  : a.$4.promise.then(function () {
                      return a.$3(t, n, r);
                    });
              return "NO_ACK";
            }),
            (this.deadSocketTimer = new (o("WAShiftTimer").ShiftTimer)(
              function (e) {
                e === a.socketId &&
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] Socket ",
                        " expired",
                      ])),
                    e,
                  ),
                  a.softCloseSocket && a.softCloseSocket());
              },
            )),
            (this.healthCheckTimer = new (o("WAShiftTimer").ShiftTimer)(
              function () {
                a.socketId && a.sendPing();
              },
            )),
            (this.stopComms = function () {
              var e;
              (a.socketLoop.endWithValue(),
                (e = a.socket) == null || e.close());
            }),
            (this.closeSocketAndPreventRetry = function () {
              (a.socketLoop.endWithValue(),
                a.socket &&
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndPreventRetry called",
                      ])),
                  ),
                  a.socket.close()));
            }),
            (this.closeSocketAndPause = function () {
              (a.socketLoop.pauseOnNextIteration(),
                a.socket &&
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndPause called",
                      ])),
                  ),
                  a.socket.close()));
            }),
            (this.closeSocketAndResume = function () {
              (a.socketLoop.unpause(),
                a.socket &&
                  (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndResume called",
                      ])),
                  ),
                  a.socket.close()));
            }),
            (this.openSocketLoop = function () {
              a.socketLoop.start();
            }),
            (this.maybeResetSocketLoop = function () {
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] maybeResetSocketLoop",
                  ])),
              ),
                a.isSocketConnected() || a.socketLoop.reset());
            }),
            (this.forceResetSocketLoop = function () {
              a.socketLoop.reset();
            }),
            (this.forceAbortSocketConnection = function () {
              var e;
              ((e = a.socketAbortController) == null || e.abort(),
                a.softCloseSocket == null || a.softCloseSocket());
            }),
            (this.closeSocket = function () {
              a.socket &&
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] Socket ",
                      " closed",
                    ])),
                  a.socketId,
                ),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] closeSocket called",
                    ])),
                ),
                a.socket.close());
            }),
            (this.closeSocketInDebugMode = function () {
              var e = a.socket;
              e &&
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "closeSocket called",
                    ])),
                ),
                e.setOnClose(function () {
                  var e = a.socketId;
                  (o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] Socket ",
                        " closed",
                      ])),
                    e,
                  ),
                    a.activePing &&
                      e === a.activePing.socketId &&
                      (a.activePing.handler.resolve(), (a.activePing = null)),
                    a
                      .filterPending(function (t) {
                        return t.attachedToSocketId === e;
                      })
                      .forEach(function (e) {
                        return void a.removeHandler(e);
                      }),
                    e === a.socketId && ((a.socketId = z), (a.socket = null)));
                }),
                e.close());
            }),
            (this.onStreamErrorReceived = function () {
              a.socketLoop.cancelReset();
            }),
            (this.cancelDeadSocketTimer = function () {
              a.deadSocketTimer.cancel();
            }),
            (this.socketLoopIteration = function () {
              var e,
                t = a.nextSocketId++;
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] Socket ",
                    " opening",
                  ])),
                t,
              );
              var n = function () {
                a.onConnectionChange("in_handshake");
              };
              return (
                a.config.handlers.onSocketLoopIteration == null ||
                  a.config.handlers.onSocketLoopIteration(
                    a.socketAbortController,
                  ),
                typeof AbortController == "function" &&
                  (a.socketAbortController = new AbortController()),
                a.config
                  .openChatSocket(
                    n,
                    (e = a.socketAbortController) == null ? void 0 : e.signal,
                  )
                  .then(function (e) {
                    if (e.success) {
                      var n = e.value;
                      a.config.handlers.onSocketOpen == null ||
                        a.config.handlers.onSocketOpen();
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
                        (a.socketId = t),
                        (a.socket = n),
                        (a.$7 = self.performance.now()),
                        (a.$6 = 0),
                        (a.softCloseSocket = function () {
                          ((a.softCloseSocket = null),
                            a.socket &&
                              a.config.shouldCloseStaleSocket &&
                              (a.socket.close(), (a.socket = null)),
                            r.resolve());
                        }),
                        a.socketLoop.resetTimeoutAfter(1e4),
                        a.deadSocketTimer.cancel(),
                        a.maybeScheduleHealthCheck(),
                        n.setOnFrame(function (e) {
                          return a.parseAndHandleStanza(t, e);
                        }),
                        n.setOnClose(function () {
                          (o("WALogger").LOG(
                            b ||
                              (b = babelHelpers.taggedTemplateLiteralLoose([
                                "[comms] Socket ",
                                " closed",
                              ])),
                            t,
                          ),
                            a.activePing &&
                              t === a.activePing.socketId &&
                              (a.activePing.handler.resolve(),
                              (a.activePing = null)),
                            a
                              .filterPending(function (e) {
                                return e.attachedToSocketId === t;
                              })
                              .forEach(function (e) {
                                return void a.removeHandler(e);
                              }),
                            t === a.socketId &&
                              ((a.socketId = z),
                              (a.socket = null),
                              a.onConnectionChange("disconnected"),
                              a.config.handlers.onDisconnect == null ||
                                a.config.handlers.onDisconnect(),
                              r.resolve()));
                        }),
                        a.onConnectionChange("connected"),
                        a.config.handlers.onConnect == null ||
                          a.config.handlers.onConnect(),
                        a
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
                                a.maybeSendPendingStanza(e);
                                break;
                              case "ack":
                                a.callStanza(e.stanza);
                                break;
                              default:
                                e.type;
                                break;
                            }
                          }),
                        r.promise
                      );
                    } else {
                      var i = e.error;
                      switch (i) {
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
            (this.$3 = t),
            (this.onConnectionChange = o(
              "WANotifyConnectionChangeFactory",
            ).notifyConnectionChangeFactory(
              (i = n.handlers.onConnectionChange) != null ? i : function () {},
              (l = n.handlers.onOptimisticConnectionChange) != null
                ? l
                : function () {},
            )),
            (this.gzipInflate = r),
            (this.config = n),
            (this.socketLoop = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
              name: "MainSocketLoop",
              code: ie,
              timer:
                (E = n.socketReconnectBackoffAlgo) != null
                  ? E
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
        var a = t.prototype;
        return (
          (a.setSocket = function (t) {
            this.socket = t;
          }),
          (a.addAckHandler = function (t) {
            this.ackHandlers.push(t);
          }),
          (a.removeAckHandler = function (t) {
            var e = this.ackHandlers.indexOf(t);
            e !== -1 &&
              o("WAArrayUtils").removeIndexWithoutPreservingOrder(
                this.ackHandlers,
                e,
              );
          }),
          (a.filterPending = function (t) {
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
          (a.sendPendingStanza = function (t) {
            (t.cleanup == null || t.cleanup(),
              (t.cleanup = void 0),
              this.callStanza(t.stanza));
          }),
          (a.maybeSendPendingStanza = function (t) {
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
          (a.callStanzaAsync = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.callStanza(e, t);
                return n;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.callStanza = function (t, n) {
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
          (a.castStanzaAsync = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.castStanza(e);
                return t;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.castStanza = function (t, r) {
            var e = this;
            try {
              var a,
                i,
                l =
                  (a = (i = this.config.handlers).onBeforeCastStanzaForE2E) ==
                  null
                    ? void 0
                    : a.call(i, t, r);
              if (l != null)
                return (
                  o("WALogger").DEV_XMPP(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          "Dropping stanza since onBeforeCastStanza matched:\n",
                          ". We return mock response directly.",
                        ],
                        [
                          "Dropping stanza since onBeforeCastStanza matched:\\n",
                          ". We return mock response directly.",
                        ],
                      )),
                    t,
                  ),
                  o("WALogger").DEV_XMPP(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose(
                        ["--- Receive (via SMAX+E2E) ---\n", ""],
                        ["--- Receive (via SMAX+E2E) ---\\n", ""],
                      )),
                    l,
                  ),
                  o("WALogger").ERROR(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "Dropping stanza since onBeforeCastStanza matched. We return mock response directly.",
                      ])),
                  ),
                  Array.isArray(l)
                    ? (U || (U = n("Promise"))).all(
                        l.map(function (t) {
                          return (U || (U = n("Promise"))).resolve(
                            e.handleStanza(t, e.socketId, z),
                          );
                        }),
                      )
                    : (this.handleStanza(l, this.socketId, z),
                      (U || (U = n("Promise"))).resolve())
                );
            } catch (e) {
              o("WALogger").DEV_XMPP(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose(
                    [
                      "Error in onBeforeCastStanza, we consumed and continue with normal stanza sending to the server:\n",
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
            var s = this.socketOrThrow("castStanza");
            try {
              return (
                o("WALogger").DEV_XMPP(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose(
                      ["--- Sending ---\n", ""],
                      ["--- Sending ---\\n", ""],
                    )),
                  t,
                ),
                s
                  .sendFrame(o("WAWap").encodeStanza(t))
                  .then(function () {
                    e.config.handlers.onCastStanza == null ||
                      e.config.handlers.onCastStanza(t, r);
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
                      return (U || (U = n("Promise"))).reject(e);
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
            return (U || (U = n("Promise"))).resolve();
          }),
          (a.socketOrThrow = function (t) {
            var e = this.socket;
            if (e) return e;
            throw r("err")("Comms." + t + " called while no socket");
          }),
          (a.startHandlingRequests = function () {
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
          (a.parseAndHandleStanza = function (t, n) {
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
                      ["--- Receiving ---\n", ""],
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
                    r && r.close();
                  } else n === "NO_ACK" || e.castStanza(n);
                  return "NO_ACK";
                }
              });
            (this.$5.add(r),
              r.finally(function () {
                return void e.$5.delete(r);
              }));
          }),
          (a.handleAck = function (t) {
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
          (a.removeHandler = function (t, r) {
            if (
              (r === void 0 && (r = "disconnect"),
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
              var a = this.ackHandlers.indexOf(t);
              if (a === -1) return;
              o("WAArrayUtils").removeIndexWithoutPreservingOrder(
                this.ackHandlers,
                a,
              );
            }
            r === "disconnect"
              ? t.resolve(
                  (U || (U = n("Promise"))).reject(
                    new (o("WAErrors").Disconnected)(),
                  ),
                )
              : r === "abort"
                ? t.resolve(
                    (U || (U = n("Promise"))).reject(
                      new (o("WAErrors").Aborted)(),
                    ),
                  )
                : t.resolve(
                    (U || (U = n("Promise"))).reject(
                      new (o("WAErrors").MaxRetries)(),
                    ),
                  );
          }),
          (a.maybeScheduleHealthCheck = function () {
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
          (a.isSocketConnected = function () {
            return this.socket != null;
          }),
          (a.getMsSinceLastInboundRx = function () {
            if (!this.isSocketConnected() || this.$7 === 0) return -1;
            var e = this.$6 > 0 ? this.$6 : this.$7;
            return self.performance.now() - e;
          }),
          (a.sendIq = function (t, a, i, l, s) {
            var e = this;
            return (
              i === void 0 && (i = 0),
              s === void 0 && (s = "iq"),
              new (U || (U = n("Promise")))(function (u) {
                var c = t.attrs.id;
                if (!c || typeof c != "string")
                  throw r("err")(
                    "[comms] sendIq given iq without id: " + String(t),
                  );
                var d = e.socketId;
                if (a && !d) {
                  u(
                    (U || (U = n("Promise"))).reject(
                      new (o("WAErrors").Offline)(),
                    ),
                  );
                  return;
                }
                var m = function (o) {
                    o === void 0 && (o = "disconnect");
                    var t =
                      s === "iq"
                        ? e.pendingIqs.get(c)
                        : e.pendingSmaxStanzas.get(c);
                    if (!t) {
                      u(
                        (U || (U = n("Promise"))).reject(
                          r("err")(
                            "[comms] _sendIq unexisting stanza to be cancelled: " +
                              c,
                          ),
                        ),
                      );
                      return;
                    }
                    e.removeHandler(t, o);
                  },
                  p = null;
                if (i > 0) {
                  var _ = setTimeout(m, i * 1e3);
                  p = function () {
                    clearTimeout(_);
                  };
                }
                if (l != null)
                  if (l.aborted) {
                    u(
                      (U || (U = n("Promise"))).reject(
                        new (o("WAErrors").Disconnected)(),
                      ),
                    );
                    return;
                  } else {
                    var f = function () {
                      m("abort");
                    };
                    (l.addEventListener("abort", f),
                      (p = function () {
                        l.removeEventListener("abort", f);
                      }));
                  }
                var g = {
                  resolve: u,
                  stanza: t,
                  attachedToSocketId: a ? d : z,
                  orderedId: e.$2++,
                  attempt: 0,
                  cleanup: p,
                };
                if (s === "iq") {
                  var h = babelHelpers.extends({ type: s }, g);
                  (e.pendingIqs.set(c, h),
                    e.config.handlers.onSendIq == null ||
                      e.config.handlers.onSendIq(t),
                    e.maybeSendPendingStanza(h));
                } else {
                  var y = babelHelpers.extends({ type: s }, g);
                  (e.pendingSmaxStanzas.set(c, y), e.maybeSendPendingStanza(y));
                }
              })
            );
          }),
          (a.sendPing = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              var a = yield n.promise,
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
                    p = o("WABaseGlobals").newClockSkewCalculation()
                      ? Math.round((r + d) / 1e3 - m)
                      : Math.round(Date.now() / 1e3 - m);
                  return (
                    (s = (u = this.config.handlers).onClockSkewUpdate) ==
                      null || s.call(u, p),
                    !0
                  );
                }
              }
              return !1;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    function K() {
      return V;
    }
    function Q(e, t, n, r) {
      if ((r === void 0 && (r = !0), V != null)) return V;
      var o = H(e, t, n);
      return ((V = o), r && setTimeout(ee, 0), o);
    }
    function X() {
      var e = ye("stopComms");
      (e.stopComms(), (V = null));
    }
    function Y() {
      var e = ye("closeSocketAndPreventRetry");
      e.closeSocketAndPreventRetry();
    }
    function J() {
      var e = ye("closeSocketAndPause");
      e.closeSocketAndPause();
    }
    function Z() {
      var e = ye("closeSocketAndResume");
      e.closeSocketAndResume();
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
      return !!((e = V) != null && e.isSocketConnected());
    }
    function ae() {
      var e, t;
      return (e = (t = V) == null ? void 0 : t.getMsSinceLastInboundRx()) !=
        null
        ? e
        : -1;
    }
    function ie() {
      var e = ye("socketLoopIteration");
      return e.socketLoopIteration();
    }
    function le() {
      var e = ye("closeSocket");
      e.closeSocket();
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
      return a.sendIq(e, t, n, r, o);
    }
    function pe(e, t) {
      var n,
        r,
        o,
        a = (n = t == null ? void 0 : t.withoutRetry) != null ? n : !1,
        i = (r = t == null ? void 0 : t.timeoutSeconds) != null ? r : 0,
        l = (o = t == null ? void 0 : t.signal) != null ? o : null;
      return me(e, a, i, l, "smax");
    }
    function _e() {
      var e = ye("sendPing");
      return e.sendPing();
    }
    function fe() {
      return ye("startHandlingRequests").startHandlingRequests();
    }
    function ge() {
      V && V.cancelDeadSocketTimer();
    }
    function he() {
      return V != null;
    }
    function ye(e) {
      if (V) return V;
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
      V = null;
    }
    ((l.setCommsFactory = G),
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
