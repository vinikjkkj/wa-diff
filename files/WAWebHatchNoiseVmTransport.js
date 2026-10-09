__d(
  "WAWebHatchNoiseVmTransport",
  [
    "Promise",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebHatchNoiseFramer",
    "WAWebHatchNoiseServiceCodec",
    "WAWebHatchVmTransport",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new Uint8Array(0),
      d = 16 * 1024 * 1024,
      m = 4294967295,
      p = 1024 * 1024,
      _ = 1,
      f = 2,
      g = 3;
    function h(e) {
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
    var y = (function () {
      function t(e, t) {
        ((this.$1 = null),
          (this.$2 = new (o("WAWebHatchNoiseFramer").FrameDecoder)()),
          (this.$3 = 1),
          (this.$4 = new Map()),
          (this.$5 = new Map()),
          (this.$7 = !1),
          (this.$8 = (u || (u = n("Promise"))).resolve()),
          (this.$1 = e),
          (this.$6 = t));
      }
      t.create = function (n, r) {
        var e = new t(n, r);
        return (
          n.attach({
            onClose: function () {
              return e.$9("Noise channel closed");
            },
            onFailure: function (n) {
              return e.$9(n);
            },
            onMessage: function (n) {
              e.$10(n).catch(function () {
                return e.$9("Noise response processing failed");
              });
            },
          }),
          e
        );
      };
      var a = t.prototype;
      return (
        (a.send = function (t) {
          var e = this;
          if (this.$7)
            return (u || (u = n("Promise"))).resolve({
              detail: "Noise channel is unavailable",
              kind: "failure",
              reason: "NO_CHANNEL",
            });
          var r = this.$11();
          if (r == null)
            return (
              this.$9("Noise stream ID space exhausted"),
              (u || (u = n("Promise"))).resolve({
                detail: "Noise stream ID space exhausted",
                kind: "failure",
                reason: "TRANSPORT",
              })
            );
          var o = h(t.service);
          return new (u || (u = n("Promise")))(function (n) {
            var a = self.setTimeout(function () {
              var t,
                a = ((t = e.$4.get(r)) == null ? void 0 : t.isWritten) === !0;
              (e.$4.delete(r),
                n({
                  detail: "VM request timed out",
                  kind: "failure",
                  reason: "TIMEOUT",
                }),
                a && e.$12(r, o, f, "timeout"));
            }, t.timeoutMs);
            (e.$4.set(r, {
              bodyParts: [],
              bodySize: 0,
              isWritten: !1,
              resolve: n,
              service: o,
              statusCode: null,
              timeout: a,
            }),
              e.$13(r, t, o).catch(function () {
                e.$14(r, {
                  detail: "Noise request send failed",
                  kind: "failure",
                  reason: "TRANSPORT",
                });
              }));
          });
        }),
        (a.openStream = function (t, n) {
          var e,
            r = this;
          if (this.$7) return null;
          var a = this.$11();
          if (a == null)
            return (this.$9("Noise stream ID space exhausted"), null);
          var i = h(t.service),
            l = {
              handlers: n,
              isBodyEnded: t.body != null,
              isWritten: !1,
              queuedBytes: 0,
              service: i,
              statusCode: null,
            };
          return (
            this.$5.set(a, l),
            this.$15(
              i,
              {
                kind: "request",
                streamId: a,
                value: {
                  body: (e = t.body) != null ? e : new Uint8Array(0),
                  endBody: l.isBodyEnded,
                  headers: b(this.$6, t),
                  path: o("WAWebHatchVmTransport").serializeJarvisPath(t.path),
                  verb: t.method,
                },
              },
              function () {
                return ((l.isWritten = r.$5.get(a) === l), l.isWritten);
              },
            ).catch(function () {
              return r.$16(a, "Noise request send failed");
            }),
            {
              close: function () {
                r.$5.get(a) === l &&
                  (r.$5.delete(a),
                  r
                    .$15(
                      i,
                      {
                        kind: "reset",
                        streamId: a,
                        value: { code: _, reason: "cancelled" },
                      },
                      function () {
                        return l.isWritten;
                      },
                    )
                    .catch(function () {
                      return r.$9("Noise reset send failed");
                    }));
              },
              write: function (t) {
                return r.$17(a, l, t);
              },
            }
          );
        }),
        (a.$17 = function (t, n, r) {
          var e = this;
          if (
            this.$5.get(t) !== n ||
            n.isBodyEnded ||
            r.length > p - n.queuedBytes
          )
            return !1;
          var o = r.slice();
          return (
            (n.queuedBytes += o.length),
            this.$15(
              n.service,
              {
                kind: "bodyChunk",
                streamId: t,
                value: { data: o, endBody: !1 },
              },
              function () {
                return e.$5.get(t) === n;
              },
            ).then(
              function () {
                n.queuedBytes -= o.length;
              },
              function () {
                return e.$16(t, "Noise stream write failed");
              },
            ),
            !0
          );
        }),
        (a.$13 = function (t, n, r) {
          var e,
            a = this;
          return this.$15(
            r,
            {
              kind: "request",
              streamId: t,
              value: {
                body: (e = n.body) != null ? e : new Uint8Array(0),
                endBody: !0,
                headers: C(this.$6, n.method),
                path: o("WAWebHatchVmTransport").serializeJarvisPath(n.path),
                verb: n.method,
              },
            },
            function () {
              return a.$18(t);
            },
          );
        }),
        (a.$18 = function (t) {
          var e = this.$4.get(t);
          return e == null ? !1 : ((e.isWritten = !0), !0);
        }),
        (a.$12 = function (t, n, r, a) {
          var e = this;
          this.$15(
            n,
            { kind: "reset", streamId: t, value: { code: r, reason: a } },
            o("WAWebBoolFunc").returnTrue,
          ).catch(function () {
            return e.$9("Noise reset send failed");
          });
        }),
        (a.$15 = function (t, n, o) {
          var e = this,
            a = this.$8.then(function () {
              return e.$19(t, n, o);
            });
          return ((this.$8 = a.then(r("WAWebNoop"), r("WAWebNoop"))), a);
        }),
        (a.$19 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, a) {
              if (this.$7)
                throw r("err")("WAWebHatchNoiseVmTransport: channel failed");
              if (a()) {
                var i = this.$20(),
                  l = o("WAWebHatchNoiseFramer").encodeFrames(
                    o("WAWebHatchNoiseServiceCodec").encodeServiceRequest(
                      e,
                      o("WAWebHatchNoiseServiceCodec").encodeServiceFrame(t),
                    ),
                  );
                try {
                  var s = yield (u || (u = n("Promise"))).all(
                    l.map(function (e) {
                      return i.encryptCipher.encryptWithAd(c, e);
                    }),
                  );
                  if (this.$7)
                    throw r("err")(
                      "WAWebHatchNoiseVmTransport: channel failed",
                    );
                  for (var d of s) i.socket.send(d);
                } catch (e) {
                  throw (this.$9("Noise request send failed"), e);
                }
              }
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$10 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (!(e instanceof ArrayBuffer))
              throw r("err")(
                "WAWebHatchNoiseVmTransport: expected binary data",
              );
            var t = yield this.$20().decryptCipher.decryptWithAd(
                c,
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
              var i = this.$5.get(a.streamId);
              if (i != null) {
                e: {
                  var l = a;
                  if (
                    ((typeof l == "object" && l !== null) ||
                      typeof l == "function") &&
                    l.kind === "response" &&
                    "streamId" in l &&
                    "value" in l
                  ) {
                    var s = l.streamId,
                      u = l.value;
                    this.$21(s, i, u);
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
                      this.$22(d, i, "VM response body arrived before headers");
                      return;
                    }
                    this.$23(d, i, m.data, m.endBody);
                    break e;
                  }
                  if (
                    ((typeof l == "object" && l !== null) ||
                      typeof l == "function") &&
                    l.kind === "reset" &&
                    "streamId" in l &&
                    "value" in l
                  ) {
                    var p = l.streamId,
                      _ = l.value;
                    this.$16(p, _.reason);
                    break e;
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      l,
                  );
                }
                return;
              }
              var f = this.$4.get(a.streamId);
              if (f != null)
                e: {
                  var h = a;
                  if (
                    ((typeof h == "object" && h !== null) ||
                      typeof h == "function") &&
                    h.kind === "response" &&
                    "streamId" in h &&
                    "value" in h
                  ) {
                    var y = h.streamId,
                      C = h.value;
                    if (f.statusCode != null) {
                      this.$24(
                        y,
                        "VM sent a second response for one request",
                        g,
                      );
                      return;
                    }
                    if (((f.statusCode = C.status), !this.$25(y, f, C.body)))
                      return;
                    C.endBody && this.$26(y, f);
                    break e;
                  }
                  if (
                    ((typeof h == "object" && h !== null) ||
                      typeof h == "function") &&
                    h.kind === "bodyChunk" &&
                    "streamId" in h &&
                    "value" in h
                  ) {
                    var b = h.streamId,
                      v = h.value;
                    if (f.statusCode == null) {
                      this.$24(b, "VM response body arrived before headers", g);
                      return;
                    }
                    if (!this.$25(b, f, v.data)) return;
                    v.endBody && this.$26(b, f);
                    break e;
                  }
                  if (
                    ((typeof h == "object" && h !== null) ||
                      typeof h == "function") &&
                    h.kind === "reset" &&
                    "streamId" in h &&
                    "value" in h
                  ) {
                    var S = h.streamId,
                      R = h.value;
                    this.$14(S, {
                      detail: R.reason,
                      kind: "failure",
                      reason: "TRANSPORT",
                    });
                    break e;
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      h,
                  );
                }
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$21 = function (t, n, r) {
          if (n.statusCode != null) {
            this.$22(t, n, "VM sent a second response for one request");
            return;
          }
          ((n.statusCode = r.status),
            this.$27(t, n, function () {
              return n.handlers.onResponse(r.status);
            }) && this.$23(t, n, r.body, r.endBody));
        }),
        (a.$23 = function (t, n, r, o) {
          (r.length > 0 &&
            this.$5.get(t) === n &&
            this.$27(t, n, function () {
              return n.handlers.onData(r.slice());
            }),
            o &&
              this.$5.get(t) === n &&
              (this.$16(t, null),
              n.isBodyEnded || this.$12(t, n.service, _, "cancelled")));
        }),
        (a.$27 = function (n, a, i) {
          try {
            return (i(), !0);
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-noise/stream-handler-failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("hatch-noise-stream-handler-failed"),
              this.$22(n, a, "Stream handler failed"),
              !1
            );
          }
        }),
        (a.$22 = function (t, n, r) {
          (this.$16(t, r), this.$12(t, n.service, g, r));
        }),
        (a.$16 = function (t, n) {
          var e = this.$5.get(t);
          if (e != null) {
            this.$5.delete(t);
            try {
              e.handlers.onClose(n);
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-noise/stream-close-handler-failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("hatch-noise-stream-close-handler-failed");
            }
          }
        }),
        (a.$25 = function (t, n, r) {
          return r.length > d - n.bodySize
            ? (this.$24(t, "VM response exceeds size limit", _), !1)
            : ((n.bodySize += r.length), n.bodyParts.push(r.slice()), !0);
        }),
        (a.$26 = function (t, n) {
          var e = n.statusCode;
          if (e == null) {
            this.$14(t, {
              detail: "VM response body arrived before headers",
              kind: "failure",
              reason: "TRANSPORT",
            });
            return;
          }
          var r = new Uint8Array(n.bodySize),
            o = 0;
          for (var a of n.bodyParts) (r.set(a, o), (o += a.length));
          this.$14(t, { body: r, kind: "response", statusCode: e });
        }),
        (a.$24 = function (t, n, r) {
          var e,
            o = (e = this.$4.get(t)) == null ? void 0 : e.service;
          (this.$14(t, { detail: n, kind: "failure", reason: "TRANSPORT" }),
            o != null && this.$12(t, o, r, n));
        }),
        (a.$14 = function (t, n) {
          var e = this.$4.get(t);
          e != null &&
            (this.$4.delete(t), self.clearTimeout(e.timeout), e.resolve(n));
        }),
        (a.$9 = function (t) {
          if (!this.$7) {
            this.$7 = !0;
            var e = this.$20();
            e.close();
            for (var n of this.$4.keys())
              this.$14(n, { detail: t, kind: "failure", reason: "TRANSPORT" });
            for (var r of this.$5.keys()) this.$16(r, t);
          }
        }),
        (a.$20 = function () {
          var e = this.$1;
          if (e == null)
            throw r("err")(
              "WAWebHatchNoiseVmTransport: channel is not initialized",
            );
          return e;
        }),
        (a.$11 = function () {
          if (this.$3 > m) return null;
          var e = this.$3;
          return ((this.$3 += 1), e);
        }),
        t
      );
    })();
    function C(e, t) {
      var n = [v(e)];
      return (
        t !== "GET" &&
          n.push({ key: "Content-Type", value: "application/json" }),
        n
      );
    }
    function b(e, t) {
      var n = [v(e)];
      return (
        t.body != null &&
          n.push({ key: "Content-Type", value: "application/json" }),
        t.accept != null && n.push({ key: "Accept", value: t.accept }),
        n
      );
    }
    function v(e) {
      return { key: "Authorization", value: "Bearer " + e };
    }
    l.default = y;
  },
  98,
);
