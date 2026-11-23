__d(
  "WAWebVoipJsWorkerMessageHandler",
  [
    "SecurePostMessage",
    "WAWebVoipIncomingSignalingFromHeap",
    "WAWebVoipJsWorkerMessageHandlerHelpers",
    "WAWebVoipSctpRingBufferWait",
    "WAWebVoipSelfPreviewSender",
    "WAWebVoipStatsTracker",
    "WAWebVoipVideoCaptureOffThread",
    "WAWebVoipWasmHeapBuffer",
    "WAWebVoipWebCodecsEncoder",
    "WAWebVoipWebTransportWorkerHandler",
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
      h = null,
      y = 0,
      C = 250,
      b = 0,
      v = 0,
      S = new (o("WAWebVoipStatsTracker").VoipStatsTracker)(),
      R = 20,
      L = 0,
      E = 0;
    function k(e, t) {
      var n = t.bufferedAmount;
      (S.record(e, n), n > E && (E = n));
      var r = Date.now();
      if (r - L >= R) {
        var o;
        ((L = r),
          (o = U) == null ||
            o.updateSctpBufferedAmount == null ||
            o.updateSctpBufferedAmount(E, n),
          (E = 0));
      }
    }
    function I() {
      S.isPolling() ||
        S.startPolling({
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
        });
    }
    function T() {
      var e = S.stopPolling();
      e != null &&
        o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
          3,
          "voip: [SctpStats] Call bufferedAmount summary: " + e,
        );
    }
    function D(e) {
      e.noFirstResponseWatchdog != null &&
        (self.clearTimeout(e.noFirstResponseWatchdog),
        (e.noFirstResponseWatchdog = null));
    }
    function x(e) {
      e.rxStallWatchdog != null &&
        (self.clearTimeout(e.rxStallWatchdog), (e.rxStallWatchdog = null));
    }
    function $(e) {
      var t = e.connectionId,
        n = e.delayMs,
        r = e.state;
      x(r);
      var o = n != null ? n : c;
      r.rxStallWatchdog = self.setTimeout(function () {
        r.rxStallWatchdog = null;
        var e = Date.now(),
          n = e - r.lastRxPacketTime;
        n >= c ? N(t) : $({ connectionId: t, delayMs: c - n, state: r });
      }, o);
    }
    function P(e, t, n) {
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
          $({ connectionId: e, state: t }),
          !0
        );
      }
      return n - t.txActiveSince < c
        ? ($({ connectionId: e, state: t }), !0)
        : !1;
    }
    function N(t) {
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
        if (!P(t, n, r)) {
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
          var i = X({
            connectionId: t,
            errorReason: "rx_stall_timeout",
            event: "error",
          });
          if (i != null)
            try {
              i.channel.close();
            } catch (e) {}
        }
      }
    }
    function M(e, t) {
      t.noFirstResponseWatchdog != null ||
        t.stats.firstSendTime === 0 ||
        t.stats.firstResponseRecvTime !== 0 ||
        t.channel.readyState !== "open" ||
        (t.noFirstResponseWatchdog = self.setTimeout(function () {
          ((t.noFirstResponseWatchdog = null), Y(e));
        }, c));
    }
    function w(e, t, n) {
      (t.stats.sentPackets++, (t.stats.sentBytes += n));
      var r = Date.now();
      (d > 0 && r - t.lastTxPacketTime >= d && (t.txActiveSince = r),
        (t.lastTxPacketTime = r),
        t.stats.firstSendTime === 0 && ((t.stats.firstSendTime = r), M(e, t)));
    }
    var A = new TextDecoder();
    function F() {
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
              c = o("WAWebVoipJsWorkerMessageHandlerHelpers").readRingByte({
                dataU8: n,
                pos: a + 4,
                ringBufferDataSize: _,
              }),
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
              h = o("WAWebVoipJsWorkerMessageHandlerHelpers").readRingBytes(
                n,
                g,
                c,
                _,
              ),
              y = A.decode(h),
              C =
                a +
                o("WAWebVoipJsWorkerMessageHandlerHelpers")
                  .RING_BUFFER_ENTRY_HEADER_BYTES +
                c,
              S = o("WAWebVoipJsWorkerMessageHandlerHelpers").readRingBytes(
                n,
                C,
                d,
                _,
              ),
              R = o(
                "WAWebVoipJsWorkerMessageHandlerHelpers",
              ).getConnectionIdFromIpPort({
                ip: y,
                port: l,
                removeRelayPortOverride: u,
              }),
              L = e.get(R);
            if (L != null && L.channel.readyState === "open")
              try {
                (L.channel.send(S), k(R, L.channel), w(R, L, d), b++);
              } catch (e) {
                v++;
                break;
              }
            else if (L != null)
              (L.txBuffer.push(S.buffer), L.stats.txBufferedPackets++);
            else {
              var E = s.get(R);
              (E == null && ((E = []), s.set(R, E)), E.push(S.buffer));
            }
            var I = (a + i) % _;
            (Atomics.store(t, 1, I), (a = I), (r = Atomics.load(t, 0)));
          }
      }
    }
    function O() {
      var e = ++y;
      function t() {
        if (!(!f || e !== y)) {
          try {
            F();
          } catch (e) {}
          var n =
            h == null
              ? null
              : o("WAWebVoipSctpRingBufferWait").waitForRingWrite(h, C);
          if (n == null) {
            g = self.setTimeout(t, 0);
            return;
          }
          n.then(t);
        }
      }
      t();
    }
    function B(e, t, n, r) {
      (f && W(),
        (p = new Uint8Array(
          e,
          t +
            o("WAWebVoipJsWorkerMessageHandlerHelpers")
              .RING_BUFFER_HEADER_BYTES,
          n,
        )),
        (m = new Uint32Array(e, t, 2)),
        (h =
          r && o("WAWebVoipSctpRingBufferWait").canWaitForRingWrites()
            ? new Int32Array(e, t, 2)
            : null),
        (_ = n),
        (b = 0),
        (v = 0),
        (f = !0),
        O(),
        "" + n + (h != null ? "waits for writes" : "polls"));
    }
    function W() {
      if (f)
        try {
          F();
        } catch (e) {}
      ((f = !1),
        y++,
        g != null && (self.clearTimeout(g), (g = null)),
        h != null &&
          (o("WAWebVoipSctpRingBufferWait").wakeRingReader(h), (h = null)),
        m != null &&
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            3,
            "voip: [DCThread] Ring buffer stats - sent: " +
              b +
              ", dropped: " +
              v,
          ),
        (m = null),
        (p = null));
    }
    function q(t, n, r) {
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
        return (l.send(c), k(a, l), w(a, i, d), !0);
      } catch (e) {
        return !1;
      }
    }
    var U = null;
    function V(t, n) {
      var r = e.get(t);
      if (r == null) {
        "" + t;
        return;
      }
      if (!r.standby) {
        (r.stats.receivedPackets++,
          (r.stats.receivedBytes += n.byteLength),
          (r.lastRxPacketTime = Date.now()),
          r.stats.firstResponseRecvTime === 0 &&
            ((r.stats.firstResponseRecvTime = r.lastRxPacketTime), D(r)),
          !r.receivedMedia &&
            !o("WAWebVoipJsWorkerMessageHandlerHelpers").isStunPacket(n) &&
            ((r.receivedMedia = !0), $({ connectionId: t, state: r })));
        var a = U;
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
    }
    function H(t) {
      var n = e.get(t);
      if (n != null) {
        var r = n.channel;
        if (r.readyState === "open")
          for (; n.txBuffer.length > 0; ) {
            var a = n.txBuffer[0];
            if (a != null) {
              var i = a.byteLength;
              try {
                (r.send(a), n.txBuffer.shift(), w(t, n, i));
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
    function G(t) {
      var n = e.get(t);
      if (!(n == null || U == null)) {
        var r = n.rxBuffer.splice(0);
        for (var o of r) o != null && V(t, o);
      }
    }
    function z(e, t) {
      var n = t.channel;
      ((n.onmessage = function (t) {
        var n = t.data;
        (n instanceof ArrayBuffer && V(e, n), F());
      }),
        (n.onopen = function () {
          try {
            globalThis.postMessage({
              type: "waWasmWorkerCompatibleCallback",
              __name: "dataChannelStateCallback",
              event: "open",
              connectionId: e,
            });
          } catch (e) {}
          (H(e), G(e));
        }),
        (n.onclose = function () {
          j(e, n) &&
            X({ connectionId: e, errorReason: "remote_close", event: "error" });
        }),
        (n.onerror = function (t) {
          var r = o(
            "WAWebVoipJsWorkerMessageHandlerHelpers",
          ).getDataChannelErrorDetails(n, t);
          (o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            1,
            "voip: [DCThread] Channel " +
              e +
              " error: " +
              o(
                "WAWebVoipJsWorkerMessageHandlerHelpers",
              ).formatDataChannelErrorDetails(r),
          ),
            j(e, n) && X({ connectionId: e, event: "error" }));
        }));
    }
    function j(t, n) {
      var r;
      return ((r = e.get(t)) == null ? void 0 : r.channel) === n;
    }
    function K(t, n, r) {
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
    function Q(t) {
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
    function X(t) {
      var n = t.connectionId,
        r = t.errorReason,
        a = t.event,
        i = e.get(n);
      return i == null
        ? null
        : (D(i),
          x(i),
          Q(n),
          K(n, a, r),
          U != null &&
            o("WAWebVoipWasmHeapBuffer").freeHeapBuffer(U, i.wasmBuffer),
          e.delete(n),
          S.remove(n),
          e.size === 0 && T(),
          i);
    }
    function Y(t) {
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
        var a = X({
          connectionId: t,
          errorReason: "no_first_response_timeout",
          event: "error",
        });
        if (a != null)
          try {
            a.channel.close();
          } catch (e) {}
      }
    }
    function J(t, n, r, a, i, l) {
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
        standby: l,
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
      (z(n, u), I());
    }
    function Z(t) {
      var n = e.get(t);
      n != null && (n.standby = !1);
    }
    function ee(t, n) {
      var r = e.get(t);
      if (r != null) {
        var a = r.channel;
        if (a.readyState !== "open") {
          (r.txBuffer.push(n), r.stats.txBufferedPackets++);
          return;
        }
        var i = n.byteLength;
        try {
          (a.send(n), k(t, a), w(t, r, i));
        } catch (e) {
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            1,
            "voip: [DCThread] Error sending packet: " + String(e),
          );
        }
      }
    }
    function te(t) {
      if (t != null) {
        var n = e.get(t);
        if (n != null) {
          X({ connectionId: t, event: "close" });
          try {
            n.channel.close();
          } catch (e) {}
        }
      } else {
        var r = [];
        for (var o of Array.from(e.entries())) {
          var a = o[0],
            i = o[1];
          (X({ connectionId: a, event: "close" }), r.push(i.channel));
        }
        for (var l of r)
          try {
            l.close();
          } catch (e) {}
      }
    }
    function ne(e, t) {
      if ((U == null && (U = e), t.jsWorkerCmd === "shutdown")) {
        try {
          (T(), W(), s.clear(), te());
        } finally {
          o("WAWebVoipWebTransportWorkerHandler").closeWebTransport(e);
        }
        U = null;
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
          (o("WAWebVoipVideoCaptureOffThread").updateInterruptCaptureOnStop(
            t.interruptCaptureOnStop,
          ),
            t.useWebCodecsEncoder === !0
              ? o("WAWebVoipWebCodecsEncoder")
                  .startVideoCaptureWithWebCodecsEncoderInWorker(
                    t.captureObject,
                    t.params,
                    e,
                    {
                      enableOutputWatchdog:
                        t.enableWebCodecsEncoderOutputWatchdog,
                      initialOrientationValue: t.initialOrientationValue,
                      isScreenShare: t.isScreenShare === !0,
                      normalizeVideoElementPresentationFrames:
                        t.normalizeVideoElementPresentationFrames,
                      selfPreviewVideoFrame: t.selfPreviewVideoFrame === !0,
                      videoElementCapture: t.videoElementCapture,
                    },
                  )
                  .catch(function (e) {
                    o(
                      "WAWebVoipJsWorkerMessageHandlerHelpers",
                    ).logToPhysicalLogs(
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
                  ));
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
            t.diagnostics,
          );
        else if (t.jsWorkerCmd === "deliverVideoFrame")
          o("WAWebVoipVideoCaptureOffThread").deliverVideoFrameToWorker(
            t.frame,
            t.frameMetadata,
          );
        else if (t.jsWorkerCmd === "disableSelfPreviewVideoFrame")
          o("WAWebVoipSelfPreviewSender").disableSelfPreviewVideoFrame(
            "renderer transfer failed",
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
              incomingSignalingFromHeap: o(
                "WAWebVoipIncomingSignalingFromHeap",
              ).hasIncomingSignalingFromHeap(e),
            }));
        } else if (
          t.jsWorkerCmd === "transferDataChannel" ||
          t.jsWorkerCmd === "transferStandbyDataChannel"
        )
          J(
            e,
            t.connectionId,
            t.channel,
            t.ip,
            t.port,
            t.jsWorkerCmd === "transferStandbyDataChannel",
          );
        else if (t.jsWorkerCmd === "activateDataChannel") Z(t.connectionId);
        else if (t.jsWorkerCmd === "sendPacket") ee(t.connectionId, t.data);
        else if (t.jsWorkerCmd === "closeDataChannel") te(t.connectionId);
        else if (t.jsWorkerCmd === "initRingBuffer")
          B(t.heapBuffer, t.heapBufferOffset, t.dataSize, t.wakeOnWrite === !0);
        else if (t.jsWorkerCmd === "shutdownRingBuffer") W();
        else if (t.jsWorkerCmd === "setRemoveRelayPortOverride") u = t.enabled;
        else if (t.jsWorkerCmd === "setSctpTimeoutMs") c = t.ms;
        else if (t.jsWorkerCmd === "setRelayParkedTxIdleMs") d = t.ms;
        else if (t.jsWorkerCmd === "openWebTransport")
          o("WAWebVoipWebTransportWorkerHandler").openWebTransport(
            e,
            t.connectionId,
            t.url,
            t.ip,
            t.port,
            t.relayGeneration,
            t.attemptId,
            t.sendRing,
            t.datagramConfig,
          );
        else if (t.jsWorkerCmd === "resetWebTransportDatagramHealth")
          o(
            "WAWebVoipWebTransportWorkerHandler",
          ).resetWebTransportDatagramHealth(t.relayGeneration);
        else if (t.jsWorkerCmd === "sendWebTransportDatagram")
          o("WAWebVoipWebTransportWorkerHandler").sendWebTransportDatagram(
            t.connectionId,
            t.data,
          );
        else if (t.jsWorkerCmd === "closeWebTransport")
          o("WAWebVoipWebTransportWorkerHandler").closeWebTransport(
            e,
            t.connectionId,
          );
        else if (t.jsWorkerCmd === "updateIceRtt") {
          var n;
          ((n = U) == null ? void 0 : n.updateIceRtt) != null &&
            U.updateIceRtt(t.rttMs, t.relayIp, t.relayPort);
        }
      }
    }
    ((l.trySendDirectOnTransferredChannel = q), (l.handleJsWorkerMessage = ne));
  },
  98,
);
