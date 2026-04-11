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
      q = null,
      U = null,
      V = 1,
      H = 0,
      G = (function () {
        function t(t, n, r) {
          var a = this,
            i,
            l,
            c;
          ((this.nextSocketId = 1),
            (this.pendingIqs = new Map()),
            (this.ackHandlers = []),
            (this.pendingSmaxStanzas = new Map()),
            (this.$2 = new (o("WAResolvable").Resolvable)()),
            (this.socketAbortController = null),
            (this.activePing = null),
            (this.$3 = new Set()),
            (this.socketId = H),
            (this.socket = null),
            (this.softCloseSocket = null),
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
              var c = fe(t);
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
                  ? a.$1(t, n, r)
                  : a.$2.promise.then(function () {
                      return a.$1(t, n, r);
                    });
              return "NO_ACK";
            }),
            (this.healthCheckTimer = new (o("WAShiftTimer").ShiftTimer)(
              function () {
                a.socketId && a.sendPing();
              },
            )),
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
            (this.$1 = t),
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
              code: re,
              timer:
                (c = n.socketReconnectBackoffAlgo) != null
                  ? c
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose(
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
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose(
                        ["--- Receive (via SMAX+E2E) ---\n", ""],
                        ["--- Receive (via SMAX+E2E) ---\\n", ""],
                      )),
                    l,
                  ),
                  o("WALogger").ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Dropping stanza since onBeforeCastStanza matched. We return mock response directly.",
                      ])),
                  ),
                  Array.isArray(l)
                    ? (W || (W = n("Promise"))).all(
                        l.map(function (t) {
                          return (W || (W = n("Promise"))).resolve(
                            e.handleStanza(t, e.socketId, H),
                          );
                        }),
                      )
                    : (this.handleStanza(l, this.socketId, H),
                      (W || (W = n("Promise"))).resolve())
                );
            } catch (e) {
              o("WALogger").DEV_XMPP(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose(
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
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose(
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
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "castStanza async error ",
                            "",
                          ])),
                        e,
                      ),
                      e instanceof o("WAErrors").BufferTooLargeError)
                    )
                      return (W || (W = n("Promise"))).reject(e);
                  })
              );
            } catch (e) {
              o("WALogger").ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "castStanza error ",
                    "",
                  ])),
                e,
              );
            }
            return (W || (W = n("Promise"))).resolve();
          }),
          (a.socketOrThrow = function (t) {
            var e = this.socket;
            if (e) return e;
            throw r("err")("Comms." + t + " called while no socket");
          }),
          (a.startHandlingRequests = function () {
            return (
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "Comms.startHandlingRequests",
                  ])),
              ),
              this.$2.resolve(),
              this.$2.promise.then(function () {})
            );
          }),
          (a.parseAndHandleStanza = function (t, n) {
            var e = this;
            t === this.socketId &&
              (this.deadSocketTimer.cancel(), U && (U.resolve(), (U = null)));
            var r = o("WAWap")
              .decodeStanza(n, this.gzipInflate)
              .catch(function (e) {
                throw (
                  o("WALogger").ERROR(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "Failure parsing stanza!",
                      ])),
                  ),
                  e
                );
              })
              .then(function (r) {
                (o("WALogger").DEV_XMPP(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose(
                      ["--- Receiving ---\n", ""],
                      ["--- Receiving ---\\n", ""],
                    )),
                  r,
                ),
                  e.config.handlers.onHandleStanza == null ||
                    e.config.handlers.onHandleStanza(r, t, n.byteLength));
                var a = e.activePing;
                return a && a.socketId === t && a.stanzaId === fe(r)
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
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "[comms] job response is CLOSE_SOCKET",
                        ])),
                    );
                    var r = e.socket;
                    r && r.close();
                  } else n === "NO_ACK" || e.castStanza(n);
                  return "NO_ACK";
                }
              });
            (this.$3.add(r),
              r.finally(function () {
                return void e.$3.delete(r);
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
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
                  (W || (W = n("Promise"))).reject(
                    new (o("WAErrors").Disconnected)(),
                  ),
                )
              : r === "abort"
                ? t.resolve(
                    (W || (W = n("Promise"))).reject(
                      new (o("WAErrors").Aborted)(),
                    ),
                  )
                : t.resolve(
                    (W || (W = n("Promise"))).reject(
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
          (a.sendPing = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = _e("sendPing");
              if (!e.socketId)
                return (
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] sendPing when socket dead",
                      ])),
                  ),
                  !1
                );
              if (e.activePing && e.activePing.socketId === e.socketId)
                return (
                  o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] sendPing ping still pending",
                      ])),
                  ),
                  !1
                );
              e.activePing && e.activePing.handler.resolve();
              var t = o("WASmaxOutPingsClientRequest").makeClientRequest(),
                n = t.attrs.id;
              if (typeof n != "string")
                return (
                  o("WALogger").ERROR(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] No stanzaId in ping request stanza",
                      ])),
                  ),
                  !1
                );
              var r = new (o("WAResolvable").Resolvable)();
              e.activePing = { socketId: e.socketId, stanzaId: n, handler: r };
              var a = Date.now();
              e.callStanza(t);
              var i = yield r.promise,
                l = Date.now();
              if (i) {
                var s = o(
                  "WASmaxInPingsClientResponseServerResponse",
                ).parseClientResponseServerResponse(i, t);
                if (s.success) {
                  var u = l - a,
                    c = Math.round(u / 2),
                    d = o("WATimeUtils").castToUnixTime(s.value.t),
                    m = o("WABaseGlobals").newClockSkewCalculation()
                      ? Math.round((a + c) / 1e3 - d)
                      : Math.round(Date.now() / 1e3 - d);
                  return (
                    e.config.handlers.onClockSkewUpdate == null ||
                      e.config.handlers.onClockSkewUpdate(m),
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
    function z() {
      return q;
    }
    function j(e, t, n, r) {
      (r === void 0 && (r = !0),
        !q && ((q = new G(e, t, n)), r && setTimeout(J, 0)));
    }
    function K() {
      var e = _e("stopComms");
      (e.socketLoop.endWithValue(), e.socket && oe(), (q = null));
    }
    function Q() {
      var e = _e("closeSocketAndPreventRetry");
      (e.socketLoop.endWithValue(),
        e.socket &&
          (o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] closeSocketAndPreventRetry called",
              ])),
          ),
          oe()));
    }
    function X() {
      var e = _e("closeSocketAndPause");
      (e.socketLoop.pauseOnNextIteration(),
        e.socket &&
          (o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] closeSocketAndPause called",
              ])),
          ),
          oe()));
    }
    function Y() {
      var e = _e("closeSocketAndResume");
      (e.socketLoop.unpause(),
        e.socket &&
          (o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] closeSocketAndResume called",
              ])),
          ),
          oe()));
    }
    function J() {
      _e("openSocketLoop").socketLoop.start();
    }
    function Z() {
      (o("WALogger").LOG(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
            "[comms] maybeResetSocketLoop",
          ])),
      ),
        ne() || _e("maybeResetSocketLoop").socketLoop.reset());
    }
    function ee() {
      _e("forceResetSocketLoop").socketLoop.reset();
    }
    function te() {
      var e,
        t = _e("socketAbortController");
      ((e = t.socketAbortController) == null || e.abort(),
        t.softCloseSocket == null || t.softCloseSocket());
    }
    function ne() {
      var e;
      return !!((e = q) != null && e.socket);
    }
    function re() {
      var e,
        t = _e("socketLoopIteration"),
        n = t.nextSocketId++;
      o("WALogger").LOG(
        x ||
          (x = babelHelpers.taggedTemplateLiteralLoose([
            "[comms] Socket ",
            " opening",
          ])),
        n,
      );
      var r = function () {
        t.onConnectionChange("in_handshake");
      };
      return (
        t.config.handlers.onSocketLoopIteration == null ||
          t.config.handlers.onSocketLoopIteration(t.socketAbortController),
        typeof AbortController == "function" &&
          (t.socketAbortController = new AbortController()),
        t.config
          .openChatSocket(
            r,
            (e = t.socketAbortController) == null ? void 0 : e.signal,
          )
          .then(function (e) {
            if (e.success) {
              var r = e.value;
              t.config.handlers.onSocketOpen == null ||
                t.config.handlers.onSocketOpen();
              var a = new (o("WAResolvable").Resolvable)();
              return (
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] Socket ",
                      " opened",
                    ])),
                  n,
                ),
                (t.socketId = n),
                (t.socket = r),
                (t.softCloseSocket = function () {
                  ((t.softCloseSocket = null),
                    t.socket &&
                      t.config.shouldCloseStaleSocket &&
                      (oe(), (t.socket = null)),
                    a.resolve());
                }),
                t.socketLoop.resetTimeoutAfter(1e4),
                t.deadSocketTimer.cancel(),
                t.maybeScheduleHealthCheck(),
                r.setOnFrame(function (e) {
                  return t.parseAndHandleStanza(n, e);
                }),
                r.setOnClose(function () {
                  (o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] Socket ",
                        " closed",
                      ])),
                    n,
                  ),
                    t.activePing &&
                      n === t.activePing.socketId &&
                      (t.activePing.handler.resolve(), (t.activePing = null)),
                    t
                      .filterPending(function (e) {
                        return e.attachedToSocketId === n;
                      })
                      .forEach(function (e) {
                        return void t.removeHandler(e);
                      }),
                    n === t.socketId &&
                      ((t.socketId = H),
                      (t.socket = null),
                      t.onConnectionChange("disconnected"),
                      t.config.handlers.onDisconnect == null ||
                        t.config.handlers.onDisconnect(),
                      a.resolve()));
                }),
                t.onConnectionChange("connected"),
                t.config.handlers.onConnect == null ||
                  t.config.handlers.onConnect(),
                t
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
                        t.maybeSendPendingStanza(e);
                        break;
                      case "ack":
                        t.callStanza(e.stanza);
                        break;
                      default:
                        e.type;
                        break;
                    }
                  }),
                a.promise
              );
            } else {
              var i = e.error;
              switch (i) {
                case "max-hunters":
                  o("WALogger").WARN(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] socketLoopIteration socket closed while in noise handshake using treasureHunt strategy",
                      ])),
                  );
                  break;
                case "disconnected":
                  o("WALogger").WARN(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
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
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] socketLoopIteration socket closed while in noise handshake",
                    ])),
                )
              : o("WALogger").ERROR(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "[comms] socketLoopIteration failed ",
                      "",
                    ])),
                  e,
                );
          })
      );
    }
    function oe() {
      var e = _e("closeSocket");
      e.socket &&
        (o("WALogger").LOG(
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
              "[comms] Socket ",
              " closed",
            ])),
          e.socketId,
        ),
        o("WALogger").LOG(
          O ||
            (O = babelHelpers.taggedTemplateLiteralLoose([
              "[comms] closeSocket called",
            ])),
        ),
        e.socket.close());
    }
    function ae() {
      _e("onStreamErrorReceived").socketLoop.cancelReset();
    }
    function ie() {
      return (
        _e("waitForConnection").sendPing(),
        U || (U = new (o("WAResolvable").Resolvable)()),
        U.promise
      );
    }
    function le(e, t) {
      var n = _e("castStanza");
      n.socket
        ? n.castStanza(e, t)
        : o("WALogger").LOG(
            B ||
              (B = babelHelpers.taggedTemplateLiteralLoose([
                "Comms has no open socket",
              ])),
          );
    }
    function se(e) {
      var t = _e("castStanza");
      return t.socketId === e;
    }
    function ue(e, t, a, i, l) {
      return (
        a === void 0 && (a = 0),
        l === void 0 && (l = "iq"),
        new (W || (W = n("Promise")))(function (s) {
          var u = _e("sendIq"),
            c = e.attrs.id;
          if (!c || typeof c != "string")
            throw r("err")("[comms] sendIq given iq without id: " + String(e));
          var d = u.socketId;
          if (t && !d) {
            s((W || (W = n("Promise"))).reject(new (o("WAErrors").Offline)()));
            return;
          }
          var m = function (t) {
              t === void 0 && (t = "disconnect");
              var e =
                l === "iq" ? u.pendingIqs.get(c) : u.pendingSmaxStanzas.get(c);
              if (!e) {
                s(
                  (W || (W = n("Promise"))).reject(
                    r("err")(
                      "[comms] _sendIq unexisting stanza to be cancelled: " + c,
                    ),
                  ),
                );
                return;
              }
              u.removeHandler(e, t);
            },
            p = null;
          if (a > 0) {
            var _ = setTimeout(m, a * 1e3);
            p = function () {
              clearTimeout(_);
            };
          }
          if (i != null)
            if (i.aborted) {
              s(
                (W || (W = n("Promise"))).reject(
                  new (o("WAErrors").Disconnected)(),
                ),
              );
              return;
            } else {
              var f = function () {
                m("abort");
              };
              (i.addEventListener("abort", f),
                (p = function () {
                  i.removeEventListener("abort", f);
                }));
            }
          var g = {
            resolve: s,
            stanza: e,
            attachedToSocketId: t ? d : H,
            orderedId: V++,
            attempt: 0,
            cleanup: p,
          };
          if (l === "iq") {
            var h = babelHelpers.extends({ type: l }, g);
            (u.pendingIqs.set(c, h),
              u.config.handlers.onSendIq == null ||
                u.config.handlers.onSendIq(e),
              u.maybeSendPendingStanza(h));
          } else {
            var y = babelHelpers.extends({ type: l }, g);
            (u.pendingSmaxStanzas.set(c, y), u.maybeSendPendingStanza(y));
          }
        })
      );
    }
    function ce(e, t) {
      var n,
        r,
        o,
        a = (n = t == null ? void 0 : t.withoutRetry) != null ? n : !1,
        i = (r = t == null ? void 0 : t.timeoutSeconds) != null ? r : 0,
        l = (o = t == null ? void 0 : t.signal) != null ? o : null;
      return ue(e, a, i, l, "smax");
    }
    function de() {
      var e = _e("sendPing");
      return e.sendPing();
    }
    function me() {
      return _e("startHandlingRequests").startHandlingRequests();
    }
    function pe() {
      q && q.deadSocketTimer.cancel();
    }
    function _e(e) {
      if (q) return q;
      throw r("err")("[comms] " + e + " called before startComms");
    }
    function fe(e) {
      if (e.tag === "iq") {
        var t = e.attrs.type;
        if (t === "result" || t === "error")
          return o("WAWap").decodeAsString(e.attrs.id) || null;
      }
      return null;
    }
    function ge() {
      return V++;
    }
    function he() {
      ((q = null), (U = new (o("WAResolvable").Resolvable)()), (V = 1));
    }
    ((l.DEFAULT_SOCKET_ID = H),
      (l.getComms = z),
      (l.startComms = j),
      (l.stopComms = K),
      (l.closeSocketAndPreventRetry = Q),
      (l.closeSocketAndPause = X),
      (l.closeSocketAndResume = Y),
      (l.openSocketLoop = J),
      (l.maybeResetSocketLoop = Z),
      (l.forceResetSocketLoop = ee),
      (l.forceAbortSocketConnection = te),
      (l.isSocketConnected = ne),
      (l.socketLoopIteration = re),
      (l.closeSocket = oe),
      (l.onStreamErrorReceived = ae),
      (l.waitForConnection = ie),
      (l.castSmaxStanza = le),
      (l.isActiveSocket = se),
      (l._sendIq = ue),
      (l.sendSmaxStanza = ce),
      (l.sendPing = de),
      (l.startHandlingRequests = me),
      (l.cancelDeadSocketTimer = pe),
      (l.singletonOrThrowIfUninitialized = _e),
      (l.getAndIncrementNextOrderedId = ge),
      (l.resetStateForTests = he));
  },
  98,
);
