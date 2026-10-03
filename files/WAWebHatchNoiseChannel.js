__d(
  "WAWebHatchNoiseChannel",
  [
    "Promise",
    "WALogger",
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseIngressUrl",
    "WAWebHatchNoiseXXInitiator",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3e4,
      c = 16,
      d = "hatch-web",
      m = (function () {
        function t(e) {
          var t, n, r, a, i, l;
          ((this.$4 = null),
            (this.$8 = null),
            (this.$9 = null),
            (this.$10 = null),
            (this.$11 = null),
            (this.$13 = !1),
            (this.$14 = !1),
            (this.$1 = e.attestationVerifier),
            (this.$2 =
              (t = e.clearWatchdog) != null
                ? t
                : function (e) {
                    return self.clearTimeout(e);
                  }),
            (this.$3 =
              (n = e.clock) != null
                ? n
                : function () {
                    return self.performance.now();
                  }),
            (this.$5 =
              (r = e.handshakeFactory) != null
                ? r
                : function () {
                    return new (o(
                      "WAWebHatchNoiseXXInitiator",
                    ).WAWebHatchNoiseXXInitiator)();
                  }),
            (this.$6 =
              (a = e.requestIdFactory) != null
                ? a
                : function () {
                    return o("WAWebHatchNoiseBytes").bytesToHex(
                      crypto.getRandomValues(new Uint8Array(16)),
                    );
                  }),
            (this.$7 =
              (i = e.setWatchdog) != null
                ? i
                : function (e, t) {
                    return self.setTimeout(e, t);
                  }),
            (this.$12 =
              (l = e.webSocketFactory) != null
                ? l
                : function (e) {
                    return new WebSocket(e);
                  }));
        }
        var a = t.prototype;
        return (
          (a.connect = function (r) {
            var t = this;
            if (this.$14)
              return (s || (s = n("Promise"))).resolve({
                detail: "channel already started",
                status: "failed",
              });
            this.$14 = !0;
            var a = this.$3();
            return new (s || (s = n("Promise")))(function (n) {
              var i = !1,
                l = null,
                s = function (r, o) {
                  i ||
                    ((i = !0),
                    (t.$8 = null),
                    l != null && t.$2(l),
                    n(r),
                    o && t.close());
                },
                m = function (t) {
                  return s({ detail: t, status: "failed" }, !0);
                },
                p = [],
                _ = function (t) {
                  t instanceof ArrayBuffer
                    ? p.length >= c
                      ? m("Noise channel received too many early frames")
                      : p.push(t.slice(0))
                    : m("Noise channel received non-binary data");
                };
              if (((t.$8 = m), t.$13)) {
                m("channel closed");
                return;
              }
              try {
                var f = o("WAWebHatchNoiseIngressUrl").buildNoiseWsUrl(
                    babelHelpers.extends({}, r, {
                      appId: d,
                      requestId: t.$6(),
                    }),
                  ),
                  g = t.$12(f);
                t.$9 = g;
                var h = t.$5();
                ((t.$4 = h),
                  (g.binaryType = "arraybuffer"),
                  (l = t.$7(function () {
                    return m("Noise handshake timed out");
                  }, u)),
                  (g.onerror = function () {
                    return m("Noise WebSocket failed");
                  }),
                  (g.onclose = function () {
                    return m("Noise WebSocket closed during handshake");
                  }),
                  (g.onopen = function () {
                    t.$15(g, h).catch(function () {
                      return m("Noise handshake failed");
                    });
                  }));
                var y = !1;
                g.onmessage = function (n) {
                  if (y) {
                    _(n.data);
                    return;
                  }
                  ((y = !0),
                    t
                      .$16(g, h, n.data, p)
                      .then(function (n) {
                        if (t.$13) {
                          m("channel closed");
                          return;
                        }
                        (o("WALogger").LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[HatchNoiseChannel] handshake completed in ",
                              " ms",
                            ])),
                          Math.round(t.$3() - a),
                        ),
                          s({ status: "ready", transport: n }, !1));
                      })
                      .catch(function () {
                        return m("Noise handshake failed");
                      }));
                };
              } catch (e) {
                m("Noise channel setup failed");
              }
            });
          }),
          (a.$15 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if ((yield t.initialize(), this.$13))
                  throw r("err")(
                    "WAWebHatchNoiseChannel: closed during handshake",
                  );
                e.send(yield t.writeMessage1());
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, o) {
                var a = this;
                if ((this.$17(), !(n instanceof ArrayBuffer)))
                  throw r("err")(
                    "WAWebHatchNoiseChannel: expected a binary handshake message",
                  );
                (yield t.readMessage2(new Uint8Array(n)), this.$17());
                var i = t.remoteStaticPublicKey();
                if (i == null || !(yield this.$1(i, t.handshakeHash())))
                  throw r("err")(
                    "WAWebHatchNoiseChannel: attestation rejected",
                  );
                (this.$17(), e.send(yield t.writeMessage3()), this.$17());
                var l = yield t.split(),
                  s = l[0],
                  u = l[1];
                if ((t.destroy(), this.$13))
                  throw (
                    s.destroy(),
                    u.destroy(),
                    r("err")("WAWebHatchNoiseChannel: closed during handshake")
                  );
                var d = null,
                  m = !1,
                  p = null,
                  _ = function (t) {
                    var e;
                    p == null &&
                      ((p = t),
                      (o.length = 0),
                      (e = d) == null || e.onFailure(t));
                  },
                  f = function (t) {
                    (_(t), a.close());
                  },
                  g = function () {
                    if (((o.length = 0), p == null)) {
                      var e;
                      (e = d) == null || e.onClose();
                    }
                  },
                  h = function (t) {
                    if (!(p != null || a.$13)) {
                      if (!(t instanceof ArrayBuffer)) {
                        f("Noise channel received non-binary data");
                        return;
                      }
                      var e = d;
                      e != null
                        ? e.onMessage(t)
                        : o.length >= c
                          ? f("Noise channel received too many early frames")
                          : o.push(t.slice(0));
                    }
                  },
                  y = {
                    attach: function (t) {
                      if (m)
                        throw r("err")(
                          "WAWebHatchNoiseChannel: transport already attached",
                        );
                      if (((m = !0), p != null)) {
                        t.onFailure(p);
                        return;
                      }
                      if (a.$13) {
                        t.onClose();
                        return;
                      }
                      d = t;
                      var e = o.splice(0);
                      for (var n of e) {
                        if (p != null || a.$13) break;
                        t.onMessage(n);
                      }
                    },
                    close: function () {
                      return a.close();
                    },
                    decryptCipher: u,
                    encryptCipher: s,
                    socket: e,
                  };
                return (
                  (this.$11 = g),
                  (this.$10 = y),
                  (this.$4 = null),
                  (e.onopen = null),
                  (e.onmessage = function (e) {
                    return h(e.data);
                  }),
                  (e.onerror = function () {
                    return f("Noise WebSocket failed");
                  }),
                  (e.onclose = function (e) {
                    e.wasClean ? a.close() : f("Noise WebSocket closed");
                  }),
                  y
                );
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$17 = function () {
            if (this.$13)
              throw r("err")("WAWebHatchNoiseChannel: closed during handshake");
          }),
          (a.close = function () {
            var e, t, n, r;
            if (!this.$13) {
              this.$13 = !0;
              var o = this.$8;
              this.$8 = null;
              var a = this.$11;
              ((this.$11 = null),
                o == null || o("channel closed"),
                a == null || a(),
                (e = this.$4) == null || e.destroy(),
                (t = this.$10) == null || t.encryptCipher.destroy(),
                (n = this.$10) == null || n.decryptCipher.destroy(),
                this.$9 != null &&
                  ((this.$9.onopen = null),
                  (this.$9.onmessage = null),
                  (this.$9.onerror = null),
                  (this.$9.onclose = null)),
                (r = this.$9) == null || r.close(),
                (this.$4 = null),
                (this.$10 = null),
                (this.$9 = null));
            }
          }),
          t
        );
      })();
    ((l.HANDSHAKE_TIMEOUT_MS = u), (l.WAWebHatchNoiseChannel = m));
  },
  98,
);
