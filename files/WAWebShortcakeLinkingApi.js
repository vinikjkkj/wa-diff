__d(
  "WAWebShortcakeLinkingApi",
  [
    "invariant",
    "$InternalEnum",
    "WALogger",
    "WAWebBackendApi",
    "WAWebProtobufsCompanionReg.pb",
    "WAWebShortcakeLinkingAlgorithm",
    "WAWebShortcakeLinkingHandoffProof",
    "WAWebShortcakeLinkingIq",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
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
      L = n("$InternalEnum").Mirrored([
        "NotStarted",
        "Initialized",
        "WaitingForPrimaryIdentity",
        "WaitingForVerificationCodeConfirmation",
        "WaitingForPairingCompletion",
      ]),
      E = 12e4,
      k = (function () {
        function e() {
          ((this.epoch = 0),
            (this.stage = L.NotStarted),
            (this.keypair = null),
            (this.companionNonce = null),
            (this.deviceType = null),
            (this.ref = null),
            (this.encryptionKey = null),
            (this.verificationCode = null),
            (this.prologuePayloadBytes = null),
            (this.skipHandoffUx = !1),
            (this.timeoutId = null));
        }
        var t = e.prototype;
        return (
          (t.clear = function () {
            (this.epoch++,
              this.timeoutId != null && self.clearTimeout(this.timeoutId),
              (this.stage = L.NotStarted),
              (this.keypair = null),
              (this.companionNonce = null),
              (this.deviceType = null),
              (this.ref = null),
              (this.encryptionKey = null),
              (this.verificationCode = null),
              (this.prologuePayloadBytes = null),
              (this.skipHandoffUx = !1),
              (this.timeoutId = null));
          }),
          e
        );
      })(),
      I = new k();
    function T() {
      return I.stage;
    }
    function D() {
      return I.verificationCode;
    }
    function x() {
      I.skipHandoffUx = !0;
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: initializing",
              ])),
          ),
            I.clear());
          var n = yield o(
            "WAWebShortcakeLinkingAlgorithm",
          ).generateCompanionEphemeralKeypair(e, t);
          return (
            (I.keypair = n.keypair),
            (I.companionNonce = n.companionNonce),
            (I.deviceType = t),
            (I.ref = e),
            (I.prologuePayloadBytes = n.prologuePayloadBytes),
            (I.stage = L.Initialized),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "Shortcake: initialized, prologue payload ready",
                ])),
            ),
            n.prologuePayloadBytes
          );
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      (I.stage === L.Initialized || s(0, 152465, String(I.stage)),
        (I.stage = L.WaitingForPrimaryIdentity),
        (I.timeoutId = self.setTimeout(function () {
          (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: timed out waiting for PrimaryEphemeralIdentity",
              ])),
          ),
            I.clear(),
            o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
              reason: "timeout",
            }));
        }, E)),
        o("WAWebBackendApi").frontendFireAndForget("shortcakePrologueSent", {}),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Shortcake: prologue sent, awaiting PrimaryEphemeralIdentity",
            ])),
        ));
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: received PrimaryEphemeralIdentity",
              ])),
          ),
            I.stage === L.WaitingForPrimaryIdentity ||
              s(0, 152467, String(I.stage)));
          var t = I.companionNonce,
            n = I.keypair,
            a = I.deviceType,
            i = I.ref;
          if (t == null || n == null || a == null || i == null)
            throw r("err")(
              "Shortcake: missing state for handlePrimaryEphemeralIdentity",
            );
          var l = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsCompanionReg.pb").PrimaryEphemeralIdentitySpec,
              e,
            ),
            u = l.publicKey;
          if (u == null || u.byteLength !== 32)
            throw r("err")(
              "Shortcake: PrimaryEphemeralIdentity.publicKey must be 32 bytes",
            );
          (I.timeoutId != null &&
            (self.clearTimeout(I.timeoutId), (I.timeoutId = null)),
            (I.stage = L.WaitingForVerificationCodeConfirmation));
          var c = I.epoch;
          try {
            (yield o("WAWebShortcakeLinkingIq").sendCompanionNonce(t),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake: CompanionNonce sent",
                  ])),
              ));
            var d = yield o(
                "WAWebShortcakeLinkingAlgorithm",
              ).deriveVerificationCode(t, l),
              m = yield o("WAWebShortcakeLinkingAlgorithm").deriveEncryptionKey(
                n.privKey,
                u,
                a,
                i,
              );
            if (I.epoch !== c)
              throw (
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "Shortcake: cancelled in handlePrimaryEphemeralIdentity",
                    ])),
                ),
                r("err")("Shortcake: cancelled")
              );
            return (
              (I.encryptionKey = m),
              (I.verificationCode = d),
              (I.timeoutId = self.setTimeout(function () {
                (o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "Shortcake: timeout awaiting verification code",
                    ])),
                ),
                  I.clear(),
                  o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
                    reason: "timeout",
                  }));
              }, E)),
              o("WAWebBackendApi").frontendFireAndForget(
                "shortcakeVerificationCodeReady",
                { verificationCode: d, skipHandoffUx: I.skipHandoffUx },
              ),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake: verification code ready, awaiting user",
                  ])),
              ),
              d
            );
          } catch (e) {
            throw (
              I.epoch === c &&
                (I.clear(),
                o("WALogger").ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "Shortcake: handlePrimaryEphemeralIdentity failed",
                    ])),
                ),
                o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
                  reason: "server_error",
                })),
              e
            );
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: user confirmed verification code",
              ])),
          ),
            I.stage === L.WaitingForVerificationCodeConfirmation ||
              s(0, 152466, String(I.stage)));
          var t = I.encryptionKey;
          if (t == null) throw r("err")("Shortcake: missing encryption key");
          (I.timeoutId != null &&
            (self.clearTimeout(I.timeoutId), (I.timeoutId = null)),
            (I.stage = L.WaitingForPairingCompletion));
          var n = I.epoch;
          try {
            var a = yield o(
                "WAWebShortcakeLinkingAlgorithm",
              ).encryptPairingRequest(e, t),
              i = a.encryptedPayload,
              l = a.iv,
              u = o("encodeProtobuf")
                .encodeProtobuf(
                  o("WAWebProtobufsCompanionReg.pb")
                    .EncryptedPairingRequestSpec,
                  { encryptedPayload: i, iv: l },
                )
                .readBuffer();
            if (
              (yield o("WAWebShortcakeLinkingIq").sendEncryptedPairingRequest(
                new Uint8Array(u),
              ),
              I.epoch !== n)
            )
              throw (
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "Shortcake: cancelled in confirmVerificationCode",
                    ])),
                ),
                r("err")("Shortcake: cancelled")
              );
            ((I.keypair = null),
              (I.companionNonce = null),
              (I.encryptionKey = null),
              (I.timeoutId = self.setTimeout(function () {
                (o("WALogger").WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "Shortcake: timed out waiting for pairing completion",
                    ])),
                ),
                  I.clear(),
                  o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
                    reason: "timeout",
                  }));
              }, E)),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake: EncryptedPairingRequest sent, awaiting pairing",
                  ])),
              ));
          } catch (e) {
            throw (
              I.epoch === n &&
                (I.clear(),
                o("WALogger").ERROR(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "Shortcake: confirmVerificationCode failed",
                    ])),
                ),
                o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
                  reason: "server_error",
                })),
              e
            );
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake: cancelling",
          ])),
      ),
        o("WAWebShortcakeLinkingHandoffProof").getHandoffKeyHolder().clear(),
        I.clear());
    }
    ((l.ShortcakeLinkingStage = L),
      (l.getShortcakeLinkingStage = T),
      (l.getVerificationCode = D),
      (l.setSkipHandoffUx = x),
      (l.initializeShortcakeLinking = $),
      (l.markPrologueSent = N),
      (l.handlePrimaryEphemeralIdentity = M),
      (l.confirmVerificationCode = A),
      (l.cancelShortcakeLinking = O));
  },
  98,
);
