__d(
  "WAWebCrosspostingCryptoHelper",
  [
    "WABase64",
    "WACryptoHkdf",
    "WACryptoPrimitives",
    "WATypedArraysEqual",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebCrossposting.flow",
    "WAWebDirectConnectionX509",
    "err",
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
    async function c(e, t) {
      var n = await o("WAWebDirectConnectionX509").extractCertificates(
        e.purposePublicIKEncCertificate,
      );
      (o("WAWebAccountLinkingCryptoUtils").validateCertificateChain(n),
        await m(
          e.purposePublicIK,
          e.purposePublicEK,
          new Uint8Array(t.publicKey),
          new Uint8Array(t.privateKey),
          o("WAWebCrossposting.flow").SHARED_KEY_LENGTH,
          e.purposeDummyCipherText,
          e.purposeDummyNonce,
        ));
    }
    async function d(e, t, n, a, i, l) {
      var u = p(t, a),
        c = p(e, a),
        d = u.length + c.length + t.length + n.length,
        m = new Uint8Array(d),
        _ = 0;
      (m.set(u, _),
        (_ += u.length),
        m.set(c, _),
        (_ += c.length),
        m.set(t, _),
        (_ += t.length),
        m.set(n, _));
      var f = s(o("WAWebCrossposting.flow").HKDF_INFO),
        g = new Uint8Array(await o("WACryptoHkdf").extractAndExpand(m, f, i));
      if (l === o("WAWebCrossposting.flow").SharedKey.ClientKey)
        return g.slice(0, i / 2);
      if (l === o("WAWebCrossposting.flow").SharedKey.ServerKey)
        return g.slice(i / 2, i);
      throw r("err")("Invalid key type");
    }
    async function m(e, t, n, a, i, l, u) {
      var c = await d(
          e,
          t,
          n,
          a,
          i,
          o("WAWebCrossposting.flow").SharedKey.ServerKey,
        ),
        m = o("WACryptoPrimitives").secretbox.open(l, u, c),
        p = s(o("WABase64").encodeB64UrlSafe(n));
      return m != null && r("WATypedArraysEqual")(p, m);
    }
    function p(e, t) {
      return o("WACryptoPrimitives").scalarMult(t, e);
    }
    async function _(t) {
      var n = t.clientPrivateKey,
        r = t.clientPublicKey,
        a = t.nonce,
        i = t.outputLength,
        l = t.plaintext,
        s = t.serverPublicEK,
        c = t.serverPublicIK,
        m = await d(
          c,
          s,
          r,
          n,
          i,
          o("WAWebCrossposting.flow").SharedKey.ClientKey,
        ),
        p = o("WACryptoPrimitives").secretbox(l, a, m),
        _ = 16,
        f = p.slice(0, _),
        g = p.slice(_),
        h = u([g, f]),
        y = e(
          o("WAWebCrossposting.flow").PurposeEncryptionVersionBytesLength,
          o("WAWebCrossposting.flow").PurposeEncryptionVersion.V1,
        );
      return u([y, r, a, h]);
    }
    ((l.combineUint8Arrays = u),
      (l.validatePurposeEncryptionParams = c),
      (l.forwardSecrecyEncrypt = _));
  },
  98,
);
