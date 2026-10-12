__d(
  "WAWebVoipWebTransportWorkerHandler",
  [
    "SecurePostMessage",
    "WAWebVoipJsWorkerMessageHandlerHelpers",
    "WAWebVoipWasmHeapBuffer",
    "WAWebVoipWebTransportSendRingBuffer",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 262144,
      s = 20,
      u = 20,
      c = 256,
      d = 16,
      m = 0,
      p = 256,
      _ = 272,
      f = 2049,
      g = 2050,
      h = 2052,
      y = 2053,
      C = new Set([f, h]),
      b = new Set([g, y]),
      v = 3e4,
      S = 32,
      R = new Map(),
      L = 0,
      E = null,
      k = 0,
      I = 0;
    function T() {
      var e = globalThis.performance;
      if (e == null) return Date.now();
      var t = e.timeOrigin;
      return typeof t == "number" && t > 0 ? t + e.now() : Date.now();
    }
    function D(e) {
      return (
        e.byteLength >= u &&
        e[4] === 33 &&
        e[5] === 18 &&
        e[6] === 164 &&
        e[7] === 66
      );
    }
    function x(e) {
      return e[0] * 256 + e[1];
    }
    function $(e) {
      return (Math.floor(e / c) % 2) * c + (Math.floor(e / d) % 2) * d;
    }
    function P(e) {
      return b.has(e) ? !1 : C.has(e) || $(e) === m;
    }
    function N(e) {
      if (b.has(e)) return !0;
      var t = $(e);
      return t === p || t === _;
    }
    function M(e) {
      for (var t = "", n = 8; n < u; n++)
        t += e[n].toString(16).padStart(2, "0");
      return t;
    }
    function w(e, t) {
      for (var n of e) {
        var r = n[0],
          o = n[1];
        if (t - o < v) break;
        e.delete(r);
      }
      for (; e.size >= S; ) {
        var a = e.keys().next().value;
        if (a == null) return;
        e.delete(a);
      }
    }
    function A(e, t, n) {
      if (!(!D(t) || !P(x(t)))) {
        var r = e.pendingStunRequests,
          o = M(t);
        (r.delete(o), w(r, n), r.set(o, n));
      }
    }
    function F(e, t, n, r) {
      if (!(!D(n) || !N(x(n)))) {
        var a = M(n),
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
    function O() {
      var e = 0;
      for (var t of R.values()) {
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
    function B() {
      L = Math.max(L, O());
    }
    function W() {
      for (var e of R.values()) return e.voipWasm;
      return null;
    }
    function q() {
      E != null &&
        (self.clearInterval(E), (E = null), (L = 0), (k = 0), (I = 0));
    }
    function U() {
      var e = O(),
        t = Math.max(L, e);
      if (((L = e), !(t === 0 && e === 0 && k === 0 && I === 0))) {
        var n = W();
        if (n != null)
          try {
            (n.updateSctpBufferedAmount(t, e), (k = t), (I = e));
          } catch (e) {
            (q(),
              o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                1,
                "voip: [WebTransportThread] Failed to publish buffered amount: " +
                  String(e),
              ));
          }
      }
    }
    function V() {
      E == null && ((L = O()), (E = self.setInterval(U, s)));
    }
    function H() {
      E == null || R.size > 0 || q();
    }
    function G(e) {
      r("SecurePostMessage").sendMessageForCurrentOrigin(
        self,
        babelHelpers.extends({ type: "webTransportState" }, e),
      );
    }
    function z(e) {
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
    function j(e, t, n) {
      if (n == null) return !1;
      var r = o(
        "WAWebVoipWebTransportSendRingBuffer",
      ).createWebTransportSendRingConsumer(
        n,
        function (t) {
          oe(e, t);
        },
        function (t) {
          var n = z(t);
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
    function K(e, t) {
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
    function Q(e) {
      var t = e.connectionId,
        n = e.state,
        r = e.voipWasm;
      if (!n.cleaned) {
        ((n.cleaned = !0),
          (n.closing = !0),
          R.get(t) === n && R.delete(t),
          K(t, n),
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
        ((n.reader = null), (n.writer = null), H());
      }
    }
    function X(e, t, n, r, a) {
      (n.stats.receivedPackets++,
        (n.stats.receivedBytes += r.byteLength),
        F(e, n, r, a),
        n.hasReceivedFirstDatagram ||
          ((n.hasReceivedFirstDatagram = !0),
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            3,
            "voip: [WebTransportThread] First datagram received on dedicated pthread " +
              t +
              ", size=" +
              r.byteLength,
          ),
          G({
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
    function Y(e, t, n) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.transport.datagrams.readable.getReader();
          n.reader = r;
          try {
            for (; !n.closing; ) {
              var o = yield r.read(),
                a = o.done,
                i = o.value,
                l = T();
              if (a) {
                !n.cleaned &&
                  R.get(t) === n &&
                  (G({
                    connectionId: t,
                    attemptId: n.attemptId,
                    event: "closed",
                    stats: n.stats,
                  }),
                  Q({ connectionId: t, state: n, voipWasm: e }));
                return;
              }
              i != null && X(e, t, n, i, l);
            }
          } catch (r) {
            !n.closing &&
              R.get(t) === n &&
              (G({
                connectionId: t,
                attemptId: n.attemptId,
                event: "error",
                error: z(r),
                stats: n.stats,
              }),
              Q({ connectionId: t, state: n, voipWasm: e }));
          }
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e, t) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                    var i = T(),
                      l = D(o);
                    (A(t, o, i),
                      t.stats.sentPackets++,
                      (t.stats.sentBytes += n.byteLength),
                      t.relayGeneration === a &&
                        !t.hasSentStunTraffic &&
                        l &&
                        ((t.hasSentStunTraffic = !0),
                        G({
                          connectionId: e,
                          attemptId: t.attemptId,
                          event: "first_stun_datagram_sent",
                          relayGeneration: a,
                        })),
                      t.relayGeneration === a &&
                        !t.hasSentRelayTraffic &&
                        !l &&
                        ((t.hasSentRelayTraffic = !0),
                        G({
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
                      B());
                  }
                }
              }
            } finally {
              t.draining = !1;
            }
          }
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e, t, n, r, o, a, i, l) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s) {
            if (!R.has(t)) {
              var u = self.WebTransport;
              if (u == null) {
                G({
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
              var c = null,
                d = null;
              try {
                c = new u(n);
                var m = {
                  transport: c,
                  reader: null,
                  writer: null,
                  ip: r,
                  port: a,
                  attemptId: l,
                  sendQueue: [],
                  queuedBytes: 0,
                  pendingDatagramBytes: 0,
                  draining: !1,
                  opened: !1,
                  closing: !1,
                  cleaned: !1,
                  hasReceivedFirstDatagram: !1,
                  hasSentStunTraffic: !1,
                  hasSentRelayTraffic: !1,
                  relayGeneration: i,
                  sendRingConsumer: null,
                  hasLoggedIceRttFailure: !1,
                  pendingStunRequests: new Map(),
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
                  ((d = m),
                  R.set(t, m),
                  yield c.ready,
                  m.closing || R.get(t) !== m)
                )
                  return;
                ((m.writer = c.datagrams.writable.getWriter()),
                  (m.opened = !0),
                  V());
                var p = j(t, m, s);
                (G({
                  connectionId: t,
                  attemptId: l,
                  event: "open",
                  sendRingReady: p,
                }),
                  Y(e, t, m),
                  c.closed
                    .then(function () {
                      !m.closing &&
                        R.get(t) === m &&
                        (G({
                          connectionId: t,
                          attemptId: l,
                          event: "closed",
                          stats: m.stats,
                        }),
                        Q({ connectionId: t, state: m, voipWasm: e }));
                    })
                    .catch(function (n) {
                      !m.closing &&
                        R.get(t) === m &&
                        (G({
                          connectionId: t,
                          attemptId: l,
                          event: "error",
                          error: z(n),
                          stats: m.stats,
                        }),
                        Q({ connectionId: t, state: m, voipWasm: e }));
                    }));
              } catch (n) {
                var _;
                if (d != null) {
                  var f = !d.cleaned && R.get(t) === d;
                  if ((Q({ connectionId: t, state: d, voipWasm: e }), !f))
                    return;
                } else if (c != null)
                  try {
                    c.close();
                  } catch (e) {}
                G({
                  connectionId: t,
                  attemptId: l,
                  event: "error",
                  error: z(n),
                  stats: (_ = d) == null ? void 0 : _.stats,
                });
              }
            }
          },
        )),
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      for (var t of R.values())
        ((t.hasReceivedFirstDatagram = !1),
          (t.hasSentStunTraffic = !1),
          (t.hasSentRelayTraffic = !1),
          (t.relayGeneration = e));
    }
    function oe(t, n) {
      var r = R.get(t);
      if (!(r == null || !r.opened || r.closing)) {
        if (r.queuedBytes + n.byteLength > e) {
          r.stats.droppedPackets++;
          return;
        }
        (r.sendQueue.push(n),
          (r.queuedBytes += n.byteLength),
          (r.pendingDatagramBytes += n.byteLength),
          B(),
          Z(t, r));
      }
    }
    function ae(e, t) {
      if (t != null) {
        var n = R.get(t);
        n != null &&
          ((n.closing = !0),
          G({
            connectionId: t,
            attemptId: n.attemptId,
            event: "closed",
            stats: n.stats,
          }),
          Q({ connectionId: t, state: n, voipWasm: e }));
        return;
      }
      for (var r of Array.from(R.entries())) {
        var o = r[0],
          a = r[1];
        ((a.closing = !0),
          G({
            connectionId: o,
            attemptId: a.attemptId,
            event: "closed",
            stats: a.stats,
          }),
          Q({ connectionId: o, state: a, voipWasm: e }));
      }
    }
    ((l.openWebTransport = te),
      (l.resetWebTransportDatagramHealth = re),
      (l.sendWebTransportDatagram = oe),
      (l.closeWebTransport = ae));
  },
  98,
);
