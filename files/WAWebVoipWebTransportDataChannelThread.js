__d(
  "WAWebVoipWebTransportDataChannelThread",
  [
    "Promise",
    "WAWebNoop",
    "WAWebVoipJsWorkerThread",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          ((this.$3 = !0),
            (this.$4 = new Map()),
            (this.$5 = new Map()),
            (this.$6 = new Set()),
            (this.$7 = null),
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
        var o = t.prototype;
        return (
          (o.$1 = function () {
            var e = this;
            this.$2.worker.addMessageListener(
              "webTransportState",
              function (t) {
                var n = e.$4.get(t.connectionId);
                if (n != null && t.event === "open") {
                  (e.$4.delete(t.connectionId), n.resolve());
                  return;
                }
                if (t.event === "closed" || t.event === "error") {
                  e.$6.delete(t.connectionId);
                  var o = e.$5.get(t.connectionId);
                  o != null && (e.$5.delete(t.connectionId), o.resolve());
                }
                if (n != null && t.event === "error") {
                  var a;
                  (e.$4.delete(t.connectionId),
                    n.reject(
                      (a = t.error) != null
                        ? a
                        : r("err")("WebTransport worker connect failed"),
                    ));
                  return;
                }
                e.$7 == null ||
                  e.$7({
                    connectionId: t.connectionId,
                    event: t.event,
                    error: t.error,
                    stats: t.stats,
                  });
              },
            );
          }),
          (o.registerStateHandler = function (t) {
            this.$7 = t;
          }),
          (o.connect = function (o, a, i, l) {
            var t = this;
            return this.$3
              ? this.$4.has(o)
                ? (e || (e = n("Promise"))).reject(
                    r("err")("WebTransport connection already pending: " + o),
                  )
                : new (e || (e = n("Promise")))(function (e, n) {
                    (t.$4.set(o, { resolve: e, reject: n }), t.$6.add(o));
                    try {
                      t.$2.worker.postMessage({
                        type: "cmd",
                        cmd: "jsWorkerCmd",
                        jsWorkerCmd: "openWebTransport",
                        connectionId: o,
                        url: a,
                        ip: i,
                        port: l,
                      });
                    } catch (e) {
                      (t.$4.delete(o), t.$6.delete(o), n(r("err")(String(e))));
                    }
                  })
              : (e || (e = n("Promise"))).reject(
                  r("err")("WebTransport worker is not active"),
                );
          }),
          (o.send = function (t, n) {
            if (!this.$3) return !1;
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
          (o.close = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this;
                if (this.$3) {
                  if (t == null) {
                    yield (e || (e = n("Promise"))).all(
                      Array.from(this.$6).map(function (e) {
                        return r.$8(e);
                      }),
                    );
                    return;
                  }
                  return this.$8(t);
                }
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (o.$8 = function (o) {
            var t = this.$5.get(o);
            if (t != null) return t.promise;
            var a = this.$4.get(o);
            if (
              (a != null &&
                (this.$4.delete(o),
                a.reject(r("err")("WebTransport connect aborted"))),
              !this.$6.has(o))
            )
              return (e || (e = n("Promise"))).resolve();
            var i = r("WAWebNoop"),
              l = new (e || (e = n("Promise")))(function (e) {
                i = function () {
                  return e();
                };
              });
            return (
              this.$5.set(o, { promise: l, resolve: i }),
              this.$2.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "closeWebTransport",
                connectionId: o,
              }),
              l
            );
          }),
          (o.isActive = function () {
            return this.$3;
          }),
          (o.shutdown = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.$3 &&
                (yield this.close(),
                (this.$3 = !1),
                yield this.$2.shutdown(),
                (this.$7 = null));
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
