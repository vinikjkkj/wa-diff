__d(
  "WAWebCryptoCurve25519VerifySignature",
  ["WASignalOther", "WASignalSignatures", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (e.byteLength !== 32)
        throw r("err")("Invalid public key length: " + e.byteLength);
      var a = o("WASignalSignatures").convertPublicKeyToSerializedPubKey(e),
        i = o("WASignalOther").ensureSize(n, 64);
      return o("WASignalSignatures").verifyMsgSignalVariant(a, t, i);
    }
    l.verifySignature = e;
  },
  98,
);
