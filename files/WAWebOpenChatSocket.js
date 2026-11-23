__d(
  "WAWebOpenChatSocket",
  [
    "WABase64",
    "WABinary",
    "WACustomError",
    "WAFrameSocket",
    "WALogger",
    "WANoiseHandshake",
    "WAPromiseTimeout",
    "WAResultOrError",
    "WAWapDict",
    "WAWebABProps",
    "WAWebAppCommsCloseReason",
    "WAWebCommonSocketPlatformDetails",
    "WAWebCoreActionsODS",
    "WAWebCryptoCurve25519",
    "WAWebGetClientPayloadForLogin",
    "WAWebGetClientPayloadForRegistration",
    "WAWebNoiseInfoWorkerCompatible",
    "WAWebOpenSocket",
    "WAWebPageLoadLogging",
    "WAWebParseCertificateChain",
    "WAWebProcessCertificate",
    "WAWebProtobufsWa6.pb",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsScreenLockWorkerCompatible",
    "WAWebWamEnumWebcSocketConnectReasonType",
    "WAWebWebcSocketConnectWamEvent",
    "cr:17674",
    "decodeProtobuf",
    "encodeProtobuf",
    "err",
    "getErrorSafe",
    "nullthrows",
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
      $ = 30,
      P = Math.pow(2, 31) - 1,
      N = 6,
      M = new Uint8Array([87, 65, N, o("WAWapDict").DICT_VERSION]),
      w = "Noise_XX_25519_AESGCM_SHA256\0\0\0\0",
      A = "Noise_IK_25519_AESGCM_SHA256\0\0\0\0",
      F = "Noise_XXfallback_25519_AESGCM_SHA256";
    function O(e) {
      return o("WAWebOpenSocket").openWebSocket(e);
    }
    async function B(e, t, n) {
      var r = await o("WAWebUserPrefsMultiDevice").getRoutingInfo(),
        a = r ? r.edgeRouting : null,
        i = a ? o("WABase64").encodeB64UrlSafe(a) : null,
        l = await o("WAWebCryptoCurve25519").keyPair();
      return (
        o("WAWebPageLoadLogging").startPageLoadQplMeasure("socket_open"),
        O(i).then(async function (r) {
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
          var u = i ? o("WABinary").Binary.build(i, M).readByteArrayView() : M,
            c = new (o("WAFrameSocket").FrameSocket)(r, u),
            d = e ? await Y(K) : null;
          if (
            (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
              "auth_handshake",
            ),
            t.startWebcAuthHandshakeDuration(),
            d != null)
          ) {
            (o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
              handshake_path: "resume",
            }),
              o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                "hs_noise_read",
              ));
            var m = await o("WAWebNoiseInfoWorkerCompatible").getNoiseInfo();
            return (
              o("WAWebPageLoadLogging").endPageLoadQplMeasure("hs_noise_read"),
              q(c, n, e, l, m == null ? void 0 : m.staticKeyPair, d)
            );
          }
          return (
            o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
              handshake_path: "full",
            }),
            W(c, l, e, n)
          );
        })
      );
    }
    function W(t, n, r, a) {
      var i = new (o("WANoiseHandshake").NoiseHandshake)(t);
      (i.start(w, M),
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
      return U(i, t, l).then(function (e) {
        return G(i, e, n, r, a);
      });
    }
    function q(e, t, n, a, i, l) {
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
        v.start(A, M),
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
        var s,
          u = l[0],
          c = l[1],
          d = l[2];
        o("WALogger")
          .LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] resumeNoiseHandshake send hello",
              ])),
          )
          .tags("handshake");
        var m = {
          clientHello: ((s = { ephemeral: u, payload: c }), (s.static = d), s),
        };
        return U(v, e, m).then(function (l) {
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
            if (!m) throw r("err")("serverHello missing certificateCiphertext");
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
            H({
              clientEphemeralKeyPair: a,
              isRegistered: n,
              serverHello: l,
              socket: e,
              socketOpenOptions: t,
            })
          );
        });
      });
    }
    function U(e, t, n) {
      var r = e.sendAndReceive(
        o("encodeProtobuf")
          .encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, n)
          .readByteArrayView(),
      );
      return o("WAWebABProps").getABPropConfigValue(
        "web_socket_handshake_timeout_enabled",
      )
        ? o("WAPromiseTimeout")
            .promiseTimeout(r, V())
            .catch(function (e) {
              return (
                e instanceof o("WACustomError").TimeoutError &&
                  t.close(
                    o("WAWebAppCommsCloseReason").AppCommsCloseReason
                      .HandshakeTimeout,
                  ),
                Promise.reject(e)
              );
            })
        : r;
    }
    function V() {
      var e =
        o("WAWebABProps").getABPropConfigValue(
          "web_socket_handshake_timeout_seconds",
        ) * 1e3;
      return Number.isFinite(e) && e > 0 && e <= P ? e : $ * 1e3;
    }
    async function H(e) {
      var t = e.clientEphemeralKeyPair,
        n = e.isRegistered,
        r = e.serverHello,
        a = e.socket,
        i = e.socketOpenOptions,
        l = new (o("WANoiseHandshake").NoiseHandshake)(a);
      return (
        l.start(F, M),
        l.authenticate(t.pubKey),
        o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "[socket] doFallbackHandshake continuing with server hello",
            ])),
        ),
        G(l, r, t, n, i)
      );
    }
    function G(e, t, n, a, i) {
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
          return z({
            certificate: r,
            handshake: e,
            isRegistered: a,
            options: i,
            serverEphemeral: o,
            serverStatic: n,
          });
        })
      );
    }
    async function z(e) {
      var t = e.certificate,
        n = e.handshake,
        a = e.isRegistered,
        i = e.options,
        l = e.serverEphemeral,
        s = e.serverStatic;
      (await o("WAWebProcessCertificate").verifyAndProcessCertificate({
        certificate: t,
        serverStatic: s,
        isRegistered: a,
      }),
        await l);
      var u = a
        ? o("WAWebGetClientPayloadForLogin").getClientPayloadForLogin(i)
        : o(
            "WAWebGetClientPayloadForRegistration",
          ).getClientPayloadForRegistration(i);
      o("WAWebPageLoadLogging").startPageLoadQplMeasure("hs_noise_read");
      var c = await o("WAWebNoiseInfoWorkerCompatible").getNoiseInfo();
      (o("WAWebPageLoadLogging").endPageLoadQplMeasure("hs_noise_read"),
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
          await o("WAWebSocketLogoutJob").socketLogout(),
          r("nullthrows")(c, "Unexpected null: noiseData")));
      var d = r("nullthrows")(c).staticKeyPair;
      return Promise.all([j(d, n, l), n.encrypt(Promise.resolve(u))]).then(
        function (e) {
          var t = e[0],
            r = e[1],
            a = { clientFinish: { static: t, payload: r } };
          return (
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[socket] continueFullHandshakeCore finish + derive secrets",
                ])),
            ),
            n.send(
              o("encodeProtobuf")
                .encodeProtobuf(
                  o("WAWebProtobufsWa6.pb").HandshakeMessageSpec,
                  a,
                )
                .readByteArrayView(),
            ),
            n.finish()
          );
        },
      );
    }
    function j(e, t, n) {
      var a = Promise.resolve(e.pubKey),
        i = t.encrypt(a);
      if (!n)
        return Promise.reject(
          r("err")("staticAgreement called before serverKeys"),
        );
      var l = o("WAWebCryptoCurve25519").sharedSecret(n, e.privKey);
      return (t.mixIntoKey(l), i);
    }
    var K = 0,
      Q = null;
    function X() {
      return Q;
    }
    async function Y(e) {
      if (
        await o(
          "WAWebUserPrefsScreenLockWorkerCompatible",
        ).getScreenLockEnabled()
      )
        return null;
      if (e >= x)
        return (
          o("WALogger")
            .LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[socket] getCertificateChain failed ",
                  "x, fallback",
                ])),
              e,
            )
            .tags("handshake"),
          null
        );
      try {
        var t = await o("WAWebNoiseInfoWorkerCompatible").getNoiseInfo();
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
          ? o("WAWebParseCertificateChain").parseCertificateChain(
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
                  "[socket][unified] getCertificateChain error",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("handshake"),
          null
        );
      }
    }
    async function J(e, t) {
      try {
        var n = e || { passive: !1, pull: !0 },
          a = new (o(
            "WAWebWebcSocketConnectWamEvent",
          ).WebcSocketConnectWamEvent)(),
          i = await B(t, a, n);
        return (
          o("WAWebPageLoadLogging").endPageLoadQplMeasure("auth_handshake"),
          a.markWebcAuthHandshakeDuration(),
          a.commit(),
          (K = 0),
          (Q = null),
          o("WAResultOrError").makeResult(i)
        );
      } catch (e) {
        var l = r("getErrorSafe")(e);
        ((Q = { error: l, atMs: Date.now() }),
          o("WAWebPageLoadLogging").incrementPageLoadQplSocketError());
        var s = Z();
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
    }
    function Z() {
      return self.navigator != null ? self.navigator.onLine : !0;
    }
    async function ee(e, t) {
      return J(e, t);
    }
    ((l.getLastChatSocketOpenError = X), (l.openChatSocket = ee));
  },
  98,
);
