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
    "asyncToGeneratorRuntime",
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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.forwardedAiBotMessageInfo,
            n = e.unifiedResponseBytes,
            a = e.verificationMetadata,
            i = o("WATimeUtils").unixTime(),
            l = o(
              "WAWebBotSignatureVerificationGating",
            ).getForwardVerificationEnforcementLevel();
          if (
            l ===
            o("WAWebBotSignatureVerificationGating")
              .BotSignatureVerificationEnforcementLevel.NONE
          )
            return (
              o("WAWebBotCertificateValidationLogger").logCertificateValidation(
                {
                  certChainLength: 0,
                  certVerificationResult: o(
                    "WAWebBotCertificateValidationLogger",
                  ).CERT_VERIFICATION_RESULT_TYPE.SKIPPED_AB_DISABLED,
                  signatureVersion: h,
                  startTime: i,
                },
              ),
              "passed"
            );
          var d =
            l ===
            o("WAWebBotSignatureVerificationGating")
              .BotSignatureVerificationEnforcementLevel.ENFORCE_BLOCKING;
          try {
            if (a.proofs == null || a.proofs.length === 0)
              return (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " No proofs in verification metadata",
                      ])),
                    g,
                  )
                  .sendLogs("bot-sig-missing-proofs"),
                o(
                  "WAWebBotCertificateValidationLogger",
                ).logCertificateValidation({
                  certChainLength: 0,
                  certVerificationResult: o(
                    "WAWebBotCertificateValidationLogger",
                  ).CERT_VERIFICATION_RESULT_TYPE.FAILED_SIGNATURE_DATA_MISSING,
                  signatureVersion: h,
                  startTime: i,
                }),
                d ? "failed" : "passed"
              );
            var m = a.proofs.find(function (e) {
              return (
                e.useCase ===
                o("WAWebProtobufsAICommon.pb")
                  .BotSignatureVerificationUseCaseProof$BotSignatureUseCase
                  .WA_BOT_MSG
              );
            });
            if (m == null)
              return (
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " No WA_BOT_MSG proof found",
                      ])),
                    g,
                  )
                  .sendLogs("bot-sig-missing-wa-bot-msg-proof"),
                o(
                  "WAWebBotCertificateValidationLogger",
                ).logCertificateValidation({
                  certChainLength: 0,
                  certVerificationResult: o(
                    "WAWebBotCertificateValidationLogger",
                  ).CERT_VERIFICATION_RESULT_TYPE.FAILED_SIGNATURE_DATA_MISSING,
                  signatureVersion: h,
                  startTime: i,
                }),
                d ? "failed" : "passed"
              );
            var p = yield b(m, t.botId.user, n, i);
            return p ? "passed" : d ? "failed" : "passed";
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " Exception during verification",
                    ])),
                  g,
                )
                .catching(e instanceof Error ? e : r("err")(String(e)))
                .sendLogs("bot-sig-verify-exception", { sampling: 0.01 }),
              o("WAWebBotCertificateValidationLogger").logCertificateValidation(
                {
                  certChainLength: 0,
                  certVerificationResult: o(
                    "WAWebBotCertificateValidationLogger",
                  ).CERT_VERIFICATION_RESULT_TYPE.FAILED_UNKNOWN_ERROR,
                  signatureVersion: h,
                  startTime: i,
                },
              ),
              d ? "failed" : "passed"
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = e.certificateChain,
              i = e.signature,
              l = e.version;
            if (i == null)
              return (
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " Missing signature in proof",
                    ])),
                  g,
                ),
                o(
                  "WAWebBotCertificateValidationLogger",
                ).logCertificateValidation({
                  certChainLength: a.length,
                  certVerificationResult: o(
                    "WAWebBotCertificateValidationLogger",
                  ).CERT_VERIFICATION_RESULT_TYPE.FAILED_SIGNATURE_DATA_MISSING,
                  signatureVersion: h,
                  startTime: r,
                }),
                !1
              );
            if (l == null || l !== 1)
              return (
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " Unsupported signature version: ",
                      "",
                    ])),
                  g,
                  String(l),
                ),
                o(
                  "WAWebBotCertificateValidationLogger",
                ).logCertificateValidation({
                  certChainLength: a.length,
                  certVerificationResult: o(
                    "WAWebBotCertificateValidationLogger",
                  ).CERT_VERIFICATION_RESULT_TYPE
                    .FAILED_SIGNATURE_DATA_MALFORMED,
                  signatureVersion: String(l),
                  startTime: r,
                }),
                !1
              );
            if (a.length === 0)
              return (
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " Empty certificate chain",
                    ])),
                  g,
                ),
                o(
                  "WAWebBotCertificateValidationLogger",
                ).logCertificateValidation({
                  certChainLength: 0,
                  certVerificationResult: o(
                    "WAWebBotCertificateValidationLogger",
                  ).CERT_VERIFICATION_RESULT_TYPE.FAILED_CHAIN_INCOMPLETE,
                  signatureVersion: h,
                  startTime: r,
                }),
                !1
              );
            var s = yield o(
              "WAWebBotSignatureRootCertificate",
            ).loadRootCertificate();
            if (s == null)
              return (
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " Failed to load root certificate",
                    ])),
                  g,
                ),
                o(
                  "WAWebBotCertificateValidationLogger",
                ).logCertificateValidation({
                  certChainLength: a.length,
                  certVerificationResult: o(
                    "WAWebBotCertificateValidationLogger",
                  ).CERT_VERIFICATION_RESULT_TYPE.FAILED_CHAIN_INCOMPLETE,
                  signatureVersion: h,
                  startTime: r,
                }),
                !1
              );
            var u = a.map(function (e) {
                return new Uint8Array(e);
              }),
              c;
            try {
              c = yield o(
                "WAWebBotSignatureCertificateManager",
              ).getValidatedLeafPublicKey(u, s);
            } catch (e) {
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
                e instanceof
                o("WAWebBotSignatureCertificateManager").CertRevokedError
                  ? (y = o("WAWebBotCertificateValidationLogger")
                      .CERT_VERIFICATION_RESULT_TYPE.FAILED_CERTIFICATE_REVOKED)
                  : e instanceof
                      o("WAWebBotSignatureCertificateManager")
                        .CrlUnavailableError
                    ? (y = o("WAWebBotCertificateValidationLogger")
                        .CERT_VERIFICATION_RESULT_TYPE.FAILED_CRL_UNAVAILABLE)
                    : e instanceof
                        o("WAWebBotSignatureCertificateManager").CrlStaleError
                      ? (y = o("WAWebBotCertificateValidationLogger")
                          .CERT_VERIFICATION_RESULT_TYPE.FAILED_CRL_EXPIRED)
                      : e instanceof
                          o("WAWebBotSignatureCertificateManager")
                            .CertExpiredError
                        ? (y = o("WAWebBotCertificateValidationLogger")
                            .CERT_VERIFICATION_RESULT_TYPE.FAILED_EXPIRED_CERT)
                        : e instanceof
                            o("WAWebBotSignatureCertificateManager")
                              .CertInvalidError
                          ? (y = o("WAWebBotCertificateValidationLogger")
                              .CERT_VERIFICATION_RESULT_TYPE
                              .FAILED_INVALID_CERT)
                          : e instanceof
                              o("WAWebBotSignatureCertificateManager")
                                .CertChainValidationError &&
                            (y = o("WAWebBotCertificateValidationLogger")
                              .CERT_VERIFICATION_RESULT_TYPE
                              .FAILED_CHAIN_VALIDATION),
                o(
                  "WAWebBotCertificateValidationLogger",
                ).logCertificateValidation({
                  certChainLength: a.length,
                  certVerificationResult: y,
                  signatureVersion: h,
                  startTime: r,
                }),
                !1
              );
            }
            var C = S({ botFbid: t, messageDigest: n, version: h }),
              b = new Uint8Array(i),
              v = R(b, C, c);
            return (
              o("WAWebBotCertificateValidationLogger").logCertificateValidation(
                {
                  certChainLength: a.length,
                  certVerificationResult: v
                    ? o("WAWebBotCertificateValidationLogger")
                        .CERT_VERIFICATION_RESULT_TYPE.SUCCESS
                    : o("WAWebBotCertificateValidationLogger")
                        .CERT_VERIFICATION_RESULT_TYPE.FAILED_SIGNATURE_INVALID,
                  signatureVersion: h,
                  startTime: r,
                },
              ),
              v
            );
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e) {
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
    function R(t, n, a) {
      try {
        return o("WACryptoPrimitives").signDetachedVerify(n, t, a);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " EdDSA signature verification error",
                ])),
              g,
            )
            .catching(t instanceof Error ? t : r("err")(String(t)))
            .sendLogs("bot-sig-eddsa-verify-error", { sampling: 0.01 }),
          !1
        );
      }
    }
    ((l.verifyBotMessageSignature = y),
      (l.constructSignaturePayload = S),
      (l.verifyEddsaSignature = R));
  },
  98,
);
