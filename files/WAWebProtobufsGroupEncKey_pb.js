__d(
  "WAWebProtobufsGroupEncKey.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {};
    ((s.name = "EncryptedJoinRequestPayload"),
      (s.internalSpec = {
        encryptedAnswers: [1, (e = o("WAProtoConst")).TYPES.BYTES],
        encIv: [2, e.TYPES.BYTES],
        signalIdentityPublicKey: [3, e.TYPES.BYTES],
        kemCiphertext: [4, e.TYPES.BYTES],
      }),
      (u.name = "MembershipFormPublicKeys"),
      (u.internalSpec = {
        mlKemPublicKey: [1, e.TYPES.BYTES],
        x25519PublicKey: [2, e.TYPES.BYTES],
      }),
      (l.EncryptedJoinRequestPayloadSpec = s),
      (l.MembershipFormPublicKeysSpec = u));
  },
  98,
);
