__d(
  "WAWebBotCertificateValidationLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCertificateValidationEventWamEvent",
    "WAWebWamEnumCertVerificationResultType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "[bot-signature-wam]";
    function u(t) {
      try {
        var n,
          r,
          a,
          i,
          l = t.startTime,
          u = new (o(
            "WAWebCertificateValidationEventWamEvent",
          ).CertificateValidationEventWamEvent)({
            certChainLength: t.certChainLength,
            certVerificationResult: t.certVerificationResult,
            leafCertCommonName: (n = t.leafCertCommonName) != null ? n : void 0,
            leafCertId: (r = t.leafCertId) != null ? r : void 0,
            leafCertTtlDays: (a = t.leafCertTtlDays) != null ? a : void 0,
            signatureVersion: (i = t.signatureVersion) != null ? i : void 0,
            verificationLatency:
              l != null ? (o("WATimeUtils").unixTime() - l) * 1e3 : void 0,
          });
        u.commit();
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " Failed to log certificate validation event",
            ])),
          s,
        );
      }
    }
    ((l.CERT_VERIFICATION_RESULT_TYPE = o(
      "WAWebWamEnumCertVerificationResultType",
    ).CERT_VERIFICATION_RESULT_TYPE),
      (l.logCertificateValidation = u));
  },
  98,
);
