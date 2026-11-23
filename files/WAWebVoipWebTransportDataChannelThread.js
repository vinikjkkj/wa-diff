__d(
  "WAWebVoipWebTransportDataChannelThread",
  [
    "WAWebNoop",
    "WAWebVoipJsWorkerCreation",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipWebTransportSendRingBuffer",
    "WAWebVoipWebTransportSessionEndODS",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        incomingMaxBufferedDatagrams: 512,
        outgoingMaxBufferedDatagrams: 64,
        outgoingMaxAgeMs: 0,
      },
      s = (function () {
        function t(e) {
          ((this.$3 = o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
            o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
              .WEBTRANSPORT_SEND_RING,
          )),
            (this.$4 = !0),
            (this.$5 = 0),
            (this.$6 = new Map()),
            (this.$7 = new Map()),
            (this.$8 = new Map()),
            (this.$9 = null),
            (this.$10 = new Map()),
            (this.$2 = e));
        }
        t.create = async function (n) {
          var e = await o("WAWebVoipJsWorkerCreation").createJsWorkerThread(n),
            r = new t(e);
          return (r.$1(), r);
        };
        var n = t.prototype;
        return (
          (n.$1 = function () {
            var e = this;
            this.$2.worker.addMessageListener(
              "webTransportState",
              function (t) {
                e.$11(t);
              },
            );
          }),
          (n.$11 = function (t) {
            var e,
              n = t.event === "closed" || t.event === "error",
              r = this.$8.get(t.connectionId);
            (n &&
              (this.$12(t.connectionId, t.attemptId),
              t.closedWaitTimedOut === !0 &&
                o(
                  "WAWebVoipWebTransportSessionEndODS",
                ).logCallWebtransportSessionEndClosedWaitTimeout()),
              !(t.event === "open" && (this.$13(t) || r !== t.attemptId)) &&
                ((!n && t.event !== "open" && r !== t.attemptId) ||
                  (n &&
                    (this.$14(t.connectionId, t.attemptId),
                    r !== t.attemptId ||
                      (t.event === "error" && this.$15(t)))) ||
                  (e = this.$9) == null ||
                  e.call(
                    this,
                    babelHelpers.extends(
                      {
                        connectionId: t.connectionId,
                        attemptId: t.attemptId,
                        event: t.event,
                        relayGeneration: t.relayGeneration,
                        error: t.error,
                        stats: t.stats,
                      },
                      t.closeCode != null ? { closeCode: t.closeCode } : null,
                    ),
                  )));
          }),
          (n.$12 = function (t, n) {
            var e = this.$10.get(t);
            e != null && e.attemptId === n && this.$10.delete(t);
          }),
          (n.$13 = function (t) {
            var e = this.$6.get(t.connectionId);
            return e == null || e.attemptId !== t.attemptId
              ? !1
              : (this.$6.delete(t.connectionId),
                this.$10.delete(t.connectionId),
                e.sendRing != null &&
                  t.sendRingReady === !0 &&
                  this.$10.set(t.connectionId, {
                    attemptId: e.attemptId,
                    producer: e.sendRing,
                  }),
                e.resolve(),
                !0);
          }),
          (n.$15 = function (t) {
            var e,
              n = this.$6.get(t.connectionId);
            return n == null || n.attemptId !== t.attemptId
              ? !1
              : (this.$6.delete(t.connectionId),
                n.reject(
                  (e = t.error) != null
                    ? e
                    : r("err")("WebTransport worker connect failed"),
                ),
                !0);
          }),
          (n.$14 = function (t, n) {
            this.$8.get(t) === n && this.$8.delete(t);
            var e = this.$7.get(t);
            e != null && e.attemptId === n && (this.$7.delete(t), e.resolve());
          }),
          (n.registerStateHandler = function (t) {
            this.$9 = t;
          }),
          (n.connect = function (n, a, i, l, s, u) {
            var t = this;
            return (
              u === void 0 && (u = e),
              this.$4
                ? this.$6.has(n)
                  ? Promise.reject(
                      r("err")("WebTransport connection already pending: " + n),
                    )
                  : new Promise(function (e, r) {
                      var c = ++t.$5,
                        d = t.$3
                          ? o(
                              "WAWebVoipWebTransportSendRingBuffer",
                            ).createWebTransportSendRing()
                          : null,
                        m = {
                          attemptId: c,
                          reject: r,
                          resolve: e,
                          sendRing: d == null ? void 0 : d.producer,
                        };
                      (t.$6.set(n, m), t.$8.set(n, c));
                      try {
                        t.$16(
                          n,
                          a,
                          i,
                          l,
                          s,
                          c,
                          u,
                          d == null ? void 0 : d.ringBuffer,
                        );
                        return;
                      } catch (e) {
                        if (d == null) {
                          t.$17(n, c, r, e);
                          return;
                        }
                        ((t.$3 = !1), (m.sendRing = null));
                      }
                      try {
                        t.$16(n, a, i, l, s, c, u);
                      } catch (e) {
                        t.$17(n, c, r, e);
                      }
                    })
                : Promise.reject(r("err")("WebTransport worker is not active"))
            );
          }),
          (n.$16 = function (t, n, r, o, a, i, l, s) {
            this.$2.worker.postMessage({
              type: "cmd",
              cmd: "jsWorkerCmd",
              jsWorkerCmd: "openWebTransport",
              connectionId: t,
              url: n,
              ip: r,
              port: o,
              relayGeneration: a,
              attemptId: i,
              datagramConfig: l,
              sendRing: s,
            });
          }),
          (n.$17 = function (t, n, o, a) {
            (this.$6.delete(t),
              this.$8.get(t) === n && this.$8.delete(t),
              o(r("err")(String(a))));
          }),
          (n.resetDatagramHealth = function (t) {
            this.$4 &&
              this.$2.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "resetWebTransportDatagramHealth",
                relayGeneration: t,
              });
          }),
          (n.send = function (t, n) {
            if (!this.$4 || this.$6.has(t)) return !1;
            var e = this.$10.get(t);
            if (e != null) return e.producer.write(n);
            try {
              return (
                this.$2.worker.postMessage(
                  {
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "sendWebTransportDatagram",
                    connectionId: t,
                    data: n,
                  },
                  [n],
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          }),
          (n.close = async function (t) {
            var e = this;
            if (this.$4) {
              if (t == null) {
                await Promise.all(
                  Array.from(this.$8.keys()).map(function (t) {
                    return e.$18(t);
                  }),
                );
                return;
              }
              return this.$18(t);
            }
          }),
          (n.$18 = function (t) {
            this.$10.delete(t);
            var e = this.$8.get(t),
              n = this.$7.get(t);
            if (n != null && n.attemptId === e) return n.promise;
            var o = this.$6.get(t);
            if (
              (o != null &&
                (this.$6.delete(t),
                o.reject(r("err")("WebTransport connect aborted"))),
              e == null)
            )
              return Promise.resolve();
            n == null || n.resolve();
            var a = r("WAWebNoop"),
              i = new Promise(function (e) {
                a = function () {
                  return e();
                };
              });
            return (
              this.$7.set(t, { attemptId: e, promise: i, resolve: a }),
              this.$2.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "closeWebTransport",
                connectionId: t,
              }),
              i
            );
          }),
          (n.isActive = function () {
            return this.$4;
          }),
          (n.shutdown = async function () {
            this.$4 &&
              (await this.close(),
              (this.$4 = !1),
              await this.$2.shutdown(),
              (this.$9 = null));
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
