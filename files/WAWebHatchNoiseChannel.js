__d(
  "WAWebHatchNoiseChannel",
  [
    "WALogger",
    "WAWebBuildConstants",
    "WAWebHatchAttestationErrors",
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseIngressUrl",
    "WAWebHatchNoiseRvAuth",
    "WAWebHatchNoiseXXInitiator",
    "WAWebMobilePlatforms",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4,
      u = 16,
      c = new Set(["accepted", "accepted_chip_pinned"]),
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
        var n = t.prototype;
        return (
          (n.connect = function (n) {
            var t = this;
            if (this.$15)
              return Promise.resolve({
                cause: "setup_failed",
                detail: "channel already started",
                status: "failed",
              });
            this.$15 = !0;
            var r = this.$3();
            return new Promise(function (a) {
              var i = !1,
                l = null,
                c = function (n, r) {
                  i ||
                    ((i = !0),
                    (t.$8 = null),
                    l != null && t.$2(l),
                    a(n),
                    r && t.close());
                },
                d = function (t, n) {
                  return c({ cause: n, detail: t, status: "failed" }, !0);
                },
                p = function (n) {
                  return d(f(n), _(n, t.$9));
                },
                g = !1,
                h = function () {
                  return g ? "ws_dropped" : "unreachable";
                },
                y = [],
                C = function (t) {
                  t instanceof ArrayBuffer
                    ? y.length >= u
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
                n.privateAuth == null
                  ? null
                  : {
                      auth: n.privateAuth,
                      clientNonce: o(
                        "WAWebHatchNoiseRvAuth",
                      ).createNoiseClientNonce(),
                      message1Hash: null,
                      notaryToken: n.notaryToken,
                    };
              try {
                var v = o("WAWebHatchNoiseIngressUrl").buildNoiseWsUrl({
                    abraToken: n.abraToken,
                    notaryToken: b == null ? n.notaryToken : null,
                    vmId: n.vmId,
                    appId: m(),
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
                  }, s)),
                  (S.onerror = function () {
                    return d("Noise WebSocket failed", h());
                  }),
                  (S.onclose = function () {
                    return d("Noise WebSocket closed during handshake", h());
                  }),
                  (S.onopen = function () {
                    ((g = !0), t.$16(S, R, b).catch(p));
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
                          Math.round(t.$3() - r),
                        ),
                          c({ status: "ready", transport: n }, !1));
                      })
                      .catch(p));
                };
              } catch (e) {
                d("Noise channel setup failed", "setup_failed");
              }
            });
          }),
          (n.$16 = async function (t, n, a) {
            if ((await n.initialize(), this.$14))
              throw r("err")("WAWebHatchNoiseChannel: closed during handshake");
            if (a == null) {
              t.send(await n.writeMessage1());
              return;
            }
            var e = await n.writeMessage1(
              o("WAWebHatchNoiseRvAuth").encodeRvMessage1(a.clientNonce),
            );
            ((a.message1Hash = n.handshakeHash().slice()), t.send(e));
          }),
          (n.$17 = async function (t, n, o, a, i) {
            var e = this;
            if ((this.$18(), !(o instanceof ArrayBuffer)))
              throw r("err")(
                "WAWebHatchNoiseChannel: expected a binary handshake message",
              );
            var l = await n.readMessage2(new Uint8Array(o));
            this.$18();
            var s = n.remoteStaticPublicKey();
            if (s == null)
              throw (
                (this.$9 = !0),
                r("err")("WAWebHatchNoiseChannel: attestation rejected")
              );
            var c =
              i == null
                ? await this.$19(s, n)
                : await p(i, l, s, n.handshakeHash().slice());
            (this.$18(), t.send(await n.writeMessage3(c)), this.$18());
            var d = await n.split(),
              m = d[0],
              _ = d[1];
            if ((n.destroy(), this.$14))
              throw (
                m.destroy(),
                _.destroy(),
                r("err")("WAWebHatchNoiseChannel: closed during handshake")
              );
            var f = null,
              g = !1,
              h = null,
              y = function (t) {
                var e;
                h == null &&
                  ((h = t), (a.length = 0), (e = f) == null || e.onFailure(t));
              },
              C = function (n) {
                (y(n), e.close());
              },
              b = function () {
                if (((a.length = 0), h == null)) {
                  var e;
                  (e = f) == null || e.onClose();
                }
              },
              v = function (n) {
                if (!(h != null || e.$14)) {
                  if (!(n instanceof ArrayBuffer)) {
                    C("Noise channel received non-binary data");
                    return;
                  }
                  var t = f;
                  t != null
                    ? t.onMessage(n)
                    : a.length >= u
                      ? C("Noise channel received too many early frames")
                      : a.push(n.slice(0));
                }
              },
              S = {
                attach: function (n) {
                  if (g)
                    throw r("err")(
                      "WAWebHatchNoiseChannel: transport already attached",
                    );
                  if (((g = !0), h != null)) {
                    n.onFailure(h);
                    return;
                  }
                  if (e.$14) {
                    n.onClose();
                    return;
                  }
                  f = n;
                  var t = a.splice(0);
                  for (var o of t) {
                    if (h != null || e.$14) break;
                    n.onMessage(o);
                  }
                },
                close: function () {
                  return e.close();
                },
                decryptCipher: _,
                encryptCipher: m,
                socket: t,
              };
            return (
              (this.$12 = b),
              (this.$11 = S),
              (this.$4 = null),
              (t.onopen = null),
              (t.onmessage = function (e) {
                return v(e.data);
              }),
              (t.onerror = function () {
                return C("Noise WebSocket failed");
              }),
              (t.onclose = function (t) {
                t.wasClean ? e.close() : C("Noise WebSocket closed");
              }),
              S
            );
          }),
          (n.$19 = async function (t, n) {
            if (!(await this.$1(t, n.handshakeHash())))
              throw (
                (this.$9 = !0),
                r("err")("WAWebHatchNoiseChannel: attestation rejected")
              );
            return new Uint8Array(0);
          }),
          (n.$18 = function () {
            if (this.$14)
              throw r("err")("WAWebHatchNoiseChannel: closed during handshake");
          }),
          (n.close = function () {
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
    async function p(e, t, n, a) {
      var i = e.auth,
        l = e.clientNonce,
        s = e.message1Hash,
        u = e.notaryToken,
        d = o("WAWebHatchNoiseRvAuth").decodeRvChallenge(t);
      if (s == null)
        throw r("err")("WAWebHatchNoiseChannel: msg1 hash missing");
      var m = await i.verifyAttestation({
        attestationBundle: d.attestation,
        clientNonce: l.slice(),
        serverStaticPublicKey: n,
      });
      if (!c.has(m))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "PolicyViolation",
          "attestation verdict was not accepted",
        );
      var p = await i.resolveRvKey();
      try {
        return await o("WAWebHatchNoiseRvAuth").buildRvMessage3({
          challenge: d,
          clientNonce: l,
          message1Hash: s,
          message2Hash: a,
          notaryToken: u,
          rvKey: p,
        });
      } finally {
        o("WAWebHatchNoiseBytes").zeroBytes(p);
      }
    }
    function _(e, t) {
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
    function f(e) {
      return e instanceof o("WAWebHatchNoiseRvAuth").WAWebHatchNoiseRvError
        ? "Noise handshake failed: " + e.code
        : o("WAWebHatchAttestationErrors").isHatchAttestationError(e)
          ? "Noise handshake failed: attestation " + e.kind
          : "Noise handshake failed";
    }
    ((l.HANDSHAKE_TIMEOUT_MS = s), (l.WAWebHatchNoiseChannel = d));
  },
  98,
);
