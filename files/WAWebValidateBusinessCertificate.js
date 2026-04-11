__d(
  "WAWebValidateBusinessCertificate",
  ["WAWebProtobufsVnameCert.pb", "decodeProtobuf", "err"],
  function (t, n, r, o, a, i, l) {
    var e = "ent:wa",
      s = "smb:wa";
    function u(t) {
      return {
        serial: t.serial,
        name: t.verifiedName,
        isApi: t.issuer === e,
        isSmb: t.issuer === s,
      };
    }
    function c(e) {
      if (!e) return null;
      var t = o("decodeProtobuf").decodeProtobuf(
        o("WAWebProtobufsVnameCert.pb").VerifiedNameCertificateSpec,
        e,
      );
      if (!t.details) throw r("err")("verifyCertificate cert missing details");
      var n = o("decodeProtobuf").decodeProtobuf(
        o("WAWebProtobufsVnameCert.pb").VerifiedNameCertificate$DetailsSpec,
        t.details,
      );
      return { cert: t, details: n };
    }
    ((l.extractCertificateDetailsParams = u), (l.getParsedProtoObjects = c));
  },
  98,
);
