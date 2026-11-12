__d(
  "WAWebOpenChatSocket",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      x,
      $ = 1,
      P = 30,
      N = Math.pow(2, 31) - 1,
      M = 6,
      w = new Uint8Array([87, 65, M, o("WAWapDict").DICT_VERSION]),
      A = "Noise_XX_25519_AESGCM_SHA256\0\0\0\0",
      F = "Noise_IK_25519_AESGCM_SHA256\0\0\0\0",
      O = "Noise_XXfallback_25519_AESGCM_SHA256";
    function B(e) {
      return o("WAWebOpenSocket").openWebSocket(e);
    }
    function W(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = yield o("WAWebUserPrefsMultiDevice").getRoutingInfo(),
            i = a ? a.edgeRouting : null,
            l = i ? o("WABase64").encodeB64UrlSafe(i) : null,
            s = yield o("WAWebCryptoCurve25519").keyPair();
          return (
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("socket_open"),
            B(l).then(
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
                        ? o("WABinary").Binary.build(a, w).readByteArrayView()
                        : w,
                      c = new (o("WAFrameSocket").FrameSocket)(n, u),
                      d = e ? yield te(J) : null;
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
                      var m = yield o(
                        "WAWebNoiseInfoWorkerCompatible",
                      ).getNoiseInfo();
                      return (
                        o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                          "hs_noise_read",
                        ),
                        V(c, r, e, s, m == null ? void 0 : m.staticKeyPair, d)
                      );
                    }
                    return (
                      o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
                        handshake_path: "full",
                      }),
                      U(c, s, e, r)
                    );
                  },
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })(),
            )
          );
        })),
        q.apply(this, arguments)
      );
    }
    function U(t, n, r, a) {
      var i = new (o("WANoiseHandshake").NoiseHandshake)(t);
      (i.start(A, w),
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
      return H(i, t, l).then(function (e) {
        return K(i, e, n, r, a);
      });
    }
    function V(e, t, a, i, l, v) {
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
        S.start(F, w),
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
              .catching(r("getErrorSafe")(e)),
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
              .catching(r("getErrorSafe")(e)),
            (x || (x = n("Promise"))).reject(e)
          );
        });
      return x.all([i.pubKey, E, R]).then(function (n) {
        var s,
          u = n[0],
          c = n[1],
          d = n[2];
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
        return H(S, e, m).then(function (n) {
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
            z({
              clientEphemeralKeyPair: i,
              isRegistered: a,
              serverHello: n,
              socket: e,
              socketOpenOptions: t,
            })
          );
        });
      });
    }
    function H(e, t, r) {
      var a = e.sendAndReceive(
        o("encodeProtobuf")
          .encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, r)
          .readByteArrayView(),
      );
      return o("WAWebABProps").getABPropConfigValue(
        "web_socket_handshake_timeout_enabled",
      )
        ? o("WAPromiseTimeout")
            .promiseTimeout(a, G())
            .catch(function (e) {
              return (
                e instanceof o("WACustomError").TimeoutError &&
                  t.close(
                    o("WAWebAppCommsCloseReason").AppCommsCloseReason
                      .HandshakeTimeout,
                  ),
                (x || (x = n("Promise"))).reject(e)
              );
            })
        : a;
    }
    function G() {
      var e =
        o("WAWebABProps").getABPropConfigValue(
          "web_socket_handshake_timeout_seconds",
        ) * 1e3;
      return Number.isFinite(e) && e > 0 && e <= N ? e : P * 1e3;
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.clientEphemeralKeyPair,
            n = e.isRegistered,
            r = e.serverHello,
            a = e.socket,
            i = e.socketOpenOptions,
            l = new (o("WANoiseHandshake").NoiseHandshake)(a);
          return (
            l.start(O, w),
            l.authenticate(t.pubKey),
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[socket] doFallbackHandshake continuing with server hello",
                ])),
            ),
            K(l, r, t, n, i)
          );
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t, a, i, l) {
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
          return Q({
            certificate: r,
            handshake: e,
            isRegistered: i,
            options: l,
            serverEphemeral: o,
            serverStatic: n,
          });
        })
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.certificate,
            a = e.handshake,
            i = e.isRegistered,
            l = e.options,
            s = e.serverEphemeral,
            u = e.serverStatic;
          (yield o("WAWebProcessCertificate").verifyAndProcessCertificate({
            certificate: t,
            serverStatic: u,
            isRegistered: i,
          }),
            yield s);
          var c = i
            ? o("WAWebGetClientPayloadForLogin").getClientPayloadForLogin(l)
            : o(
                "WAWebGetClientPayloadForRegistration",
              ).getClientPayloadForRegistration(l);
          o("WAWebPageLoadLogging").startPageLoadQplMeasure("hs_noise_read");
          var d = yield o("WAWebNoiseInfoWorkerCompatible").getNoiseInfo();
          (o("WAWebPageLoadLogging").endPageLoadQplMeasure("hs_noise_read"),
            d == null &&
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
              r("nullthrows")(d, "Unexpected null: noiseData")));
          var m = r("nullthrows")(d).staticKeyPair;
          return (x || (x = n("Promise")))
            .all([Y(m, a, s), a.encrypt(x.resolve(c))])
            .then(function (e) {
              var t = e[0],
                n = e[1],
                r = { clientFinish: { static: t, payload: n } };
              return (
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket] continueFullHandshakeCore finish + derive secrets",
                    ])),
                ),
                a.send(
                  o("encodeProtobuf")
                    .encodeProtobuf(
                      o("WAWebProtobufsWa6.pb").HandshakeMessageSpec,
                      r,
                    )
                    .readByteArrayView(),
                ),
                a.finish()
              );
            });
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t, a) {
      var i = (x || (x = n("Promise"))).resolve(e.pubKey),
        l = t.encrypt(i);
      if (!a)
        return (x || (x = n("Promise"))).reject(
          r("err")("staticAgreement called before serverKeys"),
        );
      var s = o("WAWebCryptoCurve25519").sharedSecret(a, e.privKey);
      return (t.mixIntoKey(s), l);
    }
    var J = 0,
      Z = null;
    function ee() {
      return Z;
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            yield o(
              "WAWebUserPrefsScreenLockWorkerCompatible",
            ).getScreenLockEnabled()
          )
            return null;
          if (e >= $)
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
            var t = yield o("WAWebNoiseInfoWorkerCompatible").getNoiseInfo();
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
            return o("WAWebCommonSocketPlatformDetails").makeServerInfoIfKnown(
              n,
            );
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
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e, t) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = e || { passive: !1, pull: !0 },
              a = new (o(
                "WAWebWebcSocketConnectWamEvent",
              ).WebcSocketConnectWamEvent)(),
              i = yield W(t, a, n);
            return (
              o("WAWebPageLoadLogging").endPageLoadQplMeasure("auth_handshake"),
              a.markWebcAuthHandshakeDuration(),
              a.commit(),
              (J = 0),
              (Z = null),
              o("WAResultOrError").makeResult(i)
            );
          } catch (e) {
            var l = r("getErrorSafe")(e);
            ((Z = { error: l, atMs: Date.now() }),
              o("WAWebPageLoadLogging").incrementPageLoadQplSocketError());
            var s = ae();
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
                (J++,
                o("WALogger")
                  .ERROR(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[socket][unified] handshake failed. Retry count: ",
                        "",
                      ])),
                    J,
                  )
                  .tags("handshake")
                  .sendLogs("handshake-error", { sampling: 0.01 })),
              o("WAResultOrError").makeError("disconnected")
            );
          }
        })),
        oe.apply(this, arguments)
      );
    }
    function ae() {
      return self.navigator != null ? self.navigator.onLine : !0;
    }
    function ie(e, t) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return re(e, t);
        })),
        le.apply(this, arguments)
      );
    }
    ((l.getLastChatSocketOpenError = ee), (l.openChatSocket = ie));
  },
  98,
);
