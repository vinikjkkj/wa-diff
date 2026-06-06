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
      return I.prologuePayloadBytes;
    }
    function $() {
      return I.skipHandoffUx;
    }
    function P() {
      I.skipHandoffUx = !0;
    }
    async function N(t, n) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake: initializing",
          ])),
      ),
        I.clear());
      var r = await o(
        "WAWebShortcakeLinkingAlgorithm",
      ).generateCompanionEphemeralKeypair(t, n);
      return (
        (I.keypair = r.keypair),
        (I.companionNonce = r.companionNonce),
        (I.deviceType = n),
        (I.ref = t),
        (I.prologuePayloadBytes = r.prologuePayloadBytes),
        (I.stage = L.Initialized),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Shortcake: initialized, prologue payload ready",
            ])),
        ),
        r.prologuePayloadBytes
      );
    }
    function M() {
      (I.stage === L.Initialized || s(0, 152465, String(I.stage)),
        (I.stage = L.WaitingForPrimaryIdentity),
        (I.timeoutId = self.setTimeout(function () {
          (o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "Shortcake: prologue sent, awaiting PrimaryEphemeralIdentity",
            ])),
        ));
    }
    async function w(e) {
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
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
        (await o("WAWebShortcakeLinkingIq").sendCompanionNonce(t),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: CompanionNonce sent",
              ])),
          ));
        var d = await o(
            "WAWebShortcakeLinkingAlgorithm",
          ).deriveVerificationCode(t, l),
          y = await o("WAWebShortcakeLinkingAlgorithm").deriveEncryptionKey(
            n.privKey,
            u,
            a,
            i,
          );
        if (I.epoch !== c)
          throw (
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "Shortcake: cancelled in handlePrimaryEphemeralIdentity",
                ])),
            ),
            r("err")("Shortcake: cancelled")
          );
        return (
          (I.encryptionKey = y),
          (I.verificationCode = d),
          (I.timeoutId = self.setTimeout(function () {
            (o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
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
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "Shortcake: handlePrimaryEphemeralIdentity failed",
                ])),
            ),
            o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
              reason: "server_error",
            })),
          e
        );
      }
    }
    async function A(e) {
      (o("WALogger").LOG(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
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
        var a = await o("WAWebShortcakeLinkingAlgorithm").encryptPairingRequest(
            e,
            t,
          ),
          i = a.encryptedPayload,
          l = a.iv,
          u = o("encodeProtobuf")
            .encodeProtobuf(
              o("WAWebProtobufsCompanionReg.pb").EncryptedPairingRequestSpec,
              { encryptedPayload: i, iv: l },
            )
            .readBuffer();
        if (
          (await o("WAWebShortcakeLinkingIq").sendEncryptedPairingRequest(
            new Uint8Array(u),
          ),
          I.epoch !== n)
        )
          throw (
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "Shortcake: timed out waiting for pairing completion",
                ])),
            ),
              I.clear(),
              o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
                reason: "timeout",
              }));
          }, E)),
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: EncryptedPairingRequest sent, awaiting pairing",
              ])),
          ));
      } catch (e) {
        throw (
          I.epoch === n &&
            (I.clear(),
            o("WALogger").ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "Shortcake: confirmVerificationCode failed",
                ])),
            ),
            o("WAWebBackendApi").frontendFireAndForget("shortcakeError", {
              reason: "server_error",
            })),
          e
        );
      }
    }
    function F() {
      (o("WALogger").LOG(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake: cancelling",
          ])),
      ),
        o("WAWebShortcakeLinkingHandoffProof").getHandoffKeyHolder().clear(),
        I.clear());
    }
    ((l.ShortcakeLinkingStage = L),
      (l.getShortcakeLinkingStage = T),
      (l.getVerificationCode = D),
      (l.getProloguePayloadBytes = x),
      (l.shouldSkipHandoffUx = $),
      (l.setSkipHandoffUx = P),
      (l.initializeShortcakeLinking = N),
      (l.markPrologueSent = M),
      (l.handlePrimaryEphemeralIdentity = w),
      (l.confirmVerificationCode = A),
      (l.cancelShortcakeLinking = F));
  },
  98,
);
