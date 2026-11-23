__d(
  "WAAdv",
  [
    "WAAdv.pb",
    "WABinary",
    "WAByteArray",
    "WACryptoHmac",
    "WACryptoUtils",
    "WAResultOrError",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSignatures",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Uint8Array([6, 0]),
      s = new Uint8Array([6, 1]);
    function u(e) {
      return e;
    }
    async function c(t) {
      var n = t.advSecretKey,
        r = t.advSignedDeviceIdentityHmacProtobuf,
        a = t.identityPubKey,
        i = o("decodeProtobuf").decodeProtobuf(
          o("WAAdv.pb").ADVSignedDeviceIdentityHMACSpec,
          r,
        ),
        l = i.details,
        s = i.hmac;
      if (l == null)
        return o("WAResultOrError").makeError("missing-identity-hmac-details");
      if (s == null)
        return o("WAResultOrError").makeError("missing-identity-hmac");
      var u = await o("WACryptoHmac").hmacSha256(n, l);
      if (!o("WACryptoUtils").arrayBuffersEqual(u, s))
        return o("WAResultOrError").makeError("hmac-mismatch");
      var c = o("decodeProtobuf").decodeProtobuf(
          o("WAAdv.pb").ADVSignedDeviceIdentitySpec,
          l,
        ),
        d = c.details;
      if (d == null)
        return o("WAResultOrError").makeError(
          "missing-account-signature-details",
        );
      var m = c.accountSignatureKey;
      if (m == null)
        return o("WAResultOrError").makeError("missing-account-signature-key");
      var p = c.accountSignature;
      if (p == null)
        return o("WAResultOrError").makeError("missing-account-signature");
      var _ = o("WABinary").Binary.build(e, d, a).readByteArrayView(),
        f = o("WASignalSignatures").verifyMsgSignalVariant(
          o("WASignalKeys").serializeIdentity(new Uint8Array(m)),
          _,
          o("WASignalOther").toBytes(p, 64),
        );
      return f
        ? o("WAResultOrError").makeResult({ advSignedDeviceIdentity: c })
        : o("WAResultOrError").makeError("signature-mismatch");
    }
    async function d(e) {
      var t = e.advSignedDeviceIdentity,
        n = e.identityKeyPair,
        r = t.details,
        a = o("decodeProtobuf").decodeProtobuf(
          o("WAAdv.pb").ADVDeviceIdentitySpec,
          r,
        ),
        i = a.keyIndex;
      if (i == null) return o("WAResultOrError").makeError("missing-key-index");
      var l = o("WABinary")
          .Binary.build(s, r, n.publicKey, t.accountSignatureKey)
          .readByteArrayView(),
        u = await o("WASignalSignatures").signMsg(n, l),
        c = babelHelpers.extends({}, t);
      ((c.deviceSignature = o("WAByteArray").uint8ArrayToBuffer(u)),
        (c.accountSignatureKey = void 0));
      var d = o("encodeProtobuf")
        .encodeProtobuf(o("WAAdv.pb").ADVSignedDeviceIdentitySpec, c)
        .readByteArrayView();
      return o("WAResultOrError").makeResult({
        signedDeviceIdentityProtobuf: d,
        keyIndex: i,
      });
    }
    ((l.castToAdvSignedDeviceIdentityHmacProtobuf = u),
      (l.verifyAdvSignedDeviceIdentity = c),
      (l.addDeviceSignatureToProtobuf = d));
  },
  98,
);
