__d(
  "WAWebVoipWebTransportWorkerHandler",
  [
    "SecurePostMessage",
    "WAWebVoipJsWorkerMessageHandlerHelpers",
    "WAWebVoipWasmHeapBuffer",
    "WAWebVoipWebTransportNativeSendRing",
    "WAWebVoipWebTransportSendRingBuffer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 262144,
      s = 20,
      u = 512,
      c = 1e3,
      d = 64;
    function m(e, t, n) {
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
    function p(e, t) {
      if (!(t <= 0 || !("outgoingMaxAge" in e)))
        try {
          e.outgoingMaxAge = t;
        } catch (e) {}
    }
    function _(e) {
      try {
        var t = e.maxDatagramSize;
        return typeof t == "number" && Number.isFinite(t) && t > 0 ? t : null;
      } catch (e) {
        return null;
      }
    }
    var f = 20,
      g = 256,
      h = 16,
      y = 0,
      C = 256,
      b = 272,
      v = 2049,
      S = 2050,
      R = 2052,
      L = 2053,
      E = new Set([v, R]),
      k = new Set([S, L]),
      I = 3e4,
      T = 32,
      D = 16391,
      x = 4,
      $ = 64,
      P = new Map(),
      N = 0,
      M = null,
      w = 0,
      A = 0;
    function F() {
      var e = globalThis.performance;
      if (e == null) return Date.now();
      var t = e.timeOrigin;
      return typeof t == "number" && t > 0 ? t + e.now() : Date.now();
    }
    function O(e) {
      return (
        e.byteLength >= f &&
        e[4] === 33 &&
        e[5] === 18 &&
        e[6] === 164 &&
        e[7] === 66
      );
    }
    function B(e) {
      return e[0] * 256 + e[1];
    }
    function W(e) {
      return (Math.floor(e / g) % 2) * g + (Math.floor(e / h) % 2) * h;
    }
    function q(e) {
      return k.has(e) ? !1 : E.has(e) || W(e) === y;
    }
    function U(e) {
      if (k.has(e)) return !0;
      var t = W(e);
      return t === C || t === b;
    }
    function V(e) {
      for (var t = "", n = 8; n < f; n++)
        t += e[n].toString(16).padStart(2, "0");
      return t;
    }
    function H(e, t) {
      for (var n of e) {
        var r = n[0],
          o = n[1];
        if (t - o < I) break;
        e.delete(r);
      }
      for (; e.size >= T; ) {
        var a = e.keys().next().value;
        if (a == null) return;
        e.delete(a);
      }
    }
    function G(e, t, n) {
      if (!(!O(t) || !q(B(t)))) {
        var r = e.pendingStunRequests,
          o = V(t);
        (r.delete(o), H(r, n), r.set(o, n));
      }
    }
    function z(e, t, n, r) {
      if (!(!O(n) || !U(B(n)))) {
        var a = V(n),
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
    function j(e, t, n) {
      var r, o;
      if (!(!O(t) || B(t) !== R)) {
        var a = K(t);
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
          if (l.size >= $) {
            var s = l.values().next().value;
            s != null && l.delete(s);
          }
          l.add(V(t));
        }
      }
    }
    function K(e) {
      for (var t = f; t + x <= e.byteLength; ) {
        var n = e[t] * 256 + e[t + 1],
          r = e[t + 2] * 256 + e[t + 3],
          o = t + x;
        if (n === D)
          return o + 2 <= e.byteLength ? e[o] * 256 + e[o + 1] : null;
        t = o + Math.ceil(r / 4) * 4;
      }
      return null;
    }
    function Q(e, t, n) {
      var r, o;
      if (!(!O(t) || B(t) !== L || !e.pendingDlProbes.delete(V(t)))) {
        var a = e.stats;
        a.dlProbeResponses = ((r = a.dlProbeResponses) != null ? r : 0) + 1;
        var i = (o = e.firstDlProbeResponseAtMs) != null ? o : n;
        ((e.firstDlProbeResponseAtMs = i), (a.dlProbeResponseSpanMs = n - i));
      }
    }
    function X() {
      var e = 0;
      for (var t of P.values()) {
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
    function Y() {
      N = Math.max(N, X());
    }
    function J() {
      for (var e of P.values()) return e.voipWasm;
      return null;
    }
    function Z() {
      M != null &&
        (self.clearInterval(M), (M = null), (N = 0), (w = 0), (A = 0));
    }
    function ee() {
      var e = X(),
        t = Math.max(N, e);
      if (((N = e), !(t === 0 && e === 0 && w === 0 && A === 0))) {
        var n = J();
        if (n != null)
          try {
            (n.updateSctpBufferedAmount(t, e), (w = t), (A = e));
          } catch (e) {
            (Z(),
              o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                1,
                "voip: [WebTransportThread] Failed to publish buffered amount: " +
                  String(e),
              ));
          }
      }
    }
    function te() {
      M == null && ((N = X()), (M = self.setInterval(ee, s)));
    }
    function ne() {
      M == null || P.size > 0 || Z();
    }
    function re(e) {
      r("SecurePostMessage").sendMessageForCurrentOrigin(
        self,
        babelHelpers.extends({ type: "webTransportState" }, e),
      );
    }
    function oe(e) {
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
    function ae(e, t, n) {
      if (n == null) return !1;
      var r = o(
        "WAWebVoipWebTransportSendRingBuffer",
      ).createWebTransportSendRingConsumer(
        n,
        function (t) {
          Se(e, t);
        },
        function (t) {
          var n = oe(t);
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
    var ie = new Map();
    function le(e, t, n, r) {
      if (o("WAWebVoipWebTransportNativeSendRing").startNativeSendRing(e, se)) {
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
            ie.size === 0 &&
              o("WAWebVoipWebTransportNativeSendRing").stopNativeSendRing(e));
          return;
        }
        ((n.nativeRouteToken = a), ie.set(a, t));
      }
    }
    function se(e, t) {
      var n = ie.get(e);
      if (n != null) {
        var r = P.get(n);
        if (r != null) {
          var o;
          r.stats.nativeRingPackets =
            ((o = r.stats.nativeRingPackets) != null ? o : 0) + 1;
        }
        Se(n, t);
      }
    }
    function ue(e, t) {
      var n,
        r = t.nativeRouteToken;
      if (r != null) {
        ((t.nativeRouteToken = null), ie.delete(r));
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
    function ce(e, t) {
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
    function de(e) {
      var t = e.connectionId,
        n = e.state,
        r = e.voipWasm;
      if (!n.cleaned) {
        ((n.cleaned = !0),
          (n.closing = !0),
          P.get(t) === n && P.delete(t),
          ce(t, n),
          ue(t, n),
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
        ((n.reader = null), (n.writer = null), ne());
      }
    }
    function me(e, t, n, r, a) {
      (n.stats.receivedPackets++,
        (n.stats.receivedBytes += r.byteLength),
        (n.lastDatagramReceivedAtMs = a),
        z(e, n, r, a),
        Q(n, r, a),
        n.hasReceivedFirstDatagram ||
          ((n.hasReceivedFirstDatagram = !0),
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            3,
            "voip: [WebTransportThread] First datagram received on dedicated pthread " +
              t +
              ", size=" +
              r.byteLength,
          ),
          re({
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
    function pe(e) {
      var t = e.lastDatagramReceivedAtMs;
      return t == null ? null : Math.round(F() - t);
    }
    async function _e(e, t, n) {
      var r = n.transport.datagrams.readable.getReader();
      n.reader = r;
      try {
        for (var o = !1; !n.closing && !o; ) {
          var a = await r.read(),
            i = a.done,
            l = a.value,
            s = F();
          ((o = i), !i && l != null && me(e, t, n, l, s));
        }
        o && !n.cleaned && P.get(t) === n && (await fe(e, t, n, null));
      } catch (r) {
        if (n.closing || P.get(t) !== n) return;
        await fe(e, t, n, { error: r });
      }
    }
    async function fe(e, t, n, r) {
      n.readerEnded = !0;
      var o = !1;
      (n.awaitSessionCloseCode &&
        ((o = !(await ge(n.transport))), n.closing || P.get(t) !== n)) ||
        (ue(t, n),
        re(
          babelHelpers.extends(
            { connectionId: t, attemptId: n.attemptId },
            r == null
              ? { event: "closed" }
              : {
                  event: "error",
                  error: babelHelpers.extends({}, oe(r.error), {
                    sinceLastDatagramMs: pe(n),
                  }),
                },
            ye(n.closeCode),
            he(o),
            { stats: n.stats },
          ),
        ),
        de({ connectionId: t, state: n, voipWasm: e }));
    }
    function ge(e) {
      var t = null;
      return Promise.race([
        e.closed.then(
          function () {
            return !0;
          },
          function () {
            return !0;
          },
        ),
        new Promise(function (e) {
          t = self.setTimeout(function () {
            return e(!1);
          }, c);
        }),
      ]).finally(function () {
        t != null && self.clearTimeout(t);
      });
    }
    function he(e) {
      return e ? { closedWaitTimedOut: !0 } : {};
    }
    function ye(e) {
      return e != null ? { closeCode: e } : {};
    }
    async function Ce(e, t) {
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
                await r.write(o);
                var i = F(),
                  l = O(o);
                (G(t, o, i),
                  j(t, o, i),
                  t.stats.sentPackets++,
                  (t.stats.sentBytes += n.byteLength),
                  t.relayGeneration === a &&
                    !t.hasSentStunTraffic &&
                    l &&
                    ((t.hasSentStunTraffic = !0),
                    re({
                      connectionId: e,
                      attemptId: t.attemptId,
                      event: "first_stun_datagram_sent",
                      relayGeneration: a,
                    })),
                  t.relayGeneration === a &&
                    !t.hasSentRelayTraffic &&
                    !l &&
                    ((t.hasSentRelayTraffic = !0),
                    re({
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
                  Y());
              }
            }
          }
        } finally {
          t.draining = !1;
        }
      }
    }
    async function be(e, t, n, r, a, i, l, s, c) {
      if (!P.has(t)) {
        var f = self.WebTransport;
        if (f == null) {
          re({
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
            m(
              g.datagrams,
              (y = c == null ? void 0 : c.incomingMaxBufferedDatagrams) != null
                ? y
                : u,
              (C = c == null ? void 0 : c.outgoingMaxBufferedDatagrams) != null
                ? C
                : d,
            ),
            p(
              g.datagrams,
              (b = c == null ? void 0 : c.outgoingMaxAgeMs) != null ? b : 0,
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
              (c == null ? void 0 : c.rejectOversizedDatagrams) !== !1,
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
            awaitSessionCloseCode:
              (c == null ? void 0 : c.awaitSessionCloseCode) === !0,
            closeCode: null,
            readerEnded: !1,
            sendRingConsumer: null,
            nativeRouteToken: null,
            hasLoggedIceRttFailure: !1,
            pendingStunRequests: new Map(),
            openedAtMs: 0,
            pendingDlProbes: new Set(),
            firstDlProbeResponseAtMs: null,
            voipWasm: e,
            wasmBuffer: o("WAWebVoipWasmHeapBuffer").createHeapBufferState(),
            stats: {
              sentPackets: 0,
              sentBytes: 0,
              receivedPackets: 0,
              receivedBytes: 0,
              droppedPackets: 0,
            },
          };
          if (
            ((h = v), P.set(t, v), await g.ready, v.closing || P.get(t) !== v)
          )
            return;
          var S = _(g.datagrams);
          (S != null &&
            ((v.stats.maxDatagramSize = S),
            o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
              3,
              "voip: [WebTransportThread] Max datagram size on " + t + ": " + S,
            )),
            (v.writer = g.datagrams.writable.getWriter()),
            (v.opened = !0),
            (v.openedAtMs = F()),
            te());
          var R = ae(t, v, s);
          if ((c == null ? void 0 : c.nativeSendRing) === !0) {
            var L;
            le(e, t, v, (L = c.nativeSendRingAliases) != null ? L : []);
          }
          (re({
            connectionId: t,
            attemptId: l,
            event: "open",
            sendRingReady: R,
          }),
            _e(e, t, v),
            g.closed
              .then(function (n) {
                ((v.closeCode = n == null ? void 0 : n.closeCode),
                  !v.closing &&
                    !v.readerEnded &&
                    P.get(t) === v &&
                    (ue(t, v),
                    re(
                      babelHelpers.extends(
                        { connectionId: t, attemptId: l, event: "closed" },
                        ye(v.closeCode),
                        { stats: v.stats },
                      ),
                    ),
                    de({ connectionId: t, state: v, voipWasm: e })));
              })
              .catch(function (n) {
                !v.closing &&
                  !v.readerEnded &&
                  P.get(t) === v &&
                  (ue(t, v),
                  re({
                    connectionId: t,
                    attemptId: l,
                    event: "error",
                    error: babelHelpers.extends({}, oe(n), {
                      sinceLastDatagramMs: pe(v),
                    }),
                    stats: v.stats,
                  }),
                  de({ connectionId: t, state: v, voipWasm: e }));
              }));
        } catch (n) {
          var E;
          if (h != null) {
            var k = !h.cleaned && P.get(t) === h;
            if ((de({ connectionId: t, state: h, voipWasm: e }), !k)) return;
          } else if (g != null)
            try {
              g.close();
            } catch (e) {}
          re({
            connectionId: t,
            attemptId: l,
            event: "error",
            error: oe(n),
            stats: (E = h) == null ? void 0 : E.stats,
          });
        }
      }
    }
    function ve(e) {
      for (var t of P.values())
        ((t.hasReceivedFirstDatagram = !1),
          (t.hasSentStunTraffic = !1),
          (t.hasSentRelayTraffic = !1),
          (t.relayGeneration = e));
    }
    function Se(t, n) {
      var r = P.get(t);
      if (!(r == null || !r.opened || r.closing)) {
        var o = _(r.transport.datagrams);
        if (
          o != null &&
          ((r.stats.maxDatagramSize = o),
          n.byteLength > o && (Re(r, n), r.rejectOversizedDatagrams))
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
          Y(),
          Ce(t, r));
      }
    }
    function Re(e, t) {
      var n,
        r,
        o,
        a = e.stats;
      if (
        ((a.oversizedPackets = ((n = a.oversizedPackets) != null ? n : 0) + 1),
        (a.oversizedBytes =
          ((r = a.oversizedBytes) != null ? r : 0) + t.byteLength),
        !O(new Uint8Array(t)))
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
    function Le(e, t) {
      if (t != null) {
        var n = P.get(t);
        n != null &&
          ((n.closing = !0),
          ue(t, n),
          re({
            connectionId: t,
            attemptId: n.attemptId,
            event: "closed",
            stats: n.stats,
          }),
          de({ connectionId: t, state: n, voipWasm: e }));
        return;
      }
      try {
        for (var r of Array.from(P.entries())) {
          var a = r[0],
            i = r[1];
          ((i.closing = !0),
            ue(a, i),
            re({
              connectionId: a,
              attemptId: i.attemptId,
              event: "closed",
              stats: i.stats,
            }),
            de({ connectionId: a, state: i, voipWasm: e }));
        }
      } finally {
        (ie.clear(),
          o("WAWebVoipWebTransportNativeSendRing").stopNativeSendRing(e));
      }
    }
    ((l.openWebTransport = be),
      (l.resetWebTransportDatagramHealth = ve),
      (l.sendWebTransportDatagram = Se),
      (l.closeWebTransport = Le));
  },
  98,
);
