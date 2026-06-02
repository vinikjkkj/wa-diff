__d(
  "WAComms",
  [
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
      W = null,
      q = null,
      U = 1,
      V = 0,
      H = (function () {
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
            (this.socketId = V),
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
              code: ne,
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
        var n = t.prototype;
        return (
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
              this.callStanza(t.stanza));
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
                  (r = (a = this.config.handlers).onBeforeCastStanzaForE2E) ==
                  null
                    ? void 0
                    : r.call(a, t, n);
              if (i != null)
                return (
                  o("WALogger").DEV_XMPP(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          `Dropping stanza since onBeforeCastStanza matched:
`,
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
                        [
                          `--- Receive (via SMAX+E2E) ---
`,
                          "",
                        ],
                        ["--- Receive (via SMAX+E2E) ---\\n", ""],
                      )),
                    i,
                  ),
                  o("WALogger").ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Dropping stanza since onBeforeCastStanza matched. We return mock response directly.",
                      ])),
                  ),
                  Array.isArray(i)
                    ? Promise.all(
                        i.map(function (t) {
                          return Promise.resolve(
                            e.handleStanza(t, e.socketId, V),
                          );
                        }),
                      )
                    : (this.handleStanza(i, this.socketId, V),
                      Promise.resolve())
                );
            } catch (e) {
              o("WALogger").DEV_XMPP(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose(
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
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose(
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
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
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
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "Comms.startHandlingRequests",
                  ])),
              ),
              this.$2.resolve(),
              this.$2.promise.then(function () {})
            );
          }),
          (n.parseAndHandleStanza = function (t, n) {
            var e = this;
            t === this.socketId &&
              (this.deadSocketTimer.cancel(), q && (q.resolve(), (q = null)));
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
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
          (n.sendPing = async function () {
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
            var i = await r.promise,
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
          }),
          t
        );
      })();
    function G() {
      return W;
    }
    function z(e, t, n, r) {
      (r === void 0 && (r = !0),
        !W && ((W = new H(e, t, n)), r && setTimeout(Y, 0)));
    }
    function j() {
      var e = _e("stopComms");
      (e.socketLoop.endWithValue(), e.socket && re(), (W = null));
    }
    function K() {
      var e = _e("closeSocketAndPreventRetry");
      (e.socketLoop.endWithValue(),
        e.socket &&
          (o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] closeSocketAndPreventRetry called",
              ])),
          ),
          re()));
    }
    function Q() {
      var e = _e("closeSocketAndPause");
      (e.socketLoop.pauseOnNextIteration(),
        e.socket &&
          (o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] closeSocketAndPause called",
              ])),
          ),
          re()));
    }
    function X() {
      var e = _e("closeSocketAndResume");
      (e.socketLoop.unpause(),
        e.socket &&
          (o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] closeSocketAndResume called",
              ])),
          ),
          re()));
    }
    function Y() {
      _e("openSocketLoop").socketLoop.start();
    }
    function J() {
      (o("WALogger").LOG(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
            "[comms] maybeResetSocketLoop",
          ])),
      ),
        te() || _e("maybeResetSocketLoop").socketLoop.reset());
    }
    function Z() {
      _e("forceResetSocketLoop").socketLoop.reset();
    }
    function ee() {
      var e,
        t = _e("socketAbortController");
      ((e = t.socketAbortController) == null || e.abort(),
        t.softCloseSocket == null || t.softCloseSocket());
    }
    function te() {
      var e;
      return !!((e = W) != null && e.socket);
    }
    function ne() {
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
                      (re(), (t.socket = null)),
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
                      ((t.socketId = V),
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
    function re() {
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
    function oe() {
      _e("onStreamErrorReceived").socketLoop.cancelReset();
    }
    function ae() {
      return (
        _e("waitForConnection").sendPing(),
        q || (q = new (o("WAResolvable").Resolvable)()),
        q.promise
      );
    }
    function ie(e, t) {
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
    function le(e) {
      var t = _e("castStanza");
      return t.socketId === e;
    }
    function se(e, t, n, a, i) {
      return (
        n === void 0 && (n = 0),
        i === void 0 && (i = "iq"),
        new Promise(function (l) {
          var s = _e("sendIq"),
            u = e.attrs.id;
          if (!u || typeof u != "string")
            throw r("err")("[comms] sendIq given iq without id: " + String(e));
          var c = s.socketId;
          if (t && !c) {
            l(Promise.reject(new (o("WAErrors").Offline)()));
            return;
          }
          var d = function (t) {
              t === void 0 && (t = "disconnect");
              var e =
                i === "iq" ? s.pendingIqs.get(u) : s.pendingSmaxStanzas.get(u);
              if (!e) {
                l(
                  Promise.reject(
                    r("err")(
                      "[comms] _sendIq unexisting stanza to be cancelled: " + u,
                    ),
                  ),
                );
                return;
              }
              s.removeHandler(e, t);
            },
            m = null;
          if (n > 0) {
            var p = setTimeout(d, n * 1e3);
            m = function () {
              clearTimeout(p);
            };
          }
          if (a != null)
            if (a.aborted) {
              l(Promise.reject(new (o("WAErrors").Disconnected)()));
              return;
            } else {
              var _ = function () {
                d("abort");
              };
              (a.addEventListener("abort", _),
                (m = function () {
                  a.removeEventListener("abort", _);
                }));
            }
          var f = {
            resolve: l,
            stanza: e,
            attachedToSocketId: t ? c : V,
            orderedId: U++,
            attempt: 0,
            cleanup: m,
          };
          if (i === "iq") {
            var g = babelHelpers.extends({ type: i }, f);
            (s.pendingIqs.set(u, g),
              s.config.handlers.onSendIq == null ||
                s.config.handlers.onSendIq(e),
              s.maybeSendPendingStanza(g));
          } else {
            var h = babelHelpers.extends({ type: i }, f);
            (s.pendingSmaxStanzas.set(u, h), s.maybeSendPendingStanza(h));
          }
        })
      );
    }
    function ue(e, t) {
      var n,
        r,
        o,
        a = (n = t == null ? void 0 : t.withoutRetry) != null ? n : !1,
        i = (r = t == null ? void 0 : t.timeoutSeconds) != null ? r : 0,
        l = (o = t == null ? void 0 : t.signal) != null ? o : null;
      return se(e, a, i, l, "smax");
    }
    function ce() {
      var e = _e("sendPing");
      return e.sendPing();
    }
    function de() {
      return _e("startHandlingRequests").startHandlingRequests();
    }
    function me() {
      W && W.deadSocketTimer.cancel();
    }
    function pe() {
      return W != null;
    }
    function _e(e) {
      if (W) return W;
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
      return U++;
    }
    function he() {
      ((W = null), (q = new (o("WAResolvable").Resolvable)()), (U = 1));
    }
    ((l.DEFAULT_SOCKET_ID = V),
      (l.getComms = G),
      (l.startComms = z),
      (l.stopComms = j),
      (l.closeSocketAndPreventRetry = K),
      (l.closeSocketAndPause = Q),
      (l.closeSocketAndResume = X),
      (l.openSocketLoop = Y),
      (l.maybeResetSocketLoop = J),
      (l.forceResetSocketLoop = Z),
      (l.forceAbortSocketConnection = ee),
      (l.isSocketConnected = te),
      (l.socketLoopIteration = ne),
      (l.closeSocket = re),
      (l.onStreamErrorReceived = oe),
      (l.waitForConnection = ae),
      (l.castSmaxStanza = ie),
      (l.isActiveSocket = le),
      (l._sendIq = se),
      (l.sendSmaxStanza = ue),
      (l.sendPing = ce),
      (l.startHandlingRequests = de),
      (l.cancelDeadSocketTimer = me),
      (l.isCommsInitialized = pe),
      (l.singletonOrThrowIfUninitialized = _e),
      (l.getAndIncrementNextOrderedId = ge),
      (l.resetStateForTests = he));
  },
  98,
);
