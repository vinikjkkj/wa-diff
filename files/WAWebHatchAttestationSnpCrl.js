__d(
  "WAWebHatchAttestationSnpCrl",
  [
    "WAWebHatchAttestationAmdArkRoots",
    "WAWebHatchAttestationBytes",
    "WAWebHatchAttestationCrypto",
    "WAWebHatchAttestationErrors",
    "WAWebHatchAttestationSnpCrlProfile",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n) {
      var r;
      if (t.length === 0)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "CRL is missing",
        );
      var a = await s(),
        i;
      try {
        i = o("WAWebHatchAttestationCrypto").parseDerCertificate(
          a,
          o("WAWebHatchAttestationSnpCrlProfile").decodeSinglePemBlock(
            e,
            "CERTIFICATE",
          ),
        );
      } catch (e) {
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "failed to parse ASK PEM: " +
            o("WAWebHatchAttestationErrors").errorMessage(e),
        );
      }
      var l = o("WAWebHatchAttestationSnpCrlProfile").parseCrl(a, t);
      (o("WAWebHatchAttestationSnpCrlProfile").validateCrlSignatureAlgorithm(l),
        o("WAWebHatchAttestationSnpCrlProfile").validateCrlExtensions(l));
      var p = u(a, i, l);
      (await c(l, p), d(l, n));
      var _ = m(i.serialNumber.valueBlock.valueHex),
        f = ((r = l.revokedCertificates) != null ? r : []).some(function (e) {
          return o("WAWebHatchAttestationBytes").bytesEqual(
            _,
            m(e.userCertificate.valueBlock.valueHex),
          );
        });
      if (f)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCertificateRevoked",
          "AMD ASK certificate is revoked",
        );
    }
    async function s() {
      try {
        return (
          o("WAWebHatchAttestationCrypto").assertWebCryptoAvailable(),
          await o("WAWebHatchAttestationCrypto").loadHatchAttestationPki()
        );
      } catch (e) {
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "failed to initialize CRL verification: " +
            o("WAWebHatchAttestationErrors").errorMessage(e),
        );
      }
    }
    function u(e, t, n) {
      var r;
      for (var a of o("WAWebHatchAttestationAmdArkRoots").AMD_ARK_ROOTS_PEM) {
        var i = void 0;
        try {
          i = o("WAWebHatchAttestationCrypto").parseDerCertificate(
            e,
            o("WAWebHatchAttestationBytes").pemToDer(a.pem),
          );
        } catch (e) {
          r =
            a.name +
            " ARK parse failed: " +
            o("WAWebHatchAttestationErrors").errorMessage(e);
          continue;
        }
        if (t.issuer.isEqual(i.subject) && n.issuer.isEqual(i.subject))
          return { name: a.name, certificate: i };
      }
      var l = r === void 0 ? "" : "; last ARK error: " + r;
      throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
        "SnpCrlInvalid",
        "CRL and ASK issuers do not match a trusted AMD ARK" + l,
      );
    }
    async function c(e, t) {
      var n = !1;
      try {
        n = await e.verify({ issuerCertificate: t.certificate });
      } catch (e) {
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          t.name +
            " CRL signature verification failed: " +
            o("WAWebHatchAttestationErrors").errorMessage(e),
        );
      }
      if (!n)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "CRL signature does not verify",
        );
    }
    function d(e, t) {
      var n;
      if (!Number.isSafeInteger(t) || t < 0)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "verification time must be a non-negative safe-integer Unix millisecond value",
        );
      var r = e.thisUpdate.value.getTime();
      if (!Number.isFinite(r))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "CRL has an invalid thisUpdate time",
        );
      if (t < r)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "CRL is not yet valid",
        );
      var a = (n = e.nextUpdate) == null ? void 0 : n.value.getTime();
      if (a == null)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "CRL is missing its nextUpdate time",
        );
      if (!Number.isFinite(a))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "CRL has an invalid nextUpdate time",
        );
      if (t >= a)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCrlInvalid",
          "CRL is expired",
        );
    }
    function m(e) {
      return e == null ? new Uint8Array(0) : new Uint8Array(e);
    }
    l.verifyCrlAt = e;
  },
  98,
);
