__d(
  "WAWebHatchNoiseChannel",
  [
    "Promise",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseIngressUrl",
    "WAWebHatchNoiseXXInitiator",
    "WAWebMobilePlatforms",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3e4,
      c = 16,
      d = (function () {
        function t(e) {
          var t, n, r, a, i, l;
          ((this.$4 = null),
            (this.$8 = null),
            (this.$9 = !1),
            (this.$10 = null),
            (this.$11 = null),
            (this.$12 = null),
            (this.$14 = !1),
            (this.$15 = !1),
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
            (this.$13 =
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
            if (this.$15)
              return (s || (s = n("Promise"))).resolve({
                cause: "setup_failed",
                detail: "channel already started",
                status: "failed",
              });
            this.$15 = !0;
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
                d = function (t, n) {
                  return s({ cause: n, detail: t, status: "failed" }, !0);
                },
                p = !1,
                _ = function () {
                  return p ? "ws_dropped" : "unreachable";
                },
                f = [],
                g = function (t) {
                  t instanceof ArrayBuffer
                    ? f.length >= c
                      ? d(
                          "Noise channel received too many early frames",
                          "handshake_failed",
                        )
                      : f.push(t.slice(0))
                    : d(
                        "Noise channel received non-binary data",
                        "handshake_failed",
                      );
                };
              if (((t.$8 = d), t.$14)) {
                d("channel closed", "closed");
                return;
              }
              try {
                var h = o("WAWebHatchNoiseIngressUrl").buildNoiseWsUrl(
                    babelHelpers.extends({}, r, {
                      appId: m(),
                      appVersion: o("WAWebBuildConstants")
                        .VERSION_BASE_WITH_WINDOWS_BUILD,
                      requestId: t.$6(),
                    }),
                  ),
                  y = t.$13(h);
                t.$10 = y;
                var C = t.$5();
                ((t.$4 = C),
                  (y.binaryType = "arraybuffer"),
                  (l = t.$7(function () {
                    return d("Noise handshake timed out", "handshake_timeout");
                  }, u)),
                  (y.onerror = function () {
                    return d("Noise WebSocket failed", _());
                  }),
                  (y.onclose = function () {
                    return d("Noise WebSocket closed during handshake", _());
                  }),
                  (y.onopen = function () {
                    ((p = !0),
                      t.$16(y, C).catch(function () {
                        return d("Noise handshake failed", "handshake_failed");
                      }));
                  }));
                var b = !1;
                y.onmessage = function (n) {
                  if (b) {
                    g(n.data);
                    return;
                  }
                  ((b = !0),
                    t
                      .$17(y, C, n.data, f)
                      .then(function (n) {
                        if (t.$14) {
                          d("channel closed", "closed");
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
                        return d(
                          "Noise handshake failed",
                          t.$9 ? "attestation_rejected" : "handshake_failed",
                        );
                      }));
                };
              } catch (e) {
                d("Noise channel setup failed", "setup_failed");
              }
            });
          }),
          (a.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if ((yield t.initialize(), this.$14))
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
          (a.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, o) {
                var a = this;
                if ((this.$18(), !(n instanceof ArrayBuffer)))
                  throw r("err")(
                    "WAWebHatchNoiseChannel: expected a binary handshake message",
                  );
                (yield t.readMessage2(new Uint8Array(n)), this.$18());
                var i = t.remoteStaticPublicKey();
                if (i == null || !(yield this.$1(i, t.handshakeHash())))
                  throw (
                    (this.$9 = !0),
                    r("err")("WAWebHatchNoiseChannel: attestation rejected")
                  );
                (this.$18(), e.send(yield t.writeMessage3()), this.$18());
                var l = yield t.split(),
                  s = l[0],
                  u = l[1];
                if ((t.destroy(), this.$14))
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
                    if (!(p != null || a.$14)) {
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
                      if (a.$14) {
                        t.onClose();
                        return;
                      }
                      d = t;
                      var e = o.splice(0);
                      for (var n of e) {
                        if (p != null || a.$14) break;
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
                  (this.$12 = g),
                  (this.$11 = y),
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
          (a.$18 = function () {
            if (this.$14)
              throw r("err")("WAWebHatchNoiseChannel: closed during handshake");
          }),
          (a.close = function () {
            var e, t, n, r;
            if (!this.$14) {
              this.$14 = !0;
              var o = this.$8;
              this.$8 = null;
              var a = this.$12;
              ((this.$12 = null),
                o == null || o("channel closed", "closed"),
                a == null || a(),
                (e = this.$4) == null || e.destroy(),
                (t = this.$11) == null || t.encryptCipher.destroy(),
                (n = this.$11) == null || n.decryptCipher.destroy(),
                this.$10 != null &&
                  ((this.$10.onopen = null),
                  (this.$10.onmessage = null),
                  (this.$10.onerror = null),
                  (this.$10.onclose = null)),
                (r = this.$10) == null || r.close(),
                (this.$4 = null),
                (this.$11 = null),
                (this.$10 = null));
            }
          }),
          t
        );
      })();
    function m() {
      return o("WAWebMobilePlatforms").isSMB()
        ? (656096963291760).toString()
        : (0x97e965c4439a).toString();
    }
    ((l.HANDSHAKE_TIMEOUT_MS = u), (l.WAWebHatchNoiseChannel = d));
  },
  98,
);
