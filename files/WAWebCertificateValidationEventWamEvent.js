__d(
  "WAWebCertificateValidationEventWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumCertVerificationResultType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CertificateValidationEvent: [
            7120,
            {
              certChainLength: [1, e.TYPES.INTEGER],
              certVerificationResult: [
                2,
                o("WAWebWamEnumCertVerificationResultType")
                  .CERT_VERIFICATION_RESULT_TYPE,
              ],
              leafCertCommonName: [3, e.TYPES.STRING],
              leafCertId: [4, e.TYPES.STRING],
              leafCertTtlDays: [5, e.TYPES.INTEGER],
              signatureVersion: [6, e.TYPES.STRING],
              verificationLatency: [7, e.TYPES.TIMER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CertificateValidationEvent: [] },
      );
    l.CertificateValidationEventWamEvent = s;
  },
  98,
);
