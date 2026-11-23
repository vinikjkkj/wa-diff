__d(
  "WAWebHatchAttestationX509Path",
  [
    "WAWebHatchAttestationBytes",
    "WAWebHatchAttestationCrypto",
    "WAWebHatchAttestationErrors",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "2.5.29.15",
      s = "2.5.29.19",
      u = 4,
      c = 1,
      d = 3,
      m = 300 * 1e3;
    function p(e, t, n, r, a) {
      if (!_(e, t, "issuer", n, "subject"))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpChainInvalid",
          "VCEK issuer does not match ASK subject",
        );
      if (!_(e, n, "issuer", r, "subject"))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpChainInvalid",
          "ASK issuer does not match ARK subject",
        );
      if (
        (f("VCEK", t, a), f("ASK", n, a), f("ARK", r, a), g(e, n, "ASK") !== !0)
      )
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpChainInvalid",
          "ASK basicConstraints does not assert cA",
        );
      if (h(e, n, "ASK") === !1)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpChainInvalid",
          "ASK keyUsage does not permit keyCertSign",
        );
      if (g(e, t, "VCEK") === !0)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpChainInvalid",
          "VCEK must not be a CA certificate",
        );
    }
    function _(e, t, n, r, a) {
      try {
        return o("WAWebHatchAttestationBytes").bytesEqual(
          o("WAWebHatchAttestationCrypto").certificateTbsFieldDer(e, t, n),
          o("WAWebHatchAttestationCrypto").certificateTbsFieldDer(e, r, a),
        );
      } catch (e) {
        return !1;
      }
    }
    function f(e, t, n) {
      var r = t.notBefore.value.getTime(),
        a = t.notAfter.value.getTime();
      if (!Number.isFinite(r) || !Number.isFinite(a))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpChainInvalid",
          e + " has an invalid validity period",
        );
      if (n + m < r)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCertificateOutsideValidity",
          e + " is not yet valid",
        );
      if (n > a)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpCertificateOutsideValidity",
          e + " is expired",
        );
    }
    function g(e, t, n) {
      var r = y(t, s, n);
      if (r !== void 0)
        try {
          return new e.BasicConstraints({
            schema: o("WAWebHatchAttestationCrypto").decodeExactDer(e, r),
          }).cA;
        } catch (e) {
          throw C(n, s, e);
        }
    }
    function h(t, n, a) {
      var i,
        l = y(n, e, a);
      if (l !== void 0) {
        var s;
        try {
          var m,
            p = o("WAWebHatchAttestationCrypto").decodeExactDer(t, l),
            _ = p.idBlock,
            f = _.isConstructed,
            g = _.tagClass,
            h = _.tagNumber;
          if (g !== c || h !== d || f)
            throw r("err")("keyUsage is not a BIT STRING");
          s = new Uint8Array(
            (m = p.valueBlock.valueHex) != null ? m : new ArrayBuffer(0),
          );
        } catch (t) {
          throw C(a, e, t);
        }
        return Math.floor(((i = s[0]) != null ? i : 0) / u) % 2 === 1;
      }
    }
    function y(e, t, n) {
      var r,
        a = ((r = e.extensions) != null ? r : []).filter(function (e) {
          return e.extnID === t;
        });
      if (a.length > 1)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpChainInvalid",
          n + " has a duplicate " + t + " extension",
        );
      var i = a[0];
      return i === void 0
        ? void 0
        : new Uint8Array(i.extnValue.valueBlock.valueHex);
    }
    function C(e, t, n) {
      return new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
        "SnpChainInvalid",
        e +
          " has a malformed " +
          t +
          " extension: " +
          o("WAWebHatchAttestationErrors").errorMessage(n),
      );
    }
    ((l.MAX_NOT_BEFORE_SKEW_MS = m), (l.validateX509Path = p));
  },
  98,
);
