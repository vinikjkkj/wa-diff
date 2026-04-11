__d(
  "WAFingerprint.pb",
  ["$InternalEnum", "WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({ E2EE: 0, HOSTED: 1 }),
      u = {},
      c = {};
    ((u.name = "FingerprintData"),
      (u.internalSpec = {
        publicKey: [1, (e = o("WAProtoConst")).TYPES.BYTES],
        pnIdentifier: [2, e.TYPES.BYTES],
        lidIdentifier: [3, e.TYPES.BYTES],
        usernameIdentifier: [4, e.TYPES.BYTES],
        hostedState: [5, e.TYPES.ENUM, s],
        hashedPublicKey: [6, e.TYPES.BYTES],
      }),
      (c.name = "CombinedFingerprint"),
      (c.internalSpec = {
        version: [1, e.TYPES.UINT32],
        localFingerprint: [2, e.TYPES.MESSAGE, u],
        remoteFingerprint: [3, e.TYPES.MESSAGE, u],
      }),
      (l.HostedState = s),
      (l.FingerprintDataSpec = u),
      (l.CombinedFingerprintSpec = c));
  },
  98,
);
