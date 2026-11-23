__d(
  "WAOpenChatSocket",
  [
    "WABinary",
    "WACryptoCurve25519",
    "WAFrameSocket",
    "WALogger",
    "WANoiseHandshake",
    "WAResultOrError",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D = "Noise_XX_25519_AESGCM_SHA256\0\0\0\0",
      x = "Noise_IK_25519_AESGCM_SHA256\0\0\0\0",
      $ = "Noise_XXfallback_25519_AESGCM_SHA256";
    function P(t, n, a, i, l) {
      var u = n || {},
        c = u.ephemeral,
        d = u.payload,
        m = u.static;
      if (c == null || m == null || d == null)
        return Promise.reject(
          r("err")("doFullHandshakeCore server hello invalid proto"),
        );
      (t.authenticate(c), t.mixIntoKey(i.generateSharedSecret(c)));
      var p = t.decrypt(m, "doFullHandshakeCore: serverStaticCiphertext");
      t.mixIntoKey(
        p.then(function (e) {
          return i.generateSharedSecret(e);
        }),
      );
      var _ = t.decrypt(d, "doFullHandshakeCore: serverStaticCiphertext");
      return Promise.all([p, _])
        .then(function (t) {
          var n = t[0],
            r = t[1];
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "doFullHandshakeCore parsing and verifying server certificate",
                ])),
            ),
            l.processCertificate({ certificate: r, serverStatic: n })
          );
        })
        .then(function () {
          var e = t.encrypt(l.staticKeyPair.generatePublicKey());
          t.mixIntoKey(l.staticKeyPair.generateSharedSecret(c));
          var n = t.encrypt(Promise.resolve(a));
          return Promise.all([e, n]);
        })
        .then(function (e) {
          var n = e[0],
            r = e[1];
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "doFullHandshakeCore client finish and deriving secrets",
                ])),
            ),
            t.send(l.encodeHandshakeFinish({ static: n, payload: r })),
            t.finish()
          );
        });
    }
    function N(e, t, n, r) {
      var a = new (o("WANoiseHandshake").NoiseHandshake)(e);
      a.start(D, r.protoHeader);
      var i = n.generatePublicKey();
      return (
        a.authenticate(i),
        i
          .then(function (e) {
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "fullNoiseHandshake send hello",
                  ])),
              ),
              a.sendAndReceive(r.encodeHandshakeHello({ ephemeral: e }))
            );
          })
          .then(function (e) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "fullNoiseHandshake rcv hello",
                ])),
            );
            var i = r.decodeServerHello(e);
            return P(a, i, t, n, r);
          })
      );
    }
    function M(e, t, n, a, i) {
      var l = new (o("WANoiseHandshake").NoiseHandshake)(e);
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "resumeNoiseHandshake started",
          ])),
      ),
        l.start(x, i.protoHeader));
      var s = a.generatePublicKey();
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "resumeNoiseHandshake authenticate with server static key",
          ])),
      ),
        l.authenticate(n),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "resumeNoiseHandshake authenticate with client ephemeral key",
            ])),
        ),
        l.authenticate(s),
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "resumeNoiseHandshake EC Agreement 1",
            ])),
        ),
        l.mixIntoKey(a.generateSharedSecret(n)),
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "resumeNoiseHandshake encrypt client static key",
            ])),
        ));
      var u = l
        .encrypt(i.staticKeyPair.generatePublicKey())
        .catch(function (e) {
          return (
            o("WALogger").ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "resumeNoiseHandshake failed to encrypt client static key: ",
                  "",
                ])),
              e,
            ),
            Promise.reject(e)
          );
        });
      (o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "resumeNoiseHandshake EC Agreement 2",
          ])),
      ),
        l.mixIntoKey(i.staticKeyPair.generateSharedSecret(n)));
      var c = l.encrypt(Promise.resolve(t)).catch(function (e) {
        return (
          o("WALogger").ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "resumeNoiseHandshake failed to encrypt client login props: ",
                "",
              ])),
            e,
          ),
          Promise.reject(e)
        );
      });
      return Promise.all([s, c, u])
        .then(function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "resumeNoiseHandshake send hello",
                ])),
            ),
            l.sendAndReceive(
              i.encodeHandshakeHello({ ephemeral: t, payload: n, static: r }),
            )
          );
        })
        .then(function (n) {
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "resumeNoiseHandshake rcv hello",
              ])),
          );
          var s = i.decodeServerHello(n),
            u = s || {},
            c = u.ephemeral,
            d = u.payload,
            m = u.static;
          if (m == null) {
            if (
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "resumeNoiseHandshake continuing resume handshake",
                  ])),
              ),
              !c)
            )
              throw r("err")("serverHello missing serverEphemeral");
            if (!d) throw r("err")("serverHello missing certificateCiphertext");
            return (
              l.authenticate(c),
              l.mixIntoKey(a.generateSharedSecret(c)),
              l.mixIntoKey(i.staticKeyPair.generateSharedSecret(c)),
              l
                .decrypt(d, "doResumeHandshake: certificateCiphertext")
                .then(function () {
                  return (
                    o("WALogger").LOG(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "resumeNoiseHandshake deriving secrets",
                        ])),
                    ),
                    l.finish()
                  );
                })
                .catch(function (n) {
                  if ((n == null ? void 0 : n.name) === "OperationError")
                    return N(e, t, a, i);
                  throw n;
                })
            );
          } else
            return (
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "resumeNoiseHandshake performing fallback handshake",
                  ])),
              ),
              w(e, s, t, a, i)
            );
        });
    }
    function w(e, t, n, r, a) {
      var i = new (o("WANoiseHandshake").NoiseHandshake)(e);
      i.start($, a.protoHeader);
      var l = r.generatePublicKey();
      return (
        i.authenticate(l),
        o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "doFallbackHandshake continuing handshake with given server hello",
            ])),
        ),
        P(i, t, n, r, a)
      );
    }
    function A(e, t, n) {
      return e.openSocket(n).then(async function (n) {
        if (!n.success) return n;
        var r = n.value;
        Promise.resolve()
          .then(t)
          .catch(function (e) {
            o("WALogger").ERROR(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "openChatSocket onTcp error: ",
                  "",
                ])),
              e,
            );
          });
        var a = void 0,
          i = e.edgeInfo;
        if (i) {
          var l = new (o("WABinary").Binary)();
          (l.write("ED", 0, 1),
            l.writeUint8(i.byteLength >> 16),
            l.writeUint16(i.byteLength & 65535),
            l.writeBuffer(i),
            (a = l.readByteArrayView()),
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "openChatSocket preIntro ",
                  "",
                ])),
              a,
            ));
        }
        var s = a
            ? o("WABinary").Binary.build(a, e.protoHeader).readByteArrayView()
            : e.protoHeader,
          u = new (o("WAFrameSocket").FrameSocket)(r, s),
          c = await e.getClientPayload(),
          d = new (o("WACryptoCurve25519").Curve25519)(
            e.curveSignalDependencies,
          ),
          m = e.serverStaticKeyIfKnown();
        if (m) {
          var p;
          return (
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "openChatSocket performing resume handshake",
                ])),
            ),
            (p = e.preLogging) == null ||
              p.onBeforeResumeHandshakeStarted == null ||
              p.onBeforeResumeHandshakeStarted(),
            M(u, c, m, d, e)
              .then(function (t) {
                var n;
                return (
                  (n = e.preLogging) == null ||
                    n.onAfterResumeHandshakeCompleted == null ||
                    n.onAfterResumeHandshakeCompleted(),
                  o("WAResultOrError").makeResult(t)
                );
              })
              .catch(function (t) {
                var n;
                return (
                  (n = e.preLogging) == null ||
                    n.onHandshakeError == null ||
                    n.onHandshakeError(t),
                  Promise.reject(t)
                );
              })
          );
        } else {
          var _;
          return (
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "openChatSocket performing full handshake",
                ])),
            ),
            (_ = e.preLogging) == null ||
              _.onBeforeFullHandshakeStarted == null ||
              _.onBeforeFullHandshakeStarted(),
            N(u, c, d, e)
              .then(function (t) {
                var n;
                return (
                  (n = e.preLogging) == null ||
                    n.onAfterFullHandshakeCompleted == null ||
                    n.onAfterFullHandshakeCompleted(),
                  o("WAResultOrError").makeResult(t)
                );
              })
              .catch(function (t) {
                var n;
                return (
                  (n = e.preLogging) == null ||
                    n.onHandshakeError == null ||
                    n.onHandshakeError(t),
                  Promise.reject(t)
                );
              })
          );
        }
      });
    }
    l.openChatSocket = A;
  },
  98,
);
