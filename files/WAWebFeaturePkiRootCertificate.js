__d(
  "WAWebFeaturePkiRootCertificate",
  ["WALogger", "WAWebX509Utils", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = `-----BEGIN CERTIFICATE-----
MIIC7TCCApOgAwIBAgIUAtu5QuxmVhfGT8LPkjfm40mSl0AwCgYIKoZIzj0EAwIw
dzEgMB4GA1UEAwwXTWV0YSBXQSBGZWF0dXJlIFJvb3QgQ0ExCzAJBgNVBAYTAlVT
MRMwEQYDVQQIDApDYWxpZm9ybmlhMRMwEQYDVQQHDApNZW5sbyBQYXJrMRwwGgYD
VQQKDBNNZXRhIFBsYXRmb3JtcyBJbmMuMCAXDTI1MDkwNDE3MzEyNFoYDzIwNjUw
OTA0MTczMTI0WjB3MSAwHgYDVQQDDBdNZXRhIFdBIEZlYXR1cmUgUm9vdCBDQTEL
MAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExEzARBgNVBAcMCk1lbmxv
IFBhcmsxHDAaBgNVBAoME01ldGEgUGxhdGZvcm1zIEluYy4wWTATBgcqhkjOPQIB
BggqhkjOPQMBBwNCAAT60blw90ebreMkw8+Wpcs0ETAkr1VQjoZoyi7PSSQbsoiP
qYRnzfRrR+xiahaXbYU83qXiTHjVUiOU9wDxI83qo4H6MIH3MA8GA1UdEwEB/wQF
MAMBAf8wHQYDVR0OBBYEFNO7KMTVSYUxkL6VS3LyWJw7m76zMIG0BgNVHSMEgaww
gamAFNO7KMTVSYUxkL6VS3LyWJw7m76zoXukeTB3MSAwHgYDVQQDDBdNZXRhIFdB
IEZlYXR1cmUgUm9vdCBDQTELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3Ju
aWExEzARBgNVBAcMCk1lbmxvIFBhcmsxHDAaBgNVBAoME01ldGEgUGxhdGZvcm1z
IEluYy6CFALbuULsZlYXxk/Cz5I35uNJkpdAMA4GA1UdDwEB/wQEAwIBhjAKBggq
hkjOPQQDAgNIADBFAiAINhjk9DbP416vx/WjqdUfexgic08aQsxnpDDsNE5M0gIh
ANorq7KwCQVMtS2or5uKJAQsx1FxCHyDafq2GCk9t0AN
-----END CERTIFICATE-----`,
      c = "2025-10",
      d = "Meta WA Feature Root CA",
      m = null;
    async function p() {
      if (m != null) return m;
      try {
        var t = await o("WAWebX509Utils").extractCertificates(u);
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
    }
    ((l.FeaturePkiRootCertificatePem = u),
      (l.FeaturePkiRootCertificateVersion = c),
      (l.FeaturePkiRootCommonName = d),
      (l.loadFeaturePkiRootCertificate = p));
  },
  98,
);
