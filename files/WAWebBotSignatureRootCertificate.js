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
    ((l.getRootCertificateVersion = e), (l.loadRootCertificate = s));
  },
  98,
);
