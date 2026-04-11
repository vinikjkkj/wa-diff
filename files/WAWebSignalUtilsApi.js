__d(
  "WAWebSignalUtilsApi",
  ["WAWap", "WAWebCryptoCurve25519", "WAWebCryptoLibraryUtilsApi"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return (t = o("WAWap")).wap(
        "skey",
        null,
        t.wap("id", null, t.BIG_ENDIAN_CONTENT(e.keyId, 3)),
        t.wap("value", null, e.keyPair.pubKey),
        t.wap("signature", null, e.signature),
      );
    }
    function s(e) {
      var t;
      return (t = o("WAWap")).wap(
        "key",
        null,
        t.wap("id", null, t.BIG_ENDIAN_CONTENT(e.keyId, 3)),
        t.wap("value", null, e.keyPair.pubKey),
      );
    }
    function u(e) {
      var t = r("WAWebCryptoLibraryUtilsApi").extractIdentityKey(e);
      return t.success === !0
        ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(t.value)
        : null;
    }
    ((l.xmppSignedPreKey = e), (l.xmppPreKey = s), (l.extractIdentityKey = u));
  },
  98,
);
