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
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WATimeUtils").unixTime(),
            i = o(
              "WAWebBotSignatureVerificationGating",
            ).getForwardVerificationEnforcementLevel();
          if (
            i ===
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
                  startTime: a,
                },
              ),
              { verified: !0, shouldBlock: !1, reason: "disabled" }
            );
          var l =
            i ===
            o("WAWebBotSignatureVerificationGating")
              .BotSignatureVerificationEnforcementLevel.ENFORCE_BLOCKING;
          try {
            if (t.proofs == null || t.proofs.length === 0)
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
                  startTime: a,
                }),
                { verified: !1, shouldBlock: l, reason: "missing_proofs" }
              );
            var d = t.proofs.find(function (e) {
              return (
                e.useCase ===
                o("WAWebProtobufsAICommon.pb")
                  .BotSignatureVerificationUseCaseProof$BotSignatureUseCase
                  .WA_BOT_MSG
              );
            });
            if (d == null)
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
                  startTime: a,
                }),
                {
                  verified: !1,
                  shouldBlock: l,
                  reason: "missing_wa_bot_msg_proof",
                }
              );
            var m = yield b(d, e.botId.user, n, a);
            return m
              ? { verified: !0, shouldBlock: !1, reason: "success" }
              : {
                  verified: !1,
                  shouldBlock: l,
                  reason: "signature_verification_failed",
                };
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
                  startTime: a,
                },
              ),
              { verified: !1, shouldBlock: l, reason: "verification_exception" }
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
              c = yield o(
                "WAWebBotSignatureCertificateManager",
              ).verifyCertificateChainAndGetLeafPublicKey(u, s);
            if (c.leafPublicKey == null) {
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " Certificate chain verification failed",
                  ])),
                g,
              );
              var y = o("WAWebBotCertificateValidationLogger")
                .CERT_VERIFICATION_RESULT_TYPE.FAILED_CHAIN_VALIDATION;
              return (
                c.isExpired
                  ? (y = o("WAWebBotCertificateValidationLogger")
                      .CERT_VERIFICATION_RESULT_TYPE.FAILED_EXPIRED_CERT)
                  : c.isInvalid &&
                    (y = o("WAWebBotCertificateValidationLogger")
                      .CERT_VERIFICATION_RESULT_TYPE.FAILED_INVALID_CERT),
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
            var C = c.leafPublicKey,
              b = S(h, t, n),
              v = new Uint8Array(i),
              L = R(v, b, C);
            return (
              o("WAWebBotCertificateValidationLogger").logCertificateValidation(
                {
                  certChainLength: a.length,
                  certVerificationResult: L
                    ? o("WAWebBotCertificateValidationLogger")
                        .CERT_VERIFICATION_RESULT_TYPE.SUCCESS
                    : o("WAWebBotCertificateValidationLogger")
                        .CERT_VERIFICATION_RESULT_TYPE.FAILED_SIGNATURE_INVALID,
                  signatureVersion: h,
                  startTime: r,
                },
              ),
              L
            );
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      var r = new TextEncoder(),
        o = r.encode(e),
        a = r.encode(t),
        i = new Uint8Array(o.length + a.length + n.length);
      return (
        i.set(o, 0),
        i.set(a, o.length),
        i.set(n, o.length + a.length),
        i
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
