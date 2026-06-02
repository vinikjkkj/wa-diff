__d(
  "WAWebOpenChatSocket",
  [
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
    "cr:4533",
    "decodeProtobuf",
    "encodeProtobuf",
    "err",
    "getErrorSafe",
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
      x = 1,
      $ = 6,
      P = new Uint8Array([87, 65, $, o("WAWapDict").DICT_VERSION]),
      N = "Noise_XX_25519_AESGCM_SHA256\0\0\0\0",
      M = "Noise_IK_25519_AESGCM_SHA256\0\0\0\0",
      w = "Noise_XXfallback_25519_AESGCM_SHA256";
    function A(e) {
      return o("WAWebOpenSocket").openWebSocket(e);
    }
    async function F(e, t, n) {
      var r = await o("WAWebUserPrefsMultiDevice").getRoutingInfo(),
        a = r ? r.edgeRouting : null,
        i = a ? o("WABase64").encodeB64UrlSafe(a) : null,
        l = await o("WAWebCryptoCurve25519").keyPair();
      return (
        o("WAWebPageLoadLogging").startPageLoadQplMeasure("socket_open"),
        A(i).then(async function (r) {
          var i = void 0;
          if (
            (o("WAWebPageLoadLogging").endPageLoadQplMeasure("socket_open"),
            t.markWebcSocketConnectDuration(),
            (t.webcSocketConnectReason = o(
              "WAWebPageLoadLogging",
            ).wasPageLoadQplLogged()
              ? o("WAWebWamEnumWebcSocketConnectReasonType")
                  .WEBC_SOCKET_CONNECT_REASON_TYPE.RECONNECT
              : o("WAWebWamEnumWebcSocketConnectReasonType")
                  .WEBC_SOCKET_CONNECT_REASON_TYPE.PAGE_LOAD),
            a)
          ) {
            var s = new (o("WABinary").Binary)();
            (s.write("ED", 0, 1),
              s.writeUint8(a.byteLength >> 16),
              s.writeUint16(a.byteLength & 65535),
              s.writeBuffer(a),
              (i = s.readByteArrayView()));
          }
          var u = i ? o("WABinary").Binary.build(i, P).readByteArrayView() : P,
            c = new (o("WAFrameSocket").FrameSocket)(r, u),
            d = e ? await G(H) : null;
          if (
            (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
              "auth_handshake",
            ),
            t.startWebcAuthHandshakeDuration(),
            d != null)
          ) {
            var m = await o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
            return B(c, n, e, l, m == null ? void 0 : m.staticKeyPair, d);
          }
          return O(c, l, e, n);
        })
      );
    }
    function O(t, n, r, a) {
      var i = new (o("WANoiseHandshake").NoiseHandshake)(t);
      (i.start(N, P),
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
          return q(i, e, n, r, a);
        });
    }
    function B(e, t, n, a, i, l) {
      if (i == null)
        return Promise.reject("resumeNoiseHandshake authKeyPair is null");
      var v = new (o("WANoiseHandshake").NoiseHandshake)(e);
      (o("WALogger")
        .LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[socket] resumeNoiseHandshake started",
            ])),
        )
        .tags("handshake"),
        v.start(M, P),
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake auth server static key",
              ])),
          )
          .tags("handshake"),
        v.authenticate(l),
        o("WALogger")
          .LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake auth client ephemeral key",
              ])),
          )
          .tags("handshake"),
        v.authenticate(a.pubKey),
        o("WALogger")
          .LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake EC Agreement 1",
              ])),
          )
          .tags("handshake"),
        v.mixIntoKey(o("WAWebCryptoCurve25519").sharedSecret(l, a.privKey)),
        o("WALogger")
          .LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake encrypt client static key",
              ])),
          )
          .tags("handshake"));
      var S = v.encrypt(Promise.resolve(i.pubKey)).catch(function (e) {
        return (
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "resumeNoiseHandshake failed to encrypt client static key",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          Promise.reject(e)
        );
      });
      (o("WALogger")
        .LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[socket] resumeNoiseHandshake EC Agreement 2",
            ])),
        )
        .tags("handshake"),
        v.mixIntoKey(o("WAWebCryptoCurve25519").sharedSecret(l, i.privKey)));
      var R = n
          ? o("WAWebGetClientPayloadForLogin").getClientPayloadForLogin(t)
          : o(
              "WAWebGetClientPayloadForRegistration",
            ).getClientPayloadForRegistration(t),
        L = v.encrypt(Promise.resolve(R)).catch(function (e) {
          return (
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "resumeNoiseHandshake failed to encrypt client login props",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
            Promise.reject(e)
          );
        });
      return Promise.all([a.pubKey, L, S]).then(function (l) {
        var s = l[0],
          u = l[1],
          c = l[2];
        o("WALogger")
          .LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake send hello",
              ])),
          )
          .tags("handshake");
        var d = { clientHello: { ephemeral: s, payload: u, static: c } };
        return v
          .sendAndReceive(
            o("encodeProtobuf")
              .encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, d)
              .readByteArrayView(),
          )
          .then(function (l) {
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
                l,
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
              if (!m)
                throw r("err")("serverHello missing certificateCiphertext");
              return (
                v.authenticate(d),
                v.mixIntoKey(
                  o("WAWebCryptoCurve25519").sharedSecret(d, a.privKey),
                ),
                v.mixIntoKey(
                  o("WAWebCryptoCurve25519").sharedSecret(d, i.privKey),
                ),
                v.decrypt(m).then(function () {
                  return (
                    o("WALogger")
                      .LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "[socket] resumeNoiseHandshake deriving secrets",
                          ])),
                      )
                      .tags("handshake"),
                    v.finish()
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
              W(e, t, n, a, l)
            );
          });
      });
    }
    async function W(e, t, n, r, a) {
      var i = new (o("WANoiseHandshake").NoiseHandshake)(e);
      return (
        i.start(w, P),
        i.authenticate(r.pubKey),
        o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "[socket] doFallbackHandshake continuing with server hello",
            ])),
        ),
        q(i, a, r, n, t)
      );
    }
    function q(e, t, n, a, i) {
      o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] openChatSocket rcv hello",
          ])),
      );
      var l = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsWa6.pb").HandshakeMessageSpec,
          t,
        ),
        s = l.serverHello;
      if (!s) throw r("err")("ServerHello payload error");
      var u = s.ephemeral,
        c = s.payload,
        d = s.static;
      if (u == null || d == null || c == null)
        throw r("err")("Missing server Ephemeral");
      (e.authenticate(u),
        e.mixIntoKey(o("WAWebCryptoCurve25519").sharedSecret(u, n.privKey)));
      var m = e.decrypt(d),
        p = m.then(function (e) {
          return o("WAWebCryptoCurve25519").sharedSecret(e, n.privKey);
        });
      return (
        e.mixIntoKey(p),
        Promise.all([m, e.decrypt(c), u]).then(function (t) {
          var n = t[0],
            r = t[1],
            o = t[2];
          return U(e, n, r, o, a, i);
        })
      );
    }
    async function U(e, t, n, a, i, l) {
      (await o("WAWebProcessCertificate").verifyAndProcessCertificate({
        certificate: n,
        serverStatic: t,
        isRegistered: i,
      }),
        await a);
      var s = i
          ? o("WAWebGetClientPayloadForLogin").getClientPayloadForLogin(l)
          : o(
              "WAWebGetClientPayloadForRegistration",
            ).getClientPayloadForRegistration(l),
        u = await o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
      u == null &&
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
        await o("WAWebSocketLogoutJob").socketLogout(),
        r("WANullthrows")(u));
      var c = r("WANullthrows")(u).staticKeyPair;
      return Promise.all([V(c, e, a), e.encrypt(Promise.resolve(s))]).then(
        function (t) {
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
        },
      );
    }
    function V(e, t, n) {
      var a = Promise.resolve(e.pubKey),
        i = t.encrypt(a);
      if (!n)
        return Promise.reject(
          r("err")("staticAgreement called before serverKeys"),
        );
      var l = o("WAWebCryptoCurve25519").sharedSecret(n, e.privKey);
      return (t.mixIntoKey(l), i);
    }
    var H = 0;
    async function G(e) {
      if (o("WAWebUserPrefsScreenLock").getScreenLockEnabled()) return null;
      if (e >= x)
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
        var t = await o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
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
        return o("WAWebCommonSocketPlatformDetails").makeServerInfoIfKnown(n);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "[socket][unified] getCertficateChain error",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("handshake"),
          null
        );
      }
    }
    async function z(e, t) {
      try {
        var n = e || { passive: !1, pull: !0 },
          a = new (o(
            "WAWebWebcSocketConnectWamEvent",
          ).WebcSocketConnectWamEvent)(),
          i = await F(t, a, n);
        return (
          o("WAWebPageLoadLogging").endPageLoadQplMeasure("auth_handshake"),
          a.markWebcAuthHandshakeDuration(),
          a.commit(),
          (H = 0),
          o("WAResultOrError").makeResult(i)
        );
      } catch (e) {
        var l = r("getErrorSafe")(e);
        o("WAWebPageLoadLogging").incrementPageLoadQplSocketError();
        var s = j();
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
              l.name,
              l.message,
              s,
            )
            .tags("handshake"),
          s &&
            (H++,
            o("WALogger")
              .ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket][unified] handshake failed. Retry count: ",
                    "",
                  ])),
                H,
              )
              .tags("handshake")
              .sendLogs("handshake-error", { sampling: 0.01 })),
          o("WAResultOrError").makeError("disconnected")
        );
      }
    }
    function j() {
      return self.navigator != null ? self.navigator.onLine : !0;
    }
    async function K(e) {
      var t = o("WAWebUserPrefsMultiDevice").isRegistered();
      return z(e, t);
    }
    l.default = K;
  },
  98,
);
