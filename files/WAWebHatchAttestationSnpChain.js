__d(
  "WAWebHatchAttestationSnpChain",
  [
    "WAWebHatchAttestationAmdArkRoots",
    "WAWebHatchAttestationBytes",
    "WAWebHatchAttestationCrypto",
    "WAWebHatchAttestationErrors",
    "WAWebHatchAttestationX509Path",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "1.2.840.113549.1.1.10",
      s = 672,
      u = 48;
    async function c(e, t, n, r) {
      var a, i;
      if (!Number.isSafeInteger(r) || r < 0)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpChainInvalid",
          "verification time must be a non-negative safe-integer Unix millisecond value",
        );
      var l = await d(),
        s = m(l, t, "VCEK"),
        u = m(l, n, "ASK"),
        c = await Promise.all(
          o("WAWebHatchAttestationAmdArkRoots").AMD_ARK_ROOTS_PEM.map(
            function (t) {
              return p(l, t, u, s, e);
            },
          ),
        ),
        _ = c.find(function (e) {
          return e.ark != null;
        });
      if ((_ == null ? void 0 : _.ark) != null) {
        o("WAWebHatchAttestationX509Path").validateX509Path(l, s, u, _.ark, r);
        return;
      }
      var f =
        (a = (i = c[c.length - 1]) == null ? void 0 : i.failure) != null
          ? a
          : "no AMD roots available";
      throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
        "SnpChainInvalid",
        "SNP chain verification failed for all chip families: " + f,
      );
    }
    async function d() {
      try {
        return (
          o("WAWebHatchAttestationCrypto").assertWebCryptoAvailable(),
          await o("WAWebHatchAttestationCrypto").loadHatchAttestationPki()
        );
      } catch (e) {
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpChainInvalid",
          "failed to initialize certificate verification: " +
            o("WAWebHatchAttestationErrors").errorMessage(e),
        );
      }
    }
    function m(e, t, n) {
      try {
        return o("WAWebHatchAttestationCrypto").parseDerCertificate(
          e,
          o("WAWebHatchAttestationBytes").pemToDer(t),
        );
      } catch (e) {
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpChainInvalid",
          "invalid " +
            n +
            " PEM: " +
            o("WAWebHatchAttestationErrors").errorMessage(e),
        );
      }
    }
    async function p(e, t, n, r, a) {
      var i;
      try {
        i = o("WAWebHatchAttestationCrypto").parseDerCertificate(
          e,
          o("WAWebHatchAttestationBytes").pemToDer(t.pem),
        );
      } catch (e) {
        return {
          ark: null,
          failure:
            t.name +
            ": invalid ARK: " +
            o("WAWebHatchAttestationErrors").errorMessage(e),
        };
      }
      var l = await _(e, i, n, r, a);
      return l == null
        ? { ark: i, failure: null }
        : { ark: null, failure: t.name + ": " + l };
    }
    async function _(e, t, n, r, o) {
      return (await f(t, t))
        ? (await f(n, t))
          ? (await f(r, n))
            ? (await g(e, r, o))
              ? null
              : "VCEK does not sign the attestation report"
            : "ASK does not sign VCEK"
          : "ARK does not sign ASK"
        : "ARK is not self-signed";
    }
    async function f(t, n) {
      if (t.signatureAlgorithm.algorithmId !== e) return !1;
      try {
        return await t.verify(n);
      } catch (e) {
        return !1;
      }
    }
    async function g(e, t, n) {
      var r;
      try {
        r = o("WAWebHatchAttestationCrypto").certificateTbsFieldDer(
          e,
          t,
          "subjectPublicKeyInfo",
        );
      } catch (e) {
        return !1;
      }
      var a = new Uint8Array(2 * u);
      return (
        a.set(h(n.signature.r), 0),
        a.set(h(n.signature.s), u),
        o("WAWebHatchAttestationCrypto").verifyEcdsaRaw(
          r,
          n.raw.subarray(0, s),
          a,
          "P-384",
          "SHA-384",
        )
      );
    }
    function h(e) {
      for (var t = new Uint8Array(u), n = 0; n < u; n++) {
        var r;
        t[n] = (r = e[u - 1 - n]) != null ? r : 0;
      }
      return t;
    }
    l.verifyChain = c;
  },
  98,
);
