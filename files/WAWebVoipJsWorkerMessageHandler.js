__d(
  "WAWebVoipJsWorkerMessageHandler",
  [
    "SecurePostMessage",
    "WAWebVoipJsWorkerMessageHandlerHelpers",
    "WAWebVoipStatsTracker",
    "WAWebVoipVideoCaptureOffThread",
    "WAWebVoipWasmHeapBuffer",
    "WAWebVoipWebCodecsEncoder",
    "WAWebVoipWorkerHandler",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = new Map(),
      u = !1,
      c = 1e4,
      d = 0,
      m = null,
      p = null,
      _ = 0,
      f = !1,
      g = null,
      h = 0,
      y = 0,
      C = !1,
      b = new (o("WAWebVoipStatsTracker").VoipStatsTracker)(),
      v = 20,
      S = 0,
      R = 0;
    function L(e, t) {
      var n = t.bufferedAmount;
      (C && b.record(e, n), n > R && (R = n));
      var r = Date.now();
      if (r - S >= v) {
        var o;
        ((S = r),
          (o = W) == null ||
            o.updateSctpBufferedAmount == null ||
            o.updateSctpBufferedAmount(R, n),
          (R = 0));
      }
    }
    function E() {
      C &&
        (b.isPolling() ||
          b.startPolling({
            intervalMs: o("WAWebVoipStatsTracker").DEFAULT_POLL_INTERVAL_MS,
            resetPerInterval: !0,
            onInterval: function (n) {
              var t = n.getMostActiveId();
              if (t != null) {
                var r = e.get(t);
                if (r != null && r.channel.readyState === "open") {
                  var a,
                    i = r.channel.bufferedAmount,
                    l = (a = n.formatStats(t)) != null ? a : "N/A";
                  o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                    3,
                    "voip: [SctpStats] " +
                      t +
                      " bufferedAmount=" +
                      i +
                      " (" +
                      l +
                      ")",
                  );
                }
              }
            },
          }));
    }
    function k() {
      var e = b.stopPolling();
      e != null &&
        o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
          3,
          "voip: [SctpStats] Call bufferedAmount summary: " + e,
        );
    }
    function I(e) {
      e.noFirstResponseWatchdog != null &&
        (self.clearTimeout(e.noFirstResponseWatchdog),
        (e.noFirstResponseWatchdog = null));
    }
    function T(e) {
      e.rxStallWatchdog != null &&
        (self.clearTimeout(e.rxStallWatchdog), (e.rxStallWatchdog = null));
    }
    function D(e) {
      var t = e.connectionId,
        n = e.delayMs,
        r = e.state;
      T(r);
      var o = n != null ? n : c;
      r.rxStallWatchdog = self.setTimeout(function () {
        r.rxStallWatchdog = null;
        var e = Date.now(),
          n = e - r.lastRxPacketTime;
        n >= c ? $(t) : D({ connectionId: t, delayMs: c - n, state: r });
      }, o);
    }
    function x(e, t, n) {
      if (d <= 0) return !1;
      var r = t.lastTxPacketTime === 0 ? null : n - t.lastTxPacketTime;
      if (r == null || r >= d) {
        var a = r == null ? "no TX yet" : "no TX for " + r + "ms";
        return (
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            3,
            "voip: [DCThread] Channel " +
              e +
              " rx_stall suppressed (relay parked, " +
              a +
              ")",
          ),
          D({ connectionId: e, state: t }),
          !0
        );
      }
      return n - t.txActiveSince < c
        ? (D({ connectionId: e, state: t }), !0)
        : !1;
    }
    function $(t) {
      var n = e.get(t);
      if (
        !(
          n == null ||
          n.lastRxPacketTime === 0 ||
          !n.receivedMedia ||
          n.channel.readyState !== "open"
        )
      ) {
        var r = Date.now();
        if (!x(t, n, r)) {
          var a = r - n.lastRxPacketTime;
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            1,
            "voip: [DCThread] Channel " +
              t +
              " rx_stall_timeout after " +
              a +
              "ms without RX (threshold=" +
              c +
              "ms, readyState=" +
              n.channel.readyState +
              ", bufferedAmount=" +
              n.channel.bufferedAmount +
              ")",
          );
          var i = j(t, "error", "rx_stall_timeout");
          if (i != null)
            try {
              i.channel.close();
            } catch (e) {}
        }
      }
    }
    function P(e, t) {
      t.noFirstResponseWatchdog != null ||
        t.stats.firstSendTime === 0 ||
        t.stats.firstResponseRecvTime !== 0 ||
        t.channel.readyState !== "open" ||
        (t.noFirstResponseWatchdog = self.setTimeout(function () {
          ((t.noFirstResponseWatchdog = null), K(e));
        }, c));
    }
    function N(e, t, n) {
      (t.stats.sentPackets++, (t.stats.sentBytes += n));
      var r = Date.now();
      (d > 0 && r - t.lastTxPacketTime >= d && (t.txActiveSince = r),
        (t.lastTxPacketTime = r),
        t.stats.firstSendTime === 0 && ((t.stats.firstSendTime = r), P(e, t)));
    }
    var M = new TextDecoder();
    function w() {
      if (f) {
        var t = m,
          n = p;
        if (!(t == null || n == null))
          for (var r = Atomics.load(t, 0), a = Atomics.load(t, 1); a !== r; ) {
            var i = o("WAWebVoipJsWorkerMessageHandlerHelpers").readRingU16LE(
              n,
              a,
              _,
            );
            if (
              i <
                o("WAWebVoipJsWorkerMessageHandlerHelpers")
                  .RING_BUFFER_ENTRY_HEADER_BYTES +
                  1 ||
              i > _
            ) {
              ("" + i + a, Atomics.store(t, 1, r));
              break;
            }
            var l = o("WAWebVoipJsWorkerMessageHandlerHelpers").readRingU16LE(
                n,
                a + 2,
                _,
              ),
              c = o("WAWebVoipJsWorkerMessageHandlerHelpers").readRingByte(
                n,
                a + 4,
                _,
              ),
              d =
                i -
                o("WAWebVoipJsWorkerMessageHandlerHelpers")
                  .RING_BUFFER_ENTRY_HEADER_BYTES -
                c;
            if (
              d < 0 ||
              o("WAWebVoipJsWorkerMessageHandlerHelpers")
                .RING_BUFFER_ENTRY_HEADER_BYTES +
                c >
                i
            ) {
              ("" + i + c, Atomics.store(t, 1, r));
              break;
            }
            var g =
                a +
                o("WAWebVoipJsWorkerMessageHandlerHelpers")
                  .RING_BUFFER_ENTRY_HEADER_BYTES,
              C = o("WAWebVoipJsWorkerMessageHandlerHelpers").readRingBytes(
                n,
                g,
                c,
                _,
              ),
              b = M.decode(C),
              v =
                a +
                o("WAWebVoipJsWorkerMessageHandlerHelpers")
                  .RING_BUFFER_ENTRY_HEADER_BYTES +
                c,
              S = o("WAWebVoipJsWorkerMessageHandlerHelpers").readRingBytes(
                n,
                v,
                d,
                _,
              ),
              R = o(
                "WAWebVoipJsWorkerMessageHandlerHelpers",
              ).getConnectionIdFromIpPort({
                ip: b,
                port: l,
                removeRelayPortOverride: u,
              }),
              E = e.get(R);
            if (E != null && E.channel.readyState === "open")
              try {
                (E.channel.send(S), L(R, E.channel), N(R, E, d), h++);
              } catch (e) {
                y++;
                break;
              }
            else if (E != null)
              (E.txBuffer.push(S.buffer), E.stats.txBufferedPackets++);
            else {
              var k = s.get(R);
              (k == null && ((k = []), s.set(R, k)), k.push(S.buffer));
            }
            var I = (a + i) % _;
            (Atomics.store(t, 1, I), (a = I), (r = Atomics.load(t, 0)));
          }
      }
    }
    function A() {
      function e() {
        if (f) {
          try {
            w();
          } catch (e) {}
          g = self.setTimeout(e, 0);
        }
      }
      e();
    }
    function F(e, t, n) {
      (f && O(),
        (p = new Uint8Array(
          e,
          t +
            o("WAWebVoipJsWorkerMessageHandlerHelpers")
              .RING_BUFFER_HEADER_BYTES,
          n,
        )),
        (m = new Uint32Array(e, t, 2)),
        (_ = n),
        (h = 0),
        (y = 0),
        (f = !0),
        A(),
        "" + n);
    }
    function O() {
      if (f)
        try {
          w();
        } catch (e) {}
      ((f = !1),
        g != null && (self.clearTimeout(g), (g = null)),
        m != null &&
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            3,
            "voip: [DCThread] Ring buffer stats - sent: " +
              h +
              ", dropped: " +
              y,
          ),
        (m = null),
        (p = null));
    }
    function B(t, n, r) {
      var a = o(
          "WAWebVoipJsWorkerMessageHandlerHelpers",
        ).getConnectionIdFromIpPort({
          ip: t,
          port: n,
          removeRelayPortOverride: u,
        }),
        i = e.get(a);
      if (i == null) return !1;
      var l = i.channel;
      if (l.readyState !== "open") {
        var s = r instanceof ArrayBuffer ? r : new Uint8Array(r).buffer;
        return (i.txBuffer.push(s), i.stats.txBufferedPackets++, !0);
      }
      try {
        var c = r instanceof ArrayBuffer ? r : new Uint8Array(r).buffer,
          d = c.byteLength;
        return (l.send(c), L(a, l), N(a, i, d), !0);
      } catch (e) {
        return !1;
      }
    }
    var W = null;
    function q(t, n) {
      var r = e.get(t);
      if (r == null) {
        "" + t;
        return;
      }
      (r.stats.receivedPackets++,
        (r.stats.receivedBytes += n.byteLength),
        (r.lastRxPacketTime = Date.now()),
        r.stats.firstResponseRecvTime === 0 &&
          ((r.stats.firstResponseRecvTime = r.lastRxPacketTime), I(r)),
        !r.receivedMedia &&
          !o("WAWebVoipJsWorkerMessageHandlerHelpers").isStunPacket(n) &&
          ((r.receivedMedia = !0), D({ connectionId: t, state: r })));
      var a = W;
      if (a == null) {
        r.rxBuffer.push(n);
        return;
      }
      var i = n.byteLength,
        l = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(a, r.wasmBuffer, i);
      if (l === 0) {
        (o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
          1,
          "voip: [DCThread] Failed to allocate WASM heap memory for packet (size=" +
            i +
            ", rxBuffered=" +
            r.rxBuffer.length +
            ")",
        ),
          r.rxBuffer.push(n));
        return;
      }
      try {
        var s = new Uint8Array(n);
        (a.GROWABLE_HEAP_U8().set(s, l),
          a.handleOnMessageFromHeap(l, i, r.ip, r.port));
      } catch (e) {}
    }
    function U(t) {
      var n = e.get(t);
      if (n != null) {
        var r = n.channel;
        if (r.readyState === "open")
          for (; n.txBuffer.length > 0; ) {
            var a = n.txBuffer[0];
            if (a != null) {
              var i = a.byteLength;
              try {
                (r.send(a), n.txBuffer.shift(), N(t, n, i));
              } catch (e) {
                o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                  1,
                  "voip: [DCThread] Error sending buffered TX packet: " +
                    String(e),
                );
                break;
              }
            } else n.txBuffer.shift();
          }
      }
    }
    function V(t) {
      var n = e.get(t);
      if (!(n == null || W == null)) {
        var r = n.rxBuffer.splice(0);
        for (var o of r) o != null && q(t, o);
      }
    }
    function H(t, n) {
      var r = n.channel;
      ((r.onmessage = function (e) {
        var n = e.data;
        (n instanceof ArrayBuffer && q(t, n), w());
      }),
        (r.onopen = function () {
          try {
            globalThis.postMessage({
              type: "waWasmWorkerCompatibleCallback",
              __name: "dataChannelStateCallback",
              event: "open",
              connectionId: t,
            });
          } catch (e) {}
          (U(t), V(t));
        }),
        (r.onclose = function () {
          e.has(t) && j(t, "error", "remote_close");
        }),
        (r.onerror = function (n) {
          var a = o(
            "WAWebVoipJsWorkerMessageHandlerHelpers",
          ).getDataChannelErrorDetails(r, n);
          (o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            1,
            "voip: [DCThread] Channel " +
              t +
              " error: " +
              o(
                "WAWebVoipJsWorkerMessageHandlerHelpers",
              ).formatDataChannelErrorDetails(a),
          ),
            e.has(t) && j(t, "error"));
        }));
    }
    function G(t, n, r) {
      var o = e.get(t);
      if (o != null)
        try {
          globalThis.postMessage(
            babelHelpers.extends(
              {
                type: "waWasmWorkerCompatibleCallback",
                __name: "dataChannelStateCallback",
                event: n,
                connectionId: t,
              },
              n === "error" && r != null ? { errorReason: r } : {},
              {
                stats: {
                  sentPackets: o.stats.sentPackets,
                  sentBytes: o.stats.sentBytes,
                  receivedPackets: o.stats.receivedPackets,
                  receivedBytes: o.stats.receivedBytes,
                  firstSendTime: o.stats.firstSendTime,
                  firstResponseRecvTime: o.stats.firstResponseRecvTime,
                },
              },
            ),
          );
        } catch (e) {}
    }
    function z(t) {
      var n = e.get(t);
      n != null &&
        o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
          3,
          "voip: [DCThread] Channel " +
            t +
            " stats - sent: " +
            n.stats.sentPackets +
            " (" +
            n.stats.sentBytes +
            " bytes), received: " +
            n.stats.receivedPackets +
            " (" +
            n.stats.receivedBytes +
            " bytes), txBuffered: " +
            n.stats.txBufferedPackets,
        );
    }
    function j(t, n, r) {
      var a = e.get(t);
      return a == null
        ? null
        : (I(a),
          T(a),
          z(t),
          G(t, n, r),
          W != null &&
            o("WAWebVoipWasmHeapBuffer").freeHeapBuffer(W, a.wasmBuffer),
          e.delete(t),
          b.remove(t),
          e.size === 0 && k(),
          a);
    }
    function K(t) {
      var n = e.get(t);
      if (
        !(
          n == null ||
          n.stats.firstSendTime === 0 ||
          n.stats.firstResponseRecvTime !== 0 ||
          n.channel.readyState !== "open"
        )
      ) {
        var r = Date.now() - n.stats.firstSendTime;
        o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
          1,
          "voip: [DCThread] Channel " +
            t +
            " no_first_response_timeout after " +
            r +
            "ms (threshold=" +
            c +
            "ms, readyState=" +
            n.channel.readyState +
            ", bufferedAmount=" +
            n.channel.bufferedAmount +
            ")",
        );
        var a = j(t, "error", "no_first_response_timeout");
        if (a != null)
          try {
            a.channel.close();
          } catch (e) {}
      }
    }
    function Q(t, n, r, a, i, l) {
      var u = {
        channel: r,
        ip: a,
        port: i,
        rxBuffer: [],
        txBuffer: [],
        noFirstResponseWatchdog: null,
        rxStallWatchdog: null,
        lastRxPacketTime: 0,
        receivedMedia: !1,
        lastTxPacketTime: 0,
        txActiveSince: 0,
        wasmBuffer: o("WAWebVoipWasmHeapBuffer").createHeapBufferState(),
        stats: {
          sentPackets: 0,
          sentBytes: 0,
          receivedPackets: 0,
          receivedBytes: 0,
          txBufferedPackets: 0,
          firstSendTime: 0,
          firstResponseRecvTime: 0,
        },
      };
      e.set(n, u);
      var c = s.get(n);
      if (c != null) {
        s.delete(n);
        for (var d of c) (u.txBuffer.push(d), u.stats.txBufferedPackets++);
      }
      (H(n, u), (C = l), E());
    }
    function X(t, n) {
      var r = e.get(t);
      if (r != null) {
        var a = r.channel;
        if (a.readyState !== "open") {
          (r.txBuffer.push(n), r.stats.txBufferedPackets++);
          return;
        }
        var i = n.byteLength;
        try {
          (a.send(n), L(t, a), N(t, r, i));
        } catch (e) {
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            1,
            "voip: [DCThread] Error sending packet: " + String(e),
          );
        }
      }
    }
    function Y(t) {
      if (t != null) {
        var n = e.get(t);
        if (n != null) {
          j(t, "close");
          try {
            n.channel.close();
          } catch (e) {}
        }
      } else {
        var r = [];
        for (var o of Array.from(e.entries())) {
          var a = o[0],
            i = o[1];
          (j(a, "close"), r.push(i.channel));
        }
        for (var l of r)
          try {
            l.close();
          } catch (e) {}
      }
    }
    function J(e, t) {
      if ((W == null && (W = e), t.jsWorkerCmd === "shutdown")) {
        (k(), O(), s.clear(), Y(), (W = null));
        try {
          e.exitJsWorkerThread();
        } catch (e) {
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            2,
            "voip: [JsWorkerThread] exitJsWorkerThread error (expected during teardown): " +
              String(e),
          );
        }
      } else if (t.jsWorkerCmd !== "ping") {
        if (t.jsWorkerCmd === "startVideoCapture")
          t.useWebCodecsEncoder === !0
            ? o("WAWebVoipWebCodecsEncoder")
                .startVideoCaptureWithWebCodecsEncoderInWorker(
                  t.captureObject,
                  t.params,
                  e,
                  t.videoElementCapture,
                  t.initialOrientationValue,
                  t.isScreenShare === !0,
                )
                .catch(function (e) {
                  o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                    2,
                    "voip: [AV:startVideoCaptureWithWebCodecsEncoderInWorker] unhandled error: " +
                      String(e),
                  );
                })
            : t.captureObject != null
              ? o("WAWebVoipVideoCaptureOffThread")
                  .startVideoCaptureInWorker({
                    captureObject: t.captureObject,
                    initialOrientationValue: t.initialOrientationValue,
                    onVideoDataFnType: t.onVideoDataFnType,
                    params: t.params,
                    voipWasm: e,
                  })
                  .catch(function (e) {
                    o(
                      "WAWebVoipJsWorkerMessageHandlerHelpers",
                    ).logToPhysicalLogs(
                      2,
                      "voip: [AV:startVideoCaptureInWorker] unhandled error: " +
                        String(e),
                    );
                  })
              : o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                  2,
                  "voip: [AV:startVideoCaptureInWorker] captureObject is null",
                );
        else if (t.jsWorkerCmd === "stopVideoCapture")
          o("WAWebVoipVideoCaptureOffThread")
            .stopVideoCaptureInWorker()
            .catch(function (e) {
              o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                2,
                "voip: [AV:stopVideoCaptureInWorker] unhandled error: " +
                  String(e),
              );
            });
        else if (t.jsWorkerCmd === "updateWebCodecsEncodeParams")
          o("WAWebVoipWebCodecsEncoder").updateWebCodecsEncoderParams(t.params);
        else if (t.jsWorkerCmd === "updateDeviceOrientation")
          o("WAWebVoipVideoCaptureOffThread").updateDeviceOrientationInWorker(
            t.orientationValue,
          );
        else if (t.jsWorkerCmd === "deliverVideoFrame")
          o("WAWebVoipVideoCaptureOffThread").deliverVideoFrameToWorker(
            t.frame,
          );
        else if (t.jsWorkerCmd === "startVoipRpc") {
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            3,
            "voip: [JsWorkerThread] startVoipRpc received token=" + t.token,
          );
          try {
            o("WAWebVoipWorkerHandler").setupVoipRpcOnPort(t.rpcPort, e);
          } catch (e) {
            (o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
              1,
              "voip: [JsWorkerThread] startVoipRpc setup failed token=" +
                t.token +
                ": " +
                String(e),
            ),
              t.rpcPort.close());
            return;
          }
          (o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            3,
            "voip: [JsWorkerThread] startVoipRpc ready token=" + t.token,
          ),
            r("SecurePostMessage").sendMessageForCurrentOrigin(self, {
              type: "voipRpcReady",
              token: t.token,
            }));
        } else if (t.jsWorkerCmd === "transferDataChannel")
          Q(e, t.connectionId, t.channel, t.ip, t.port, t.enableStats);
        else if (t.jsWorkerCmd === "sendPacket") X(t.connectionId, t.data);
        else if (t.jsWorkerCmd === "closeDataChannel") Y(t.connectionId);
        else if (t.jsWorkerCmd === "initRingBuffer")
          F(t.heapBuffer, t.heapBufferOffset, t.dataSize);
        else if (t.jsWorkerCmd === "shutdownRingBuffer") O();
        else if (t.jsWorkerCmd === "setRemoveRelayPortOverride") u = t.enabled;
        else if (t.jsWorkerCmd === "setSctpTimeoutMs") c = t.ms;
        else if (t.jsWorkerCmd === "setRelayParkedTxIdleMs") d = t.ms;
        else if (t.jsWorkerCmd === "updateIceRtt") {
          var n;
          ((n = W) == null ? void 0 : n.updateIceRtt) != null &&
            W.updateIceRtt(t.rttMs, t.relayIp, t.relayPort);
        }
      }
    }
    ((l.trySendDirectOnTransferredChannel = B), (l.handleJsWorkerMessage = J));
  },
  98,
);
