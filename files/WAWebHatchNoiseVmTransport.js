__d(
  "WAWebHatchNoiseVmTransport",
  [
    "Promise",
    "WAWebHatchNoiseFramer",
    "WAWebHatchNoiseServiceCodec",
    "WAWebHatchVmTransport",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Uint8Array(0),
      u = 16 * 1024 * 1024,
      c = 4294967295,
      d = 1,
      m = 2,
      p = 3;
    function _(e) {
      return e === "authd"
        ? o("WAWebHatchNoiseServiceCodec").WAWebHatchNoiseService.AUTHD
        : e === "sentinel"
          ? o("WAWebHatchNoiseServiceCodec").WAWebHatchNoiseService.SENTINEL
          : e === "daemon" || e === null || e === void 0
            ? o("WAWebHatchNoiseServiceCodec").WAWebHatchNoiseService.DAEMON
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    var f = (function () {
      function t(t, r) {
        ((this.$1 = null),
          (this.$2 = new (o("WAWebHatchNoiseFramer").FrameDecoder)()),
          (this.$3 = 1),
          (this.$4 = new Map()),
          (this.$6 = !1),
          (this.$7 = (e || (e = n("Promise"))).resolve()),
          (this.$1 = t),
          (this.$5 = r));
      }
      t.create = function (n, r) {
        var e = new t(n, r);
        return (
          n.attach({
            onClose: function () {
              return e.$8("Noise channel closed");
            },
            onFailure: function (n) {
              return e.$8(n);
            },
            onMessage: function (n) {
              e.$9(n).catch(function () {
                return e.$8("Noise response processing failed");
              });
            },
          }),
          e
        );
      };
      var a = t.prototype;
      return (
        (a.send = function (r) {
          var t = this;
          if (this.$6)
            return (e || (e = n("Promise"))).resolve({
              detail: "Noise channel is unavailable",
              kind: "failure",
              reason: "NO_CHANNEL",
            });
          var o = this.$10();
          if (o == null)
            return (
              this.$8("Noise stream ID space exhausted"),
              (e || (e = n("Promise"))).resolve({
                detail: "Noise stream ID space exhausted",
                kind: "failure",
                reason: "TRANSPORT",
              })
            );
          var a = _(r.service);
          return new (e || (e = n("Promise")))(function (e) {
            var n = self.setTimeout(function () {
              var n,
                r = ((n = t.$4.get(o)) == null ? void 0 : n.isWritten) === !0;
              (t.$4.delete(o),
                e({
                  detail: "VM request timed out",
                  kind: "failure",
                  reason: "TIMEOUT",
                }),
                r && t.$11(o, a, m, "timeout"));
            }, r.timeoutMs);
            (t.$4.set(o, {
              bodyParts: [],
              bodySize: 0,
              isWritten: !1,
              resolve: e,
              service: a,
              statusCode: null,
              timeout: n,
            }),
              t.$12(o, r, a).catch(function () {
                t.$13(o, {
                  detail: "Noise request send failed",
                  kind: "failure",
                  reason: "TRANSPORT",
                });
              }));
          });
        }),
        (a.$12 = function (t, n, r) {
          var e,
            a = this;
          return this.$14(
            r,
            {
              kind: "request",
              streamId: t,
              value: {
                body: (e = n.body) != null ? e : new Uint8Array(0),
                endBody: !0,
                headers: g(this.$5, n.method),
                path: o("WAWebHatchVmTransport").serializeJarvisPath(n.path),
                verb: n.method,
              },
            },
            function () {
              return a.$15(t);
            },
          );
        }),
        (a.$15 = function (t) {
          var e = this.$4.get(t);
          return e == null ? !1 : ((e.isWritten = !0), !0);
        }),
        (a.$11 = function (t, n, r, o) {
          var e = this;
          this.$14(
            n,
            { kind: "reset", streamId: t, value: { code: r, reason: o } },
            function () {
              return !0;
            },
          ).catch(function () {
            return e.$8("Noise reset send failed");
          });
        }),
        (a.$14 = function (t, n, o) {
          var e = this,
            a = this.$7.then(function () {
              return e.$16(t, n, o);
            });
          return ((this.$7 = a.then(r("WAWebNoop"), r("WAWebNoop"))), a);
        }),
        (a.$16 = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, a, i) {
              if (this.$6)
                throw r("err")("WAWebHatchNoiseVmTransport: channel failed");
              if (i()) {
                var l = this.$17(),
                  u = o("WAWebHatchNoiseFramer").encodeFrames(
                    o("WAWebHatchNoiseServiceCodec").encodeServiceRequest(
                      t,
                      o("WAWebHatchNoiseServiceCodec").encodeServiceFrame(a),
                    ),
                  );
                try {
                  var c = yield (e || (e = n("Promise"))).all(
                    u.map(function (e) {
                      return l.encryptCipher.encryptWithAd(s, e);
                    }),
                  );
                  if (this.$6)
                    throw r("err")(
                      "WAWebHatchNoiseVmTransport: channel failed",
                    );
                  for (var d of c) l.socket.send(d);
                } catch (e) {
                  throw (this.$8("Noise request send failed"), e);
                }
              }
            },
          );
          function a(e, n, r) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (a.$9 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (!(e instanceof ArrayBuffer))
              throw r("err")(
                "WAWebHatchNoiseVmTransport: expected binary data",
              );
            var t = yield this.$17().decryptCipher.decryptWithAd(
                s,
                new Uint8Array(e),
              ),
              n = this.$2.decode(t);
            if (n != null) {
              var a = o("WAWebHatchNoiseServiceCodec").decodeServiceFrame(
                o("WAWebHatchNoiseServiceCodec").decodeServiceResponse(n),
              );
              if (a.kind === "request")
                throw r("err")(
                  "WAWebHatchNoiseVmTransport: unexpected request frame",
                );
              var i = this.$4.get(a.streamId);
              if (i != null)
                e: {
                  var l = a;
                  if (
                    ((typeof l == "object" && l !== null) ||
                      typeof l == "function") &&
                    l.kind === "response" &&
                    "streamId" in l &&
                    "value" in l
                  ) {
                    var u = l.streamId,
                      c = l.value;
                    if (i.statusCode != null) {
                      this.$18(
                        u,
                        "VM sent a second response for one request",
                        p,
                      );
                      return;
                    }
                    if (((i.statusCode = c.status), !this.$19(u, i, c.body)))
                      return;
                    c.endBody && this.$20(u, i);
                    break e;
                  }
                  if (
                    ((typeof l == "object" && l !== null) ||
                      typeof l == "function") &&
                    l.kind === "bodyChunk" &&
                    "streamId" in l &&
                    "value" in l
                  ) {
                    var d = l.streamId,
                      m = l.value;
                    if (i.statusCode == null) {
                      this.$18(d, "VM response body arrived before headers", p);
                      return;
                    }
                    if (!this.$19(d, i, m.data)) return;
                    m.endBody && this.$20(d, i);
                    break e;
                  }
                  if (
                    ((typeof l == "object" && l !== null) ||
                      typeof l == "function") &&
                    l.kind === "reset" &&
                    "streamId" in l &&
                    "value" in l
                  ) {
                    var _ = l.streamId,
                      f = l.value;
                    this.$13(_, {
                      detail: f.reason,
                      kind: "failure",
                      reason: "TRANSPORT",
                    });
                    break e;
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      l,
                  );
                }
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$19 = function (t, n, r) {
          return r.length > u - n.bodySize
            ? (this.$18(t, "VM response exceeds size limit", d), !1)
            : ((n.bodySize += r.length), n.bodyParts.push(r.slice()), !0);
        }),
        (a.$20 = function (t, n) {
          var e = n.statusCode;
          if (e == null) {
            this.$13(t, {
              detail: "VM response body arrived before headers",
              kind: "failure",
              reason: "TRANSPORT",
            });
            return;
          }
          var r = new Uint8Array(n.bodySize),
            o = 0;
          for (var a of n.bodyParts) (r.set(a, o), (o += a.length));
          this.$13(t, { body: r, kind: "response", statusCode: e });
        }),
        (a.$18 = function (t, n, r) {
          var e,
            o = (e = this.$4.get(t)) == null ? void 0 : e.service;
          (this.$13(t, { detail: n, kind: "failure", reason: "TRANSPORT" }),
            o != null && this.$11(t, o, r, n));
        }),
        (a.$13 = function (t, n) {
          var e = this.$4.get(t);
          e != null &&
            (this.$4.delete(t), self.clearTimeout(e.timeout), e.resolve(n));
        }),
        (a.$8 = function (t) {
          if (!this.$6) {
            this.$6 = !0;
            var e = this.$17();
            e.close();
            for (var n of this.$4.keys())
              this.$13(n, { detail: t, kind: "failure", reason: "TRANSPORT" });
          }
        }),
        (a.$17 = function () {
          var e = this.$1;
          if (e == null)
            throw r("err")(
              "WAWebHatchNoiseVmTransport: channel is not initialized",
            );
          return e;
        }),
        (a.$10 = function () {
          if (this.$3 > c) return null;
          var e = this.$3;
          return ((this.$3 += 1), e);
        }),
        t
      );
    })();
    function g(e, t) {
      var n = [{ key: "Authorization", value: "Bearer " + e }];
      return (
        t !== "GET" &&
          n.push({ key: "Content-Type", value: "application/json" }),
        n
      );
    }
    l.default = f;
  },
  98,
);
