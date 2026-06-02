__d(
  "WAWebBotSignatureRootCertificate",
  ["WALogger", "WAWebDirectConnectionX509", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "2025-10",
      c = `-----BEGIN CERTIFICATE-----
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
      d = null;
    function m() {
      return u;
    }
    async function p() {
      if (d != null) return d;
      try {
        var t = await o("WAWebDirectConnectionX509").extractCertificates(c);
        return t.length === 0
          ? (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot-signature] Failed to parse root certificate",
                  ])),
              )
              .sendLogs("bot-signature-root-cert-parse-error"),
            null)
          : ((d = t[0]), d);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot-signature] Failed to load root certificate",
                ])),
            )
            .catching(e instanceof Error ? e : r("err")(String(e)))
            .sendLogs("bot-signature-root-cert-load-error"),
          null
        );
      }
    }
    function _() {
      d = null;
    }
    ((l.getRootCertificateVersion = m),
      (l.loadRootCertificate = p),
      (l.clearCachedRootCertificateForTesting = _));
  },
  98,
);
