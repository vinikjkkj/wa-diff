__d(
  "WAWebVoipWebTransportWorkerHandler",
  [
    "SecurePostMessage",
    "WAWebVoipJsWorkerMessageHandlerHelpers",
    "WAWebVoipWasmHeapBuffer",
    "WAWebVoipWebTransportNativeSendRing",
    "WAWebVoipWebTransportSendRingBuffer",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 262144,
      s = 20,
      u = 512,
      c = 64;
    function d(e, t, n) {
      (t > 0 && "incomingMaxBufferedDatagrams" in e
        ? (e.incomingMaxBufferedDatagrams = t)
        : t > 0 &&
          "incomingHighWaterMark" in e &&
          (e.incomingHighWaterMark = t),
        n > 0 && "outgoingMaxBufferedDatagrams" in e
          ? (e.outgoingMaxBufferedDatagrams = n)
          : n > 0 &&
            "outgoingHighWaterMark" in e &&
            (e.outgoingHighWaterMark = n));
    }
    function m(e, t) {
      if (!(t <= 0 || !("outgoingMaxAge" in e)))
        try {
          e.outgoingMaxAge = t;
        } catch (e) {}
    }
    function p(e) {
      try {
        var t = e.maxDatagramSize;
        return typeof t == "number" && Number.isFinite(t) && t > 0 ? t : null;
      } catch (e) {
        return null;
      }
    }
    var _ = 20,
      f = 256,
      g = 16,
      h = 0,
      y = 256,
      C = 272,
      b = 2049,
      v = 2050,
      S = 2052,
      R = 2053,
      L = new Set([b, S]),
      E = new Set([v, R]),
      k = 3e4,
      I = 32,
      T = 16391,
      D = 4,
      x = 64,
      $ = new Map(),
      P = 0,
      N = null,
      M = 0,
      w = 0;
    function A() {
      var e = globalThis.performance;
      if (e == null) return Date.now();
      var t = e.timeOrigin;
      return typeof t == "number" && t > 0 ? t + e.now() : Date.now();
    }
    function F(e) {
      return (
        e.byteLength >= _ &&
        e[4] === 33 &&
        e[5] === 18 &&
        e[6] === 164 &&
        e[7] === 66
      );
    }
    function O(e) {
      return e[0] * 256 + e[1];
    }
    function B(e) {
      return (Math.floor(e / f) % 2) * f + (Math.floor(e / g) % 2) * g;
    }
    function W(e) {
      return E.has(e) ? !1 : L.has(e) || B(e) === h;
    }
    function q(e) {
      if (E.has(e)) return !0;
      var t = B(e);
      return t === y || t === C;
    }
    function U(e) {
      for (var t = "", n = 8; n < _; n++)
        t += e[n].toString(16).padStart(2, "0");
      return t;
    }
    function V(e, t) {
      for (var n of e) {
        var r = n[0],
          o = n[1];
        if (t - o < k) break;
        e.delete(r);
      }
      for (; e.size >= I; ) {
        var a = e.keys().next().value;
        if (a == null) return;
        e.delete(a);
      }
    }
    function H(e, t, n) {
      if (!(!F(t) || !W(O(t)))) {
        var r = e.pendingStunRequests,
          o = U(t);
        (r.delete(o), V(r, n), r.set(o, n));
      }
    }
    function G(e, t, n, r) {
      if (!(!F(n) || !q(O(n)))) {
        var a = U(n),
          i = t.pendingStunRequests.get(a);
        if (i != null) {
          t.pendingStunRequests.delete(a);
          var l = Math.round(r - i);
          if (!(!Number.isFinite(l) || l < 0))
            try {
              e.updateIceRtt(l, t.ip, t.port);
            } catch (e) {
              t.hasLoggedIceRttFailure ||
                ((t.hasLoggedIceRttFailure = !0),
                o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                  1,
                  "voip: [WebTransportThread] Failed to publish ICE RTT: " +
                    String(e),
                ));
            }
        }
      }
    }
    function z(e, t, n) {
      var r, o;
      if (!(!F(t) || O(t) !== S)) {
        var a = j(t);
        if (a != null) {
          var i = e.stats;
          (i.dlProbeFirstSendAfterOpenMs == null &&
            (i.dlProbeFirstSendAfterOpenMs = Math.round(n - e.openedAtMs)),
            (i.dlProbeRequests = ((r = i.dlProbeRequests) != null ? r : 0) + 1),
            (i.dlProbeMaxRequestedBytes = Math.max(
              (o = i.dlProbeMaxRequestedBytes) != null ? o : 0,
              a,
            )));
          var l = e.pendingDlProbes;
          if (l.size >= x) {
            var s = l.values().next().value;
            s != null && l.delete(s);
          }
          l.add(U(t));
        }
      }
    }
    function j(e) {
      for (var t = _; t + D <= e.byteLength; ) {
        var n = e[t] * 256 + e[t + 1],
          r = e[t + 2] * 256 + e[t + 3],
          o = t + D;
        if (n === T)
          return o + 2 <= e.byteLength ? e[o] * 256 + e[o + 1] : null;
        t = o + Math.ceil(r / 4) * 4;
      }
      return null;
    }
    function K(e, t, n) {
      var r, o;
      if (!(!F(t) || O(t) !== R || !e.pendingDlProbes.delete(U(t)))) {
        var a = e.stats;
        a.dlProbeResponses = ((r = a.dlProbeResponses) != null ? r : 0) + 1;
        var i = (o = e.firstDlProbeResponseAtMs) != null ? o : n;
        ((e.firstDlProbeResponseAtMs = i), (a.dlProbeResponseSpanMs = n - i));
      }
    }
    function Q() {
      var e = 0;
      for (var t of $.values()) {
        var n, r;
        e +=
          t.pendingDatagramBytes +
          ((n =
            (r = t.sendRingConsumer) == null
              ? void 0
              : r.getRawOccupancyBytes()) != null
            ? n
            : 0);
      }
      return e;
    }
    function X() {
      P = Math.max(P, Q());
    }
    function Y() {
      for (var e of $.values()) return e.voipWasm;
      return null;
    }
    function J() {
      N != null &&
        (self.clearInterval(N), (N = null), (P = 0), (M = 0), (w = 0));
    }
    function Z() {
      var e = Q(),
        t = Math.max(P, e);
      if (((P = e), !(t === 0 && e === 0 && M === 0 && w === 0))) {
        var n = Y();
        if (n != null)
          try {
            (n.updateSctpBufferedAmount(t, e), (M = t), (w = e));
          } catch (e) {
            (J(),
              o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                1,
                "voip: [WebTransportThread] Failed to publish buffered amount: " +
                  String(e),
              ));
          }
      }
    }
    function ee() {
      N == null && ((P = Q()), (N = self.setInterval(Z, s)));
    }
    function te() {
      N == null || $.size > 0 || J();
    }
    function ne(e) {
      r("SecurePostMessage").sendMessageForCurrentOrigin(
        self,
        babelHelpers.extends({ type: "webTransportState" }, e),
      );
    }
    function re(e) {
      var t = function (n) {
          if (e != null && typeof e == "object" && n in e) return e[n];
        },
        n = t("name"),
        r = t("message"),
        o = t("stack"),
        a = t("source"),
        i = t("streamErrorCode");
      return {
        name: n != null ? String(n) : "unknown",
        message: r != null ? String(r) : String(e),
        stack: o != null ? String(o) : "no-stack",
        source: a != null ? String(a) : "n/a",
        streamErrorCode: typeof i == "number" ? i : null,
      };
    }
    function oe(e, t, n) {
      if (n == null) return !1;
      var r = o(
        "WAWebVoipWebTransportSendRingBuffer",
      ).createWebTransportSendRingConsumer(
        n,
        function (t) {
          be(e, t);
        },
        function (t) {
          var n = re(t);
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            1,
            "voip: [WebTransportThread] Send ring handler failed on " +
              e +
              ": " +
              n.message +
              " " +
              n.stack,
          );
        },
      );
      return r == null
        ? (o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            2,
            "voip: [WebTransportThread] Send ring rejected on " +
              e +
              "; staying on postMessage",
          ),
          !1)
        : ((t.sendRingConsumer = r), r.start(), !0);
    }
    var ae = new Map();
    function ie(e, t, n, r) {
      if (o("WAWebVoipWebTransportNativeSendRing").startNativeSendRing(e, le)) {
        var a = o(
          "WAWebVoipWebTransportNativeSendRing",
        ).registerNativeSendRoute(n.ip, n.port, r);
        if (a == null) {
          (o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            2,
            "voip: [WebTransportThread] Native send ring could not register " +
              t +
              ", using the main-thread path",
          ),
            ae.size === 0 &&
              o("WAWebVoipWebTransportNativeSendRing").stopNativeSendRing(e));
          return;
        }
        ((n.nativeRouteToken = a), ae.set(a, t));
      }
    }
    function le(e, t) {
      var n = ae.get(e);
      if (n != null) {
        var r = $.get(n);
        if (r != null) {
          var o;
          r.stats.nativeRingPackets =
            ((o = r.stats.nativeRingPackets) != null ? o : 0) + 1;
        }
        be(n, t);
      }
    }
    function se(e, t) {
      var n,
        r = t.nativeRouteToken;
      if (r != null) {
        ((t.nativeRouteToken = null), ae.delete(r));
        var a = o(
          "WAWebVoipWebTransportNativeSendRing",
        ).unregisterNativeSendRoute(r);
        if (a > 0) {
          var i;
          ((t.stats.droppedPackets += a),
            (t.stats.nativeRingDroppedPackets =
              ((i = t.stats.nativeRingDroppedPackets) != null ? i : 0) + a));
        }
        o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
          a > 0 ? 2 : 3,
          "voip: [WebTransportThread] Native send ring route removed on " +
            e +
            ": packets via ring " +
            String((n = t.stats.nativeRingPackets) != null ? n : 0) +
            ", dropped in ring " +
            String(a),
        );
      }
    }
    function ue(e, t) {
      var n = t.sendRingConsumer;
      if (n != null) {
        ((t.sendRingConsumer = null), n.stop());
        var r = n.getStats();
        o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
          3,
          "voip: [WebTransportThread] Send ring stopped on " +
            e +
            " - drained: " +
            r.drainedRecords +
            ", corrupt: " +
            r.corruptRecords +
            ", handlerErrors: " +
            r.handlerErrors,
        );
      }
    }
    function ce(e) {
      var t = e.connectionId,
        n = e.state,
        r = e.voipWasm;
      if (!n.cleaned) {
        ((n.cleaned = !0),
          (n.closing = !0),
          $.get(t) === n && $.delete(t),
          ue(t, n),
          se(t, n),
          (n.sendQueue = []),
          (n.queuedBytes = 0),
          (n.pendingDatagramBytes = 0),
          n.pendingStunRequests.clear(),
          o("WAWebVoipWasmHeapBuffer").freeHeapBuffer(r, n.wasmBuffer));
        try {
          var a;
          (a = n.reader) == null || a.releaseLock();
        } catch (e) {}
        try {
          var i;
          (i = n.writer) == null || i.releaseLock();
        } catch (e) {}
        try {
          n.transport.close();
        } catch (e) {}
        ((n.reader = null), (n.writer = null), te());
      }
    }
    function de(e, t, n, r, a) {
      (n.stats.receivedPackets++,
        (n.stats.receivedBytes += r.byteLength),
        (n.lastDatagramReceivedAtMs = a),
        G(e, n, r, a),
        K(n, r, a),
        n.hasReceivedFirstDatagram ||
          ((n.hasReceivedFirstDatagram = !0),
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            3,
            "voip: [WebTransportThread] First datagram received on dedicated pthread " +
              t +
              ", size=" +
              r.byteLength,
          ),
          ne({
            connectionId: t,
            attemptId: n.attemptId,
            event: "first_datagram",
            relayGeneration: n.relayGeneration,
          })));
      var i = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
        e,
        n.wasmBuffer,
        r.byteLength,
      );
      if (i === 0) {
        n.stats.droppedPackets++;
        return;
      }
      (e.GROWABLE_HEAP_U8().set(r, i),
        e.handleOnMessageFromHeap(i, r.byteLength, n.ip, n.port));
    }
    function me(e) {
      var t = e.lastDatagramReceivedAtMs;
      return t == null ? null : Math.round(A() - t);
    }
    function pe(e, t, n) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = n.transport.datagrams.readable.getReader();
            n.reader = r;
            try {
              for (; !n.closing; ) {
                var o = yield r.read(),
                  a = o.done,
                  i = o.value,
                  l = A();
                if (a) {
                  !n.cleaned &&
                    $.get(t) === n &&
                    (se(t, n),
                    ne({
                      connectionId: t,
                      attemptId: n.attemptId,
                      event: "closed",
                      stats: n.stats,
                    }),
                    ce({ connectionId: t, state: n, voipWasm: e }));
                  return;
                }
                i != null && de(e, t, n, i, l);
              }
            } catch (r) {
              !n.closing &&
                $.get(t) === n &&
                (se(t, n),
                ne({
                  connectionId: t,
                  attemptId: n.attemptId,
                  event: "error",
                  error: babelHelpers.extends({}, re(r), {
                    sinceLastDatagramMs: me(n),
                  }),
                  stats: n.stats,
                }),
                ce({ connectionId: t, state: n, voipWasm: e }));
            }
          },
        )),
        _e.apply(this, arguments)
      );
    }
    function fe(e, t) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t.draining) {
            t.draining = !0;
            try {
              for (; !t.closing && t.sendQueue.length > 0; ) {
                var n = t.sendQueue.shift();
                if (n != null) {
                  t.queuedBytes -= n.byteLength;
                  var r = t.writer;
                  try {
                    if (r == null) {
                      t.stats.droppedPackets++;
                      continue;
                    }
                    var o = new Uint8Array(n),
                      a = t.relayGeneration;
                    yield r.write(o);
                    var i = A(),
                      l = F(o);
                    (H(t, o, i),
                      z(t, o, i),
                      t.stats.sentPackets++,
                      (t.stats.sentBytes += n.byteLength),
                      t.relayGeneration === a &&
                        !t.hasSentStunTraffic &&
                        l &&
                        ((t.hasSentStunTraffic = !0),
                        ne({
                          connectionId: e,
                          attemptId: t.attemptId,
                          event: "first_stun_datagram_sent",
                          relayGeneration: a,
                        })),
                      t.relayGeneration === a &&
                        !t.hasSentRelayTraffic &&
                        !l &&
                        ((t.hasSentRelayTraffic = !0),
                        ne({
                          connectionId: e,
                          attemptId: t.attemptId,
                          event: "first_relay_datagram_sent",
                          relayGeneration: a,
                        })));
                  } catch (e) {
                    t.stats.droppedPackets++;
                  } finally {
                    ((t.pendingDatagramBytes = Math.max(
                      0,
                      t.pendingDatagramBytes - n.byteLength,
                    )),
                      X());
                  }
                }
              }
            } finally {
              t.draining = !1;
            }
          }
        })),
        ge.apply(this, arguments)
      );
    }
    function he(e, t, n, r, o, a, i, l, s) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s, _) {
            if (!$.has(t)) {
              var f = self.WebTransport;
              if (f == null) {
                ne({
                  connectionId: t,
                  attemptId: l,
                  event: "error",
                  error: {
                    name: "NotSupportedError",
                    message: "WebTransport is not supported in the VoIP worker",
                    stack: "no-stack",
                    source: "n/a",
                    streamErrorCode: null,
                  },
                });
                return;
              }
              var g = null,
                h = null;
              try {
                var y, C, b;
                ((g = new f(n)),
                  d(
                    g.datagrams,
                    (y = _ == null ? void 0 : _.incomingMaxBufferedDatagrams) !=
                      null
                      ? y
                      : u,
                    (C = _ == null ? void 0 : _.outgoingMaxBufferedDatagrams) !=
                      null
                      ? C
                      : c,
                  ),
                  m(
                    g.datagrams,
                    (b = _ == null ? void 0 : _.outgoingMaxAgeMs) != null
                      ? b
                      : 0,
                  ));
                var v = {
                  transport: g,
                  reader: null,
                  writer: null,
                  ip: r,
                  port: a,
                  attemptId: l,
                  sendQueue: [],
                  rejectOversizedDatagrams:
                    (_ == null ? void 0 : _.rejectOversizedDatagrams) !== !1,
                  queuedBytes: 0,
                  pendingDatagramBytes: 0,
                  draining: !1,
                  opened: !1,
                  closing: !1,
                  cleaned: !1,
                  hasReceivedFirstDatagram: !1,
                  lastDatagramReceivedAtMs: null,
                  hasSentStunTraffic: !1,
                  hasSentRelayTraffic: !1,
                  relayGeneration: i,
                  sendRingConsumer: null,
                  nativeRouteToken: null,
                  hasLoggedIceRttFailure: !1,
                  pendingStunRequests: new Map(),
                  openedAtMs: 0,
                  pendingDlProbes: new Set(),
                  firstDlProbeResponseAtMs: null,
                  voipWasm: e,
                  wasmBuffer: o(
                    "WAWebVoipWasmHeapBuffer",
                  ).createHeapBufferState(),
                  stats: {
                    sentPackets: 0,
                    sentBytes: 0,
                    receivedPackets: 0,
                    receivedBytes: 0,
                    droppedPackets: 0,
                  },
                };
                if (
                  ((h = v),
                  $.set(t, v),
                  yield g.ready,
                  v.closing || $.get(t) !== v)
                )
                  return;
                var S = p(g.datagrams);
                (S != null &&
                  ((v.stats.maxDatagramSize = S),
                  o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                    3,
                    "voip: [WebTransportThread] Max datagram size on " +
                      t +
                      ": " +
                      S,
                  )),
                  (v.writer = g.datagrams.writable.getWriter()),
                  (v.opened = !0),
                  (v.openedAtMs = A()),
                  ee());
                var R = oe(t, v, s);
                if ((_ == null ? void 0 : _.nativeSendRing) === !0) {
                  var L;
                  ie(e, t, v, (L = _.nativeSendRingAliases) != null ? L : []);
                }
                (ne({
                  connectionId: t,
                  attemptId: l,
                  event: "open",
                  sendRingReady: R,
                }),
                  pe(e, t, v),
                  g.closed
                    .then(function () {
                      !v.closing &&
                        $.get(t) === v &&
                        (se(t, v),
                        ne({
                          connectionId: t,
                          attemptId: l,
                          event: "closed",
                          stats: v.stats,
                        }),
                        ce({ connectionId: t, state: v, voipWasm: e }));
                    })
                    .catch(function (n) {
                      !v.closing &&
                        $.get(t) === v &&
                        (se(t, v),
                        ne({
                          connectionId: t,
                          attemptId: l,
                          event: "error",
                          error: babelHelpers.extends({}, re(n), {
                            sinceLastDatagramMs: me(v),
                          }),
                          stats: v.stats,
                        }),
                        ce({ connectionId: t, state: v, voipWasm: e }));
                    }));
              } catch (n) {
                var E;
                if (h != null) {
                  var k = !h.cleaned && $.get(t) === h;
                  if ((ce({ connectionId: t, state: h, voipWasm: e }), !k))
                    return;
                } else if (g != null)
                  try {
                    g.close();
                  } catch (e) {}
                ne({
                  connectionId: t,
                  attemptId: l,
                  event: "error",
                  error: re(n),
                  stats: (E = h) == null ? void 0 : E.stats,
                });
              }
            }
          },
        )),
        ye.apply(this, arguments)
      );
    }
    function Ce(e) {
      for (var t of $.values())
        ((t.hasReceivedFirstDatagram = !1),
          (t.hasSentStunTraffic = !1),
          (t.hasSentRelayTraffic = !1),
          (t.relayGeneration = e));
    }
    function be(t, n) {
      var r = $.get(t);
      if (!(r == null || !r.opened || r.closing)) {
        var o = p(r.transport.datagrams);
        if (
          o != null &&
          ((r.stats.maxDatagramSize = o),
          n.byteLength > o && (ve(r, n), r.rejectOversizedDatagrams))
        ) {
          r.stats.droppedPackets++;
          return;
        }
        if (r.queuedBytes + n.byteLength > e) {
          r.stats.droppedPackets++;
          return;
        }
        (r.sendQueue.push(n),
          (r.queuedBytes += n.byteLength),
          (r.pendingDatagramBytes += n.byteLength),
          X(),
          fe(t, r));
      }
    }
    function ve(e, t) {
      var n,
        r,
        o,
        a = e.stats;
      if (
        ((a.oversizedPackets = ((n = a.oversizedPackets) != null ? n : 0) + 1),
        (a.oversizedBytes =
          ((r = a.oversizedBytes) != null ? r : 0) + t.byteLength),
        !F(new Uint8Array(t)))
      ) {
        var i;
        a.oversizedMediaPackets =
          ((i = a.oversizedMediaPackets) != null ? i : 0) + 1;
        return;
      }
      if (
        ((a.oversizedStunPackets =
          ((o = a.oversizedStunPackets) != null ? o : 0) + 1),
        !e.hasSentStunTraffic)
      ) {
        var l;
        a.oversizedStunBeforeFirstStun =
          ((l = a.oversizedStunBeforeFirstStun) != null ? l : 0) + 1;
      }
    }
    function Se(e, t) {
      if (t != null) {
        var n = $.get(t);
        n != null &&
          ((n.closing = !0),
          se(t, n),
          ne({
            connectionId: t,
            attemptId: n.attemptId,
            event: "closed",
            stats: n.stats,
          }),
          ce({ connectionId: t, state: n, voipWasm: e }));
        return;
      }
      try {
        for (var r of Array.from($.entries())) {
          var a = r[0],
            i = r[1];
          ((i.closing = !0),
            se(a, i),
            ne({
              connectionId: a,
              attemptId: i.attemptId,
              event: "closed",
              stats: i.stats,
            }),
            ce({ connectionId: a, state: i, voipWasm: e }));
        }
      } finally {
        (ae.clear(),
          o("WAWebVoipWebTransportNativeSendRing").stopNativeSendRing(e));
      }
    }
    ((l.openWebTransport = he),
      (l.resetWebTransportDatagramHealth = Ce),
      (l.sendWebTransportDatagram = be),
      (l.closeWebTransport = Se));
  },
  98,
);
