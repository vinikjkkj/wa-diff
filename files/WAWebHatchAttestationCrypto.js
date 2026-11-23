__d(
  "WAWebHatchAttestationCrypto",
  [
    "WACryptoPrimitives",
    "WAWebCertificateUtils",
    "WAWebHatchAttestationBytes",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s() {
      return (
        e == null &&
          (e = Promise.all([
            o("WAWebCertificateUtils").getPkiJs(),
            o("WAWebCertificateUtils").getAsn1FromBER(),
          ]).then(
            function (e) {
              var t = e[0],
                n = e[1];
              return {
                BasicConstraints: t.BasicConstraints,
                Certificate: t.Certificate,
                CertificateRevocationList: t.CertificateRevocationList,
                Extension: t.Extension,
                fromBER: n,
              };
            },
            function (t) {
              throw ((e = null), t);
            },
          )),
        e
      );
    }
    function u() {
      var e;
      if (((e = globalThis.crypto) == null ? void 0 : e.subtle) == null)
        throw r("err")("WebCrypto is unavailable in this environment");
    }
    function c(e, t) {
      var n = e.fromBER(o("WAWebHatchAttestationBytes").toArrayBuffer(t));
      if (n.offset === -1 || n.offset !== t.length)
        throw r("err")("input must contain exactly one complete DER object");
      return n.result;
    }
    var d = 3,
      m = { issuer: 2, subject: 4, subjectPublicKeyInfo: 5 };
    function p(e, t, n) {
      var o,
        a = (o = c(e, new Uint8Array(t.tbs)).valueBlock.value) != null ? o : [],
        i = a[0],
        l =
          i != null && i.idBlock.tagClass === d && i.idBlock.tagNumber === 0
            ? 1
            : 0,
        s = a[l + m[n]];
      if (s == null) throw r("err")("certificate has no " + n);
      return new Uint8Array(s.toBER(!1));
    }
    function _(e, t) {
      var n = c(e, t),
        r = v(e, n),
        o = new e.Certificate({ schema: n });
      return (r != null && (o.extensions = r), o);
    }
    var f = 1,
      g = 1,
      h = 4,
      y = 6,
      C = 16,
      b = 3;
    function v(e, t) {
      var n,
        o,
        a,
        i,
        l =
          (n = t.valueBlock.value) == null || (n = n[0]) == null
            ? void 0
            : n.valueBlock.value,
        s =
          (o =
            l == null
              ? void 0
              : l.findIndex(function (e) {
                  return e.idBlock.tagClass === d && e.idBlock.tagNumber === b;
                })) != null
            ? o
            : -1;
      if (l == null || s === -1) return null;
      var u = l.splice(s, 1),
        c = u[0],
        m = (a = c.valueBlock.value) == null ? void 0 : a[0];
      if (m == null || !L(m, C))
        throw r("err")("malformed certificate extensions");
      return ((i = m.valueBlock.value) != null ? i : []).map(function (t) {
        return S(e, t);
      });
    }
    function S(e, t) {
      var n,
        o = (n = t.valueBlock.value) != null ? n : [],
        a = o[0],
        i = o[1],
        l = o[2],
        s = o.length === 3,
        u = s ? i : null,
        c = s ? l : i;
      if (
        !L(t, C) ||
        o.length < 2 ||
        o.length > 3 ||
        a == null ||
        !L(a, y) ||
        (u != null && !L(u, g)) ||
        c == null ||
        !L(c, h) ||
        c.idBlock.isConstructed ||
        c.valueBlock.valueHex == null
      )
        throw r("err")("malformed certificate extension");
      return new e.Extension({
        critical: u != null && R(u),
        extnID: a.valueBlock.toString(),
        extnValue: c.valueBlock.valueHex,
      });
    }
    function R(e) {
      var t,
        n = new Uint8Array(
          (t = e.valueBlock.valueHex) != null ? t : new ArrayBuffer(0),
        );
      return n.length === 1 && n[0] !== 0;
    }
    function L(e, t) {
      return e.idBlock.tagClass === f && e.idBlock.tagNumber === t;
    }
    var E = new Uint8Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]),
      k = 32,
      I = 64;
    async function T(e, t, n) {
      if (e.length !== k || n.length !== I || !D(n.subarray(k))) return !1;
      try {
        return await o("WACryptoPrimitives").signDetachedVerifyAsync(t, n, e);
      } catch (e) {
        return !1;
      }
    }
    function D(e) {
      for (var t = E.length - 1; t >= 0; t--) {
        var n,
          r,
          o = (n = e[t]) != null ? n : 0,
          a = (r = E[t]) != null ? r : 0;
        if (o !== a) return o < a;
      }
      return !1;
    }
    async function x(e, t, n, r, a) {
      try {
        var i = await crypto.subtle.importKey(
          "spki",
          o("WAWebHatchAttestationBytes").toArrayBuffer(e),
          { name: "ECDSA", namedCurve: r },
          !1,
          ["verify"],
        );
        return await crypto.subtle.verify(
          { name: "ECDSA", hash: a },
          i,
          o("WAWebHatchAttestationBytes").toArrayBuffer(n),
          o("WAWebHatchAttestationBytes").toArrayBuffer(t),
        );
      } catch (e) {
        return !1;
      }
    }
    ((l.loadHatchAttestationPki = s),
      (l.assertWebCryptoAvailable = u),
      (l.decodeExactDer = c),
      (l.certificateTbsFieldDer = p),
      (l.parseDerCertificate = _),
      (l.verifyEd25519Raw = T),
      (l.verifyEcdsaRaw = x));
  },
  98,
);
