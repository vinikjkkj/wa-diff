__d(
  "WAWebAdvKeyIndexSignatureVerify",
  [
    "invariant",
    "WABinary",
    "WAWebAdvSignatureConstants",
    "WAWebCryptoCurve25519VerifySignature",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      var r = o("WABinary")
        .Binary.build(
          o("WAWebAdvSignatureConstants")
            .ADV_PREFIX_KEY_INDEX_LIST_ACCOUNT_SIGNATURE,
          e,
        )
        .readByteArrayView();
      return o("WAWebCryptoCurve25519VerifySignature").verifySignature(
        new Uint8Array(n),
        r,
        t,
      );
    }
    function u(t, n) {
      var r = t.details,
        o = t.accountSignature;
      return (
        r != null || s(0, 128802),
        o != null || s(0, 56295),
        e(new Uint8Array(r), new Uint8Array(o), n)
      );
    }
    ((l.verifyKeyIndexListSignature = e),
      (l.verifyKeyIndexListAccountSignature = u));
  },
  98,
);
