__d(
  "WAWebCrosspostingCryptoHelper",
  [
    "WABase64",
    "WACryptoHkdf",
    "WACryptoPrimitives",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebCrossposting.flow",
    "WAWebDirectConnectionX509",
    "asyncToGeneratorRuntime",
    "err",
    "lodash",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = new ArrayBuffer(e),
        r = new DataView(n);
      r.setUint32(0, t, !1);
      var o = new Uint8Array(n);
      return o;
    }
    function s(e) {
      for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++)
        t[n] = e.charCodeAt(n);
      return t;
    }
    function u(e) {
      var t = r("sumBy")(e, function (e) {
          return e.length;
        }),
        n = new Uint8Array(t),
        o = 0;
      for (var a of e) (n.set(a, o), (o += a.length));
      return n;
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebDirectConnectionX509").extractCertificates(
            e.purposePublicIKEncCertificate,
          );
          (o("WAWebAccountLinkingCryptoUtils").validateCertificateChain(n),
            yield _(
              e.purposePublicIK,
              e.purposePublicEK,
              new Uint8Array(t.publicKey),
              new Uint8Array(t.privateKey),
              o("WAWebCrossposting.flow").SHARED_KEY_LENGTH,
              e.purposeDummyCipherText,
              e.purposeDummyNonce,
            ));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n, r, o, a) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            var u = g(t, a),
              c = g(e, a),
              d = u.length + c.length + t.length + n.length,
              m = new Uint8Array(d),
              p = 0;
            (m.set(u, p),
              (p += u.length),
              m.set(c, p),
              (p += c.length),
              m.set(t, p),
              (p += t.length),
              m.set(n, p));
            var _ = s(o("WAWebCrossposting.flow").HKDF_INFO),
              f = new Uint8Array(
                yield o("WACryptoHkdf").extractAndExpand(m, _, i),
              );
            if (l === o("WAWebCrossposting.flow").SharedKey.ClientKey)
              return f.slice(0, i / 2);
            if (l === o("WAWebCrossposting.flow").SharedKey.ServerKey)
              return f.slice(i / 2, i);
            throw r("err")("Invalid key type");
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r, o, a, i) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, u) {
            var c = yield m(
                e,
                t,
                n,
                a,
                i,
                o("WAWebCrossposting.flow").SharedKey.ServerKey,
              ),
              d = o("WACryptoPrimitives").secretbox.open(l, u, c),
              p = s(o("WABase64").encodeB64UrlSafe(n)),
              _ = r("lodash").isEqual(p, d);
            return _;
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return o("WACryptoPrimitives").scalarMult(t, e);
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.clientPrivateKey,
            r = t.clientPublicKey,
            a = t.nonce,
            i = t.outputLength,
            l = t.plaintext,
            s = t.serverPublicEK,
            c = t.serverPublicIK,
            d = yield m(
              c,
              s,
              r,
              n,
              i,
              o("WAWebCrossposting.flow").SharedKey.ClientKey,
            ),
            p = o("WACryptoPrimitives").secretbox(l, a, d),
            _ = 16,
            f = p.slice(0, _),
            g = p.slice(_),
            h = u([g, f]),
            y = e(
              o("WAWebCrossposting.flow").PurposeEncryptionVersionBytesLength,
              o("WAWebCrossposting.flow").PurposeEncryptionVersion.V1,
            );
          return u([y, r, a, h]);
        })),
        y.apply(this, arguments)
      );
    }
    ((l.combineUint8Arrays = u),
      (l.validatePurposeEncryptionParams = c),
      (l.forwardSecrecyEncrypt = h));
  },
  98,
);
