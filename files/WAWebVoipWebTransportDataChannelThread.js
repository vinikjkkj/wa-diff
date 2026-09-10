__d(
  "WAWebVoipWebTransportDataChannelThread",
  [
    "Promise",
    "WAWebNoop",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipWebTransportSendRingBuffer",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
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
        t.create = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield r("WAWebVoipJsWorkerThread").create(),
              n = new t(e);
            return (n.$1(), n);
          });
          function o() {
            return e.apply(this, arguments);
          }
          return o;
        })();
        var a = t.prototype;
        return (
          (a.$1 = function () {
            var e = this;
            this.$2.worker.addMessageListener(
              "webTransportState",
              function (t) {
                e.$11(t);
              },
            );
          }),
          (a.$11 = function (t) {
            var e,
              n = t.event === "closed" || t.event === "error";
            (n && this.$12(t.connectionId, t.attemptId),
              !(t.event === "open" && this.$13(t)) &&
                ((n &&
                  (this.$14(t.connectionId, t.attemptId),
                  t.event === "error" && this.$15(t))) ||
                  (e = this.$9) == null ||
                  e.call(this, {
                    connectionId: t.connectionId,
                    attemptId: t.attemptId,
                    event: t.event,
                    error: t.error,
                    stats: t.stats,
                  })));
          }),
          (a.$12 = function (t, n) {
            var e = this.$10.get(t);
            e != null && e.attemptId === n && this.$10.delete(t);
          }),
          (a.$13 = function (t) {
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
          (a.$15 = function (t) {
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
          (a.$14 = function (t, n) {
            this.$8.get(t) === n && this.$8.delete(t);
            var e = this.$7.get(t);
            e != null && e.attemptId === n && (this.$7.delete(t), e.resolve());
          }),
          (a.registerStateHandler = function (t) {
            this.$9 = t;
          }),
          (a.connect = function (a, i, l, s) {
            var t = this;
            return this.$4
              ? this.$6.has(a)
                ? (e || (e = n("Promise"))).reject(
                    r("err")("WebTransport connection already pending: " + a),
                  )
                : new (e || (e = n("Promise")))(function (e, n) {
                    var r = ++t.$5,
                      u = t.$3
                        ? o(
                            "WAWebVoipWebTransportSendRingBuffer",
                          ).createWebTransportSendRing()
                        : null,
                      c = {
                        attemptId: r,
                        reject: n,
                        resolve: e,
                        sendRing: u == null ? void 0 : u.producer,
                      };
                    (t.$6.set(a, c), t.$8.set(a, r));
                    try {
                      t.$16(a, i, l, s, r, u == null ? void 0 : u.ringBuffer);
                      return;
                    } catch (e) {
                      if (u == null) {
                        t.$17(a, r, n, e);
                        return;
                      }
                      ((t.$3 = !1), (c.sendRing = null));
                    }
                    try {
                      t.$16(a, i, l, s, r);
                    } catch (e) {
                      t.$17(a, r, n, e);
                    }
                  })
              : (e || (e = n("Promise"))).reject(
                  r("err")("WebTransport worker is not active"),
                );
          }),
          (a.$16 = function (t, n, r, o, a, i) {
            this.$2.worker.postMessage({
              type: "cmd",
              cmd: "jsWorkerCmd",
              jsWorkerCmd: "openWebTransport",
              connectionId: t,
              url: n,
              ip: r,
              port: o,
              attemptId: a,
              sendRing: i,
            });
          }),
          (a.$17 = function (t, n, o, a) {
            (this.$6.delete(t),
              this.$8.get(t) === n && this.$8.delete(t),
              o(r("err")(String(a))));
          }),
          (a.send = function (t, n) {
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
          (a.close = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this;
                if (this.$4) {
                  if (t == null) {
                    yield (e || (e = n("Promise"))).all(
                      Array.from(this.$8.keys()).map(function (e) {
                        return r.$18(e);
                      }),
                    );
                    return;
                  }
                  return this.$18(t);
                }
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.$18 = function (o) {
            this.$10.delete(o);
            var t = this.$8.get(o),
              a = this.$7.get(o);
            if (a != null && a.attemptId === t) return a.promise;
            var i = this.$6.get(o);
            if (
              (i != null &&
                (this.$6.delete(o),
                i.reject(r("err")("WebTransport connect aborted"))),
              t == null)
            )
              return (e || (e = n("Promise"))).resolve();
            a == null || a.resolve();
            var l = r("WAWebNoop"),
              s = new (e || (e = n("Promise")))(function (e) {
                l = function () {
                  return e();
                };
              });
            return (
              this.$7.set(o, { attemptId: t, promise: s, resolve: l }),
              this.$2.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "closeWebTransport",
                connectionId: o,
              }),
              s
            );
          }),
          (a.isActive = function () {
            return this.$4;
          }),
          (a.shutdown = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.$4 &&
                (yield this.close(),
                (this.$4 = !1),
                yield this.$2.shutdown(),
                (this.$9 = null));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.default = s;
  },
  98,
);
