__d(
  "WAWebBotSignatureVerificationUtils",
  [
    "WACryptoPrimitives",
    "WALogger",
    "WATimeUtils",
    "WAWebBotCertificateValidationLogger",
    "WAWebBotSignatureCertificateManager",
    "WAWebBotSignatureRootCertificate",
    "WAWebBotSignatureVerificationGating",
    "WAWebProtobufsAICommon.pb",
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
      g = "[bot-signature-verify]",
      h = "1";
    async function y(t) {
      var n = t.forwardedAiBotMessageInfo,
        a = t.unifiedResponseBytes,
        i = t.verificationMetadata,
        l = o("WATimeUtils").unixTime(),
        c = o(
          "WAWebBotSignatureVerificationGating",
        ).getForwardVerificationEnforcementLevel();
      if (
        c ===
        o("WAWebBotSignatureVerificationGating")
          .BotSignatureVerificationEnforcementLevel.NONE
      )
        return (
          o("WAWebBotCertificateValidationLogger").logCertificateValidation({
            certChainLength: 0,
            certVerificationResult: o("WAWebBotCertificateValidationLogger")
              .CERT_VERIFICATION_RESULT_TYPE.SKIPPED_AB_DISABLED,
            signatureVersion: h,
            startTime: l,
          }),
          "passed"
        );
      var d =
        c ===
        o("WAWebBotSignatureVerificationGating")
          .BotSignatureVerificationEnforcementLevel.ENFORCE_BLOCKING;
      try {
        if (i.proofs == null || i.proofs.length === 0)
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " No proofs in verification metadata",
                  ])),
                g,
              )
              .sendLogs("bot-sig-missing-proofs"),
            o("WAWebBotCertificateValidationLogger").logCertificateValidation({
              certChainLength: 0,
              certVerificationResult: o("WAWebBotCertificateValidationLogger")
                .CERT_VERIFICATION_RESULT_TYPE.FAILED_SIGNATURE_DATA_MISSING,
              signatureVersion: h,
              startTime: l,
            }),
            d ? "failed" : "passed"
          );
        var m = i.proofs.find(function (e) {
          return (
            e.useCase ===
              o("WAWebProtobufsAICommon.pb")
                .BotSignatureVerificationUseCaseProof$BotSignatureUseCase
                .WA_BOT_MSG ||
            e.useCase ===
              o("WAWebProtobufsAICommon.pb")
                .BotSignatureVerificationUseCaseProof$BotSignatureUseCase
                .WA_TEE_BOT_MSG
          );
        });
        if (m == null)
          return (
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " No WA_BOT_MSG or WA_TEE_BOT_MSG proof found",
                  ])),
                g,
              )
              .sendLogs("bot-sig-missing-wa-bot-msg-proof"),
            o("WAWebBotCertificateValidationLogger").logCertificateValidation({
              certChainLength: 0,
              certVerificationResult: o("WAWebBotCertificateValidationLogger")
                .CERT_VERIFICATION_RESULT_TYPE.FAILED_SIGNATURE_DATA_MISSING,
              signatureVersion: h,
              startTime: l,
            }),
            d ? "failed" : "passed"
          );
        var p = await C(m, n.botId.user, a, l);
        return p ? "passed" : d ? "failed" : "passed";
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " Exception during verification",
                ])),
              g,
            )
            .catching(e instanceof Error ? e : r("err")(String(e)))
            .sendLogs("bot-sig-verify-exception", { sampling: 0.01 }),
          o("WAWebBotCertificateValidationLogger").logCertificateValidation({
            certChainLength: 0,
            certVerificationResult: o("WAWebBotCertificateValidationLogger")
              .CERT_VERIFICATION_RESULT_TYPE.FAILED_UNKNOWN_ERROR,
            signatureVersion: h,
            startTime: l,
          }),
          d ? "failed" : "passed"
        );
      }
    }
    async function C(e, t, n, r) {
      var a = e.certificateChain,
        i = e.signature,
        l = e.version;
      if (i == null)
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " Missing signature in proof",
              ])),
            g,
          ),
          o("WAWebBotCertificateValidationLogger").logCertificateValidation({
            certChainLength: a.length,
            certVerificationResult: o("WAWebBotCertificateValidationLogger")
              .CERT_VERIFICATION_RESULT_TYPE.FAILED_SIGNATURE_DATA_MISSING,
            signatureVersion: h,
            startTime: r,
          }),
          !1
        );
      if (l == null || l !== 1)
        return (
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " Unsupported signature version: ",
                "",
              ])),
            g,
            String(l),
          ),
          o("WAWebBotCertificateValidationLogger").logCertificateValidation({
            certChainLength: a.length,
            certVerificationResult: o("WAWebBotCertificateValidationLogger")
              .CERT_VERIFICATION_RESULT_TYPE.FAILED_SIGNATURE_DATA_MALFORMED,
            signatureVersion: String(l),
            startTime: r,
          }),
          !1
        );
      if (a.length === 0)
        return (
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " Empty certificate chain",
              ])),
            g,
          ),
          o("WAWebBotCertificateValidationLogger").logCertificateValidation({
            certChainLength: 0,
            certVerificationResult: o("WAWebBotCertificateValidationLogger")
              .CERT_VERIFICATION_RESULT_TYPE.FAILED_CHAIN_INCOMPLETE,
            signatureVersion: h,
            startTime: r,
          }),
          !1
        );
      var s = await o("WAWebBotSignatureRootCertificate").loadRootCertificate();
      if (s == null)
        return (
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " Failed to load root certificate",
              ])),
            g,
          ),
          o("WAWebBotCertificateValidationLogger").logCertificateValidation({
            certChainLength: a.length,
            certVerificationResult: o("WAWebBotCertificateValidationLogger")
              .CERT_VERIFICATION_RESULT_TYPE.FAILED_CHAIN_INCOMPLETE,
            signatureVersion: h,
            startTime: r,
          }),
          !1
        );
      var u = a.map(function (e) {
          return new Uint8Array(e);
        }),
        f;
      try {
        f = await o(
          "WAWebBotSignatureCertificateManager",
        ).getValidatedLeafPublicKey(u, s);
      } catch (e) {
        o("WALogger").WARN(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " Certificate chain verification failed: ",
              "",
            ])),
          g,
          e instanceof Error ? e.message : String(e),
        );
        var y = o("WAWebBotCertificateValidationLogger")
          .CERT_VERIFICATION_RESULT_TYPE.FAILED_CHAIN_VALIDATION;
        return (
          e instanceof o("WAWebBotSignatureCertificateManager").CertRevokedError
            ? (y = o("WAWebBotCertificateValidationLogger")
                .CERT_VERIFICATION_RESULT_TYPE.FAILED_CERTIFICATE_REVOKED)
            : e instanceof
                o("WAWebBotSignatureCertificateManager").CrlUnavailableError
              ? (y = o("WAWebBotCertificateValidationLogger")
                  .CERT_VERIFICATION_RESULT_TYPE.FAILED_CRL_UNAVAILABLE)
              : e instanceof
                  o("WAWebBotSignatureCertificateManager").CrlStaleError
                ? (y = o("WAWebBotCertificateValidationLogger")
                    .CERT_VERIFICATION_RESULT_TYPE.FAILED_CRL_EXPIRED)
                : e instanceof
                    o("WAWebBotSignatureCertificateManager").CertExpiredError
                  ? (y = o("WAWebBotCertificateValidationLogger")
                      .CERT_VERIFICATION_RESULT_TYPE.FAILED_EXPIRED_CERT)
                  : e instanceof
                      o("WAWebBotSignatureCertificateManager").CertInvalidError
                    ? (y = o("WAWebBotCertificateValidationLogger")
                        .CERT_VERIFICATION_RESULT_TYPE.FAILED_INVALID_CERT)
                    : e instanceof
                        o("WAWebBotSignatureCertificateManager")
                          .CertChainValidationError &&
                      (y = o("WAWebBotCertificateValidationLogger")
                        .CERT_VERIFICATION_RESULT_TYPE.FAILED_CHAIN_VALIDATION),
          o("WAWebBotCertificateValidationLogger").logCertificateValidation({
            certChainLength: a.length,
            certVerificationResult: y,
            signatureVersion: h,
            startTime: r,
          }),
          !1
        );
      }
      var C = b({ botFbid: t, messageDigest: n, version: h }),
        S = new Uint8Array(i),
        R = v({ payload: C, publicKey: f, signature: S });
      return (
        o("WAWebBotCertificateValidationLogger").logCertificateValidation({
          certChainLength: a.length,
          certVerificationResult: R
            ? o("WAWebBotCertificateValidationLogger")
                .CERT_VERIFICATION_RESULT_TYPE.SUCCESS
            : o("WAWebBotCertificateValidationLogger")
                .CERT_VERIFICATION_RESULT_TYPE.FAILED_SIGNATURE_INVALID,
          signatureVersion: h,
          startTime: r,
        }),
        R
      );
    }
    function b(e) {
      var t = e.botFbid,
        n = e.messageDigest,
        r = e.version,
        o = new TextEncoder(),
        a = o.encode(r),
        i = o.encode(t),
        l = new Uint8Array(a.length + i.length + n.length);
      return (
        l.set(a, 0),
        l.set(i, a.length),
        l.set(n, a.length + i.length),
        l
      );
    }
    function v(e) {
      var t = e.payload,
        n = e.publicKey,
        a = e.signature;
      try {
        return o("WACryptoPrimitives").signDetachedVerify(t, a, n);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " EdDSA signature verification error",
                ])),
              g,
            )
            .catching(e instanceof Error ? e : r("err")(String(e)))
            .sendLogs("bot-sig-eddsa-verify-error", { sampling: 0.01 }),
          !1
        );
      }
    }
    ((l.verifyBotMessageSignature = y),
      (l.constructSignaturePayload = b),
      (l.verifyEddsaSignature = v));
  },
  98,
);
