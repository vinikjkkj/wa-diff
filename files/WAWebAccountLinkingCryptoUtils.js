__d(
  "WAWebAccountLinkingCryptoUtils",
  [
    "WABase64",
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingConstants",
    "WAWebCryptoCurve25519CalculateSignature",
    "WAWebDirectConnectionX509",
    "WAWebRSAPkcs1v15",
    "WAWebSignalProtocolStore",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d() {
      var e = await self.crypto.subtle.generateKey(
          {
            name: "RSA-OAEP",
            hash: "SHA-1",
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
          },
          !0,
          ["encrypt", "decrypt"],
        ),
        t = e.privateKey,
        n = e.publicKey;
      return { privateKey: t, publicKey: n };
    }
    async function m() {
      return self.crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        !0,
        ["encrypt", "decrypt"],
      );
    }
    async function p(t) {
      var n = t[0],
        r = t[1],
        a,
        i;
      if (n.subject.isEqual(r.issuer)) ((a = n), (i = r));
      else if (r.subject.isEqual(n.issuer)) ((a = r), (i = n));
      else
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] Certificate Chain Validation Failed",
              ])),
          ),
          null
        );
      var l = await _(),
        s = await o("WAWebDirectConnectionX509").validateCertificates(
          [a, i],
          [l],
        );
      return s.result ? i : null;
    }
    async function _() {
      var e = "-----BEGIN CERTIFICATE-----",
        t = "-----END CERTIFICATE-----",
        n =
          e +
          `
` +
          o("WAWebAccountLinkingConstants").ProdRootCertificatePem +
          `
` +
          t,
        r = await o("WAWebDirectConnectionX509").extractCertificates(n);
      return (
        r.length !== 1 &&
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] Root certificate failed extraction",
              ])),
          ),
        r[0]
      );
    }
    async function f(e) {
      var t = new TextEncoder(),
        n = t.encode(e),
        r = self.crypto.getRandomValues(new Uint8Array(12)),
        o = await m(),
        a = await self.crypto.subtle.encrypt(
          { name: "AES-GCM", iv: r, length: 256 },
          o,
          n,
        ),
        i = new Uint8Array(a),
        l = i.slice(-16),
        s = i.slice(0, -16);
      return { key: o, cipherText: s, tag: l, iv: r };
    }
    async function g(e, t, n, r) {
      var o = new Uint8Array(t.length + r.length);
      (o.set(t), o.set(r, t.length));
      var a = await self.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: n, length: 256 },
        e,
        o,
      );
      return a;
    }
    async function h(e, t) {
      return self.crypto.subtle.encrypt(
        { name: "RSA-OAEP", padding: "OAEP" },
        e,
        t,
      );
    }
    async function y(e, t) {
      return self.crypto.subtle.decrypt(
        { name: "RSA-OAEP", padding: "OAEP" },
        e,
        t,
      );
    }
    async function C(e, t) {
      t === void 0 && (t = !1);
      var n = await self.crypto.subtle.exportKey("spki", e),
        r = new Uint8Array(n),
        o = btoa(
          Array.from(r, function (e) {
            return String.fromCharCode(e);
          }).join(""),
        );
      return t
        ? `-----BEGIN PUBLIC KEY-----
` +
            o +
            `
-----END PUBLIC KEY-----
`
        : "-----BEGIN PUBLIC KEY-----" + o + "-----END PUBLIC KEY-----";
    }
    async function b(e, t, n) {
      (t === void 0 && (t = !1), n === void 0 && (n = ["encrypt", "decrypt"]));
      var a = t ? "-----BEGIN PRIVATE KEY-----" : "-----BEGIN PUBLIC KEY-----",
        i = t ? "-----END PRIVATE KEY-----" : "-----END PUBLIC KEY-----",
        l = e;
      (e.includes(a) &&
        (l = e.substring(e.indexOf(a) + a.length, e.indexOf(i))),
        (l = l.replace(/\s/g, "")));
      try {
        for (
          var s = atob(l), c = new Uint8Array(s.length), d = 0;
          d < s.length;
          d++
        )
          c[d] = s.charCodeAt(d);
        var m = t ? "pkcs8" : "spki";
        return self.crypto.subtle.importKey(
          m,
          c,
          { name: "RSA-OAEP", hash: "SHA-1" },
          !0,
          n,
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Error converting PEM to CryptoKey",
                ])),
            )
            .catching(e instanceof Error ? e : r("err")(String(e))),
          e
        );
      }
    }
    async function v(e, t) {
      var n = await b(e, !1, ["encrypt"]),
        r = await b(t, !0, ["decrypt"]);
      return { publicKey: n, privateKey: r };
    }
    async function S(e) {
      var t = await self.crypto.subtle.exportKey("raw", e);
      return new Uint8Array(t);
    }
    async function R(e, t, n, a, i) {
      try {
        var l = await y(e, t),
          s = await L(l),
          u = await g(s, n, a, i),
          d = new TextDecoder("utf-8"),
          m = d.decode(u),
          p = JSON.parse(m),
          _ = p.data;
        return JSON.parse(_);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Failed to decrypt RSA encrypted payload",
                ])),
            )
            .catching(e instanceof Error ? e : r("err")(String(e))),
          e
        );
      }
    }
    async function L(e) {
      var t = await self.crypto.subtle.importKey("raw", e, "AES-GCM", !0, [
        "encrypt",
        "decrypt",
      ]);
      return t;
    }
    async function E(e, t) {
      var n = t;
      if (n == null) {
        var a = await o("WAWebAccountLinkingAPI").fetchValidCertificate();
        if (a == null) throw r("err")("[WAFFLE] fetchValidCertificate failed");
        n = a.encryptionKey;
      }
      var i = await f(JSON.stringify(e)),
        l = i.cipherText,
        s = i.iv,
        u = i.key,
        c = i.tag,
        d = await S(u),
        m = await h(n, d);
      return { tag: c, nonce: s, cipherText: l, encryptedKey: m };
    }
    async function k(e, t, n) {
      var r = new TextEncoder(),
        a = r.encode(e),
        i = self.crypto.getRandomValues(new Uint8Array(12)),
        l = await m(),
        s = await self.crypto.subtle.encrypt(
          { name: "AES-GCM", iv: i, length: 256 },
          l,
          a,
        ),
        u = new Uint8Array(s),
        c = u.slice(-16),
        d = u.slice(0, -16),
        p = await S(l),
        _ = await o("WAWebRSAPkcs1v15").rsaPkcs1v15Encrypt(t, p),
        f = _.length,
        g = 16 + f + 16 + d.length,
        h = new Uint8Array(g),
        y = 0,
        C = new DataView(h.buffer);
      ((h[y++] = 1),
        (h[y++] = n % 256),
        h.set(i, y),
        (y += 12),
        C.setUint16(y, f, !0),
        (y += 2),
        h.set(_, y),
        (y += f),
        h.set(c, y),
        (y += 16),
        h.set(d, y));
      var b = o("WABase64").encodeB64UrlSafe(h),
        v = Math.floor(Date.now() / 1e3);
      return "#PWD_WA:11:" + v + ":" + b;
    }
    async function I(e) {
      var t = await o("WAWebSignalProtocolStore")
        .getSignalProtocolStore()
        .getIdentityKeyPair();
      if (t == null) throw r("err")("Identity key pair not found");
      var n = { pubKey: t.pubKey.slice(1), privKey: t.privKey },
        a = new TextEncoder().encode("1539" + e),
        i = await o(
          "WAWebCryptoCurve25519CalculateSignature",
        ).calculateSignature(n, a.buffer);
      return new Uint8Array(i);
    }
    async function T(e) {
      if (e.length === 0) throw r("err")("Empty PEM string");
      var t = "-----BEGIN PUBLIC KEY-----",
        n = "-----END PUBLIC KEY-----",
        o = e;
      (e.includes(t) &&
        (o = e.substring(e.indexOf(t) + t.length, e.indexOf(n))),
        (o = o.replace(/\s/g, "")));
      for (
        var a = atob(o), i = new Uint8Array(a.length), l = 0;
        l < a.length;
        l++
      )
        i[l] = a.charCodeAt(l);
      return self.crypto.subtle.importKey(
        "spki",
        i,
        { name: "RSA-OAEP", hash: "SHA-1" },
        !0,
        ["encrypt"],
      );
    }
    ((l.generateRSAKeys = d),
      (l.generateAESKey = m),
      (l.validateCertificateChain = p),
      (l.cryptoKeyToPem = C),
      (l.convertTestKeys = v),
      (l.decryptRSAEncryptedPayload = R),
      (l.wrapPayloadWithRSAAESEncryption = E),
      (l.encryptPassword = k),
      (l.computeIdSign = I),
      (l.importPasswordPublicKey = T));
  },
  98,
);
