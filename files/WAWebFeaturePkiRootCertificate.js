__d(
  "WAWebFeaturePkiRootCertificate",
  ["WALogger", "WAWebX509Utils", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        "-----BEGIN CERTIFICATE-----\nMIIC7TCCApOgAwIBAgIUAtu5QuxmVhfGT8LPkjfm40mSl0AwCgYIKoZIzj0EAwIw\ndzEgMB4GA1UEAwwXTWV0YSBXQSBGZWF0dXJlIFJvb3QgQ0ExCzAJBgNVBAYTAlVT\nMRMwEQYDVQQIDApDYWxpZm9ybmlhMRMwEQYDVQQHDApNZW5sbyBQYXJrMRwwGgYD\nVQQKDBNNZXRhIFBsYXRmb3JtcyBJbmMuMCAXDTI1MDkwNDE3MzEyNFoYDzIwNjUw\nOTA0MTczMTI0WjB3MSAwHgYDVQQDDBdNZXRhIFdBIEZlYXR1cmUgUm9vdCBDQTEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExEzARBgNVBAcMCk1lbmxv\nIFBhcmsxHDAaBgNVBAoME01ldGEgUGxhdGZvcm1zIEluYy4wWTATBgcqhkjOPQIB\nBggqhkjOPQMBBwNCAAT60blw90ebreMkw8+Wpcs0ETAkr1VQjoZoyi7PSSQbsoiP\nqYRnzfRrR+xiahaXbYU83qXiTHjVUiOU9wDxI83qo4H6MIH3MA8GA1UdEwEB/wQF\nMAMBAf8wHQYDVR0OBBYEFNO7KMTVSYUxkL6VS3LyWJw7m76zMIG0BgNVHSMEgaww\ngamAFNO7KMTVSYUxkL6VS3LyWJw7m76zoXukeTB3MSAwHgYDVQQDDBdNZXRhIFdB\nIEZlYXR1cmUgUm9vdCBDQTELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3Ju\naWExEzARBgNVBAcMCk1lbmxvIFBhcmsxHDAaBgNVBAoME01ldGEgUGxhdGZvcm1z\nIEluYy6CFALbuULsZlYXxk/Cz5I35uNJkpdAMA4GA1UdDwEB/wQEAwIBhjAKBggq\nhkjOPQQDAgNIADBFAiAINhjk9DbP416vx/WjqdUfexgic08aQsxnpDDsNE5M0gIh\nANorq7KwCQVMtS2or5uKJAQsx1FxCHyDafq2GCk9t0AN\n-----END CERTIFICATE-----",
      c = "2025-10",
      d = "Meta WA Feature Root CA",
      m = null;
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (m != null) return m;
          try {
            var t = yield o("WAWebX509Utils").extractCertificates(u);
            return t.length === 0
              ? (o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[feature-pki] Failed to parse root certificate",
                      ])),
                  )
                  .sendLogs("feature-pki-root-cert-parse-error"),
                null)
              : ((m = t[0]), m);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[feature-pki] Failed to load root certificate",
                    ])),
                )
                .catching(e instanceof Error ? e : r("err")(String(e)))
                .sendLogs("feature-pki-root-cert-load-error"),
              null
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      m = null;
    }
    ((l.FeaturePkiRootCertificatePem = u),
      (l.FeaturePkiRootCertificateVersion = c),
      (l.FeaturePkiRootCommonName = d),
      (l.loadFeaturePkiRootCertificate = p),
      (l.clearCachedFeaturePkiRootCertificateForTesting = f));
  },
  98,
);
