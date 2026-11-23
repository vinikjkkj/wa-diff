__d(
  "WAWebAccountLinkingCryptoUtils",
  [
    "WABase64",
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebCryptoCurve25519CalculateSignature",
    "WAWebFeaturePkiRootCertificate",
    "WAWebRSAPkcs1v15",
    "WAWebRSAPublicKeyDer",
    "WAWebSignalProtocolStore",
    "WAWebWaffleCertificateDiagnostics",
    "WAWebX509Utils",
    "err",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = r("requireDeferred")("WAWebAccountLinkingAPI").__setRef(
        "WAWebAccountLinkingCryptoUtils",
      ),
      p = "2.5.4.3",
      _ = "Facebook Rootcanal Prod Root CA",
      f = 16,
      g = 16,
      h = 512,
      y = "#PWD_WAFFLE",
      C = 12,
      b = 1,
      v = 255;
    async function S() {
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
    async function R() {
      return self.crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        !0,
        ["encrypt", "decrypt"],
      );
    }
    async function L(t, n) {
      var a = { checkedAtMs: null, resultCode: null, validity: {} };
      try {
        return await E(t, a);
      } catch (t) {
        return (
          o(
            "WAWebWaffleCertificateDiagnostics",
          ).logCertificateValidationDiagnostic(n, a),
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Certificate Chain Validation Failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("waffle-cert-chain-validation-error"),
          null
        );
      }
    }
    async function E(e, t) {
      var n = e[0],
        a = e[1],
        i,
        l;
      if (n.subject.isEqual(a.issuer)) ((i = n), (l = a));
      else if (a.subject.isEqual(n.issuer)) ((i = a), (l = n));
      else throw r("err")("[WAFFLE] Certificates do not form a chain");
      t.validity = { leaf: l, intermediate: i };
      var s = await I(i);
      t.validity.root = s;
      var u = await o("WAWebX509Utils").validateCertificates(
        [i, l],
        [s],
        function (e) {
          t.checkedAtMs = e;
        },
      );
      if (((t.resultCode = u.resultCode), !u.result))
        throw r("err")(
          "[WAFFLE] Certificate chain validation failed (" +
            u.resultCode +
            "): " +
            u.resultMessage,
        );
      return l;
    }
    async function k(e, t) {
      t === void 0 && (t = "SHA-1");
      var n = await o("WAWebX509Utils").extractCertificates(e);
      if (n.length !== 2)
        throw r("err")(
          "[WAFFLE] Payload encryption certificate chain is invalid",
        );
      var a = await L(n, { source: "unknown", role: "payload" });
      if (a == null)
        throw r("err")(
          "[WAFFLE] Payload encryption certificate validation failed",
        );
      return a.getPublicKey({
        algorithm: {
          algorithm: { name: "RSA-OAEP", hash: { name: t } },
          usages: ["encrypt"],
        },
      });
    }
    async function I(e) {
      var t = T(e.issuer);
      if (t === o("WAWebFeaturePkiRootCertificate").FeaturePkiRootCommonName) {
        var n = await o(
          "WAWebFeaturePkiRootCertificate",
        ).loadFeaturePkiRootCertificate();
        if (n == null)
          throw r("err")(
            "[WAFFLE] Feature PKI root certificate failed extraction",
          );
        return n;
      }
      return (
        t !== _ &&
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Intermediate issuer ",
                  " matches no known root, falling back to Rootcanal",
                ])),
              t != null ? t : "missing",
            )
            .sendLogs("waffle-unknown-cert-issuer"),
        D(o("WAWebAccountLinkingConstants").ProdRootCertificatePem)
      );
    }
    function T(e) {
      var t;
      return (t = e.typesAndValues.find(function (e) {
        var t = e.type;
        return t === p;
      })) == null
        ? void 0
        : t.value.valueBlock.value;
    }
    async function D(e) {
      var t = "-----BEGIN CERTIFICATE-----",
        n = "-----END CERTIFICATE-----",
        a =
          t +
          `
` +
          e +
          `
` +
          n,
        i = await o("WAWebX509Utils").extractCertificates(a);
      if (i.length !== 1)
        throw r("err")("[WAFFLE] Root certificate failed extraction");
      return i[0];
    }
    async function x(e) {
      var t = new TextEncoder(),
        n = t.encode(e),
        r = self.crypto.getRandomValues(new Uint8Array(12)),
        o = await R(),
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
    async function $(e, t, n, r) {
      var o = new Uint8Array(t.length + r.length);
      (o.set(t), o.set(r, t.length));
      var a = await self.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: n, length: 256 },
        e,
        o,
      );
      return a;
    }
    async function P(e, t) {
      return self.crypto.subtle.encrypt(
        { name: "RSA-OAEP", padding: "OAEP" },
        e,
        t,
      );
    }
    async function N(e, t) {
      return self.crypto.subtle.decrypt(
        { name: "RSA-OAEP", padding: "OAEP" },
        e,
        t.slice(),
      );
    }
    async function M(e) {
      var t = await self.crypto.subtle.exportKey("spki", e),
        n = new Uint8Array(t),
        r = btoa(
          Array.from(n, function (e) {
            return String.fromCharCode(e);
          }).join(""),
        );
      return (
        `-----BEGIN PUBLIC KEY-----
` +
        r +
        `
-----END PUBLIC KEY-----
`
      );
    }
    async function w(e, t, n) {
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
    async function A(e, t) {
      var n = await w(e, !1, ["encrypt"]),
        r = await w(t, !0, ["decrypt"]);
      return { publicKey: n, privateKey: r };
    }
    async function F(e) {
      var t = await self.crypto.subtle.exportKey("raw", e);
      return new Uint8Array(t);
    }
    async function O(e, t, n, a, i) {
      try {
        var l = await W({ data: n, key: t, nonce: a, privateKey: e, tag: i });
        return JSON.parse(l);
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
    async function B(e) {
      var t = e.data,
        n = e.key,
        a = e.nonce,
        i = e.privateKey,
        l = e.tag;
      try {
        return await W({ data: t, key: n, nonce: a, privateKey: i, tag: l });
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Failed to decrypt RSA encrypted data",
                ])),
            )
            .catching(e instanceof Error ? e : r("err")(String(e))),
          e
        );
      }
    }
    async function W(e) {
      var t = e.data,
        n = e.key,
        o = e.nonce,
        a = e.privateKey,
        i = e.tag,
        l = await N(a, n),
        s = await q(l),
        u = await $(s, t, o, i),
        c = new TextDecoder("utf-8").decode(u),
        d = JSON.parse(c),
        m = d.data;
      if (typeof m != "string")
        throw r("err")("[WAFFLE] Decrypted RSA payload data is not a string");
      return m;
    }
    async function q(e) {
      var t = await self.crypto.subtle.importKey("raw", e, "AES-GCM", !0, [
        "encrypt",
        "decrypt",
      ]);
      return t;
    }
    async function U(e, t) {
      var n = t;
      if (n == null) {
        var o = await m.load(),
          a = o.fetchValidCertificate,
          i = await a();
        if (i == null) throw r("err")("[WAFFLE] fetchValidCertificate failed");
        n = i.encryptionKey;
      }
      var l = await x(JSON.stringify(e)),
        s = l.cipherText,
        u = l.iv,
        c = l.key,
        d = l.tag,
        p = await F(c),
        _ = await P(n, p);
      return { tag: d, nonce: u, cipherText: s, encryptedKey: _ };
    }
    async function V(e, t, n) {
      var a = await o("WAWebRSAPublicKeyDer").getRSAPublicKeyDer(t),
        i = new Uint8Array(g),
        l = await R(),
        s = await self.crypto.subtle.encrypt(
          { name: "AES-GCM", additionalData: a, iv: i, tagLength: f * 8 },
          l,
          new TextEncoder().encode(JSON.stringify(e)),
        ),
        u = new Uint8Array(s),
        c = await F(l),
        d = new Uint8Array(
          await self.crypto.subtle.encrypt({ name: "RSA-OAEP" }, t, c),
        );
      if (d.length !== h)
        throw r("err")(
          "[WAFFLE] PKI V2 needs a 4096-bit payload key, got a " +
            d.length * 8 +
            "-bit wrap",
        );
      return {
        cipherText: u.slice(0, -f),
        encryptedKey: d,
        keyId: n,
        tag: u.slice(-f),
      };
    }
    async function H(e, t) {
      var n = t;
      if (n == null) {
        var o = await m.load(),
          a = o.fetchValidCertificate;
        n = await a();
      }
      if (n == null) throw r("err")("[WAFFLE] fetchValidCertificate failed");
      var i = n,
        l = i.encryptionKey,
        s = i.payloadEncryptionKeyV2,
        u = i.payloadKeyId;
      return u == null || s == null
        ? { params: await U(e, l), version: 1 }
        : { params: await V(e, s, u), version: 2 };
    }
    var G = 1,
      z = 2,
      j = "rsa2048",
      K = "rsa4096";
    function Q(e) {
      if (e.version === 2) {
        var t = e.params;
        return JSON.stringify({
          algorithm: K,
          auth_tag: o("WABase64").encodeB64(t.tag),
          encrypted_data: o("WABase64").encodeB64(t.cipherText),
          encrypted_key: o("WABase64").encodeB64(t.encryptedKey),
          key_id: t.keyId,
          v: z,
        });
      }
      var n = e.params;
      return JSON.stringify({
        algorithm: j,
        auth_tag: o("WABase64").encodeB64(n.tag),
        encrypted_data: o("WABase64").encodeB64(n.cipherText),
        encrypted_key: o("WABase64").encodeB64(n.encryptedKey),
        nonce: o("WABase64").encodeB64(n.nonce),
        v: G,
      });
    }
    async function X(e, t, n) {
      var r = new TextEncoder(),
        a = r.encode(e),
        i = self.crypto.getRandomValues(new Uint8Array(12)),
        l = await R(),
        s = await self.crypto.subtle.encrypt(
          { name: "AES-GCM", iv: i, length: 256 },
          l,
          a,
        ),
        u = new Uint8Array(s),
        c = u.slice(-16),
        d = u.slice(0, -16),
        m = await F(l),
        p = await o("WAWebRSAPkcs1v15").rsaPkcs1v15Encrypt(t, m),
        _ = p.length,
        f = 16 + _ + 16 + d.length,
        g = new Uint8Array(f),
        h = 0,
        y = new DataView(g.buffer);
      ((g[h++] = 1),
        (g[h++] = n % 256),
        g.set(i, h),
        (h += 12),
        y.setUint16(h, _, !0),
        (h += 2),
        g.set(p, h),
        (h += _),
        g.set(c, h),
        (h += 16),
        g.set(d, h));
      var C = o("WABase64").encodeB64UrlSafe(g),
        b = Math.floor(Date.now() / 1e3);
      return "#PWD_WA:11:" + b + ":" + C;
    }
    async function Y(e, t, n) {
      if (!Number.isInteger(n) || n < 0 || n > v)
        throw r("err")(
          "[WAFFLE] password key_id " +
            n +
            " does not fit the CSPE Format 1 single-byte field",
        );
      var a = new TextEncoder(),
        i = Math.floor(Date.now() / 1e3),
        l = a.encode(String(i)),
        s = new Uint8Array(g),
        u = await R(),
        c = await self.crypto.subtle.encrypt(
          { name: "AES-GCM", additionalData: l, iv: s, tagLength: f * 8 },
          u,
          a.encode(e),
        ),
        d = new Uint8Array(c),
        m = d.slice(-f),
        p = d.slice(0, -f),
        _ = await F(u),
        h = new Uint8Array(
          await self.crypto.subtle.encrypt({ name: "RSA-OAEP" }, t, _),
        ),
        b = J(n, h, m, p);
      return y + ":" + C + ":" + i + ":" + o("WABase64").encodeB64UrlSafe(b);
    }
    function J(e, t, n, r) {
      var o = t.length,
        a = new Uint8Array(4 + o + f + r.length),
        i = new DataView(a.buffer),
        l = 0;
      return (
        (a[l++] = b),
        (a[l++] = e),
        i.setUint16(l, o, !0),
        (l += 2),
        a.set(t, l),
        (l += o),
        a.set(n, l),
        (l += f),
        a.set(r, l),
        a
      );
    }
    async function Z(e) {
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
    async function ee(e, t) {
      if ((t === void 0 && (t = "SHA-1"), e.length === 0))
        throw r("err")("Empty PEM string");
      var n = "-----BEGIN PUBLIC KEY-----",
        o = "-----END PUBLIC KEY-----",
        a = e;
      (e.includes(n) &&
        (a = e.substring(e.indexOf(n) + n.length, e.indexOf(o))),
        (a = a.replace(/\s/g, "")));
      for (
        var i = atob(a), l = new Uint8Array(i.length), s = 0;
        s < i.length;
        s++
      )
        l[s] = i.charCodeAt(s);
      return self.crypto.subtle.importKey(
        "spki",
        l,
        { name: "RSA-OAEP", hash: t },
        !0,
        ["encrypt"],
      );
    }
    ((l.generateRSAKeys = S),
      (l.generateAESKey = R),
      (l.validateCertificateChain = L),
      (l.importPayloadEncryptionKey = k),
      (l.cryptoKeyToPem = M),
      (l.convertTestKeys = A),
      (l.decryptRSAEncryptedPayload = O),
      (l.decryptRSAEncryptedData = B),
      (l.wrapPayloadWithRSAAESEncryption = U),
      (l.wrapPayloadWithRSAAESEncryptionV2 = V),
      (l.wrapWafflePayload = H),
      (l.WAFFLE_AUTH_ENVELOPE_VERSION_V1 = G),
      (l.WAFFLE_AUTH_ENVELOPE_VERSION_V2 = z),
      (l.serializeWaffleEncryptedEnvelope = Q),
      (l.encryptPassword = X),
      (l.encryptPasswordWithOaep = Y),
      (l.computeIdSign = Z),
      (l.importPasswordPublicKey = ee));
  },
  98,
);
