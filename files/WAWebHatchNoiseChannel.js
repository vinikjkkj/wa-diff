__d(
  "WAWebHatchNoiseChannel",
  [
    "Promise",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebHatchAttestationErrors",
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseIngressUrl",
    "WAWebHatchNoiseRvAuth",
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
      d = new Set(["accepted", "accepted_chip_pinned"]),
      m = (function () {
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
                m = function (n) {
                  return d(h(n), g(n, t.$9));
                },
                _ = !1,
                f = function () {
                  return _ ? "ws_dropped" : "unreachable";
                },
                y = [],
                C = function (t) {
                  t instanceof ArrayBuffer
                    ? y.length >= c
                      ? d(
                          "Noise channel received too many early frames",
                          "handshake_failed",
                        )
                      : y.push(t.slice(0))
                    : d(
                        "Noise channel received non-binary data",
                        "handshake_failed",
                      );
                };
              if (((t.$8 = d), t.$14)) {
                d("channel closed", "closed");
                return;
              }
              var b =
                r.privateAuth == null
                  ? null
                  : {
                      auth: r.privateAuth,
                      clientNonce: o(
                        "WAWebHatchNoiseRvAuth",
                      ).createNoiseClientNonce(),
                      message1Hash: null,
                      notaryToken: r.notaryToken,
                    };
              try {
                var v = o("WAWebHatchNoiseIngressUrl").buildNoiseWsUrl({
                    abraToken: r.abraToken,
                    notaryToken: b == null ? r.notaryToken : null,
                    vmId: r.vmId,
                    appId: p(),
                    appVersion: o("WAWebBuildConstants")
                      .VERSION_BASE_WITH_WINDOWS_BUILD,
                    requestId: t.$6(),
                  }),
                  S = t.$13(v);
                t.$10 = S;
                var R = t.$5();
                ((t.$4 = R),
                  (S.binaryType = "arraybuffer"),
                  (l = t.$7(function () {
                    return d("Noise handshake timed out", "handshake_timeout");
                  }, u)),
                  (S.onerror = function () {
                    return d("Noise WebSocket failed", f());
                  }),
                  (S.onclose = function () {
                    return d("Noise WebSocket closed during handshake", f());
                  }),
                  (S.onopen = function () {
                    ((_ = !0), t.$16(S, R, b).catch(m));
                  }));
                var L = !1;
                S.onmessage = function (n) {
                  if (L) {
                    C(n.data);
                    return;
                  }
                  ((L = !0),
                    t
                      .$17(S, R, n.data, y, b)
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
                      .catch(m));
                };
              } catch (e) {
                d("Noise channel setup failed", "setup_failed");
              }
            });
          }),
          (a.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                if ((yield t.initialize(), this.$14))
                  throw r("err")(
                    "WAWebHatchNoiseChannel: closed during handshake",
                  );
                if (n == null) {
                  e.send(yield t.writeMessage1());
                  return;
                }
                var a = yield t.writeMessage1(
                  o("WAWebHatchNoiseRvAuth").encodeRvMessage1(n.clientNonce),
                );
                ((n.message1Hash = t.handshakeHash().slice()), e.send(a));
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, o, a) {
                var i = this;
                if ((this.$18(), !(n instanceof ArrayBuffer)))
                  throw r("err")(
                    "WAWebHatchNoiseChannel: expected a binary handshake message",
                  );
                var l = yield t.readMessage2(new Uint8Array(n));
                this.$18();
                var s = t.remoteStaticPublicKey();
                if (s == null)
                  throw (
                    (this.$9 = !0),
                    r("err")("WAWebHatchNoiseChannel: attestation rejected")
                  );
                var u =
                  a == null
                    ? yield this.$19(s, t)
                    : yield _(a, l, s, t.handshakeHash().slice());
                (this.$18(), e.send(yield t.writeMessage3(u)), this.$18());
                var d = yield t.split(),
                  m = d[0],
                  p = d[1];
                if ((t.destroy(), this.$14))
                  throw (
                    m.destroy(),
                    p.destroy(),
                    r("err")("WAWebHatchNoiseChannel: closed during handshake")
                  );
                var f = null,
                  g = !1,
                  h = null,
                  y = function (t) {
                    var e;
                    h == null &&
                      ((h = t),
                      (o.length = 0),
                      (e = f) == null || e.onFailure(t));
                  },
                  C = function (t) {
                    (y(t), i.close());
                  },
                  b = function () {
                    if (((o.length = 0), h == null)) {
                      var e;
                      (e = f) == null || e.onClose();
                    }
                  },
                  v = function (t) {
                    if (!(h != null || i.$14)) {
                      if (!(t instanceof ArrayBuffer)) {
                        C("Noise channel received non-binary data");
                        return;
                      }
                      var e = f;
                      e != null
                        ? e.onMessage(t)
                        : o.length >= c
                          ? C("Noise channel received too many early frames")
                          : o.push(t.slice(0));
                    }
                  },
                  S = {
                    attach: function (t) {
                      if (g)
                        throw r("err")(
                          "WAWebHatchNoiseChannel: transport already attached",
                        );
                      if (((g = !0), h != null)) {
                        t.onFailure(h);
                        return;
                      }
                      if (i.$14) {
                        t.onClose();
                        return;
                      }
                      f = t;
                      var e = o.splice(0);
                      for (var n of e) {
                        if (h != null || i.$14) break;
                        t.onMessage(n);
                      }
                    },
                    close: function () {
                      return i.close();
                    },
                    decryptCipher: p,
                    encryptCipher: m,
                    socket: e,
                  };
                return (
                  (this.$12 = b),
                  (this.$11 = S),
                  (this.$4 = null),
                  (e.onopen = null),
                  (e.onmessage = function (e) {
                    return v(e.data);
                  }),
                  (e.onerror = function () {
                    return C("Noise WebSocket failed");
                  }),
                  (e.onclose = function (e) {
                    e.wasClean ? i.close() : C("Noise WebSocket closed");
                  }),
                  S
                );
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$19 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (!(yield this.$1(e, t.handshakeHash())))
                  throw (
                    (this.$9 = !0),
                    r("err")("WAWebHatchNoiseChannel: attestation rejected")
                  );
                return new Uint8Array(0);
              },
            );
            function t(t, n) {
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
    function p() {
      return o("WAWebMobilePlatforms").isSMB()
        ? (656096963291760).toString()
        : (0x97e965c4439a).toString();
    }
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = e.auth,
              l = e.clientNonce,
              s = e.message1Hash,
              u = e.notaryToken,
              c = o("WAWebHatchNoiseRvAuth").decodeRvChallenge(t);
            if (s == null)
              throw r("err")("WAWebHatchNoiseChannel: msg1 hash missing");
            var m = yield i.verifyAttestation({
              attestationBundle: c.attestation,
              clientNonce: l.slice(),
              serverStaticPublicKey: n,
            });
            if (!d.has(m))
              throw new (o(
                "WAWebHatchAttestationErrors",
              ).HatchAttestationError)(
                "PolicyViolation",
                "attestation verdict was not accepted",
              );
            var p = yield i.resolveRvKey();
            try {
              return yield o("WAWebHatchNoiseRvAuth").buildRvMessage3({
                challenge: c,
                clientNonce: l,
                message1Hash: s,
                message2Hash: a,
                notaryToken: u,
                rvKey: p,
              });
            } finally {
              o("WAWebHatchNoiseBytes").zeroBytes(p);
            }
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return t || o("WAWebHatchAttestationErrors").isHatchAttestationError(e)
        ? "attestation_rejected"
        : e instanceof o("WAWebHatchNoiseRvAuth").WAWebHatchNoiseRvError
          ? e.code === "cvm_enrollment_required"
            ? "cvm_enrollment_required"
            : e.code === "cvm_key_rejected"
              ? "cvm_key_rejected"
              : e.code === "malformed_challenge"
                ? "handshake_failed"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e.code,
                    );
                  })()
          : "handshake_failed";
    }
    function h(e) {
      return e instanceof o("WAWebHatchNoiseRvAuth").WAWebHatchNoiseRvError
        ? "Noise handshake failed: " + e.code
        : o("WAWebHatchAttestationErrors").isHatchAttestationError(e)
          ? "Noise handshake failed: attestation " + e.kind
          : "Noise handshake failed";
    }
    ((l.HANDSHAKE_TIMEOUT_MS = u), (l.WAWebHatchNoiseChannel = m));
  },
  98,
);
