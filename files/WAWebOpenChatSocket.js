__d(
  "WAWebOpenChatSocket",
  [
    "Promise",
    "WABase64",
    "WABinary",
    "WAFrameSocket",
    "WALogger",
    "WANoiseHandshake",
    "WANullthrows",
    "WAResultOrError",
    "WAWapDict",
    "WAWebCommonSocketPlatformDetails",
    "WAWebCoreActionsODS",
    "WAWebCryptoCurve25519",
    "WAWebGetClientPayloadForLogin",
    "WAWebGetClientPayloadForRegistration",
    "WAWebOpenSocket",
    "WAWebPageLoadLogging",
    "WAWebProcessCertificate",
    "WAWebProtobufsWa6.pb",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsInfoStore",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumWebcSocketConnectReasonType",
    "WAWebWebcSocketConnectWamEvent",
    "asyncToGeneratorRuntime",
    "cr:4533",
    "decodeProtobuf",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
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
      D,
      x,
      $ = 1,
      P = 6,
      N = new Uint8Array([87, 65, P, o("WAWapDict").DICT_VERSION]),
      M = "Noise_XX_25519_AESGCM_SHA256\0\0\0\0",
      w = "Noise_IK_25519_AESGCM_SHA256\0\0\0\0",
      A = "Noise_XXfallback_25519_AESGCM_SHA256";
    function F(e) {
      return o("WAWebOpenSocket").openWebSocket(e);
    }
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = yield o("WAWebUserPrefsMultiDevice").getRoutingInfo(),
            i = a ? a.edgeRouting : null,
            l = i ? o("WABase64").encodeB64UrlSafe(i) : null,
            s = yield o("WAWebCryptoCurve25519").keyPair();
          return (
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("socket_open"),
            F(l).then(
              (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var a = void 0;
                    if (
                      (o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                        "socket_open",
                      ),
                      t.markWebcSocketConnectDuration(),
                      (t.webcSocketConnectReason = o(
                        "WAWebPageLoadLogging",
                      ).wasPageLoadQplLogged()
                        ? o("WAWebWamEnumWebcSocketConnectReasonType")
                            .WEBC_SOCKET_CONNECT_REASON_TYPE.RECONNECT
                        : o("WAWebWamEnumWebcSocketConnectReasonType")
                            .WEBC_SOCKET_CONNECT_REASON_TYPE.PAGE_LOAD),
                      i)
                    ) {
                      var l = new (o("WABinary").Binary)();
                      (l.write("ED", 0, 1),
                        l.writeUint8(i.byteLength >> 16),
                        l.writeUint16(i.byteLength & 65535),
                        l.writeBuffer(i),
                        (a = l.readByteArrayView()));
                    }
                    var u = a
                        ? o("WABinary").Binary.build(a, N).readByteArrayView()
                        : N,
                      c = new (o("WAFrameSocket").FrameSocket)(n, u),
                      d = e ? yield Q(K) : null;
                    if (
                      (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                        "auth_handshake",
                      ),
                      t.startWebcAuthHandshakeDuration(),
                      d != null)
                    ) {
                      var m = yield o(
                        "WAWebUserPrefsInfoStore",
                      ).waNoiseInfo.get();
                      return q(
                        c,
                        r,
                        e,
                        s,
                        m == null ? void 0 : m.staticKeyPair,
                        d,
                      );
                    }
                    return W(c, s, e, r);
                  },
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })(),
            )
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W(t, n, r, a) {
      var i = new (o("WANoiseHandshake").NoiseHandshake)(t);
      (i.start(M, N),
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] doFullHandshake: openChatSocket send hello",
              ])),
          )
          .tags("handshake"),
        i.authenticate(n.pubKey));
      var l = { clientHello: { ephemeral: n.pubKey } };
      return i
        .sendAndReceive(
          o("encodeProtobuf")
            .encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, l)
            .readByteArrayView(),
        )
        .then(function (e) {
          return H(i, e, n, r, a);
        });
    }
    function q(e, t, a, i, l, v) {
      if (l == null)
        return (x || (x = n("Promise"))).reject(
          "resumeNoiseHandshake authKeyPair is null",
        );
      var S = new (o("WANoiseHandshake").NoiseHandshake)(e);
      (o("WALogger")
        .LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[socket] resumeNoiseHandshake started",
            ])),
        )
        .tags("handshake"),
        S.start(w, N),
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake auth server static key",
              ])),
          )
          .tags("handshake"),
        S.authenticate(v),
        o("WALogger")
          .LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake auth client ephemeral key",
              ])),
          )
          .tags("handshake"),
        S.authenticate(i.pubKey),
        o("WALogger")
          .LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake EC Agreement 1",
              ])),
          )
          .tags("handshake"),
        S.mixIntoKey(o("WAWebCryptoCurve25519").sharedSecret(v, i.privKey)),
        o("WALogger")
          .LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake encrypt client static key",
              ])),
          )
          .tags("handshake"));
      var R = S.encrypt((x || (x = n("Promise"))).resolve(l.pubKey)).catch(
        function (e) {
          return (
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "resumeNoiseHandshake failed to encrypt client static key",
                  ])),
              )
              .catching(e),
            (x || (x = n("Promise"))).reject(e)
          );
        },
      );
      (o("WALogger")
        .LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[socket] resumeNoiseHandshake EC Agreement 2",
            ])),
        )
        .tags("handshake"),
        S.mixIntoKey(o("WAWebCryptoCurve25519").sharedSecret(v, l.privKey)));
      var L = a
          ? o("WAWebGetClientPayloadForLogin").getClientPayloadForLogin(t)
          : o(
              "WAWebGetClientPayloadForRegistration",
            ).getClientPayloadForRegistration(t),
        E = S.encrypt(x.resolve(L)).catch(function (e) {
          return (
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "resumeNoiseHandshake failed to encrypt client login props",
                  ])),
              )
              .catching(e),
            (x || (x = n("Promise"))).reject(e)
          );
        });
      return x.all([i.pubKey, E, R]).then(function (n) {
        var s = n[0],
          u = n[1],
          c = n[2];
        o("WALogger")
          .LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake send hello",
              ])),
          )
          .tags("handshake");
        var d = { clientHello: { ephemeral: s, payload: u, static: c } };
        return S.sendAndReceive(
          o("encodeProtobuf")
            .encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, d)
            .readByteArrayView(),
        ).then(function (n) {
          o("WALogger")
            .LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[socket] resumeNoiseHandshake rcv hello",
                ])),
            )
            .tags("handshake");
          var s = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsWa6.pb").HandshakeMessageSpec,
              n,
            ),
            u = s.serverHello,
            c = u || {},
            d = c.ephemeral,
            m = c.payload,
            p = c.static;
          if (p == null) {
            if (
              (o("WALogger")
                .LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket] resumeNoiseHandshake continuing resume handshake",
                    ])),
                )
                .tags("handshake"),
              !d)
            )
              throw r("err")("serverHello missing serverEphemeral");
            if (!m) throw r("err")("serverHello missing certificateCiphertext");
            return (
              S.authenticate(d),
              S.mixIntoKey(
                o("WAWebCryptoCurve25519").sharedSecret(d, i.privKey),
              ),
              S.mixIntoKey(
                o("WAWebCryptoCurve25519").sharedSecret(d, l.privKey),
              ),
              S.decrypt(m).then(function () {
                return (
                  o("WALogger")
                    .LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[socket] resumeNoiseHandshake deriving secrets",
                        ])),
                    )
                    .tags("handshake"),
                  S.finish()
                );
              })
            );
          }
          return (
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[socket] resumeNoiseHandshake failed: static ciphertext !null",
                ])),
            ),
            U(e, t, a, i, n)
          );
        });
      });
    }
    function U(e, t, n, r, o) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = new (o("WANoiseHandshake").NoiseHandshake)(e);
            return (
              i.start(A, N),
              i.authenticate(r.pubKey),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] doFallbackHandshake continuing with server hello",
                  ])),
              ),
              H(i, a, r, n, t)
            );
          },
        )),
        V.apply(this, arguments)
      );
    }
    function H(e, t, a, i, l) {
      o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] openChatSocket rcv hello",
          ])),
      );
      var s = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsWa6.pb").HandshakeMessageSpec,
          t,
        ),
        u = s.serverHello;
      if (!u) throw r("err")("ServerHello payload error");
      var c = u.ephemeral,
        d = u.payload,
        m = u.static;
      if (c == null || m == null || d == null)
        throw r("err")("Missing server Ephemeral");
      (e.authenticate(c),
        e.mixIntoKey(o("WAWebCryptoCurve25519").sharedSecret(c, a.privKey)));
      var p = e.decrypt(m),
        _ = p.then(function (e) {
          return o("WAWebCryptoCurve25519").sharedSecret(e, a.privKey);
        });
      return (
        e.mixIntoKey(_),
        (x || (x = n("Promise"))).all([p, e.decrypt(d), c]).then(function (t) {
          var n = t[0],
            r = t[1],
            o = t[2];
          return G(e, n, r, o, i, l);
        })
      );
    }
    function G(e, t, n, r, o, a) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            (yield o("WAWebProcessCertificate").verifyAndProcessCertificate({
              certificate: a,
              serverStatic: t,
              isRegistered: l,
            }),
              yield i);
            var u = l
                ? o("WAWebGetClientPayloadForLogin").getClientPayloadForLogin(s)
                : o(
                    "WAWebGetClientPayloadForRegistration",
                  ).getClientPayloadForRegistration(s),
              c = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
            c == null &&
              (o("WALogger")
                .LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket] Unable to decrypt noise data",
                    ])),
                )
                .tags("launch-socket-chat", "handshake"),
              o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout(),
              o("WAWebCoreActionsODS").logSessionForcedLogout(),
              yield o("WAWebSocketLogoutJob").socketLogout(),
              r("WANullthrows")(c));
            var d = r("WANullthrows")(c).staticKeyPair;
            return (x || (x = n("Promise")))
              .all([j(d, e, i), e.encrypt(x.resolve(u))])
              .then(function (t) {
                var n = t[0],
                  r = t[1],
                  a = { clientFinish: { static: n, payload: r } };
                return (
                  o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[socket] continueFullHandshakeCore finish + derive secrets",
                      ])),
                  ),
                  e.send(
                    o("encodeProtobuf")
                      .encodeProtobuf(
                        o("WAWebProtobufsWa6.pb").HandshakeMessageSpec,
                        a,
                      )
                      .readByteArrayView(),
                  ),
                  e.finish()
                );
              });
          },
        )),
        z.apply(this, arguments)
      );
    }
    function j(e, t, a) {
      var i = (x || (x = n("Promise"))).resolve(e.pubKey),
        l = t.encrypt(i);
      if (!a)
        return (x || (x = n("Promise"))).reject(
          r("err")("staticAgreement called before serverKeys"),
        );
      var s = o("WAWebCryptoCurve25519").sharedSecret(a, e.privKey);
      return (t.mixIntoKey(s), l);
    }
    var K = 0;
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebUserPrefsScreenLock").getScreenLockEnabled()) return null;
          if (e >= $)
            return (
              o("WALogger")
                .LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket] getCertficateChain failed ",
                      "x, fallback",
                    ])),
                  e,
                )
                .tags("handshake"),
              null
            );
          try {
            var t = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
            if (t == null)
              return (
                o("WALogger")
                  .LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to decrypt noise data for resume handshake",
                      ])),
                  )
                  .tags("launch-socket-chat"),
                null
              );
            var n = t.certificateChainBuffer
              ? o("WAWebUserPrefsInfoStore").waNoiseInfo.getCertficateChain(
                  t.certificateChainBuffer,
                )
              : null;
            return o("WAWebCommonSocketPlatformDetails").makeServerInfoIfKnown(
              n,
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket][unified] getCertficateChain error",
                    ])),
                )
                .catching(e)
                .tags("handshake"),
              null
            );
          }
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = e || { passive: !1, pull: !0 },
              r = new (o(
                "WAWebWebcSocketConnectWamEvent",
              ).WebcSocketConnectWamEvent)(),
              a = yield O(t, r, n);
            return (
              o("WAWebPageLoadLogging").endPageLoadQplMeasure("auth_handshake"),
              r.markWebcAuthHandshakeDuration(),
              r.commit(),
              (K = 0),
              o("WAResultOrError").makeResult(a)
            );
          } catch (e) {
            o("WAWebPageLoadLogging").incrementPageLoadQplSocketError();
            var i = Z();
            return (
              o("WALogger")
                .LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket][unified] handshake failed with ",
                      ", msg: ",
                      ", network: ",
                      "",
                    ])),
                  e.name,
                  e.message,
                  i,
                )
                .tags("handshake"),
              i &&
                (K++,
                o("WALogger")
                  .ERROR(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[socket][unified] handshake failed. Retry count: ",
                        "",
                      ])),
                    K,
                  )
                  .tags("handshake")
                  .sendLogs("handshake-error", { sampling: 0.01 })),
              o("WAResultOrError").makeError("disconnected")
            );
          }
        })),
        J.apply(this, arguments)
      );
    }
    function Z() {
      return self.navigator != null ? self.navigator.onLine : !0;
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsMultiDevice").isRegistered();
          return Y(e, t);
        })),
        te.apply(this, arguments)
      );
    }
    l.default = ee;
  },
  98,
);
