__d(
  "WACert.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {},
      c = {},
      d = {},
      m = {};
    ((s.name = "NoiseCertificate"),
      (s.internalSpec = {
        details: [1, (e = o("WAProtoConst")).TYPES.BYTES],
        signature: [2, e.TYPES.BYTES],
      }),
      (u.name = "NoiseCertificate$Details"),
      (u.internalSpec = {
        serial: [1, e.TYPES.UINT32],
        issuer: [2, e.TYPES.STRING],
        expires: [3, e.TYPES.UINT64],
        subject: [4, e.TYPES.STRING],
        key: [5, e.TYPES.BYTES],
      }),
      (c.name = "CertChain"),
      (c.internalSpec = {
        leaf: [1, e.TYPES.MESSAGE, d],
        intermediate: [2, e.TYPES.MESSAGE, d],
      }),
      (d.name = "CertChain$NoiseCertificate"),
      (d.internalSpec = {
        details: [1, e.TYPES.BYTES],
        signature: [2, e.TYPES.BYTES],
      }),
      (m.name = "CertChain$NoiseCertificate$Details"),
      (m.internalSpec = {
        serial: [1, e.TYPES.UINT32],
        issuerSerial: [2, e.TYPES.UINT32],
        key: [3, e.TYPES.BYTES],
        notBefore: [4, e.TYPES.UINT64],
        notAfter: [5, e.TYPES.UINT64],
      }),
      (l.NoiseCertificateSpec = s),
      (l.NoiseCertificate$DetailsSpec = u),
      (l.CertChainSpec = c),
      (l.CertChain$NoiseCertificateSpec = d),
      (l.CertChain$NoiseCertificate$DetailsSpec = m));
  },
  98,
);
