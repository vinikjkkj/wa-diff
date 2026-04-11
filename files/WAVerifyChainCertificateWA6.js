__d(
  "WAVerifyChainCertificateWA6",
  [
    "WACert.pb",
    "WACryptoUtils",
    "WAHex",
    "WALogger",
    "WAResultOrError",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSignatures",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = "142375574d0a587166aae71ebe516437c4a28b73e3695c6ce1f7f9545da8ee6b",
      L = {
        SERIAL: 0,
        ISSUER: "WhatsAppLongTerm1",
        PUBLIC_KEY: o("WASignalKeys").serializeIdentity(
          new Uint8Array(o("WAHex").parseHex(R)),
        ),
      };
    function E(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "verifyChainCertificateWA6: extract leaf and intermediate certificate",
          ])),
      );
      var r = o("decodeProtobuf").decodeProtobuf(
          o("WACert.pb").CertChainSpec,
          t,
        ),
        a = r.intermediate,
        i = r.leaf;
      if (a == null || i == null)
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6: missing leaf and/or intermediate certificate",
              ])),
          ),
          o("WAResultOrError").makeError("missing-certificate")
        );
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "verifying intermediate certificate",
          ])),
      );
      var l = k(a);
      if (!l.success)
        return (
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6: invalid intermediate certificate",
              ])),
          ),
          o("WAResultOrError").makeError("invalid-certificate")
        );
      if (l.value.issuerSerial !== L.SERIAL)
        return (
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6 intermediate certificate was not issued by RootCA",
              ])),
          ),
          o("WAResultOrError").makeError("invalid-certificate")
        );
      if (!I(l.value, L.PUBLIC_KEY))
        return (
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6: intermediate certificate is poorly signed",
              ])),
          ),
          o("WAResultOrError").makeError("invalid-certificate")
        );
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "verifying leaf certificate",
          ])),
      );
      var y = k(i);
      if (!y.success)
        return (
          o("WALogger").ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6: invalid leaf certificate",
              ])),
          ),
          o("WAResultOrError").makeError("invalid-certificate")
        );
      if (y.value.issuerSerial !== l.value.serial)
        return (
          o("WALogger").ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6 leaf certificate was not issued by RootCA",
              ])),
          ),
          o("WAResultOrError").makeError("invalid-certificate")
        );
      var C = o("WASignalKeys").serializeIdentity(new Uint8Array(l.value.key));
      return I(y.value, C)
        ? o("WACryptoUtils").arrayBuffersEqual(y.value.key, n)
          ? o("WAResultOrError").makeResult({
              leaf: y.value,
              intermediate: l.value,
            })
          : (o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "verifyChainCertificateWA6 leafCert.key does not match handshake server.hello.static",
                ])),
            ),
            o("WAResultOrError").makeError("invalid-certificate"))
        : (o("WALogger").ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6: leaf certificate is poorly signed",
              ])),
          ),
          o("WAResultOrError").makeError("invalid-certificate"));
    }
    function k(e) {
      var t = e.details,
        n = e.signature;
      if (!t)
        return (
          o("WALogger").ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                'parseCertificateWA6 certificate is missing "details"',
              ])),
          ),
          o("WAResultOrError").makeError("invalid-certificate")
        );
      if (!n)
        return (
          o("WALogger").ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                'parseCertificateWA6 certificate is missing "signature"',
              ])),
          ),
          o("WAResultOrError").makeError("invalid-certificate")
        );
      var r = o("decodeProtobuf").decodeProtobuf(
          o("WACert.pb").CertChain$NoiseCertificate$DetailsSpec,
          t,
        ),
        a = r.issuerSerial,
        i = r.key,
        l = r.notAfter,
        s = r.notBefore,
        u = r.serial;
      if (a == null)
        return (
          o("WALogger").ERROR(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                'parseCertificateWA6 certificate is missing "issuer_serial"',
              ])),
          ),
          o("WAResultOrError").makeError("invalid-certificate")
        );
      if (u == null)
        return (
          o("WALogger").ERROR(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                'parseCertificateWA6 certificate is missing "serial"',
              ])),
          ),
          o("WAResultOrError").makeError("invalid-certificate")
        );
      if (i == null)
        return (
          o("WALogger").ERROR(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                'parseCertificateWA6 certificate is missing "key"',
              ])),
          ),
          o("WAResultOrError").makeError("invalid-certificate")
        );
      var c = o("WASignalOther").ensureSize(new Uint8Array(n), 64);
      return o("WAResultOrError").makeResult({
        serial: u,
        issuerSerial: a,
        key: i,
        notBefore: s,
        notAfter: l,
        details: t,
        signature: c,
      });
    }
    function I(e, t) {
      return o("WASignalSignatures").verifyMsgSignalVariant(
        t,
        new Uint8Array(e.details),
        e.signature,
      );
    }
    ((l.verifyChainCertificateWA6 = E), (l.parseCertificateWA6 = k));
  },
  98,
);
