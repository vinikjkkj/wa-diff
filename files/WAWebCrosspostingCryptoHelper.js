__d(
  "WAWebCrosspostingCryptoHelper",
  [
    "WABase64",
    "WACryptoHkdf",
    "WACryptoPrimitives",
    "WALogger",
    "WATypedArraysEqual",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebCrossposting.flow",
    "WAWebX509Utils",
    "asyncToGeneratorRuntime",
    "err",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n = new ArrayBuffer(e),
        r = new DataView(n);
      r.setUint32(0, t, !1);
      var o = new Uint8Array(n);
      return o;
    }
    function u(e) {
      for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++)
        t[n] = e.charCodeAt(n);
      return t;
    }
    function c(e) {
      var t = r("sumBy")(e, function (e) {
          return e.length;
        }),
        n = new Uint8Array(t),
        o = 0;
      for (var a of e) (n.set(a, o), (o += a.length));
      return n;
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield o("WAWebX509Utils").extractCertificates(
            t.purposePublicIKEncCertificate,
          );
          (o("WAWebAccountLinkingCryptoUtils")
            .validateCertificateChain(r)
            .then(function (t) {
              t == null &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[crossposting] Purpose certificate chain validation failed",
                      ])),
                  )
                  .sendLogs("crossposting-purpose-cert-validation-error");
            }),
            yield f({
              clientPrivateKey: new Uint8Array(n.privateKey),
              clientPublicKey: new Uint8Array(n.publicKey),
              dummyCiphertext: t.purposeDummyCipherText,
              dummyNonce: t.purposeDummyNonce,
              outputLength: o("WAWebCrossposting.flow").SHARED_KEY_LENGTH,
              serverPublicEK: t.purposePublicEK,
              serverPublicIK: t.purposePublicIK,
            }));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.clientPrivateKey,
            n = e.clientPublicKey,
            a = e.keyType,
            i = e.outputLength,
            l = e.serverPublicEK,
            s = e.serverPublicIK,
            c = h(l, t),
            d = h(s, t),
            m = c.length + d.length + l.length + n.length,
            p = new Uint8Array(m),
            _ = 0;
          (p.set(c, _),
            (_ += c.length),
            p.set(d, _),
            (_ += d.length),
            p.set(l, _),
            (_ += l.length),
            p.set(n, _));
          var f = u(o("WAWebCrossposting.flow").HKDF_INFO),
            g = new Uint8Array(
              yield o("WACryptoHkdf").extractAndExpand(p, f, i),
            );
          if (a === o("WAWebCrossposting.flow").SharedKey.ClientKey)
            return g.slice(0, i / 2);
          if (a === o("WAWebCrossposting.flow").SharedKey.ServerKey)
            return g.slice(i / 2, i);
          throw r("err")("Invalid key type");
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.clientPrivateKey,
            n = e.clientPublicKey,
            a = e.dummyCiphertext,
            i = e.dummyNonce,
            l = e.outputLength,
            s = e.serverPublicEK,
            c = e.serverPublicIK,
            d = yield p({
              clientPrivateKey: t,
              clientPublicKey: n,
              keyType: o("WAWebCrossposting.flow").SharedKey.ServerKey,
              outputLength: l,
              serverPublicEK: s,
              serverPublicIK: c,
            }),
            m = o("WACryptoPrimitives").secretbox.open(a, i, d),
            _ = u(o("WABase64").encodeB64UrlSafe(n));
          return m != null && r("WATypedArraysEqual")(_, m);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return o("WACryptoPrimitives").scalarMult(t, e);
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.clientPrivateKey,
            n = e.clientPublicKey,
            r = e.nonce,
            a = e.outputLength,
            i = e.plaintext,
            l = e.serverPublicEK,
            u = e.serverPublicIK,
            d = yield p({
              clientPrivateKey: t,
              clientPublicKey: n,
              keyType: o("WAWebCrossposting.flow").SharedKey.ClientKey,
              outputLength: a,
              serverPublicEK: l,
              serverPublicIK: u,
            }),
            m = o("WACryptoPrimitives").secretbox(i, r, d),
            _ = 16,
            f = m.slice(0, _),
            g = m.slice(_),
            h = c([g, f]),
            y = s(
              o("WAWebCrossposting.flow").PurposeEncryptionVersionBytesLength,
              o("WAWebCrossposting.flow").PurposeEncryptionVersion.V1,
            );
          return c([y, n, r, h]);
        })),
        C.apply(this, arguments)
      );
    }
    ((l.combineUint8Arrays = c),
      (l.validatePurposeEncryptionParams = d),
      (l.forwardSecrecyEncrypt = y));
  },
  98,
);
