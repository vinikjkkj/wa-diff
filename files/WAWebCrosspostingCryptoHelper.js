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
    async function d(t, n) {
      var r = await o("WAWebX509Utils").extractCertificates(
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
        await p({
          clientPrivateKey: new Uint8Array(n.privateKey),
          clientPublicKey: new Uint8Array(n.publicKey),
          dummyCiphertext: t.purposeDummyCipherText,
          dummyNonce: t.purposeDummyNonce,
          outputLength: o("WAWebCrossposting.flow").SHARED_KEY_LENGTH,
          serverPublicEK: t.purposePublicEK,
          serverPublicIK: t.purposePublicIK,
        }));
    }
    async function m(e) {
      var t = e.clientPrivateKey,
        n = e.clientPublicKey,
        a = e.keyType,
        i = e.outputLength,
        l = e.serverPublicEK,
        s = e.serverPublicIK,
        c = _(l, t),
        d = _(s, t),
        m = c.length + d.length + l.length + n.length,
        p = new Uint8Array(m),
        f = 0;
      (p.set(c, f),
        (f += c.length),
        p.set(d, f),
        (f += d.length),
        p.set(l, f),
        (f += l.length),
        p.set(n, f));
      var g = u(o("WAWebCrossposting.flow").HKDF_INFO),
        h = new Uint8Array(await o("WACryptoHkdf").extractAndExpand(p, g, i));
      if (a === o("WAWebCrossposting.flow").SharedKey.ClientKey)
        return h.slice(0, i / 2);
      if (a === o("WAWebCrossposting.flow").SharedKey.ServerKey)
        return h.slice(i / 2, i);
      throw r("err")("Invalid key type");
    }
    async function p(e) {
      var t = e.clientPrivateKey,
        n = e.clientPublicKey,
        a = e.dummyCiphertext,
        i = e.dummyNonce,
        l = e.outputLength,
        s = e.serverPublicEK,
        c = e.serverPublicIK,
        d = await m({
          clientPrivateKey: t,
          clientPublicKey: n,
          keyType: o("WAWebCrossposting.flow").SharedKey.ServerKey,
          outputLength: l,
          serverPublicEK: s,
          serverPublicIK: c,
        }),
        p = o("WACryptoPrimitives").secretbox.open(a, i, d),
        _ = u(o("WABase64").encodeB64UrlSafe(n));
      return p != null && r("WATypedArraysEqual")(_, p);
    }
    function _(e, t) {
      return o("WACryptoPrimitives").scalarMult(t, e);
    }
    async function f(e) {
      var t = e.clientPrivateKey,
        n = e.clientPublicKey,
        r = e.nonce,
        a = e.outputLength,
        i = e.plaintext,
        l = e.serverPublicEK,
        u = e.serverPublicIK,
        d = await m({
          clientPrivateKey: t,
          clientPublicKey: n,
          keyType: o("WAWebCrossposting.flow").SharedKey.ClientKey,
          outputLength: a,
          serverPublicEK: l,
          serverPublicIK: u,
        }),
        p = o("WACryptoPrimitives").secretbox(i, r, d),
        _ = 16,
        f = p.slice(0, _),
        g = p.slice(_),
        h = c([g, f]),
        y = s(
          o("WAWebCrossposting.flow").PurposeEncryptionVersionBytesLength,
          o("WAWebCrossposting.flow").PurposeEncryptionVersion.V1,
        );
      return c([y, n, r, h]);
    }
    ((l.combineUint8Arrays = c),
      (l.validatePurposeEncryptionParams = d),
      (l.forwardSecrecyEncrypt = f));
  },
  98,
);
