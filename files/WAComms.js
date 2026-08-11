__d(
  "WAComms",
  [
    "Promise",
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
        return new K(t, n, r);
      };
    function G(e) {
      H = e;
    }
    function z(e) {
      return e;
    }
    var j = 0,
      K = (function () {
        function t(t, r, a, i) {
          var l = this,
            E,
            k,
            I;
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
            (this.socketId = j),
            (this.socket = null),
            (this.softCloseSocket = null),
            (this.setOnBeforeCastStanzaForE2E = function (e) {
              l.config.handlers.onBeforeCastStanzaForE2E = e;
            }),
            (this.getAndIncrementNextOrderedId = function () {
              return l.$2++;
            }),
            (this.waitForNetworkHealth = function () {
              return (
                l.$1 || (l.$1 = new (o("WAResolvable").Resolvable)()),
                l.$1.promise
              );
            }),
            (this.handleStanza = function (t, r, a) {
              var i = o("WASmaxParseUtils").attrString(t, "id");
              if (i.success && t.tag !== "receipt") {
                var u = i.value,
                  c = l.pendingSmaxStanzas.get(u);
                if (c)
                  return (
                    l.pendingSmaxStanzas.delete(u),
                    c.resolve(t),
                    l.maybeScheduleHealthCheck(),
                    (U || (U = n("Promise"))).resolve("NO_ACK")
                  );
              }
              var d = be(t);
              if (d != null) {
                var m = l.pendingIqs.get(d);
                m
                  ? (l.pendingIqs.delete(d),
                    m.resolve(t),
                    l.maybeScheduleHealthCheck())
                  : (o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "handleIq no handler for iq with id ",
                          "",
                        ])),
                      d,
                    ),
                    o("WALogger").ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "handleIq no handler for iq",
                        ])),
                    ));
              } else if (t.tag === "ack") l.handleAck(t);
              else
                return t.tag === "failure" &&
                  l.config.shouldBlockReceivingUntilSuccess
                  ? l.$3(t, r, a)
                  : l.$4.promise.then(function () {
                      return l.$3(t, r, a);
                    });
              return (U || (U = n("Promise"))).resolve("NO_ACK");
            }),
            (this.deadSocketTimer = new (o("WAShiftTimer").ShiftTimer)(
              function (e) {
                e === l.socketId &&
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] Socket ",
                        " expired",
                      ])),
                    e,
                  ),
                  l.softCloseSocket && l.softCloseSocket());
              },
            )),
            (this.healthCheckTimer = new (o("WAShiftTimer").ShiftTimer)(
              function () {
                l.socketId && l.sendPing();
              },
            )),
            (this.stopComms = function () {
              var e;
              (l.socketLoop.endWithValue(),
                (e = l.socket) == null || e.close());
            }),
            (this.closeSocketAndPreventRetry = function () {
              (l.socketLoop.endWithValue(),
                l.socket &&
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndPreventRetry called",
                      ])),
                  ),
                  l.socket.close()));
            }),
            (this.closeSocketAndPause = function () {
              (l.socketLoop.pauseOnNextIteration(),
                l.socket &&
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndPause called",
                      ])),
                  ),
                  l.socket.close()));
            }),
            (this.closeSocketAndResume = function () {
              (l.socketLoop.unpause(),
                l.socket &&
                  (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndResume called",
                      ])),
                  ),
                  l.socket.close()));
            }),
            (this.openSocketLoop = function () {
              l.socketLoop.start();
            }),
            (this.maybeResetSocketLoop = function () {
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] maybeResetSocketLoop",
                  ])),
              ),
                l.isSocketConnected() || l.socketLoop.reset());
            }),
            (this.forceResetSocketLoop = function () {
              l.socketLoop.reset();
            }),
            (this.forceAbortSocketConnection = function () {
              var e;
              ((e = l.socketAbortController) == null || e.abort(),
                l.softCloseSocket == null || l.softCloseSocket());
            }),
            (this.closeSocket = function () {
              l.socket &&
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] Socket ",
                      " closed",
                    ])),
                  l.socketId,
                ),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] closeSocket called",
                    ])),
                ),
                l.socket.close());
            }),
            (this.closeSocketInDebugMode = function () {
              var e = l.socket;
              e &&
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "closeSocket called",
                    ])),
                ),
                e.setOnClose(function () {
                  var e = l.socketId;
                  (o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] Socket ",
                        " closed",
                      ])),
                    e,
                  ),
                    l.activePing &&
                      e === l.activePing.socketId &&
                      (l.activePing.handler.resolve(), (l.activePing = null)),
                    l
                      .filterPending(function (t) {
                        return t.attachedToSocketId === e;
                      })
                      .forEach(function (e) {
                        return void l.removeHandler(e);
                      }),
                    e === l.socketId &&
                      ((l.socketId = j), (l.socket = null), l.$8(!1, j)));
                }),
                e.close());
            }),
            (this.onStreamErrorReceived = function () {
              l.socketLoop.cancelReset();
            }),
            (this.cancelDeadSocketTimer = function () {
              l.deadSocketTimer.cancel();
            }),
            (this.socketLoopIteration = function () {
              var e,
                t = l.nextSocketId++;
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] Socket ",
                    " opening",
                  ])),
                t,
              );
              var n = function () {
                l.onConnectionChange("in_handshake");
              };
              return (
                l.config.handlers.onSocketLoopIteration == null ||
                  l.config.handlers.onSocketLoopIteration(
                    l.socketAbortController,
                  ),
                typeof AbortController == "function" &&
                  (l.socketAbortController = new AbortController()),
                l.config
                  .openChatSocket(
                    n,
                    (e = l.socketAbortController) == null ? void 0 : e.signal,
                  )
                  .then(function (e) {
                    if (e.success) {
                      var n = e.value;
                      l.config.handlers.onSocketOpen == null ||
                        l.config.handlers.onSocketOpen();
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
                        (l.socketId = t),
                        (l.socket = n),
                        (l.$7 = self.performance.now()),
                        (l.$6 = 0),
                        l.$8(!0, t),
                        (l.softCloseSocket = function () {
                          ((l.softCloseSocket = null),
                            l.socket &&
                              l.config.shouldCloseStaleSocket &&
                              (l.socket.close(), (l.socket = null), l.$8(!1)),
                            r.resolve());
                        }),
                        l.socketLoop.resetTimeoutAfter(1e4),
                        l.deadSocketTimer.cancel(),
                        l.maybeScheduleHealthCheck(),
                        n.setOnFrame(function (e) {
                          return l.parseAndHandleStanza(t, e);
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
                            l.activePing &&
                              t === l.activePing.socketId &&
                              (l.activePing.handler.resolve(),
                              (l.activePing = null)),
                            l
                              .filterPending(function (e) {
                                return e.attachedToSocketId === t;
                              })
                              .forEach(function (e) {
                                return void l.removeHandler(e);
                              }),
                            t === l.socketId &&
                              ((l.socketId = j),
                              (l.socket = null),
                              l.$8(!1, t),
                              l.onConnectionChange("disconnected"),
                              l.config.handlers.onDisconnect == null ||
                                l.config.handlers.onDisconnect(),
                              r.resolve()));
                        }),
                        l.onConnectionChange("connected"),
                        l.config.handlers.onConnect == null ||
                          l.config.handlers.onConnect(),
                        l
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
                                l.maybeSendPendingStanza(e);
                                break;
                              case "ack":
                                l.callStanza(e.stanza);
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
            (this.$8 = i != null ? i : function () {}),
            (this.$3 = t),
            (this.onConnectionChange = o(
              "WANotifyConnectionChangeFactory",
            ).notifyConnectionChangeFactory(
              (E = r.handlers.onConnectionChange) != null ? E : function () {},
              (k = r.handlers.onOptimisticConnectionChange) != null
                ? k
                : function () {},
            )),
            (this.gzipInflate = a),
            (this.config = r),
            (this.socketLoop = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
              name: "MainSocketLoop",
              code: le,
              timer:
                (I = r.socketReconnectBackoffAlgo) != null
                  ? I
                  : {
                      jitter: 0.1,
                      max: r.maxSocketLoopWaitTime,
                      algo: { type: "fibonacci", first: 1e4, second: 1e4 },
                      relativeDelay: !0,
                    },
              resetDelay: 3e4,
              isPauseEnabled: r.isPauseEnabled === !0,
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
                            e.handleStanza(t, e.socketId, j),
                          );
                        }),
                      )
                    : (this.handleStanza(l, this.socketId, j),
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
                return a && a.socketId === t && a.stanzaId === be(r)
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
                  attachedToSocketId: a ? d : j,
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
                    p = Math.round((r + d) / 1e3 - m);
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
    function Q() {
      return V;
    }
    function X(e, t, n, r) {
      if ((r === void 0 && (r = !0), V != null)) return V;
      var o = H(e, t, n);
      return ((V = o), r && setTimeout(te, 0), o);
    }
    function Y() {
      var e = Ce("stopComms");
      (e.stopComms(), (V = null));
    }
    function J() {
      var e = Ce("closeSocketAndPreventRetry");
      e.closeSocketAndPreventRetry();
    }
    function Z() {
      var e = Ce("closeSocketAndPause");
      e.closeSocketAndPause();
    }
    function ee() {
      var e = Ce("closeSocketAndResume");
      e.closeSocketAndResume();
    }
    function te() {
      var e = Ce("openSocketLoop");
      e.openSocketLoop();
    }
    function ne() {
      var e = Ce("maybeResetSocketLoop");
      e.maybeResetSocketLoop();
    }
    function re() {
      var e = Ce("forceResetSocketLoop");
      e.forceResetSocketLoop();
    }
    function oe() {
      var e = Ce("socketAbortController");
      e.forceAbortSocketConnection();
    }
    function ae() {
      var e;
      return !!((e = V) != null && e.isSocketConnected());
    }
    function ie() {
      var e, t;
      return (e = (t = V) == null ? void 0 : t.getMsSinceLastInboundRx()) !=
        null
        ? e
        : -1;
    }
    function le() {
      var e = Ce("socketLoopIteration");
      return e.socketLoopIteration();
    }
    function se() {
      var e = Ce("closeSocket");
      e.closeSocket();
    }
    function ue() {
      var e = Ce("onStreamErrorReceived");
      e.onStreamErrorReceived();
    }
    function ce() {
      var e = Ce("waitForConnection");
      return (e.sendPing(), e.waitForNetworkHealth());
    }
    function de(e, t) {
      var n = Ce("castStanza");
      n.isSocketConnected()
        ? n.castStanza(e, t)
        : o("WALogger").LOG(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
                "Comms has no open socket",
              ])),
          );
    }
    function me(e) {
      var t = Ce("castStanza");
      return t.socketId === e;
    }
    function pe(e, t, n, r, o) {
      (n === void 0 && (n = 0), o === void 0 && (o = "iq"));
      var a = Ce("sendIq");
      return a.sendIq(e, t, n, r, o);
    }
    function _e(e, t) {
      var n,
        r,
        o,
        a = (n = t == null ? void 0 : t.withoutRetry) != null ? n : !1,
        i = (r = t == null ? void 0 : t.timeoutSeconds) != null ? r : 0,
        l = (o = t == null ? void 0 : t.signal) != null ? o : null;
      return pe(e, a, i, l, "smax");
    }
    function fe() {
      var e = Ce("sendPing");
      return e.sendPing();
    }
    function ge() {
      return Ce("startHandlingRequests").startHandlingRequests();
    }
    function he() {
      V && V.cancelDeadSocketTimer();
    }
    function ye() {
      return V != null;
    }
    function Ce(e) {
      if (V) return V;
      throw r("err")("[comms] " + e + " called before startComms");
    }
    function be(e) {
      if (e.tag === "iq") {
        var t = e.attrs.type;
        if (t === "result" || t === "error")
          return o("WAWap").decodeAsString(e.attrs.id) || null;
      }
      return null;
    }
    function ve() {
      var e = Ce("getAndIncrementNextOrderedId");
      return e.getAndIncrementNextOrderedId();
    }
    function Se() {
      V = null;
    }
    ((l.setCommsFactory = G),
      (l.toSocketId = z),
      (l.DEFAULT_SOCKET_ID = j),
      (l.Comms = K),
      (l.getComms = Q),
      (l.startComms = X),
      (l.stopComms = Y),
      (l.closeSocketAndPreventRetry = J),
      (l.closeSocketAndPause = Z),
      (l.closeSocketAndResume = ee),
      (l.openSocketLoop = te),
      (l.maybeResetSocketLoop = ne),
      (l.forceResetSocketLoop = re),
      (l.forceAbortSocketConnection = oe),
      (l.isSocketConnected = ae),
      (l.getMsSinceLastInboundRx = ie),
      (l.socketLoopIteration = le),
      (l.closeSocket = se),
      (l.onStreamErrorReceived = ue),
      (l.waitForConnection = ce),
      (l.castSmaxStanza = de),
      (l.isActiveSocket = me),
      (l._sendIq = pe),
      (l.sendSmaxStanza = _e),
      (l.sendPing = fe),
      (l.startHandlingRequests = ge),
      (l.cancelDeadSocketTimer = he),
      (l.isCommsInitialized = ye),
      (l.singletonOrThrowIfUninitialized = Ce),
      (l.getAndIncrementNextOrderedId = ve),
      (l.resetStateForTests = Se));
  },
  98,
);
