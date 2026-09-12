__d(
  "WAWebBotSignatureRootCertificate",
  ["WAWebFeaturePkiRootCertificate"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebFeaturePkiRootCertificate")
        .FeaturePkiRootCertificateVersion;
    }
    function s() {
      return o(
        "WAWebFeaturePkiRootCertificate",
      ).loadFeaturePkiRootCertificate();
    }
    function u() {
      o(
        "WAWebFeaturePkiRootCertificate",
      ).clearCachedFeaturePkiRootCertificateForTesting();
    }
    ((l.getRootCertificateVersion = e),
      (l.loadRootCertificate = s),
      (l.clearCachedRootCertificateForTesting = u));
  },
  98,
);
