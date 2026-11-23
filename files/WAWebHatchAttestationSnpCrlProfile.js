__d(
  "WAWebHatchAttestationSnpCrlProfile",
  [
    "WAWebHatchAttestationBytes",
    "WAWebHatchAttestationCrypto",
    "WAWebHatchAttestationDer",
    "WAWebHatchAttestationErrors",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
        "304106092a864886f70d01010a3034a00f300d06096086480165030402020500a11c301a06092a864886f70d010108300d06096086480165030402020500a203020130",
      s = "2.5.29.27",
      u = "2.5.29.28",
      c = "2.5.29.29";
    function d(e, t) {
      var n = t;
      try {
        var r = new TextDecoder().decode(t).trimStart();
        return (
          r.startsWith("-----BEGIN ") && (n = _(t, "X509 CRL")),
          o("WAWebHatchAttestationDer").assertDistinguishedEncoding(n, {
            booleansDefaultToFalse: !0,
          }),
          new e.CertificateRevocationList({
            schema: o("WAWebHatchAttestationCrypto").decodeExactDer(e, n),
          })
        );
      } catch (e) {
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "failed to parse CRL PEM or DER: " +
            o("WAWebHatchAttestationErrors").errorMessage(e),
        );
      }
    }
    function m(t) {
      var n, r;
      try {
        ((n = f(t.signature)), (r = f(t.signatureAlgorithm)));
      } catch (e) {
        throw g();
      }
      if (n !== r)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "CRL inner and outer signature algorithms differ",
        );
      if (r !== e) throw g();
    }
    function p(e) {
      for (var t of (n =
        (r = e.crlExtensions) == null ? void 0 : r.extensions) != null
        ? n
        : []) {
        var n, r;
        if (t.extnID === s)
          throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
            "SnpCrlInvalid",
            "delta CRLs are not supported",
          );
        if (t.extnID === u)
          throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
            "SnpCrlInvalid",
            "scoped or indirect CRLs are not supported",
          );
        if (t.critical)
          throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
            "SnpCrlInvalid",
            "unsupported critical CRL extension " + t.extnID,
          );
      }
      for (var a of (i = e.revokedCertificates) != null ? i : []) {
        var i;
        for (var l of (d =
          (m = a.crlEntryExtensions) == null ? void 0 : m.extensions) != null
          ? d
          : []) {
          var d, m;
          if (l.extnID === c)
            throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
              "SnpCrlInvalid",
              "indirect CRL entries are not supported",
            );
          if (l.critical)
            throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
              "SnpCrlInvalid",
              "unsupported critical CRL entry extension " + l.extnID,
            );
        }
      }
    }
    function _(e, t) {
      var n,
        a = new TextDecoder("utf-8", { fatal: !0 }).decode(e),
        i = new RegExp(
          "^\\s*-----BEGIN " +
            t +
            "-----([A-Za-z0-9+/=\\s]+)-----END " +
            t +
            "-----\\s*$",
        ).exec(a);
      if (i == null) throw r("err")("expected exactly one " + t + " PEM block");
      return o("WAWebHatchAttestationBytes").base64ToBytes(
        ((n = i[1]) != null ? n : "").replace(/\s+/g, ""),
      );
    }
    function f(e) {
      return o("WAWebHatchAttestationBytes").bytesToHex(
        new Uint8Array(e.toSchema().toBER(!1)),
      );
    }
    function g() {
      return new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
        "SnpCrlInvalid",
        "CRL signature is not RSA-PSS SHA-384 with a 48-byte salt",
      );
    }
    ((l.parseCrl = d),
      (l.validateCrlSignatureAlgorithm = m),
      (l.validateCrlExtensions = p),
      (l.decodeSinglePemBlock = _));
  },
  98,
);
